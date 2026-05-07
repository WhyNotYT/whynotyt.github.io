(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`// ---------------------------------------------------------------------------
// Bindings
// ---------------------------------------------------------------------------
struct Params {
  width:       u32,   // downscaled width
  height:      u32,   // downscaled height
  srcWidth:    u32,   // original width
  srcHeight:   u32,   // original height
  maxDisp:     u32,
  winHalf:     u32,
  crossThresh: u32,
}

@group(0) @binding(0) var<storage, read>       leftRgba:   array<u32>;
@group(0) @binding(1) var<storage, read>       rightRgba:  array<u32>;
@group(0) @binding(2) var<storage, read_write> grayLeft:   array<u32>;
@group(0) @binding(3) var<storage, read_write> grayRight:  array<u32>;
@group(0) @binding(4) var<storage, read_write> dispLeft:   array<u32>;
@group(0) @binding(5) var<storage, read_write> dispRight:  array<u32>;
@group(0) @binding(6) var<storage, read_write> checkedDisp:array<u32>;
@group(0) @binding(7) var<storage, read_write> outputDisp: array<u32>;
@group(0) @binding(8) var<uniform>             params:     Params;
// Layout: scratch[y*width*2 + x*2 + 0] = fill value (u8 stored as u32)
//         scratch[y*width*2 + x*2 + 1] = distance   (u8 stored as u32, 255=none)
@group(0) @binding(9) var<storage, read_write> fillScratch: array<u32>;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
fn idx2d(x: u32, y: u32, w: u32) -> u32 { return y * w + x; }

fn unpackGray(packed: u32) -> u32 {
  let r = f32( packed        & 0xffu);
  let g = f32((packed >> 8u) & 0xffu);
  let b = f32((packed >> 16u)& 0xffu);
  return u32(0.2126 * r + 0.7152 * g + 0.0722 * b);
}

// ---------------------------------------------------------------------------
// grayscale  –  16×16 workgroup (unchanged logic, tuned WG size)
// Combines resize (4× downscale) + RGB→grey in one pass.
// ---------------------------------------------------------------------------
@compute @workgroup_size(16, 16, 1)
fn grayscale(@builtin(global_invocation_id) gid: vec3<u32>) {
  if (gid.x >= params.width || gid.y >= params.height) { return; }
  let srcX   = gid.x * 4u;
  let srcY   = gid.y * 4u;
  let outIdx = idx2d(gid.x, gid.y, params.width);
  grayLeft [outIdx] = unpackGray(leftRgba [idx2d(srcX, srcY, params.srcWidth)]);
  grayRight[outIdx] = unpackGray(rightRgba[idx2d(srcX, srcY, params.srcWidth)]);
}

// ---------------------------------------------------------------------------
// Packed storage: each row is stored in ceil(TILE_W / 4) u32s.
//   tile_l row stride  = ceil(40  / 4) = 10 u32s  → total 16*10 = 160 u32s
//   tile_r row stride  = ceil(108 / 4) = 27 u32s  → total 16*27 = 432 u32s
//
// To read pixel (ty, tx) from tile_l:  tile_l[ty*10 + tx/4] >> ((tx%4)*8) & 0xff
// ---------------------------------------------------------------------------
const TILE_H:         u32 = 16u;   // WG_Y + 2*MAX_WIN_HALF
const TILE_W:         u32 = 40u;   // WG_X + 2*MAX_WIN_HALF
const TILE_W_R_COLS:  u32 = 108u;  // WG_X + 2*MAX_WIN_HALF + MAX_DISP, padded to mult of 4
const TILE_L_STRIDE:  u32 = 10u;   // ceil(40  / 4)
const TILE_R_STRIDE:  u32 = 27u;   // ceil(108 / 4)
const TILE_L_SIZE:    u32 = 160u;  // TILE_H * TILE_L_STRIDE
const TILE_R_SIZE:    u32 = 432u;  // TILE_H * TILE_R_STRIDE

// Note: tile access is done inline throughout the kernels using atomicOr /
// atomicLoad directly, so no helper functions are needed here.

// ---------------------------------------------------------------------------
// znccLeft  –  32×8 workgroup
//
// ---------------------------------------------------------------------------
var<workgroup> wg_tile_l:  array<atomic<u32>, 160>;  // TILE_L_SIZE = TILE_H * TILE_L_STRIDE
var<workgroup> wg_tile_r_L: array<atomic<u32>, 432>;  // TILE_R_SIZE = TILE_H * TILE_R_STRIDE

@compute @workgroup_size(32, 8, 1)
fn znccLeft(
  @builtin(global_invocation_id)   gid:  vec3<u32>,
  @builtin(local_invocation_id)    lid:  vec3<u32>,
  @builtin(workgroup_id)            wgid: vec3<u32>,
) {
  let lx     = lid.x;
  let ly     = lid.y;
  let gx     = gid.x;
  let gy     = gid.y;
  let grp_x  = wgid.x * 32u;
  let grp_y  = wgid.y * 8u;
  let width  = params.width;
  let height = params.height;
  let wh     = params.winHalf;
  let md     = params.maxDisp;
  let win    = 2u * wh + 1u;

  // --- Zero shared tiles (each thread clears a few words) ---
  for (var i = lx + ly * 32u; i < TILE_L_SIZE; i += 256u) {
    atomicStore(&wg_tile_l[i], 0u);
  }
  for (var i = lx + ly * 32u; i < TILE_R_SIZE; i += 256u) {
    atomicStore(&wg_tile_r_L[i], 0u);
  }
  workgroupBarrier();

  // --- Load left tile (OPT-C: packed u8) ---
  for (var ty = ly; ty < TILE_H; ty += 8u) {
    let sy = clamp(i32(grp_y) - i32(wh) + i32(ty), 0, i32(height) - 1);
    for (var tx = lx; tx < TILE_W; tx += 32u) {
      let sx = clamp(i32(grp_x) - i32(wh) + i32(tx), 0, i32(width) - 1);
      let val = (grayLeft[idx2d(u32(sx), u32(sy), width)] & 0xffu);
      let word  = ty * TILE_L_STRIDE + tx / 4u;
      let shift = (tx % 4u) * 8u;
      atomicOr(&wg_tile_l[word], val << shift);
    }
  }

  // --- Load right tile (wider, offset left by max_disp; OPT-C: packed u8) ---
  for (var ty = ly; ty < TILE_H; ty += 8u) {
    let sy = clamp(i32(grp_y) - i32(wh) + i32(ty), 0, i32(height) - 1);
    for (var tx = lx; tx < TILE_W_R_COLS; tx += 32u) {
      let sx = clamp(i32(grp_x) - i32(wh) - i32(md) + i32(tx), 0, i32(width) - 1);
      let val = (grayRight[idx2d(u32(sx), u32(sy), width)] & 0xffu);
      let word  = ty * TILE_R_STRIDE + tx / 4u;
      let shift = (tx % 4u) * 8u;
      atomicOr(&wg_tile_r_L[word], val << shift);
    }
  }
  workgroupBarrier();

  if (gx >= width || gy >= height) { return; }
  if (gx < wh || gx >= width  - wh ||
      gy < wh || gy >= height - wh) {
    dispLeft[idx2d(gx, gy, width)] = 0u;
    return;
  }

  let inv_win = 1.0 / f32(win * win);

  // --- Left window stats (computed once) ---
  var sum_l = 0.0;
  for (var wy = 0u; wy < win; wy++) {
    for (var wx = 0u; wx < win; wx++) {
      let word  = (ly + wy) * TILE_L_STRIDE + (lx + wx) / 4u;
      let shift = ((lx + wx) % 4u) * 8u;
      sum_l += f32((atomicLoad(&wg_tile_l[word]) >> shift) & 0xffu);
    }
  }
  let mean_l = sum_l * inv_win;

  var ssq_l = 0.0;
  for (var wy = 0u; wy < win; wy++) {
    for (var wx = 0u; wx < win; wx++) {
      let word  = (ly + wy) * TILE_L_STRIDE + (lx + wx) / 4u;
      let shift = ((lx + wx) % 4u) * 8u;
      let v = f32((atomicLoad(&wg_tile_l[word]) >> shift) & 0xffu) - mean_l;
      ssq_l += v * v;
    }
  }

  // --- OPT-B: bootstrap right-window row sums at d=0 ---
  // row_sum[wy] = sum of columns [rb0 .. rb0+win) in tile_r row (ly+wy)
  var row_sum: array<f32, 16>;  // TILE_H = 16, indexed [0..win)
  let rb0 = lx + md;
  for (var wy = 0u; wy < win; wy++) {
    var s = 0.0;
    for (var wx = 0u; wx < win; wx++) {
      let col   = rb0 + wx;
      let word  = (ly + wy) * TILE_R_STRIDE + col / 4u;
      let shift = (col % 4u) * 8u;
      s += f32((atomicLoad(&wg_tile_r_L[word]) >> shift) & 0xffu);
    }
    row_sum[wy] = s;
  }

  var best = -1.0;
  var bd   = 0i;
  let lim  = i32(min(md, u32(i32(gx) - i32(wh))));

  for (var d = 0i; d <= lim; d++) {
    let r_base = lx + md - u32(d);

    // OPT-B: slide one column left
    if (d > 0i) {
      for (var wy = 0u; wy < win; wy++) {
        // drop rightmost column of previous window
        let col_drop  = r_base + win;
        let wd = (ly + wy) * TILE_R_STRIDE + col_drop / 4u;
        let sd = (col_drop % 4u) * 8u;
        row_sum[wy] -= f32((atomicLoad(&wg_tile_r_L[wd]) >> sd) & 0xffu);
        // add new leftmost column
        let col_add   = r_base;
        let wa = (ly + wy) * TILE_R_STRIDE + col_add / 4u;
        let sa = (col_add % 4u) * 8u;
        row_sum[wy] += f32((atomicLoad(&wg_tile_r_L[wa]) >> sa) & 0xffu);
      }
    }

    var sum_r = 0.0;
    for (var wy = 0u; wy < win; wy++) { sum_r += row_sum[wy]; }
    let mean_r = sum_r * inv_win;

    var cross = 0.0;
    var ssq_r = 0.0;
    for (var wy = 0u; wy < win; wy++) {
      for (var wx = 0u; wx < win; wx++) {
        let lword  = (ly + wy) * TILE_L_STRIDE + (lx + wx) / 4u;
        let lshift = ((lx + wx) % 4u) * 8u;
        let vl = f32((atomicLoad(&wg_tile_l[lword]) >> lshift) & 0xffu) - mean_l;

        let rcol   = r_base + wx;
        let rword  = (ly + wy) * TILE_R_STRIDE + rcol / 4u;
        let rshift = (rcol % 4u) * 8u;
        let vr = f32((atomicLoad(&wg_tile_r_L[rword]) >> rshift) & 0xffu) - mean_r;

        cross += vl * vr;
        ssq_r += vr * vr;
      }
    }

    let denom = ssq_l * ssq_r;
    let score = select(-1.0, cross * inverseSqrt(denom + 1e-8), denom > 1e-8);
    if (score > best) { best = score; bd = d; }
  }

  dispLeft[idx2d(gx, gy, width)] = u32(bd);
}

// ---------------------------------------------------------------------------
// znccRight  –  32×8 workgroup, mirror of znccLeft; left window slides right
//
// ---------------------------------------------------------------------------
var<workgroup> wg_tile_r_R:  array<atomic<u32>, 160>;  // narrow right tile
var<workgroup> wg_tile_l_R:  array<atomic<u32>, 432>;  // wide left tile

@compute @workgroup_size(32, 8, 1)
fn znccRight(
  @builtin(global_invocation_id)   gid:  vec3<u32>,
  @builtin(local_invocation_id)    lid:  vec3<u32>,
  @builtin(workgroup_id)            wgid: vec3<u32>,
) {
  let lx     = lid.x;
  let ly     = lid.y;
  let gx     = gid.x;
  let gy     = gid.y;
  let grp_x  = wgid.x * 32u;
  let grp_y  = wgid.y * 8u;
  let width  = params.width;
  let height = params.height;
  let wh     = params.winHalf;
  let md     = params.maxDisp;
  let win    = 2u * wh + 1u;

  // --- Zero shared tiles ---
  for (var i = lx + ly * 32u; i < TILE_L_SIZE; i += 256u) {
    atomicStore(&wg_tile_r_R[i], 0u);
  }
  for (var i = lx + ly * 32u; i < TILE_R_SIZE; i += 256u) {
    atomicStore(&wg_tile_l_R[i], 0u);
  }
  workgroupBarrier();

  // --- Load narrow right tile ---
  for (var ty = ly; ty < TILE_H; ty += 8u) {
    let sy = clamp(i32(grp_y) - i32(wh) + i32(ty), 0, i32(height) - 1);
    for (var tx = lx; tx < TILE_W; tx += 32u) {
      let sx = clamp(i32(grp_x) - i32(wh) + i32(tx), 0, i32(width) - 1);
      let val = (grayRight[idx2d(u32(sx), u32(sy), width)] & 0xffu);
      let word  = ty * TILE_L_STRIDE + tx / 4u;
      let shift = (tx % 4u) * 8u;
      atomicOr(&wg_tile_r_R[word], val << shift);
    }
  }

  // --- Load wide left tile (extends right by max_disp) ---
  for (var ty = ly; ty < TILE_H; ty += 8u) {
    let sy = clamp(i32(grp_y) - i32(wh) + i32(ty), 0, i32(height) - 1);
    for (var tx = lx; tx < TILE_W_R_COLS; tx += 32u) {
      let sx = clamp(i32(grp_x) - i32(wh) + i32(tx), 0, i32(width) - 1);
      let val = (grayLeft[idx2d(u32(sx), u32(sy), width)] & 0xffu);
      let word  = ty * TILE_R_STRIDE + tx / 4u;
      let shift = (tx % 4u) * 8u;
      atomicOr(&wg_tile_l_R[word], val << shift);
    }
  }
  workgroupBarrier();

  if (gx >= width || gy >= height) { return; }
  if (gx < wh || gx >= width  - wh ||
      gy < wh || gy >= height - wh) {
    dispRight[idx2d(gx, gy, width)] = 0u;
    return;
  }

  let inv_win = 1.0 / f32(win * win);

  // --- Right window stats (computed once) ---
  var sum_r = 0.0;
  for (var wy = 0u; wy < win; wy++) {
    for (var wx = 0u; wx < win; wx++) {
      let word  = (ly + wy) * TILE_L_STRIDE + (lx + wx) / 4u;
      let shift = ((lx + wx) % 4u) * 8u;
      sum_r += f32((atomicLoad(&wg_tile_r_R[word]) >> shift) & 0xffu);
    }
  }
  let mean_r = sum_r * inv_win;

  var ssq_r = 0.0;
  for (var wy = 0u; wy < win; wy++) {
    for (var wx = 0u; wx < win; wx++) {
      let word  = (ly + wy) * TILE_L_STRIDE + (lx + wx) / 4u;
      let shift = ((lx + wx) % 4u) * 8u;
      let v = f32((atomicLoad(&wg_tile_r_R[word]) >> shift) & 0xffu) - mean_r;
      ssq_r += v * v;
    }
  }

  // --- OPT-B: bootstrap left-window row sums at d=0 ---
  var row_sum: array<f32, 16>;
  for (var wy = 0u; wy < win; wy++) {
    var s = 0.0;
    for (var wx = 0u; wx < win; wx++) {
      let col   = lx + wx;
      let word  = (ly + wy) * TILE_R_STRIDE + col / 4u;
      let shift = (col % 4u) * 8u;
      s += f32((atomicLoad(&wg_tile_l_R[word]) >> shift) & 0xffu);
    }
    row_sum[wy] = s;
  }

  var best = -1.0;
  var bd   = 0i;
  let lim  = i32(min(md, u32(i32(width) - 1 - (i32(gx) + i32(wh)))));

  for (var d = 0i; d <= lim; d++) {
    let l_base = lx + u32(d);

    // OPT-B: slide one column right
    if (d > 0i) {
      for (var wy = 0u; wy < win; wy++) {
        // drop leftmost column of previous window
        let col_drop  = l_base - 1u;
        let wd = (ly + wy) * TILE_R_STRIDE + col_drop / 4u;
        let sd = (col_drop % 4u) * 8u;
        row_sum[wy] -= f32((atomicLoad(&wg_tile_l_R[wd]) >> sd) & 0xffu);
        // add new rightmost column
        let col_add   = l_base + win - 1u;
        let wa = (ly + wy) * TILE_R_STRIDE + col_add / 4u;
        let sa = (col_add % 4u) * 8u;
        row_sum[wy] += f32((atomicLoad(&wg_tile_l_R[wa]) >> sa) & 0xffu);
      }
    }

    var sum_ls = 0.0;
    for (var wy = 0u; wy < win; wy++) { sum_ls += row_sum[wy]; }
    let mean_ls = sum_ls * inv_win;

    var cross  = 0.0;
    var ssq_ls = 0.0;
    for (var wy = 0u; wy < win; wy++) {
      for (var wx = 0u; wx < win; wx++) {
        let rcol   = lx + wx;
        let rword  = (ly + wy) * TILE_L_STRIDE + rcol / 4u;
        let rshift = (rcol % 4u) * 8u;
        let vr = f32((atomicLoad(&wg_tile_r_R[rword]) >> rshift) & 0xffu) - mean_r;

        let lcol   = l_base + wx;
        let lword  = (ly + wy) * TILE_R_STRIDE + lcol / 4u;
        let lshift = (lcol % 4u) * 8u;
        let vl = f32((atomicLoad(&wg_tile_l_R[lword]) >> lshift) & 0xffu) - mean_ls;

        cross  += vr * vl;
        ssq_ls += vl * vl;
      }
    }

    let denom = ssq_r * ssq_ls;
    let score = select(-1.0, cross * inverseSqrt(denom + 1e-8), denom > 1e-8);
    if (score > best) { best = score; bd = d; }
  }

  dispRight[idx2d(gx, gy, width)] = u32(bd);
}

// ---------------------------------------------------------------------------
// crossCheck  –  16×16 workgroup (memory-bound, already fast)
// ---------------------------------------------------------------------------
@compute @workgroup_size(16, 16, 1)
fn crossCheck(@builtin(global_invocation_id) gid: vec3<u32>) {
  if (gid.x >= params.width || gid.y >= params.height) { return; }
  let outIdx = idx2d(gid.x, gid.y, params.width);
  let dl     = i32(dispLeft[outIdx]);
  let xr     = i32(gid.x) - dl;
  var dr     = 0i;
  if (xr >= 0 && xr < i32(params.width)) {
    dr = i32(dispRight[idx2d(u32(xr), gid.y, params.width)]);
  }
  let diff = dl - dr;
  if (diff < -i32(params.crossThresh) || diff > i32(params.crossThresh)) {
    checkedDisp[outIdx] = 0u;
  } else {
    checkedDisp[outIdx] = u32(dl);
  }
}

// ---------------------------------------------------------------------------
// Scans left→right. Writes to fillScratch:
//   fillScratch[y*width*2 + x*2 + 0] = nearest nonzero to left  (fill value)
//   fillScratch[y*width*2 + x*2 + 1] = distance to that source  (255 = none)
// ---------------------------------------------------------------------------
@compute @workgroup_size(64, 1, 1)
fn fillPass1(@builtin(global_invocation_id) gid: vec3<u32>) {
  let y = gid.x;
  if (y >= params.height) { return; }

  let width    = params.width;
  let row_base = y * width;
  var last_val  = 0u;
  var last_dist = 255u;

  for (var x = 0u; x < width; x++) {
    let v = checkedDisp[row_base + x];
    if (v != 0u) {
      last_val  = v;
      last_dist = 0u;
    } else if (last_dist < 254u) {
      last_dist++;
    }
    let sc = (row_base + x) * 2u;
    fillScratch[sc]      = last_val;
    fillScratch[sc + 1u] = last_dist;
  }
}

// ---------------------------------------------------------------------------
//
// Scans right→left. Combines nearest-left (from fillScratch) with
// nearest-right (maintained locally) using exact distance comparison.
// Nonzero source pixels are written unchanged.
// ---------------------------------------------------------------------------
@compute @workgroup_size(64, 1, 1)
fn fillPass2(@builtin(global_invocation_id) gid: vec3<u32>) {
  let y = gid.x;
  if (y >= params.height) { return; }

  let width    = params.width;
  let row_base = y * width;
  var last_r  = 0u;
  var dist_r  = 255u;

  var x = width;
  loop {
    if (x == 0u) { break; }
    x--;

    let orig = checkedDisp[row_base + x];
    if (orig != 0u) {
      outputDisp[row_base + x] = orig;
      last_r = orig;
      dist_r = 0u;
    } else {
      let sc     = (row_base + x) * 2u;
      let lv     = fillScratch[sc];
      let dist_l = fillScratch[sc + 1u];

      var out = 0u;
      if (dist_l == 255u && dist_r == 255u) {
        out = 0u;
      } else if (dist_l == 255u) {
        out = last_r;
      } else if (dist_r == 255u) {
        out = lv;
      } else {
        out = select(last_r, lv, dist_l <= dist_r);
      }
      outputDisp[row_base + x] = out;

      if (dist_r < 254u) { dist_r++; }
    }
  }
}
`,t=9,n=65,r=8,i=4;function a(){if(!(`gpu`in navigator))throw Error(`WebGPU API is unavailable in this browser. Try Chromium 121+ or Firefox Nightly with WebGPU enabled.`);if(!window.isSecureContext)throw Error(`WebGPU requires a secure context (https or localhost).`);return navigator.gpu}function o(e,t,n=!1){return e.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,mappedAtCreation:n})}async function s(s,c){if(s.width!==c.width||s.height!==c.height)throw Error(`Input images must have the same dimensions.`);if(s.width%i!==0||s.height%i!==0)throw Error(`Image width and height must be divisible by 4.`);let l=await a().requestAdapter({powerPreference:`high-performance`});if(!l)throw Error(`No WebGPU adapter found. On Linux, ensure hardware acceleration and Vulkan are enabled in your browser.`);let u=l.info??await l.requestAdapterInfo?.()??{};console.log(`[WebGPU] adapter: ${u.description||u.device||`(unknown)`} | vendor: ${u.vendor||`—`} | arch: ${u.architecture||`—`}`);let d=l.features.has(`timestamp-query`),f=await l.requestDevice({requiredLimits:{maxStorageBuffersPerShaderStage:9},requiredFeatures:d?[`timestamp-query`]:[]}),p=s.width,m=s.height,h=Math.floor(p/i),g=Math.floor(m/i),_=h*g,v=null,y=null,b=null;d&&(v=f.createQuerySet({type:`timestamp`,count:12}),y=f.createBuffer({size:96,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),b=f.createBuffer({size:96,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}));let x=performance.now(),S=new Uint8Array(s.data),C=new Uint8Array(c.data),w=o(f,S.byteLength,!0);new Uint8Array(w.getMappedRange()).set(S),w.unmap();let T=o(f,C.byteLength,!0);new Uint8Array(T.getMappedRange()).set(C),T.unmap(),f.queue.submit([]),await f.queue.onSubmittedWorkDone();let E=performance.now()-x,ee=o(f,_*4),te=o(f,_*4),D=o(f,_*4),ne=o(f,_*4),re=o(f,_*4),O=o(f,_*4),ie=o(f,_*2*4),ae=new Uint32Array([h,g,p,m,n,Math.floor(t/2),r]),k=f.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});f.queue.writeBuffer(k,0,ae);let A=f.createShaderModule({code:e});if(A.getCompilationInfo){let e=(await A.getCompilationInfo()).messages.filter(e=>e.type===`error`);if(e.length>0){let t=e.map(e=>`  line ${e.lineNum}: ${e.message}`).join(`
`);throw Error(`WGSL compilation failed:\n${t}`)}}let j=f.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:8,visibility:GPUShaderStage.COMPUTE,buffer:{type:`uniform`}},{binding:9,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}}]}),M=f.createPipelineLayout({bindGroupLayouts:[j]}),N=f.createComputePipeline({layout:M,compute:{module:A,entryPoint:`grayscale`}}),P=f.createComputePipeline({layout:M,compute:{module:A,entryPoint:`znccLeft`}}),F=f.createComputePipeline({layout:M,compute:{module:A,entryPoint:`znccRight`}}),I=f.createComputePipeline({layout:M,compute:{module:A,entryPoint:`crossCheck`}}),L=f.createComputePipeline({layout:M,compute:{module:A,entryPoint:`fillPass1`}}),oe=f.createComputePipeline({layout:M,compute:{module:A,entryPoint:`fillPass2`}}),R=f.createBindGroup({layout:j,entries:[{binding:0,resource:{buffer:w}},{binding:1,resource:{buffer:T}},{binding:2,resource:{buffer:ee}},{binding:3,resource:{buffer:te}},{binding:4,resource:{buffer:D}},{binding:5,resource:{buffer:ne}},{binding:6,resource:{buffer:re}},{binding:7,resource:{buffer:O}},{binding:8,resource:{buffer:k}},{binding:9,resource:{buffer:ie}}]});function z(e,t,n){let r=t*2,i=v&&d?{timestampWrites:{querySet:v,beginningOfPassWriteIndex:r,endOfPassWriteIndex:r+1}}:{},a=e.beginComputePass(i);n(a),a.end()}let se=performance.now(),B=f.createCommandEncoder();z(B,0,e=>{e.setPipeline(N),e.setBindGroup(0,R),e.dispatchWorkgroups(Math.ceil(h/16),Math.ceil(g/16))}),z(B,1,e=>{e.setPipeline(P),e.setBindGroup(0,R),e.dispatchWorkgroups(Math.ceil(h/32),Math.ceil(g/8))}),z(B,2,e=>{e.setPipeline(F),e.setBindGroup(0,R),e.dispatchWorkgroups(Math.ceil(h/32),Math.ceil(g/8))}),z(B,3,e=>{e.setPipeline(I),e.setBindGroup(0,R),e.dispatchWorkgroups(Math.ceil(h/16),Math.ceil(g/16))}),z(B,4,e=>{e.setPipeline(L),e.setBindGroup(0,R),e.dispatchWorkgroups(Math.ceil(g/64))}),z(B,5,e=>{e.setPipeline(oe),e.setBindGroup(0,R),e.dispatchWorkgroups(Math.ceil(g/64))}),v&&y&&(B.resolveQuerySet(v,0,12,y,0),b&&B.copyBufferToBuffer(y,0,b,0,96));let V=f.createBuffer({size:_*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),H=f.createBuffer({size:_*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});B.copyBufferToBuffer(O,0,V,0,_*4),B.copyBufferToBuffer(D,0,H,0,_*4);let ce=performance.now();f.queue.submit([B.finish()]),await f.queue.onSubmittedWorkDone();let U=performance.now(),W=U-se,le=U-ce;await Promise.all([V.mapAsync(GPUMapMode.READ),H.mapAsync(GPUMapMode.READ),b?b.mapAsync(GPUMapMode.READ):Promise.resolve()]);let G=[,,,,,,].fill(0);if(d&&b){let e=new BigInt64Array(b.getMappedRange());for(let t=0;t<6;t++){let n=e[t*2],r=e[t*2+1];G[t]=Number(r-n)/1e6}b.unmap()}let ue=new Uint32Array(V.getMappedRange()),de=new Uint32Array(H.getMappedRange()),K=new Uint8Array(_),q=new Uint8Array(_),J=0,Y=0;for(let e=0;e<_;e++)K[e]=ue[e]&255,q[e]=de[e]&255,K[e]!==0&&J++,q[e]!==0&&Y++;V.unmap(),H.unmap();let X=E+W,fe=G.reduce((e,t)=>e+t,0),Z=[[`CPU → GPU transfer`,`${E.toFixed(6)} ms`],[`grayscale`,d?`${G[0].toFixed(6)} ms`:`n/a`],[`zncc left`,d?`${G[1].toFixed(6)} ms`:`n/a`],[`zncc right`,d?`${G[2].toFixed(6)} ms`:`n/a`],[`cross_check`,d?`${G[3].toFixed(6)} ms`:`n/a`],[`occlusion_fill pass 1`,d?`${G[4].toFixed(6)} ms`:`n/a`],[`occlusion_fill pass 2`,d?`${G[5].toFixed(6)} ms`:`n/a`],[`GPU → CPU transfer`,`${le.toFixed(6)} ms`],[`**GPU kernels total**`,d?`**${fe.toFixed(4)} ms**`:`**${W.toFixed(4)} ms** (wall)`],[`**Total**`,`**${X.toFixed(4)} ms**`]],Q=Math.max(...Z.map(([e])=>e.length)),$=Math.max(...Z.map(([,e])=>e.length)),pe=`| ${`-`.repeat(Q)} | ${`-`.repeat($)} |`,me=`| ${`Stage`.padEnd(Q)} | ${`Time`.padEnd($)} |`;console.log(`
ZNCC timing`),console.log(me),console.log(pe);for(let[e,t]of Z)console.log(`| ${e.padEnd(Q)} | ${t.padEnd($)} |`);return d||console.log(`
Note: GPU timestamp-query not supported on this device. Per-kernel times unavailable; only wall-clock totals are shown.`),{width:h,height:g,disparity:K,disparityLeftRaw:q,nonZeroCount:J,nonZeroRawLeftCount:Y,elapsedMs:X}}function c(e,t,r){let i=new Uint8ClampedArray(t*r*4),a=255,o=0;for(let t of e)t!==0&&(a=Math.min(a,t),o=Math.max(o,t));let s=o>a;for(let t=0;t<e.length;t++){let r=e[t],c=0;c=Math.round(s&&r!==0?(r-a)*255/(o-a):r*255/n);let l=t*4;i[l]=i[l+1]=i[l+2]=c,i[l+3]=255}return new ImageData(i,t,r)}var l=document.querySelector(`#app`);if(!l)throw Error(`Missing #app element.`);l.innerHTML=`
  <main class="container">
    <h1>ZNCC Stereo (WebGPU)</h1>
    <p class="subtitle">Upload left/right images, run ZNCC on GPU, and preview disparity.</p>

    <section class="inputs">
      <label>
        Left image
        <input id="leftInput" type="file" accept="image/*" />
      </label>
      <label>
        Right image
        <input id="rightInput" type="file" accept="image/*" />
      </label>
      <button id="runBtn" type="button">Run ZNCC</button>
    </section>

    <p id="status" class="status">Waiting for input.</p>

    <section class="preview">
      <figure>
        <figcaption>Left</figcaption>
        <img id="leftPreview" alt="Left preview" />
      </figure>
      <figure>
        <figcaption>Right</figcaption>
        <img id="rightPreview" alt="Right preview" />
      </figure>
      <figure>
        <figcaption>Disparity</figcaption>
        <canvas id="resultCanvas"></canvas>
      </figure>
    </section>
  </main>
`;var u=document.querySelector(`#leftInput`),d=document.querySelector(`#rightInput`),f=document.querySelector(`#runBtn`),p=document.querySelector(`#leftPreview`),m=document.querySelector(`#rightPreview`),h=document.querySelector(`#resultCanvas`),g=document.querySelector(`#status`);if(!u||!d||!f||!p||!m||!h||!g)throw Error(`UI initialization failed.`);var _=null,v=null;function y(e){g.textContent=e}async function b(e){return createImageBitmap(e)}async function x(e,t){let n=e.files?.[0];if(!n)return;let r=await b(n),i=URL.createObjectURL(n);t===`left`?(_=r,p.src=i):(v=r,m.src=i),y(`Images loaded. Ready to run.`)}function S(e){let t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);if(!n)throw Error(`Failed to create 2D context.`);return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}u.addEventListener(`change`,async()=>x(u,`left`)),d.addEventListener(`change`,async()=>x(d,`right`)),f.addEventListener(`click`,async()=>{try{if(!_||!v)throw Error(`Please upload both images first.`);if(_.width!==v.width||_.height!==v.height)throw Error(`Left and right images must have identical dimensions.`);y(`Running ZNCC on WebGPU...`),f.disabled=!0;let e=await s(S(_),S(v)),t=e.nonZeroCount===0&&e.nonZeroRawLeftCount>0,n=c(t?e.disparityLeftRaw:e.disparity,e.width,e.height);h.width=n.width,h.height=n.height;let r=h.getContext(`2d`);if(!r)throw Error(`Failed to create canvas context.`);r.putImageData(n,0,0),y(`Done (${t?`raw left disparity fallback`:`post-processed disparity`}). Non-zero: ${e.nonZeroCount}/${e.disparity.length}, raw-left non-zero: ${e.nonZeroRawLeftCount}/${e.disparityLeftRaw.length}, GPU: ${e.elapsedMs.toFixed(2)} ms`)}catch(e){y(`Error: ${e instanceof Error?e.message:`Unknown error`} Check browser WebGPU/Vulkan settings.`)}finally{f.disabled=!1}});