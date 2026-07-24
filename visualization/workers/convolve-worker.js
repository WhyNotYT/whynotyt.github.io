function nextPow2(n) {
  let p = 1;
  while (p < n) p <<= 1;
  return p;
}

function fftInPlace(real, imag, inverse) {
  const n = real.length;
  let j = 0;
  for (let i = 0; i < n - 1; i++) {
    if (i < j) {
      let t = real[i];
      real[i] = real[j];
      real[j] = t;
      t = imag[i];
      imag[i] = imag[j];
      imag[j] = t;
    }
    let m = n >> 1;
    while (m <= j) {
      j -= m;
      m >>= 1;
    }
    j += m;
  }

  for (let step = 1; step < n; step <<= 1) {
    const jump = step << 1;
    const angleStep = (inverse ? 1 : -1) * (Math.PI / step);
    for (let group = 0; group < step; group++) {
      const angle = group * angleStep;
      const wReal = Math.cos(angle);
      const wImag = Math.sin(angle);
      for (let pair = group; pair < n; pair += jump) {
        const match = pair + step;
        const tReal = wReal * real[match] - wImag * imag[match];
        const tImag = wReal * imag[match] + wImag * real[match];
        real[match] = real[pair] - tReal;
        imag[match] = imag[pair] - tImag;
        real[pair] += tReal;
        imag[pair] += tImag;
      }
    }
  }

  if (inverse) {
    for (let i = 0; i < n; i++) {
      real[i] /= n;
      imag[i] /= n;
    }
  }
}

function convolveFFT(signal, kernel) {
  const outLen = signal.length + kernel.length - 1;
  const n = nextPow2(outLen);

  const realA = new Float64Array(n);
  const imagA = new Float64Array(n);
  const realB = new Float64Array(n);
  const imagB = new Float64Array(n);

  for (let i = 0; i < signal.length; i++) realA[i] = signal[i];
  for (let i = 0; i < kernel.length; i++) realB[i] = kernel[i];

  fftInPlace(realA, imagA, false);
  fftInPlace(realB, imagB, false);

  for (let i = 0; i < n; i++) {
    const r = realA[i] * realB[i] - imagA[i] * imagB[i];
    const im = realA[i] * imagB[i] + imagA[i] * realB[i];
    realA[i] = r;
    imagA[i] = im;
  }

  fftInPlace(realA, imagA, true);

  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) out[i] = realA[i];

  let peak = 0;
  for (let i = 0; i < outLen; i++) peak = Math.max(peak, Math.abs(out[i]));
  if (peak > 1e-8) {
    const scale = 0.9 / peak;
    for (let i = 0; i < outLen; i++) out[i] *= scale;
  }

  return out;
}

self.onmessage = (event) => {
  const msg = event.data || {};
  if (msg.type === "convolve") {
    try {
      const signal = new Float32Array(msg.signal);
      const kernel = new Float32Array(msg.kernel);
      const result = convolveFFT(signal, kernel);
      self.postMessage({ type: "result", id: msg.id, result }, [result.buffer]);
    } catch (err) {
      self.postMessage({
        type: "error",
        id: msg.id,
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }
};
