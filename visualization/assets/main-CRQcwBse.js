var Kl=Object.defineProperty;var jl=(s,t,e)=>t in s?Kl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var x=(s,t,e)=>jl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Zl=[["aliasing-sine.html","/aliasing-sine"],["aliasing-audio.html","/aliasing-audio"],["z-transform.html","/z-transform"],["pole-zero.html","/pole-zero"],["convolution.html","/convolution"],["dft-demo.html","/dft-demo"],["difference-equations.html","/difference-equations"]];class Jl{constructor(){x(this,"currentHandler",null);x(this,"handlers",new Map);x(this,"basePath");this.basePath="/visualization/",window.addEventListener("popstate",()=>this.handleRoute())}register(t,e){this.handlers.set(t,e)}navigate(t){const e=t==="/"?this.basePath:`${this.basePath}${t.slice(1)}.html`;window.location.href=e}resolveRoute(t){for(const[e,n]of Zl)if(t.includes(e))return n;return"/"}handleRoute(){const t=this.resolveRoute(window.location.pathname);this.currentHandler&&this.currentHandler.unmount();const e=this.handlers.get(t)||this.handlers.get("/");e&&(this.currentHandler=e(),this.currentHandler.mount())}start(){this.handleRoute()}}class Ql{constructor(t,e){x(this,"container");x(this,"router");this.container=t,this.router=e}mount(){this.container.innerHTML=`
      <div class="home-container">
        <h1 class="home-title">Filter visualizations</h1>
        <div class="home-cards">
          <div class="home-card" data-route="/aliasing-sine">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M5 30 Q15 10, 25 30 T45 30 T65 30" stroke="var(--color-accent-primary)" stroke-width="3" fill="none"/>
                <circle cx="15" cy="20" r="3" fill="var(--color-accent-secondary)"/>
                <circle cx="25" cy="30" r="3" fill="var(--color-accent-secondary)"/>
                <circle cx="35" cy="40" r="3" fill="var(--color-accent-secondary)"/>
                <circle cx="45" cy="30" r="3" fill="var(--color-accent-secondary)"/>
              </svg>
            </div>
            <h2 class="card-title">Sine aliasing</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/aliasing-audio">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <rect x="10" y="35" width="4" height="10" fill="var(--color-accent-primary)"/>
                <rect x="18" y="25" width="4" height="20" fill="var(--color-accent-primary)"/>
                <rect x="26" y="15" width="4" height="30" fill="var(--color-accent-primary)"/>
                <rect x="34" y="20" width="4" height="25" fill="var(--color-accent-primary)"/>
                <rect x="42" y="30" width="4" height="15" fill="var(--color-accent-primary)"/>
                <line x1="5" y1="50" x2="55" y2="50" stroke="var(--color-accent-secondary)" stroke-width="2" stroke-dasharray="4"/>
              </svg>
            </div>
            <h2 class="card-title">Audio aliasing</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/z-transform">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="20" stroke="var(--color-accent-primary)" stroke-width="1.5" fill="none" opacity="0.6"/>
                <line x1="10" y1="30" x2="50" y2="30" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                <line x1="30" y1="10" x2="30" y2="50" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                <circle cx="42" cy="22" r="4" stroke="var(--color-accent-primary)" stroke-width="2" fill="none"/>
                <line x1="20" y1="38" x2="26" y2="32" stroke="var(--color-accent-secondary)" stroke-width="2"/>
                <line x1="26" y1="38" x2="20" y2="32" stroke="var(--color-accent-secondary)" stroke-width="2"/>
                <circle cx="38" cy="30" r="3" fill="white" opacity="0.9"/>
                <line x1="30" y1="30" x2="38" y2="30" stroke="white" stroke-width="1.5" opacity="0.5"/>
              </svg>
            </div>
            <h2 class="card-title">Z-transform</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/pole-zero">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="20" stroke="var(--color-accent-primary)" stroke-width="1.5" fill="rgba(74,191,173,0.04)"/>
                <line x1="10" y1="30" x2="50" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                <line x1="30" y1="10" x2="30" y2="50" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                <circle cx="36" cy="24" r="5" stroke="var(--color-accent-primary)" stroke-width="2" fill="none"/>
                <circle cx="24" cy="36" r="5" stroke="var(--color-accent-primary)" stroke-width="2" fill="none"/>
                <line x1="19" y1="21" x2="27" y2="29" stroke="var(--color-accent-secondary)" stroke-width="2"/>
                <line x1="27" y1="21" x2="19" y2="29" stroke="var(--color-accent-secondary)" stroke-width="2"/>
                <line x1="33" y1="33" x2="41" y2="41" stroke="var(--color-accent-secondary)" stroke-width="2"/>
                <line x1="41" y1="33" x2="33" y2="41" stroke="var(--color-accent-secondary)" stroke-width="2"/>
              </svg>
            </div>
            <h2 class="card-title">Pole-zero</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/convolution">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M8 42 L8 18 L22 18 L22 42 Z" fill="none" stroke="var(--color-accent-primary)" stroke-width="2"/>
                <path d="M32 38 L32 22 L48 22 L48 38 Z" fill="none" stroke="var(--color-accent-secondary)" stroke-width="2"/>
                <path d="M22 30 L32 30" stroke="white" stroke-width="2" stroke-dasharray="3,2"/>
                <path d="M12 48 Q30 28 48 48" stroke="#fffbc2" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <h2 class="card-title">Convolution</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/dft-demo">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <rect x="8" y="35" width="5" height="12" fill="var(--color-accent-primary)"/>
                <rect x="16" y="28" width="5" height="19" fill="var(--color-accent-primary)"/>
                <rect x="24" y="20" width="5" height="27" fill="var(--color-accent-primary)"/>
                <rect x="32" y="25" width="5" height="22" fill="var(--color-accent-secondary)"/>
                <rect x="40" y="30" width="5" height="17" fill="var(--color-accent-secondary)"/>
                <rect x="48" y="22" width="5" height="25" fill="#fffbc2" opacity="0.7"/>
              </svg>
            </div>
            <h2 class="card-title">DFT</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/difference-equations">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <text x="8" y="28" fill="var(--color-accent-primary)" font-size="11" font-family="monospace">y[n]</text>
                <text x="8" y="48" fill="#fffbc2" font-size="10" font-family="monospace">H(z)</text>
                <rect x="28" y="18" width="24" height="16" stroke="var(--color-accent-secondary)" fill="none"/>
                <rect x="28" y="38" width="24" height="14" stroke="var(--color-accent-primary)" fill="none"/>
              </svg>
            </div>
            <h2 class="card-title">Difference eq.</h2>
            <div class="card-arrow">→</div>
          </div>

        </div>
      </div>
    `,this.container.querySelectorAll(".home-card").forEach(e=>{var i,a;const n=((a=(i=e.querySelector(".card-title"))==null?void 0:i.textContent)==null?void 0:a.trim())??"demo";e.setAttribute("data-tooltip",`Open the ${n} visualization`),e.setAttribute("role","button"),e.setAttribute("tabindex","0"),e.addEventListener("keydown",r=>{const o=r.key;(o==="Enter"||o===" ")&&(r.preventDefault(),e.click())}),e.addEventListener("click",()=>{const r=e.getAttribute("data-route");r&&this.router.navigate(r)})})}unmount(){this.container.innerHTML=""}}class Hn{constructor(t,e){x(this,"container");x(this,"svg");x(this,"value");x(this,"config");x(this,"onChange");x(this,"isDragging",!1);x(this,"startX",0);x(this,"startY",0);x(this,"startValue",0);x(this,"indicator");this.config={...t,defaultValue:t.defaultValue??t.value},this.value=t.value,this.onChange=e,this.container=this.createKnob(),this.svg=this.container.querySelector("svg"),this.indicator=this.svg.querySelector(".knob-indicator"),this.updateVisuals(),this.attachEventListeners()}createKnob(){const t=document.createElement("div");t.className="knob-wrapper";const e=document.createElement("div");e.className="knob-container";const n=`knob-${Math.random().toString(36).slice(2,9)}`,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100"),i.setAttribute("class","knob-svg");const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","linearGradient");r.setAttribute("id",`${n}-rim`),r.setAttribute("x1","0"),r.setAttribute("y1","0"),r.setAttribute("x2","0.25"),r.setAttribute("y2","1"),[["0%","#c4cdd4"],["32%","#78838d"],["58%","#414b54"],["100%","#9aa5ad"]].forEach(([v,M])=>{const A=document.createElementNS("http://www.w3.org/2000/svg","stop");A.setAttribute("offset",v),A.setAttribute("stop-color",M),r.appendChild(A)});const o=document.createElementNS("http://www.w3.org/2000/svg","radialGradient");o.setAttribute("id",`${n}-face`),o.setAttribute("cx","36%"),o.setAttribute("cy","30%"),o.setAttribute("r","78%"),[["0%","#565a5e"],["46%","#2b2d30"],["100%","#141517"]].forEach(([v,M])=>{const A=document.createElementNS("http://www.w3.org/2000/svg","stop");A.setAttribute("offset",v),A.setAttribute("stop-color",M),o.appendChild(A)});const l=document.createElementNS("http://www.w3.org/2000/svg","linearGradient");l.setAttribute("id",`${n}-accent`),l.setAttribute("gradientUnits","userSpaceOnUse"),l.setAttribute("x1","20"),l.setAttribute("y1","6"),l.setAttribute("x2","80"),l.setAttribute("y2","96"),[["0%","#f48fa6"],["100%","#eb008c"]].forEach(([v,M])=>{const A=document.createElementNS("http://www.w3.org/2000/svg","stop");A.setAttribute("offset",v),A.setAttribute("stop-color",M),l.appendChild(A)}),a.append(r,o,l);const c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("cx","50"),c.setAttribute("cy","50"),c.setAttribute("r","48"),c.setAttribute("class","knob-outer"),c.setAttribute("fill",`url(#${n}-rim)`);const h=document.createElementNS("http://www.w3.org/2000/svg","circle");h.setAttribute("cx","50"),h.setAttribute("cy","50"),h.setAttribute("r","41"),h.setAttribute("class","knob-body"),h.setAttribute("fill",`url(#${n}-face)`);const u=document.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("cx","50"),u.setAttribute("cy","50"),u.setAttribute("r","35"),u.setAttribute("class","knob-inner"),u.setAttribute("fill","none");const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("class","knob-arc-track"),d.setAttribute("d",this.describeArc(50,50,45,210,510)),d.setAttribute("fill","none");const m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("class","knob-arc-value"),m.setAttribute("fill","none"),m.setAttribute("stroke",`url(#${n}-accent)`);const g=document.createElementNS("http://www.w3.org/2000/svg","g");g.setAttribute("class","knob-indicator");const _=document.createElementNS("http://www.w3.org/2000/svg","line");_.setAttribute("x1","50"),_.setAttribute("y1","18"),_.setAttribute("x2","50"),_.setAttribute("y2","27"),_.setAttribute("stroke-linecap","round"),_.setAttribute("stroke",`url(#${n}-accent)`);const p=document.createElementNS("http://www.w3.org/2000/svg","circle");p.setAttribute("cx","50"),p.setAttribute("cy","31"),p.setAttribute("r","4"),p.setAttribute("fill",`url(#${n}-accent)`),g.appendChild(_),g.appendChild(p),i.appendChild(a),i.appendChild(c),i.appendChild(h),i.appendChild(u),i.appendChild(d),i.appendChild(m),i.appendChild(g),e.appendChild(i),e.setAttribute("role","slider"),e.setAttribute("aria-label",this.config.label),e.tabIndex=0;const f=document.createElement("div");f.className="knob-label",f.textContent=this.config.label;const y=document.createElement("div");return y.className="knob-value",y.textContent=`${this.value}${this.config.unit}`,t.appendChild(e),t.appendChild(y),t.appendChild(f),t}describeArc(t,e,n,i,a){const r=this.polarToCartesian(t,e,n,a),o=this.polarToCartesian(t,e,n,i),l=a-i<=180?"0":"1";return`M ${r.x} ${r.y} A ${n} ${n} 0 ${l} 0 ${o.x} ${o.y}`}polarToCartesian(t,e,n,i){const a=(i-90)*Math.PI/180;return{x:t+n*Math.cos(a),y:e+n*Math.sin(a)}}getAngle(){return 210+(this.value-this.config.min)/(this.config.max-this.config.min)*300}updateVisuals(){const t=this.getAngle();this.indicator.setAttribute("transform",`rotate(${t} 50 50)`);const e=this.svg.querySelector(".knob-arc-value");e&&e.setAttribute("d",this.describeArc(50,50,45,210,t));const n=this.container.querySelector(".knob-value"),i=this.config.unit==="Hz"&&this.value>=1e3?`${(this.value/1e3).toFixed(1)}k${this.config.unit}`:`${Math.round(this.value)}${this.config.unit}`;n&&(n.textContent=i);const a=this.container.querySelector(".knob-container");a&&(a.setAttribute("aria-valuemin",String(this.config.min)),a.setAttribute("aria-valuemax",String(this.config.max)),a.setAttribute("aria-valuenow",String(this.value)),a.setAttribute("aria-valuetext",i)),this.container.dataset.tooltip=`${this.config.label}: ${i}  ·  drag up/down, Shift for fine control, double-click to reset`}attachEventListeners(){const t=this.svg,e=()=>{this.isDragging&&(this.isDragging=!1,document.body.classList.remove("knob-dragging"))},n=(r,o,l)=>{if(!this.isDragging)return;const c=r-this.startX,u=this.startY-o+c,d=this.config.max-this.config.min,g=.45*(l?.25:1),_=u*g*d/220;let p=this.startValue+_;p=Math.max(this.config.min,Math.min(this.config.max,p)),p=Math.round(p/this.config.step)*this.config.step,p!==this.value&&(this.value=p,this.updateVisuals(),this.onChange(this.value))},i=()=>{this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value)};t.addEventListener("dblclick",r=>{r.preventDefault(),i()}),this.container.addEventListener("keydown",r=>{const o=r.shiftKey?this.config.step/4:this.config.step;let l=null;r.key==="ArrowUp"||r.key==="ArrowRight"?l=this.value+o:r.key==="ArrowDown"||r.key==="ArrowLeft"?l=this.value-o:r.key==="Home"?l=this.config.min:r.key==="End"&&(l=this.config.max),l!==null&&(r.preventDefault(),this.setValue(l),this.onChange(this.value))}),t.addEventListener("pointerdown",r=>{if(r.pointerType==="mouse"&&r.button===1){r.preventDefault(),i();return}if(r.button===0){r.preventDefault(),this.isDragging=!0,this.startX=r.clientX,this.startY=r.clientY,this.startValue=this.value,document.body.classList.add("knob-dragging");try{t.setPointerCapture(r.pointerId)}catch{}}}),t.addEventListener("pointermove",r=>{this.isDragging&&(r.preventDefault(),n(r.clientX,r.clientY,r.shiftKey))});const a=r=>{try{t.hasPointerCapture(r.pointerId)&&t.releasePointerCapture(r.pointerId)}catch{}e()};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a),t.addEventListener("lostpointercapture",e),window.addEventListener("pointerup",a),window.addEventListener("mouseup",e),window.addEventListener("blur",e),document.addEventListener("mouseleave",e),document.documentElement.addEventListener("mouseleave",e),document.addEventListener("visibilitychange",()=>{document.hidden&&e()})}getValue(){return this.value}setValue(t){this.value=Math.max(this.config.min,Math.min(this.config.max,t)),this.value=Math.round(this.value/this.config.step)*this.config.step,this.updateVisuals()}setMax(t){this.config.max=t,this.value>t&&(this.value=t,this.onChange(this.value)),this.updateVisuals()}getElement(){return this.container}}class Sn{static quantize(t,e){const n=Math.pow(2,e);let i=Math.floor((t+1)*.5*n);return i=Math.max(0,Math.min(n-1,i)),i/(n-1)*2-1}static getSamples(t,e,n=.1){const i=Math.floor(e*n),a=new Float32Array(i),r=new Float32Array(i);for(let o=0;o<i;o++){const l=o/e;a[o]=Math.sin(2*Math.PI*t*l),r[o]=l}return{samples:a,sampleTimes:r,duration:n}}static getAliasedFrequency(t,e){const n=e/2;if(t<=n)return t;const i=Math.floor((t+n)/e);return Math.abs(t-i*e)}static getAliasingInfo(t,e){const n=e/2,i=t>n,a=this.getAliasedFrequency(t,e);return{nyquistFreq:n,isAliasing:i,aliasedFreq:a}}static generateAudioForPlayback(t,e,n,i=32){const r=Math.floor(44100*n),o=new Float32Array(r),l=Math.round(t/e),c=t-l*e,h=Math.abs(c);if(h===0)return o;const u=c===0?1:Math.sign(c);for(let d=0;d<r;d++){const m=d/44100,g=u*Math.sin(2*Math.PI*h*m);o[d]=this.quantize(g,i)}return o}static convolve(t,e){const n=t.length+e.length-1,i=new Float32Array(n);for(let a=0;a<n;a++){let r=0;for(let o=0;o<e.length;o++){const l=a-o;l>=0&&l<t.length&&(r+=t[l]*e[o])}i[a]=r}return i}static normalizePeak(t,e=.95){let n=0;for(let r=0;r<t.length;r++)n=Math.max(n,Math.abs(t[r]));if(n<1e-8)return t;const i=e/n,a=new Float32Array(t.length);for(let r=0;r<t.length;r++)a[r]=t[r]*i;return a}}class Wi{constructor(t){x(this,"canvas");x(this,"ctx");x(this,"container");x(this,"options");x(this,"dpr",1);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.1)",...t},this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas()}createContainer(){const t=document.createElement("div");t.className="wave-display";const e={Original:"Original signal before sampling",Sampled:"Samples captured at the sample rate — the dots are the sample instants",Quantized:"Sample amplitudes rounded to the current bit depth",Reconstructed:"Signal recovered from the sampled values"},n=this.options.label.replace(/^\d+\.\s*/,"");t.dataset.tooltip=e[n]??`${n} — live time-domain waveform`;const i=document.createElement("canvas");return i.className="wave-canvas",t.appendChild(i),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas()}clear(){this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t,height:e}=this.options,n=e/2;this.ctx.font="600 16px JetBrains Mono",this.ctx.fillStyle="rgba(255, 255, 255, 0.38)",this.ctx.textAlign="left",this.ctx.fillText(this.options.label,10,15),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath();const i=8;for(let a=1;a<i;a++){const r=t/i*a;this.ctx.moveTo(r,0),this.ctx.lineTo(r,e)}this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255,255,255,0.05)",this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(t,e),this.ctx.stroke()}drawWave(t,e,n=.8,i,a=2,r,o=0){const{width:l,height:c}=this.options,h=c/2,d=c-2*20;this.ctx.shadowBlur=8,this.ctx.shadowColor=i,this.ctx.strokeStyle=i,this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.lineJoin="round";const m=l,g=.008;for(let _=0;_<=m;_++){const p=_/m*l,f=p/l*g,y=e-g+f,v=2*Math.PI*t*y+o;let M=Math.sin(v);r!==void 0&&(M=Sn.quantize(M,r));const A=h-M*n*d/2;_===0?this.ctx.moveTo(p,A):this.ctx.lineTo(p,A)}this.ctx.stroke(),this.ctx.shadowBlur=0}drawSincReconstruction(t,e,n,i,a=.8,r,o=2){if(t.length===0)return;const{width:l,height:c}=this.options,h=c/2,d=c-2*20,m=g=>{if(Math.abs(g)<1e-10)return 1;const _=Math.PI*g;return Math.sin(_)/_};this.ctx.save(),this.ctx.shadowBlur=8,this.ctx.shadowColor=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=o,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath();for(let g=0;g<=l;g++){const _=n+g/l*i;let p=0;for(const y of t){const v=(_-y.time)*e;p+=y.value*m(v)}p=Math.max(-1.15,Math.min(1.15,p));const f=h-p*a*d/2;g===0?this.ctx.moveTo(0,f):this.ctx.lineTo(g,f)}this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawQuantizationStaircase(t,e){if(t.length<2)return;this.ctx.save(),this.ctx.strokeStyle=e,this.ctx.lineWidth=2,this.ctx.shadowBlur=8,this.ctx.shadowColor=e,this.ctx.globalAlpha=.75,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let i=0;i<t.length-1;i++){const a=t[i],r=t[i+1];this.ctx.lineTo(r.x,a.y),this.ctx.lineTo(r.x,r.y)}const n=t[t.length-1];this.ctx.lineTo(this.options.width,n.y),this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawSmoothCurve(t,e,n=1.5,i=1){if(!(t.length<2)){this.ctx.save(),this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.strokeStyle=e,this.ctx.lineWidth=n,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=i,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let a=1;a<t.length;a++)this.ctx.lineTo(t[a].x,t[a].y);this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.shadowBlur=0,this.ctx.restore()}}drawSamplePoints(t,e,n=!0){if(t.length===0)return;const i=this.options.height/2;n&&(this.ctx.strokeStyle=e,this.ctx.lineWidth=1.5,this.ctx.globalAlpha=.6,this.ctx.beginPath(),t.forEach((a,r)=>{r===0?this.ctx.moveTo(a.x,a.y):this.ctx.lineTo(a.x,a.y)}),this.ctx.stroke(),this.ctx.globalAlpha=1),t.forEach(a=>{this.ctx.strokeStyle=e,this.ctx.globalAlpha=.2,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(a.x,i),this.ctx.lineTo(a.x,a.y),this.ctx.stroke()}),t.forEach(a=>{this.ctx.globalAlpha=1,this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(a.x,a.y,3,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=0}getElement(){return this.container}}class ol{constructor(t){x(this,"container");x(this,"items",new Map);this.container=this.createPanel(t)}createPanel(t){const e=document.createElement("div");return e.className="info-panel",t.forEach(n=>{const i=this.createItem(n);this.items.set(n.label,i),e.appendChild(i)}),e}createItem(t){const e=document.createElement("div");e.className="info-item";const n=document.createElement("div");n.className="info-item-label",n.textContent=t.label;const i=document.createElement("div");return i.className="info-item-value",t.warning&&i.classList.add("warning"),i.textContent=t.value,e.appendChild(n),e.appendChild(i),e.dataset.tooltip=`${t.label}: ${t.value}`,e}updateItem(t,e,n=!1){var a;const i=this.items.get(t);if(i){const r=i.querySelector(".info-item-value");if(r){r.textContent=e;const o=((a=i.querySelector(".info-item-label"))==null?void 0:a.textContent)??"";i.dataset.tooltip=`${o}: ${e}${n?" (warning)":""}`,n?r.classList.add("warning"):r.classList.remove("warning")}}}getElement(){return this.container}}class Zn{constructor(t){x(this,"root");x(this,"playPauseBtn");x(this,"stopBtn");x(this,"loopBtn",null);x(this,"fileInput",null);x(this,"isPlaying",!1);x(this,"isLooping",!1);this.opts=t,this.root=document.createElement("div"),this.root.className="transport-bar";const e=document.createElement("div");if(e.className="transport-left",this.playPauseBtn=this.makeIconBtn(this.svgPlay(),"Play","transport-play"),this.playPauseBtn.addEventListener("click",()=>this.handlePlayPause()),this.stopBtn=this.makeIconBtn(this.svgStop(),"Stop","transport-stop"),this.stopBtn.addEventListener("click",()=>this.opts.onStop()),e.appendChild(this.playPauseBtn),e.appendChild(this.stopBtn),t.showLoop!==!1&&(this.isLooping=t.initialLoop??!1,this.loopBtn=this.makeIconBtn(this.svgLoop(),this.isLooping?"Loop: On":"Loop: Off","transport-loop"),this.loopBtn.classList.toggle("active",this.isLooping),this.loopBtn.addEventListener("click",()=>{var n,i;this.isLooping=!this.isLooping,this.loopBtn.classList.toggle("active",this.isLooping),this.setButtonLabel(this.loopBtn,this.isLooping?"Loop: On":"Loop: Off"),(i=(n=this.opts).onLoopToggle)==null||i.call(n,this.isLooping)}),e.appendChild(this.loopBtn)),t.extraLeft&&e.appendChild(t.extraLeft),this.root.appendChild(e),t.showUpload!==!1&&t.onUpload){const n=document.createElement("div");n.className="transport-right";const i=document.createElement("label");i.className="transport-upload",i.dataset.tooltip="Choose an audio file from your computer",this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept=t.accept??"audio/*",this.fileInput.hidden=!0,this.fileInput.setAttribute("aria-label","Upload Audio"),this.fileInput.addEventListener("change",o=>{var c;const l=(c=o.target.files)==null?void 0:c[0];l&&t.onUpload(l),this.fileInput.value=""});const a=document.createElement("span");a.innerHTML=this.svgUpload();const r=document.createElement("span");r.className="transport-upload-text",r.textContent=t.uploadLabel??"Upload Audio",i.appendChild(this.fileInput),i.appendChild(a),i.appendChild(r),n.appendChild(i),this.root.appendChild(n)}}setPlaying(t){this.isPlaying=t,this.playPauseBtn.innerHTML=t?this.svgPause():this.svgPlay(),this.setButtonLabel(this.playPauseBtn,t?"Pause":"Play"),this.playPauseBtn.classList.toggle("active",t)}getElement(){return this.root}getLooping(){return this.isLooping}setLooping(t){this.isLooping=t,this.loopBtn&&(this.loopBtn.classList.toggle("active",t),this.setButtonLabel(this.loopBtn,t?"Loop: On":"Loop: Off"))}async handlePlayPause(){this.isPlaying?this.opts.onPause():await this.opts.onPlay()}makeIconBtn(t,e,n){const i=document.createElement("button");return i.className=`transport-btn ${n}`,i.type="button",this.setButtonLabel(i,e),i.innerHTML=t,i}setButtonLabel(t,e){t.dataset.tooltip=e,t.setAttribute("aria-label",e)}svgPlay(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <polygon points="4,2 18,10 4,18"/>
    </svg>`}svgPause(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <rect x="3" y="2" width="5" height="16" rx="1"/>
      <rect x="12" y="2" width="5" height="16" rx="1"/>
    </svg>`}svgStop(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <rect x="3" y="3" width="14" height="14" rx="2"/>
    </svg>`}svgLoop(){return`<svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 9V7a3 3 0 0 1 3-3h9"/>
      <path d="M13 1l3 3-3 3"/>
      <path d="M16 11v2a3 3 0 0 1-3 3H4"/>
      <path d="M7 19l-3-3 3-3"/>
    </svg>`}svgUpload(){return`<svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13V5M6 9l4-4 4 4"/>
      <path d="M3 15h14"/>
    </svg>`}}const kn=class kn{constructor(){x(this,"context",null);x(this,"workletReady",!1)}static getInstance(){return kn.instance||(kn.instance=new kn),kn.instance}async getContext(t){return this.context||(this.context=new AudioContext(t?{sampleRate:t}:void 0)),this.context.state==="suspended"&&this.context.resume().catch(()=>{}),await this.ensureWorklet(),this.context}async ensureWorklet(){if(!this.context||this.workletReady)return;await this.context.audioWorklet.addModule("/visualization/worklets/dsp-processor.js"),this.workletReady=!0}async createDspNode(t){const e=await this.getContext();return new AudioWorkletNode(e,"shared-dsp-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCountMode:"explicit",channelInterpretation:"speakers",...t})}async decodeAudioData(t){return await(await this.getContext()).decodeAudioData(t)}async createBuffer(t,e,n){return(await this.getContext()).createBuffer(t,e,n)}async createBufferSource(){return(await this.getContext()).createBufferSource()}async createGain(){return(await this.getContext()).createGain()}async createAnalyser(){return(await this.getContext()).createAnalyser()}async createConvolver(){return(await this.getContext()).createConvolver()}getCurrentTime(){var t;return((t=this.context)==null?void 0:t.currentTime)??0}getState(){var t;return((t=this.context)==null?void 0:t.state)??"closed"}};x(kn,"instance",null);let on=kn;function Mt(s,t=!0){const e=new URLSearchParams(window.location.search);if(!e.has(s))return t;const n=e.get(s).toLowerCase();return n!=="0"&&n!=="false"&&n!=="off"&&n!=="no"}function Yn(s){return new URLSearchParams(window.location.search).get(s)}function Li(s){const t="/visualization/",e=new URL(t,window.location.origin);return new URL(s.replace(/^\//,""),e).href}class tc{constructor(t){x(this,"ui",{frequencyKnob:Mt("frequencyKnob",!0),sampleRateKnob:Mt("sampleRateKnob",!0),bitDepthKnob:Mt("bitDepthKnob",!0),phaseKnob:Mt("phaseKnob",!0),playButton:Mt("playButton",!0),infoPanel:Mt("infoPanel",!0),originalDisplay:Mt("originalDisplay",!0),sampledDisplay:Mt("sampledDisplay",!0),quantizedDisplay:Mt("quantizedDisplay",!0),reconstructedDisplay:Mt("reconstructedDisplay",!0)});x(this,"frequency",1e3);x(this,"sampleRate",2e3);x(this,"bitDepth",16);x(this,"phaseDeg",0);x(this,"speed",.1);x(this,"audioEngine");x(this,"dspNode",null);x(this,"outputGain",null);x(this,"frequencyKnob");x(this,"sampleRateKnob");x(this,"bitDepthKnob");x(this,"phaseKnob");x(this,"transportBar");x(this,"infoPanel");x(this,"originalDisplay");x(this,"sampledDisplay");x(this,"quantizedDisplay");x(this,"reconstructedDisplay");x(this,"container");x(this,"isPlaying",!1);x(this,"animationId",null);x(this,"time",0);x(this,"lastTimestamp",0);x(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.container.classList.add("sine-demo"),this.audioEngine=on.getInstance(),this.init()}init(){this.createUI(),window.addEventListener("resize",this.onResize),this.startAnimation()}getDisplayWidth(){return Math.max(280,Math.floor((this.container.clientWidth-10)/2))}createUI(){const t=document.createElement("div");t.className="displays-container sine-displays",t.dataset.tooltip="Sampling scopes — original, sampled, quantized and reconstructed signals";const i={width:this.getDisplayWidth(),height:212,backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)"};this.ui.originalDisplay&&(this.originalDisplay=new Wi({...i,label:"1. Original"}),t.appendChild(this.originalDisplay.getElement())),this.ui.sampledDisplay&&(this.sampledDisplay=new Wi({...i,label:"2. Sampled"}),t.appendChild(this.sampledDisplay.getElement())),this.ui.quantizedDisplay&&(this.quantizedDisplay=new Wi({...i,label:"3. Quantized"}),t.appendChild(this.quantizedDisplay.getElement())),this.ui.reconstructedDisplay&&(this.reconstructedDisplay=new Wi({...i,label:"4. Reconstructed"}),t.appendChild(this.reconstructedDisplay.getElement()));const a=document.createElement("div");a.className="controls-container",a.dataset.tooltip="Oscillator and sampling controls",this.ui.infoPanel&&(this.infoPanel=new ol([{label:"Nyquist",value:"1000 Hz"},{label:"Alias",value:"—"}]));const r=document.createElement("div");r.className="knobs-wrapper";const o={min:10,max:1e4,value:this.frequency,step:100,label:"Input freq",unit:"Hz"},l={min:100,max:2e3,value:this.sampleRate,step:100,label:"Sample rate",unit:"Hz"},c={min:1,max:16,value:this.bitDepth,step:1,label:"Bit depth",unit:"bits"},h={min:0,max:360,value:this.phaseDeg,step:1,label:"Phase",unit:"°"};this.ui.frequencyKnob&&(this.frequencyKnob=new Hn(o,u=>{this.frequency=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),r.appendChild(this.frequencyKnob.getElement())),this.ui.sampleRateKnob&&(this.sampleRateKnob=new Hn(l,u=>{this.sampleRate=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),r.appendChild(this.sampleRateKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new Hn(c,u=>{this.bitDepth=u,this.updateAudio()}),r.appendChild(this.bitDepthKnob.getElement())),this.ui.phaseKnob&&(this.phaseKnob=new Hn(h,u=>{this.phaseDeg=u,this.updateAudio()}),r.appendChild(this.phaseKnob.getElement())),this.ui.playButton&&(this.transportBar=new Zn({onPlay:()=>this.playAudio(),onPause:()=>this.stopAudio(),onStop:()=>this.stopAudio(),showUpload:!1,showLoop:!1})),this.infoPanel&&a.appendChild(this.infoPanel.getElement()),r.childElementCount>0&&a.appendChild(r),this.transportBar&&a.appendChild(this.transportBar.getElement()),this.container.appendChild(t),this.container.appendChild(a),this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){var n,i,a,r;const t=this.getDisplayWidth(),e=212;(n=this.originalDisplay)==null||n.resize(t,e),(i=this.sampledDisplay)==null||i.resize(t,e),(a=this.quantizedDisplay)==null||a.resize(t,e),(r=this.reconstructedDisplay)==null||r.resize(t,e)}startAnimation(){const t=e=>{this.lastTimestamp===0&&(this.lastTimestamp=e);const n=(e-this.lastTimestamp)/1e3;this.lastTimestamp=e,this.speed>0&&(this.time-=n*this.speed*.005),this.updateAnimation(),this.animationId=requestAnimationFrame(t)};this.animationId=requestAnimationFrame(t)}updateAnimation(){this.renderDisplays()}renderDisplays(){this.renderOriginalSignal(),this.renderSampledSignal(),this.renderQuantizedSignal(),this.renderReconstructedSignal()}renderOriginalSignal(){this.originalDisplay&&(this.originalDisplay.clear(),this.originalDisplay.drawGrid(),this.originalDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"#4abfad",2))}get phaseRad(){return this.phaseDeg*Math.PI/180}phaseTimeOffset(t){return t<=0?0:this.phaseRad/(2*Math.PI*t)}renderSampledSignal(){if(!this.sampledDisplay)return;this.sampledDisplay.clear(),this.sampledDisplay.drawGrid(),this.sampledDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(74, 191, 173, 0.2)",1);const t=this.canvasSamplePoints(this.frequency);this.sampledDisplay.drawSamplePoints(t,"#eb008c",!1)}renderQuantizedSignal(){if(!this.quantizedDisplay)return;this.quantizedDisplay.clear(),this.quantizedDisplay.drawGrid(),this.quantizedDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(197, 255, 116, 0.15)",1);const t=this.quantizedDisplay.getElement().querySelector("canvas"),e=(t==null?void 0:t.getContext("2d"))??null,n=(t==null?void 0:t.offsetWidth)??this.getDisplayWidth(),i=(t==null?void 0:t.offsetHeight)??220,a=i/2,o=i-2*20;if(e){const c=Math.min(2**this.bitDepth,64);e.save(),e.strokeStyle="rgba(197, 255, 116, 0.15)",e.lineWidth=1;for(let h=0;h<=c;h++){const u=-1+2*h/c,d=Sn.quantize(u,this.bitDepth),m=a-d*.8*o/2;e.beginPath(),e.moveTo(0,m),e.lineTo(n,m),e.stroke()}e.restore()}const l=this.canvasSamplePoints(this.frequency,this.bitDepth);if(e&&l.length>0){e.save(),e.strokeStyle="#c5ff74",e.lineWidth=1.5,e.globalAlpha=.8;for(const c of l)e.beginPath(),e.moveTo(c.x,a),e.lineTo(c.x,c.y),e.stroke();e.restore()}this.quantizedDisplay.drawSamplePoints(l,"#c5ff74",!1)}renderReconstructedSignal(){if(!this.reconstructedDisplay)return;this.reconstructedDisplay.clear(),this.reconstructedDisplay.drawGrid();const t=.008,e=this.time-t,n=this.rawSamples(this.frequency,this.bitDepth,30);this.reconstructedDisplay.drawSincReconstruction(n,this.sampleRate,e,t,.8,"#fffbc2",2);const i=this.canvasSamplePoints(this.frequency,this.bitDepth);this.reconstructedDisplay.drawSamplePoints(i,"#fffbc2",!1)}rawSamples(t,e,n=30){const a=this.time-.008,r=this.time,o=Math.ceil(a*this.sampleRate)-n,l=Math.floor(r*this.sampleRate)+n,c=[];for(let h=o;h<=l;h++){const u=h/this.sampleRate,d=2*Math.PI*t*u+this.phaseRad;let m=Math.sin(d);e!==void 0&&(m=Sn.quantize(m,e)),c.push({time:u,value:m})}return c}canvasSamplePoints(t,e){const n=this.originalDisplay??this.sampledDisplay??this.reconstructedDisplay,i=(n==null?void 0:n.getElement().querySelector("canvas"))??null,a=(i==null?void 0:i.offsetWidth)??this.getDisplayWidth(),r=(i==null?void 0:i.offsetHeight)??220,o=r/2,c=r-2*20,h=.008,u=this.time-h,d=this.time,m=Math.ceil(u*this.sampleRate),g=[];let _=m;for(;;){const p=_/this.sampleRate;if(p>d)break;const y=(p-u)/h*a,v=2*Math.PI*t*p+this.phaseRad;let M=Math.sin(v);e!==void 0&&(M=Sn.quantize(M,e));const A=o-M*.8*c/2;g.push({x:y,y:A}),_++}return g}updateInfoPanel(){if(!this.infoPanel)return;const t=Sn.getAliasingInfo(this.frequency,this.sampleRate),e=t.nyquistFreq>=1e3?`${(t.nyquistFreq/1e3).toFixed(1)}kHz`:`${t.nyquistFreq.toFixed(0)}Hz`;if(this.infoPanel.updateItem("Nyquist",e),t.isAliasing){const n=t.aliasedFreq>=1e3?`${(t.aliasedFreq/1e3).toFixed(1)}kHz`:`${t.aliasedFreq.toFixed(0)}Hz`;this.infoPanel.updateItem("Alias",n,!0)}else this.infoPanel.updateItem("Alias","Clean",!1)}async playAudio(){var t;await this.ensureAudioGraph(),this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:"tone"}),this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad}),this.isPlaying=!0,(t=this.transportBar)==null||t.setPlaying(!0))}updateAudio(){this.isPlaying&&this.dspNode&&this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad})}stopAudio(){var t;this.dspNode&&this.dspNode.port.postMessage({type:"setMode",mode:"passthrough"}),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1)}async ensureAudioGraph(){if(this.dspNode&&this.outputGain)return;const t=await this.audioEngine.getContext();this.dspNode=await this.audioEngine.createDspNode({numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.outputGain=await this.audioEngine.createGain(),this.outputGain.gain.value=.9,this.dspNode.connect(this.outputGain),this.outputGain.connect(t.destination)}destroy(){var t,e;this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onResize),this.stopAudio(),(t=this.dspNode)==null||t.disconnect(),(e=this.outputGain)==null||e.disconnect(),this.dspNode=null,this.outputGain=null}}class Gn{constructor(t){x(this,"overlayCanvas");x(this,"ctx");x(this,"glCanvas");x(this,"gl",null);x(this,"container");x(this,"options");x(this,"glProgram",null);x(this,"glPosBuffer",null);x(this,"glResolutionLoc",null);x(this,"glColorLoc",null);x(this,"glPosAttribLoc",-1);x(this,"dpr",1);x(this,"minLogFreq",20);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)",minFreq:-24e3,maxFreq:24e3,minDb:-120,maxDb:20,logScale:!1,...t},this.container=this.createContainer(),this.glCanvas=this.container.querySelector(".spectrum-webgl"),this.overlayCanvas=this.container.querySelector(".spectrum-canvas"),this.ctx=this.overlayCanvas.getContext("2d",{alpha:!0}),this.gl=this.glCanvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0}),this.setupCanvas(),this.initGL()}createContainer(){const t=document.createElement("div");t.className="spectrum-display",t.dataset.tooltip=`${this.options.label} — frequency-domain view (horizontal: frequency, vertical: level)`;const e=document.createElement("canvas");e.className="spectrum-webgl";const n=document.createElement("canvas");return n.className="spectrum-canvas",t.appendChild(e),t.appendChild(n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.overlayCanvas.width=this.options.width*this.dpr,this.overlayCanvas.height=this.options.height*this.dpr,this.glCanvas.width=this.options.width*this.dpr,this.glCanvas.height=this.options.height*this.dpr,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.gl&&this.gl.viewport(0,0,this.glCanvas.width,this.glCanvas.height)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas(),this.clear()}initGL(){if(!this.gl)return;const t=`
      attribute vec2 a_position;
      uniform vec2 u_resolution;
      void main() {
        vec2 zeroToOne = a_position / u_resolution;
        vec2 zeroToTwo = zeroToOne * 2.0;
        vec2 clipSpace = zeroToTwo - 1.0;
        gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);
      }
    `,e=`
      precision mediump float;
      uniform vec4 u_color;
      void main() {
        gl_FragColor = u_color;
      }
    `,n=this.createShader(this.gl.VERTEX_SHADER,t),i=this.createShader(this.gl.FRAGMENT_SHADER,e);if(!n||!i)return;const a=this.gl.createProgram();a&&(this.gl.attachShader(a,n),this.gl.attachShader(a,i),this.gl.linkProgram(a),this.gl.getProgramParameter(a,this.gl.LINK_STATUS)&&(this.glProgram=a,this.glPosBuffer=this.gl.createBuffer(),this.glPosAttribLoc=this.gl.getAttribLocation(a,"a_position"),this.glResolutionLoc=this.gl.getUniformLocation(a,"u_resolution"),this.glColorLoc=this.gl.getUniformLocation(a,"u_color"),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)))}createShader(t,e){if(!this.gl)return null;const n=this.gl.createShader(t);return!n||(this.gl.shaderSource(n,e),this.gl.compileShader(n),!this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS))?null:n}clear(){this.gl&&(this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t}=this.options;this.ctx.font="600 14px JetBrains Mono",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)",this.ctx.textAlign="left",this.ctx.fillText(this.options.label,10,20),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath(),[-100,-80,-60,-40,-20,0].forEach(n=>{if(n>=this.options.minDb&&n<=this.options.maxDb){const i=this.dbToY(n);this.ctx.moveTo(0,i),this.ctx.lineTo(t,i)}}),this.ctx.stroke()}drawFreqAxis(t=5){const{width:e,height:n,minFreq:i,maxFreq:a}=this.options;if(a<=i)return;const r=n-4;this.ctx.strokeStyle="rgba(255, 255, 255, 0.2)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,r),this.ctx.lineTo(e,r),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.4)",this.ctx.font="13px 'JetBrains Mono', monospace",this.ctx.textAlign="center";const o=this.options.logScale?this.logTickFreqs():Array.from({length:t+1},(l,c)=>i+c/t*(a-i));for(const l of o){const c=this.freqToX(l);this.ctx.beginPath(),this.ctx.moveTo(c,r-4),this.ctx.lineTo(c,r),this.ctx.stroke();const h=Math.abs(l)>=1e3?`${(l/1e3).toFixed(1)}k`:`${Math.round(l)}`;this.ctx.fillText(h,c,n-1)}}logTickFreqs(){const t=Math.max(this.minLogFreq,this.options.minFreq),e=this.options.maxFreq;return[20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4].filter(i=>i>=t&&i<=e)}drawSamplingGrid(t){const e=t/2,{height:n}=this.options,i=(a,r,o,l)=>{const c=this.freqToX(a);c<0||c>this.options.width||(this.ctx.strokeStyle=r,this.ctx.lineWidth=1.5,l?this.ctx.setLineDash([4,4]):this.ctx.setLineDash([]),this.ctx.globalAlpha=.6,this.ctx.beginPath(),this.ctx.moveTo(c,0),this.ctx.lineTo(c,n),this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=r,this.ctx.font="13px JetBrains Mono",this.ctx.textAlign="center",this.ctx.fillText(o,c,n-10))};i(0,"rgba(255,255,255,0.6)","DC (0 Hz)",!1),i(e,"#c5ff74",`+Fn (${(e/1e3).toFixed(1)}k)`,!0),i(-e,"#c5ff74","-Fn",!0),i(t,"rgba(255,255,255,0.3)","+Fs",!0),i(-t,"rgba(255,255,255,0.3)","-Fs",!0),i(t*2,"rgba(255,255,255,0.3)","+2Fs",!0),i(-t*2,"rgba(255,255,255,0.3)","-2Fs",!0)}drawLowPassOverlay(t,e=!1){const{width:n,height:i,maxFreq:a,minDb:r,maxDb:o}=this.options,l=Math.max(0,t),c=e?"#ffc9a8":"#ffe6bf",h=e?"rgba(255, 201, 168, 0.10)":"rgba(255, 230, 191, 0.07)",u=256,d=new Float32Array(u*2);for(let g=0;g<u;g++){const _=g/(u-1)*n,p=g/(u-1)*a,f=l>1?p/l:1e6,y=1/Math.sqrt(1+Math.pow(f,4)),v=Math.max(r,Math.min(o,20*Math.log10(y+1e-8))),M=this.dbToY(v);d[g*2]=_+n/2,d[g*2+1]=M}this.ctx.save(),this.ctx.fillStyle=h,this.ctx.beginPath(),this.ctx.rect(0,0,n,i),this.ctx.fill(),this.ctx.restore(),this.drawLineGPU(d,c,e?.95:.8);const m=new Float32Array(u*2);for(let g=0;g<u;g++)m[g*2]=n-d[g*2],m[g*2+1]=d[g*2+1];this.drawLineGPU(m,c,e?.95:.8),this.ctx.strokeStyle=c,this.ctx.lineWidth=e?1.8:1.2,this.ctx.globalAlpha=e?.85:.65,this.ctx.beginPath();for(let g=0;g<u;g++){const _=d[g*2],p=d[g*2+1];g===0?this.ctx.moveTo(_,p):this.ctx.lineTo(_,p)}this.ctx.stroke(),this.ctx.beginPath();for(let g=0;g<u;g++){const _=m[g*2],p=m[g*2+1];g===0?this.ctx.moveTo(_,p):this.ctx.lineTo(_,p)}this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=c,this.ctx.font="700 13px JetBrains Mono",this.ctx.textAlign="left",this.ctx.fillText(`LPF ${Math.round(l)} Hz`,Math.min(n-90,n/2+8),14)}drawSpectrum(t,e,n,i=2,a=1,r=!1){if(t.length===0||e.length===0)return;const o=new Float32Array(t.length*2);for(let l=0;l<t.length;l++){const c=t[l];let h=e[l];h<this.options.minDb&&(h=this.options.minDb),o[l*2]=this.freqToX(c),o[l*2+1]=this.dbToY(h)}this.drawLineGPU(o,n,a),r&&this.drawAreaGPU(o,n,Math.min(.35,a*.35))}drawLineGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const i=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,i[0],i[1],i[2],i[3]),this.gl.drawArrays(this.gl.LINE_STRIP,0,t.length/2)}drawAreaGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const i=this.dbToY(this.options.minDb),a=new Float32Array(t.length*2);for(let o=0;o<t.length/2;o++)a[o*4]=t[o*2],a[o*4+1]=i,a[o*4+2]=t[o*2],a[o*4+3]=t[o*2+1];const r=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,a,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,r[0],r[1],r[2],r[3]),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,a.length/2)}parseColor(t,e){if(t.startsWith("#")){const i=t.slice(1),a=i.length===3?i.split("").map(o=>o+o).join(""):i,r=parseInt(a,16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255,e]}const n=t.match(/rgba?\(([^)]+)\)/);if(n){const i=n[1].split(",").map(c=>c.trim()),a=Number(i[0])/255,r=Number(i[1])/255,o=Number(i[2])/255,l=i[3]!==void 0?Number(i[3])*e:e;return[a,r,o,l]}return[.32,.81,1,e]}freqToX(t){if(this.options.logScale){const n=Math.max(this.minLogFreq,this.options.minFreq),i=Math.max(n*1.001,this.options.maxFreq),a=Math.max(n,Math.abs(t));return(Math.log10(a)-Math.log10(n))/(Math.log10(i)-Math.log10(n))*this.options.width}const e=this.options.maxFreq-this.options.minFreq;return(t-this.options.minFreq)/e*this.options.width}dbToY(t){const e=this.options.maxDb-this.options.minDb;return(this.options.maxDb-t)/e*this.options.height}getElement(){return this.container}}class Ha{constructor(t,e){x(this,"container");x(this,"input");x(this,"valueDisplay");x(this,"onChange");x(this,"config");this.config=t,this.onChange=e,this.container=this.createContainer(),this.input=this.container.querySelector("input"),this.valueDisplay=this.container.querySelector(".slider-value"),this.input.setAttribute("aria-label",this.config.label),this.setupEventListeners(),this.updateDisplay()}createContainer(){const t=document.createElement("div");return t.className="slider-container",t.innerHTML=`
      <div class="slider-label">${this.config.label}</div>
      <div class="slider-wrapper">
        <input 
          type="range" 
          class="slider-input"
          min="${this.config.min}"
          max="${this.config.max}"
          step="${this.config.step}"
          value="${this.config.value}"
        />
        <div class="slider-value">${this.config.value} ${this.config.unit}</div>
      </div>
    `,t}setupEventListeners(){this.input.addEventListener("input",()=>{const t=parseFloat(this.input.value);this.updateDisplay(),this.onChange(t)})}updateDisplay(){const t=parseFloat(this.input.value);let e;this.config.unit==="%"?e=t.toFixed(1):t>=1e3?e=`${(t/1e3).toFixed(1)}k`:e=t.toString(),this.valueDisplay.textContent=`${e} ${this.config.unit}`;const n=(t-this.config.min)/(this.config.max-this.config.min)*100;this.input.style.setProperty("--fill",`${Math.max(0,Math.min(100,n))}%`),this.container.dataset.tooltip=`${this.config.label}: ${e} ${this.config.unit}  ·  drag the slider to adjust`}getValue(){return parseFloat(this.input.value)}setValue(t){this.input.value=t.toString(),this.updateDisplay()}getElement(){return this.container}}class Di{constructor(t,e){x(this,"container");x(this,"canvas");x(this,"ctx");x(this,"options");x(this,"onSeek");x(this,"waveformData",null);x(this,"sourceData",null);x(this,"duration",0);x(this,"playheadTime",0);x(this,"isDragging",!1);x(this,"dpr",1);this.options=t,this.onSeek=e,this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas(),this.attachListeners(),this.draw()}createContainer(){const t=document.createElement("div");t.className="timeline-panel",t.dataset.tooltip=`${this.options.title??"Audio"} — click or drag to move the playhead`;const e=document.createElement("div");e.className="timeline-title",e.textContent=this.options.title??"Audio";const n=document.createElement("canvas");return n.className="timeline-canvas",t.append(e,n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}attachListeners(){const t=n=>{if(this.duration<=0)return;const i=this.canvas.getBoundingClientRect(),a=Math.max(0,Math.min(i.width,n-i.left)),o=(i.width>0?a/i.width:0)*this.duration;this.setPlayhead(o),this.onSeek(o)};this.canvas.addEventListener("pointerdown",n=>{this.isDragging=!0,this.canvas.setPointerCapture(n.pointerId),t(n.clientX)}),this.canvas.addEventListener("pointermove",n=>{this.isDragging&&t(n.clientX)});const e=()=>{this.isDragging=!1};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e)}setWaveformFromBuffer(t){this.sourceData=new Float32Array(t.getChannelData(0)),this.rebuildWaveformPeaks(),this.duration=t.duration,this.playheadTime=0,this.draw()}setWaveformFromArray(t,e){this.sourceData=new Float32Array(t),this.rebuildWaveformPeaks(),this.duration=e>0?t.length/e:0,this.playheadTime=0,this.draw()}rebuildWaveformPeaks(){if(!this.sourceData){this.waveformData=null;return}const t=this.sourceData,e=Math.max(1,this.options.width),n=Math.max(1,Math.floor(t.length/e)),i=new Float32Array(e);for(let a=0;a<e;a++){const r=a*n,o=Math.min(r+n,t.length);let l=0;for(let c=r;c<o;c++){const h=Math.abs(t[c]);h>l&&(l=h)}i[a]=l}this.waveformData=i}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(60,Math.floor(e)),this.setupCanvas(),this.sourceData&&this.rebuildWaveformPeaks(),this.draw()}setPlayhead(t){this.playheadTime=Math.max(0,Math.min(this.duration,t)),this.draw()}draw(){const{width:t,height:e}=this.options,n=e/2;if(this.ctx.clearRect(0,0,t,e),this.ctx.fillStyle="rgba(10, 23, 38, 0.92)",this.ctx.fillRect(0,0,t,e),this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.waveformData){this.ctx.strokeStyle="rgba(74, 191, 173, 0.95)",this.ctx.lineWidth=1.1,this.ctx.beginPath();for(let i=0;i<this.waveformData.length;i++){const a=this.waveformData[i],r=n-a*(e*.44),o=n+a*(e*.44);this.ctx.moveTo(i,r),this.ctx.lineTo(i,o)}this.ctx.stroke()}if(this.duration>0){const i=this.playheadTime/this.duration*t;this.ctx.strokeStyle="#ffe6bf",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,e),this.ctx.stroke(),this.ctx.fillStyle="#ffe6bf",this.ctx.beginPath(),this.ctx.moveTo(i-6,0),this.ctx.lineTo(i+6,0),this.ctx.lineTo(i,8),this.ctx.closePath(),this.ctx.fill()}}getElement(){return this.container}}function ji({modes:s,value:t,onChange:e,className:n}){const i=document.createElement("div");n&&(i.className=n);const a=s.map(({value:r,label:o})=>{const l=document.createElement("button");return l.className="transport-mode-btn"+(r===t?" active":""),l.type="button",l.textContent=o,l.dataset.tooltip=`Show ${o.toLowerCase()} audio`,l.setAttribute("aria-pressed",String(r===t)),l.addEventListener("click",()=>{a.forEach(c=>{c.classList.toggle("active",c===l),c.setAttribute("aria-pressed",String(c===l))}),e(r)}),i.appendChild(l),l});return i}function Tr(s){let t=1;for(;t<s;)t<<=1;return t}function Ji(s,t){const e=s.length;let n=0;for(let i=0;i<e-1;i++){if(i<n){let r=s[i];s[i]=s[n],s[n]=r,r=t[i],t[i]=t[n],t[n]=r}let a=e>>1;for(;a<=n;)n-=a,a>>=1;n+=a}for(let i=1;i<e;i<<=1){const a=i<<1,r=Math.PI/i;for(let o=0;o<i;o++){const l=-o*r,c=Math.cos(l),h=Math.sin(l);for(let u=o;u<e;u+=a){const d=u+i,m=c*s[d]-h*t[d],g=c*t[d]+h*s[d];s[d]=s[u]-m,t[d]=t[u]-g,s[u]+=m,t[u]+=g}}}}function Hs(s){const t=s.length,e=new Float32Array(t),n=new Float32Array(t);return e.set(s),Ji(e,n),{re:e,im:n}}function ec(s,t,e=512){const n=Tr(Math.max(64,s.length)),i=new Float64Array(n),a=new Float64Array(n),r=Math.min(s.length,n);for(let u=0;u<r;u++){const d=.5*(1-Math.cos(2*Math.PI*u/Math.max(1,r-1)));i[u]=s[u]*d}Ji(i,a);const o=n/2,l=new Float32Array(e),c=new Float32Array(e),h=t/2;for(let u=0;u<e;u++){const d=u/(e-1)*h;l[u]=d;const m=Math.round(d/h*(o-1)),g=Math.sqrt(i[m]*i[m]+a[m]*a[m])/n;c[u]=Math.max(-120,20*Math.log10(g+1e-12))}return{freqs:l,magnitudesDb:c}}const me=class me{constructor(t){x(this,"container");x(this,"sharedAudio",on.getInstance());x(this,"audioContext",null);x(this,"sourceNode",null);x(this,"dspNode",null);x(this,"outputLpFilters",[]);x(this,"gainNode",null);x(this,"isPlaying",!1);x(this,"loop",!1);x(this,"isPaused",!1);x(this,"animationId",null);x(this,"onResize",()=>this.resizeDisplays());x(this,"rawAudioBuffer",null);x(this,"filteredBuffer",null);x(this,"targetSampleRate",32e3);x(this,"targetBitDepth",16);x(this,"lpfCutoff",22050);x(this,"startTime",0);x(this,"pausedAt",0);x(this,"isProcessing",!1);x(this,"pendingUpdate",!1);x(this,"lpfEditHighlightUntil",0);x(this,"originalSpectrum");x(this,"sampleRateSlider");x(this,"bitDepthKnob");x(this,"lpfKnob");x(this,"waveformTimeline");x(this,"transportBar");x(this,"infoPanel");x(this,"statusLabel");x(this,"playMode","aliased");x(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),modeSelector:Mt("modeSelector",!0),waveform:Mt("waveform",!0),spectrum:Mt("spectrum",!0),lpfKnob:Mt("lpfKnob",!0),bitDepthKnob:Mt("bitDepthKnob",!0),sampleRateSlider:Mt("sampleRateSlider",!0),infoPanel:Mt("infoPanel",!0)});x(this,"_windowData",new Float32Array(me.VIS_WINDOW_SIZE));x(this,"_fftReal",new Float64Array(me.VIS_WINDOW_SIZE));x(this,"_fftImag",new Float64Array(me.VIS_WINDOW_SIZE));x(this,"_fftMag",new Float32Array(me.VIS_NUM_BINS));x(this,"_basebandDb",new Float32Array(me.VIS_NUM_BINS));x(this,"_graphFreqs",new Float32Array(me.VIS_NUM_POINTS));x(this,"_baseGraph",new Float32Array(me.VIS_NUM_POINTS));x(this,"_copiesGraph",new Float32Array(me.VIS_NUM_POINTS));x(this,"_aliasingGraph",new Float32Array(me.VIS_NUM_POINTS));const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),await this.loadDefaultAudio()}createUI(){if(this.ui.transport){if(this.transportBar=new Zn({onPlay:()=>this.playAudio(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onLoopToggle:n=>{if(this.isPlaying&&this.audioContext){const i=this.currentPlaybackTime();this.pausedAt=i,this.startTime=this.audioContext.currentTime-i}this.loop=n,this.sourceNode&&(this.sourceNode.loop=n)},onUpload:n=>this.handleFileUpload(n),uploadLabel:"Upload Audio",showUpload:this.ui.upload}),this.ui.modeSelector){const n=ji({className:"transport-mode-group",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"aliased",label:"Processed"},{value:"alias_only",label:"Diff"}],onChange:i=>{this.playMode=i,this.isPlaying&&(this.stopAudio(!1),this.playAudio(i))}});this.transportBar.getElement().querySelector(".transport-left").appendChild(n)}this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.dataset.tooltip="Playback status and loaded clip",this.statusLabel.textContent="Loading…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())}else this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status transport-status--standalone",this.statusLabel.textContent="Loading…",this.container.appendChild(this.statusLabel);const t=Math.max(620,this.container.clientWidth-2);if(this.ui.waveform&&(this.waveformTimeline=new Di({width:t,height:84,title:"Waveform"},n=>this.handlePlayheadSeek(n)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.spectrum){const n=document.createElement("div");n.className="spectrum-row",this.originalSpectrum=new Gn({width:t,height:238,label:"Spectrum",minFreq:-48e3,maxFreq:48e3}),n.appendChild(this.originalSpectrum.getElement()),this.container.appendChild(n)}if(this.ui.lpfKnob||this.ui.bitDepthKnob||this.ui.sampleRateSlider||this.ui.infoPanel){const n=document.createElement("div");n.className="controls-container audio-controls",this.ui.infoPanel&&(this.infoPanel=new ol([{label:"Nyquist",value:"5.5 kHz"},{label:"LPF cutoff",value:"22.0 kHz"}]));const i=document.createElement("div");i.className="knobs-wrapper",this.ui.lpfKnob&&(this.lpfKnob=new Hn({min:500,max:22050,value:this.lpfCutoff,step:100,label:"LPF",unit:"Hz"},r=>this.handleLPFChange(r)),i.appendChild(this.lpfKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new Hn({min:1,max:16,value:16,step:1,label:"Bit depth",unit:"bits"},r=>this.handleBitDepthChange(r)),i.appendChild(this.bitDepthKnob.getElement()));const a=document.createElement("div");a.className="right-controls control-column",this.ui.sampleRateSlider&&(this.sampleRateSlider=new Ha({min:1e3,max:48e3,value:this.targetSampleRate,step:100,label:"Sample rate",unit:"Hz"},r=>this.handleSampleRateChange(r)),a.appendChild(this.sampleRateSlider.getElement())),this.ui.infoPanel&&this.infoPanel&&n.appendChild(this.infoPanel.getElement()),i.childElementCount>0&&n.appendChild(i),a.childElementCount>0&&n.appendChild(a),this.container.appendChild(n)}this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){const t=Math.max(620,this.container.clientWidth-2);this.ui.spectrum&&this.originalSpectrum&&this.originalSpectrum.resize(t,238),this.ui.waveform&&this.waveformTimeline&&this.waveformTimeline.resize(t,84)}async loadDefaultAudio(){const t=Yn("audio");if(console.log("[audio-app] location.search =",window.location.search,"| audioParam =",t),t){await this.loadAudioFromUrl(t);return}await this.loadBuiltInSweep()}async loadAudioFromUrl(t){this.statusLabel.textContent="Loading audio…";try{this.audioContext||(this.audioContext=await this.sharedAudio.getContext());const e=Li(t);console.log("[audio-app] fetching",e);const n=await fetch(e);if(!n.ok)throw new Error(`HTTP ${n.status}`);const i=await n.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(i),this.pausedAt=0,await this.processAudioUpdate();const a=t.split("/").pop()??t;this.statusLabel.textContent=a}catch(e){console.error("[audio-app] failed to load default audio:",e),this.statusLabel.textContent="Error loading audio URL",await this.loadBuiltInSweep()}}async loadBuiltInSweep(){this.audioContext=await this.sharedAudio.getContext(44100),this.rawAudioBuffer=this.audioContext.createBuffer(2,132300,44100);const a=this.rawAudioBuffer.getChannelData(0);for(let o=0;o<132300;o++){const l=o/44100,c=100*Math.pow(22e3/100,l/3);a[o]=Math.sin(2*Math.PI*c*l)*.5}const r=this.rawAudioBuffer.getChannelData(1);for(let o=0;o<132300;o++){const l=o/44100,c=22e3*Math.pow(100/22e3,l/3);r[o]=Math.sin(2*Math.PI*c*l)*.5}await this.processAudioUpdate(),this.statusLabel.textContent="Default: sine sweep"}async handleFileUpload(t){this.statusLabel.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const e=await t.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(e),this.pausedAt=0,await this.processAudioUpdate(),this.statusLabel.textContent=t.name}catch{this.statusLabel.textContent="Error loading audio"}}handlePlayheadSeek(t){this.filteredBuffer&&(this.pausedAt=t,this.isPlaying?this.restartPlayback():this.updateVisualization())}handleLPFChange(t){this.lpfCutoff=t,this.lpfEditHighlightUntil=performance.now()+900,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.triggerProcessing()}handleSampleRateChange(t){this.targetSampleRate=t,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.syncOutputLpCutoff(),this.triggerProcessing()}handleBitDepthChange(t){this.targetBitDepth=t,this.syncRealtimeDspParams(),this.triggerProcessing()}triggerProcessing(){if(this.isPlaying||this.updateVisualization(),this.isProcessing){this.pendingUpdate=!0;return}this.processAudioUpdate()}async processAudioUpdate(){this.isProcessing=!0,this.pendingUpdate=!1,this.rawAudioBuffer&&(this.filteredBuffer=await this.createFilteredBuffer(this.rawAudioBuffer,this.lpfCutoff),this.pausedAt=Math.min(this.pausedAt,this.filteredBuffer.duration),this.waveformTimeline&&(this.waveformTimeline.setWaveformFromBuffer(this.filteredBuffer),this.waveformTimeline.setPlayhead(this.pausedAt))),this.isProcessing=!1,this.pendingUpdate&&this.processAudioUpdate(),this.isPlaying||this.updateVisualization()}updateInfoPanel(){if(!this.infoPanel)return;const t=this.targetSampleRate/2;this.infoPanel.updateItem("Nyquist",t>=1e3?`${(t/1e3).toFixed(1)} kHz`:`${t.toFixed(0)} Hz`),this.infoPanel.updateItem("LPF cutoff",this.lpfCutoff>=1e3?`${(this.lpfCutoff/1e3).toFixed(1)} kHz`:`${this.lpfCutoff.toFixed(0)} Hz`)}async createFilteredBuffer(t,e){const n=t.numberOfChannels,i=new OfflineAudioContext(n,t.length,t.sampleRate),a=i.createBufferSource();a.buffer=t;const r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.707;const o=i.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.707,a.connect(r),r.connect(o),o.connect(i.destination),a.start(),await i.startRendering()}async playAudio(t){var n;if(!this.filteredBuffer||!this.audioContext)return;this.isPlaying&&this.stopAudio(!1),this.playMode=t;let e;t==="original"?e=this.filteredBuffer:e=this.rawAudioBuffer??this.filteredBuffer,this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=e,this.sourceNode.loop=this.loop,this.gainNode=this.audioContext.createGain(),t==="aliased"||t==="alias_only"?(this.dspNode=await this.sharedAudio.createDspNode(),this.configureRealtimeDsp(t),this.sourceNode.connect(this.dspNode),this.connectOutputLowpass(this.dspNode).connect(this.gainNode)):this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{var i;this.isPlaying&&((i=this.sourceNode)!=null&&i.buffer)&&this.audioContext.currentTime-this.startTime>=this.sourceNode.buffer.duration-.1&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(n=this.transportBar)==null||n.setPlaying(!0),this.statusLabel.textContent=t==="original"?"Playing original":t==="aliased"?"Playing processed":"Playing diff",this.startRealtimeVisualization()}currentPlaybackTime(){var n,i,a;const t=((i=(n=this.sourceNode)==null?void 0:n.buffer)==null?void 0:i.duration)??((a=this.filteredBuffer)==null?void 0:a.duration)??0;if(!this.audioContext)return this.pausedAt;const e=this.audioContext.currentTime-this.startTime;return this.loop&&t>0?e%t:Math.min(e,t)}pauseAudio(){var t,e;!this.isPlaying||!this.audioContext||(this.pausedAt=this.currentPlaybackTime(),this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel.textContent="Paused",this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,n;this._teardownNodes(),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel.textContent="Stopped",this.filteredBuffer&&((n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt))}_teardownNodes(){var t,e,n,i;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),(i=this.dspNode)==null||i.disconnect();for(const a of this.outputLpFilters)a.disconnect();this.outputLpFilters=[],this.sourceNode=null,this.gainNode=null,this.dspNode=null}connectOutputLowpass(t){if(!this.audioContext)return t;const e=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);let n=t;this.outputLpFilters=[];for(let i=0;i<2;i++){const a=this.audioContext.createBiquadFilter();a.type="lowpass",a.frequency.value=e,a.Q.value=.707,n.connect(a),n=a,this.outputLpFilters.push(a)}return n}syncOutputLpCutoff(){if(!this.audioContext)return;const t=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);for(const e of this.outputLpFilters)e.frequency.value=t}restartPlayback(){if(!this.isPlaying)return;const t=this.playMode;this.stopAudio(!1),this.playAudio(t)}configureRealtimeDsp(t){this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:t==="alias_only"?"alias-diff":"alias-processed"}),this.syncRealtimeDspParams())}syncRealtimeDspParams(){!this.dspNode||!this.audioContext||this.dspNode.port.postMessage({type:"setAliasingParams",lpfCutoff:this.lpfCutoff,targetSampleRate:this.targetSampleRate,bitDepth:this.targetBitDepth,sourceSampleRate:this.audioContext.sampleRate})}updateVisualization(){if(!this.filteredBuffer||!this.ui.spectrum||!this.originalSpectrum)return;const t=me.VIS_WINDOW_SIZE,e=me.VIS_NUM_BINS,n=me.VIS_NUM_POINTS,i=this.filteredBuffer.sampleRate,a=Math.floor(this.pausedAt*i),o=Math.pow(2,this.targetBitDepth)/2,l=this.filteredBuffer.numberOfChannels;this._windowData.fill(0);for(let m=0;m<l;m++){const g=this.filteredBuffer.getChannelData(m);for(let _=0;_<t;_++){const p=a+_;if(p<g.length){const f=.5*(1-Math.cos(2*Math.PI*_/(t-1)));let y=g[p]*f;y=Math.round(y*o)/o,this._windowData[_]+=y}}}if(l>1){const m=1/l;for(let g=0;g<t;g++)this._windowData[g]*=m}this.computeFFT(this._windowData,this._fftMag);for(let m=0;m<e;m++)this._basebandDb[m]=20*Math.log10(this._fftMag[m]+1e-10);const c=m=>{const g=Math.abs(m);if(g>i/2)return-120;const _=Math.round(g/(i/2)*(e-1));return _>=e?-120:this._basebandDb[_]},h=-48e3,u=48e3,d=this.targetSampleRate;for(let m=0;m<n;m++){const g=h+m/(n-1)*(u-h);this._graphFreqs[m]=g,this._baseGraph[m]=c(g);let _=-120;const p=Math.ceil((g-i/2)/d),f=Math.floor((g+i/2)/d);for(let y=p;y<=f;y++){if(y===0)continue;const v=c(g-y*d);v>_&&(_=v)}this._copiesGraph[m]=_,this._aliasingGraph[m]=g>=-d/2&&g<=d/2?_:-120}this.originalSpectrum.clear(),this.originalSpectrum.drawGrid(),this.originalSpectrum.drawLowPassOverlay(this.lpfCutoff,performance.now()<this.lpfEditHighlightUntil),this.originalSpectrum.drawSamplingGrid(d),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._copiesGraph,"rgba(255,255,255,0.3)",1.5),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._aliasingGraph,"rgba(255,64,164,0.92)",2,1,!0),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._baseGraph,"#5fe8d1",2.5)}computeFFT(t,e){const n=t.length,i=this._fftReal,a=this._fftImag;for(let o=0;o<n;o++)i[o]=t[o],a[o]=0;Ji(i,a);const r=n/2;for(let o=0;o<r;o++)e[o]=Math.sqrt(i[o]*i[o]+a[o]*a[o])/n}startRealtimeVisualization(){const t=()=>{var e;!this.isPlaying||!this.audioContext||(this.pausedAt=this.currentPlaybackTime(),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.updateVisualization(),this.animationId=requestAnimationFrame(t))};t()}destroy(){this.stopAudio(!0),window.removeEventListener("resize",this.onResize),this.audioContext=null}};x(me,"VIS_WINDOW_SIZE",512),x(me,"VIS_NUM_POINTS",800),x(me,"VIS_NUM_BINS",me.VIS_WINDOW_SIZE/2);let Ga=me;const nc={"Z-plane":"Pole–zero map — drag the poles and zeros to shape the filter","|H(z)|":"Magnitude surface — height shows |H(z)| across the z-plane",Spectrum:"Frequency response — magnitude in dB across frequency",Phase:"Phase response — phase shift in radians across frequency","X/Y":"Input/output transfer curve built up over time",Scope:"Time-domain output waveform","Impulse response":"Impulse response of the current filter"};function bn(s,t=""){const e=document.createElement("div");e.className=`viz-panel${t?` ${t}`:""}`;const n=document.createElement("div");return n.className="viz-panel-label",n.textContent=s,e.dataset.tooltip=nc[s]??`${s} — data view`,e.appendChild(n),e}function Mi(s,t,e,n="viz-canvas"){const i=window.devicePixelRatio||1,a=document.createElement("canvas");return a.className=n,a.width=t*i,a.height=e*i,a.getContext("2d").scale(i,i),s.appendChild(a),a}function En(s,t,e,n=0,i=0){const a=window.devicePixelRatio||1,r=Math.max(n,Math.floor(t)),o=Math.max(i,Math.floor(e));s.width=r*a,s.height=o*a;const l=s.getContext("2d");l.setTransform(1,0,0,1,0,0),l.scale(a,a)}function ll(s,t,e){const n=Math.min(window.devicePixelRatio||1,2),i=document.createElement("canvas");return i.className="viz-canvas viz-canvas--webgl",i.width=t*n,i.height=e*n,s.appendChild(i),i}function cl(s,t,e,n=0,i=0){const a=Math.min(window.devicePixelRatio||1,2),r=Math.max(n,Math.floor(t)),o=Math.max(i,Math.floor(e));s.width=r*a,s.height=o*a}function ic(s,t=-80){const e=Tr(s.length),n=new Float32Array(e);n.set(s.subarray(0,Math.min(s.length,e)));const{re:i,im:a}=Hs(n),r=e/2,o=new Float32Array(r);for(let l=0;l<r;l++){const c=Math.sqrt(i[l]*i[l]+a[l]*a[l])/e;o[l]=Math.max(t,20*Math.log10(c+1e-10))}return o}function ra(s,t,e,n){const i=e/2,a=s/2,r=n/2,o=new Float32Array(n);for(let d=0;d<r;d++){const m=d/r*a,g=Math.exp(-.5*Math.pow((m-t)/i,2));o[d]=g,d>0&&d<r&&(o[n-d]=g)}const{re:l}=Hs(o),c=new Float32Array(n);for(let d=0;d<n;d++)c[d]=l[d]/n;const h=new Float32Array(n),u=n/2;for(let d=0;d<n;d++)h[d]=c[(d+u)%n];for(let d=0;d<n;d++)h[d]*=.5*(1-Math.cos(2*Math.PI*d/(n-1)));return h}const zn=class zn{constructor(t){x(this,"container");x(this,"animId",null);x(this,"animTime",0);x(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),waveform:Mt("waveform",!0),ir:Mt("ir",!0),liveSpectrum:Mt("liveSpectrum",!0),staticSpectrum:Mt("staticSpectrum",!0),filterControls:Mt("filterControls",!0),modeSelector:Mt("modeSelector",!0)});x(this,"fCenter",1e3);x(this,"bandwidth",40);x(this,"nFft",4096);x(this,"sourceBuffer",null);x(this,"sourceSamples",null);x(this,"sourceSampleRate",44100);x(this,"sourceFullFftDb",null);x(this,"processedFullFftDb",null);x(this,"processedFftDirty",!0);x(this,"sharedAudio",on.getInstance());x(this,"audioCtx",null);x(this,"isPlaying",!1);x(this,"isPaused",!1);x(this,"pausedAt",0);x(this,"playbackStartedAt",0);x(this,"sourceNode",null);x(this,"convolver",null);x(this,"outputGain",null);x(this,"sourceAnalyser",null);x(this,"outputAnalyser",null);x(this,"dryGain",null);x(this,"playMode","filtered");x(this,"loop",!1);x(this,"convolverRebuildTimer",null);x(this,"transportBar");x(this,"statusLabel");x(this,"waveformTimeline");x(this,"sourceSpectrum");x(this,"processedSpectrum");x(this,"sourceStaticSpectrum");x(this,"processedStaticSpectrum");x(this,"irCanvas");x(this,"sourceFileLabel");x(this,"fCenterSlider");x(this,"bandwidthSlider");x(this,"liveSpecFreqs",new Float32Array(zn.SPEC_POINTS));x(this,"liveSpecDb",new Float32Array(zn.SPEC_POINTS));x(this,"analyserScratch",null);x(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),window.addEventListener("resize",this.onResize),this.startAnimation(),this.resizeLayout(),this.loadDefaultAudioClip()}async loadDefaultAudioClip(){var e,n;const t=Yn("audio");if(t){this.statusLabel&&(this.statusLabel.textContent="Loading…");try{await this.initAudio();const a=await(await fetch(Li(t))).arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(a),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate;const r=t.split("/").pop()??t;this.sourceFileLabel&&(this.sourceFileLabel.textContent=r),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${r} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()}catch{this.statusLabel&&(this.statusLabel.textContent="Load error")}}}async initAudio(){this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.audioCtx.state==="suspended"&&await this.audioCtx.resume(),this.sourceAnalyser||(this.sourceAnalyser=this.audioCtx.createAnalyser(),this.sourceAnalyser.fftSize=2048,this.sourceAnalyser.smoothingTimeConstant=.7,this.analyserScratch=new Uint8Array(this.sourceAnalyser.frequencyBinCount)),this.outputAnalyser||(this.outputAnalyser=this.audioCtx.createAnalyser(),this.outputAnalyser.fftSize=2048,this.outputAnalyser.smoothingTimeConstant=.55,this.outputGain||(this.outputGain=this.audioCtx.createGain(),this.outputGain.gain.value=.8),this.outputAnalyser.connect(this.outputGain)),this.dryGain||(this.dryGain=this.audioCtx.createGain(),this.dryGain.gain.value=.8,this.sourceAnalyser.connect(this.dryGain)),this.updateAudioRouting()}updateAudioRouting(){if(!(!this.audioCtx||!this.outputGain||!this.dryGain)){try{this.outputGain.disconnect()}catch{}try{this.dryGain.disconnect()}catch{}this.playMode==="filtered"?this.outputGain.connect(this.audioCtx.destination):this.dryGain.connect(this.audioCtx.destination)}}buildFilterIR(){if(!this.audioCtx)return null;const t=this.audioCtx.sampleRate,e=ra(t,this.fCenter,this.bandwidth,this.nFft),n=this.audioCtx.createBuffer(1,e.length,t);return n.getChannelData(0).set(e),n}rebuildConvolver(){var e;if(!this.audioCtx||!this.sourceAnalyser||!this.outputAnalyser)return;const t=this.buildFilterIR();if(t){try{(e=this.convolver)==null||e.disconnect()}catch{}this.convolver=this.audioCtx.createConvolver(),this.convolver.normalize=!1,this.convolver.buffer=t,this.sourceAnalyser.connect(this.convolver),this.convolver.connect(this.outputAnalyser),this.processedFftDirty=!0}}scheduleConvolverRebuild(){this.convolverRebuildTimer!==null&&clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=setTimeout(()=>{this.convolverRebuildTimer=null,this.isPlaying&&this.rebuildConvolver(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()},250)}recomputeSourceFft(){if(!this.sourceSamples)return;const t=this.sourceSamples.subarray(0,Math.min(this.sourceSamples.length,65536));this.sourceFullFftDb=ic(t)}recomputeProcessedFftAsync(){if(!this.sourceSamples||!this.audioCtx)return;this.processedFftDirty=!1;const t=this.audioCtx.sampleRate,e=this.sourceSamples,n=ra(t,this.fCenter,this.bandwidth,this.nFft),i=Math.min(e.length,t*4),a=e.subarray(0,i),r=Tr(a.length+n.length-1),o=new Float32Array(r);o.set(a);const l=new Float32Array(r);l.set(n);const c=Hs(o),h=Hs(l),u=new Float32Array(r),d=new Float32Array(r);for(let p=0;p<r;p++)u[p]=c.re[p]*h.re[p]-c.im[p]*h.im[p],d[p]=c.re[p]*h.im[p]+c.im[p]*h.re[p];const m=new Float32Array(r);for(let p=0;p<r;p++)m[p]=u[p];const g=r/2,_=new Float32Array(g);for(let p=0;p<g;p++)_[p]=Math.max(-80,20*Math.log10(Math.sqrt(u[p]*u[p]+d[p]*d[p])/r+1e-10));this.processedFullFftDb=_}async startPlayback(){var t;if(await this.initAudio(),!!this.audioCtx){if(!this.sourceBuffer){this.statusLabel&&(this.statusLabel.textContent="Load audio first");return}this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.sourceBuffer,this.sourceNode.loop=this.loop,this.sourceNode.connect(this.sourceAnalyser),this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.audioCtx||!this.sourceBuffer||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.sourceBuffer.duration-.05&&this.stopPlayback(!0)},this.rebuildConvolver(),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.isPlaying=!0,this.isPaused=!1,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel&&(this.statusLabel.textContent=this.playMode==="filtered"?"Filtered":"Original")}}currentPlaybackTime(){if(!this.audioCtx||!this.sourceBuffer)return this.pausedAt;const t=this.sourceBuffer.duration,e=this.audioCtx.currentTime-this.playbackStartedAt;return this.loop&&t>0?e%t:Math.min(e,t)}pausePlayback(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.currentPlaybackTime(),this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent="Paused"),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopPlayback(t=!1){var e,n;this._teardownNodes(),this.convolverRebuildTimer!==null&&(clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent=this.sourceBuffer?"Stopped":"Load audio"),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)}_teardownNodes(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect();try{(n=this.convolver)==null||n.disconnect()}catch{}this.sourceNode=null,this.convolver=null}async handleSourceClipUpload(t){var e,n;await this.initAudio(),this.statusLabel&&(this.statusLabel.textContent="Decoding…");try{const i=await t.arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(i),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate,this.sourceFileLabel&&(this.sourceFileLabel.textContent=t.name),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${t.name} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync(),this.isPlaying&&(this.stopPlayback(!1),await this.startPlayback())}catch{this.statusLabel&&(this.statusLabel.textContent="Error loading audio")}}buildUI(){var a;document.body.classList.add("page-scroll");const t=document.createElement("div");t.className="zt-header",t.textContent="Z-transform",this.container.appendChild(t);const e=Math.max(600,this.container.clientWidth-2);if(this.ui.transport){if(this.transportBar=new Zn({onPlay:()=>this.startPlayback(),onPause:()=>this.pausePlayback(),onStop:()=>this.stopPlayback(!0),onUpload:r=>this.handleSourceClipUpload(r),uploadLabel:"Upload Audio",showUpload:this.ui.upload,onLoopToggle:r=>{if(this.isPlaying&&this.audioCtx){const o=this.currentPlaybackTime();this.pausedAt=o,this.playbackStartedAt=this.audioCtx.currentTime-o}this.loop=r,this.sourceNode&&(this.sourceNode.loop=r)}}),this.ui.modeSelector){const r=ji({className:"transport-mode-inline",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"filtered",label:"Filtered"}],onChange:o=>{this.playMode=o,this.updateAudioRouting(),this.statusLabel&&this.isPlaying&&(this.statusLabel.textContent=o==="filtered"?"Filtered":"Original")}});this.transportBar.getElement().querySelector(".transport-left").appendChild(r)}this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.dataset.tooltip="Playback status and source file",this.statusLabel.textContent="Load audio",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.sourceFileLabel=document.createElement("span"),this.sourceFileLabel.className="zt-source-file",this.sourceFileLabel.dataset.tooltip="Currently loaded audio file",this.sourceFileLabel.textContent="",(a=this.transportBar.getElement().querySelector(".transport-right"))==null||a.prepend(this.sourceFileLabel),this.container.appendChild(this.transportBar.getElement())}this.ui.waveform&&(this.waveformTimeline=new Di({width:e,height:54,title:"Source"},r=>this.handlePlayheadSeek(r)),this.waveformTimeline.getElement().classList.add("timeline-panel--spaced"),this.container.appendChild(this.waveformTimeline.getElement()));let n=null;if(this.ui.filterControls){n=document.createElement("div"),n.className="zt-filter-panel",n.dataset.tooltip="Bandpass filter controls";const r=document.createElement("div");r.className="zt-filter-title",r.textContent="Bandpass",n.appendChild(r);const o=document.createElement("div");o.className="zt-slider-row",this.fCenterSlider=new Ha({min:100,max:1e4,value:this.fCenter,step:50,label:"Center",unit:"Hz"},l=>{this.fCenter=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),this.bandwidthSlider=new Ha({min:10,max:2e3,value:this.bandwidth,step:10,label:"Bandwidth",unit:"Hz"},l=>{this.bandwidth=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),o.appendChild(this.fCenterSlider.getElement()),o.appendChild(this.bandwidthSlider.getElement()),n.appendChild(o)}if(this.ui.ir){const r=bn("Impulse response","viz-panel--label-lg viz-panel--spaced");this.irCanvas=Mi(r,e,52),this.container.appendChild(r)}const i=Math.floor((e-6)/2);if(this.ui.liveSpectrum){const r=document.createElement("div");r.className="zt-spectrum-row",this.sourceSpectrum=new Gn({width:i,height:110,label:"Source",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.sourceSpectrum.getElement()),this.processedSpectrum=new Gn({width:i,height:110,label:"Processed",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.processedSpectrum.getElement()),this.container.appendChild(r)}if(this.ui.staticSpectrum){const r=document.createElement("div");r.className="zt-spectrum-row",this.sourceStaticSpectrum=new Gn({width:i,height:110,label:"Source (full)",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.sourceStaticSpectrum.getElement()),this.processedStaticSpectrum=new Gn({width:i,height:110,label:"Processed (full)",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.processedStaticSpectrum.getElement()),this.container.appendChild(r)}n&&this.container.appendChild(n)}handlePlayheadSeek(t){var e;this.sourceBuffer&&(this.pausedAt=Math.max(0,Math.min(this.sourceBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopPlayback(!1),this.startPlayback()))}startAnimation(){let t=0;const e=n=>{const i=Math.min((n-t)/1e3,.05);t=n,this.animTime+=i,this.drawAll(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}drawAll(){var t;this.drawIR(),this.updateSpectrumDisplays(),this.isPlaying&&this.audioCtx&&this.sourceBuffer&&(this.pausedAt=this.currentPlaybackTime(),(t=this.waveformTimeline)==null||t.setPlayhead(this.pausedAt))}updateSpectrumDisplays(){var a,r,o,l,c,h,u,d,m,g,_,p,f;const t=this.sourceSampleRate/2,e=zn.SPEC_POINTS,n=Math.log10(20),i=Math.log10(t);for(let y=0;y<e;y++)this.liveSpecFreqs[y]=Math.pow(10,n+y/(e-1)*(i-n));if((a=this.sourceSpectrum)==null||a.clear(),(r=this.sourceSpectrum)==null||r.drawGrid(),this.isPlaying&&this.sourceAnalyser&&this.analyserScratch){this.sourceAnalyser.getByteFrequencyData(this.analyserScratch);const y=this.analyserScratch;for(let v=0;v<e;v++){const M=this.liveSpecFreqs[v],A=Math.round(M/t*(y.length-1)),T=y[Math.min(A,y.length-1)]/255;this.liveSpecDb[v]=-80+T*80}(o=this.sourceSpectrum)==null||o.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ff9fb2",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceSpectrum,this.sourceBuffer?"Press play":"Load audio");if(this.drawFilterOverlayOnSpectrum(this.sourceSpectrum,t),(l=this.processedSpectrum)==null||l.clear(),(c=this.processedSpectrum)==null||c.drawGrid(),this.isPlaying&&this.outputAnalyser&&this.analyserScratch){const y=new Uint8Array(this.outputAnalyser.frequencyBinCount);this.outputAnalyser.getByteFrequencyData(y);for(let v=0;v<e;v++){const M=this.liveSpecFreqs[v],A=Math.round(M/t*(y.length-1)),T=y[Math.min(A,y.length-1)]/255;this.liveSpecDb[v]=-80+T*80}(h=this.processedSpectrum)==null||h.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ffe6bf",2.5,1,!0)}else this.drawPlaceholderOnSpectrum(this.processedSpectrum,this.sourceBuffer?"Press play":"Load audio");if(this.drawFilterOverlayOnSpectrum(this.processedSpectrum,t),(u=this.sourceStaticSpectrum)==null||u.clear(),(d=this.sourceStaticSpectrum)==null||d.drawGrid(),this.sourceFullFftDb){const y=this.sourceFullFftDb,v=new Float32Array(e);for(let M=0;M<e;M++){const A=this.liveSpecFreqs[M],T=Math.round(A/t*(y.length-1));v[M]=y[Math.min(T,y.length-1)]}(m=this.sourceStaticSpectrum)==null||m.drawSpectrum(this.liveSpecFreqs,v,"#ff9fb2",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceStaticSpectrum,"Load audio");if(this.drawFilterOverlayOnSpectrum(this.sourceStaticSpectrum,t),(g=this.processedStaticSpectrum)==null||g.clear(),(_=this.processedStaticSpectrum)==null||_.drawGrid(),this.processedFullFftDb){const y=this.processedFullFftDb,v=new Float32Array(e);for(let M=0;M<e;M++){const A=this.liveSpecFreqs[M],T=Math.round(A/t*(y.length-1));v[M]=y[Math.min(T,y.length-1)]}(p=this.processedStaticSpectrum)==null||p.drawSpectrum(this.liveSpecFreqs,v,"#ffe6bf",2,.9,!0)}else if(this.sourceFullFftDb){const y=this.sourceFullFftDb,v=new Float32Array(e);for(let M=0;M<e;M++){const A=this.liveSpecFreqs[M],T=Math.round(A/t*(y.length-1));v[M]=y[Math.min(T,y.length-1)]}(f=this.processedStaticSpectrum)==null||f.drawSpectrum(this.liveSpecFreqs,v,"rgba(255,230,191,0.35)",1,.5)}else this.drawPlaceholderOnSpectrum(this.processedStaticSpectrum,"Load audio");this.drawFilterOverlayOnSpectrum(this.processedStaticSpectrum,t)}drawFilterOverlayOnSpectrum(t,e){if(!t)return;const n=zn.SPEC_POINTS,i=this.liveSpecFreqs,a=new Float32Array(n),r=this.bandwidth/2;for(let o=0;o<n;o++){const l=i[o],c=Math.exp(-.5*Math.pow((l-this.fCenter)/r,2));a[o]=20*Math.log10(Math.max(c,1e-9))}t.drawSpectrum(i,a,"rgba(95,232,209,0.72)",1.5,.8)}drawPlaceholderOnSpectrum(t,e){if(!t)return;const i=t.getElement().querySelector("canvas.spectrum-canvas");if(!i)return;const a=window.devicePixelRatio||1,r=i.width/a,o=i.height/a,l=i.getContext("2d");l&&(l.fillStyle="rgba(255,255,255,0.12)",l.font="10px JetBrains Mono",l.textAlign="center",l.fillText(e,r/2,o/2+4))}drawIR(){var f;if(!this.irCanvas)return;const t=this.irCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,a=t.getContext("2d");a.clearRect(0,0,n,i);const r=((f=this.audioCtx)==null?void 0:f.sampleRate)??this.sourceSampleRate,o=ra(r,this.fCenter,this.bandwidth,512),l={l:10,r:10,t:20,b:16},c=n-l.l-l.r,h=i-l.t-l.b,u=l.t+h/2,d="#4abfad";a.strokeStyle="rgba(255,255,255,0.04)",a.lineWidth=1;for(let y=1;y<8;y++)a.beginPath(),a.moveTo(l.l+c/8*y,l.t),a.lineTo(l.l+c/8*y,l.t+h),a.stroke();a.beginPath(),a.moveTo(l.l,u),a.lineTo(l.l+c,u),a.strokeStyle="rgba(255,255,255,0.1)",a.stroke();let m=0;for(let y=0;y<o.length;y++){const v=Math.abs(o[y]);v>m&&(m=v)}m<1e-12&&(m=1);const g=Math.min(o.length,Math.floor(c/2)),_=o.length/g;for(let y=0;y<g;y++){const v=Math.round(y*_),A=o[Math.min(v,o.length-1)]/m,T=l.l+y/g*c,P=A*(h/2-2);a.beginPath(),a.moveTo(T,u),a.lineTo(T,u-P),a.strokeStyle=A>=0?d:"#ff9fb2",a.globalAlpha=.3+.7*Math.abs(A),a.lineWidth=g>200?1:1.5,a.stroke()}a.globalAlpha=1;const p=(o.length/r*1e3).toFixed(1);a.fillStyle="rgba(95,232,209,0.72)",a.font="700 8px JetBrains Mono",a.textAlign="left",a.fillText(`f₀ ${this.fCenter} Hz · BW ${this.bandwidth} Hz`,l.l+4,l.t+10),a.textAlign="right",a.fillText(`${o.length} smp · ${p}ms`,n-l.r,l.t+10),a.fillStyle="rgba(255,255,255,0.2)",a.font="11px JetBrains Mono",a.textAlign="center",a.fillText("n →",l.l+c/2,i-2)}resizeLayout(){var i,a,r,o,l;const t=Math.max(600,this.container.clientWidth-2),e=Math.floor((t-6)/2),n=110;(i=this.waveformTimeline)==null||i.resize(t,54),this.irCanvas&&En(this.irCanvas,t,52,100,48),(a=this.sourceSpectrum)==null||a.resize(e,n),(r=this.processedSpectrum)==null||r.resize(e,n),(o=this.sourceStaticSpectrum)==null||o.resize(e,n),(l=this.processedStaticSpectrum)==null||l.resize(e,n)}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopPlayback(!0),window.removeEventListener("resize",this.onResize),document.body.classList.remove("page-scroll")}};x(zn,"SPEC_POINTS",512);let Va=zn;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ar="168",Si={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sc=0,$r=1,ac=2,hl=1,rc=2,nn=3,ln=0,Ce=1,Oe=2,wn=0,bi=1,Kr=2,jr=3,Zr=4,oc=5,On=100,lc=101,cc=102,hc=103,uc=104,dc=200,fc=201,pc=202,mc=203,Wa=204,qa=205,gc=206,_c=207,vc=208,xc=209,yc=210,Mc=211,Sc=212,bc=213,Ec=214,wc=0,Tc=1,Ac=2,Gs=3,Cc=4,Pc=5,Rc=6,Lc=7,ul=0,Dc=1,Ic=2,Tn=0,Nc=1,Uc=2,Fc=3,Oc=4,Bc=5,kc=6,zc=7,dl=300,Ti=301,Ai=302,Xa=303,Ya=304,Zs=306,$a=1e3,Vn=1001,Ka=1002,Be=1003,Hc=1004,as=1005,Ve=1006,oa=1007,Wn=1008,cn=1009,fl=1010,pl=1011,Zi=1012,Cr=1013,$n=1014,an=1015,Qi=1016,Pr=1017,Rr=1018,Ci=1020,ml=35902,gl=1021,_l=1022,qe=1023,vl=1024,xl=1025,Ei=1026,Pi=1027,yl=1028,Lr=1029,Ml=1030,Dr=1031,Ir=1033,Us=33776,Fs=33777,Os=33778,Bs=33779,ja=35840,Za=35841,Ja=35842,Qa=35843,tr=36196,er=37492,nr=37496,ir=37808,sr=37809,ar=37810,rr=37811,or=37812,lr=37813,cr=37814,hr=37815,ur=37816,dr=37817,fr=37818,pr=37819,mr=37820,gr=37821,ks=36492,_r=36494,vr=36495,Sl=36283,xr=36284,yr=36285,Mr=36286,Gc=3200,Vc=3201,Wc=0,qc=1,Mn="",$e="srgb",An="srgb-linear",Nr="display-p3",Js="display-p3-linear",Vs="linear",Zt="srgb",Ws="rec709",qs="p3",ti=7680,Jr=519,Xc=512,Yc=513,$c=514,bl=515,Kc=516,jc=517,Zc=518,Jc=519,Qr=35044,to="300 es",rn=2e3,Xs=2001;class Jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yi=Math.PI/180,Sr=180/Math.PI;function ts(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Qc(s,t){return(s%t+t)%t}function la(s,t,e){return(1-e)*s+e*t}function Ui(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const th={DEG2RAD:Yi};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,a,r,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],y=i[1],v=i[4],M=i[7],A=i[2],T=i[5],P=i[8];return a[0]=r*_+o*y+l*A,a[3]=r*p+o*v+l*T,a[6]=r*f+o*M+l*P,a[1]=c*_+h*y+u*A,a[4]=c*p+h*v+u*T,a[7]=c*f+h*M+u*P,a[2]=d*_+m*y+g*A,a[5]=d*p+m*v+g*T,a[8]=d*f+m*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,m=c*a-r*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*r)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*a-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Nt;function El(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eh(){const s=Ys("canvas");return s.style.display="block",s}const eo={};function $i(s){s in eo||(eo[s]=!0,console.warn(s))}function nh(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const no=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),io=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fi={[An]:{transfer:Vs,primaries:Ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[$e]:{transfer:Zt,primaries:Ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Js]:{transfer:Vs,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(io),fromReference:s=>s.applyMatrix3(no)},[Nr]:{transfer:Zt,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(io),fromReference:s=>s.applyMatrix3(no).convertLinearToSRGB()}},ih=new Set([An,Js]),qt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ih.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Fi[t].toReference,i=Fi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Fi[s].primaries},getTransfer:function(s){return s===Mn?Vs:Fi[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Fi[t].luminanceCoefficients)}};function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ei;class sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Ys("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=wi(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ah=0;class wl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(ua(i[r].image)):a.push(ua(i[r]))}else a=ua(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rh=0;class Pe extends Jn{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Vn,i=Vn,a=Ve,r=Wn,o=qe,l=cn,c=Pe.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=ts(),this.name="",this.source=new wl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=dl;Pe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,A=(f+1)/2,T=(h+d)/4,P=(u+_)/4,F=(g+p)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(v),i=T/n,a=P/n):M>A?M<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(M),n=T/i,a=F/i):A<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(A),n=P/a,i=F/a),this.set(n,i,a,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oh extends Jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Pe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lh extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=a[r+0],m=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-o;const f=l*d+c*m+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),T=Math.atan2(A,f*y);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A}const M=o*y;if(l=l*p+d*M,c=c*p+m*M,h=h*p+g*M,u=u*p+_*M,p===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=a[r],d=a[r+1],m=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-o*m,t[e+2]=c*g+h*m+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(a/2),d=l(n/2),m=l(i/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-i)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(so.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(so.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=i+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new N,so=new jn;class es{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ze):ze.fromBufferAttribute(a,r),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(t.matrixWorld),this.union(rs)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),os.subVectors(this.max,Oi),ni.subVectors(t.a,Oi),ii.subVectors(t.b,Oi),si.subVectors(t.c,Oi),fn.subVectors(ii,ni),pn.subVectors(si,ii),Pn.subVectors(ni,si);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Pn.z,Pn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Pn.z,0,-Pn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Pn.y,Pn.x,0];return!fa(e,ni,ii,si,os)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,ni,ii,si,os))?!1:(ls.crossVectors(fn,pn),e=[ls.x,ls.y,ls.z],fa(e,ni,ii,si,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new N,new N,new N,new N,new N,new N,new N,new N],ze=new N,rs=new es,ni=new N,ii=new N,si=new N,fn=new N,pn=new N,Pn=new N,Oi=new N,os=new N,ls=new N,Rn=new N;function fa(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Rn.fromArray(s,a);const o=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ch=new es,Bi=new N,pa=new N;class Qs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ch.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(pa)),this.expandByPoint(Bi.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new N,ma=new N,cs=new N,mn=new N,ga=new N,hs=new N,_a=new N;class Ur{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ma.copy(t).add(e).multiplyScalar(.5),cs.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(ma);const a=t.distanceTo(e)*.5,r=-this.direction.dot(cs),o=mn.dot(this.direction),l=-mn.dot(cs),c=mn.lengthSq(),h=Math.abs(1-r*r);let u,d,m,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ma).addScaledVector(cs,d),m}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const n=Je.dot(this.direction),i=Je.dot(Je)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,i,a){ga.subVectors(e,t),hs.subVectors(n,t),_a.crossVectors(ga,hs);let r=this.direction.dot(_a),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;mn.subVectors(this.origin,t);const l=o*this.direction.dot(hs.crossVectors(mn,hs));if(l<0)return null;const c=o*this.direction.dot(ga.cross(mn));if(c<0||l+c>r)return null;const h=-o*mn.dot(_a);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,a,r,o,l,c,h,u,d,m,g,_,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,u,d,m,g,_,p)}set(t,e,n,i,a,r,o,l,c,h,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),a=1/ai.setFromMatrixColumn(t,1).length(),r=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,m=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-r*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=_-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,m=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,m=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,m=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hh,t,uh)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),gn.crossVectors(n,De),gn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),gn.crossVectors(n,De)),gn.normalize(),us.crossVectors(De,gn),i[0]=gn.x,i[4]=us.x,i[8]=De.x,i[1]=gn.y,i[5]=us.y,i[9]=De.y,i[2]=gn.z,i[6]=us.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],y=n[3],v=n[7],M=n[11],A=n[15],T=i[0],P=i[4],F=i[8],w=i[12],b=i[1],L=i[5],V=i[9],H=i[13],X=i[2],$=i[6],O=i[10],W=i[14],G=i[3],st=i[7],rt=i[11],dt=i[15];return a[0]=r*T+o*b+l*X+c*G,a[4]=r*P+o*L+l*$+c*st,a[8]=r*F+o*V+l*O+c*rt,a[12]=r*w+o*H+l*W+c*dt,a[1]=h*T+u*b+d*X+m*G,a[5]=h*P+u*L+d*$+m*st,a[9]=h*F+u*V+d*O+m*rt,a[13]=h*w+u*H+d*W+m*dt,a[2]=g*T+_*b+p*X+f*G,a[6]=g*P+_*L+p*$+f*st,a[10]=g*F+_*V+p*O+f*rt,a[14]=g*w+_*H+p*W+f*dt,a[3]=y*T+v*b+M*X+A*G,a[7]=y*P+v*L+M*$+A*st,a[11]=y*F+v*V+M*O+A*rt,a[15]=y*w+v*H+M*W+A*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+a*l*u-i*c*u-a*o*d+n*c*d+i*o*m-n*l*m)+_*(+e*l*m-e*c*d+a*r*d-i*r*m+i*c*h-a*l*h)+p*(+e*c*u-e*o*m-a*r*u+n*r*m+a*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],y=u*p*c-_*d*c+_*l*m-o*p*m-u*l*f+o*d*f,v=g*d*c-h*p*c-g*l*m+r*p*m+h*l*f-r*d*f,M=h*_*c-g*u*c+g*o*m-r*_*m-h*o*f+r*u*f,A=g*u*l-h*_*l-g*o*d+r*_*d+h*o*p-r*u*p,T=e*y+n*v+i*M+a*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=y*P,t[1]=(_*d*a-u*p*a-_*i*m+n*p*m+u*i*f-n*d*f)*P,t[2]=(o*p*a-_*l*a+_*i*c-n*p*c-o*i*f+n*l*f)*P,t[3]=(u*l*a-o*d*a-u*i*c+n*d*c+o*i*m-n*l*m)*P,t[4]=v*P,t[5]=(h*p*a-g*d*a+g*i*m-e*p*m-h*i*f+e*d*f)*P,t[6]=(g*l*a-r*p*a-g*i*c+e*p*c+r*i*f-e*l*f)*P,t[7]=(r*d*a-h*l*a+h*i*c-e*d*c-r*i*m+e*l*m)*P,t[8]=M*P,t[9]=(g*u*a-h*_*a-g*n*m+e*_*m+h*n*f-e*u*f)*P,t[10]=(r*_*a-g*o*a+g*n*c-e*_*c-r*n*f+e*o*f)*P,t[11]=(h*o*a-r*u*a-h*n*c+e*u*c+r*n*m-e*o*m)*P,t[12]=A*P,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*P,t[14]=(g*o*i-r*_*i-g*n*l+e*_*l+r*n*p-e*o*p)*P,t[15]=(r*u*i-h*o*i+h*n*l-e*u*l-r*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,m=a*h,g=a*u,_=r*h,p=r*u,f=o*u,y=l*c,v=l*h,M=l*u,A=n.x,T=n.y,P=n.z;return i[0]=(1-(_+f))*A,i[1]=(m+M)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(m-M)*T,i[5]=(1-(d+f))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(g+v)*P,i[9]=(p-y)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let a=ai.set(i[0],i[1],i[2]).length();const r=ai.set(i[4],i[5],i[6]).length(),o=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],He.copy(this);const c=1/a,h=1/r,u=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,i,a,r,o=rn){const l=this.elements,c=2*a/(e-t),h=2*a/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(o===rn)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Xs)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=rn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-a),d=(e+t)*c,m=(n+i)*h;let g,_;if(o===rn)g=(r+a)*u,_=-2*u;else if(o===Xs)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new N,He=new ce,hh=new N(0,0,0),uh=new N(1,1,1),gn=new N,us=new N,De=new N,ao=new ce,ro=new jn;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ao.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ao,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ro.setFromEuler(this),this.setFromQuaternion(ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dh=0;const oo=new N,ri=new jn,Qe=new ce,ds=new N,ki=new N,fh=new N,ph=new jn,lo=new N(1,0,0),co=new N(0,1,0),ho=new N(0,0,1),uo={type:"added"},mh={type:"removed"},oi={type:"childadded",child:null},va={type:"childremoved",child:null};class we extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new N,e=new hn,n=new jn,i=new N(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new Nt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(lo,t)}rotateY(t){return this.rotateOnAxis(co,t)}rotateZ(t){return this.rotateOnAxis(ho,t)}translateOnAxis(t,e){return oo.copy(t).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lo,t)}translateY(t){return this.translateOnAxis(co,t)}translateZ(t){return this.translateOnAxis(ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(ki,ds,this.up):Qe.lookAt(ds,ki,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(Qe),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uo),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mh),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uo),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,t,fh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new N,tn=new N,xa=new N,en=new N,li=new N,ci=new N,fo=new N,ya=new N,Ma=new N,Sa=new N;class We{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ge.subVectors(t,e),i.cross(Ge);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){Ge.subVectors(i,e),tn.subVectors(n,e),xa.subVectors(t,e);const r=Ge.dot(Ge),o=Ge.dot(tn),l=Ge.dot(xa),c=tn.dot(tn),h=tn.dot(xa),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,en.x),l.addScaledVector(r,en.y),l.addScaledVector(o,en.z),l)}static isFrontFacing(t,e,n,i){return Ge.subVectors(n,e),tn.subVectors(t,e),Ge.cross(tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ge.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;li.subVectors(i,n),ci.subVectors(a,n),ya.subVectors(t,n);const l=li.dot(ya),c=ci.dot(ya);if(l<=0&&c<=0)return e.copy(n);Ma.subVectors(t,i);const h=li.dot(Ma),u=ci.dot(Ma);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(li,r);Sa.subVectors(t,a);const m=li.dot(Sa),g=ci.dot(Sa);if(g>=0&&m<=g)return e.copy(a);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ci,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return fo.subVectors(a,i),o=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(fo,o);const f=1/(p+_+d);return r=_*f,o=d*f,e.copy(n).addScaledVector(li,r).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},fs={h:0,s:0,l:0};function ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Qc(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=ba(r,a,t+1/3),this.g=ba(r,a,t),this.b=ba(r,a,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return qt.fromWorkingColorSpace(Me.copy(this),t),Math.round(be(Me.r*255,0,255))*65536+Math.round(be(Me.g*255,0,255))*256+Math.round(be(Me.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,a=Me.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-a)/u+(i<a?6:0);break;case i:l=(a-n)/u+2;break;case a:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=$e){qt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(fs);const n=la(_n.h,fs.h,e),i=la(_n.s,fs.s,e),a=la(_n.l,fs.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new zt;zt.NAMES=Cl;let gh=0;class ns extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=bi,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=qa,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qn extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new N,ps=new Lt;class ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return $i("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),a=Te(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qr&&(t.usage=this.usage),t}}class Pl extends ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rl extends ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _h=0;const Ue=new ce,Ea=new we,hi=new N,Ie=new es,zi=new es,pe=new N;class le extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(El(t)?Rl:Pl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Nt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];Ie.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ie.min,zi.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,zi.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(zi.min),Ie.expandByPoint(zi.max))}Ie.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)pe.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pe.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(t,c),pe.add(hi)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;const c=new N,h=new N,u=new N,d=new Lt,m=new Lt,g=new Lt,_=new N,p=new N;function f(F,w,b){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(a,F),m.fromBufferAttribute(a,w),g.fromBufferAttribute(a,b),h.sub(c),u.sub(c),m.sub(d),g.sub(d);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(L),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(L),o[F].add(_),o[w].add(_),o[b].add(_),l[F].add(p),l[w].add(p),l[b].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,w=y.length;F<w;++F){const b=y[F],L=b.start,V=b.count;for(let H=L,X=L+V;H<X;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const v=new N,M=new N,A=new N,T=new N;function P(F){A.fromBufferAttribute(i,F),T.copy(A);const w=o[F];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(T,w);const L=M.dot(l[F])<0?-1:1;r.setXYZW(F,v.x,v.y,v.z,L)}for(let F=0,w=y.length;F<w;++F){const b=y[F],L=b.start,V=b.count;for(let H=L,X=L+V;H<X;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new N,a=new N,r=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new ce,Ln=new Ur,ms=new Qs,mo=new N,ui=new N,di=new N,fi=new N,wa=new N,gs=new N,_s=new Lt,vs=new Lt,xs=new Lt,go=new N,_o=new N,vo=new N,ys=new N,Ms=new N;class Ee extends we{constructor(t=new le,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){gs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(wa.fromBufferAttribute(u,t),r?gs.addScaledVector(wa,h):gs.addScaledVector(wa.sub(e),h))}e.add(gs)}return e}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(a),Ln.copy(t.ray).recast(t.near),!(ms.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(ms,mo)===null||Ln.origin.distanceToSquared(mo)>(t.far-t.near)**2))&&(po.copy(a).invert(),Ln.copy(t.ray).applyMatrix4(po),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=r[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,A=v;M<A;M+=3){const T=o.getX(M),P=o.getX(M+1),F=o.getX(M+2);i=Ss(this,f,t,n,c,h,u,T,P,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);i=Ss(this,r,t,n,c,h,u,y,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=r[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,A=v;M<A;M+=3){const T=M,P=M+1,F=M+2;i=Ss(this,f,t,n,c,h,u,T,P,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,v=p+1,M=p+2;i=Ss(this,r,t,n,c,h,u,y,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function vh(s,t,e,n,i,a,r,o){let l;if(t.side===Ce?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===ln,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ms);return c<e.near||c>e.far?null:{distance:c,point:Ms.clone(),object:s}}function Ss(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,ui),s.getVertexPosition(l,di),s.getVertexPosition(c,fi);const h=vh(s,t,e,n,ui,di,fi,ys);if(h){i&&(_s.fromBufferAttribute(i,o),vs.fromBufferAttribute(i,l),xs.fromBufferAttribute(i,c),h.uv=We.getInterpolation(ys,ui,di,fi,_s,vs,xs,new Lt)),a&&(_s.fromBufferAttribute(a,o),vs.fromBufferAttribute(a,l),xs.fromBufferAttribute(a,c),h.uv1=We.getInterpolation(ys,ui,di,fi,_s,vs,xs,new Lt)),r&&(go.fromBufferAttribute(r,o),_o.fromBufferAttribute(r,l),vo.fromBufferAttribute(r,c),h.normal=We.getInterpolation(ys,ui,di,fi,go,_o,vo,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};We.getNormal(ui,di,fi,u.normal),h.face=u}return h}class Ii extends le{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,a,4),g("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(_,p,f,y,v,M,A,T,P,F,w){const b=M/P,L=A/F,V=M/2,H=A/2,X=T/2,$=P+1,O=F+1;let W=0,G=0;const st=new N;for(let rt=0;rt<O;rt++){const dt=rt*L-H;for(let Ot=0;Ot<$;Ot++){const Yt=Ot*b-V;st[_]=Yt*y,st[p]=dt*v,st[f]=X,c.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[f]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ot/P),u.push(1-rt/F),W+=1}}for(let rt=0;rt<F;rt++)for(let dt=0;dt<P;dt++){const Ot=d+dt+$*rt,Yt=d+dt+$*(rt+1),q=d+(dt+1)+$*(rt+1),Q=d+(dt+1)+$*rt;l.push(Ot,Yt,Q),l.push(Yt,q,Q),G+=6}o.addGroup(m,G,w),m+=G,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Se(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function xh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ll(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const yh={clone:Ri,merge:Se};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dl extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new N,xo=new Lt,yo=new Lt;class Fe extends Dl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,xo,yo),e.subVectors(yo,xo)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pi=-90,mi=1;class bh extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(pi,mi,t,e);i.layers=this.layers,this.add(i);const a=new Fe(pi,mi,t,e);a.layers=this.layers,this.add(a);const r=new Fe(pi,mi,t,e);r.layers=this.layers,this.add(r);const o=new Fe(pi,mi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(pi,mi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(pi,mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,a),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Il extends Pe{constructor(t,e,n,i,a,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Il(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ii(5,5,5),a=new un({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:wn});a.uniforms.tEquirect.value=e;const r=new Ee(i,a),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Ve),new bh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const Ta=new N,wh=new N,Th=new Nt;class yn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ta.subVectors(n,e).cross(wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Th.getNormalMatrix(t),i=this.coplanarPoint(Ta).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Qs,bs=new N;class Nl{constructor(t=new yn,e=new yn,n=new yn,i=new yn,a=new yn,r=new yn){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,i=t.elements,a=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],y=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-a,d-c,p-m,M-f).normalize(),n[1].setComponents(l+a,d+c,p+m,M+f).normalize(),n[2].setComponents(l+r,d+h,p+g,M+y).normalize(),n[3].setComponents(l-r,d-h,p-g,M-y).normalize(),n[4].setComponents(l-o,d-u,p-_,M-v).normalize(),e===rn)n[5].setComponents(l+o,d+u,p+_,M+v).normalize();else if(e===Xs)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(bs.x=i.normal.x>0?t.max.x:t.min.x,bs.y=i.normal.y>0?t.max.y:t.min.y,bs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ul(){let s=null,t=!1,e=null,n=null;function i(a,r){e(a,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Ah(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let m=0,g=d.length;m<g;m++){const _=d[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}class ta extends le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const y=f*d-r;for(let v=0;v<c;v++){const M=v*u-a;g.push(M,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,M=y+c*(f+1),A=y+1+c*(f+1),T=y+1+c*f;m.push(v,M,T),m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ph=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",au=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Su=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ru=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ou=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ud=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$d=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:Ch,alphahash_pars_fragment:Ph,alphamap_fragment:Rh,alphamap_pars_fragment:Lh,alphatest_fragment:Dh,alphatest_pars_fragment:Ih,aomap_fragment:Nh,aomap_pars_fragment:Uh,batching_pars_vertex:Fh,batching_vertex:Oh,begin_vertex:Bh,beginnormal_vertex:kh,bsdfs:zh,iridescence_fragment:Hh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Vh,clipping_planes_pars_fragment:Wh,clipping_planes_pars_vertex:qh,clipping_planes_vertex:Xh,color_fragment:Yh,color_pars_fragment:$h,color_pars_vertex:Kh,color_vertex:jh,common:Zh,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:Qh,displacementmap_pars_vertex:tu,displacementmap_vertex:eu,emissivemap_fragment:nu,emissivemap_pars_fragment:iu,colorspace_fragment:su,colorspace_pars_fragment:au,envmap_fragment:ru,envmap_common_pars_fragment:ou,envmap_pars_fragment:lu,envmap_pars_vertex:cu,envmap_physical_pars_fragment:yu,envmap_vertex:hu,fog_vertex:uu,fog_pars_vertex:du,fog_fragment:fu,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_pars_fragment:gu,lights_lambert_fragment:_u,lights_lambert_pars_fragment:vu,lights_pars_begin:xu,lights_toon_fragment:Mu,lights_toon_pars_fragment:Su,lights_phong_fragment:bu,lights_phong_pars_fragment:Eu,lights_physical_fragment:wu,lights_physical_pars_fragment:Tu,lights_fragment_begin:Au,lights_fragment_maps:Cu,lights_fragment_end:Pu,logdepthbuf_fragment:Ru,logdepthbuf_pars_fragment:Lu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Iu,map_fragment:Nu,map_pars_fragment:Uu,map_particle_fragment:Fu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:ku,morphinstance_vertex:zu,morphcolor_vertex:Hu,morphnormal_vertex:Gu,morphtarget_pars_vertex:Vu,morphtarget_vertex:Wu,normal_fragment_begin:qu,normal_fragment_maps:Xu,normal_pars_fragment:Yu,normal_pars_vertex:$u,normal_vertex:Ku,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Qu,iridescence_pars_fragment:td,opaque_fragment:ed,packing:nd,premultiplied_alpha_fragment:id,project_vertex:sd,dithering_fragment:ad,dithering_pars_fragment:rd,roughnessmap_fragment:od,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:hd,shadowmap_vertex:ud,shadowmask_pars_fragment:dd,skinbase_vertex:fd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:yd,transmission_fragment:Md,transmission_pars_fragment:Sd,uv_pars_fragment:bd,uv_pars_vertex:Ed,uv_vertex:wd,worldpos_vertex:Td,background_vert:Ad,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Rd,cube_vert:Ld,cube_frag:Dd,depth_vert:Id,depth_frag:Nd,distanceRGBA_vert:Ud,distanceRGBA_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:kd,linedashed_frag:zd,meshbasic_vert:Hd,meshbasic_frag:Gd,meshlambert_vert:Vd,meshlambert_frag:Wd,meshmatcap_vert:qd,meshmatcap_frag:Xd,meshnormal_vert:Yd,meshnormal_frag:$d,meshphong_vert:Kd,meshphong_frag:jd,meshphysical_vert:Zd,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:tf,points_vert:ef,points_frag:nf,shadow_vert:sf,shadow_frag:af,sprite_vert:rf,sprite_frag:of},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ke={basic:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Se([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Se([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Se([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Se([at.points,at.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Se([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Se([at.common,at.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Se([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Se([at.sprite,at.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Se([at.common,at.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Se([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ke.physical={uniforms:Se([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Es={r:0,b:0,g:0},In=new hn,lf=new ce;function cf(s,t,e,n,i,a,r){const o=new zt(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const M=g(y);M===null?f(o,l):M&&M.isColor&&(f(M,1),v=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===Zs)?(h===void 0&&(h=new Ee(new Ii(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ri(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),In.copy(v.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lf.makeRotationFromEuler(In)),h.material.toneMapped=qt.getTransfer(M.colorSpace)!==Zt,(u!==M||d!==M.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,m=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ee(new ta(2,2),new un({name:"BackgroundMaterial",uniforms:Ri(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=qt.getTransfer(M.colorSpace)!==Zt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,m=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(Es,Ll(s)),n.buffers.color.setClear(Es.r,Es.g,Es.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:p}}function hf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let a=i,r=!1;function o(b,L,V,H,X){let $=!1;const O=u(H,V,L);a!==O&&(a=O,c(a.object)),$=m(b,H,V,X),$&&g(b,H,V,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,M(b,L,V,H),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,V){const H=V.wireframe===!0;let X=n[b.id];X===void 0&&(X={},n[b.id]=X);let $=X[L.id];$===void 0&&($={},X[L.id]=$);let O=$[H];return O===void 0&&(O=d(l()),$[H]=O),O}function d(b){const L=[],V=[],H=[];for(let X=0;X<e;X++)L[X]=0,V[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:H,object:b,attributes:{},index:null}}function m(b,L,V,H){const X=a.attributes,$=L.attributes;let O=0;const W=V.getAttributes();for(const G in W)if(W[G].location>=0){const rt=X[G];let dt=$[G];if(dt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;O++}return a.attributesNum!==O||a.index!==H}function g(b,L,V,H){const X={},$=L.attributes;let O=0;const W=V.getAttributes();for(const G in W)if(W[G].location>=0){let rt=$[G];rt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));const dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),X[G]=dt,O++}a.attributes=X,a.attributesNum=O,a.index=H}function _(){const b=a.newAttributes;for(let L=0,V=b.length;L<V;L++)b[L]=0}function p(b){f(b,0)}function f(b,L){const V=a.newAttributes,H=a.enabledAttributes,X=a.attributeDivisors;V[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),X[b]!==L&&(s.vertexAttribDivisor(b,L),X[b]=L)}function y(){const b=a.newAttributes,L=a.enabledAttributes;for(let V=0,H=L.length;V<H;V++)L[V]!==b[V]&&(s.disableVertexAttribArray(V),L[V]=0)}function v(b,L,V,H,X,$,O){O===!0?s.vertexAttribIPointer(b,L,V,X,$):s.vertexAttribPointer(b,L,V,H,X,$)}function M(b,L,V,H){_();const X=H.attributes,$=V.getAttributes(),O=L.defaultAttributeValues;for(const W in $){const G=$[W];if(G.location>=0){let st=X[W];if(st===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const rt=st.normalized,dt=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;const Yt=Ot.buffer,q=Ot.type,Q=Ot.bytesPerElement,gt=q===s.INT||q===s.UNSIGNED_INT||st.gpuType===Cr;if(st.isInterleavedBufferAttribute){const ht=st.data,Et=ht.stride,Pt=st.offset;if(ht.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)f(G.location+Ft,ht.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)p(G.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Ft=0;Ft<G.locationSize;Ft++)v(G.location+Ft,dt/G.locationSize,q,rt,Et*Q,(Pt+dt/G.locationSize*Ft)*Q,gt)}else{if(st.isInstancedBufferAttribute){for(let ht=0;ht<G.locationSize;ht++)f(G.location+ht,st.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ht=0;ht<G.locationSize;ht++)p(G.location+ht);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let ht=0;ht<G.locationSize;ht++)v(G.location+ht,dt/G.locationSize,q,rt,dt*Q,dt/G.locationSize*ht*Q,gt)}}else if(O!==void 0){const rt=O[W];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(G.location,rt);break;case 3:s.vertexAttrib3fv(G.location,rt);break;case 4:s.vertexAttrib4fv(G.location,rt);break;default:s.vertexAttrib1fv(G.location,rt)}}}}y()}function A(){F();for(const b in n){const L=n[b];for(const V in L){const H=L[V];for(const X in H)h(H[X].object),delete H[X];delete L[V]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const V in L){const H=L[V];for(const X in H)h(H[X].object),delete H[X];delete L[V]}delete n[b.id]}function P(b){for(const L in n){const V=n[L];if(V[b.id]===void 0)continue;const H=V[b.id];for(const X in H)h(H[X].object),delete H[X];delete V[b.id]}}function F(){w(),r=!0,a!==i&&(a=i,c(a.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function uf(s,t,e){let n;function i(c){n=c}function a(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function df(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==qe&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==cn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==an&&!P)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:M,maxSamples:A}}function ff(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new yn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||a&&!p)a?h(null):c();else{const y=a?0:n,v=y*4;let M=f.clippingState||null;l.value=M,M=h(g,d,v,m);for(let A=0;A!==v;++A)M[A]=e[A];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,M=m;v!==_;++v,M+=4)r.copy(u[v]).applyMatrix4(y,o),r.normal.toArray(p,M),p[M+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function pf(s){let t=new WeakMap;function e(r,o){return o===Xa?r.mapping=Ti:o===Ya&&(r.mapping=Ai),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Xa||o===Ya)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Eh(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class mf extends Dl{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xi=4,Mo=[.125,.215,.35,.446,.526,.582],Bn=20,Aa=new mf,So=new zt;let Ca=null,Pa=0,Ra=0,La=!1;const Fn=(1+Math.sqrt(5))/2,gi=1/Fn,bo=[new N(-Fn,gi,0),new N(Fn,gi,0),new N(-gi,0,Fn),new N(gi,0,Fn),new N(0,Fn,-gi),new N(0,Fn,gi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,i,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Pa,Ra),this._renderer.xr.enabled=La,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Qi,format:qe,colorSpace:An,depthBuffer:!1},i=wo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wo(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gf(a)),this._blurMaterial=_f(a,t,e)}return i}_compileMaterial(t){const e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(So),h.toneMapping=Tn,h.autoClear=!1;const m=new qn({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new Ee(new Ii,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(So),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;ws(i,y*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ti||t.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const a=i?this._cubemapMaterial:this._equirectMaterial,r=new Ee(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=bo[(i-a-1)%bo.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,i,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",a),this._halfBlur(r,t,n,n,i,"longitudinal",a)}_halfBlur(t,e,n,i,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ee(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),_=a/g,p=isFinite(a)?1+Math.floor(h*_):Bn;p>Bn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const f=[];let y=0;for(let P=0;P<Bn;++P){const F=P/_,w=Math.exp(-F*F/2);f.push(w),P===0?y+=w:P<p&&(y+=2*w)}for(let P=0;P<f.length;P++)f[P]=f[P]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-xi?i-v+xi:0),T=4*(this._cubeSize-M);ws(e,A,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Aa)}}function gf(s){const t=[],e=[],n=[];let i=s;const a=s-xi+1+Mo.length;for(let r=0;r<a;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>s-xi?l=Mo[r-s+xi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let T=0;T<m;T++){const P=T%3*2/3-1,F=T>2?0:-1,w=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];y.set(w,_*g*T),v.set(d,p*g*T);const b=[T,T,T,T,T,T];M.set(b,f*g*T)}const A=new le;A.setAttribute("position",new ne(y,_)),A.setAttribute("uv",new ne(v,p)),A.setAttribute("faceIndex",new ne(M,f)),t.push(A),i>xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wo(s,t,e){const n=new Kn(s,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _f(s,t,e){const n=new Float32Array(Bn),i=new N(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function To(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ao(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Fr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xa||l===Ya,h=l===Ti||l===Ai;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Eo(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Eo(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function xf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&$i("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yf(s,t,e,n){const i={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",r),delete i[d.id];const m=a.get(d);m&&(t.remove(m),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,M=y.length;v<M;v+=3){const A=y[v+0],T=y[v+1],P=y[v+2];d.push(A,T,T,P,P,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const A=v+0,T=v+1,P=v+2;d.push(A,T,T,P,P,A)}}else return;const p=new(El(d)?Rl:Pl)(d,1);p.version=_;const f=a.get(u);f&&t.remove(f),a.set(u,p)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Mf(s,t,e){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,m){s.drawElements(n,m,a,d*r),e.update(m,n,1)}function c(d,m,g){g!==0&&(s.drawElementsInstanced(n,m,a,d*r,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function u(d,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/r,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=m[y];for(let y=0;y<_.length;y++)e.update(f,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bf(s,t,e){const n=new WeakMap,i=new ge;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var m=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*T*4*u),F=new Tl(P,A,T,u);F.type=an,F.needsUpdate=!0;const w=M*4;for(let L=0;L<u;L++){const V=f[L],H=y[L],X=v[L],$=A*T*4*L;for(let O=0;O<V.count;O++){const W=O*w;g===!0&&(i.fromBufferAttribute(V,O),P[$+W+0]=i.x,P[$+W+1]=i.y,P[$+W+2]=i.z,P[$+W+3]=0),_===!0&&(i.fromBufferAttribute(H,O),P[$+W+4]=i.x,P[$+W+5]=i.y,P[$+W+6]=i.z,P[$+W+7]=0),p===!0&&(i.fromBufferAttribute(X,O),P[$+W+8]=i.x,P[$+W+9]=i.y,P[$+W+10]=i.z,P[$+W+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:F,size:new Lt(A,T)},n.set(o,d),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function Ef(s,t,e,n){let i=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class Fl extends Pe{constructor(t,e,n,i,a,r,o,l,c,h=Ei){if(h!==Ei&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=$n),n===void 0&&h===Pi&&(n=Ci),super(null,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ol=new Pe,Co=new Fl(1,1),Bl=new Tl,kl=new lh,zl=new Il,Po=[],Ro=[],Lo=new Float32Array(16),Do=new Float32Array(9),Io=new Float32Array(4);function Ni(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=Po[i];if(a===void 0&&(a=new Float32Array(i),Po[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ea(s,t){let e=Ro[t];e===void 0&&(e=new Int32Array(t),Ro[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function wf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),fe(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),fe(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),fe(e,t)}}function Pf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Io.set(n),s.uniformMatrix2fv(this.addr,!1,Io),fe(e,n)}}function Rf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Do.set(n),s.uniformMatrix3fv(this.addr,!1,Do),fe(e,n)}}function Lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Lo.set(n),s.uniformMatrix4fv(this.addr,!1,Lo),fe(e,n)}}function Df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),fe(e,t)}}function Nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),fe(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),fe(e,t)}}function Ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),fe(e,t)}}function Bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),fe(e,t)}}function kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),fe(e,t)}}function zf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?(Co.compareFunction=bl,a=Co):a=Ol,e.setTexture2D(t||a,i)}function Hf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kl,i)}function Gf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zl,i)}function Vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bl,i)}function Wf(s){switch(s){case 5126:return wf;case 35664:return Tf;case 35665:return Af;case 35666:return Cf;case 35674:return Pf;case 35675:return Rf;case 35676:return Lf;case 5124:case 35670:return Df;case 35667:case 35671:return If;case 35668:case 35672:return Nf;case 35669:case 35673:return Uf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Vf}}function qf(s,t){s.uniform1fv(this.addr,t)}function Xf(s,t){const e=Ni(t,this.size,2);s.uniform2fv(this.addr,e)}function Yf(s,t){const e=Ni(t,this.size,3);s.uniform3fv(this.addr,e)}function $f(s,t){const e=Ni(t,this.size,4);s.uniform4fv(this.addr,e)}function Kf(s,t){const e=Ni(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jf(s,t){const e=Ni(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zf(s,t){const e=Ni(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Jf(s,t){s.uniform1iv(this.addr,t)}function Qf(s,t){s.uniform2iv(this.addr,t)}function tp(s,t){s.uniform3iv(this.addr,t)}function ep(s,t){s.uniform4iv(this.addr,t)}function np(s,t){s.uniform1uiv(this.addr,t)}function ip(s,t){s.uniform2uiv(this.addr,t)}function sp(s,t){s.uniform3uiv(this.addr,t)}function ap(s,t){s.uniform4uiv(this.addr,t)}function rp(s,t,e){const n=this.cache,i=t.length,a=ea(e,i);de(n,a)||(s.uniform1iv(this.addr,a),fe(n,a));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Ol,a[r])}function op(s,t,e){const n=this.cache,i=t.length,a=ea(e,i);de(n,a)||(s.uniform1iv(this.addr,a),fe(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||kl,a[r])}function lp(s,t,e){const n=this.cache,i=t.length,a=ea(e,i);de(n,a)||(s.uniform1iv(this.addr,a),fe(n,a));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||zl,a[r])}function cp(s,t,e){const n=this.cache,i=t.length,a=ea(e,i);de(n,a)||(s.uniform1iv(this.addr,a),fe(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Bl,a[r])}function hp(s){switch(s){case 5126:return qf;case 35664:return Xf;case 35665:return Yf;case 35666:return $f;case 35674:return Kf;case 35675:return jf;case 35676:return Zf;case 5124:case 35670:return Jf;case 35667:case 35671:return Qf;case 35668:case 35672:return tp;case 35669:case 35673:return ep;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}class up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wf(e.type)}}class dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hp(e.type)}}class fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function No(s,t){s.seq.push(t),s.map[t.id]=t}function pp(s,t,e){const n=s.name,i=n.length;for(Da.lastIndex=0;;){const a=Da.exec(n),r=Da.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){No(e,c===void 0?new up(o,s,t):new dp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new fp(o),No(e,u)),e=u}}}class zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=t.getActiveUniform(e,i),r=t.getUniformLocation(e,a.name);pp(a,r,this)}}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Uo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const mp=37297;let gp=0;function _p(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function vp(s){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(s);let n;switch(t===e?n="":t===qs&&e===Ws?n="LinearDisplayP3ToLinearSRGB":t===Ws&&e===qs&&(n="LinearSRGBToLinearDisplayP3"),s){case An:case Js:return[n,"LinearTransferOETF"];case $e:case Nr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Fo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+i+`

`+_p(s.getShaderSource(t),r)}else return i}function xp(s,t){const e=vp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function yp(s,t){let e;switch(t){case Nc:e="Linear";break;case Uc:e="Reinhard";break;case Fc:e="Cineon";break;case Oc:e="ACESFilmic";break;case kc:e="AgX";break;case zc:e="Neutral";break;case Bc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new N;function Mp(){qt.getLuminanceCoefficients(Ts);const s=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function bp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ep(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function qi(s){return s!==""}function Oo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function br(s){return s.replace(wp,Ap)}const Tp=new Map;function Ap(s,t){let e=It[t];if(e===void 0){const n=Tp.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return br(e)}const Cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ko(s){return s.replace(Cp,Pp)}function Pp(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function zo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case Ai:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function Ip(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Dc:t="ENVMAP_BLENDING_MIX";break;case Ic:t="ENVMAP_BLENDING_ADD";break}return t}function Np(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Up(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Rp(e),c=Lp(e),h=Dp(e),u=Ip(e),d=Np(e),m=Sp(e),g=bp(a),_=i.createProgram();let p,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qi).join(`
`),f.length>0&&(f+=`
`)):(p=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),f=[zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?It.tonemapping_pars_fragment:"",e.toneMapping!==Tn?yp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,xp("linearToOutputTexel",e.outputColorSpace),Mp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),r=br(r),r=Oo(r,e),r=Bo(r,e),o=br(o),o=Oo(o,e),o=Bo(o,e),r=ko(r),o=ko(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+p+r,M=y+f+o,A=Uo(i,i.VERTEX_SHADER,v),T=Uo(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(L){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(A).trim(),X=i.getShaderInfoLog(T).trim();let $=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const W=Fo(i,A,"vertex"),G=Fo(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+W+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||X==="")&&(O=!1);O&&(L.diagnostics={runnable:$,programLog:V,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:f}})}i.deleteShader(A),i.deleteShader(T),F=new zs(i,_),w=Ep(i,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,mp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Fp=0;class Op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bp(t),e.set(t,n)),n}}class Bp{constructor(t){this.id=Fp++,this.code=t,this.usedTimes=0}}function kp(s,t,e,n,i,a,r){const o=new Al,l=new Op,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,b,L,V,H){const X=V.fog,$=H.geometry,O=w.isMeshStandardMaterial?V.environment:null,W=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),G=W&&W.mapping===Zs?W.image.height:null,st=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=rt!==void 0?rt.length:0;let Ot=0;$.morphAttributes.position!==void 0&&(Ot=1),$.morphAttributes.normal!==void 0&&(Ot=2),$.morphAttributes.color!==void 0&&(Ot=3);let Yt,q,Q,gt;if(st){const Ht=Ke[st];Yt=Ht.vertexShader,q=Ht.fragmentShader}else Yt=w.vertexShader,q=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),gt=l.getFragmentShaderID(w);const ht=s.getRenderTarget(),Et=H.isInstancedMesh===!0,Pt=H.isBatchedMesh===!0,Ft=!!w.map,Qt=!!w.matcap,R=!!W,ie=!!w.aoMap,Xt=!!w.lightMap,$t=!!w.bumpMap,xt=!!w.normalMap,se=!!w.displacementMap,At=!!w.emissiveMap,Rt=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,z=w.clearcoat>0,j=w.dispersion>0,J=w.iridescence>0,Z=w.sheen>0,yt=w.transmission>0,ot=S&&!!w.anisotropyMap,ut=z&&!!w.clearcoatMap,Dt=z&&!!w.clearcoatNormalMap,tt=z&&!!w.clearcoatRoughnessMap,ct=J&&!!w.iridescenceMap,Bt=J&&!!w.iridescenceThicknessMap,Tt=Z&&!!w.sheenColorMap,ft=Z&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,Ut=!!w.specularColorMap,Jt=!!w.specularIntensityMap,D=yt&&!!w.transmissionMap,et=yt&&!!w.thicknessMap,Y=!!w.gradientMap,K=!!w.alphaMap,it=w.alphaTest>0,St=!!w.alphaHash,kt=!!w.extensions;let ae=Tn;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ae=s.toneMapping);const ve={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Yt,fragmentShader:q,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Pt,batchingColor:Pt&&H._colorsTexture!==null,instancing:Et,instancingColor:Et&&H.instanceColor!==null,instancingMorph:Et&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:An,alphaToCoverage:!!w.alphaToCoverage,map:Ft,matcap:Qt,envMap:R,envMapMode:R&&W.mapping,envMapCubeUVHeight:G,aoMap:ie,lightMap:Xt,bumpMap:$t,normalMap:xt,displacementMap:d&&se,emissiveMap:At,normalMapObjectSpace:xt&&w.normalMapType===qc,normalMapTangentSpace:xt&&w.normalMapType===Wc,metalnessMap:Rt,roughnessMap:C,anisotropy:S,anisotropyMap:ot,clearcoat:z,clearcoatMap:ut,clearcoatNormalMap:Dt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:J,iridescenceMap:ct,iridescenceThicknessMap:Bt,sheen:Z,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:Ct,specularColorMap:Ut,specularIntensityMap:Jt,transmission:yt,transmissionMap:D,thicknessMap:et,gradientMap:Y,opaque:w.transparent===!1&&w.blending===bi&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:it,alphaHash:St,combine:w.combine,mapUv:Ft&&_(w.map.channel),aoMapUv:ie&&_(w.aoMap.channel),lightMapUv:Xt&&_(w.lightMap.channel),bumpMapUv:$t&&_(w.bumpMap.channel),normalMapUv:xt&&_(w.normalMap.channel),displacementMapUv:se&&_(w.displacementMap.channel),emissiveMapUv:At&&_(w.emissiveMap.channel),metalnessMapUv:Rt&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:ot&&_(w.anisotropyMap.channel),clearcoatMapUv:ut&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(w.sheenRoughnessMap.channel),specularMapUv:Ct&&_(w.specularMap.channel),specularColorMapUv:Ut&&_(w.specularColorMap.channel),specularIntensityMapUv:Jt&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:et&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(xt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(Ft||K),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ft&&w.map.isVideoTexture===!0&&qt.getTransfer(w.map.colorSpace)===Zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Oe,flipSided:w.side===Ce,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:kt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&w.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function f(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(b,w),v(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),w.push(o.mask)}function M(w){const b=g[w.type];let L;if(b){const V=Ke[b];L=yh.clone(V.uniforms)}else L=w.uniforms;return L}function A(w,b){let L;for(let V=0,H=h.length;V<H;V++){const X=h[V];if(X.cacheKey===b){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Up(s,b,w,a),h.push(L)),L}function T(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:F}}function zp(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function Hp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ho(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Go(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,m,g,_,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function o(u,d,m,g,_,p){const f=r(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(u,d,m,g,_,p){const f=r(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Hp),n.length>1&&n.sort(d||Ho),i.length>1&&i.sort(d||Ho)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:h,sort:c}}function Gp(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Go,s.set(n,[r])):i>=a.length?(r=new Go,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Vp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new zt};break;case"SpotLight":e={position:new N,direction:new N,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Wp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let qp=0;function Xp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Yp(s){const t=new Vp,e=Wp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,a=new ce,r=new ce;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,y=0,v=0,M=0,A=0,T=0,P=0;c.sort(Xp);for(let w=0,b=c.length;w<b;w++){const L=c[w],V=L.color,H=L.intensity,X=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*H,u+=V.g*H,d+=V.b*H;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],H);P++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,G=e.get(L);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=L.shadow.matrix,y++}n.directional[m]=O,m++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(V).multiplyScalar(H),O.distance=X,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[_]=O;const W=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,W.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=W.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,M++}_++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(V).multiplyScalar(H),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=O,p++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const W=L.shadow,G=e.get(L);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=O,g++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(H),O.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[f]=O,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==y||F.numPointShadows!==v||F.numSpotShadows!==M||F.numSpotMaps!==A||F.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=y,F.numPointShadows=v,F.numSpotShadows=M,F.numSpotMaps=A,F.numLightProbes=P,n.version=qp++)}function l(c,h){let u=0,d=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const v=c[f];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(v.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),r.identity(),a.copy(v.matrixWorld),a.premultiply(p),r.extractRotation(a),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Vo(s){const t=new Yp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function $p(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Vo(s),t.set(i,[o])):a>=r.length?(o=new Vo(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Kp extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jp extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qp(s,t,e){let n=new Nl;const i=new Lt,a=new Lt,r=new ge,o=new Kp({depthPacking:Vc}),l=new jp,c={},h=e.maxTextureSize,u={[ln]:Ce,[Ce]:ln,[Oe]:Oe},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Zp,fragmentShader:Jp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let f=this.type;this.render=function(T,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),V=s.state;V.setBlending(wn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=f!==nn&&this.type===nn,X=f===nn&&this.type!==nn;for(let $=0,O=T.length;$<O;$++){const W=T[$],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),a.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/st.x),i.x=a.x*st.x,G.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/st.y),i.y=a.y*st.y,G.mapSize.y=a.y)),G.map===null||H===!0||X===!0){const dt=this.type!==nn?{minFilter:Be,magFilter:Be}:{};G.map!==null&&G.map.dispose(),G.map=new Kn(i.x,i.y,dt),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const rt=G.getViewportCount();for(let dt=0;dt<rt;dt++){const Ot=G.getViewport(dt);r.set(a.x*Ot.x,a.y*Ot.y,a.x*Ot.z,a.y*Ot.w),V.viewport(r),G.updateMatrices(W,dt),n=G.getFrustum(),M(P,F,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===nn&&y(G,F),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(w,b,L)};function y(T,P){const F=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(P,null,F,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(P,null,F,m,_,null)}function v(T,P,F,w){let b=null;const L=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=F.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const V=b.uuid,H=P.uuid;let X=c[V];X===void 0&&(X={},c[V]=X);let $=X[H];$===void 0&&($=b.clone(),X[H]=$,P.addEventListener("dispose",A)),b=$}if(b.visible=P.visible,b.wireframe=P.wireframe,w===nn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=s.properties.get(b);V.light=F}return b}function M(T,P,F,w,b){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const H=t.update(T),X=T.material;if(Array.isArray(X)){const $=H.groups;for(let O=0,W=$.length;O<W;O++){const G=$[O],st=X[G.materialIndex];if(st&&st.visible){const rt=v(T,st,w,b);T.onBeforeShadow(s,T,P,F,H,rt,G),s.renderBufferDirect(F,null,H,rt,T,G),T.onAfterShadow(s,T,P,F,H,rt,G)}}}else if(X.visible){const $=v(T,X,w,b);T.onBeforeShadow(s,T,P,F,H,$,null),s.renderBufferDirect(F,null,H,$,T,null),T.onAfterShadow(s,T,P,F,H,$,null)}}const V=T.children;for(let H=0,X=V.length;H<X;H++)M(V[H],P,F,w,b)}function A(T){T.target.removeEventListener("dispose",A);for(const F in c){const w=c[F],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function tm(s){function t(){let D=!1;const et=new ge;let Y=null;const K=new ge(0,0,0,0);return{setMask:function(it){Y!==it&&!D&&(s.colorMask(it,it,it,it),Y=it)},setLocked:function(it){D=it},setClear:function(it,St,kt,ae,ve){ve===!0&&(it*=ae,St*=ae,kt*=ae),et.set(it,St,kt,ae),K.equals(et)===!1&&(s.clearColor(it,St,kt,ae),K.copy(et))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function e(){let D=!1,et=null,Y=null,K=null;return{setTest:function(it){it?gt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(it){et!==it&&!D&&(s.depthMask(it),et=it)},setFunc:function(it){if(Y!==it){switch(it){case wc:s.depthFunc(s.NEVER);break;case Tc:s.depthFunc(s.ALWAYS);break;case Ac:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case Cc:s.depthFunc(s.EQUAL);break;case Pc:s.depthFunc(s.GEQUAL);break;case Rc:s.depthFunc(s.GREATER);break;case Lc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=it}},setLocked:function(it){D=it},setClear:function(it){K!==it&&(s.clearDepth(it),K=it)},reset:function(){D=!1,et=null,Y=null,K=null}}}function n(){let D=!1,et=null,Y=null,K=null,it=null,St=null,kt=null,ae=null,ve=null;return{setTest:function(Ht){D||(Ht?gt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(Ht){et!==Ht&&!D&&(s.stencilMask(Ht),et=Ht)},setFunc:function(Ht,je,Xe){(Y!==Ht||K!==je||it!==Xe)&&(s.stencilFunc(Ht,je,Xe),Y=Ht,K=je,it=Xe)},setOp:function(Ht,je,Xe){(St!==Ht||kt!==je||ae!==Xe)&&(s.stencilOp(Ht,je,Xe),St=Ht,kt=je,ae=Xe)},setLocked:function(Ht){D=Ht},setClear:function(Ht){ve!==Ht&&(s.clearStencil(Ht),ve=Ht)},reset:function(){D=!1,et=null,Y=null,K=null,it=null,St=null,kt=null,ae=null,ve=null}}}const i=new t,a=new e,r=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,y=null,v=null,M=null,A=null,T=new zt(0,0,0),P=0,F=!1,w=null,b=null,L=null,V=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,O=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=O>=2);let G=null,st={};const rt=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),Ot=new ge().fromArray(rt),Yt=new ge().fromArray(dt);function q(D,et,Y,K){const it=new Uint8Array(4),St=s.createTexture();s.bindTexture(D,St),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Y;kt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(et+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return St}const Q={};Q[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),r.setClear(0),gt(s.DEPTH_TEST),a.setFunc(Gs),$t(!1),xt($r),gt(s.CULL_FACE),ie(wn);function gt(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function ht(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Et(D,et){return h[D]!==et?(s.bindFramebuffer(D,et),h[D]=et,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=et),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=et),!0):!1}function Pt(D,et){let Y=d,K=!1;if(D){Y=u.get(et),Y===void 0&&(Y=[],u.set(et,Y));const it=D.textures;if(Y.length!==it.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let St=0,kt=it.length;St<kt;St++)Y[St]=s.COLOR_ATTACHMENT0+St;Y.length=it.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function Ft(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const Qt={[On]:s.FUNC_ADD,[lc]:s.FUNC_SUBTRACT,[cc]:s.FUNC_REVERSE_SUBTRACT};Qt[hc]=s.MIN,Qt[uc]=s.MAX;const R={[dc]:s.ZERO,[fc]:s.ONE,[pc]:s.SRC_COLOR,[Wa]:s.SRC_ALPHA,[yc]:s.SRC_ALPHA_SATURATE,[vc]:s.DST_COLOR,[gc]:s.DST_ALPHA,[mc]:s.ONE_MINUS_SRC_COLOR,[qa]:s.ONE_MINUS_SRC_ALPHA,[xc]:s.ONE_MINUS_DST_COLOR,[_c]:s.ONE_MINUS_DST_ALPHA,[Mc]:s.CONSTANT_COLOR,[Sc]:s.ONE_MINUS_CONSTANT_COLOR,[bc]:s.CONSTANT_ALPHA,[Ec]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(D,et,Y,K,it,St,kt,ae,ve,Ht){if(D===wn){g===!0&&(ht(s.BLEND),g=!1);return}if(g===!1&&(gt(s.BLEND),g=!0),D!==oc){if(D!==_||Ht!==F){if((p!==On||v!==On)&&(s.blendEquation(s.FUNC_ADD),p=On,v=On),Ht)switch(D){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kr:s.blendFunc(s.ONE,s.ONE);break;case jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,y=null,M=null,A=null,T.set(0,0,0),P=0,_=D,F=Ht}return}it=it||et,St=St||Y,kt=kt||K,(et!==p||it!==v)&&(s.blendEquationSeparate(Qt[et],Qt[it]),p=et,v=it),(Y!==f||K!==y||St!==M||kt!==A)&&(s.blendFuncSeparate(R[Y],R[K],R[St],R[kt]),f=Y,y=K,M=St,A=kt),(ae.equals(T)===!1||ve!==P)&&(s.blendColor(ae.r,ae.g,ae.b,ve),T.copy(ae),P=ve),_=D,F=!1}function Xt(D,et){D.side===Oe?ht(s.CULL_FACE):gt(s.CULL_FACE);let Y=D.side===Ce;et&&(Y=!Y),$t(Y),D.blending===bi&&D.transparent===!1?ie(wn):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),i.setMask(D.colorWrite);const K=D.stencilWrite;r.setTest(K),K&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(D){w!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),w=D)}function xt(D){D!==sc?(gt(s.CULL_FACE),D!==b&&(D===$r?s.cullFace(s.BACK):D===ac?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),b=D}function se(D){D!==L&&($&&s.lineWidth(D),L=D)}function At(D,et,Y){D?(gt(s.POLYGON_OFFSET_FILL),(V!==et||H!==Y)&&(s.polygonOffset(et,Y),V=et,H=Y)):ht(s.POLYGON_OFFSET_FILL)}function Rt(D){D?gt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+X-1),G!==D&&(s.activeTexture(D),G=D)}function S(D,et,Y){Y===void 0&&(G===null?Y=s.TEXTURE0+X-1:Y=G);let K=st[Y];K===void 0&&(K={type:void 0,texture:void 0},st[Y]=K),(K.type!==D||K.texture!==et)&&(G!==Y&&(s.activeTexture(Y),G=Y),s.bindTexture(D,et||Q[D]),K.type=D,K.texture=et)}function z(){const D=st[G];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(D){Ot.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ot.copy(D))}function ft(D){Yt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Yt.copy(D))}function Ct(D,et){let Y=l.get(et);Y===void 0&&(Y=new WeakMap,l.set(et,Y));let K=Y.get(D);K===void 0&&(K=s.getUniformBlockIndex(et,D.name),Y.set(D,K))}function Ut(D,et){const K=l.get(et).get(D);o.get(et)!==K&&(s.uniformBlockBinding(et,K,D.__bindingPointIndex),o.set(et,K))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,st={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,y=null,v=null,M=null,A=null,T=new zt(0,0,0),P=0,F=!1,w=null,b=null,L=null,V=null,H=null,Ot.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),r.reset()}return{buffers:{color:i,depth:a,stencil:r},enable:gt,disable:ht,bindFramebuffer:Et,drawBuffers:Pt,useProgram:Ft,setBlending:ie,setMaterial:Xt,setFlipSided:$t,setCullFace:xt,setLineWidth:se,setPolygonOffset:At,setScissorTest:Rt,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:ct,texImage3D:Bt,updateUBOMapping:Ct,uniformBlockBinding:Ut,texStorage2D:Dt,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:yt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Tt,viewport:ft,reset:Jt}}function Wo(s,t,e,n){const i=em(n);switch(e){case gl:return s*t;case vl:return s*t;case xl:return s*t*2;case yl:return s*t/i.components*i.byteLength;case Lr:return s*t/i.components*i.byteLength;case Ml:return s*t*2/i.components*i.byteLength;case Dr:return s*t*2/i.components*i.byteLength;case _l:return s*t*3/i.components*i.byteLength;case qe:return s*t*4/i.components*i.byteLength;case Ir:return s*t*4/i.components*i.byteLength;case Us:case Fs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:case Qa:return Math.max(s,16)*Math.max(t,8)/4;case ja:case Ja:return Math.max(s,8)*Math.max(t,8)/2;case tr:case er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ar:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case or:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case lr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ur:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case mr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ks:case _r:case vr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sl:case xr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yr:case Mr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(s){switch(s){case cn:case fl:return{byteLength:1,components:1};case Zi:case pl:case Qi:return{byteLength:2,components:1};case Pr:case Rr:return{byteLength:2,components:4};case $n:case Cr:case an:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function nm(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):Ys("canvas")}function _(C,S,z){let j=1;const J=Rt(C);if((J.width>z||J.height>z)&&(j=z/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(j*J.width),yt=Math.floor(j*J.height);u===void 0&&(u=g(Z,yt));const ot=S?g(Z,yt):u;return ot.width=Z,ot.height=yt,ot.getContext("2d").drawImage(C,0,0,Z,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+yt+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Be&&C.minFilter!==Ve}function f(C){s.generateMipmap(C)}function y(C,S,z,j,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),S===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){const yt=J?Vs:qt.getTransfer(j);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=yt===Zt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,S){let z;return C?S===null||S===$n||S===Ci?z=s.DEPTH24_STENCIL8:S===an?z=s.DEPTH32F_STENCIL8:S===Zi&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$n||S===Ci?z=s.DEPTH_COMPONENT24:S===an?z=s.DEPTH_COMPONENT32F:S===Zi&&(z=s.DEPTH_COMPONENT16),z}function M(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Ve?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function T(C){const S=C.target;S.removeEventListener("dispose",T),w(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const z=C.source,j=d.get(z);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(C),Object.keys(j).length===0&&d.delete(z)}n.remove(C)}function F(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const z=C.source,j=d.get(z);delete j[S.__cacheKey],r.memory.textures--}function w(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[j][J]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let j=0,J=z.length;j<J;j++){const Z=n.get(z[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(z[j])}n.remove(C)}let b=0;function L(){b=0}function V(){const C=b;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),b+=1,C}function H(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){const z=n.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(z,C,S);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function $(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Yt(z,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function O(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Yt(z,C,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function W(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){q(z,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const G={[$a]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Ka]:s.MIRRORED_REPEAT},st={[Be]:s.NEAREST,[Hc]:s.NEAREST_MIPMAP_NEAREST,[as]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},rt={[Xc]:s.NEVER,[Jc]:s.ALWAYS,[Yc]:s.LESS,[bl]:s.LEQUAL,[$c]:s.EQUAL,[Zc]:s.GEQUAL,[Kc]:s.GREATER,[jc]:s.NOTEQUAL};function dt(C,S){if(S.type===an&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ve||S.magFilter===oa||S.magFilter===as||S.magFilter===Wn||S.minFilter===Ve||S.minFilter===oa||S.minFilter===as||S.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,G[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,G[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,G[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,st[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Be||S.minFilter!==as&&S.minFilter!==Wn||S.type===an&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ot(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const j=S.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Z=H(S);if(Z!==C.__cacheKey){J[Z]===void 0&&(J[Z]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,z=!0),J[Z].usedTimes++;const yt=J[C.__cacheKey];yt!==void 0&&(J[C.__cacheKey].usedTimes--,yt.usedTimes===0&&F(S)),C.__cacheKey=Z,C.__webglTexture=J[Z].texture}return z}function Yt(C,S,z){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const J=Ot(C,S),Z=S.source;e.bindTexture(j,C.__webglTexture,s.TEXTURE0+z);const yt=n.get(Z);if(Z.version!==yt.__version||J===!0){e.activeTexture(s.TEXTURE0+z);const ot=qt.getPrimaries(qt.workingColorSpace),ut=S.colorSpace===Mn?null:qt.getPrimaries(S.colorSpace),Dt=S.colorSpace===Mn||ot===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let tt=_(S.image,!1,i.maxTextureSize);tt=At(S,tt);const ct=a.convert(S.format,S.colorSpace),Bt=a.convert(S.type);let Tt=y(S.internalFormat,ct,Bt,S.colorSpace,S.isVideoTexture);dt(j,S);let ft;const Ct=S.mipmaps,Ut=S.isVideoTexture!==!0,Jt=yt.__version===void 0||J===!0,D=Z.dataReady,et=M(S,tt);if(S.isDepthTexture)Tt=v(S.format===Pi,S.type),Jt&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ct,Bt,null));else if(S.isDataTexture)if(Ct.length>0){Ut&&Jt&&e.texStorage2D(s.TEXTURE_2D,et,Tt,Ct[0].width,Ct[0].height);for(let Y=0,K=Ct.length;Y<K;Y++)ft=Ct[Y],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,ct,Bt,ft.data):e.texImage2D(s.TEXTURE_2D,Y,Tt,ft.width,ft.height,0,ct,Bt,ft.data);S.generateMipmaps=!1}else Ut?(Jt&&e.texStorage2D(s.TEXTURE_2D,et,Tt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,ct,Bt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ct,Bt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Tt,Ct[0].width,Ct[0].height,tt.depth);for(let Y=0,K=Ct.length;Y<K;Y++)if(ft=Ct[Y],S.format!==qe)if(ct!==null)if(Ut){if(D)if(S.layerUpdates.size>0){const it=Wo(ft.width,ft.height,S.format,S.type);for(const St of S.layerUpdates){const kt=ft.data.subarray(St*it/ft.data.BYTES_PER_ELEMENT,(St+1)*it/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,St,ft.width,ft.height,1,ct,kt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,tt.depth,ct,ft.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Tt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,tt.depth,ct,Bt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Tt,ft.width,ft.height,tt.depth,0,ct,Bt,ft.data)}else{Ut&&Jt&&e.texStorage2D(s.TEXTURE_2D,et,Tt,Ct[0].width,Ct[0].height);for(let Y=0,K=Ct.length;Y<K;Y++)ft=Ct[Y],S.format!==qe?ct!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,ct,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,ct,Bt,ft.data):e.texImage2D(s.TEXTURE_2D,Y,Tt,ft.width,ft.height,0,ct,Bt,ft.data)}else if(S.isDataArrayTexture)if(Ut){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Tt,tt.width,tt.height,tt.depth),D)if(S.layerUpdates.size>0){const Y=Wo(tt.width,tt.height,S.format,S.type);for(const K of S.layerUpdates){const it=tt.data.subarray(K*Y/tt.data.BYTES_PER_ELEMENT,(K+1)*Y/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ct,Bt,it)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Bt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,ct,Bt,tt.data);else if(S.isData3DTexture)Ut?(Jt&&e.texStorage3D(s.TEXTURE_3D,et,Tt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Bt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,ct,Bt,tt.data);else if(S.isFramebufferTexture){if(Jt)if(Ut)e.texStorage2D(s.TEXTURE_2D,et,Tt,tt.width,tt.height);else{let Y=tt.width,K=tt.height;for(let it=0;it<et;it++)e.texImage2D(s.TEXTURE_2D,it,Tt,Y,K,0,ct,Bt,null),Y>>=1,K>>=1}}else if(Ct.length>0){if(Ut&&Jt){const Y=Rt(Ct[0]);e.texStorage2D(s.TEXTURE_2D,et,Tt,Y.width,Y.height)}for(let Y=0,K=Ct.length;Y<K;Y++)ft=Ct[Y],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ct,Bt,ft):e.texImage2D(s.TEXTURE_2D,Y,Tt,ct,Bt,ft);S.generateMipmaps=!1}else if(Ut){if(Jt){const Y=Rt(tt);e.texStorage2D(s.TEXTURE_2D,et,Tt,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,Bt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Tt,ct,Bt,tt);p(S)&&f(j),yt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function q(C,S,z){if(S.image.length!==6)return;const j=Ot(C,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const Z=n.get(J);if(J.version!==Z.__version||j===!0){e.activeTexture(s.TEXTURE0+z);const yt=qt.getPrimaries(qt.workingColorSpace),ot=S.colorSpace===Mn?null:qt.getPrimaries(S.colorSpace),ut=S.colorSpace===Mn||yt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let K=0;K<6;K++)!Dt&&!tt?ct[K]=_(S.image[K],!0,i.maxCubemapSize):ct[K]=tt?S.image[K].image:S.image[K],ct[K]=At(S,ct[K]);const Bt=ct[0],Tt=a.convert(S.format,S.colorSpace),ft=a.convert(S.type),Ct=y(S.internalFormat,Tt,ft,S.colorSpace),Ut=S.isVideoTexture!==!0,Jt=Z.__version===void 0||j===!0,D=J.dataReady;let et=M(S,Bt);dt(s.TEXTURE_CUBE_MAP,S);let Y;if(Dt){Ut&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,Ct,Bt.width,Bt.height);for(let K=0;K<6;K++){Y=ct[K].mipmaps;for(let it=0;it<Y.length;it++){const St=Y[it];S.format!==qe?Tt!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Ct,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,St.width,St.height,Tt,ft,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Ct,St.width,St.height,0,Tt,ft,St.data)}}}else{if(Y=S.mipmaps,Ut&&Jt){Y.length>0&&et++;const K=Rt(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,Ct,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ct[K].width,ct[K].height,Tt,ft,ct[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ct,ct[K].width,ct[K].height,0,Tt,ft,ct[K].data);for(let it=0;it<Y.length;it++){const kt=Y[it].image[K].image;Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,kt.width,kt.height,Tt,ft,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Ct,kt.width,kt.height,0,Tt,ft,kt.data)}}else{Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,ft,ct[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ct,Tt,ft,ct[K]);for(let it=0;it<Y.length;it++){const St=Y[it];Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Tt,ft,St.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Ct,Tt,ft,St.image[K])}}}p(S)&&f(s.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,z,j,J,Z){const yt=a.convert(z.format,z.colorSpace),ot=a.convert(z.type),ut=y(z.internalFormat,yt,ot,z.colorSpace);if(!n.get(S).__hasExternalTextures){const tt=Math.max(1,S.width>>Z),ct=Math.max(1,S.height>>Z);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,ut,tt,ct,S.depth,0,yt,ot,null):e.texImage2D(J,Z,ut,tt,ct,0,yt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,J,n.get(z).__webglTexture,0,$t(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,J,n.get(z).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(C,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,Z=v(S.stencilBuffer,J),yt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=$t(S);xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,Z,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,C)}else{const j=S.textures;for(let J=0;J<j.length;J++){const Z=j[J],yt=a.convert(Z.format,Z.colorSpace),ot=a.convert(Z.type),ut=y(Z.internalFormat,yt,ot,Z.colorSpace),Dt=$t(S);z&&xt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ut,S.width,S.height):xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const j=n.get(S.depthTexture).__webglTexture,J=$t(S);if(S.depthTexture.format===Ei)xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===Pi)xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Et(C){const S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),gt(S.__webglDepthbuffer[j],C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),gt(S.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(C,S,z){const j=n.get(C);S!==void 0&&Q(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Et(C)}function Ft(C){const S=C.texture,z=n.get(C),j=n.get(S);C.addEventListener("dispose",T);const J=C.textures,Z=C.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,r.memory.textures++),Z){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let ut=0;ut<S.mipmaps.length;ut++)z.__webglFramebuffer[ot][ut]=s.createFramebuffer()}else z.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)z.__webglFramebuffer[ot]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(yt)for(let ot=0,ut=J.length;ot<ut;ot++){const Dt=n.get(J[ot]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),r.memory.textures++)}if(C.samples>0&&xt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ut=J[ot];z.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const Dt=a.convert(ut.format,ut.colorSpace),tt=a.convert(ut.type),ct=y(ut.internalFormat,Dt,tt,ut.colorSpace,C.isXRRenderTarget===!0),Bt=$t(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,ct,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),dt(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)Q(z.__webglFramebuffer[ot][ut],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else Q(z.__webglFramebuffer[ot],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,ut=J.length;ot<ut;ot++){const Dt=J[ot],tt=n.get(Dt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),dt(s.TEXTURE_2D,Dt),Q(z.__webglFramebuffer,C,Dt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),p(Dt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),dt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)Q(z.__webglFramebuffer[ut],C,S,s.COLOR_ATTACHMENT0,ot,ut);else Q(z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ot,0);p(S)&&f(ot),e.unbindTexture()}C.depthBuffer&&Et(C)}function Qt(C){const S=C.textures;for(let z=0,j=S.length;z<j;z++){const J=S[z];if(p(J)){const Z=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,yt=n.get(J).__webglTexture;e.bindTexture(Z,yt),f(Z),e.unbindTexture()}}}const R=[],ie=[];function Xt(C){if(C.samples>0){if(xt(C)===!1){const S=C.textures,z=C.width,j=C.height;let J=s.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(C),ot=S.length>1;if(ot)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const Dt=n.get(S[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,z,j,0,0,z,j,J,s.NEAREST),l===!0&&(R.length=0,ie.length=0,R.push(s.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.resolveDepthBuffer===!1&&(R.push(Z),ie.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,R))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const Dt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $t(C){return Math.min(i.maxSamples,C.samples)}function xt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(C){const S=r.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function At(C,S){const z=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==An&&z!==Mn&&(qt.getTransfer(z)===Zt?(j!==qe||J!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=O,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=xt}function im(s,t){function e(n,i=Mn){let a;const r=qt.getTransfer(i);if(n===cn)return s.UNSIGNED_BYTE;if(n===Pr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Rr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return s.BYTE;if(n===pl)return s.SHORT;if(n===Zi)return s.UNSIGNED_SHORT;if(n===Cr)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===Qi)return s.HALF_FLOAT;if(n===gl)return s.ALPHA;if(n===_l)return s.RGB;if(n===qe)return s.RGBA;if(n===vl)return s.LUMINANCE;if(n===xl)return s.LUMINANCE_ALPHA;if(n===Ei)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===yl)return s.RED;if(n===Lr)return s.RED_INTEGER;if(n===Ml)return s.RG;if(n===Dr)return s.RG_INTEGER;if(n===Ir)return s.RGBA_INTEGER;if(n===Us||n===Fs||n===Os||n===Bs)if(r===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Us)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Us)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Za||n===Ja||n===Qa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ja)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tr||n===er||n===nr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===tr||n===er)return r===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===nr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ir||n===sr||n===ar||n===rr||n===or||n===lr||n===cr||n===hr||n===ur||n===dr||n===fr||n===pr||n===mr||n===gr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ir)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ar)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===or)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ur)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===_r||n===vr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===ks)return r===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_r)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===xr||n===yr||n===Mr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===ks)return a.COMPRESSED_RED_RGTC1_EXT;if(n===xr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class sm extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class As extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Pe,a=t.properties.get(i);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:rm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cm extends Jn{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const _=new lm,p=e.getContextAttributes();let f=null,y=null;const v=[],M=[],A=new Lt;let T=null;const P=new Fe;P.layers.enable(1),P.viewport=new ge;const F=new Fe;F.layers.enable(2),F.viewport=new ge;const w=[P,F],b=new sm;b.layers.enable(1),b.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new Ia,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new Ia,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new Ia,v[q]=Q),Q.getHandSpace()};function H(q){const Q=M.indexOf(q.inputSource);if(Q===-1)return;const gt=v[Q];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||r),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let q=0;q<v.length;q++){const Q=M[q];Q!==null&&(M[q]=null,v[q].disconnect(Q))}L=null,V=null,_.reset(),t.setRenderTarget(f),m=null,d=null,u=null,i=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Kn(m.framebufferWidth,m.framebufferHeight,{format:qe,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,gt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Pi:Ei,gt=p.stencil?Ci:$n);const Et={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:a};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Kn(d.textureWidth,d.textureHeight,{format:qe,type:cn,depthTexture:new Fl(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let Q=0;Q<q.removed.length;Q++){const gt=q.removed[Q],ht=M.indexOf(gt);ht>=0&&(M[ht]=null,v[ht].disconnect(gt))}for(let Q=0;Q<q.added.length;Q++){const gt=q.added[Q];let ht=M.indexOf(gt);if(ht===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=M.length){M.push(gt),ht=Pt;break}else if(M[Pt]===null){M[Pt]=gt,ht=Pt;break}if(ht===-1)break}const Et=v[ht];Et&&Et.connect(gt)}}const O=new N,W=new N;function G(q,Q,gt){O.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(gt.matrixWorld);const ht=O.distanceTo(W),Et=Q.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ft=Et[14]/(Et[10]-1),Qt=Et[14]/(Et[10]+1),R=(Et[9]+1)/Et[5],ie=(Et[9]-1)/Et[5],Xt=(Et[8]-1)/Et[0],$t=(Pt[8]+1)/Pt[0],xt=Ft*Xt,se=Ft*$t,At=ht/(-Xt+$t),Rt=At*-Xt;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Rt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const C=Ft+At,S=Qt+At,z=xt-Rt,j=se+(ht-Rt),J=R*Qt/S*C,Z=ie*Qt/S*C;q.projectionMatrix.makePerspective(z,j,J,Z,C,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,gt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),b.near=F.near=P.near=Q,b.far=F.far=P.far=gt,(L!==b.near||V!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,V=b.far);const ht=q.parent,Et=b.cameras;st(b,ht);for(let Pt=0;Pt<Et.length;Pt++)st(Et[Pt],ht);Et.length===2?G(b,P,F):b.projectionMatrix.copy(P.projectionMatrix),rt(q,b,ht)};function rt(q,Q,gt){gt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let dt=null;function Ot(q,Q){if(h=Q.getViewerPose(c||r),g=Q,h!==null){const gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let ht=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,ht=!0);for(let Pt=0;Pt<gt.length;Pt++){const Ft=gt[Pt];let Qt=null;if(m!==null)Qt=m.getViewport(Ft);else{const ie=u.getViewSubImage(d,Ft);Qt=ie.viewport,Pt===0&&(t.setRenderTargetTextures(y,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),t.setRenderTarget(y))}let R=w[Pt];R===void 0&&(R=new Fe,R.layers.enable(Pt),R.viewport=new ge,w[Pt]=R),R.matrix.fromArray(Ft.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ft.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Pt===0&&(b.matrix.copy(R.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ht===!0&&b.cameras.push(R)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Pt=u.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let gt=0;gt<v.length;gt++){const ht=M[gt],Et=v[gt];ht!==null&&Et!==void 0&&Et.update(ht,Q,c||r)}dt&&dt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Yt=new Ul;Yt.setAnimationLoop(Ot),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}}const Nn=new hn,hm=new ce;function um(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ll(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,y,v,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(p,f):f.isMeshToonMaterial?(a(p,f),u(p,f)):f.isMeshPhongMaterial?(a(p,f),h(p,f)):f.isMeshStandardMaterial?(a(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(a(p,f),g(p,f)):f.isMeshDepthMaterial?a(p,f):f.isMeshDistanceMaterial?(a(p,f),_(p,f)):f.isMeshNormalMaterial?a(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,y,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ce&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ce&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f),v=y.envMap,M=y.envMapRotation;v&&(p.envMap.value=v,Nn.copy(M),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),p.envMapRotation.value.setFromMatrix4(hm.makeRotationFromEuler(Nn)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=v*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dm(s,t,e,n){let i={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(y,A);const T=t.render.frame;a[y.id]!==T&&(d(y),a[y.id]=T)}function h(y){const v=u();y.__bindingPointIndex=v;const M=s.createBuffer(),A=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],M=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,P=M.length;T<P;T++){const F=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,b=F.length;w<b;w++){const L=F[w];if(m(L,T,w,A)===!0){const V=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let $=0;$<H.length;$++){const O=H[$],W=_(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,V+X,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,X),X+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,v,M,A){const T=y.value,P=v+"_"+M;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{const F=A[P];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return A[P]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(y){const v=y.uniforms;let M=0;const A=16;for(let P=0,F=v.length;P<F;P++){const w=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,L=w.length;b<L;b++){const V=w[b],H=Array.isArray(V.value)?V.value:[V.value];for(let X=0,$=H.length;X<$;X++){const O=H[X],W=_(O),G=M%A,st=G%W.boundary,rt=G+st;M+=st,rt!==0&&A-rt<W.storage&&(M+=A-rt),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=W.storage}}}const T=M%A;return T>0&&(M+=A-T),y.__size=M,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},a={}}return{bind:l,update:c,dispose:f}}class fm{constructor(t={}){const{canvas:e=eh(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Tn,this.toneMappingExposure=1;const v=this;let M=!1,A=0,T=0,P=null,F=-1,w=null;const b=new ge,L=new ge;let V=null;const H=new zt(0);let X=0,$=e.width,O=e.height,W=1,G=null,st=null;const rt=new ge(0,0,$,O),dt=new ge(0,0,$,O);let Ot=!1;const Yt=new Nl;let q=!1,Q=!1;const gt=new ce,ht=new N,Et=new ge,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Qt(){return P===null?W:1}let R=n;function ie(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ar}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",it,!1),R===null){const I="webgl2";if(R=ie(I,E),R===null)throw ie(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xt,$t,xt,se,At,Rt,C,S,z,j,J,Z,yt,ot,ut,Dt,tt,ct,Bt,Tt,ft,Ct,Ut,Jt;function D(){Xt=new xf(R),Xt.init(),Ct=new im(R,Xt),$t=new df(R,Xt,t,Ct),xt=new tm(R),se=new Sf(R),At=new zp,Rt=new nm(R,Xt,xt,At,$t,Ct,se),C=new pf(v),S=new vf(v),z=new Ah(R),Ut=new hf(R,z),j=new yf(R,z,se,Ut),J=new Ef(R,j,z,se),Bt=new bf(R,$t,Rt),Dt=new ff(At),Z=new kp(v,C,S,Xt,$t,Ut,Dt),yt=new um(v,At),ot=new Gp,ut=new $p(Xt),ct=new cf(v,C,S,xt,J,d,l),tt=new Qp(v,J,$t),Jt=new dm(R,se,$t,xt),Tt=new uf(R,Xt,se),ft=new Mf(R,Xt,se),se.programs=Z.programs,v.capabilities=$t,v.extensions=Xt,v.properties=At,v.renderLists=ot,v.shadowMap=tt,v.state=xt,v.info=se}D();const et=new cm(v,R);this.xr=et,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=Xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize($,O,!1))},this.getSize=function(E){return E.set($,O)},this.setSize=function(E,I,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,O=I,e.width=Math.floor(E*W),e.height=Math.floor(I*W),B===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set($*W,O*W).floor()},this.setDrawingBufferSize=function(E,I,B){$=E,O=I,W=B,e.width=Math.floor(E*B),e.height=Math.floor(I*B),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,I,B,k){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,I,B,k),xt.viewport(b.copy(rt).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,I,B,k){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,I,B,k),xt.scissor(L.copy(dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(E){xt.setScissorTest(Ot=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,I=!0,B=!0){let k=0;if(E){let U=!1;if(P!==null){const nt=P.texture.format;U=nt===Ir||nt===Dr||nt===Lr}if(U){const nt=P.texture.type,lt=nt===cn||nt===$n||nt===Zi||nt===Ci||nt===Pr||nt===Rr,pt=ct.getClearColor(),mt=ct.getClearAlpha(),bt=pt.r,wt=pt.g,_t=pt.b;lt?(m[0]=bt,m[1]=wt,m[2]=_t,m[3]=mt,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=bt,g[1]=wt,g[2]=_t,g[3]=mt,R.clearBufferiv(R.COLOR,0,g))}else k|=R.COLOR_BUFFER_BIT}I&&(k|=R.DEPTH_BUFFER_BIT),B&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ot.dispose(),ut.dispose(),At.dispose(),C.dispose(),S.dispose(),J.dispose(),Ut.dispose(),Jt.dispose(),Z.dispose(),et.dispose(),et.removeEventListener("sessionstart",Xe),et.removeEventListener("sessionend",Hr),Cn.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=se.autoReset,I=tt.enabled,B=tt.autoUpdate,k=tt.needsUpdate,U=tt.type;D(),se.autoReset=E,tt.enabled=I,tt.autoUpdate=B,tt.needsUpdate=k,tt.type=U}function it(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function St(E){const I=E.target;I.removeEventListener("dispose",St),kt(I)}function kt(E){ae(E),At.remove(E)}function ae(E){const I=At.get(E).programs;I!==void 0&&(I.forEach(function(B){Z.releaseProgram(B)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,B,k,U,nt){I===null&&(I=Pt);const lt=U.isMesh&&U.matrixWorld.determinant()<0,pt=ql(E,I,B,k,U);xt.setMaterial(k,lt);let mt=B.index,bt=1;if(k.wireframe===!0){if(mt=j.getWireframeAttribute(B),mt===void 0)return;bt=2}const wt=B.drawRange,_t=B.attributes.position;let Gt=wt.start*bt,te=(wt.start+wt.count)*bt;nt!==null&&(Gt=Math.max(Gt,nt.start*bt),te=Math.min(te,(nt.start+nt.count)*bt)),mt!==null?(Gt=Math.max(Gt,0),te=Math.min(te,mt.count)):_t!=null&&(Gt=Math.max(Gt,0),te=Math.min(te,_t.count));const ee=te-Gt;if(ee<0||ee===1/0)return;Ut.setup(U,k,pt,B,mt);let Re,Vt=Tt;if(mt!==null&&(Re=z.get(mt),Vt=ft,Vt.setIndex(Re)),U.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*Qt()),Vt.setMode(R.LINES)):Vt.setMode(R.TRIANGLES);else if(U.isLine){let vt=k.linewidth;vt===void 0&&(vt=1),xt.setLineWidth(vt*Qt()),U.isLineSegments?Vt.setMode(R.LINES):U.isLineLoop?Vt.setMode(R.LINE_LOOP):Vt.setMode(R.LINE_STRIP)}else U.isPoints?Vt.setMode(R.POINTS):U.isSprite&&Vt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Vt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const vt=U._multiDrawStarts,xe=U._multiDrawCounts,Wt=U._multiDrawCount,ke=mt?z.get(mt).bytesPerElement:1,Qn=At.get(k).currentProgram.getUniforms();for(let Le=0;Le<Wt;Le++)Qn.setValue(R,"_gl_DrawID",Le),Vt.render(vt[Le]/ke,xe[Le])}else if(U.isInstancedMesh)Vt.renderInstances(Gt,ee,U.count);else if(B.isInstancedBufferGeometry){const vt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,xe=Math.min(B.instanceCount,vt);Vt.renderInstances(Gt,ee,xe)}else Vt.render(Gt,ee)};function ve(E,I,B){E.transparent===!0&&E.side===Oe&&E.forceSinglePass===!1?(E.side=Ce,E.needsUpdate=!0,ss(E,I,B),E.side=ln,E.needsUpdate=!0,ss(E,I,B),E.side=Oe):ss(E,I,B)}this.compile=function(E,I,B=null){B===null&&(B=E),p=ut.get(B),p.init(I),y.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==B&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return E.traverse(function(U){const nt=U.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const pt=nt[lt];ve(pt,B,U),k.add(pt)}else ve(nt,B,U),k.add(nt)}),y.pop(),p=null,k},this.compileAsync=function(E,I,B=null){const k=this.compile(E,I,B);return new Promise(U=>{function nt(){if(k.forEach(function(lt){At.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){U(E);return}setTimeout(nt,10)}Xt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ht=null;function je(E){Ht&&Ht(E)}function Xe(){Cn.stop()}function Hr(){Cn.start()}const Cn=new Ul;Cn.setAnimationLoop(je),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(E){Ht=E,et.setAnimationLoop(E),E===null?Cn.stop():Cn.start()},et.addEventListener("sessionstart",Xe),et.addEventListener("sessionend",Hr),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,I,P),p=ut.get(E,y.length),p.init(I),y.push(p),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Yt.setFromProjectionMatrix(gt),Q=this.localClippingEnabled,q=Dt.init(this.clippingPlanes,Q),_=ot.get(E,f.length),_.init(),f.push(_),et.enabled===!0&&et.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&na(nt,I,-1/0,v.sortObjects)}na(E,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,st),Ft=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ft&&ct.addToRenderList(_,E),this.info.render.frame++,q===!0&&Dt.beginShadows();const B=p.state.shadowsArray;tt.render(B,E,I),q===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,U=_.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(U.length>0)for(let lt=0,pt=nt.length;lt<pt;lt++){const mt=nt[lt];Vr(k,U,E,mt)}Ft&&ct.render(E);for(let lt=0,pt=nt.length;lt<pt;lt++){const mt=nt[lt];Gr(_,E,mt,mt.viewport)}}else U.length>0&&Vr(k,U,E,I),Ft&&ct.render(E),Gr(_,E,I);P!==null&&(Rt.updateMultisampleRenderTarget(P),Rt.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,I),Ut.resetDefaultState(),F=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],q===!0&&Dt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function na(E,I,B,k){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){k&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const lt=J.update(E),pt=E.material;pt.visible&&_.push(E,lt,pt,B,Et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){const lt=J.update(E),pt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Et.copy(lt.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(pt)){const mt=lt.groups;for(let bt=0,wt=mt.length;bt<wt;bt++){const _t=mt[bt],Gt=pt[_t.materialIndex];Gt&&Gt.visible&&_.push(E,lt,Gt,B,Et.z,_t)}}else pt.visible&&_.push(E,lt,pt,B,Et.z,null)}}const nt=E.children;for(let lt=0,pt=nt.length;lt<pt;lt++)na(nt[lt],I,B,k)}function Gr(E,I,B,k){const U=E.opaque,nt=E.transmissive,lt=E.transparent;p.setupLightsView(B),q===!0&&Dt.setGlobalState(v.clippingPlanes,B),k&&xt.viewport(b.copy(k)),U.length>0&&is(U,I,B),nt.length>0&&is(nt,I,B),lt.length>0&&is(lt,I,B),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Vr(E,I,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Kn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Qi:cn,minFilter:Wn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[k.id],lt=k.viewport||b;nt.setSize(lt.z,lt.w);const pt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Ft&&ct.render(B);const mt=v.toneMapping;v.toneMapping=Tn;const bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),q===!0&&Dt.setGlobalState(v.clippingPlanes,k),is(E,B,k),Rt.updateMultisampleRenderTarget(nt),Rt.updateRenderTargetMipmap(nt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let _t=0,Gt=I.length;_t<Gt;_t++){const te=I[_t],ee=te.object,Re=te.geometry,Vt=te.material,vt=te.group;if(Vt.side===Oe&&ee.layers.test(k.layers)){const xe=Vt.side;Vt.side=Ce,Vt.needsUpdate=!0,Wr(ee,B,k,Re,Vt,vt),Vt.side=xe,Vt.needsUpdate=!0,wt=!0}}wt===!0&&(Rt.updateMultisampleRenderTarget(nt),Rt.updateRenderTargetMipmap(nt))}v.setRenderTarget(pt),v.setClearColor(H,X),bt!==void 0&&(k.viewport=bt),v.toneMapping=mt}function is(E,I,B){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,nt=E.length;U<nt;U++){const lt=E[U],pt=lt.object,mt=lt.geometry,bt=k===null?lt.material:k,wt=lt.group;pt.layers.test(B.layers)&&Wr(pt,I,B,mt,bt,wt)}}function Wr(E,I,B,k,U,nt){E.onBeforeRender(v,I,B,k,U,nt),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,I,B,k,E,nt),U.transparent===!0&&U.side===Oe&&U.forceSinglePass===!1?(U.side=Ce,U.needsUpdate=!0,v.renderBufferDirect(B,I,k,U,E,nt),U.side=ln,U.needsUpdate=!0,v.renderBufferDirect(B,I,k,U,E,nt),U.side=Oe):v.renderBufferDirect(B,I,k,U,E,nt),E.onAfterRender(v,I,B,k,U,nt)}function ss(E,I,B){I.isScene!==!0&&(I=Pt);const k=At.get(E),U=p.state.lights,nt=p.state.shadowsArray,lt=U.state.version,pt=Z.getParameters(E,U.state,nt,I,B),mt=Z.getProgramCacheKey(pt);let bt=k.programs;k.environment=E.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(E.isMeshStandardMaterial?S:C).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,bt===void 0&&(E.addEventListener("dispose",St),bt=new Map,k.programs=bt);let wt=bt.get(mt);if(wt!==void 0){if(k.currentProgram===wt&&k.lightsStateVersion===lt)return Xr(E,pt),wt}else pt.uniforms=Z.getUniforms(E),E.onBeforeCompile(pt,v),wt=Z.acquireProgram(pt,mt),bt.set(mt,wt),k.uniforms=pt.uniforms;const _t=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_t.clippingPlanes=Dt.uniform),Xr(E,pt),k.needsLights=Yl(E),k.lightsStateVersion=lt,k.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=wt,k.uniformsList=null,wt}function qr(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=zs.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Xr(E,I){const B=At.get(E);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function ql(E,I,B,k,U){I.isScene!==!0&&(I=Pt),Rt.resetTextureUnits();const nt=I.fog,lt=k.isMeshStandardMaterial?I.environment:null,pt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:An,mt=(k.isMeshStandardMaterial?S:C).get(k.envMap||lt),bt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,wt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!B.morphAttributes.position,Gt=!!B.morphAttributes.normal,te=!!B.morphAttributes.color;let ee=Tn;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ee=v.toneMapping);const Re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Vt=Re!==void 0?Re.length:0,vt=At.get(k),xe=p.state.lights;if(q===!0&&(Q===!0||E!==w)){const Ne=E===w&&k.id===F;Dt.setState(k,E,Ne)}let Wt=!1;k.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==xe.state.version||vt.outputColorSpace!==pt||U.isBatchedMesh&&vt.batching===!1||!U.isBatchedMesh&&vt.batching===!0||U.isBatchedMesh&&vt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&vt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&vt.instancing===!1||!U.isInstancedMesh&&vt.instancing===!0||U.isSkinnedMesh&&vt.skinning===!1||!U.isSkinnedMesh&&vt.skinning===!0||U.isInstancedMesh&&vt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&vt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&vt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&vt.instancingMorph===!1&&U.morphTexture!==null||vt.envMap!==mt||k.fog===!0&&vt.fog!==nt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Dt.numPlanes||vt.numIntersection!==Dt.numIntersection)||vt.vertexAlphas!==bt||vt.vertexTangents!==wt||vt.morphTargets!==_t||vt.morphNormals!==Gt||vt.morphColors!==te||vt.toneMapping!==ee||vt.morphTargetsCount!==Vt)&&(Wt=!0):(Wt=!0,vt.__version=k.version);let ke=vt.currentProgram;Wt===!0&&(ke=ss(k,I,U));let Qn=!1,Le=!1,ia=!1;const re=ke.getUniforms(),dn=vt.uniforms;if(xt.useProgram(ke.program)&&(Qn=!0,Le=!0,ia=!0),k.id!==F&&(F=k.id,Le=!0),Qn||w!==E){re.setValue(R,"projectionMatrix",E.projectionMatrix),re.setValue(R,"viewMatrix",E.matrixWorldInverse);const Ne=re.map.cameraPosition;Ne!==void 0&&Ne.setValue(R,ht.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&re.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&re.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Le=!0,ia=!0)}if(U.isSkinnedMesh){re.setOptional(R,U,"bindMatrix"),re.setOptional(R,U,"bindMatrixInverse");const Ne=U.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),re.setValue(R,"boneTexture",Ne.boneTexture,Rt))}U.isBatchedMesh&&(re.setOptional(R,U,"batchingTexture"),re.setValue(R,"batchingTexture",U._matricesTexture,Rt),re.setOptional(R,U,"batchingIdTexture"),re.setValue(R,"batchingIdTexture",U._indirectTexture,Rt),re.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(R,"batchingColorTexture",U._colorsTexture,Rt));const sa=B.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&Bt.update(U,B,ke),(Le||vt.receiveShadow!==U.receiveShadow)&&(vt.receiveShadow=U.receiveShadow,re.setValue(R,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(dn.envMap.value=mt,dn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(dn.envMapIntensity.value=I.environmentIntensity),Le&&(re.setValue(R,"toneMappingExposure",v.toneMappingExposure),vt.needsLights&&Xl(dn,ia),nt&&k.fog===!0&&yt.refreshFogUniforms(dn,nt),yt.refreshMaterialUniforms(dn,k,W,O,p.state.transmissionRenderTarget[E.id]),zs.upload(R,qr(vt),dn,Rt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(zs.upload(R,qr(vt),dn,Rt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&re.setValue(R,"center",U.center),re.setValue(R,"modelViewMatrix",U.modelViewMatrix),re.setValue(R,"normalMatrix",U.normalMatrix),re.setValue(R,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ne=k.uniformsGroups;for(let aa=0,$l=Ne.length;aa<$l;aa++){const Yr=Ne[aa];Jt.update(Yr,ke),Jt.bind(Yr,ke)}}return ke}function Xl(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Yl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,I,B){At.get(E.texture).__webglTexture=I,At.get(E.depthTexture).__webglTexture=B;const k=At.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const B=At.get(E);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,B=0){P=E,A=I,T=B;let k=!0,U=null,nt=!1,lt=!1;if(E){const mt=At.get(E);if(mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)Rt.setupRenderTarget(E);else if(mt.__hasExternalTextures)Rt.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const _t=E.depthTexture;if(mt.__boundDepthTexture!==_t){if(_t!==null&&At.has(_t)&&(E.width!==_t.image.width||E.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(E)}}const bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(lt=!0);const wt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?U=wt[I][B]:U=wt[I],nt=!0):E.samples>0&&Rt.useMultisampledRTT(E)===!1?U=At.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[B]:U=wt,b.copy(E.viewport),L.copy(E.scissor),V=E.scissorTest}else b.copy(rt).multiplyScalar(W).floor(),L.copy(dt).multiplyScalar(W).floor(),V=Ot;if(xt.bindFramebuffer(R.FRAMEBUFFER,U)&&k&&xt.drawBuffers(E,U),xt.viewport(b),xt.scissor(L),xt.setScissorTest(V),nt){const mt=At.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,B)}else if(lt){const mt=At.get(E.texture),bt=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.__webglTexture,B||0,bt)}F=-1},this.readRenderTargetPixels=function(E,I,B,k,U,nt,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){xt.bindFramebuffer(R.FRAMEBUFFER,pt);try{const mt=E.texture,bt=mt.format,wt=mt.type;if(!$t.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-k&&B>=0&&B<=E.height-U&&R.readPixels(I,B,k,U,Ct.convert(bt),Ct.convert(wt),nt)}finally{const mt=P!==null?At.get(P).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(E,I,B,k,U,nt,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){xt.bindFramebuffer(R.FRAMEBUFFER,pt);try{const mt=E.texture,bt=mt.format,wt=mt.type;if(!$t.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-k&&B>=0&&B<=E.height-U){const _t=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.bufferData(R.PIXEL_PACK_BUFFER,nt.byteLength,R.STREAM_READ),R.readPixels(I,B,k,U,Ct.convert(bt),Ct.convert(wt),0),R.flush();const Gt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await nh(R,Gt,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,nt)}finally{R.deleteBuffer(_t),R.deleteSync(Gt)}return nt}}finally{const mt=P!==null?At.get(P).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(E,I=null,B=0){E.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(E.image.width*k),nt=Math.floor(E.image.height*k),lt=I!==null?I.x:0,pt=I!==null?I.y:0;Rt.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,lt,pt,U,nt),xt.unbindTexture()},this.copyTextureToTexture=function(E,I,B=null,k=null,U=0){E.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let nt,lt,pt,mt,bt,wt;B!==null?(nt=B.max.x-B.min.x,lt=B.max.y-B.min.y,pt=B.min.x,mt=B.min.y):(nt=E.image.width,lt=E.image.height,pt=0,mt=0),k!==null?(bt=k.x,wt=k.y):(bt=0,wt=0);const _t=Ct.convert(I.format),Gt=Ct.convert(I.type);Rt.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const te=R.getParameter(R.UNPACK_ROW_LENGTH),ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Re=R.getParameter(R.UNPACK_SKIP_PIXELS),Vt=R.getParameter(R.UNPACK_SKIP_ROWS),vt=R.getParameter(R.UNPACK_SKIP_IMAGES),xe=E.isCompressedTexture?E.mipmaps[U]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,xe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,mt),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,bt,wt,nt,lt,_t,Gt,xe.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,bt,wt,xe.width,xe.height,_t,xe.data):R.texSubImage2D(R.TEXTURE_2D,U,bt,wt,nt,lt,_t,Gt,xe),R.pixelStorei(R.UNPACK_ROW_LENGTH,te),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,vt),U===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(E,I,B=null,k=null,U=0){E.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0);let nt,lt,pt,mt,bt,wt,_t,Gt,te;const ee=E.isCompressedTexture?E.mipmaps[U]:E.image;B!==null?(nt=B.max.x-B.min.x,lt=B.max.y-B.min.y,pt=B.max.z-B.min.z,mt=B.min.x,bt=B.min.y,wt=B.min.z):(nt=ee.width,lt=ee.height,pt=ee.depth,mt=0,bt=0,wt=0),k!==null?(_t=k.x,Gt=k.y,te=k.z):(_t=0,Gt=0,te=0);const Re=Ct.convert(I.format),Vt=Ct.convert(I.type);let vt;if(I.isData3DTexture)Rt.setTexture3D(I,0),vt=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Rt.setTexture2DArray(I,0),vt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const xe=R.getParameter(R.UNPACK_ROW_LENGTH),Wt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ke=R.getParameter(R.UNPACK_SKIP_PIXELS),Qn=R.getParameter(R.UNPACK_SKIP_ROWS),Le=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ee.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,mt),R.pixelStorei(R.UNPACK_SKIP_ROWS,bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,wt),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(vt,U,_t,Gt,te,nt,lt,pt,Re,Vt,ee.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(vt,U,_t,Gt,te,nt,lt,pt,Re,ee.data):R.texSubImage3D(vt,U,_t,Gt,te,nt,lt,pt,Re,Vt,ee),R.pixelStorei(R.UNPACK_ROW_LENGTH,xe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Wt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ke),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Le),U===0&&I.generateMipmaps&&R.generateMipmap(vt),xt.unbindTexture()},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&Rt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Rt.setTextureCube(E,0):E.isData3DTexture?Rt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Rt.setTexture2DArray(E,0):Rt.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,xt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Nr?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Js?"display-p3":"srgb"}}class Or{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new Or(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pm extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xn extends ns{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $s=new N,Ks=new N,qo=new ce,Hi=new Ur,Cs=new Qs,Na=new N,Xo=new N;class js extends we{constructor(t=new le,e=new Xn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,a=e.count;i<a;i++)$s.fromBufferAttribute(e,i-1),Ks.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$s.distanceTo(Ks);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=a,t.ray.intersectsSphere(Cs)===!1)return;qo.copy(i).invert(),Hi.copy(t.ray).applyMatrix4(qo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=m,p=g-1;_<p;_+=c){const f=h.getX(_),y=h.getX(_+1),v=Ps(this,t,Hi,l,f,y);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(m),f=Ps(this,t,Hi,l,_,p);f&&e.push(f)}}else{const m=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=m,p=g-1;_<p;_+=c){const f=Ps(this,t,Hi,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Ps(this,t,Hi,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ps(s,t,e,n,i,a){const r=s.geometry.attributes.position;if($s.fromBufferAttribute(r,i),Ks.fromBufferAttribute(r,a),e.distanceSqToSegment($s,Ks,Na,Xo)>n)return;Na.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Na);if(!(l<t.near||l>t.far))return{distance:l,point:Xo.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Yo=new N,$o=new N;class Er extends js{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,a=e.count;i<a;i+=2)Yo.fromBufferAttribute(e,i),$o.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yo.distanceTo($o);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Rs=new N,Ls=new N,Ua=new N,Ds=new We;class mm extends le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),a=Math.cos(Yi*e),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:f}=Ds;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Ds.getNormal(Ua),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const v=(y+1)%3,M=u[y],A=u[v],T=Ds[h[y]],P=Ds[h[v]],F=`${M}_${A}`,w=`${A}_${M}`;w in d&&d[w]?(Ua.dot(d[w].normal)<=a&&(m.push(T.x,T.y,T.z),m.push(P.x,P.y,P.z)),d[w]=null):F in d||(d[F]={index0:c[y],index1:c[v],normal:Ua.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Rs.fromBufferAttribute(o,_),Ls.fromBufferAttribute(o,p),m.push(Rs.x,Rs.y,Rs.z),m.push(Ls.x,Ls.y,Ls.z)}this.setAttribute("position",new _e(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Br extends le{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new N,d=new N,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const y=[],v=f/n;let M=0;f===0&&r===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(i+T*a)*Math.sin(r+v*o),u.y=t*Math.cos(r+v*o),u.z=t*Math.sin(i+T*a)*Math.sin(r+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+M,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const v=h[f][y+1],M=h[f][y],A=h[f+1][y],T=h[f+1][y+1];(f!==0||r>0)&&m.push(v,M,T),(f!==n-1||l<Math.PI)&&m.push(M,A,T)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kr extends le{constructor(t=1,e=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new N,u=new N,d=new N;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*a,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,y=(i+1)*m+g;r.push(_,p,y),r.push(p,f,y)}this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gm extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _m extends gm{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ko{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hl extends Er{constructor(t=10,e=10,n=4473924,i=8947848){n=new zt(n),i=new zt(i);const a=e/2,r=t/e,o=t/2,l=[],c=[];for(let d=0,m=0,g=-o;d<=e;d++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===a?n:i;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new le;h.setAttribute("position",new _e(l,3)),h.setAttribute("color",new _e(c,3));const u=new Xn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vm extends Jn{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ar}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ar);function Ye(s,t,e){return Math.round(s+(t-s)*e)}function Xi(s){const t=Math.max(0,Math.min(1,s));if(t<.33){const n=t/.33;return[Ye(10,40,n),Ye(23,110,n),Ye(38,160,n)]}if(t<.66){const n=(t-.33)/.33;return[Ye(40,116,n),Ye(110,249,n),Ye(160,255,n)]}if(t<.86){const n=(t-.66)/.2;return[Ye(116,255,n),Ye(249,251,n),Ye(255,194,n)]}const e=(t-.86)/.14;return[255,251,Ye(194,255,e)]}const jo={type:"change"},zr={type:"start"},Gl={type:"end"},Is=new Ur,Zo=new yn,xm=Math.cos(70*th.DEG2RAD),he=new N,Ae=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fa=1e-6;class ym extends vm{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new jn,this._lastTargetPosition=new N,this._quat=new jn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ko,this._sphericalDelta=new Ko,this._scale=1,this._panOffset=new N,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new N,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sm.bind(this),this._onPointerDown=Mm.bind(this),this._onPointerUp=bm.bind(this),this._onContextMenu=Rm.bind(this),this._onMouseWheel=Tm.bind(this),this._onKeyDown=Am.bind(this),this._onTouchStart=Cm.bind(this),this._onTouchMove=Pm.bind(this),this._onMouseDown=Em.bind(this),this._onMouseMove=wm.bind(this),this._interceptControlDown=Lm.bind(this),this._interceptControlUp=Dm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jo),this.update(),this.state=Kt.NONE}update(t=null){const e=this.object.position;he.copy(e).sub(this.target),he.applyQuaternion(this._quat),this._spherical.setFromVector3(he),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ae:n>Math.PI&&(n-=Ae),i<-Math.PI?i+=Ae:i>Math.PI&&(i-=Ae),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(he.setFromSpherical(this._spherical),he.applyQuaternion(this._quatInverse),e.copy(this.target).add(he),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=he.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=he.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<xm?this.object.lookAt(this.target):(Zo.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(Zo,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fa||this._lastTargetPosition.distanceToSquared(this.target)>Fa?(this.dispatchEvent(jo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ae/60*this.autoRotateSpeed*t:Ae/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){he.setFromMatrixColumn(e,0),he.multiplyScalar(-t),this._panOffset.add(he)}_panUp(t,e){this.screenSpacePanning===!0?he.setFromMatrixColumn(e,1):(he.setFromMatrixColumn(e,0),he.crossVectors(this.object.up,he)),he.multiplyScalar(t),this._panOffset.add(he)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;he.copy(i).sub(this.target);let a=he.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,a=e-n.top,r=n.width,o=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ae*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ae*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,a=Math.sqrt(n*n+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ae*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ae*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,a=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Mm(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Sm(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function bm(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gl),this.state=Kt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Em(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Kt.DOLLY;break;case Si.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}break;case Si.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(zr)}function wm(s){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Tm(s){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(s.preventDefault(),this.dispatchEvent(zr),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Gl))}function Am(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Cm(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Kt.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Kt.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(zr)}function Pm(s){switch(this._trackPointer(s),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Kt.NONE}}function Rm(s){this.enabled!==!1&&s.preventDefault()}function Lm(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dm(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jo=661286;function Vl(s,{camera:t,target:e,fov:n=44,fog:i=[8,22]}){const a=Math.min(window.devicePixelRatio||1,2),r=s.width/a,o=s.height/a,l=new fm({canvas:s,antialias:!0,powerPreference:"high-performance"});l.setSize(r,o,!1),l.setPixelRatio(a),l.setClearColor(Jo,1);const c=new pm;c.fog=new Or(Jo,i[0],i[1]),c.add(new _m(16777215,1));const h=new Fe(n,r/o,.1,100);h.position.set(...t);const u=new ym(h,s);return u.enableDamping=!0,u.dampingFactor=.06,u.minDistance=1.2,u.maxDistance=16,u.maxPolarAngle=Math.PI*.88,u.target.set(...e),u.update(),s.addEventListener("wheel",d=>d.preventDefault(),{passive:!1}),{renderer:l,scene:c,camera:h,controls:u}}function Wl(s,t,e){const n=Math.min(window.devicePixelRatio||1,2),i=e.width/n,a=e.height/n;s.setSize(i,a,!1),s.setPixelRatio(n),t.aspect=i/a,t.updateProjectionMatrix()}const ue={sub:(s,t)=>({re:s.re-t.re,im:s.im-t.im}),abs:s=>Math.sqrt(s.re*s.re+s.im*s.im),polar:(s,t)=>({re:s*Math.cos(t),im:s*Math.sin(t)})};function Qo(s){const t=s.re.toFixed(2),e=Math.abs(s.im).toFixed(2),n=s.im<0?"-":"+";return`${t}${n}${e}j`}function tl(s){let t=[{re:1,im:0}];for(const e of s){const n=Array(t.length+1).fill(null).map(()=>({re:0,im:0}));for(let i=0;i<t.length;i++)n[i].re+=t[i].re,n[i].im+=t[i].im,n[i+1].re-=t[i].re*e.re-t[i].im*e.im,n[i+1].im-=t[i].re*e.im+t[i].im*e.re;t=n}return t}const Im=44100;class Nm{constructor(t){x(this,"container");x(this,"animId",null);x(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),modeSelector:Mt("modeSelector",!0),waveform:Mt("waveform",!0),zPlane:Mt("zPlane",!0),surface3d:Mt("surface3d",!0),response:Mt("response",!0),spectrum:Mt("spectrum",!0)});x(this,"poles",[]);x(this,"zeros",[]);x(this,"dragging",null);x(this,"planeCanvas");x(this,"leftPlanePanel");x(this,"planeSize",400);x(this,"planeHeight",240);x(this,"surfaceCanvas");x(this,"responseCanvas");x(this,"spectrumCanvas");x(this,"threeRenderer",null);x(this,"threeScene",null);x(this,"threeCamera",null);x(this,"threeControls",null);x(this,"surfaceMesh",null);x(this,"unitCircleLine",null);x(this,"freqRibbon",null);x(this,"spectrumBars3D",null);x(this,"spectrumBars3DCount",96);x(this,"threeN",64);x(this,"threeRange",1.8);x(this,"useThreeJS",!1);x(this,"rotAngle2D",0);x(this,"sharedAudio",on.getInstance());x(this,"audioCtx",null);x(this,"originalBuffer",null);x(this,"sourceNode",null);x(this,"dspNode",null);x(this,"compressorNode",null);x(this,"gainNode",null);x(this,"analyserNode",null);x(this,"filterUpdateTimer",null);x(this,"playbackGain",.85);x(this,"maxNormBoost",12);x(this,"lastNormScale",1);x(this,"lastResponsePeak",1);x(this,"lastResponseRms",1);x(this,"outputMakeupGain",1);x(this,"timeDomainScratch",null);x(this,"isPlaying",!1);x(this,"isPaused",!1);x(this,"loop",!1);x(this,"playMode","filtered");x(this,"playbackStartedAt",0);x(this,"pausedAt",0);x(this,"sampleRate",44100);x(this,"origSpectrumStatic",null);x(this,"analyserData",null);x(this,"transportBar");x(this,"statusEl");x(this,"filterInfoEl");x(this,"waveformTimeline");x(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.loadDefaults(),this.buildUI(),this.tryInitThreeJS(),this.startAnimation(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.loadDefaultAudioClip()}async ensureAudioContext(){return this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext(Im)),this.audioCtx}async loadDefaultAudioClip(){var e,n;const t=Yn("audio");if(t){this.statusEl.textContent="Loading…";try{await this.ensureAudioContext();const a=await(await fetch(Li(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(a),this.sampleRate=this.originalBuffer.sampleRate;const r=this.originalBuffer.getChannelData(0),o=4096,l=Math.floor(r.length/2);this.origSpectrumStatic=this.computeFFT(r.slice(l,l+o),o),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0;const c=t.split("/").pop()??t;this.statusEl.textContent=`${c} · ${this.originalBuffer.duration.toFixed(1)}s · ${(this.sampleRate/1e3).toFixed(1)} kHz`}catch{this.statusEl.textContent="Load error"}}}loadDefaults(){this.zeros=[ue.polar(1,Math.PI/2),ue.polar(1,-Math.PI/2)],this.poles=[ue.polar(.8,Math.PI/2),ue.polar(.8,-Math.PI/2)]}computeMag(t){let e=1,n=1;for(const i of this.zeros)e*=ue.abs(ue.sub(t,i));for(const i of this.poles)n*=ue.abs(ue.sub(t,i));return n<1e-12?1/0:!this.zeros.length&&!this.poles.length?1:e/n}computePhase(t){let e=0;for(const n of this.zeros){const i=ue.sub(t,n);e+=Math.atan2(i.im,i.re)}for(const n of this.poles){const i=ue.sub(t,n);e-=Math.atan2(i.im,i.re)}return e}getCoeffs(){const t=tl(this.zeros).map(n=>n.re),e=tl(this.poles).map(n=>n.re);return t.length||t.push(1),e.length||e.push(1),{b:t,a:e}}tryInitThreeJS(){try{const t=Vl(this.surfaceCanvas,{camera:[2.8,3.2,4.4],target:[0,.45,0]});this.threeRenderer=t.renderer,this.threeScene=t.scene,this.threeCamera=t.camera,this.threeControls=t.controls;const e=new Hl(3.8,20,1915474,1915474);this.threeScene.add(e);const n=this.threeRange,i=(r,o,l=1)=>new js(new le().setFromPoints(r),new Xn({color:o,transparent:l<1,opacity:l}));this.threeScene.add(i([new N(-n-.15,0,0),new N(n+.15,0,0)],16027558,.85)),this.threeScene.add(i([new N(0,0,-n-.15),new N(0,0,n+.15)],12975988,.85)),this.threeScene.add(i([new N(0,0,0),new N(0,1.5,0)],16777215,.55));const a=new Ee(new kr(1,.022,8,128),new qn({color:4898733}));a.rotation.x=Math.PI/2,this.threeScene.add(a),this.createThreeSurface(),this.unitCircleLine=this.createUnitCircleLine(),this.threeScene.add(this.unitCircleLine),this.createFreqRibbon(),this.createSpectrumBars3D(),this.useThreeJS=!0}catch(t){console.warn("Three.js init failed, using Canvas2D fallback:",t),this.useThreeJS=!1}}createThreeSurface(){if(!this.threeScene)return;const t=this.threeN,e=this.threeRange,n=(t+1)*(t+1),i=new Float32Array(n*3),a=new Float32Array(n*3),r=[];for(let c=0;c<=t;c++)for(let h=0;h<=t;h++){const u=c*(t+1)+h;i[u*3]=-e+2*e*c/t,i[u*3+1]=0,i[u*3+2]=-e+2*e*h/t,a[u*3+2]=.15}for(let c=0;c<t;c++)for(let h=0;h<t;h++){const u=c*(t+1)+h,d=u+1,m=(c+1)*(t+1)+h,g=m+1;r.push(u,d,g,u,g,m)}const o=new le;o.setAttribute("position",new ne(i,3)),o.setAttribute("color",new ne(a,3)),o.setIndex(r);const l=new qn({vertexColors:!0,side:ln,transparent:!0,opacity:.82,depthWrite:!1});this.surfaceMesh=new Ee(o,l),this.threeScene.add(this.surfaceMesh)}createUnitCircleLine(){const e=new le;return e.setAttribute("position",new ne(new Float32Array(301*3),3)),new js(e,new Xn({color:16777215,linewidth:2}))}createFreqRibbon(){if(!this.threeScene)return;const t=300,e=new Float32Array((t+1)*2*3),n=new Float32Array((t+1)*2*3),i=[];for(let r=0;r<=t;r++){const o=2*Math.PI*r/t,l=Math.cos(o),c=Math.sin(o);if(e[r*2*3]=l,e[r*2*3+2]=c,e[r*2*3+1]=.01,e[(r*2+1)*3]=l,e[(r*2+1)*3+2]=c,e[(r*2+1)*3+1]=.01,r<t){const h=r*2,u=r*2+1,d=(r+1)*2,m=(r+1)*2+1;i.push(h,u,m,h,m,d)}}const a=new le;a.setAttribute("position",new ne(e,3)),a.setAttribute("color",new ne(n,3)),a.setIndex(i),this.freqRibbon=new Ee(a,new qn({vertexColors:!0,side:Oe,transparent:!0,opacity:.3,depthWrite:!1})),this.threeScene.add(this.freqRibbon),this.updateThreeSurface()}createSpectrumBars3D(){if(!this.threeScene)return;const t=this.spectrumBars3DCount,e=new Float32Array(t*4*3),n=new Float32Array(t*4*3),i=[],a=1.35,r=.038;for(let l=0;l<t;l++){const c=2*Math.PI*l/t,h=Math.cos(c),u=Math.sin(c),d=-Math.sin(c)*r,m=Math.cos(c)*r,g=l*4;e[(g+0)*3]=h*a-d,e[(g+0)*3+1]=.005,e[(g+0)*3+2]=u*a-m,e[(g+1)*3]=h*a+d,e[(g+1)*3+1]=.005,e[(g+1)*3+2]=u*a+m,e[(g+2)*3]=h*a-d,e[(g+2)*3+1]=.005,e[(g+2)*3+2]=u*a-m,e[(g+3)*3]=h*a+d,e[(g+3)*3+1]=.005,e[(g+3)*3+2]=u*a+m,i.push(g,g+1,g+3,g,g+3,g+2)}const o=new le;o.setAttribute("position",new ne(e,3)),o.setAttribute("color",new ne(n,3)),o.setIndex(i),this.spectrumBars3D=new Ee(o,new qn({vertexColors:!0,side:Oe,transparent:!0,opacity:.85,depthWrite:!1})),this.threeScene.add(this.spectrumBars3D)}updateSpectrumBars3D(){if(!this.spectrumBars3D||!this.analyserNode||!this.analyserData)return;this.analyserNode.getFloatFrequencyData(this.analyserData);const t=this.spectrumBars3DCount,e=1.35,n=.038,i=.9,a=-80,r=80,o=this.analyserData.length,l=this.spectrumBars3D.geometry.attributes.position,c=this.spectrumBars3D.geometry.attributes.color;for(let h=0;h<t;h++){const u=2*Math.PI*h/t,d=Math.cos(u),m=Math.sin(u),g=-Math.sin(u)*n,_=Math.cos(u)*n,p=h/t,f=Math.log10(1+p*9)/Math.log10(10),y=Math.max(1,Math.min(o-1,Math.floor(f*o))),v=this.analyserData[y],M=Math.max(0,Math.min(1,(v-a)/r)),A=M*i,[T,P,F]=Xi(M*.85+.1),w=T/255,b=P/255,L=F/255,V=h*4;l.setXYZ(V,d*e-g,.005,m*e-_),c.setXYZ(V,w*.3,b*.3,L*.3),l.setXYZ(V+1,d*e+g,.005,m*e+_),c.setXYZ(V+1,w*.3,b*.3,L*.3),l.setXYZ(V+2,d*e-g,A,m*e-_),c.setXYZ(V+2,w,b,L),l.setXYZ(V+3,d*e+g,A,m*e+_),c.setXYZ(V+3,w,b,L)}l.needsUpdate=!0,c.needsUpdate=!0}updateThreeSurface(){if(!this.surfaceMesh)return;const t=this.threeN,e=this.threeRange,n=3.8,i=.7,a=l=>Math.atan((isFinite(l)?l:100)/2)/(Math.PI/2)*n*i,r=this.surfaceMesh.geometry.attributes.position,o=this.surfaceMesh.geometry.attributes.color;for(let l=0;l<=t;l++)for(let c=0;c<=t;c++){const h=l*(t+1)+c,u=-e+2*e*l/t,d=-e+2*e*c/t,m=a(this.computeMag({re:u,im:d}));r.setY(h,m);const[g,_,p]=Xi(m/(n*i));o.setXYZ(h,g/255,_/255,p/255)}if(r.needsUpdate=!0,o.needsUpdate=!0,this.surfaceMesh.geometry.computeVertexNormals(),this.unitCircleLine){const c=this.unitCircleLine.geometry.attributes.position;for(let h=0;h<=300;h++){const u=2*Math.PI*h/300,d=a(this.computeMag({re:Math.cos(u),im:Math.sin(u)}));c.setXYZ(h,Math.cos(u),d+.03,Math.sin(u))}c.needsUpdate=!0}if(this.freqRibbon){const c=this.freqRibbon.geometry.attributes.position,h=this.freqRibbon.geometry.attributes.color;for(let u=0;u<=300;u++){const d=2*Math.PI*u/300,m=Math.cos(d),g=Math.sin(d),_=a(this.computeMag({re:m,im:g})),[p,f,y]=Xi(_/(n*i));c.setXYZ(u*2,m,.01,g),h.setXYZ(u*2,p/255,f/255,y/255),c.setXYZ(u*2+1,m,_+.02,g),h.setXYZ(u*2+1,p/255,f/255,y/255)}c.needsUpdate=!0,h.needsUpdate=!0}}buildUI(){var l;if(document.body.classList.add("page-scroll"),this.ui.transport){if(this.transportBar=new Zn({onPlay:()=>this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:c=>this.handleUpload(c),uploadLabel:"Upload Audio",showUpload:this.ui.upload,onLoopToggle:c=>{if(this.isPlaying&&this.audioCtx){const h=this.currentPlaybackTime();this.pausedAt=h,this.playbackStartedAt=this.audioCtx.currentTime-h}this.loop=c,this.sourceNode&&(this.sourceNode.loop=c)}}),this.ui.modeSelector){const c=ji({className:"transport-mode-inline",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"filtered",label:"Filtered"}],onChange:h=>{this.playMode=h,this.isPlaying&&(this.stopAudio(!1),this.startPlayback(h))}});this.transportBar.getElement().querySelector(".transport-left").appendChild(c)}this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.dataset.tooltip="Playback status and source file",this.statusEl.textContent="Load audio",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusEl),this.filterInfoEl=document.createElement("span"),this.filterInfoEl.className="pz-filter-info",this.filterInfoEl.dataset.tooltip="Filter order, pole/zero counts and stability",(l=this.transportBar.getElement().querySelector(".transport-right"))==null||l.prepend(this.filterInfoEl),this.container.appendChild(this.transportBar.getElement())}else this.statusEl=document.createElement("span"),this.statusEl.className="transport-status hidden",this.filterInfoEl=document.createElement("span"),this.filterInfoEl.className="hidden",this.container.append(this.statusEl,this.filterInfoEl);this.ui.waveform&&(this.waveformTimeline=new Di({width:900,height:48,title:"Waveform"},c=>this.handlePlayheadSeek(c)),this.waveformTimeline.getElement().classList.add("timeline-panel--spaced"),this.container.appendChild(this.waveformTimeline.getElement()));const t=document.createElement("div");t.className="pz-top-row";const e=bn("Z-plane","pz-plane-panel");this.ui.zPlane||e.classList.add("hidden"),this.leftPlanePanel=e,this.planeCanvas=Mi(e,400,240),this.setupPlaneInteraction(),t.appendChild(e);const n=bn("|H(z)|","pz-surface-panel");this.ui.surface3d||n.classList.add("hidden"),this.surfaceCanvas=ll(n,480,240),t.appendChild(n),(this.ui.zPlane||this.ui.surface3d)&&this.container.appendChild(t);const i=document.createElement("div");i.className="pz-response-row";const a=bn("Spectrum");this.spectrumCanvas=Mi(a,560,140),this.ui.spectrum||a.classList.add("hidden"),i.appendChild(a);const r=bn("Phase");this.responseCanvas=Mi(r,560,140),this.ui.response||r.classList.add("hidden"),i.appendChild(r),this.container.appendChild(i);const o=this.computeNormalizationScale();this.lastNormScale=o.scale,this.lastResponsePeak=o.peakMag,this.lastResponseRms=o.rmsMag,this.updateFilterInfo()}resizeLayout(){var o;const t=Math.max(640,this.container.clientWidth-2),e=Math.max(260,Math.floor(t*.42)),n=Math.max(300,t-e-6),i=Math.min(260,Math.max(220,Math.floor(e*.58))),a=Math.floor((t-8)/2),r=140;this.planeSize=e,this.planeHeight=i,En(this.planeCanvas,e,i,120,80),cl(this.surfaceCanvas,n,i,120,80),En(this.responseCanvas,a,r,120,80),En(this.spectrumCanvas,a,r,120,80),(o=this.waveformTimeline)==null||o.resize(t,48),this.threeRenderer&&this.threeCamera&&Wl(this.threeRenderer,this.threeCamera,this.surfaceCanvas)}setupPlaneInteraction(){const t=this.planeCanvas,e=(l,c)=>Math.max(40,Math.min(l,c)/2-24),n=l=>{const c=t.getBoundingClientRect(),h=c.width>0?(l.clientX-c.left)/c.width:.5,u=c.height>0?(l.clientY-c.top)/c.height:.5,d=this.planeSize,m=this.planeHeight,g=h*d,_=u*m,p=e(d,m);return{re:(g-d/2)/p,im:-(_-m/2)/p}},i=(l,c,h=.13)=>{let u=-1,d=h;return c.forEach((m,g)=>{const _=ue.abs(ue.sub(m,l));_<d&&(d=_,u=g)}),u},a=(l,c)=>{const h=l[c];return l.filter((u,d)=>d!==c&&!(Math.abs(u.re-h.re)<.02&&Math.abs(Math.abs(u.im)-Math.abs(h.im))<.02))};t.oncontextmenu=l=>l.preventDefault(),t.onmousedown=l=>{l.preventDefault();const c=n(l),h=i(c,this.poles),u=i(c,this.zeros);if(h>=0){const d=this.poles[h],m=this.poles.findIndex((g,_)=>_!==h&&Math.abs(g.re-d.re)<.03&&Math.abs(g.im+d.im)<.03);this.dragging={type:"pole",idx:h,conjIdx:m,origIm:d.im};return}if(u>=0){const d=this.zeros[u],m=this.zeros.findIndex((g,_)=>_!==u&&Math.abs(g.re-d.re)<.03&&Math.abs(g.im+d.im)<.03);this.dragging={type:"zero",idx:u,conjIdx:m,origIm:d.im};return}l.button===2?(this.poles.push({re:c.re,im:c.im}),Math.abs(c.im)>.04&&this.poles.push({re:c.re,im:-c.im})):(this.zeros.push({re:c.re,im:c.im}),Math.abs(c.im)>.04&&this.zeros.push({re:c.re,im:-c.im})),this.onFilterChanged(!1)},t.ondblclick=l=>{const c=n(l),h=.16,u=this.poles.findIndex(m=>ue.abs(ue.sub(m,c))<h);if(u>=0){this.poles=a(this.poles,u),this.onFilterChanged(!1);return}const d=this.zeros.findIndex(m=>ue.abs(ue.sub(m,c))<h);d>=0&&(this.zeros=a(this.zeros,d),this.onFilterChanged(!1))};const r=.06,o=l=>{const c=ue.abs(l);return c>1e-6&&Math.abs(c-1)<r?{re:l.re/c,im:l.im/c}:l};t.onmousemove=l=>{if(!this.dragging)return;const c=n(l),{type:h,idx:u,conjIdx:d}=this.dragging,m=h==="pole"?this.poles:this.zeros;if(d>=0&&d<m.length){const _=o({re:c.re,im:c.im});m[u]=_,m[d]={re:_.re,im:-_.im}}else m[u]=o({re:c.re,im:c.im});this.onFilterChanged(!0)},t.onmouseup=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null},t.onmouseleave=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null}}onFilterChanged(t=!1){this.useThreeJS&&this.updateThreeSurface(),this.updateFilterInfo(),t&&this.isPlaying?this.scheduleLiveFilterUpdate():this.flushLiveFilterUpdate()}scheduleLiveFilterUpdate(){if(!this.dspNode){this.updateLiveFilter();return}this.filterUpdateTimer&&clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=setTimeout(()=>{this.filterUpdateTimer=null,this.updateLiveFilter()},150)}flushLiveFilterUpdate(){this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.updateLiveFilter()}updateFilterInfo(){const t=this.poles.every(i=>ue.abs(i)<1),e=this.computeMag({re:1,im:0}),n=Math.max(this.poles.length,this.zeros.length);this.filterInfoEl.textContent=`P${this.poles.length} Z${this.zeros.length} ord${n} · ${t?"stable":"unstable"} · DC ${isFinite(e)?e.toFixed(2):"∞"}`,this.filterInfoEl.classList.toggle("pz-filter-info--unstable",!t)}measureFilterResponse(){const t=new Set,e=768;for(let l=0;l<e;l++)t.add(Math.PI*l/(e-1));for(const l of[...this.poles,...this.zeros]){if(Math.abs(l.im)<1e-7){t.add(0),t.add(Math.PI);continue}let c=Math.atan2(l.im,l.re);c<0&&(c+=2*Math.PI),c>Math.PI&&(c=2*Math.PI-c),t.add(c);for(const h of[-.03,-.01,.01,.03])t.add(Math.max(0,Math.min(Math.PI,c+h)))}let n=1e-9,i=0,a=0;for(const l of t){const c=this.computeMag({re:Math.cos(l),im:Math.sin(l)});!isFinite(c)||c<=0||(n=Math.max(n,c),i+=c*c,a++)}const r=a>0?Math.sqrt(i/a):1e-9,o=Math.max(n,r,1e-9);return{peakScale:Math.min(this.maxNormBoost,1/o),peakMag:n,rmsMag:r}}computeNormalizationScale(){const{peakScale:t,peakMag:e,rmsMag:n}=this.measureFilterResponse();let i=1;const a=this.origSpectrumStatic;if(a&&a.length>=8){const r=a.length;let o=0,l=0;for(let c=0;c<r;c++){const h=r>1?Math.PI*c/(r-1):0,u=this.computeMag({re:Math.cos(h),im:Math.sin(h)});if(!isFinite(u)||u<=0)continue;const d=u*t,m=a[c]*a[c];o+=m,l+=m*d*d}l>1e-20&&o>1e-20?i=Math.sqrt(o/l):o>1e-20&&(i=this.maxNormBoost),i=Math.min(this.maxNormBoost,Math.max(1,i))}return{scale:Math.min(this.maxNormBoost*1.5,t*i),peakMag:e,rmsMag:n}}updateOutputMakeup(){if(!this.isPlaying||this.playMode!=="filtered"||!this.analyserNode||!this.gainNode||!this.timeDomainScratch||!this.audioCtx)return;this.analyserNode.getFloatTimeDomainData(this.timeDomainScratch);let t=0;for(let n=0;n<this.timeDomainScratch.length;n++){const i=this.timeDomainScratch[n];t+=i*i}const e=Math.sqrt(t/this.timeDomainScratch.length);if(e<.05){const n=Math.min(16,.14/Math.max(e,1e-5));this.outputMakeupGain=this.outputMakeupGain*.88+n*.01}else this.outputMakeupGain=this.outputMakeupGain*.94+1*.06;this.outputMakeupGain=Math.min(16,Math.max(.5,this.outputMakeupGain)),this.gainNode.gain.setTargetAtTime(this.playbackGain*this.outputMakeupGain,this.audioCtx.currentTime,.15)}updateLiveFilter(){var r;const{b:t,a:e}=this.getCoeffs(),{scale:n,peakMag:i,rmsMag:a}=this.computeNormalizationScale();this.lastNormScale=n,this.lastResponsePeak=i,this.lastResponseRms=a,(r=this.dspNode)==null||r.port.postMessage({type:"setIIR",b:t.map(o=>o*n),a:e})}async handleUpload(t){var e,n;this.statusEl.textContent="Decoding…";try{await this.ensureAudioContext(),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate;const i=this.originalBuffer.getChannelData(0),a=4096,r=Math.floor(i.length/2);this.origSpectrumStatic=this.computeFFT(i.slice(r,r+a),a),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusEl.textContent=`${t.name} · ${this.originalBuffer.duration.toFixed(1)}s · ${(this.sampleRate/1e3).toFixed(1)} kHz`}catch{this.statusEl.textContent="Load error"}}computeFFT(t,e){const n=new Float64Array(e),i=new Float64Array(e);for(let r=0;r<e&&r<t.length;r++){const o=.5*(1-Math.cos(2*Math.PI*r/(e-1)));n[r]=t[r]*o}Ji(n,i);const a=new Float32Array(e/2);for(let r=0;r<e/2;r++)a[r]=Math.sqrt(n[r]*n[r]+i[r]*i[r])/e;return a}async startPlayback(t){var e;if(this.stopAudio(!1),!this.originalBuffer){this.statusEl.textContent="Load audio first";return}this.audioCtx&&(this.playMode=t,this.updateLiveFilter(),this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserNode.smoothingTimeConstant=.72,this.analyserData=new Float32Array(this.analyserNode.frequencyBinCount),this.timeDomainScratch=new Float32Array(this.analyserNode.fftSize),this.outputMakeupGain=1,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=t==="original"?.85:1,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=this.loop,t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[Math.min(this.originalBuffer.numberOfChannels,2)]}),this.dspNode.port.postMessage({type:"setMode",mode:"iir"}),this.compressorNode=this.audioCtx.createDynamicsCompressor(),this.compressorNode.threshold.value=-3,this.compressorNode.knee.value=6,this.compressorNode.ratio.value=2,this.compressorNode.attack.value=.003,this.compressorNode.release.value=.08,this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.compressorNode),this.compressorNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.gain.value=this.playbackGain,this.gainNode.connect(this.audioCtx.destination),this.updateLiveFilter()),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.originalBuffer||!this.audioCtx||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.originalBuffer.duration-.03&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(e=this.transportBar)==null||e.setPlaying(!0),this.statusEl.textContent=t==="filtered"?"Playing filtered":"Playing original")}currentPlaybackTime(){if(!this.audioCtx||!this.originalBuffer)return this.pausedAt;const t=this.originalBuffer.duration,e=this.audioCtx.currentTime-this.playbackStartedAt;return this.loop&&t>0?e%t:Math.min(e,t)}pauseAudio(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.currentPlaybackTime(),this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusEl.textContent="Paused",(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,n;this._teardownNodes(),this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt),this.originalBuffer&&(this.statusEl.textContent="Stopped")}_teardownNodes(){var t,e,n,i,a,r;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.dspNode)==null||n.disconnect(),(i=this.compressorNode)==null||i.disconnect(),(a=this.gainNode)==null||a.disconnect(),(r=this.analyserNode)==null||r.disconnect(),this.sourceNode=null,this.dspNode=null,this.compressorNode=null,this.gainNode=null,this.analyserNode=null,this.timeDomainScratch=null,this.outputMakeupGain=1}handlePlayheadSeek(t){var e;!this.originalBuffer||!this.audioCtx||(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}drawPointLabel(t,e,n,i,a,r,o,l){const h=t.measureText(i).width+4,u=11,d=9,m=6,g=2,_=e+d,p=e-d-h;let f=_+h>r-g&&p>=g?p:_;f=Math.max(g,Math.min(f,r-h-g));const y=n+m,v=n-m-u;let M;l?M=y+u>o-g&&v>=g?v:y:M=v<g&&y+u<=o-g?y:v,M=Math.max(g,Math.min(M,o-u-g)),t.textAlign="left",t.fillStyle="rgba(0,0,0,0.55)",t.fillRect(f,M,h,u),t.fillStyle=a,t.fillText(i,f+2,M+9)}drawZPlane(){const e=this.planeCanvas.getContext("2d"),n=this.planeSize,i=this.planeHeight,a=n/2,r=i/2,o=Math.max(40,Math.min(n,i)/2-24);e.fillStyle="#0a1726",e.fillRect(0,0,n,i),e.strokeStyle="rgba(255,255,255,0.03)",e.lineWidth=1;for(let l=-1.5;l<=1.5;l+=.5)e.beginPath(),e.moveTo(a+l*o,0),e.lineTo(a+l*o,i),e.stroke(),e.beginPath(),e.moveTo(0,r-l*o),e.lineTo(n,r-l*o),e.stroke();e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1,e.beginPath(),e.moveTo(0,r),e.lineTo(n,r),e.stroke(),e.beginPath(),e.moveTo(a,0),e.lineTo(a,i),e.stroke(),e.beginPath(),e.arc(a,r,o,0,2*Math.PI),e.fillStyle="rgba(74,191,173,0.03)",e.fill();for(let l=0;l<2;l++)e.beginPath(),e.arc(a,r,o,0,2*Math.PI),e.strokeStyle=l===0?"rgba(74,191,173,0.08)":"rgba(74,191,173,0.55)",e.lineWidth=l===0?10:1.5,e.stroke();e.font="11.5px JetBrains Mono",e.fillStyle="rgba(255,255,255,0.16)",e.textAlign="center",e.fillText("DC",a+o+20,r+4),e.fillText("π",a-o-15,r+4),e.fillText("π/2",a+3,r-o-8),e.textAlign="left",e.fillText("Re",n-14,r-4),e.textAlign="right",e.fillText("Im",a-4,10),e.font="700 12.5px 'JetBrains Mono', monospace",this.zeros.forEach(l=>{const c=a+l.re*o,h=r-l.im*o;e.beginPath(),e.arc(c,h,7.5,0,2*Math.PI),e.strokeStyle="#4abfad",e.lineWidth=2.5,e.shadowColor="rgba(74,191,173,0.7)",e.shadowBlur=10,e.stroke(),e.shadowBlur=0,this.drawPointLabel(e,c,h,Qo(l),"#4abfad",n,i,!1)}),this.poles.forEach(l=>{const c=a+l.re*o,h=r-l.im*o;ue.abs(l)>=1&&(e.beginPath(),e.arc(c,h,14,0,2*Math.PI),e.strokeStyle="rgba(235,0,140,0.4)",e.lineWidth=2,e.stroke());const u=8;e.strokeStyle="#f48fa6",e.lineWidth=2.5,e.shadowColor="rgba(244,143,166,0.7)",e.shadowBlur=10,e.beginPath(),e.moveTo(c-u,h-u),e.lineTo(c+u,h+u),e.moveTo(c+u,h-u),e.lineTo(c-u,h+u),e.stroke(),e.shadowBlur=0,this.drawPointLabel(e,c,h,Qo(l),"#f48fa6",n,i,!0)})}computeUnwrappedPhase(t){const e=new Float32Array(t),n=new Array(t).fill(!1);let i=this.computePhase({re:1,im:0});e[0]=i;for(let a=1;a<t;a++){const r=Math.PI*a/(t-1);let o=this.computePhase({re:Math.cos(r),im:Math.sin(r)}),l=0;for(;o-i>Math.PI;)o-=2*Math.PI,l++;for(;o-i<-Math.PI;)o+=2*Math.PI,l++;l>1&&(n[a]=!0),e[a]=o,i=o}return{phase:e,breaks:n}}drawResponse(){const t=this.responseCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,a=t.getContext("2d");let r=1;for(const v of[...this.poles,...this.zeros]){const M=Math.hypot(v.re,v.im);r=Math.min(r,Math.abs(1-M))}const o=Math.min(4e3,Math.max(800,Math.round(24/Math.max(r,.006)))),l={l:48,r:14,t:22,b:24},c=n-l.l-l.r,h=i-l.t-l.b;a.fillStyle="#0a1726",a.fillRect(0,0,n,i);const{phase:u,breaks:d}=this.computeUnwrappedPhase(o);let m=u[0],g=u[0];for(let v=1;v<o;v++)m=Math.min(m,u[v]),g=Math.max(g,u[v]);const p=Math.max(g-m,.25)*.1;m-=p,g+=p;const f=v=>l.t+h-(v-m)/(g-m)*h;a.strokeStyle="rgba(255,255,255,0.04)",a.lineWidth=1;for(let v=0;v<=4;v++){const M=l.t+h-v/4*h;a.beginPath(),a.moveTo(l.l,M),a.lineTo(l.l+c,M),a.stroke();const A=m+v/4*(g-m);a.fillStyle="rgba(255,255,255,0.18)",a.font="11px JetBrains Mono",a.textAlign="right",a.fillText(`${A.toFixed(2)}`,l.l-4,M+3)}a.beginPath();let y=!1;for(let v=0;v<o;v++){const M=l.l+v/(o-1)*c,A=f(u[v]);!y||d[v]?(a.moveTo(M,A),y=!0):a.lineTo(M,A)}a.strokeStyle="rgba(255,255,255,0.9)",a.lineWidth=2,a.stroke(),a.textAlign="center",a.fillStyle="rgba(255,255,255,0.18)",a.font="11px JetBrains Mono",["DC (0)","π/4","π/2","3π/4","Nyquist (π)"].forEach((v,M)=>a.fillText(v,l.l+M/4*c,i-6))}drawSpectrum(){const t=this.spectrumCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,a=t.getContext("2d"),r={l:44,r:14,t:22,b:18},o=n-r.l-r.r,l=i-r.t-r.b;a.fillStyle="#0a1726",a.fillRect(0,0,n,i),!!(this.origSpectrumStatic||this.analyserNode)||(a.fillStyle="rgba(255,255,255,0.07)",a.font="13px JetBrains Mono",a.textAlign="center",a.fillText("Load audio",n/2,i/2+4));const h=512,u=new Float32Array(h);for(let M=0;M<h;M++){const A=Math.PI*M/(h-1),T=this.computeMag({re:Math.cos(A),im:Math.sin(A)});u[M]=isFinite(T)?T*this.lastNormScale:0}const d=-90,m=M=>M>0?20*Math.log10(M):d;let g=0;for(let M=0;M<h;M++)g=Math.max(g,m(u[M]));if(this.origSpectrumStatic)for(let M=0;M<this.origSpectrumStatic.length;M++)g=Math.max(g,m(this.origSpectrumStatic[M]));g=Math.ceil((g+3)/6)*6;const _=g-d,p=M=>r.t+l-(Math.max(d,M)-d)/_*l;a.strokeStyle="rgba(255,255,255,0.04)",a.lineWidth=1;for(let M=0;M<=4;M++){const A=r.t+l-M/4*l;a.beginPath(),a.moveTo(r.l,A),a.lineTo(r.l+o,A),a.stroke(),a.fillStyle="rgba(255,255,255,0.18)",a.font="11px JetBrains Mono",a.textAlign="right";const T=d+M/4*_;a.fillText(`${T.toFixed(0)}dB`,r.l-4,A+3)}const f=(M,A,T,P,F)=>{a.beginPath(),a.moveTo(r.l,r.t+l);for(let w=1;w<A;w++){const b=T?M[w]:m(M[w]),L=r.l+w/A*o,V=p(b);a.lineTo(L,V)}a.lineTo(r.l+o,r.t+l),a.closePath(),a.fillStyle=`rgba(${P},${F})`,a.fill()};this.origSpectrumStatic&&f(this.origSpectrumStatic,this.origSpectrumStatic.length,!1,"200,200,200",.22),this.analyserNode&&this.analyserData&&(this.analyserNode.getFloatFrequencyData(this.analyserData),f(this.analyserData,this.analyserData.length,!0,"82,207,254",.65)),a.beginPath();let y=!1;for(let M=1;M<h;M++){const A=r.l+M/(h-1)*o,T=p(m(u[M]));y?a.lineTo(A,T):(a.moveTo(A,T),y=!0)}a.strokeStyle="rgba(255,251,194,0.9)",a.lineWidth=1.5,a.shadowColor="rgba(255,230,191,0.6)",a.shadowBlur=6,a.stroke(),a.shadowBlur=0,a.fillStyle="rgba(255,255,255,0.18)",a.font="11px JetBrains Mono",a.textAlign="center";const v=this.sampleRate/2;[0,.25,.5,.75,1].forEach(M=>{const A=M*v;a.fillText(A>=1e3?`${(A/1e3).toFixed(0)}k`:`${A.toFixed(0)}`,r.l+M*o,i-4)}),this.analyserNode&&(a.fillStyle="rgba(74,191,173,0.8)",a.font="bold 11px JetBrains Mono",a.textAlign="right",a.fillText("Live",n-r.r-2,r.t+22)),a.fillStyle="rgba(255,251,194,0.85)",a.font="bold 11px JetBrains Mono",a.textAlign="right",a.fillText("— |H(ω)| normalized",n-r.r-2,r.t+12)}draw3DFallback(){const t=this.surfaceCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,a=t.getContext("2d");if(!a)return;const r=44,o=1.75,l=this.rotAngle2D,c=.47,h=Math.cos(l),u=Math.sin(l),d=Math.cos(c),m=Math.sin(c),g=220,_=5.2,p=3.8;a.fillStyle="#0a1726",a.fillRect(0,0,n,i);const f=[];for(let M=0;M<=r;M++){f[M]=[];for(let A=0;A<=r;A++){const T=-o+2*o*M/r,P=-o+2*o*A/r,F=this.computeMag({re:T,im:P}),w=Math.atan(isFinite(F)?F/2:50)/(Math.PI/2)*p*.32,b=T*h+P*u,L=-T*u+P*h,V=w*d-L*m,X=w*m+L*d+_;f[M][A]={sx:b/X*g+n/2,sy:-V/X*g+i*.6,depth:X,h:w}}}const y=[];for(let M=0;M<r;M++)for(let A=0;A<r;A++){const T=(f[M][A].depth+f[M+1][A].depth+f[M][A+1].depth+f[M+1][A+1].depth)/4,P=(f[M][A].h+f[M+1][A].h+f[M][A+1].h+f[M+1][A+1].h)/4;y.push({i:M,j:A,d:T,aH:P})}y.sort((M,A)=>A.d-M.d);const v=p*.32;for(const{i:M,j:A,aH:T}of y){a.beginPath(),a.moveTo(f[M][A].sx,f[M][A].sy),a.lineTo(f[M+1][A].sx,f[M+1][A].sy),a.lineTo(f[M+1][A+1].sx,f[M+1][A+1].sy),a.lineTo(f[M][A+1].sx,f[M][A+1].sy),a.closePath();const[P,F,w]=Xi(T/v);a.fillStyle=`rgb(${P},${F},${w})`,a.fill(),a.strokeStyle="rgba(0,0,0,0.2)",a.lineWidth=.3,a.stroke()}}startAnimation(){let t=0;const e=n=>{var a,r;const i=Math.min((n-t)/1e3,.05);t=n,this.rotAngle2D=(this.rotAngle2D+i*.2)%(2*Math.PI),this.useThreeJS&&this.threeRenderer&&this.threeScene&&this.threeCamera?(this.updateSpectrumBars3D(),(a=this.threeControls)==null||a.update(),this.threeRenderer.render(this.threeScene,this.threeCamera)):this.draw3DFallback(),this.isPlaying&&this.audioCtx&&this.originalBuffer&&(this.pausedAt=this.currentPlaybackTime(),(r=this.waveformTimeline)==null||r.setPlayhead(this.pausedAt)),this.updateOutputMakeup(),this.drawZPlane(),this.drawResponse(),this.drawSpectrum(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}destroy(){var t,e;this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),this.audioCtx=null,(t=this.threeControls)==null||t.dispose(),(e=this.threeRenderer)==null||e.dispose(),document.body.classList.remove("page-scroll"),window.removeEventListener("resize",this.onResize)}}const Um=2048,jt={bg:"rgba(10, 23, 38, 0.92)",lane:"rgba(255, 255, 255, 0.025)",grid:"rgba(255, 255, 255, 0.10)",text:"rgba(255, 255, 255, 0.55)",signal:"#4abfad",kernel:"#fffbc2",pos:"#c5ff74",neg:"#f48fa6",out:"#eb008c",marker:"#ffe6bf"},Fm=["#fffbc2","#ffe6bf","#c5ff74","#b8d8ff","#4abfad","#f48fa6","#fffbc2","#ffc2cf"],xn="JetBrains Mono, monospace",Oa=320,Ba=44,el=26,nl=12,il=6;function Ns(s){const t=Math.abs(s);if(t<1e-9)return"0";const e=t>=100?s.toFixed(0):t>=10?s.toFixed(1):s.toFixed(2);return e.includes(".")?e.replace(/\.?0+$/,""):e}class Om{constructor(){x(this,"el",document.createElement("div"));x(this,"overview",document.createElement("canvas"));x(this,"main",document.createElement("canvas"));x(this,"ovCtx");x(this,"ctx");x(this,"width",800);x(this,"x",null);x(this,"h",null);x(this,"y",null);x(this,"sr",44100);x(this,"maxX",1);x(this,"maxH",1);x(this,"maxY",1);x(this,"n",0);x(this,"mode","slide");x(this,"zoom",0);x(this,"vLeft",0);x(this,"vSpan",1);x(this,"tailKey","");x(this,"tail",new Float64Array(0));x(this,"onScrub",null);this.el.className="conv-lab-scope",this.el.dataset.tooltip="Convolution scope — drag to scrub, scroll to zoom",this.overview.className="conv-lab-canvas",this.main.className="conv-lab-canvas",this.main.tabIndex=0,this.overview.dataset.tooltip="Full convolution overview — drag to jump",this.main.dataset.tooltip="Convolution microscope — drag to scrub, scroll to zoom",this.el.append(this.overview,this.main),this.ovCtx=this.overview.getContext("2d",{alpha:!0}),this.ctx=this.main.getContext("2d",{alpha:!0}),this.attachPointer(),this.resize(this.width)}getElement(){return this.el}setScrubHandler(t){this.onScrub=t}setData(t,e,n,i){this.x=t,this.h=e,this.y=n,this.sr=i,this.maxX=Math.max(1e-9,this.peak(t)),this.maxH=Math.max(1e-9,this.peak(e)),this.maxY=Math.max(1e-9,this.peak(n)),this.tailKey="",this.n=0}clearData(){this.x=this.h=this.y=null,this.tailKey="",this.render()}hasData(){return!!(this.x&&this.h&&this.y)}canStamp(){return!!this.h&&this.h.length<=Um}setView(t,e,n){this.n=Math.max(0,Math.floor(t)),this.mode=e,this.zoom=Math.max(0,Math.min(1,n))}resize(t){this.width=Math.max(480,Math.floor(t)),En(this.main,this.width,Oa),En(this.overview,this.width,Ba),this.main.style.width=`${this.width}px`,this.main.style.height=`${Oa}px`,this.overview.style.width=`${this.width}px`,this.overview.style.height=`${Ba}px`,this.render()}render(){this.updateView(),this.drawOverview(),this.drawMain()}peak(t){let e=0;for(let n=0;n<t.length;n++){const i=Math.abs(t[n]);i>e&&(e=i)}return e}fitSpan(){var t;return Math.max(16,Math.round((((t=this.h)==null?void 0:t.length)??0)*1.4))}span(){const t=this.fitSpan(),e=Math.min(t,24);return Math.max(e,Math.round(Math.exp(Math.log(t)+(Math.log(e)-Math.log(t))*this.zoom)))}updateView(){this.vSpan=this.span(),this.vLeft=this.mode==="stamp"?this.n-.2*this.vSpan:this.n-.8*this.vSpan}attachPointer(){let t=!1;const e=r=>{var c;if(!this.y)return;const o=this.overview.getBoundingClientRect(),l=Math.max(0,Math.min(1,(r-o.left)/Math.max(1,o.width)));(c=this.onScrub)==null||c.call(this,Math.round(l*(this.y.length-1)))};this.overview.addEventListener("pointerdown",r=>{t=!0,this.overview.setPointerCapture(r.pointerId),e(r.clientX)}),this.overview.addEventListener("pointermove",r=>{t&&e(r.clientX)});const n=()=>t=!1;this.overview.addEventListener("pointerup",n),this.overview.addEventListener("pointercancel",n);let i=null;this.main.addEventListener("pointerdown",r=>{i={x0:r.clientX,n0:this.n},this.main.setPointerCapture(r.pointerId),this.main.focus()}),this.main.addEventListener("pointermove",r=>{var l;if(!i||!this.y)return;const o=this.width/this.vSpan;(l=this.onScrub)==null||l.call(this,Math.round(i.n0-(r.clientX-i.x0)/o))});const a=()=>i=null;this.main.addEventListener("pointerup",a),this.main.addEventListener("pointercancel",a),this.main.addEventListener("keydown",r=>{var l,c;const o=r.shiftKey?10:1;r.key==="ArrowRight"?((l=this.onScrub)==null||l.call(this,this.n+o),r.preventDefault()):r.key==="ArrowLeft"&&((c=this.onScrub)==null||c.call(this,this.n-o),r.preventDefault())})}series(t,e,n,i,a){const r=this.ctx,o=this.width,l=this.vLeft,c=o/this.vSpan,h=Math.max(Math.ceil(n),Math.floor(l)-1),u=Math.min(Math.floor(i),Math.ceil(l+this.vSpan)+1);if(h>u)return;const d=_=>(_-l+.5)*c,m=_=>t.cy-_*a.amp,g=a.alpha??1;if(r.save(),r.globalAlpha=g,r.strokeStyle=a.color,r.fillStyle=a.color,r.lineWidth=a.lw??1.5,r.lineJoin="round",c>=4){const _=Math.min(c*.55,44);for(let p=h;p<=u;p++){const f=e(p),y=d(p),v=m(f);a.fill?(r.globalAlpha=g*.75,r.fillStyle=f>=0?jt.pos:jt.neg,r.fillRect(y-_/2,Math.min(t.cy,v),_,Math.abs(v-t.cy)),r.globalAlpha=g):(r.beginPath(),r.moveTo(y,t.cy),r.lineTo(y,v),r.stroke(),r.beginPath(),r.arc(y,v,c>=12?4:2.5,0,Math.PI*2),r.fill()),a.labels&&c>=26&&(r.save(),r.globalAlpha=Math.max(g,.6),r.fillStyle=a.fill?"rgba(255,255,255,0.85)":a.color,r.font=`600 14px ${xn}`,r.textAlign="center",r.fillText(Ns(f),y+(a.labelDx??0),f>=0?Math.min(v,t.cy)-8:Math.max(v,t.cy)+16),r.restore())}}else if(c>=.7){const _=new Path2D;for(let p=h;p<=u;p++){const f=d(p),y=m(e(p));p===h?_.moveTo(f,y):_.lineTo(f,y)}if(a.fill){const p=new Path2D;p.moveTo(d(h),t.cy);for(let y=h;y<=u;y++)p.lineTo(d(y),m(e(y)));p.lineTo(d(u),t.cy),p.closePath();const f=t.top-4;r.save(),r.beginPath(),r.rect(0,f,o,t.cy-f),r.clip(),r.globalAlpha=g*.55,r.fillStyle=jt.pos,r.fill(p),r.restore(),r.save(),r.beginPath(),r.rect(0,t.cy,o,t.top+t.h+4-t.cy),r.clip(),r.globalAlpha=g*.55,r.fillStyle=jt.neg,r.fill(p),r.restore()}r.stroke(_)}else{const _=new Path2D,p=Math.max(0,Math.floor(d(h))),f=Math.min(o-1,Math.ceil(d(u)));for(let y=p;y<=f;y++){const v=Math.max(h,Math.ceil(l+y/c-.5));let M=Math.min(u,Math.ceil(l+(y+1)/c-.5)-1);if(M<v&&(M=v),v>u)break;let A=1/0,T=-1/0;for(let P=v;P<=M;P++){const F=e(P);F<A&&(A=F),F>T&&(T=F)}A!==1/0&&(a.fill?(T>0&&(r.fillStyle=jt.pos,r.globalAlpha=g*.7,r.fillRect(y,m(T),1,t.cy-m(T))),A<0&&(r.fillStyle=jt.neg,r.globalAlpha=g*.7,r.fillRect(y,t.cy,1,m(A)-t.cy))):(_.moveTo(y+.5,m(T)),_.lineTo(y+.5,Math.max(m(A),m(T)+1))))}a.fill||r.stroke(_)}r.restore()}drawMain(){const t=this.ctx,e=this.width,n=Oa;t.clearRect(0,0,e,n),t.fillStyle=jt.bg,t.fillRect(0,0,e,n);const i=this.x,a=this.h,r=this.y;if(!i||!a||!r){t.fillStyle=jt.text,t.font=`600 15px ${xn}`,t.textAlign="center",t.fillText("Upload signal and kernel",e/2,n/2);return}const o=Math.min(this.n,r.length-1),l=a.length,c=this.mode==="stamp",h=this.vLeft,u=this.vSpan,d=e/u,m=O=>(O-h+.5)*d,g=(n-il-el-2*nl)/3,_=[0,1,2].map(O=>{const W=il+O*(g+nl);return{top:W,h:g,cy:W+g/2+8,amp:g*.34}}),p=c?["Signal x[k]","Kernel copies","Output y[m]"]:["Signal x[k] + kernel h[n−k]","Products x[k]·h[n−k]","Output y[n]"];_.forEach((O,W)=>{t.fillStyle=jt.lane,t.fillRect(0,O.top,e,O.h),t.strokeStyle=jt.grid,t.lineWidth=1,t.beginPath(),t.moveTo(0,O.cy),t.lineTo(e,O.cy),t.stroke(),t.fillStyle=jt.text,t.font=`600 13px ${xn}`,t.textAlign="left",t.fillText(p[W],8,O.top+13)});const[f,y,v]=_,M=f.amp/this.maxX;if(c){const O=Math.min(o,i.length-1);this.series(f,W=>i[W],0,O,{color:jt.signal,amp:M,labels:!0}),this.series(f,W=>i[W],O+1,i.length-1,{color:jt.signal,amp:M,alpha:.28}),t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.arc(m(O),f.cy-i[O]*M,7,0,Math.PI*2),t.stroke()}else{const O=o-l+1;t.fillStyle="rgba(255, 251, 194, 0.07)",t.fillRect(m(O)-d/2,f.top,l*d,f.h),this.series(f,W=>i[W],0,i.length-1,{color:jt.signal,amp:M,labels:!0,labelDx:-9}),this.series(f,W=>a[o-W],O,o,{color:jt.kernel,amp:f.amp/this.maxH,lw:2,labels:!0,labelDx:9})}const A=y.amp/(this.maxX*this.maxH);if(c){const O=Math.min(o,i.length-1),W=d>=4?1:Math.max(1,Math.ceil(10/d));for(let G=13;G>=0;G--){const st=O-G*W;if(st<0)continue;const rt=i[st];d>=4&&rt===0||this.series(y,dt=>rt*a[dt-st],st,st+l-1,{color:d>=4?Fm[(st%8+8)%8]:jt.kernel,amp:A,alpha:G===0?1:Math.max(.25,.75-G*.05),lw:G===0?2.2:1.2,labels:G===0})}t.textAlign="right",t.font=`700 15px ${xn}`,t.fillStyle=jt.kernel,t.fillText(`copy scaled by x[${O}] = ${Ns(i[O])}`+(W>1?`   (showing every ${W}th sample)`:""),e-8,y.top+14)}else{const O=Math.max(0,o-l+1),W=Math.min(o,i.length-1);this.series(y,rt=>i[rt]*a[o-rt],O,W,{color:"rgba(255,255,255,0.7)",amp:A,fill:!0,lw:1,labels:!0});let G=0,st=0;for(let rt=O;rt<=W;rt++){const dt=i[rt]*a[o-rt];dt>0?G+=dt:st+=dt}t.textAlign="right",t.font=`700 15px ${xn}`,t.fillStyle="#fff",t.fillText(`Σ = ${Ns(G+st)}`,e-8,y.top+14)}const T=v.amp/this.maxY;if(this.series(v,O=>r[O],0,o,{color:jt.out,amp:T,lw:2,labels:!0}),c){const O=Math.min(r.length-1,o+l-1,Math.ceil(h+u));if(O>o){const W=this.getTail(o,O);this.series(v,G=>W[G-o-1],o+1,O,{color:jt.out,amp:T,alpha:.4,lw:1.5,labels:!0})}}const P=m(o),F=v.cy-r[o]*T;t.fillStyle="#fff",t.strokeStyle=jt.out,t.lineWidth=2,t.beginPath(),t.arc(P,F,5.5,0,Math.PI*2),t.fill(),t.stroke(),t.font=`700 15px ${xn}`,t.fillStyle="#fff",t.textAlign=P>e-150?"right":"left",t.fillText(`y[${o}] = ${Ns(r[o])}`,P+(P>e-150?-12:12),Math.max(v.top+30,Math.min(v.top+v.h-8,F-10))),t.save(),t.strokeStyle=jt.marker,t.lineWidth=1.5,t.setLineDash([5,4]),t.globalAlpha=.85,t.beginPath(),t.moveTo(P,f.top),t.lineTo(P,v.top+v.h),t.stroke(),t.restore();const w=n-el+4;t.strokeStyle="rgba(255,255,255,0.2)",t.lineWidth=1,t.beginPath(),t.moveTo(0,w),t.lineTo(e,w),t.stroke();const b=80/d,L=Math.pow(10,Math.floor(Math.log10(b))),V=[1,2,5,10].map(O=>O*L).find(O=>O>=b)??b;t.fillStyle="rgba(255,255,255,0.4)",t.font=`13px ${xn}`,t.textAlign="center";for(let O=Math.ceil(h/V)*V;O<h+u;O+=V){const W=m(O);t.beginPath(),t.moveTo(W,w),t.lineTo(W,w+4),t.stroke(),t.fillText(String(Math.round(O)),W,w+15)}const H=`n = ${o}  ·  ${(o/this.sr*1e3).toFixed(1)} ms`;t.font=`700 13px ${xn}`;const X=t.measureText(H).width+12,$=Math.max(X/2,Math.min(e-X/2,P));t.fillStyle=jt.marker,t.fillRect($-X/2,w+5,X,15),t.fillStyle="#0a1726",t.fillText(H,$,w+16)}getTail(t,e){const n=`${t}:${e}`;if(n===this.tailKey)return this.tail;const i=this.x,a=this.h,r=a.length,o=Math.min(t,i.length-1),l=new Float64Array(e-t);for(let c=t+1;c<=e;c++){let h=0;for(let u=Math.max(0,c-r+1);u<=o;u++)h+=i[u]*a[c-u];l[c-t-1]=h}return this.tailKey=n,this.tail=l,l}envelope(t,e,n,i,a,r,o){if(n<e)return;const l=this.ovCtx,c=this.width,h=new Path2D,u=Math.floor(e/i*c),d=Math.min(c-1,Math.floor(n/i*c));for(let m=u;m<=d;m++){const g=Math.max(e,Math.floor(m/c*i)),_=Math.min(n,Math.max(g,Math.floor((m+1)/c*i)-1));let p=1/0,f=-1/0;for(let y=g;y<=_;y++){const v=t[y];v<p&&(p=v),v>f&&(f=v)}p!==1/0&&(h.moveTo(m+.5,a-f*r),h.lineTo(m+.5,Math.max(a-p*r,a-f*r+1)))}l.strokeStyle=o,l.lineWidth=1,l.stroke(h)}drawOverview(){const t=this.ovCtx,e=this.width,n=Ba;t.clearRect(0,0,e,n),t.fillStyle=jt.bg,t.fillRect(0,0,e,n);const i=this.x,a=this.y;if(!i||!a)return;const r=a.length,o=n/2;t.strokeStyle="rgba(255,255,255,0.08)",t.beginPath(),t.moveTo(0,o),t.lineTo(e,o),t.stroke();const l=Math.min(this.n,r-1);this.envelope(i,0,i.length-1,r,o,n*.4/this.maxX,"rgba(74,191,173,0.35)"),this.envelope(a,l+1,r-1,r,o,n*.4/this.maxY,"rgba(235,0,140,0.2)"),this.envelope(a,0,l,r,o,n*.4/this.maxY,jt.out);const c=Math.max(0,this.vLeft/r*e),h=Math.min(e,(this.vLeft+this.vSpan)/r*e),u=Math.max(4,h-c);t.fillStyle="rgba(255,230,191,0.12)",t.fillRect(c,1,u,n-2),t.strokeStyle=jt.marker,t.lineWidth=1.5,t.strokeRect(c+.5,1.5,u,n-3)}}let ka=null,Bm=0;function km(){if(!ka){const s="/visualization/workers/convolve-worker.js";ka=new Worker(s,{type:"classic"})}return ka}function zm(s,t){return new Promise((e,n)=>{const i=km(),a=++Bm,r=c=>{const h=c.data||{};h.id===a&&(i.removeEventListener("message",r),h.type==="result"?e(new Float32Array(h.result)):n(new Error(h.message||"Convolution worker failed")))};i.addEventListener("message",r);const o=s.slice(),l=t.slice();i.postMessage({type:"convolve",id:a,signal:o,kernel:l},[o.buffer,l.buffer])})}const Hm=4e6;class Gm{constructor(t){x(this,"container");x(this,"sharedAudio",on.getInstance());x(this,"audioContext",null);x(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),signalWaveform:Mt("signalWaveform",!0),kernelWaveform:Mt("kernelWaveform",!0)});x(this,"signalTrack");x(this,"kernelTrack");x(this,"totalSize",480);x(this,"onResize",()=>this.resizeDisplays());x(this,"scope");x(this,"transport");x(this,"statusLabel");x(this,"pos",0);x(this,"lastDrawnN",-1);x(this,"animating",!1);x(this,"rafId",null);x(this,"lastTick",0);x(this,"rawOut",null);x(this,"convolved",null);x(this,"convolvedBuffer",null);x(this,"convSampleRate",44100);x(this,"computeToken",0);x(this,"sourceNode",null);x(this,"gainNode",null);x(this,"loop",!1);x(this,"audioStartCtxTime",0);x(this,"audioStartPos",0);x(this,"tick",t=>{if(!this.animating)return;const e=this.audioContext;let n;if(e&&this.sourceNode)n=this.audioStartPos+(e.currentTime-this.audioStartCtxTime)*this.convSampleRate;else{const a=Math.min(.1,(t-this.lastTick)/1e3);this.lastTick=t,n=this.pos+a*this.convSampleRate}this.pos=n;const i=this.endPos();if(this.pos>=i)if(this.loop)this.pos=0,this.audioStartCtxTime=(e==null?void 0:e.currentTime)??0,this.audioStartPos=0;else{this.pos=i,this.pause(),this.statusLabel.textContent="Done",this.syncScope(!1);return}this.syncScope(!1),this.rafId=requestAnimationFrame(this.tick)});const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext(),await this.loadClipsFromQuery()}async loadClipsFromQuery(){const t=Yn("audio"),e=Yn("kernel");t&&await this.loadTrackFromUrl(this.signalTrack,t),e&&await this.loadTrackFromUrl(this.kernelTrack,e)}computeTotalSize(){return Math.max(480,Math.floor(this.container.clientWidth)-4)}createUI(){this.container.classList.add("convolution-demo"),this.totalSize=this.computeTotalSize();const t=Math.floor((this.totalSize-16)/2);this.ui.transport?(this.transport=new Zn({onPlay:()=>this.play(),onPause:()=>this.pause(),onStop:()=>this.stop(),showUpload:!1,onLoopToggle:i=>{this.loop=i,this.sourceNode&&(this.sourceNode.loop=i)}}),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Load clips",this.transport.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transport.getElement())):(this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status transport-status--standalone",this.statusLabel.textContent="Load clips",this.container.appendChild(this.statusLabel));const e=document.createElement("div");e.className="conv-input-row",this.signalTrack=this.createTrack("Signal",t,i=>this.loadTrack(this.signalTrack,i),this.ui.signalWaveform),this.kernelTrack=this.createTrack("Kernel",t,i=>this.loadTrack(this.kernelTrack,i),this.ui.kernelWaveform),e.append(this.signalTrack.element,this.kernelTrack.element),this.container.appendChild(e);const n=document.createElement("div");n.className="conv-scope-panel",this.scope=new Om,this.scope.setScrubHandler(i=>this.seek(i)),n.appendChild(this.scope.getElement()),this.container.appendChild(n),this.resizeDisplays()}createTrack(t,e,n,i){const a=document.createElement("span");a.className="conv-input-status",a.textContent="No file";const r=document.createElement("div");r.className="conv-input";const o=document.createElement("div");o.className="conv-input-head";const l=document.createElement("span");l.className="conv-input-title",l.textContent=t;const c=this.createUploadButton(n);l.dataset.tooltip=`${t} signal — upload an audio clip to convolve`,a.dataset.tooltip=`${t} file status`,c.dataset.tooltip=`Upload the ${t.toLowerCase()} audio clip`,o.append(l,a,c),r.appendChild(o);const h=i?new Di({width:e,height:60,title:""},()=>{}):void 0;if(h){const u=h.getElement();u.dataset.tooltip=`${t} waveform — drag to seek through the clip`,r.appendChild(u)}return{samples:null,sampleRate:44100,waveform:h,status:a,element:r}}createUploadButton(t){const e=document.createElement("label");e.className="transport-upload",e.dataset.tooltip="Choose an audio file from your computer";const n=document.createElement("input");n.type="file",n.accept="audio/*",n.setAttribute("aria-label","Upload Audio"),n.hidden=!0,n.addEventListener("change",()=>{var o;const r=(o=n.files)==null?void 0:o[0];r&&t(r),n.value=""});const i=document.createElement("span");i.innerHTML='<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V5M6 9l4-4 4 4"/><path d="M3 15h14"/></svg>';const a=document.createElement("span");return a.className="transport-upload-text",a.textContent="Upload Audio",e.append(n,i,a),e}resizeDisplays(){var e,n,i,a,r;this.totalSize=this.computeTotalSize();const t=Math.floor((this.totalSize-16)/2);(n=(e=this.signalTrack)==null?void 0:e.waveform)==null||n.resize(t,60),(a=(i=this.kernelTrack)==null?void 0:i.waveform)==null||a.resize(t,60),(r=this.scope)==null||r.resize(this.totalSize)}async loadTrack(t,e){t.status.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const n=await this.sharedAudio.decodeAudioData(await e.arrayBuffer());this.setTrackBuffer(t,n,e.name)}catch{t.status.textContent="Load error"}}async loadTrackFromUrl(t,e){t.status.textContent="Loading…";try{this.audioContext||(this.audioContext=await this.sharedAudio.getContext());const n=await fetch(Li(e));if(!n.ok)throw new Error(`HTTP ${n.status}`);const i=await this.sharedAudio.decodeAudioData(await n.arrayBuffer());this.setTrackBuffer(t,i,e.split("/").pop()??e)}catch(n){console.warn(`Convolution: could not load "${e}"`,n),t.status.textContent="Load error"}}setTrackBuffer(t,e,n){var i;t.samples=new Float32Array(e.getChannelData(0)),t.sampleRate=e.sampleRate,(i=t.waveform)==null||i.setWaveformFromBuffer(e),t.status.textContent=n,this.invalidateResult(),this.signalTrack.samples&&this.kernelTrack.samples&&this.runConvolution()}invalidateResult(){this.pause(),this.rawOut=null,this.convolved=null,this.convolvedBuffer=null,this.computeToken++,this.pos=0,this.lastDrawnN=-1,this.scope.clearData(),this.statusLabel.textContent="Load clips"}async runConvolution(){const t=this.signalTrack.samples,e=this.kernelTrack.samples;if(!t||!e)return;const n=++this.computeToken;this.statusLabel.textContent="Computing…",this.convSampleRate=this.signalTrack.sampleRate;let i;if(t.length*e.length<=Hm)i=Sn.convolve(t,e);else try{i=await zm(t,e)}catch{i=Sn.convolve(t,e)}if(n===this.computeToken){if(this.rawOut=i,this.convolved=Sn.normalizePeak(i,.9),this.audioContext){const a=this.audioContext.createBuffer(1,i.length,this.convSampleRate);a.copyToChannel(new Float32Array(this.convolved),0),this.convolvedBuffer=a}this.scope.setData(t,e,i,this.convSampleRate),this.pos=0,this.lastDrawnN=-1,this.syncScope(!0),this.statusLabel.textContent="Ready"}}endPos(){var t;return Math.max(0,(((t=this.rawOut)==null?void 0:t.length)??1)-1)}play(){var t,e,n;!this.rawOut||this.animating||(this.pos>=this.endPos()&&(this.pos=0),(t=this.audioContext)==null||t.resume().catch(()=>{}),this.startAudio(),this.animating=!0,this.lastTick=performance.now(),this.audioStartCtxTime=((e=this.audioContext)==null?void 0:e.currentTime)??0,this.audioStartPos=this.pos,(n=this.transport)==null||n.setPlaying(!0),this.rafId=requestAnimationFrame(this.tick))}pause(){var t;!this.animating&&this.rafId===null||(this.animating=!1,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.stopAudio(),(t=this.transport)==null||t.setPlaying(!1))}stop(){this.pause(),this.pos=0,this.syncScope(!0),this.statusLabel.textContent=this.rawOut?"Ready":"Load clips"}seek(t){var e;this.rawOut&&(this.pos=Math.max(0,Math.min(this.endPos(),Math.round(t))),this.animating&&(this.startAudio(),this.audioStartCtxTime=((e=this.audioContext)==null?void 0:e.currentTime)??0,this.audioStartPos=this.pos),this.syncScope(!1))}syncScope(t){const e=Math.floor(this.pos);!t&&e===this.lastDrawnN||(this.lastDrawnN=e,this.scope.setView(e,"slide",0),this.scope.render())}startAudio(){this.stopAudio();const t=this.audioContext,e=this.convolvedBuffer;if(!t||!e)return;const n=t.createBufferSource();n.buffer=e,n.loop=this.loop;const i=t.createGain();i.gain.value=.85,n.connect(i),i.connect(t.destination);const a=Math.min(e.duration-.001,Math.max(0,this.pos/this.convSampleRate));n.start(0,a),this.sourceNode=n,this.gainNode=i}stopAudio(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),this.sourceNode=null,this.gainNode=null}destroy(){this.pause(),window.removeEventListener("resize",this.onResize)}}let sn=null,Ki=null,Vm=0;const yi=new Map,Wm=`
function nextPow2(n) {
  let p = 1;
  while (p < n) p <<= 1;
  return p;
}

function fftInPlace(real, imag) {
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
    const angleStep = Math.PI / step;
    for (let group = 0; group < step; group++) {
      const angle = -group * angleStep;
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
}

function computeMagnitudeSpectrum(samples, sampleRate, numPoints) {
  const n = nextPow2(Math.max(64, samples.length));
  const real = new Float64Array(n);
  const imag = new Float64Array(n);
  const len = Math.min(samples.length, n);

  for (let i = 0; i < len; i++) {
    const w = 0.5 * (1 - Math.cos((2 * Math.PI * i) / Math.max(1, len - 1)));
    real[i] = samples[i] * w;
  }

  fftInPlace(real, imag);

  const half = n / 2;
  const freqs = new Float32Array(numPoints);
  const magnitudesDb = new Float32Array(numPoints);
  const nyquist = sampleRate / 2;

  for (let i = 0; i < numPoints; i++) {
    const f = (i / (numPoints - 1)) * nyquist;
    freqs[i] = f;
    const bin = Math.round((f / nyquist) * (half - 1));
    const mag = Math.sqrt(real[bin] * real[bin] + imag[bin] * imag[bin]) / n;
    magnitudesDb[i] = Math.max(-120, 20 * Math.log10(mag + 1e-12));
  }

  return { freqs: freqs, magnitudesDb: magnitudesDb };
}

self.addEventListener("message", function (event) {
  const msg = event.data;
  if (!msg || msg.type !== "compute") return;

  try {
    const samples = new Float32Array(msg.samples);
    const result = computeMagnitudeSpectrum(samples, msg.sampleRate, msg.numPoints);
    self.postMessage(
      { type: "result", id: msg.id, freqs: result.freqs, magnitudesDb: result.magnitudesDb },
      [result.freqs.buffer, result.magnitudesDb.buffer]
    );
  } catch (err) {
    self.postMessage({ type: "error", id: msg.id, message: (err && err.message) || "FFT worker failed" });
  }
});
`;function qm(){if(!sn){const s=new Blob([Wm],{type:"application/javascript"});Ki=URL.createObjectURL(s),sn=new Worker(Ki),sn.addEventListener("message",t=>{const e=t.data||{},n=yi.get(e.id);n&&(yi.delete(e.id),e.type==="result"?n.resolve({freqs:new Float32Array(e.freqs),magnitudesDb:new Float32Array(e.magnitudesDb)}):n.reject(new Error(e.message||"FFT worker failed")))}),sn.addEventListener("error",t=>{for(const[e,n]of yi)n.reject(new Error(t.message||"FFT worker crashed")),yi.delete(e)})}return sn}function Xm(s,t,e){return new Promise((n,i)=>{const a=qm(),r=++Vm;yi.set(r,{resolve:n,reject:i});const o=s.slice();a.postMessage({type:"compute",id:r,samples:o.buffer,sampleRate:t,numPoints:e},[o.buffer])})}function Ym(){sn==null||sn.terminate(),sn=null,Ki&&(URL.revokeObjectURL(Ki),Ki=null),yi.clear()}class $m{constructor(t){x(this,"container");x(this,"sharedAudio",on.getInstance());x(this,"audioContext",null);x(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),waveform:Mt("waveform",!0),scope:Mt("scope",!0),liveSpectrum:Mt("liveSpectrum",!0),cumulativeSpectrum:Mt("cumulativeSpectrum",!0)});x(this,"transportBar");x(this,"statusLabel");x(this,"waveformTimeline");x(this,"scopeDisplay");x(this,"liveSpectrum");x(this,"fullSpectrum");x(this,"rawBuffer",null);x(this,"samples",null);x(this,"sampleRate",44100);x(this,"windowSize",8192*2);x(this,"liveSpectrumPoints",2048*4);x(this,"fullSpectrumPoints",4096*32);x(this,"fullSpectrumData",null);x(this,"fullSpectrumComputing",!1);x(this,"fullSpectrumRequestId",0);x(this,"scopeWindowSamples",2048);x(this,"scopeStemCount",180);x(this,"scopeSincA",3);x(this,"scopeWidth",620);x(this,"scopeHeight",160);x(this,"sourceNode",null);x(this,"gainNode",null);x(this,"isPlaying",!1);x(this,"loop",!1);x(this,"animationId",null);x(this,"startTime",0);x(this,"pausedAt",0);x(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext(),await this.loadDefaultAudio()}getWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=this.getWidth(),e=Math.max(300,Math.floor((t-10)/2));if(this.ui.transport?(this.transportBar=new Zn({onPlay:()=>this.play(),onPause:()=>this.pause(),onStop:()=>this.stop(!0),onUpload:n=>this.handleUpload(n),uploadLabel:"Upload Audio",showUpload:this.ui.upload,onLoopToggle:n=>{this.loop=n}}),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.dataset.tooltip="Playback status and DFT settings",this.statusLabel.textContent="Loading…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())):(this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status transport-status--standalone",this.statusLabel.textContent="Loading…",this.container.appendChild(this.statusLabel)),this.ui.waveform&&(this.waveformTimeline=new Di({width:t,height:72,title:"Waveform"},n=>this.seek(n)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.scope&&(this.scopeWidth=t,this.scopeHeight=120,this.scopeDisplay=new Wi({width:this.scopeWidth,height:this.scopeHeight,label:"Scope"}),this.scopeDisplay.getElement().classList.add("wave-display--spaced"),this.container.appendChild(this.scopeDisplay.getElement())),this.ui.liveSpectrum||this.ui.cumulativeSpectrum){const n=document.createElement("div");n.className="dft-spec-layout",this.ui.liveSpectrum&&(this.liveSpectrum=new Gn({width:e,height:278,label:"Live",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0,logScale:!0}),n.appendChild(this.liveSpectrum.getElement())),this.ui.cumulativeSpectrum&&(this.fullSpectrum=new Gn({width:e,height:278,label:"Full clip",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0,logScale:!0}),n.appendChild(this.fullSpectrum.getElement())),this.container.appendChild(n)}this.resizeDisplays()}async loadDefaultAudio(){const t=Yn("audio");if(t){await this.loadFromUrl(t);return}await this.loadBuiltInChirp()}async loadBuiltInChirp(){if(!this.audioContext)return;const t=44100,e=2,n=t*e,i=this.audioContext.createBuffer(1,n,t),a=i.getChannelData(0);for(let r=0;r<n;r++){const o=r/t,l=200+3800*(o/e);a[r]=.55*Math.sin(2*Math.PI*l*o)}this.setBuffer(i,"Default chirp")}async loadFromUrl(t){this.statusLabel.textContent="Loading…";try{const n=await(await fetch(Li(t))).arrayBuffer(),i=await this.sharedAudio.decodeAudioData(n);this.setBuffer(i,t.split("/").pop()??t)}catch{this.statusLabel.textContent="Load error",await this.loadBuiltInChirp()}}async handleUpload(t){this.statusLabel.textContent="Decoding…";try{const e=await t.arrayBuffer(),n=await this.sharedAudio.decodeAudioData(e);this.setBuffer(n,t.name)}catch{this.statusLabel.textContent="Load error"}}setBuffer(t,e){var n;this.rawBuffer=t,this.samples=new Float32Array(t.getChannelData(0)),this.sampleRate=t.sampleRate,(n=this.waveformTimeline)==null||n.setWaveformFromBuffer(t),this.pausedAt=0,this.statusLabel.textContent=e,this.computeFullSpectrum(),this.drawSpectra(0),this.drawScope(0)}computeFullSpectrum(){if(this.fullSpectrumData=null,!this.samples){this.fullSpectrumComputing=!1,this.drawFullSpectrum();return}const t=++this.fullSpectrumRequestId;this.fullSpectrumComputing=!0,this.drawFullSpectrum(),Xm(this.samples,this.sampleRate,this.fullSpectrumPoints).then(e=>{t===this.fullSpectrumRequestId&&(this.fullSpectrumData=e,this.fullSpectrumComputing=!1,this.drawFullSpectrum())}).catch(()=>{t===this.fullSpectrumRequestId&&(this.fullSpectrumComputing=!1,this.drawFullSpectrum())})}seek(t){var n;if(!this.samples)return;this.pausedAt=t;const e=Math.floor(t*this.sampleRate);(n=this.waveformTimeline)==null||n.setPlayhead(t),this.drawSpectra(e),this.drawScope(e),this.isPlaying&&(this.stop(!1),this.play())}async play(){var t;!this.rawBuffer||!this.audioContext||(this.stop(!1),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.rawBuffer,this.gainNode=this.audioContext.createGain(),this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&(this.loop?(this.pausedAt=0,this.play()):this.stop(!0))},this.isPlaying=!0,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel.textContent="Playing",this.startAnimation())}pause(){var t;!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this.teardownAudio(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.statusLabel.textContent="Paused")}stop(t){var e,n;this.teardownAudio(),this.isPlaying=!1,(e=this.transportBar)==null||e.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),t&&(this.pausedAt=0,(n=this.waveformTimeline)==null||n.setPlayhead(0),this.drawSpectra(0),this.drawScope(0),this.statusLabel.textContent="Stopped")}teardownAudio(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),this.sourceNode=null,this.gainNode=null}startAnimation(){const t=()=>{var i;if(!this.isPlaying||!this.audioContext||!this.samples)return;const e=this.audioContext.currentTime-this.startTime;this.pausedAt=e,(i=this.waveformTimeline)==null||i.setPlayhead(e);const n=Math.min(this.samples.length,Math.floor(e*this.sampleRate));this.drawSpectra(n),this.drawScope(n),this.animationId=requestAnimationFrame(t)};t()}drawSpectra(t){if(this.samples){if(this.liveSpectrum){const e=Math.max(0,t-this.windowSize),n=this.samples.slice(e,t);if(this.liveSpectrum.clear(),this.liveSpectrum.drawGrid(),n.length>=8){const i=ec(n,this.sampleRate,this.liveSpectrumPoints);this.liveSpectrum.drawSpectrum(i.freqs,i.magnitudesDb,"#5fe8d1",2,1,!0)}this.liveSpectrum.drawFreqAxis()}this.drawFullSpectrum()}}drawFullSpectrum(){this.fullSpectrum&&(this.fullSpectrum.clear(),this.fullSpectrum.drawGrid(),this.fullSpectrumData?this.fullSpectrum.drawSpectrum(this.fullSpectrumData.freqs,this.fullSpectrumData.magnitudesDb,"#fffbc2",2.5,1,!0):this.fullSpectrumComputing&&this.drawFullSpectrumComputingLabel(),this.fullSpectrum.drawFreqAxis())}drawFullSpectrumComputingLabel(){var i;const t=(i=this.fullSpectrum)==null?void 0:i.getElement(),e=t==null?void 0:t.querySelector(".spectrum-canvas"),n=e==null?void 0:e.getContext("2d");!n||!e||(n.save(),n.font="600 14px JetBrains Mono",n.fillStyle="rgba(255, 251, 194, 0.55)",n.textAlign="center",n.fillText("Computing…",e.clientWidth/2,e.clientHeight/2),n.restore())}drawScope(t){if(!this.scopeDisplay||(this.scopeDisplay.clear(),this.scopeDisplay.drawGrid(),!this.samples||this.samples.length===0))return;const e=Math.floor(this.scopeWindowSamples/2),n=Math.max(0,t-e),i=Math.min(this.samples.length,n+this.scopeWindowSamples),a=this.samples.slice(n,i);if(a.length===0)return;const r=this.scopeWidth,o=this.scopeHeight,l=o/2,h=o-2*14,u=Math.max(2,Math.round(r)),d=new Array(u);for(let _=0;_<u;_++){const p=_/(u-1)*(a.length-1),f=this.lanczosInterpolate(a,p,this.scopeSincA),y=_/(u-1)*r,v=l-f*h/2;d[_]={x:y,y:v}}this.scopeDisplay.drawSmoothCurve(d,"#5fe8d1",1.6);const m=Math.min(this.scopeStemCount,a.length),g=[];for(let _=0;_<m;_++){const p=_/(m-1)*(a.length-1),f=this.lanczosInterpolate(a,p,this.scopeSincA),y=_/(m-1)*r,v=l-f*h/2;g.push({x:y,y:v})}this.scopeDisplay.drawSamplePoints(g,"#5fe8d1",!1)}lanczosInterpolate(t,e,n){const i=Math.floor(e);let a=0;for(let r=i-n+1;r<=i+n;r++)r<0||r>=t.length||(a+=t[r]*this.lanczosKernel(e-r,n));return a}lanczosKernel(t,e){if(t===0)return 1;if(t<=-e||t>=e)return 0;const n=Math.PI*t;return e*Math.sin(n)*Math.sin(n/e)/(n*n)}resizeDisplays(){var n,i,a,r;const t=this.getWidth(),e=Math.max(300,Math.floor((t-10)/2));(n=this.waveformTimeline)==null||n.resize(t,72),this.scopeWidth=t,this.scopeHeight=120,(i=this.scopeDisplay)==null||i.resize(this.scopeWidth,this.scopeHeight),(a=this.liveSpectrum)==null||a.resize(e,278),(r=this.fullSpectrum)==null||r.resize(e,278),this.drawSpectra(Math.floor(this.pausedAt*this.sampleRate)),this.drawScope(Math.floor(this.pausedAt*this.sampleRate))}destroy(){this.stop(!0),window.removeEventListener("resize",this.onResize),Ym()}}const Gi=1.7,Vi=1.1,wr=3,Un=wr/2,sl=.034,Km=2e4,al=96,_i=(()=>{const s=new Float32Array(768);for(let t=0;t<256;t++){const[e,n,i]=Xi(t/255);s[t*3]=e/255,s[t*3+1]=n/255,s[t*3+2]=i/255}return s})();class jm{constructor(t,{capacity:e=Km}={}){x(this,"xs");x(this,"ys");x(this,"capacity");x(this,"head",0);x(this,"count",0);x(this,"dirty",!0);x(this,"view",null);x(this,"ribbon",null);x(this,"frontLine",null);x(this,"marker",null);x(this,"fallback",null);this.canvas=t,this.capacity=e,this.xs=new Float32Array(e),this.ys=new Float32Array(e);try{this.initScene()}catch(n){console.warn("WebGL unavailable, using 2D X/Y graph:",n),this.fallback=t.getContext("2d")}}push(t,e){this.xs[this.head]=t,this.ys[this.head]=e,this.head=(this.head+1)%this.capacity,this.count<this.capacity&&this.count++,this.dirty=!0}resize(){this.view&&Wl(this.view.renderer,this.view.camera,this.canvas),this.dirty=!0}render(){this.view?(this.dirty&&this.updateRibbon(),this.view.controls.update(),this.view.renderer.render(this.view.scene,this.view.camera)):this.dirty&&this.drawFallback(),this.dirty=!1}dispose(){var t,e,n;(t=this.view)==null||t.scene.traverse(i=>{var o;const a=i;(o=a.geometry)==null||o.dispose();const r=a.material;Array.isArray(r)?r.forEach(l=>l.dispose()):r==null||r.dispose()}),(e=this.view)==null||e.controls.dispose(),(n=this.view)==null||n.renderer.dispose()}initScene(){const t=Vl(this.canvas,{camera:[4.4,3.2,6.4],target:[0,0,0],fog:[6,14]}),e=new Ii(2*Gi,2*Vi,wr),n=new mm(e);e.dispose(),t.scene.add(new Er(n,new Xn({color:2704988})));const i=new Hl(2*Gi,14,1915474,1189172);i.position.y=-Vi,t.scene.add(i);const a=new le().setFromPoints([new N(-Gi,0,Un),new N(Gi,0,Un),new N(0,-Vi,Un),new N(0,Vi,Un)]);t.scene.add(new Er(a,new Xn({color:4023426})));const r=this.capacity;this.ribbon=new le,this.ribbon.setAttribute("position",new ne(new Float32Array(r*2*3),3)),this.ribbon.setAttribute("aColor",new ne(new Float32Array(r*2*3),3)),this.ribbon.setAttribute("aAge",new ne(new Float32Array(r*2),1));const o=[];for(let h=0;h<r-1;h++){const u=h*2;o.push(u,u+1,u+2,u+1,u+3,u+2)}this.ribbon.setIndex(o);const l=new Ee(this.ribbon,new un({vertexShader:`
          attribute vec3 aColor;
          attribute float aAge;
          varying vec3 vColor;
          varying float vAge;
          void main() {
            vColor = aColor;
            vAge = aAge;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec3 vColor;
          varying float vAge;
          void main() {
            float alpha = 0.95 * pow(1.0 - clamp(vAge, 0.0, 1.0), 1.7);
            if (alpha < 0.01) discard;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,transparent:!0,depthWrite:!0,side:Oe}));l.frustumCulled=!1,l.renderOrder=1,t.scene.add(l),this.frontLine=new le,this.frontLine.setAttribute("position",new ne(new Float32Array(al*3),3));const c=new js(this.frontLine,new Xn({color:12448746,transparent:!0,opacity:1}));c.renderOrder=2,t.scene.add(c),this.marker=new Ee(new Br(.032,12,8),new qn({color:4898733})),this.marker.renderOrder=3,t.scene.add(this.marker),this.view=t}updateRibbon(){if(!this.ribbon||!this.frontLine||!this.marker)return;const t=this.capacity,e=this.count,n=this.ribbon.getAttribute("position"),i=this.ribbon.getAttribute("aColor"),a=this.ribbon.getAttribute("aAge"),r=n.array,o=i.array,l=a.array,c=_=>(this.head-1-_+t)%t,h=_=>this.xs[c(_)]*Gi,u=_=>this.ys[c(_)]*Vi;for(let _=0;_<e;_++){const p=h(_),f=u(_),y=Un-_/(t-1)*wr,v=Math.min(e-1,_+1),M=Math.max(0,_-1);let A=h(M)-h(v),T=u(M)-u(v),P=Math.hypot(A,T);P<1e-9&&(A=0,T=1,P=1);const F=-T/P*sl,w=A/P*sl,b=_*2;r[b*3]=p+F,r[b*3+1]=f+w,r[b*3+2]=y,r[(b+1)*3]=p-F,r[(b+1)*3+1]=f-w,r[(b+1)*3+2]=y;const L=_/Math.max(1,t-1),V=.35+.65*(1-L),H=Math.round(V*255)*3;o[b*3]=o[(b+1)*3]=_i[H],o[b*3+1]=o[(b+1)*3+1]=_i[H+1],o[b*3+2]=o[(b+1)*3+2]=_i[H+2],l[b]=l[b+1]=L}this.ribbon.setDrawRange(0,Math.max(0,e-1)*6),n.needsUpdate=!0,i.needsUpdate=!0,a.needsUpdate=!0;const d=this.frontLine.getAttribute("position"),m=d.array,g=Math.min(e,al);for(let _=0;_<g;_++)m[_*3]=h(_),m[_*3+1]=u(_),m[_*3+2]=Un+.002;this.frontLine.setDrawRange(0,g),d.needsUpdate=!0,e>0?(this.marker.position.set(h(0),u(0),Un+.002),this.marker.visible=!0):this.marker.visible=!1}drawFallback(){const t=this.fallback;if(!t)return;const e=this.canvas.width,n=this.canvas.height,i=22,a=e-i*2,r=n-i*2,o=i+a/2,l=i+r/2;t.fillStyle="#0a1726",t.fillRect(0,0,e,n),t.strokeStyle="rgba(255,255,255,0.14)",t.lineWidth=1,t.strokeRect(i,i,a,r),t.beginPath(),t.moveTo(i,l),t.lineTo(i+a,l),t.moveTo(o,i),t.lineTo(o,i+r),t.strokeStyle="rgba(255,255,255,0.08)",t.stroke();const c=this.capacity;for(let h=this.count-1;h>=0;h--){const u=(this.head-1-h+c)%c,d=o+Math.max(-1,Math.min(1,this.xs[u]))*(a/2),m=l-Math.max(-1,Math.min(1,this.ys[u]))*(r/2),_=.2+.8*(1-h/Math.max(1,this.count-1)),p=Math.round(_*255)*3;t.fillStyle=`rgba(${Math.round(_i[p]*255)},${Math.round(_i[p+1]*255)},${Math.round(_i[p+2]*255)},0.85)`,t.fillRect(d-1,m-1,2,2)}t.fillStyle="rgba(255,255,255,0.3)",t.font="10px JetBrains Mono",t.textAlign="center",t.fillText("x",i+a/2,n-4),t.save(),t.translate(8,i+r/2),t.rotate(-Math.PI/2),t.fillText("y",0,0),t.restore()}}const Zm=[{value:"tremolo",label:"Tremolo"},{value:"lowpass",label:"Lowpass"},{value:"highpass",label:"Highpass"},{value:"delay",label:"Delay"}],za=256;class Jm{constructor(t){x(this,"container");x(this,"animId",null);x(this,"sharedAudio",on.getInstance());x(this,"audioCtx",null);x(this,"originalBuffer",null);x(this,"sourceNode",null);x(this,"preset","tremolo");x(this,"tremoloRateHz",1);x(this,"lowpassCutoffHz",1200);x(this,"highpassCutoffHz",800);x(this,"delayTimeMs",300);x(this,"delayFeedback",.35);x(this,"delayWetMix",.55);x(this,"dspNode",null);x(this,"biquadNode",null);x(this,"delayNode",null);x(this,"delayFeedbackGain",null);x(this,"delayWetGain",null);x(this,"delayDryGain",null);x(this,"gainNode",null);x(this,"dryGain",null);x(this,"wetGain",null);x(this,"analyserNode",null);x(this,"analyserFreqData",null);x(this,"postTimeData",null);x(this,"preAnalyserNode",null);x(this,"preSilentGain",null);x(this,"preTimeData",null);x(this,"origSpectrumStatic",null);x(this,"sampleRate",44100);x(this,"synthLastFrameMs",null);x(this,"synthSampleRate",2e4);x(this,"synthN",0);x(this,"synthState",{x1:0,x2:0,y1:0,y2:0});x(this,"synthDelayBuffer",new Float32Array(20001));x(this,"synthDelayWriteIdx",0);x(this,"isPlaying",!1);x(this,"playMode","filtered");x(this,"playbackStartedAt",0);x(this,"pausedAt",0);x(this,"loop",!1);x(this,"transportBar");x(this,"waveformTimeline");x(this,"statusEl");x(this,"eqLabelEl");x(this,"knobGroups",{});x(this,"xyPanel");x(this,"xyCanvas");x(this,"xySurface");x(this,"scopePanel");x(this,"scopeCanvas");x(this,"spectrumCanvas");x(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),this.updateEquationLabel(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.startAnimation(),this.loadDefaultAudio()}buildUI(){document.body.classList.add("page-scroll"),this.buildTransport(),Mt("waveform",!0)&&(this.waveformTimeline=new Di({width:900,height:56,title:"Waveform"},i=>this.seek(i)),this.waveformTimeline.getElement().classList.add("timeline-panel--spaced"),this.container.appendChild(this.waveformTimeline.getElement()));const t=document.createElement("div");t.className="deq-viz-row",this.xyPanel=bn("X/Y","deq-xy-panel"),this.xyCanvas=ll(this.xyPanel,600,za),this.xySurface=new jm(this.xyCanvas);const e=document.createElement("div");e.className="deq-side",this.scopePanel=bn("Scope"),this.scopeCanvas=Mi(this.scopePanel,400,146);const n=bn("Spectrum");this.spectrumCanvas=Mi(n,400,146),e.append(this.scopePanel,n),t.append(this.xyPanel,e),this.container.appendChild(t),this.container.appendChild(this.buildControls())}buildTransport(){if(!Mt("transport",!0)){this.statusEl=document.createElement("span"),this.statusEl.className="hidden";return}this.transportBar=new Zn({onPlay:()=>void this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:e=>void this.handleUpload(e),uploadLabel:"Upload Audio",showUpload:Mt("upload",!0),onLoopToggle:e=>{if(this.isPlaying&&this.audioCtx){const n=this.currentPlaybackTime();this.pausedAt=n,this.playbackStartedAt=this.audioCtx.currentTime-n}this.loop=e,this.sourceNode&&(this.sourceNode.loop=e)}});const t=this.transportBar.getElement().querySelector(".transport-left");t.appendChild(ji({className:"transport-mode-inline",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"filtered",label:"Filtered"}],onChange:e=>this.setPlayMode(e)})),this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.textContent="Load audio",t.appendChild(this.statusEl),this.container.appendChild(this.transportBar.getElement())}buildControls(){const t=document.createElement("div");t.className="deq-controls",t.dataset.tooltip="Difference-equation coefficients and playback controls";const e=ji({className:"transport-mode-group",value:this.preset,modes:Zm,onChange:r=>this.applyPreset(r)});this.eqLabelEl=document.createElement("div"),this.eqLabelEl.className="deq-eq-label",this.eqLabelEl.dataset.tooltip="Current difference equation";const n=document.createElement("div");n.className="deq-knob-row";const i=(r,o,l)=>new Hn(o,c=>{l(c),this.updateEquationLabel(),this.preset===r&&this.applyLiveParams()}).getElement(),a=(r,...o)=>{const l=document.createElement("div");l.className="deq-knob-row",l.classList.toggle("hidden",r!==this.preset),l.append(...o),this.knobGroups[r]=l,n.appendChild(l)};return a("tremolo",i("tremolo",{label:"Rate",unit:"Hz",min:.5,max:500,step:.5,value:this.tremoloRateHz,defaultValue:10},r=>this.tremoloRateHz=r)),a("lowpass",i("lowpass",{label:"Cutoff",unit:"Hz",min:100,max:8e3,step:10,value:this.lowpassCutoffHz,defaultValue:1200},r=>this.lowpassCutoffHz=r)),a("highpass",i("highpass",{label:"Cutoff",unit:"Hz",min:100,max:8e3,step:10,value:this.highpassCutoffHz,defaultValue:800},r=>this.highpassCutoffHz=r)),a("delay",i("delay",{label:"Time",unit:"ms",min:10,max:1e3,step:5,value:this.delayTimeMs,defaultValue:300},r=>this.delayTimeMs=r),i("delay",{label:"Feedback",unit:"%",min:0,max:90,step:1,value:this.delayFeedback*100,defaultValue:35},r=>this.delayFeedback=r/100)),t.append(e,this.eqLabelEl,n),t}resizeLayout(){var i;const t=Math.max(640,this.container.clientWidth-2);(i=this.waveformTimeline)==null||i.resize(t,56);const e=Math.floor((za-6-2)/2);cl(this.xyCanvas,Math.max(240,this.xyPanel.clientWidth),za),this.xySurface.resize();const n=Math.max(200,this.scopePanel.clientWidth);En(this.scopeCanvas,n,e),En(this.spectrumCanvas,n,e)}applyPreset(t){this.preset!==t&&(this.preset=t,Object.keys(this.knobGroups).forEach(e=>{this.knobGroups[e].classList.toggle("hidden",e!==t)}),this.updateEquationLabel(),this.isPlaying&&(this.pausedAt=this.currentPlaybackTime(),this.stopAudio(!1),this.startPlayback(this.playMode)))}updateEquationLabel(){if(this.preset==="tremolo")this.eqLabelEl.textContent=`y[n] = x[n] · cos(2π · ${this.tremoloRateHz.toFixed(1)} · n / Fs)`;else if(this.preset==="delay"){const t=this.sampleRate||44100,e=Math.max(1,Math.round(this.delayTimeMs/1e3*t));this.eqLabelEl.textContent=`D = ${this.delayTimeMs.toFixed(0)} ms = ${e} samples @ Fs
s[n] = x[n] + ${this.delayFeedback.toFixed(2)} · s[n − D],   y[n] = x[n] + ${this.delayWetMix.toFixed(2)} · s[n − D]`}else{const t=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz,e=this.sampleRate||44100,n=this.biquadCoeffs(this.preset,Math.min(t,e*.45),e),i=this.preset==="lowpass"?"Lowpass":"Highpass";this.eqLabelEl.textContent=`${i} · fc = ${t.toFixed(0)} Hz (Fs = ${e} Hz)
y[n] = ${n.b0.toFixed(3)}x[n] + ${n.b1.toFixed(3)}x[n−1] + ${n.b2.toFixed(3)}x[n−2] − (${n.a1.toFixed(3)})y[n−1] − (${n.a2.toFixed(3)})y[n−2]`}}biquadCoeffs(t,e,n){const i=2*Math.PI*e/n,a=Math.sin(i)/(2*Math.SQRT1_2),r=Math.cos(i);let o,l,c;t==="lowpass"?(o=(1-r)/2,l=1-r,c=(1-r)/2):(o=(1+r)/2,l=-(1+r),c=(1+r)/2);const h=1+a,u=-2*r,d=1-a;return{b0:o/h,b1:l/h,b2:c/h,a1:u/h,a2:d/h}}synthTestSignal(t){const e=t/this.synthSampleRate,n=Math.sin(2*Math.PI*223*e),i=Math.sin(2*Math.PI*669*e);return .5*n+.35*i}stepSynthSample(){const t=this.synthN++,e=this.synthTestSignal(t);let n;if(this.preset==="tremolo")n=e*Math.cos(2*Math.PI*this.tremoloRateHz*t/this.synthSampleRate);else if(this.preset==="delay"){const i=Math.min(this.synthDelayBuffer.length-1,Math.max(1,Math.round(this.delayTimeMs/1e3*this.synthSampleRate))),a=this.synthDelayBuffer,r=(this.synthDelayWriteIdx-i+a.length)%a.length,o=a[r],l=e+this.delayFeedback*o;a[this.synthDelayWriteIdx]=l,this.synthDelayWriteIdx=(this.synthDelayWriteIdx+1)%a.length,n=e+this.delayWetMix*o}else{const i=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz,a=Math.min(i,this.synthSampleRate*.45),r=this.biquadCoeffs(this.preset,a,this.synthSampleRate),o=this.synthState;n=r.b0*e+r.b1*o.x1+r.b2*o.x2-r.a1*o.y1-r.a2*o.y2,o.x2=o.x1,o.x1=e,o.y2=o.y1,o.y1=n}t%4===0&&this.xySurface.push(e,n)}async loadDefaultAudio(){var e;const t=Yn("audio")??"audio/Linux.wav";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext());const i=await(await fetch(Li(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(i),this.sampleRate=this.originalBuffer.sampleRate,this.cacheStaticSpectrum(),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),this.statusEl.textContent=`${t.split("/").pop()} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="Load audio"}}async handleUpload(t){var e;this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate,this.cacheStaticSpectrum(),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),this.statusEl.textContent=`${t.name} · ${this.originalBuffer.duration.toFixed(1)}s`}cacheStaticSpectrum(){if(!this.originalBuffer)return;const t=this.originalBuffer.getChannelData(0),e=4096,n=Math.floor(t.length/2);this.origSpectrumStatic=this.fftMag(t.slice(n,n+e),e)}applyLiveParams(){var t,e;if(this.preset==="tremolo"){(t=this.dspNode)==null||t.port.postMessage({type:"setMode",mode:"amplitude-mod"}),(e=this.dspNode)==null||e.port.postMessage({type:"setModulation",frequency:this.tremoloRateHz});return}if(this.preset==="delay"){this.delayNode&&this.audioCtx&&this.delayNode.delayTime.setTargetAtTime(this.delayTimeMs/1e3,this.audioCtx.currentTime,.01),this.delayFeedbackGain&&(this.delayFeedbackGain.gain.value=this.delayFeedback);return}if(this.biquadNode&&this.audioCtx){this.biquadNode.type=this.preset==="lowpass"?"lowpass":"highpass";const n=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz;this.biquadNode.frequency.setValueAtTime(n,this.audioCtx.currentTime),this.biquadNode.Q.value=Math.SQRT1_2}}async startPlayback(t){var n;if(this.stopAudio(!1),!this.originalBuffer||!this.audioCtx){this.statusEl.textContent="Load audio first";return}this.playMode=t,this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserFreqData=new Float32Array(this.analyserNode.frequencyBinCount),this.postTimeData=new Float32Array(this.analyserNode.fftSize),this.preAnalyserNode=this.audioCtx.createAnalyser(),this.preAnalyserNode.fftSize=4096,this.preTimeData=new Float32Array(this.preAnalyserNode.fftSize),this.preSilentGain=this.audioCtx.createGain(),this.preSilentGain.gain.value=0,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=.85,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=this.loop,this.sourceNode.connect(this.preAnalyserNode),this.preAnalyserNode.connect(this.preSilentGain),this.preSilentGain.connect(this.audioCtx.destination),this.dryGain=this.audioCtx.createGain(),this.wetGain=this.audioCtx.createGain(),this.dryGain.gain.value=t==="original"?1:0,this.wetGain.gain.value=t==="filtered"?1:0,this.sourceNode.connect(this.dryGain),this.dryGain.connect(this.analyserNode),this.preset==="tremolo"?(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[1]}),this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.wetGain)):this.preset==="delay"?(this.delayNode=this.audioCtx.createDelay(2),this.delayFeedbackGain=this.audioCtx.createGain(),this.delayWetGain=this.audioCtx.createGain(),this.delayWetGain.gain.value=this.delayWetMix,this.delayDryGain=this.audioCtx.createGain(),this.delayDryGain.gain.value=1,this.sourceNode.connect(this.delayDryGain),this.delayDryGain.connect(this.wetGain),this.sourceNode.connect(this.delayNode),this.delayNode.connect(this.delayWetGain),this.delayWetGain.connect(this.wetGain),this.delayNode.connect(this.delayFeedbackGain),this.delayFeedbackGain.connect(this.delayNode)):(this.biquadNode=this.audioCtx.createBiquadFilter(),this.sourceNode.connect(this.biquadNode),this.biquadNode.connect(this.wetGain)),this.applyLiveParams(),this.wetGain.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt);const e=this.sourceNode;e.onended=()=>{this.sourceNode!==e||!this.isPlaying||this.loop||this.stopAudio(!0)},this.isPlaying=!0,(n=this.transportBar)==null||n.setPlaying(!0)}setPlayMode(t){if(this.playMode=t,!this.audioCtx||!this.isPlaying||!this.dryGain||!this.wetGain)return;const e=this.audioCtx.currentTime;this.dryGain.gain.setTargetAtTime(t==="original"?1:0,e,.01),this.wetGain.gain.setTargetAtTime(t==="filtered"?1:0,e,.01)}currentPlaybackTime(){if(!this.audioCtx||!this.originalBuffer)return this.pausedAt;const t=this.originalBuffer.duration,e=this.audioCtx.currentTime-this.playbackStartedAt;return this.loop&&t>0?e%t:Math.min(e,t)}pauseAudio(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.currentPlaybackTime(),this.teardownNodes(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t){var e,n;this.teardownNodes(),this.isPlaying=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)}teardownNodes(){var t,e,n,i,a,r,o,l,c,h,u,d,m;if(this.sourceNode){this.sourceNode.onended=null;try{this.sourceNode.stop()}catch{}}(t=this.sourceNode)==null||t.disconnect(),(e=this.dspNode)==null||e.disconnect(),(n=this.biquadNode)==null||n.disconnect(),(i=this.delayNode)==null||i.disconnect(),(a=this.delayFeedbackGain)==null||a.disconnect(),(r=this.delayWetGain)==null||r.disconnect(),(o=this.delayDryGain)==null||o.disconnect(),(l=this.dryGain)==null||l.disconnect(),(c=this.wetGain)==null||c.disconnect(),(h=this.analyserNode)==null||h.disconnect(),(u=this.gainNode)==null||u.disconnect(),(d=this.preAnalyserNode)==null||d.disconnect(),(m=this.preSilentGain)==null||m.disconnect(),this.sourceNode=null,this.dspNode=null,this.biquadNode=null,this.delayNode=null,this.delayFeedbackGain=null,this.delayWetGain=null,this.delayDryGain=null,this.dryGain=null,this.wetGain=null,this.analyserNode=null,this.gainNode=null,this.preAnalyserNode=null,this.preSilentGain=null}seek(t){this.originalBuffer&&(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}pushAudioToXY(){if(!this.preAnalyserNode||!this.analyserNode||!this.preTimeData||!this.postTimeData||!this.audioCtx)return;this.preAnalyserNode.getFloatTimeDomainData(this.preTimeData),this.analyserNode.getFloatTimeDomainData(this.postTimeData);const t=this.preTimeData.length,e=Math.min(t,Math.round(this.audioCtx.sampleRate*.016)),n=8;for(let i=Math.max(0,t-e);i<t;i+=n)this.xySurface.push(this.preTimeData[i],this.postTimeData[i])}drawScope(){const t=this.scopeCanvas,e=t.getContext("2d"),n=window.devicePixelRatio||1,i=t.width/n,a=t.height/n;e.fillStyle="#0a1726",e.fillRect(0,0,i,a);const r=a/2;if(e.strokeStyle="rgba(255,255,255,0.08)",e.beginPath(),e.moveTo(0,r),e.lineTo(i,r),e.stroke(),!this.preAnalyserNode||!this.analyserNode||!this.preTimeData||!this.postTimeData){e.fillStyle="rgba(255,255,255,0.3)",e.font="13px JetBrains Mono",e.textAlign="center",e.fillText("Press play",i/2,r-6);return}this.preAnalyserNode.getFloatTimeDomainData(this.preTimeData),this.analyserNode.getFloatTimeDomainData(this.postTimeData);const o=(l,c,h,u)=>{const d=l.length,m=Math.max(1,Math.floor(d/i));e.beginPath(),e.lineWidth=u,e.strokeStyle=`rgba(${c},${h})`;let g=!0;for(let _=0;_<d;_+=m){const p=_/d*i,f=r-l[_]*(a*.42);g?(e.moveTo(p,f),g=!1):e.lineTo(p,f)}e.stroke()};o(this.preTimeData,"170,180,195",.55,1.25),o(this.postTimeData,"82,207,254",.9,1.5),e.font="11px JetBrains Mono",e.textAlign="right",e.fillStyle="rgba(220,224,232,0.85)",e.fillText("before",i-8,14),e.fillStyle="rgba(74,191,173,0.9)",e.fillText("after",i-8,26)}drawSpectrumLinear(){const t=this.spectrumCanvas,e=t.getContext("2d"),n=window.devicePixelRatio||1,i=t.width/n,a=t.height/n,r={l:40,r:12,t:20,b:18},o=i-r.l-r.r,l=a-r.t-r.b;e.fillStyle="#0a1726",e.fillRect(0,0,i,a);const c=(u,d,m,g)=>{let _=1e-9;const p=u.length;for(let f=0;f<p;f++){const y=d?Math.pow(10,u[f]/20):u[f];_=Math.max(_,y)}e.beginPath(),e.moveTo(r.l,r.t+l);for(let f=1;f<p;f++){const y=d?Math.pow(10,u[f]/20):u[f],v=r.l+f/(p-1)*o,M=r.t+l-y/_*l;e.lineTo(v,M)}e.lineTo(r.l+o,r.t+l),e.closePath(),e.fillStyle=`rgba(${m},${g})`,e.fill()};this.origSpectrumStatic&&c(this.origSpectrumStatic,!1,"180,180,180",.25),this.analyserNode&&this.analyserFreqData&&(this.analyserNode.getFloatFrequencyData(this.analyserFreqData),c(this.analyserFreqData,!0,"82,207,254",.65)),e.fillStyle="rgba(255,255,255,0.25)",e.font="11px JetBrains Mono",e.textAlign="center";const h=this.sampleRate/2;[0,.25,.5,.75,1].forEach(u=>{const d=u*h;e.fillText(d>=1e3?`${(d/1e3).toFixed(1)}k`:`${d.toFixed(0)}`,r.l+u*o,a-4)})}fftMag(t,e){const n=new Float64Array(e),i=new Float64Array(e);for(let r=0;r<e&&r<t.length;r++){const o=.5*(1-Math.cos(2*Math.PI*r/(e-1)));n[r]=t[r]*o}Ji(n,i);const a=new Float32Array(e/2);for(let r=0;r<e/2;r++)a[r]=Math.sqrt(n[r]*n[r]+i[r]*i[r])/e;return a}startAnimation(){const t=e=>{var i;if(!!(this.isPlaying&&this.audioCtx&&this.originalBuffer))this.pushAudioToXY(),this.synthLastFrameMs=e,this.pausedAt=this.currentPlaybackTime(),(i=this.waveformTimeline)==null||i.setPlayhead(this.pausedAt);else{this.synthLastFrameMs===null&&(this.synthLastFrameMs=e);const a=Math.min(250,e-this.synthLastFrameMs);this.synthLastFrameMs=e;const r=Math.max(1,Math.round(a/1e3*this.synthSampleRate));for(let o=0;o<r;o++)this.stepSynthSample()}this.xySurface.render(),this.drawScope(),this.drawSpectrumLinear(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),this.xySurface.dispose(),window.removeEventListener("resize",this.onResize),document.body.classList.remove("page-scroll")}}class Qm{constructor(){x(this,"root");x(this,"content");this.root=document.createElement("div"),this.root.className="demo-shell",this.content=document.createElement("div"),this.content.className="demo-shell-content",this.root.append(this.content)}getElement(){return this.root}getContentElement(){return this.content}}function tg(s="app"){const t=document.getElementById(s);if(!t)return()=>{};let e=null;const n=()=>{e=null;const r=t.offsetWidth,o=t.offsetHeight;if(r===0||o===0)return;const l=window.innerWidth,c=window.innerHeight,h=8,u=(l-h)/r,d=(c-h)/o,m=Math.max(.1,Math.min(u,d));t.style.transform=`scale(${m})`},i=()=>{e!==null&&cancelAnimationFrame(e),e=requestAnimationFrame(n)};window.addEventListener("resize",i);const a=new ResizeObserver(i);return a.observe(t),i(),()=>{window.removeEventListener("resize",i),a.disconnect(),e!==null&&cancelAnimationFrame(e)}}const eg=320,ng=70;function ig(s){const t=s.getAttribute("title");return t!==null&&(s.setAttribute("data-tooltip",t),s.removeAttribute("title")),(s.getAttribute("data-tooltip")??"").trim()}function rl(s){return s instanceof Element?s.closest("[data-tooltip], [title]")??null:null}function sg(){const s=document.createElement("div");s.className="ui-tooltip",s.setAttribute("role","tooltip"),s.setAttribute("aria-hidden","true"),document.body.appendChild(s);let t=null,e=null,n=null,i=!1;const a=()=>{e!==null&&window.clearTimeout(e),n!==null&&window.clearTimeout(n),e=null,n=null},r=(g=!1)=>{if(a(),t=null,!i)return;const _=()=>{i=!1,s.classList.remove("visible"),s.setAttribute("aria-hidden","true")};g?_():n=window.setTimeout(_,ng)},o=g=>{const _=g.getBoundingClientRect(),p=10;s.style.left="-9999px",s.style.top="-9999px";const f=s.offsetWidth,y=s.offsetHeight;let v=_.left+_.width/2-f/2;v=Math.max(8,Math.min(window.innerWidth-f-8,v));let M=_.top-y-p;M<8&&(M=Math.min(window.innerHeight-y-8,_.bottom+p)),s.style.left=`${Math.round(v)}px`,s.style.top=`${Math.round(M)}px`},l=g=>{const _=ig(g);!_||!g.isConnected||(t=g,s.textContent=_,s.classList.remove("visible"),s.setAttribute("aria-hidden","false"),o(g),requestAnimationFrame(()=>{t===g&&(s.classList.add("visible"),i=!0)}))},c=g=>{a(),!(g===t&&i)&&(t=g,e=window.setTimeout(()=>{e=null,l(g)},eg))},h=g=>{const _=rl(g.target);_&&_!==t&&c(_)},u=g=>{if(!t)return;const _=g.relatedTarget;_ instanceof Node&&t.contains(_)||r()},d=g=>{const _=rl(g.target);if(!(!_||!_.matches("button, input, [tabindex]"))){try{if(!_.matches(":focus-visible"))return}catch{}a(),l(_)}},m=()=>r(!0);return document.addEventListener("pointerover",h),document.addEventListener("pointerout",u),document.addEventListener("pointerdown",()=>r(!0),!0),document.addEventListener("focusin",d),document.addEventListener("focusout",m),document.addEventListener("keydown",g=>{g.key==="Escape"&&r(!0)}),window.addEventListener("scroll",()=>r(!0),!0),window.addEventListener("resize",()=>r(!0)),window.addEventListener("blur",()=>r(!0)),()=>{a(),s.remove(),document.removeEventListener("pointerover",h),document.removeEventListener("pointerout",u),document.removeEventListener("focusin",d),document.removeEventListener("focusout",m)}}const ag=[{route:"/aliasing-sine",title:"Sine aliasing",containerId:"sine-container",create:s=>new tc(s)},{route:"/aliasing-audio",title:"Audio aliasing",containerId:"audio-container",create:s=>new Ga(s)},{route:"/z-transform",title:"Z-transform",containerId:"ztransform-container",create:s=>new Va(s)},{route:"/pole-zero",title:"Pole-zero",containerId:"polezero-container",create:s=>new Nm(s)},{route:"/convolution",title:"Convolution",containerId:"convolution-container",create:s=>new Gm(s)},{route:"/dft-demo",title:"DFT",containerId:"dft-container",create:s=>new $m(s)},{route:"/difference-equations",title:"Difference equations",containerId:"diff-eq-container",create:s=>new Jm(s)}];document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("app"),t=new Jl;let e=null;t.register("/",()=>({mount:()=>new Ql(s,t).mount(),unmount:()=>{s.innerHTML=""}}));for(const n of ag)t.register(n.route,()=>({mount:()=>{s.innerHTML="";const i=new Qm,a=document.createElement("div");a.id=n.containerId,i.getContentElement().appendChild(a),s.appendChild(i.getElement()),e=n.create(n.containerId)},unmount:()=>{e==null||e.destroy(),e=null,s.innerHTML=""}}));t.start(),tg("app"),sg()});
