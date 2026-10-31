var nc=Object.defineProperty;var sc=(s,t,e)=>t in s?nc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var v=(s,t,e)=>sc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const ac=[["aliasing-sine.html","/aliasing-sine"],["aliasing-audio.html","/aliasing-audio"],["z-transform.html","/z-transform"],["pole-zero.html","/pole-zero"],["convolution.html","/convolution"],["dft-demo.html","/dft-demo"],["difference-equations.html","/difference-equations"],["filter-design.html","/filter-design"]];class rc{constructor(){v(this,"currentHandler",null);v(this,"handlers",new Map);v(this,"basePath");this.basePath="/visualization/",window.addEventListener("popstate",()=>this.handleRoute())}register(t,e){this.handlers.set(t,e)}navigate(t){const e=t==="/"?this.basePath:`${this.basePath}${t.slice(1)}.html`;window.location.href=e}resolveRoute(t){for(const[e,i]of ac)if(t.includes(e))return i;return"/"}handleRoute(){const t=this.resolveRoute(window.location.pathname);this.currentHandler&&this.currentHandler.unmount();const e=this.handlers.get(t)||this.handlers.get("/");e&&(this.currentHandler=e(),this.currentHandler.mount())}start(){this.handleRoute()}}class oc{constructor(t,e){v(this,"container");v(this,"router");this.container=t,this.router=e}mount(){this.container.innerHTML=`
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
                <circle cx="30" cy="30" r="20" stroke="var(--color-accent-primary)" stroke-width="1.5" fill="rgba(82,207,254,0.04)"/>
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
                <path d="M12 48 Q30 28 48 48" stroke="#ffd700" stroke-width="2" fill="none"/>
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
                <rect x="48" y="22" width="5" height="25" fill="#ffd700" opacity="0.7"/>
              </svg>
            </div>
            <h2 class="card-title">DFT</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/difference-equations">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <text x="8" y="28" fill="var(--color-accent-primary)" font-size="11" font-family="monospace">y[n]</text>
                <text x="8" y="48" fill="#ffd700" font-size="10" font-family="monospace">H(z)</text>
                <rect x="28" y="18" width="24" height="16" stroke="var(--color-accent-secondary)" fill="none"/>
                <rect x="28" y="38" width="24" height="14" stroke="var(--color-accent-primary)" fill="none"/>
              </svg>
            </div>
            <h2 class="card-title">Difference eq.</h2>
            <div class="card-arrow">→</div>
          </div>

          <div class="home-card" data-route="/filter-design">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M8 45 Q20 15 52 35" stroke="var(--color-accent-primary)" stroke-width="2.5" fill="none"/>
                <line x1="8" y1="45" x2="52" y2="45" stroke="rgba(255,255,255,0.2)" stroke-dasharray="3"/>
                <circle cx="20" cy="38" r="3" fill="#ff869a"/>
                <circle cx="40" cy="38" r="3" fill="#52cffe"/>
              </svg>
            </div>
            <h2 class="card-title">Filter design</h2>
            <div class="card-arrow">→</div>
          </div>
        </div>
      </div>
    `,this.container.querySelectorAll(".home-card").forEach(e=>{e.addEventListener("click",()=>{const i=e.getAttribute("data-route");i&&this.router.navigate(i)})})}unmount(){this.container.innerHTML=""}}class Hi{constructor(t,e){v(this,"container");v(this,"svg");v(this,"value");v(this,"config");v(this,"onChange");v(this,"isDragging",!1);v(this,"startX",0);v(this,"startY",0);v(this,"startValue",0);v(this,"indicator");this.config={...t,defaultValue:t.defaultValue??t.value},this.value=t.value,this.onChange=e,this.container=this.createKnob(),this.svg=this.container.querySelector("svg"),this.indicator=this.svg.querySelector(".knob-indicator"),this.updateVisuals(),this.attachEventListeners()}createKnob(){const t=document.createElement("div");t.className="knob-wrapper";const e=document.createElement("div");e.className="knob-container";const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100"),i.setAttribute("class","knob-svg");const n=document.createElementNS("http://www.w3.org/2000/svg","circle");n.setAttribute("cx","50"),n.setAttribute("cy","50"),n.setAttribute("r","48"),n.setAttribute("class","knob-outer");const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx","50"),a.setAttribute("cy","50"),a.setAttribute("r","42"),a.setAttribute("class","knob-body");const r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("cx","50"),r.setAttribute("cy","50"),r.setAttribute("r","38"),r.setAttribute("class","knob-inner");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("class","knob-arc-track"),o.setAttribute("d",this.describeArc(50,50,45,210,330)),o.setAttribute("fill","none");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("class","knob-arc-value"),l.setAttribute("fill","none");const c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("class","knob-indicator");const u=document.createElementNS("http://www.w3.org/2000/svg","line");u.setAttribute("x1","50"),u.setAttribute("y1","18"),u.setAttribute("x2","50"),u.setAttribute("y2","32"),u.setAttribute("stroke-linecap","round");const h=document.createElementNS("http://www.w3.org/2000/svg","circle");h.setAttribute("cx","50"),h.setAttribute("cy","25"),h.setAttribute("r","4"),c.appendChild(u),c.appendChild(h),i.appendChild(n),i.appendChild(a),i.appendChild(r),i.appendChild(o),i.appendChild(l),i.appendChild(c),e.appendChild(i);const d=document.createElement("div");d.className="knob-label",d.textContent=this.config.label;const f=document.createElement("div");return f.className="knob-value",f.textContent=`${this.value}${this.config.unit}`,t.appendChild(e),t.appendChild(f),t.appendChild(d),t}describeArc(t,e,i,n,a){const r=this.polarToCartesian(t,e,i,a),o=this.polarToCartesian(t,e,i,n),l=a-n<=180?"0":"1";return`M ${r.x} ${r.y} A ${i} ${i} 0 ${l} 0 ${o.x} ${o.y}`}polarToCartesian(t,e,i,n){const a=(n-90)*Math.PI/180;return{x:t+i*Math.cos(a),y:e+i*Math.sin(a)}}getAngle(){return 210+(this.value-this.config.min)/(this.config.max-this.config.min)*300}updateVisuals(){const t=this.getAngle();this.indicator.setAttribute("transform",`rotate(${t} 50 50)`);const e=this.svg.querySelector(".knob-arc-value");e&&e.setAttribute("d",this.describeArc(50,50,45,210,t));const i=this.container.querySelector(".knob-value");if(i){const n=this.config.unit==="Hz"&&this.value>=1e3?`${(this.value/1e3).toFixed(1)}k${this.config.unit}`:`${Math.round(this.value)}${this.config.unit}`;i.textContent=n}}attachEventListeners(){const t=this.svg;t.addEventListener("dblclick",a=>{a.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value)}),t.addEventListener("mousedown",a=>{if(a.button===1){a.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value);return}});const e=a=>{a.button===0&&(a.preventDefault(),this.isDragging=!0,this.startX=a.clientX,this.startY=a.clientY,this.startValue=this.value,document.body.classList.add("knob-dragging"))},i=a=>{if(!this.isDragging)return;const r=a.clientX-this.startX,l=this.startY-a.clientY+r,c=this.config.max-this.config.min,h=.45*(a.shiftKey?.25:1),d=l*h*c/220;let f=this.startValue+d;f=Math.max(this.config.min,Math.min(this.config.max,f)),f=Math.round(f/this.config.step)*this.config.step,f!==this.value&&(this.value=f,this.updateVisuals(),this.onChange(this.value))},n=()=>{this.isDragging=!1,document.body.classList.remove("knob-dragging")};t.addEventListener("mousedown",e),document.addEventListener("mousemove",i),document.addEventListener("mouseup",n),t.addEventListener("touchstart",a=>{a.preventDefault(),this.isDragging=!0,this.startX=a.touches[0].clientX,this.startY=a.touches[0].clientY,this.startValue=this.value}),document.addEventListener("touchmove",a=>{if(!this.isDragging)return;const r=a.touches[0].clientX-this.startX,l=this.startY-a.touches[0].clientY+r,c=this.config.max-this.config.min,u=l*.45*c/220;let h=this.startValue+u;h=Math.max(this.config.min,Math.min(this.config.max,h)),h=Math.round(h/this.config.step)*this.config.step,h!==this.value&&(this.value=h,this.updateVisuals(),this.onChange(this.value))}),document.addEventListener("touchend",()=>{this.isDragging=!1})}getValue(){return this.value}setValue(t){this.value=Math.max(this.config.min,Math.min(this.config.max,t)),this.value=Math.round(this.value/this.config.step)*this.config.step,this.updateVisuals()}setMax(t){this.config.max=t,this.value>t&&(this.value=t,this.onChange(this.value)),this.updateVisuals()}getElement(){return this.container}}class Si{static quantize(t,e){const i=Math.pow(2,e);let n=Math.floor((t+1)*.5*i);return n=Math.max(0,Math.min(i-1,n)),n/(i-1)*2-1}static getSamples(t,e,i=.1){const n=Math.floor(e*i),a=new Float32Array(n),r=new Float32Array(n);for(let o=0;o<n;o++){const l=o/e;a[o]=Math.sin(2*Math.PI*t*l),r[o]=l}return{samples:a,sampleTimes:r,duration:i}}static getAliasedFrequency(t,e){const i=e/2;if(t<=i)return t;const n=Math.floor((t+i)/e);return Math.abs(t-n*e)}static getAliasingInfo(t,e){const i=e/2,n=t>i,a=this.getAliasedFrequency(t,e);return{nyquistFreq:i,isAliasing:n,aliasedFreq:a}}static generateAudioForPlayback(t,e,i,n=32){const r=Math.floor(44100*i),o=new Float32Array(r),l=Math.round(t/e),c=t-l*e,u=Math.abs(c);if(u===0)return o;const h=c===0?1:Math.sign(c);for(let d=0;d<r;d++){const f=d/44100,g=h*Math.sin(2*Math.PI*u*f);o[d]=this.quantize(g,n)}return o}static convolve(t,e){const i=t.length+e.length-1,n=new Float32Array(i);for(let a=0;a<i;a++){let r=0;for(let o=0;o<e.length;o++){const l=a-o;l>=0&&l<t.length&&(r+=t[l]*e[o])}n[a]=r}return n}static normalizePeak(t,e=.95){let i=0;for(let r=0;r<t.length;r++)i=Math.max(i,Math.abs(t[r]));if(i<1e-8)return t;const n=e/i,a=new Float32Array(t.length);for(let r=0;r<t.length;r++)a[r]=t[r]*n;return a}}class Xn{constructor(t){v(this,"canvas");v(this,"ctx");v(this,"container");v(this,"options");v(this,"dpr",1);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.1)",...t},this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas()}createContainer(){const t=document.createElement("div");t.className="wave-display";const e=document.createElement("canvas");return e.className="wave-canvas",t.appendChild(e),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas()}clear(){this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t,height:e}=this.options,i=e/2;this.ctx.font="600 12px JetBrains Mono",this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.textAlign="left",this.ctx.fillText(this.options.label,10,15),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath();const n=8;for(let a=1;a<n;a++){const r=t/n*a;this.ctx.moveTo(r,0),this.ctx.lineTo(r,e)}this.ctx.moveTo(0,i),this.ctx.lineTo(t,i),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255,255,255,0.05)",this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(t,e),this.ctx.stroke()}drawWave(t,e,i=.8,n,a=2,r,o=0){const{width:l,height:c}=this.options,u=c/2,d=c-2*20;this.ctx.shadowBlur=8,this.ctx.shadowColor=n,this.ctx.strokeStyle=n,this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.lineJoin="round";const f=l,g=.008;for(let _=0;_<=f;_++){const m=_/f*l,p=m/l*g,y=e-g+p,x=2*Math.PI*t*y+o;let M=Math.sin(x);r!==void 0&&(M=Si.quantize(M,r));const A=u-M*i*d/2;_===0?this.ctx.moveTo(m,A):this.ctx.lineTo(m,A)}this.ctx.stroke(),this.ctx.shadowBlur=0}drawSincReconstruction(t,e,i,n,a=.8,r,o=2){if(t.length===0)return;const{width:l,height:c}=this.options,u=c/2,d=c-2*20,f=g=>{if(Math.abs(g)<1e-10)return 1;const _=Math.PI*g;return Math.sin(_)/_};this.ctx.save(),this.ctx.shadowBlur=8,this.ctx.shadowColor=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=o,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath();for(let g=0;g<=l;g++){const _=i+g/l*n;let m=0;for(const y of t){const x=(_-y.time)*e;m+=y.value*f(x)}m=Math.max(-1.15,Math.min(1.15,m));const p=u-m*a*d/2;g===0?this.ctx.moveTo(0,p):this.ctx.lineTo(g,p)}this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawQuantizationStaircase(t,e){if(t.length<2)return;this.ctx.save(),this.ctx.strokeStyle=e,this.ctx.lineWidth=2,this.ctx.shadowBlur=8,this.ctx.shadowColor=e,this.ctx.globalAlpha=.75,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let n=0;n<t.length-1;n++){const a=t[n],r=t[n+1];this.ctx.lineTo(r.x,a.y),this.ctx.lineTo(r.x,r.y)}const i=t[t.length-1];this.ctx.lineTo(this.options.width,i.y),this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawSmoothCurve(t,e,i=1.5,n=1){if(!(t.length<2)){this.ctx.save(),this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.strokeStyle=e,this.ctx.lineWidth=i,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=n,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let a=1;a<t.length;a++)this.ctx.lineTo(t[a].x,t[a].y);this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.shadowBlur=0,this.ctx.restore()}}drawSamplePoints(t,e,i=!0){if(t.length===0)return;const n=this.options.height/2;i&&(this.ctx.strokeStyle=e,this.ctx.lineWidth=1.5,this.ctx.globalAlpha=.6,this.ctx.beginPath(),t.forEach((a,r)=>{r===0?this.ctx.moveTo(a.x,a.y):this.ctx.lineTo(a.x,a.y)}),this.ctx.stroke(),this.ctx.globalAlpha=1),t.forEach(a=>{this.ctx.strokeStyle=e,this.ctx.globalAlpha=.2,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(a.x,n),this.ctx.lineTo(a.x,a.y),this.ctx.stroke()}),t.forEach(a=>{this.ctx.globalAlpha=1,this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(a.x,a.y,3,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=0}getElement(){return this.container}}class ml{constructor(t){v(this,"container");v(this,"items",new Map);this.container=this.createPanel(t)}createPanel(t){const e=document.createElement("div");return e.className="info-panel",t.forEach(i=>{const n=this.createItem(i);this.items.set(i.label,n),e.appendChild(n)}),e}createItem(t){const e=document.createElement("div");e.className="info-item";const i=document.createElement("div");i.className="info-item-label",i.textContent=t.label;const n=document.createElement("div");return n.className="info-item-value",t.warning&&n.classList.add("warning"),n.textContent=t.value,e.appendChild(i),e.appendChild(n),e}updateItem(t,e,i=!1){const n=this.items.get(t);if(n){const a=n.querySelector(".info-item-value");a&&(a.textContent=e,i?a.classList.add("warning"):a.classList.remove("warning"))}}getElement(){return this.container}}const ki=class ki{constructor(){v(this,"context",null);v(this,"workletReady",!1)}static getInstance(){return ki.instance||(ki.instance=new ki),ki.instance}async getContext(t){return this.context||(this.context=new AudioContext(t?{sampleRate:t}:void 0)),this.context.state==="suspended"&&this.context.resume().catch(()=>{}),await this.ensureWorklet(),this.context}async ensureWorklet(){if(!this.context||this.workletReady)return;await this.context.audioWorklet.addModule("/visualization/worklets/dsp-processor.js"),this.workletReady=!0}async createDspNode(t){const e=await this.getContext();return new AudioWorkletNode(e,"shared-dsp-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCountMode:"explicit",channelInterpretation:"speakers",...t})}async decodeAudioData(t){return await(await this.getContext()).decodeAudioData(t)}async createBuffer(t,e,i){return(await this.getContext()).createBuffer(t,e,i)}async createBufferSource(){return(await this.getContext()).createBufferSource()}async createGain(){return(await this.getContext()).createGain()}async createAnalyser(){return(await this.getContext()).createAnalyser()}async createConvolver(){return(await this.getContext()).createConvolver()}getCurrentTime(){var t;return((t=this.context)==null?void 0:t.currentTime)??0}getState(){var t;return((t=this.context)==null?void 0:t.state)??"closed"}};v(ki,"instance",null);let Ze=ki;function Mt(s,t=!0){const e=new URLSearchParams(window.location.search);if(!e.has(s))return t;const i=e.get(s).toLowerCase();return i!=="0"&&i!=="false"&&i!=="off"&&i!=="no"}function ts(s){return new URLSearchParams(window.location.search).get(s)}function es(s){const t="/visualization/",e=new URL(t,window.location.origin);return new URL(s.replace(/^\//,""),e).href}class lc{constructor(t){v(this,"ui",{frequencyKnob:Mt("frequencyKnob",!0),sampleRateKnob:Mt("sampleRateKnob",!0),bitDepthKnob:Mt("bitDepthKnob",!0),phaseKnob:Mt("phaseKnob",!0),playButton:Mt("playButton",!0),infoPanel:Mt("infoPanel",!0),originalDisplay:Mt("originalDisplay",!0),sampledDisplay:Mt("sampledDisplay",!0),quantizedDisplay:Mt("quantizedDisplay",!0),reconstructedDisplay:Mt("reconstructedDisplay",!0)});v(this,"frequency",1e3);v(this,"sampleRate",2e3);v(this,"bitDepth",16);v(this,"phaseDeg",0);v(this,"speed",.1);v(this,"audioEngine");v(this,"dspNode",null);v(this,"outputGain",null);v(this,"frequencyKnob");v(this,"sampleRateKnob");v(this,"bitDepthKnob");v(this,"phaseKnob");v(this,"playButton");v(this,"infoPanel");v(this,"originalDisplay");v(this,"sampledDisplay");v(this,"quantizedDisplay");v(this,"reconstructedDisplay");v(this,"container");v(this,"isPlaying",!1);v(this,"animationId",null);v(this,"time",0);v(this,"lastTimestamp",0);v(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.audioEngine=Ze.getInstance(),this.init()}init(){this.createUI(),window.addEventListener("resize",this.onResize),this.startAnimation()}getDisplayWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=document.createElement("div");t.className="displays-container";const n={width:this.getDisplayWidth(),height:220,backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)"};this.ui.originalDisplay&&(this.originalDisplay=new Xn({...n,label:"Original"}),t.appendChild(this.originalDisplay.getElement())),this.ui.sampledDisplay&&(this.sampledDisplay=new Xn({...n,label:"Sampled"}),t.appendChild(this.sampledDisplay.getElement())),this.ui.quantizedDisplay&&(this.quantizedDisplay=new Xn({...n,label:"Quantized"}),t.appendChild(this.quantizedDisplay.getElement())),this.ui.reconstructedDisplay&&(this.reconstructedDisplay=new Xn({...n,label:"Reconstructed"}),t.appendChild(this.reconstructedDisplay.getElement()));const a=document.createElement("div");a.className="controls-container",this.ui.infoPanel&&(this.infoPanel=new ml([{label:"Nyquist",value:"1000 Hz"},{label:"Alias",value:"—"}]));const r=document.createElement("div");r.className="knobs-wrapper";const o={min:10,max:1e4,value:this.frequency,step:100,label:"Input freq",unit:"Hz"},l={min:100,max:2e3,value:this.sampleRate,step:100,label:"Sample rate",unit:"Hz"},c={min:1,max:16,value:this.bitDepth,step:1,label:"Bit depth",unit:"bits"},u={min:0,max:360,value:this.phaseDeg,step:1,label:"Phase",unit:"°"};this.ui.frequencyKnob&&(this.frequencyKnob=new Hi(o,h=>{this.frequency=h,this.time=0,this.updateInfoPanel(),this.updateAudio()}),r.appendChild(this.frequencyKnob.getElement())),this.ui.sampleRateKnob&&(this.sampleRateKnob=new Hi(l,h=>{this.sampleRate=h,this.time=0,this.updateInfoPanel(),this.updateAudio()}),r.appendChild(this.sampleRateKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new Hi(c,h=>{this.bitDepth=h,this.updateAudio()}),r.appendChild(this.bitDepthKnob.getElement())),this.ui.phaseKnob&&(this.phaseKnob=new Hi(u,h=>{this.phaseDeg=h,this.updateAudio()}),r.appendChild(this.phaseKnob.getElement())),this.ui.playButton&&(this.playButton=document.createElement("button"),this.playButton.className="transport-btn sine-play-btn",this.playButton.title="Play",this.playButton.setAttribute("aria-label","Play"),this.playButton.innerHTML=this.playIcon(),this.playButton.addEventListener("click",()=>this.toggleAudio())),this.infoPanel&&a.appendChild(this.infoPanel.getElement()),r.childElementCount>0&&a.appendChild(r),this.playButton&&a.appendChild(this.playButton),this.container.appendChild(t),this.container.appendChild(a),this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){var i,n,a,r;const t=this.getDisplayWidth(),e=220;(i=this.originalDisplay)==null||i.resize(t,e),(n=this.sampledDisplay)==null||n.resize(t,e),(a=this.quantizedDisplay)==null||a.resize(t,e),(r=this.reconstructedDisplay)==null||r.resize(t,e)}startAnimation(){const t=e=>{this.lastTimestamp===0&&(this.lastTimestamp=e);const i=(e-this.lastTimestamp)/1e3;this.lastTimestamp=e,this.speed>0&&(this.time+=i*this.speed*.005),this.updateAnimation(),this.animationId=requestAnimationFrame(t)};this.animationId=requestAnimationFrame(t)}updateAnimation(){this.renderDisplays()}renderDisplays(){this.renderOriginalSignal(),this.renderSampledSignal(),this.renderQuantizedSignal(),this.renderReconstructedSignal()}renderOriginalSignal(){this.originalDisplay&&(this.originalDisplay.clear(),this.originalDisplay.drawGrid(),this.originalDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"#52cffe",2))}get phaseRad(){return this.phaseDeg*Math.PI/180}phaseTimeOffset(t){return t<=0?0:this.phaseRad/(2*Math.PI*t)}renderSampledSignal(){if(!this.sampledDisplay)return;this.sampledDisplay.clear(),this.sampledDisplay.drawGrid(),this.sampledDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(82, 208, 254, 0.2)",1);const t=this.canvasSamplePoints(this.frequency);this.sampledDisplay.drawSamplePoints(t,"#ff4d6d",!1)}renderQuantizedSignal(){if(!this.quantizedDisplay)return;this.quantizedDisplay.clear(),this.quantizedDisplay.drawGrid(),this.quantizedDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(74, 222, 128, 0.15)",1);const t=this.quantizedDisplay.getElement().querySelector("canvas"),e=(t==null?void 0:t.getContext("2d"))??null,i=(t==null?void 0:t.offsetWidth)??this.getDisplayWidth(),n=(t==null?void 0:t.offsetHeight)??220,a=n/2,o=n-2*20;if(e){const c=Math.min(2**this.bitDepth,64);e.save(),e.strokeStyle="rgba(74, 222, 128, 0.15)",e.lineWidth=1;for(let u=0;u<=c;u++){const h=-1+2*u/c,d=Si.quantize(h,this.bitDepth),f=a-d*.8*o/2;e.beginPath(),e.moveTo(0,f),e.lineTo(i,f),e.stroke()}e.restore()}const l=this.canvasSamplePoints(this.frequency,this.bitDepth);if(e&&l.length>0){e.save(),e.strokeStyle="#4ade80",e.lineWidth=1.5,e.globalAlpha=.8;for(const c of l)e.beginPath(),e.moveTo(c.x,a),e.lineTo(c.x,c.y),e.stroke();e.restore()}this.quantizedDisplay.drawSamplePoints(l,"#4ade80",!1)}renderReconstructedSignal(){if(!this.reconstructedDisplay)return;this.reconstructedDisplay.clear(),this.reconstructedDisplay.drawGrid();const t=.008,e=this.time-t,i=this.rawSamples(this.frequency,this.bitDepth,30);this.reconstructedDisplay.drawSincReconstruction(i,this.sampleRate,e,t,.8,"#ffd700",2);const n=this.canvasSamplePoints(this.frequency,this.bitDepth);this.reconstructedDisplay.drawSamplePoints(n,"#ffd700",!1)}rawSamples(t,e,i=30){const a=this.time-.008,r=this.time,o=Math.ceil(a*this.sampleRate)-i,l=Math.floor(r*this.sampleRate)+i,c=[];for(let u=o;u<=l;u++){const h=u/this.sampleRate,d=2*Math.PI*t*h+this.phaseRad;let f=Math.sin(d);e!==void 0&&(f=Si.quantize(f,e)),c.push({time:h,value:f})}return c}canvasSamplePoints(t,e){const i=this.originalDisplay??this.sampledDisplay??this.reconstructedDisplay,n=(i==null?void 0:i.getElement().querySelector("canvas"))??null,a=(n==null?void 0:n.offsetWidth)??this.getDisplayWidth(),r=(n==null?void 0:n.offsetHeight)??220,o=r/2,c=r-2*20,u=.008,h=this.time-u,d=this.time,f=Math.ceil(h*this.sampleRate),g=[];let _=f;for(;;){const m=_/this.sampleRate;if(m>d)break;const y=(m-h)/u*a,x=2*Math.PI*t*m+this.phaseRad;let M=Math.sin(x);e!==void 0&&(M=Si.quantize(M,e));const A=o-M*.8*c/2;g.push({x:y,y:A}),_++}return g}updateInfoPanel(){if(!this.infoPanel)return;const t=Si.getAliasingInfo(this.frequency,this.sampleRate),e=t.nyquistFreq>=1e3?`${(t.nyquistFreq/1e3).toFixed(1)}kHz`:`${t.nyquistFreq.toFixed(0)}Hz`;if(this.infoPanel.updateItem("Nyquist",e),t.isAliasing){const i=t.aliasedFreq>=1e3?`${(t.aliasedFreq/1e3).toFixed(1)}kHz`:`${t.aliasedFreq.toFixed(0)}Hz`;this.infoPanel.updateItem("Alias",i,!0)}else this.infoPanel.updateItem("Alias","Clean",!1)}updatePlayButton(){this.playButton&&(this.playButton.innerHTML=this.isPlaying?this.stopIcon():this.playIcon(),this.playButton.title=this.isPlaying?"Stop":"Play",this.playButton.setAttribute("aria-label",this.isPlaying?"Stop":"Play"),this.playButton.classList.toggle("active",this.isPlaying))}playIcon(){return'<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor"><polygon points="4,2 18,10 4,18"/></svg>'}stopIcon(){return'<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor"><rect x="3" y="3" width="14" height="14" rx="2"/></svg>'}toggleAudio(){this.isPlaying?this.stopAudio():this.playAudio()}async playAudio(){await this.ensureAudioGraph(),this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:"tone"}),this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad}),this.isPlaying=!0,this.updatePlayButton())}updateAudio(){this.isPlaying&&this.dspNode&&this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad})}stopAudio(){this.dspNode&&this.dspNode.port.postMessage({type:"setMode",mode:"passthrough"}),this.isPlaying=!1,this.updatePlayButton()}async ensureAudioGraph(){if(this.dspNode&&this.outputGain)return;const t=await this.audioEngine.getContext();this.dspNode=await this.audioEngine.createDspNode({numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.outputGain=await this.audioEngine.createGain(),this.outputGain.gain.value=.9,this.dspNode.connect(this.outputGain),this.outputGain.connect(t.destination)}destroy(){var t,e;this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onResize),this.stopAudio(),(t=this.dspNode)==null||t.disconnect(),(e=this.outputGain)==null||e.disconnect(),this.dspNode=null,this.outputGain=null}}class Gi{constructor(t){v(this,"overlayCanvas");v(this,"ctx");v(this,"glCanvas");v(this,"gl",null);v(this,"container");v(this,"options");v(this,"glProgram",null);v(this,"glPosBuffer",null);v(this,"glResolutionLoc",null);v(this,"glColorLoc",null);v(this,"glPosAttribLoc",-1);v(this,"dpr",1);v(this,"minLogFreq",20);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)",minFreq:-24e3,maxFreq:24e3,minDb:-120,maxDb:20,logScale:!1,...t},this.container=this.createContainer(),this.glCanvas=this.container.querySelector(".spectrum-webgl"),this.overlayCanvas=this.container.querySelector(".spectrum-canvas"),this.ctx=this.overlayCanvas.getContext("2d",{alpha:!0}),this.gl=this.glCanvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0}),this.setupCanvas(),this.initGL()}createContainer(){const t=document.createElement("div");t.className="spectrum-display";const e=document.createElement("canvas");e.className="spectrum-webgl";const i=document.createElement("canvas");return i.className="spectrum-canvas",t.appendChild(e),t.appendChild(i),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.overlayCanvas.width=this.options.width*this.dpr,this.overlayCanvas.height=this.options.height*this.dpr,this.glCanvas.width=this.options.width*this.dpr,this.glCanvas.height=this.options.height*this.dpr,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.gl&&this.gl.viewport(0,0,this.glCanvas.width,this.glCanvas.height)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas(),this.clear()}initGL(){if(!this.gl)return;const t=`
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
    `,i=this.createShader(this.gl.VERTEX_SHADER,t),n=this.createShader(this.gl.FRAGMENT_SHADER,e);if(!i||!n)return;const a=this.gl.createProgram();a&&(this.gl.attachShader(a,i),this.gl.attachShader(a,n),this.gl.linkProgram(a),this.gl.getProgramParameter(a,this.gl.LINK_STATUS)&&(this.glProgram=a,this.glPosBuffer=this.gl.createBuffer(),this.glPosAttribLoc=this.gl.getAttribLocation(a,"a_position"),this.glResolutionLoc=this.gl.getUniformLocation(a,"u_resolution"),this.glColorLoc=this.gl.getUniformLocation(a,"u_color"),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)))}createShader(t,e){if(!this.gl)return null;const i=this.gl.createShader(t);return!i||(this.gl.shaderSource(i,e),this.gl.compileShader(i),!this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS))?null:i}clear(){this.gl&&(this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t}=this.options;this.ctx.font="600 11px JetBrains Mono",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)",this.ctx.textAlign="left",this.ctx.fillText(this.options.label,10,20),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath(),[-100,-80,-60,-40,-20,0].forEach(i=>{if(i>=this.options.minDb&&i<=this.options.maxDb){const n=this.dbToY(i);this.ctx.moveTo(0,n),this.ctx.lineTo(t,n)}}),this.ctx.stroke()}drawFreqAxis(t=5){const{width:e,height:i,minFreq:n,maxFreq:a}=this.options;if(a<=n)return;const r=i-4;this.ctx.strokeStyle="rgba(255, 255, 255, 0.2)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,r),this.ctx.lineTo(e,r),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.4)",this.ctx.font="10px 'JetBrains Mono', monospace",this.ctx.textAlign="center";const o=this.options.logScale?this.logTickFreqs():Array.from({length:t+1},(l,c)=>n+c/t*(a-n));for(const l of o){const c=this.freqToX(l);this.ctx.beginPath(),this.ctx.moveTo(c,r-4),this.ctx.lineTo(c,r),this.ctx.stroke();const u=Math.abs(l)>=1e3?`${(l/1e3).toFixed(1)}k`:`${Math.round(l)}`;this.ctx.fillText(u,c,i-1)}}logTickFreqs(){const t=Math.max(this.minLogFreq,this.options.minFreq),e=this.options.maxFreq;return[20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4].filter(n=>n>=t&&n<=e)}drawSamplingGrid(t){const e=t/2,{height:i}=this.options,n=(a,r,o,l)=>{const c=this.freqToX(a);c<0||c>this.options.width||(this.ctx.strokeStyle=r,this.ctx.lineWidth=1.5,l?this.ctx.setLineDash([4,4]):this.ctx.setLineDash([]),this.ctx.globalAlpha=.6,this.ctx.beginPath(),this.ctx.moveTo(c,0),this.ctx.lineTo(c,i),this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=r,this.ctx.font="10px JetBrains Mono",this.ctx.textAlign="center",this.ctx.fillText(o,c,i-10))};n(0,"rgba(255,255,255,0.6)","DC (0 Hz)",!1),n(e,"#00ff00",`+Fn (${(e/1e3).toFixed(1)}k)`,!0),n(-e,"#00ff00","-Fn",!0),n(t,"rgba(255,255,255,0.3)","+Fs",!0),n(-t,"rgba(255,255,255,0.3)","-Fs",!0),n(t*2,"rgba(255,255,255,0.3)","+2Fs",!0),n(-t*2,"rgba(255,255,255,0.3)","-2Fs",!0)}drawLowPassOverlay(t,e=!1){const{width:i,height:n,maxFreq:a,minDb:r,maxDb:o}=this.options,l=Math.max(0,t),c=e?"#ff7b5c":"#ff9a4d",u=e?"rgba(255, 123, 92, 0.10)":"rgba(255, 154, 77, 0.07)",h=256,d=new Float32Array(h*2);for(let g=0;g<h;g++){const _=g/(h-1)*i,m=g/(h-1)*a,p=l>1?m/l:1e6,y=1/Math.sqrt(1+Math.pow(p,4)),x=Math.max(r,Math.min(o,20*Math.log10(y+1e-8))),M=this.dbToY(x);d[g*2]=_+i/2,d[g*2+1]=M}this.ctx.save(),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.rect(0,0,i,n),this.ctx.fill(),this.ctx.restore(),this.drawLineGPU(d,c,e?.95:.8);const f=new Float32Array(h*2);for(let g=0;g<h;g++)f[g*2]=i-d[g*2],f[g*2+1]=d[g*2+1];this.drawLineGPU(f,c,e?.95:.8),this.ctx.strokeStyle=c,this.ctx.lineWidth=e?1.8:1.2,this.ctx.globalAlpha=e?.85:.65,this.ctx.beginPath();for(let g=0;g<h;g++){const _=d[g*2],m=d[g*2+1];g===0?this.ctx.moveTo(_,m):this.ctx.lineTo(_,m)}this.ctx.stroke(),this.ctx.beginPath();for(let g=0;g<h;g++){const _=f[g*2],m=f[g*2+1];g===0?this.ctx.moveTo(_,m):this.ctx.lineTo(_,m)}this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=c,this.ctx.font="700 10px JetBrains Mono",this.ctx.textAlign="left",this.ctx.fillText(`LPF ${Math.round(l)} Hz`,Math.min(i-90,i/2+8),14)}drawSpectrum(t,e,i,n=2,a=1,r=!1){if(t.length===0||e.length===0)return;const o=new Float32Array(t.length*2);for(let l=0;l<t.length;l++){const c=t[l];let u=e[l];u<this.options.minDb&&(u=this.options.minDb),o[l*2]=this.freqToX(c),o[l*2+1]=this.dbToY(u)}this.drawLineGPU(o,i,a),r&&this.drawAreaGPU(o,i,Math.min(.35,a*.35))}drawLineGPU(t,e,i){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const n=this.parseColor(e,i);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,n[0],n[1],n[2],n[3]),this.gl.drawArrays(this.gl.LINE_STRIP,0,t.length/2)}drawAreaGPU(t,e,i){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const n=this.dbToY(this.options.minDb),a=new Float32Array(t.length*2);for(let o=0;o<t.length/2;o++)a[o*4]=t[o*2],a[o*4+1]=n,a[o*4+2]=t[o*2],a[o*4+3]=t[o*2+1];const r=this.parseColor(e,i);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,a,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,r[0],r[1],r[2],r[3]),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,a.length/2)}parseColor(t,e){if(t.startsWith("#")){const n=t.slice(1),a=n.length===3?n.split("").map(o=>o+o).join(""):n,r=parseInt(a,16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255,e]}const i=t.match(/rgba?\(([^)]+)\)/);if(i){const n=i[1].split(",").map(c=>c.trim()),a=Number(n[0])/255,r=Number(n[1])/255,o=Number(n[2])/255,l=n[3]!==void 0?Number(n[3])*e:e;return[a,r,o,l]}return[.32,.81,1,e]}freqToX(t){if(this.options.logScale){const i=Math.max(this.minLogFreq,this.options.minFreq),n=Math.max(i*1.001,this.options.maxFreq),a=Math.max(i,Math.abs(t));return(Math.log10(a)-Math.log10(i))/(Math.log10(n)-Math.log10(i))*this.options.width}const e=this.options.maxFreq-this.options.minFreq;return(t-this.options.minFreq)/e*this.options.width}dbToY(t){const e=this.options.maxDb-this.options.minDb;return(this.options.maxDb-t)/e*this.options.height}getElement(){return this.container}}class Xa{constructor(t,e){v(this,"container");v(this,"input");v(this,"valueDisplay");v(this,"onChange");v(this,"config");this.config=t,this.onChange=e,this.container=this.createContainer(),this.input=this.container.querySelector("input"),this.valueDisplay=this.container.querySelector(".slider-value"),this.setupEventListeners(),this.updateDisplay()}createContainer(){const t=document.createElement("div");return t.className="slider-container",t.innerHTML=`
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
    `,t}setupEventListeners(){this.input.addEventListener("input",()=>{const t=parseFloat(this.input.value);this.updateDisplay(),this.onChange(t)})}updateDisplay(){const t=parseFloat(this.input.value);let e;this.config.unit==="%"?e=t.toFixed(1):t>=1e3?e=`${(t/1e3).toFixed(1)}k`:e=t.toString(),this.valueDisplay.textContent=`${e} ${this.config.unit}`}getValue(){return parseFloat(this.input.value)}setValue(t){this.input.value=t.toString(),this.updateDisplay()}getElement(){return this.container}}class Dn{constructor(t,e){v(this,"container");v(this,"canvas");v(this,"ctx");v(this,"options");v(this,"onSeek");v(this,"waveformData",null);v(this,"sourceData",null);v(this,"duration",0);v(this,"playheadTime",0);v(this,"isDragging",!1);v(this,"dpr",1);this.options=t,this.onSeek=e,this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas(),this.attachListeners(),this.draw()}createContainer(){const t=document.createElement("div");t.className="timeline-panel";const e=document.createElement("div");e.className="timeline-title",e.textContent=this.options.title??"Audio";const i=document.createElement("canvas");return i.className="timeline-canvas",t.append(e,i),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}attachListeners(){const t=i=>{if(this.duration<=0)return;const n=this.canvas.getBoundingClientRect(),a=Math.max(0,Math.min(n.width,i-n.left)),o=(n.width>0?a/n.width:0)*this.duration;this.setPlayhead(o),this.onSeek(o)};this.canvas.addEventListener("pointerdown",i=>{this.isDragging=!0,this.canvas.setPointerCapture(i.pointerId),t(i.clientX)}),this.canvas.addEventListener("pointermove",i=>{this.isDragging&&t(i.clientX)});const e=()=>{this.isDragging=!1};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e)}setWaveformFromBuffer(t){this.sourceData=new Float32Array(t.getChannelData(0)),this.rebuildWaveformPeaks(),this.duration=t.duration,this.playheadTime=0,this.draw()}setWaveformFromArray(t,e){this.sourceData=new Float32Array(t),this.rebuildWaveformPeaks(),this.duration=e>0?t.length/e:0,this.playheadTime=0,this.draw()}rebuildWaveformPeaks(){if(!this.sourceData){this.waveformData=null;return}const t=this.sourceData,e=Math.max(1,this.options.width),i=Math.max(1,Math.floor(t.length/e)),n=new Float32Array(e);for(let a=0;a<e;a++){const r=a*i,o=Math.min(r+i,t.length);let l=0;for(let c=r;c<o;c++){const u=Math.abs(t[c]);u>l&&(l=u)}n[a]=l}this.waveformData=n}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(60,Math.floor(e)),this.setupCanvas(),this.sourceData&&this.rebuildWaveformPeaks(),this.draw()}setPlayhead(t){this.playheadTime=Math.max(0,Math.min(this.duration,t)),this.draw()}draw(){const{width:t,height:e}=this.options,i=e/2;if(this.ctx.clearRect(0,0,t,e),this.ctx.fillStyle="rgba(11, 16, 24, 0.92)",this.ctx.fillRect(0,0,t,e),this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,i),this.ctx.lineTo(t,i),this.ctx.stroke(),this.waveformData){this.ctx.strokeStyle="rgba(82, 207, 254, 0.95)",this.ctx.lineWidth=1.1,this.ctx.beginPath();for(let n=0;n<this.waveformData.length;n++){const a=this.waveformData[n],r=i-a*(e*.44),o=i+a*(e*.44);this.ctx.moveTo(n,r),this.ctx.lineTo(n,o)}this.ctx.stroke()}if(this.duration>0){const n=this.playheadTime/this.duration*t;this.ctx.strokeStyle="#ff9a4d",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(n,0),this.ctx.lineTo(n,e),this.ctx.stroke(),this.ctx.fillStyle="#ff9a4d",this.ctx.beginPath(),this.ctx.moveTo(n-6,0),this.ctx.lineTo(n+6,0),this.ctx.lineTo(n,8),this.ctx.closePath(),this.ctx.fill()}}getElement(){return this.container}}class In{constructor(t){v(this,"root");v(this,"playPauseBtn");v(this,"stopBtn");v(this,"loopBtn",null);v(this,"fileInput",null);v(this,"isPlaying",!1);v(this,"isLooping",!1);this.opts=t,this.root=document.createElement("div"),this.root.className="transport-bar";const e=document.createElement("div");if(e.className="transport-left",this.playPauseBtn=this.makeIconBtn(this.svgPlay(),"Play","transport-play"),this.playPauseBtn.addEventListener("click",()=>this.handlePlayPause()),this.stopBtn=this.makeIconBtn(this.svgStop(),"Stop","transport-stop"),this.stopBtn.addEventListener("click",()=>this.opts.onStop()),e.appendChild(this.playPauseBtn),e.appendChild(this.stopBtn),t.showLoop!==!1&&(this.isLooping=t.initialLoop??!1,this.loopBtn=this.makeIconBtn(this.svgLoop(),this.isLooping?"Loop: On":"Loop: Off","transport-loop"),this.loopBtn.classList.toggle("active",this.isLooping),this.loopBtn.addEventListener("click",()=>{var i,n;this.isLooping=!this.isLooping,this.loopBtn.classList.toggle("active",this.isLooping),this.loopBtn.title=this.isLooping?"Loop: On":"Loop: Off",(n=(i=this.opts).onLoopToggle)==null||n.call(i,this.isLooping)}),e.appendChild(this.loopBtn)),t.extraLeft&&e.appendChild(t.extraLeft),this.root.appendChild(e),t.showUpload!==!1&&t.onUpload){const i=document.createElement("div");i.className="transport-right";const n=document.createElement("label");n.className="transport-upload",n.title="Upload Audio",this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept=t.accept??"audio/*",this.fileInput.hidden=!0,this.fileInput.addEventListener("change",o=>{var c;const l=(c=o.target.files)==null?void 0:c[0];l&&t.onUpload(l),this.fileInput.value=""});const a=document.createElement("span");a.innerHTML=this.svgUpload();const r=document.createElement("span");r.className="transport-upload-text",r.textContent=t.uploadLabel??"Upload Audio",n.appendChild(this.fileInput),n.appendChild(a),n.appendChild(r),i.appendChild(n),this.root.appendChild(i)}}setPlaying(t){this.isPlaying=t,this.playPauseBtn.innerHTML=t?this.svgPause():this.svgPlay(),this.playPauseBtn.title=t?"Pause":"Play",this.playPauseBtn.classList.toggle("active",t)}getElement(){return this.root}getLooping(){return this.isLooping}setLooping(t){this.isLooping=t,this.loopBtn&&(this.loopBtn.classList.toggle("active",t),this.loopBtn.title=t?"Loop: On":"Loop: Off")}async handlePlayPause(){this.isPlaying?this.opts.onPause():await this.opts.onPlay()}makeIconBtn(t,e,i){const n=document.createElement("button");return n.className=`transport-btn ${i}`,n.title=e,n.innerHTML=t,n}svgPlay(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
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
    </svg>`}}function Jn({modes:s,value:t,onChange:e,className:i}){const n=document.createElement("div");i&&(n.className=i);const a=s.map(({value:r,label:o})=>{const l=document.createElement("button");return l.className="transport-mode-btn"+(r===t?" active":""),l.textContent=o,l.addEventListener("click",()=>{a.forEach(c=>c.classList.toggle("active",c===l)),e(r)}),n.appendChild(l),l});return n}function Dr(s){let t=1;for(;t<s;)t<<=1;return t}function is(s,t){const e=s.length;let i=0;for(let n=0;n<e-1;n++){if(n<i){let r=s[n];s[n]=s[i],s[i]=r,r=t[n],t[n]=t[i],t[i]=r}let a=e>>1;for(;a<=i;)i-=a,a>>=1;i+=a}for(let n=1;n<e;n<<=1){const a=n<<1,r=Math.PI/n;for(let o=0;o<n;o++){const l=-o*r,c=Math.cos(l),u=Math.sin(l);for(let h=o;h<e;h+=a){const d=h+n,f=c*s[d]-u*t[d],g=c*t[d]+u*s[d];s[d]=s[h]-f,t[d]=t[h]-g,s[h]+=f,t[h]+=g}}}}function qs(s){const t=s.length,e=new Float32Array(t),i=new Float32Array(t);return e.set(s),is(e,i),{re:e,im:i}}function cc(s,t,e=512){const i=Dr(Math.max(64,s.length)),n=new Float64Array(i),a=new Float64Array(i),r=Math.min(s.length,i);for(let h=0;h<r;h++){const d=.5*(1-Math.cos(2*Math.PI*h/Math.max(1,r-1)));n[h]=s[h]*d}is(n,a);const o=i/2,l=new Float32Array(e),c=new Float32Array(e),u=t/2;for(let h=0;h<e;h++){const d=h/(e-1)*u;l[h]=d;const f=Math.round(d/u*(o-1)),g=Math.sqrt(n[f]*n[f]+a[f]*a[f])/i;c[h]=Math.max(-120,20*Math.log10(g+1e-12))}return{freqs:l,magnitudesDb:c}}const me=class me{constructor(t){v(this,"container");v(this,"sharedAudio",Ze.getInstance());v(this,"audioContext",null);v(this,"sourceNode",null);v(this,"dspNode",null);v(this,"outputLpFilters",[]);v(this,"gainNode",null);v(this,"isPlaying",!1);v(this,"loop",!1);v(this,"isPaused",!1);v(this,"animationId",null);v(this,"onResize",()=>this.resizeDisplays());v(this,"rawAudioBuffer",null);v(this,"filteredBuffer",null);v(this,"targetSampleRate",32e3);v(this,"targetBitDepth",16);v(this,"lpfCutoff",22050);v(this,"startTime",0);v(this,"pausedAt",0);v(this,"isProcessing",!1);v(this,"pendingUpdate",!1);v(this,"lpfEditHighlightUntil",0);v(this,"originalSpectrum");v(this,"sampleRateSlider");v(this,"bitDepthKnob");v(this,"lpfKnob");v(this,"waveformTimeline");v(this,"transportBar");v(this,"infoPanel");v(this,"statusLabel");v(this,"playMode","original");v(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),modeSelector:Mt("modeSelector",!0),waveform:Mt("waveform",!0),spectrum:Mt("spectrum",!0),lpfKnob:Mt("lpfKnob",!0),bitDepthKnob:Mt("bitDepthKnob",!0),sampleRateSlider:Mt("sampleRateSlider",!0),infoPanel:Mt("infoPanel",!0)});v(this,"_windowData",new Float32Array(me.VIS_WINDOW_SIZE));v(this,"_fftReal",new Float64Array(me.VIS_WINDOW_SIZE));v(this,"_fftImag",new Float64Array(me.VIS_WINDOW_SIZE));v(this,"_fftMag",new Float32Array(me.VIS_NUM_BINS));v(this,"_basebandDb",new Float32Array(me.VIS_NUM_BINS));v(this,"_graphFreqs",new Float32Array(me.VIS_NUM_POINTS));v(this,"_baseGraph",new Float32Array(me.VIS_NUM_POINTS));v(this,"_copiesGraph",new Float32Array(me.VIS_NUM_POINTS));v(this,"_aliasingGraph",new Float32Array(me.VIS_NUM_POINTS));const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),await this.loadDefaultAudio()}createUI(){if(this.ui.transport){if(this.transportBar=new In({onPlay:()=>this.playAudio(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onLoopToggle:i=>{if(this.isPlaying&&this.audioContext){const n=this.currentPlaybackTime();this.pausedAt=n,this.startTime=this.audioContext.currentTime-n}this.loop=i,this.sourceNode&&(this.sourceNode.loop=i)},onUpload:i=>this.handleFileUpload(i),uploadLabel:"Upload",showUpload:this.ui.upload}),this.ui.modeSelector){const i=Jn({className:"transport-mode-group",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"aliased",label:"Processed"},{value:"alias_only",label:"Diff"}],onChange:n=>{this.playMode=n,this.isPlaying&&(this.stopAudio(!1),this.playAudio(n))}});this.transportBar.getElement().querySelector(".transport-left").appendChild(i)}this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())}else this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status transport-status--standalone",this.statusLabel.textContent="Loading…",this.container.appendChild(this.statusLabel);const t=Math.max(620,this.container.clientWidth-2);if(this.ui.waveform&&(this.waveformTimeline=new Dn({width:t,height:100,title:"Waveform"},i=>this.handlePlayheadSeek(i)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.spectrum){const i=document.createElement("div");i.className="spectrum-row",this.originalSpectrum=new Gi({width:t,height:280,label:"Spectrum",minFreq:-48e3,maxFreq:48e3}),i.appendChild(this.originalSpectrum.getElement()),this.container.appendChild(i)}if(this.ui.lpfKnob||this.ui.bitDepthKnob||this.ui.sampleRateSlider||this.ui.infoPanel){const i=document.createElement("div");i.className="controls-container audio-controls",this.ui.infoPanel&&(this.infoPanel=new ml([{label:"Nyquist",value:"5.5 kHz"},{label:"LPF cutoff",value:"22.0 kHz"}]));const n=document.createElement("div");n.className="knobs-wrapper",this.ui.lpfKnob&&(this.lpfKnob=new Hi({min:500,max:22050,value:this.lpfCutoff,step:100,label:"LPF",unit:"Hz"},o=>this.handleLPFChange(o)),n.appendChild(this.lpfKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new Hi({min:1,max:16,value:16,step:1,label:"Bit depth",unit:"bits"},o=>this.handleBitDepthChange(o)),n.appendChild(this.bitDepthKnob.getElement()));const a=document.createElement("div");a.className="middle-row-wrapper",n.childElementCount>0&&a.appendChild(n),this.ui.infoPanel&&this.infoPanel&&a.appendChild(this.infoPanel.getElement());const r=document.createElement("div");r.className="right-controls control-column",this.ui.sampleRateSlider&&(this.sampleRateSlider=new Xa({min:1e3,max:48e3,value:this.targetSampleRate,step:100,label:"Sample rate",unit:"Hz"},o=>this.handleSampleRateChange(o)),r.appendChild(this.sampleRateSlider.getElement())),a.childElementCount>0&&i.appendChild(a),r.childElementCount>0&&i.appendChild(r),this.container.appendChild(i)}this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){const t=Math.max(620,this.container.clientWidth-2);this.ui.spectrum&&this.originalSpectrum&&this.originalSpectrum.resize(t,280),this.ui.waveform&&this.waveformTimeline&&this.waveformTimeline.resize(t,100)}async loadDefaultAudio(){const t=ts("audio");if(console.log("[audio-app] location.search =",window.location.search,"| audioParam =",t),t){await this.loadAudioFromUrl(t);return}await this.loadBuiltInSweep()}async loadAudioFromUrl(t){this.statusLabel.textContent="Loading audio…";try{this.audioContext||(this.audioContext=await this.sharedAudio.getContext());const e=es(t);console.log("[audio-app] fetching",e);const i=await fetch(e);if(!i.ok)throw new Error(`HTTP ${i.status}`);const n=await i.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(n),this.pausedAt=0,await this.processAudioUpdate();const a=t.split("/").pop()??t;this.statusLabel.textContent=a}catch(e){console.error("[audio-app] failed to load default audio:",e),this.statusLabel.textContent="Error loading audio URL",await this.loadBuiltInSweep()}}async loadBuiltInSweep(){this.audioContext=await this.sharedAudio.getContext(44100),this.rawAudioBuffer=this.audioContext.createBuffer(2,132300,44100);const a=this.rawAudioBuffer.getChannelData(0);for(let o=0;o<132300;o++){const l=o/44100,c=100*Math.pow(22e3/100,l/3);a[o]=Math.sin(2*Math.PI*c*l)*.5}const r=this.rawAudioBuffer.getChannelData(1);for(let o=0;o<132300;o++){const l=o/44100,c=22e3*Math.pow(100/22e3,l/3);r[o]=Math.sin(2*Math.PI*c*l)*.5}await this.processAudioUpdate(),this.statusLabel.textContent="Default: sine sweep"}async handleFileUpload(t){this.statusLabel.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const e=await t.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(e),this.pausedAt=0,await this.processAudioUpdate(),this.statusLabel.textContent=t.name}catch{this.statusLabel.textContent="Error loading audio"}}handlePlayheadSeek(t){this.filteredBuffer&&(this.pausedAt=t,this.isPlaying?this.restartPlayback():this.updateVisualization())}handleLPFChange(t){this.lpfCutoff=t,this.lpfEditHighlightUntil=performance.now()+900,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.triggerProcessing()}handleSampleRateChange(t){this.targetSampleRate=t,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.syncOutputLpCutoff(),this.triggerProcessing()}handleBitDepthChange(t){this.targetBitDepth=t,this.syncRealtimeDspParams(),this.triggerProcessing()}triggerProcessing(){if(this.isPlaying||this.updateVisualization(),this.isProcessing){this.pendingUpdate=!0;return}this.processAudioUpdate()}async processAudioUpdate(){this.isProcessing=!0,this.pendingUpdate=!1,this.rawAudioBuffer&&(this.filteredBuffer=await this.createFilteredBuffer(this.rawAudioBuffer,this.lpfCutoff),this.pausedAt=Math.min(this.pausedAt,this.filteredBuffer.duration),this.waveformTimeline&&(this.waveformTimeline.setWaveformFromBuffer(this.filteredBuffer),this.waveformTimeline.setPlayhead(this.pausedAt))),this.isProcessing=!1,this.pendingUpdate&&this.processAudioUpdate(),this.isPlaying||this.updateVisualization()}updateInfoPanel(){if(!this.infoPanel)return;const t=this.targetSampleRate/2;this.infoPanel.updateItem("Nyquist",t>=1e3?`${(t/1e3).toFixed(1)} kHz`:`${t.toFixed(0)} Hz`),this.infoPanel.updateItem("LPF cutoff",this.lpfCutoff>=1e3?`${(this.lpfCutoff/1e3).toFixed(1)} kHz`:`${this.lpfCutoff.toFixed(0)} Hz`)}async createFilteredBuffer(t,e){const i=t.numberOfChannels,n=new OfflineAudioContext(i,t.length,t.sampleRate),a=n.createBufferSource();a.buffer=t;const r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.707;const o=n.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.707,a.connect(r),r.connect(o),o.connect(n.destination),a.start(),await n.startRendering()}async playAudio(t){var i;if(!this.filteredBuffer||!this.audioContext)return;this.isPlaying&&this.stopAudio(!1),this.playMode=t;let e;t==="original"?e=this.filteredBuffer:e=this.rawAudioBuffer??this.filteredBuffer,this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=e,this.sourceNode.loop=this.loop,this.gainNode=this.audioContext.createGain(),t==="aliased"||t==="alias_only"?(this.dspNode=await this.sharedAudio.createDspNode(),this.configureRealtimeDsp(t),this.sourceNode.connect(this.dspNode),this.connectOutputLowpass(this.dspNode).connect(this.gainNode)):this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{var n;this.isPlaying&&((n=this.sourceNode)!=null&&n.buffer)&&this.audioContext.currentTime-this.startTime>=this.sourceNode.buffer.duration-.1&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(i=this.transportBar)==null||i.setPlaying(!0),this.statusLabel.textContent=t==="original"?"Playing original":t==="aliased"?"Playing processed":"Playing diff",this.startRealtimeVisualization()}currentPlaybackTime(){var i,n,a;const t=((n=(i=this.sourceNode)==null?void 0:i.buffer)==null?void 0:n.duration)??((a=this.filteredBuffer)==null?void 0:a.duration)??0;if(!this.audioContext)return this.pausedAt;const e=this.audioContext.currentTime-this.startTime;return this.loop&&t>0?e%t:Math.min(e,t)}pauseAudio(){var t,e;!this.isPlaying||!this.audioContext||(this.pausedAt=this.currentPlaybackTime(),this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel.textContent="Paused",this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,i;this._teardownNodes(),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel.textContent="Stopped",this.filteredBuffer&&((i=this.waveformTimeline)==null||i.setPlayhead(this.pausedAt))}_teardownNodes(){var t,e,i,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(i=this.gainNode)==null||i.disconnect(),(n=this.dspNode)==null||n.disconnect();for(const a of this.outputLpFilters)a.disconnect();this.outputLpFilters=[],this.sourceNode=null,this.gainNode=null,this.dspNode=null}connectOutputLowpass(t){if(!this.audioContext)return t;const e=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);let i=t;this.outputLpFilters=[];for(let n=0;n<2;n++){const a=this.audioContext.createBiquadFilter();a.type="lowpass",a.frequency.value=e,a.Q.value=.707,i.connect(a),i=a,this.outputLpFilters.push(a)}return i}syncOutputLpCutoff(){if(!this.audioContext)return;const t=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);for(const e of this.outputLpFilters)e.frequency.value=t}restartPlayback(){if(!this.isPlaying)return;const t=this.playMode;this.stopAudio(!1),this.playAudio(t)}configureRealtimeDsp(t){this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:t==="alias_only"?"alias-diff":"alias-processed"}),this.syncRealtimeDspParams())}syncRealtimeDspParams(){!this.dspNode||!this.audioContext||this.dspNode.port.postMessage({type:"setAliasingParams",lpfCutoff:this.lpfCutoff,targetSampleRate:this.targetSampleRate,bitDepth:this.targetBitDepth,sourceSampleRate:this.audioContext.sampleRate})}updateVisualization(){if(!this.filteredBuffer||!this.ui.spectrum||!this.originalSpectrum)return;const t=me.VIS_WINDOW_SIZE,e=me.VIS_NUM_BINS,i=me.VIS_NUM_POINTS,n=this.filteredBuffer.sampleRate,a=Math.floor(this.pausedAt*n),o=Math.pow(2,this.targetBitDepth)/2,l=this.filteredBuffer.numberOfChannels;this._windowData.fill(0);for(let f=0;f<l;f++){const g=this.filteredBuffer.getChannelData(f);for(let _=0;_<t;_++){const m=a+_;if(m<g.length){const p=.5*(1-Math.cos(2*Math.PI*_/(t-1)));let y=g[m]*p;y=Math.round(y*o)/o,this._windowData[_]+=y}}}if(l>1){const f=1/l;for(let g=0;g<t;g++)this._windowData[g]*=f}this.computeFFT(this._windowData,this._fftMag);for(let f=0;f<e;f++)this._basebandDb[f]=20*Math.log10(this._fftMag[f]+1e-10);const c=f=>{const g=Math.abs(f);if(g>n/2)return-120;const _=Math.round(g/(n/2)*(e-1));return _>=e?-120:this._basebandDb[_]},u=-48e3,h=48e3,d=this.targetSampleRate;for(let f=0;f<i;f++){const g=u+f/(i-1)*(h-u);this._graphFreqs[f]=g,this._baseGraph[f]=c(g);let _=-120;const m=Math.ceil((g-n/2)/d),p=Math.floor((g+n/2)/d);for(let y=m;y<=p;y++){if(y===0)continue;const x=c(g-y*d);x>_&&(_=x)}this._copiesGraph[f]=_,this._aliasingGraph[f]=g>=-d/2&&g<=d/2?_:-120}this.originalSpectrum.clear(),this.originalSpectrum.drawGrid(),this.originalSpectrum.drawLowPassOverlay(this.lpfCutoff,performance.now()<this.lpfEditHighlightUntil),this.originalSpectrum.drawSamplingGrid(d),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._copiesGraph,"rgba(255,255,255,0.3)",1.5),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._aliasingGraph,"rgba(255,77,109,0.8)",2,1,!0),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._baseGraph,"#52cffe",2.5)}computeFFT(t,e){const i=t.length,n=this._fftReal,a=this._fftImag;for(let o=0;o<i;o++)n[o]=t[o],a[o]=0;is(n,a);const r=i/2;for(let o=0;o<r;o++)e[o]=Math.sqrt(n[o]*n[o]+a[o]*a[o])/i}startRealtimeVisualization(){const t=()=>{var e;!this.isPlaying||!this.audioContext||(this.pausedAt=this.currentPlaybackTime(),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.updateVisualization(),this.animationId=requestAnimationFrame(t))};t()}destroy(){this.stopAudio(!0),window.removeEventListener("resize",this.onResize),this.audioContext=null}};v(me,"VIS_WINDOW_SIZE",512),v(me,"VIS_NUM_POINTS",800),v(me,"VIS_NUM_BINS",me.VIS_WINDOW_SIZE/2);let Ya=me;function bi(s,t=""){const e=document.createElement("div");e.className=`viz-panel${t?` ${t}`:""}`;const i=document.createElement("div");return i.className="viz-panel-label",i.textContent=s,e.appendChild(i),e}function Sn(s,t,e,i="viz-canvas"){const n=window.devicePixelRatio||1,a=document.createElement("canvas");return a.className=i,a.width=t*n,a.height=e*n,a.getContext("2d").scale(n,n),s.appendChild(a),a}function Ei(s,t,e,i=0,n=0){const a=window.devicePixelRatio||1,r=Math.max(i,Math.floor(t)),o=Math.max(n,Math.floor(e));s.width=r*a,s.height=o*a;const l=s.getContext("2d");l.setTransform(1,0,0,1,0,0),l.scale(a,a)}function gl(s,t,e){const i=Math.min(window.devicePixelRatio||1,2),n=document.createElement("canvas");return n.className="viz-canvas viz-canvas--webgl",n.width=t*i,n.height=e*i,s.appendChild(n),n}function _l(s,t,e,i=0,n=0){const a=Math.min(window.devicePixelRatio||1,2),r=Math.max(i,Math.floor(t)),o=Math.max(n,Math.floor(e));s.width=r*a,s.height=o*a}function hc(s,t=-80){const e=Dr(s.length),i=new Float32Array(e);i.set(s.subarray(0,Math.min(s.length,e)));const{re:n,im:a}=qs(i),r=e/2,o=new Float32Array(r);for(let l=0;l<r;l++){const c=Math.sqrt(n[l]*n[l]+a[l]*a[l])/e;o[l]=Math.max(t,20*Math.log10(c+1e-10))}return o}function ha(s,t,e,i){const n=e/2,a=s/2,r=i/2,o=new Float32Array(i);for(let d=0;d<r;d++){const f=d/r*a,g=Math.exp(-.5*Math.pow((f-t)/n,2));o[d]=g,d>0&&d<r&&(o[i-d]=g)}const{re:l}=qs(o),c=new Float32Array(i);for(let d=0;d<i;d++)c[d]=l[d]/i;const u=new Float32Array(i),h=i/2;for(let d=0;d<i;d++)u[d]=c[(d+h)%i];for(let d=0;d<i;d++)u[d]*=.5*(1-Math.cos(2*Math.PI*d/(i-1)));return u}const zi=class zi{constructor(t){v(this,"container");v(this,"animId",null);v(this,"animTime",0);v(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),waveform:Mt("waveform",!0),ir:Mt("ir",!0),liveSpectrum:Mt("liveSpectrum",!0),staticSpectrum:Mt("staticSpectrum",!0),filterControls:Mt("filterControls",!0),modeSelector:Mt("modeSelector",!0)});v(this,"fCenter",1e3);v(this,"bandwidth",40);v(this,"nFft",4096);v(this,"sourceBuffer",null);v(this,"sourceSamples",null);v(this,"sourceSampleRate",44100);v(this,"sourceFullFftDb",null);v(this,"processedFullFftDb",null);v(this,"processedFftDirty",!0);v(this,"sharedAudio",Ze.getInstance());v(this,"audioCtx",null);v(this,"isPlaying",!1);v(this,"isPaused",!1);v(this,"pausedAt",0);v(this,"playbackStartedAt",0);v(this,"sourceNode",null);v(this,"convolver",null);v(this,"outputGain",null);v(this,"sourceAnalyser",null);v(this,"outputAnalyser",null);v(this,"dryGain",null);v(this,"playMode","filtered");v(this,"loop",!1);v(this,"convolverRebuildTimer",null);v(this,"transportBar");v(this,"statusLabel");v(this,"waveformTimeline");v(this,"sourceSpectrum");v(this,"processedSpectrum");v(this,"sourceStaticSpectrum");v(this,"processedStaticSpectrum");v(this,"irCanvas");v(this,"sourceFileLabel");v(this,"fCenterSlider");v(this,"bandwidthSlider");v(this,"liveSpecFreqs",new Float32Array(zi.SPEC_POINTS));v(this,"liveSpecDb",new Float32Array(zi.SPEC_POINTS));v(this,"analyserScratch",null);v(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),window.addEventListener("resize",this.onResize),this.startAnimation(),this.resizeLayout(),this.loadDefaultAudioClip()}async loadDefaultAudioClip(){var e,i;const t=ts("audio");if(t){this.statusLabel&&(this.statusLabel.textContent="Loading…");try{await this.initAudio();const a=await(await fetch(es(t))).arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(a),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate;const r=t.split("/").pop()??t;this.sourceFileLabel&&(this.sourceFileLabel.textContent=r),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(i=this.waveformTimeline)==null||i.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${r} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()}catch{this.statusLabel&&(this.statusLabel.textContent="Load error")}}}async initAudio(){this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.audioCtx.state==="suspended"&&await this.audioCtx.resume(),this.sourceAnalyser||(this.sourceAnalyser=this.audioCtx.createAnalyser(),this.sourceAnalyser.fftSize=2048,this.sourceAnalyser.smoothingTimeConstant=.7,this.analyserScratch=new Uint8Array(this.sourceAnalyser.frequencyBinCount)),this.outputAnalyser||(this.outputAnalyser=this.audioCtx.createAnalyser(),this.outputAnalyser.fftSize=2048,this.outputAnalyser.smoothingTimeConstant=.55,this.outputGain||(this.outputGain=this.audioCtx.createGain(),this.outputGain.gain.value=.8),this.outputAnalyser.connect(this.outputGain)),this.dryGain||(this.dryGain=this.audioCtx.createGain(),this.dryGain.gain.value=.8,this.sourceAnalyser.connect(this.dryGain)),this.updateAudioRouting()}updateAudioRouting(){if(!(!this.audioCtx||!this.outputGain||!this.dryGain)){try{this.outputGain.disconnect()}catch{}try{this.dryGain.disconnect()}catch{}this.playMode==="filtered"?this.outputGain.connect(this.audioCtx.destination):this.dryGain.connect(this.audioCtx.destination)}}buildFilterIR(){if(!this.audioCtx)return null;const t=this.audioCtx.sampleRate,e=ha(t,this.fCenter,this.bandwidth,this.nFft),i=this.audioCtx.createBuffer(1,e.length,t);return i.getChannelData(0).set(e),i}rebuildConvolver(){var e;if(!this.audioCtx||!this.sourceAnalyser||!this.outputAnalyser)return;const t=this.buildFilterIR();if(t){try{(e=this.convolver)==null||e.disconnect()}catch{}this.convolver=this.audioCtx.createConvolver(),this.convolver.normalize=!1,this.convolver.buffer=t,this.sourceAnalyser.connect(this.convolver),this.convolver.connect(this.outputAnalyser),this.processedFftDirty=!0}}scheduleConvolverRebuild(){this.convolverRebuildTimer!==null&&clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=setTimeout(()=>{this.convolverRebuildTimer=null,this.isPlaying&&this.rebuildConvolver(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()},250)}recomputeSourceFft(){if(!this.sourceSamples)return;const t=this.sourceSamples.subarray(0,Math.min(this.sourceSamples.length,65536));this.sourceFullFftDb=hc(t)}recomputeProcessedFftAsync(){if(!this.sourceSamples||!this.audioCtx)return;this.processedFftDirty=!1;const t=this.audioCtx.sampleRate,e=this.sourceSamples,i=ha(t,this.fCenter,this.bandwidth,this.nFft),n=Math.min(e.length,t*4),a=e.subarray(0,n),r=Dr(a.length+i.length-1),o=new Float32Array(r);o.set(a);const l=new Float32Array(r);l.set(i);const c=qs(o),u=qs(l),h=new Float32Array(r),d=new Float32Array(r);for(let m=0;m<r;m++)h[m]=c.re[m]*u.re[m]-c.im[m]*u.im[m],d[m]=c.re[m]*u.im[m]+c.im[m]*u.re[m];const f=new Float32Array(r);for(let m=0;m<r;m++)f[m]=h[m];const g=r/2,_=new Float32Array(g);for(let m=0;m<g;m++)_[m]=Math.max(-80,20*Math.log10(Math.sqrt(h[m]*h[m]+d[m]*d[m])/r+1e-10));this.processedFullFftDb=_}async startPlayback(){var t;if(await this.initAudio(),!!this.audioCtx){if(!this.sourceBuffer){this.statusLabel&&(this.statusLabel.textContent="Load audio first");return}this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.sourceBuffer,this.sourceNode.loop=this.loop,this.sourceNode.connect(this.sourceAnalyser),this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.audioCtx||!this.sourceBuffer||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.sourceBuffer.duration-.05&&this.stopPlayback(!0)},this.rebuildConvolver(),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.isPlaying=!0,this.isPaused=!1,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel&&(this.statusLabel.textContent=this.playMode==="filtered"?"Filtered":"Original")}}currentPlaybackTime(){if(!this.audioCtx||!this.sourceBuffer)return this.pausedAt;const t=this.sourceBuffer.duration,e=this.audioCtx.currentTime-this.playbackStartedAt;return this.loop&&t>0?e%t:Math.min(e,t)}pausePlayback(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.currentPlaybackTime(),this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent="Paused"),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopPlayback(t=!1){var e,i;this._teardownNodes(),this.convolverRebuildTimer!==null&&(clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent=this.sourceBuffer?"Stopped":"Load audio"),(i=this.waveformTimeline)==null||i.setPlayhead(this.pausedAt)}_teardownNodes(){var t,e,i;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect();try{(i=this.convolver)==null||i.disconnect()}catch{}this.sourceNode=null,this.convolver=null}async handleSourceClipUpload(t){var e,i;await this.initAudio(),this.statusLabel&&(this.statusLabel.textContent="Decoding…");try{const n=await t.arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(n),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate,this.sourceFileLabel&&(this.sourceFileLabel.textContent=t.name),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(i=this.waveformTimeline)==null||i.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${t.name} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync(),this.isPlaying&&(this.stopPlayback(!1),await this.startPlayback())}catch{this.statusLabel&&(this.statusLabel.textContent="Error loading audio")}}buildUI(){var a;document.body.classList.add("page-scroll");const t=document.createElement("div");t.className="zt-header",t.textContent="Z-transform",this.container.appendChild(t);const e=Math.max(600,this.container.clientWidth-2);if(this.ui.transport){if(this.transportBar=new In({onPlay:()=>this.startPlayback(),onPause:()=>this.pausePlayback(),onStop:()=>this.stopPlayback(!0),onUpload:r=>this.handleSourceClipUpload(r),uploadLabel:"Upload",showUpload:this.ui.upload,onLoopToggle:r=>{if(this.isPlaying&&this.audioCtx){const o=this.currentPlaybackTime();this.pausedAt=o,this.playbackStartedAt=this.audioCtx.currentTime-o}this.loop=r,this.sourceNode&&(this.sourceNode.loop=r)}}),this.ui.modeSelector){const r=Jn({className:"transport-mode-inline",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"filtered",label:"Filtered"}],onChange:o=>{this.playMode=o,this.updateAudioRouting(),this.statusLabel&&this.isPlaying&&(this.statusLabel.textContent=o==="filtered"?"Filtered":"Original")}});this.transportBar.getElement().querySelector(".transport-left").appendChild(r)}this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Load audio",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.sourceFileLabel=document.createElement("span"),this.sourceFileLabel.className="zt-source-file",this.sourceFileLabel.textContent="",(a=this.transportBar.getElement().querySelector(".transport-right"))==null||a.prepend(this.sourceFileLabel),this.container.appendChild(this.transportBar.getElement())}this.ui.waveform&&(this.waveformTimeline=new Dn({width:e,height:80,title:"Source"},r=>this.handlePlayheadSeek(r)),this.waveformTimeline.getElement().classList.add("timeline-panel--spaced"),this.container.appendChild(this.waveformTimeline.getElement()));let i=null;if(this.ui.filterControls){i=document.createElement("div"),i.className="zt-filter-panel";const r=document.createElement("div");r.className="zt-filter-title",r.textContent="Bandpass",i.appendChild(r);const o=document.createElement("div");o.className="zt-slider-row",this.fCenterSlider=new Xa({min:100,max:1e4,value:this.fCenter,step:50,label:"Center",unit:"Hz"},l=>{this.fCenter=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),this.bandwidthSlider=new Xa({min:10,max:2e3,value:this.bandwidth,step:10,label:"Bandwidth",unit:"Hz"},l=>{this.bandwidth=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),o.appendChild(this.fCenterSlider.getElement()),o.appendChild(this.bandwidthSlider.getElement()),i.appendChild(o)}if(this.ui.ir){const r=bi("Impulse response","viz-panel--label-lg viz-panel--spaced");this.irCanvas=Sn(r,e,80),this.container.appendChild(r)}const n=Math.floor((e-6)/2);if(this.ui.liveSpectrum){const r=document.createElement("div");r.className="zt-spectrum-row",this.sourceSpectrum=new Gi({width:n,height:200,label:"Source",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.sourceSpectrum.getElement()),this.processedSpectrum=new Gi({width:n,height:200,label:"Processed",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.processedSpectrum.getElement()),this.container.appendChild(r)}if(this.ui.staticSpectrum){const r=document.createElement("div");r.className="zt-spectrum-row",this.sourceStaticSpectrum=new Gi({width:n,height:200,label:"Source (full)",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.sourceStaticSpectrum.getElement()),this.processedStaticSpectrum=new Gi({width:n,height:200,label:"Processed (full)",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.processedStaticSpectrum.getElement()),this.container.appendChild(r)}i&&this.container.appendChild(i)}handlePlayheadSeek(t){var e;this.sourceBuffer&&(this.pausedAt=Math.max(0,Math.min(this.sourceBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopPlayback(!1),this.startPlayback()))}startAnimation(){let t=0;const e=i=>{const n=Math.min((i-t)/1e3,.05);t=i,this.animTime+=n,this.drawAll(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}drawAll(){var t;this.drawIR(),this.updateSpectrumDisplays(),this.isPlaying&&this.audioCtx&&this.sourceBuffer&&(this.pausedAt=this.currentPlaybackTime(),(t=this.waveformTimeline)==null||t.setPlayhead(this.pausedAt))}updateSpectrumDisplays(){var a,r,o,l,c,u,h,d,f,g,_,m,p;const t=this.sourceSampleRate/2,e=zi.SPEC_POINTS,i=Math.log10(20),n=Math.log10(t);for(let y=0;y<e;y++)this.liveSpecFreqs[y]=Math.pow(10,i+y/(e-1)*(n-i));if((a=this.sourceSpectrum)==null||a.clear(),(r=this.sourceSpectrum)==null||r.drawGrid(),this.isPlaying&&this.sourceAnalyser&&this.analyserScratch){this.sourceAnalyser.getByteFrequencyData(this.analyserScratch);const y=this.analyserScratch;for(let x=0;x<e;x++){const M=this.liveSpecFreqs[x],A=Math.round(M/t*(y.length-1)),T=y[Math.min(A,y.length-1)]/255;this.liveSpecDb[x]=-80+T*80}(o=this.sourceSpectrum)==null||o.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ff869a",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceSpectrum,this.sourceBuffer?"Press play":"Load audio");if(this.drawFilterOverlayOnSpectrum(this.sourceSpectrum,t),(l=this.processedSpectrum)==null||l.clear(),(c=this.processedSpectrum)==null||c.drawGrid(),this.isPlaying&&this.outputAnalyser&&this.analyserScratch){const y=new Uint8Array(this.outputAnalyser.frequencyBinCount);this.outputAnalyser.getByteFrequencyData(y);for(let x=0;x<e;x++){const M=this.liveSpecFreqs[x],A=Math.round(M/t*(y.length-1)),T=y[Math.min(A,y.length-1)]/255;this.liveSpecDb[x]=-80+T*80}(u=this.processedSpectrum)==null||u.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ffc86b",2.5,1,!0)}else this.drawPlaceholderOnSpectrum(this.processedSpectrum,this.sourceBuffer?"Press play":"Load audio");if(this.drawFilterOverlayOnSpectrum(this.processedSpectrum,t),(h=this.sourceStaticSpectrum)==null||h.clear(),(d=this.sourceStaticSpectrum)==null||d.drawGrid(),this.sourceFullFftDb){const y=this.sourceFullFftDb,x=new Float32Array(e);for(let M=0;M<e;M++){const A=this.liveSpecFreqs[M],T=Math.round(A/t*(y.length-1));x[M]=y[Math.min(T,y.length-1)]}(f=this.sourceStaticSpectrum)==null||f.drawSpectrum(this.liveSpecFreqs,x,"#ff869a",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceStaticSpectrum,"Load audio");if(this.drawFilterOverlayOnSpectrum(this.sourceStaticSpectrum,t),(g=this.processedStaticSpectrum)==null||g.clear(),(_=this.processedStaticSpectrum)==null||_.drawGrid(),this.processedFullFftDb){const y=this.processedFullFftDb,x=new Float32Array(e);for(let M=0;M<e;M++){const A=this.liveSpecFreqs[M],T=Math.round(A/t*(y.length-1));x[M]=y[Math.min(T,y.length-1)]}(m=this.processedStaticSpectrum)==null||m.drawSpectrum(this.liveSpecFreqs,x,"#ffc86b",2,.9,!0)}else if(this.sourceFullFftDb){const y=this.sourceFullFftDb,x=new Float32Array(e);for(let M=0;M<e;M++){const A=this.liveSpecFreqs[M],T=Math.round(A/t*(y.length-1));x[M]=y[Math.min(T,y.length-1)]}(p=this.processedStaticSpectrum)==null||p.drawSpectrum(this.liveSpecFreqs,x,"rgba(255,200,107,0.35)",1,.5)}else this.drawPlaceholderOnSpectrum(this.processedStaticSpectrum,"Load audio");this.drawFilterOverlayOnSpectrum(this.processedStaticSpectrum,t)}drawFilterOverlayOnSpectrum(t,e){if(!t)return;const i=zi.SPEC_POINTS,n=this.liveSpecFreqs,a=new Float32Array(i),r=this.bandwidth/2;for(let o=0;o<i;o++){const l=n[o],c=Math.exp(-.5*Math.pow((l-this.fCenter)/r,2));a[o]=20*Math.log10(Math.max(c,1e-9))}t.drawSpectrum(n,a,"rgba(82,207,254,0.6)",1.5,.8)}drawPlaceholderOnSpectrum(t,e){if(!t)return;const n=t.getElement().querySelector("canvas.spectrum-canvas");if(!n)return;const a=window.devicePixelRatio||1,r=n.width/a,o=n.height/a,l=n.getContext("2d");l&&(l.fillStyle="rgba(255,255,255,0.12)",l.font="10px JetBrains Mono",l.textAlign="center",l.fillText(e,r/2,o/2+4))}drawIR(){var p;if(!this.irCanvas)return;const t=this.irCanvas,e=window.devicePixelRatio||1,i=t.width/e,n=t.height/e,a=t.getContext("2d");a.clearRect(0,0,i,n);const r=((p=this.audioCtx)==null?void 0:p.sampleRate)??this.sourceSampleRate,o=ha(r,this.fCenter,this.bandwidth,512),l={l:10,r:10,t:20,b:16},c=i-l.l-l.r,u=n-l.t-l.b,h=l.t+u/2,d="#52cffe";a.strokeStyle="rgba(255,255,255,0.04)",a.lineWidth=1;for(let y=1;y<8;y++)a.beginPath(),a.moveTo(l.l+c/8*y,l.t),a.lineTo(l.l+c/8*y,l.t+u),a.stroke();a.beginPath(),a.moveTo(l.l,h),a.lineTo(l.l+c,h),a.strokeStyle="rgba(255,255,255,0.1)",a.stroke();let f=0;for(let y=0;y<o.length;y++){const x=Math.abs(o[y]);x>f&&(f=x)}f<1e-12&&(f=1);const g=Math.min(o.length,Math.floor(c/2)),_=o.length/g;for(let y=0;y<g;y++){const x=Math.round(y*_),A=o[Math.min(x,o.length-1)]/f,T=l.l+y/g*c,C=A*(u/2-2);a.beginPath(),a.moveTo(T,h),a.lineTo(T,h-C),a.strokeStyle=A>=0?d:"#f472b6",a.globalAlpha=.3+.7*Math.abs(A),a.lineWidth=g>200?1:1.5,a.stroke()}a.globalAlpha=1;const m=(o.length/r*1e3).toFixed(1);a.fillStyle="rgba(82,207,254,0.6)",a.font="700 8px JetBrains Mono",a.textAlign="left",a.fillText(`f₀ ${this.fCenter} Hz · BW ${this.bandwidth} Hz`,l.l+4,l.t+10),a.textAlign="right",a.fillText(`${o.length} smp · ${m}ms`,i-l.r,l.t+10),a.fillStyle="rgba(255,255,255,0.2)",a.font="8px JetBrains Mono",a.textAlign="center",a.fillText("n →",l.l+c/2,n-2)}resizeLayout(){var n,a,r,o,l;const t=Math.max(600,this.container.clientWidth-2),e=Math.floor((t-6)/2),i=200;(n=this.waveformTimeline)==null||n.resize(t,80),this.irCanvas&&Ei(this.irCanvas,t,80,100,60),(a=this.sourceSpectrum)==null||a.resize(e,i),(r=this.processedSpectrum)==null||r.resize(e,i),(o=this.sourceStaticSpectrum)==null||o.resize(e,i),(l=this.processedStaticSpectrum)==null||l.resize(e,i)}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopPlayback(!0),window.removeEventListener("resize",this.onResize),document.body.classList.remove("page-scroll")}};v(zi,"SPEC_POINTS",512);let $a=zi;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="168",bn={ROTATE:0,DOLLY:1,PAN:2},vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uc=0,to=1,dc=2,vl=1,fc=2,si=3,li=0,Re=1,ke=2,wi=0,En=1,eo=2,io=3,no=4,pc=5,Bi=100,mc=101,gc=102,_c=103,vc=104,xc=200,yc=201,Mc=202,Sc=203,Ka=204,ja=205,bc=206,Ec=207,wc=208,Tc=209,Ac=210,Cc=211,Pc=212,Rc=213,Lc=214,Dc=0,Ic=1,Nc=2,Xs=3,Uc=4,Fc=5,Bc=6,Oc=7,xl=0,kc=1,zc=2,Ti=0,Hc=1,Gc=2,Vc=3,Wc=4,qc=5,Xc=6,Yc=7,yl=300,An=301,Cn=302,Za=303,Ja=304,ea=306,Qa=1e3,Vi=1001,tr=1002,ze=1003,$c=1004,cs=1005,qe=1006,ua=1007,Wi=1008,ci=1009,Ml=1010,Sl=1011,Qn=1012,Nr=1013,$i=1014,ri=1015,ns=1016,Ur=1017,Fr=1018,Pn=1020,bl=35902,El=1021,wl=1022,Ye=1023,Tl=1024,Al=1025,wn=1026,Rn=1027,Cl=1028,Br=1029,Pl=1030,Or=1031,kr=1033,ks=33776,zs=33777,Hs=33778,Gs=33779,er=35840,ir=35841,nr=35842,sr=35843,ar=36196,rr=37492,or=37496,lr=37808,cr=37809,hr=37810,ur=37811,dr=37812,fr=37813,pr=37814,mr=37815,gr=37816,_r=37817,vr=37818,xr=37819,yr=37820,Mr=37821,Vs=36492,Sr=36494,br=36495,Rl=36283,Er=36284,wr=36285,Tr=36286,Kc=3200,jc=3201,Zc=0,Jc=1,Mi="",Ke="srgb",Ai="srgb-linear",zr="display-p3",ia="display-p3-linear",Ys="linear",Zt="srgb",$s="rec709",Ks="p3",Qi=7680,so=519,Qc=512,th=513,eh=514,Ll=515,ih=516,nh=517,sh=518,ah=519,ao=35044,ro="300 es",oi=2e3,js=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,r=n.length;a<r;a++)n[a].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kn=Math.PI/180,Ar=180/Math.PI;function ss(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function rh(s,t){return(s%t+t)%t}function da(s,t,e){return(1-e)*s+e*t}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oh={DEG2RAD:Kn};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*n+t.x,this.y=a*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,i,n,a,r,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c)}set(t,e,i,n,a,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],y=n[1],x=n[4],M=n[7],A=n[2],T=n[5],C=n[8];return a[0]=r*_+o*y+l*A,a[3]=r*m+o*x+l*T,a[6]=r*p+o*M+l*C,a[1]=c*_+u*y+h*A,a[4]=c*m+u*x+h*T,a[7]=c*p+u*M+h*C,a[2]=d*_+f*y+g*A,a[5]=d*m+f*x+g*T,a[8]=d*p+f*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-i*a*u+i*o*l+n*a*c-n*r*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*r-o*c,d=o*l-u*a,f=c*a-r*l,g=e*h+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(n*c-u*i)*_,t[2]=(o*i-n*r)*_,t[3]=d*_,t[4]=(u*e-n*l)*_,t[5]=(n*a-o*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(r*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-n*c,n*l,-n*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Nt;function Dl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lh(){const s=Zs("canvas");return s.style.display="block",s}const oo={};function jn(s){s in oo||(oo[s]=!0,console.warn(s))}function ch(s,t,e){return new Promise(function(i,n){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const lo=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),co=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bn={[Ai]:{transfer:Ys,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ke]:{transfer:Zt,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ia]:{transfer:Ys,primaries:Ks,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(co),fromReference:s=>s.applyMatrix3(lo)},[zr]:{transfer:Zt,primaries:Ks,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(co),fromReference:s=>s.applyMatrix3(lo).convertLinearToSRGB()}},hh=new Set([Ai,ia]),qt={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!hh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Bn[t].toReference,n=Bn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Bn[s].primaries},getTransfer:function(s){return s===Mi?Ys:Bn[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Bn[t].luminanceCoefficients)}};function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let tn;class uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{tn===void 0&&(tn=Zs("canvas")),tn.width=t.width,tn.height=t.height;const i=tn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=tn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let r=0;r<a.length;r++)a[r]=Tn(a[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Tn(e[i]/255)*255):e[i]=Tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dh=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?a.push(ma(n[r].image)):a.push(ma(n[r]))}else a=ma(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function ma(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;class Le extends Zi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Vi,n=Vi,a=qe,r=Wi,o=Ye,l=ci,c=Le.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ss(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=yl;Le.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,n=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*a,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*a,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*a,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,A=(p+1)/2,T=(u+d)/4,C=(h+_)/4,F=(g+m)/4;return x>M&&x>A?x<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(x),n=T/i,a=C/i):M>A?M<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(M),i=T/n,a=F/n):A<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(A),i=C/a,n=F/a),this.set(i,n,a,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends Zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Le(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends ph{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Nl extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ze,this.minFilter=ze,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,r,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const d=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,p*y);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const M=o*y;if(l=l*m+d*M,c=c*m+f*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,a,r){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=a[r],d=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(a/2),d=l(i/2),f=l(n/2),g=l(a/2);switch(r){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-n)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(a+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(a-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(r-n)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+r*o+n*c-a*l,this._y=n*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-n*o,this._w=r*u-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,r=this._w;let o=r*t._w+i*t._x+n*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=r*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,r=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*r,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*r,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*n-o*i),u=2*(o*e-a*n),h=2*(a*i-r*e);return this.x=e+l*c+r*h-o*u,this.y=i+l*u+o*c-a*h,this.z=n+l*h+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=n*l-a*o,this.y=a*r-i*l,this.z=i*o-n*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new N,ho=new ji;class as{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ge):Ge.fromBufferAttribute(a,r),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const n=t.children;for(let a=0,r=n.length;a<r;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(On),us.subVectors(this.max,On),en.subVectors(t.a,On),nn.subVectors(t.b,On),sn.subVectors(t.c,On),fi.subVectors(nn,en),pi.subVectors(sn,nn),Pi.subVectors(en,sn);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Pi.z,Pi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Pi.z,0,-Pi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Pi.y,Pi.x,0];return!_a(e,en,nn,sn,us)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,en,nn,sn,us))?!1:(ds.crossVectors(fi,pi),e=[ds.x,ds.y,ds.z],_a(e,en,nn,sn,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new N,new N,new N,new N,new N,new N,new N,new N],Ge=new N,hs=new as,en=new N,nn=new N,sn=new N,fi=new N,pi=new N,Pi=new N,On=new N,us=new N,ds=new N,Ri=new N;function _a(s,t,e,i,n){for(let a=0,r=s.length-3;a<=r;a+=3){Ri.fromArray(s,a);const o=n.x*Math.abs(Ri.x)+n.y*Math.abs(Ri.y)+n.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const gh=new as,kn=new N,va=new N;class na{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gh.setFromPoints(t).getCenter(i);let n=0;for(let a=0,r=t.length;a<r;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kn.subVectors(t,this.center);const e=kn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(kn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kn.copy(t.center).add(va)),this.expandByPoint(kn.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new N,xa=new N,fs=new N,mi=new N,ya=new N,ps=new N,Ma=new N;class Hr{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){xa.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(xa);const a=t.distanceTo(e)*.5,r=-this.direction.dot(fs),o=mi.dot(this.direction),l=-mi.dot(fs),c=mi.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*l-o,d=r*o-l,g=a*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d=-a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*a+o)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+c):(h=Math.max(0,-(r*a+o)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+c);else d=r>0?-a:a,h=Math.max(0,-(r*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(xa).addScaledVector(fs,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const i=ti.dot(this.direction),n=ti.dot(ti)-i*i,a=t.radius*t.radius;if(n>a)return null;const r=Math.sqrt(a-n),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),u>=0?(a=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(a=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),i>r||a>n||((a>i||isNaN(i))&&(i=a),(r<n||isNaN(n))&&(n=r),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,i,n,a){ya.subVectors(e,t),ps.subVectors(i,t),Ma.crossVectors(ya,ps);let r=this.direction.dot(Ma),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;mi.subVectors(this.origin,t);const l=o*this.direction.dot(ps.crossVectors(mi,ps));if(l<0)return null;const c=o*this.direction.dot(ya.cross(mi));if(c<0||l+c>r)return null;const u=-o*mi.dot(Ma);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,n,a,r,o,l,c,u,h,d,f,g,_,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,r,o,l,c,u,h,d,f,g,_,m)}set(t,e,i,n,a,r,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/an.setFromMatrixColumn(t,0).length(),a=1/an.setFromMatrixColumn(t,1).length(),r=1/an.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){const d=r*u,f=r*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-r*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*u,e[9]=_-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,f=r*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=r*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,vh)}lookAt(t,e,i){const n=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),gi.crossVectors(i,Ne),gi.lengthSq()===0&&(Math.abs(i.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),gi.crossVectors(i,Ne)),gi.normalize(),ms.crossVectors(Ne,gi),n[0]=gi.x,n[4]=ms.x,n[8]=Ne.x,n[1]=gi.y,n[5]=ms.y,n[9]=Ne.y,n[2]=gi.z,n[6]=ms.z,n[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],x=i[7],M=i[11],A=i[15],T=n[0],C=n[4],F=n[8],w=n[12],b=n[1],R=n[5],G=n[9],z=n[13],q=n[2],$=n[6],B=n[10],W=n[14],V=n[3],st=n[7],rt=n[11],dt=n[15];return a[0]=r*T+o*b+l*q+c*V,a[4]=r*C+o*R+l*$+c*st,a[8]=r*F+o*G+l*B+c*rt,a[12]=r*w+o*z+l*W+c*dt,a[1]=u*T+h*b+d*q+f*V,a[5]=u*C+h*R+d*$+f*st,a[9]=u*F+h*G+d*B+f*rt,a[13]=u*w+h*z+d*W+f*dt,a[2]=g*T+_*b+m*q+p*V,a[6]=g*C+_*R+m*$+p*st,a[10]=g*F+_*G+m*B+p*rt,a[14]=g*w+_*z+m*W+p*dt,a[3]=y*T+x*b+M*q+A*V,a[7]=y*C+x*R+M*$+A*st,a[11]=y*F+x*G+M*B+A*rt,a[15]=y*w+x*z+M*W+A*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+a*l*h-n*c*h-a*o*d+i*c*d+n*o*f-i*l*f)+_*(+e*l*f-e*c*d+a*r*d-n*r*f+n*c*u-a*l*u)+m*(+e*c*h-e*o*f-a*r*h+i*r*f+a*o*u-i*c*u)+p*(-n*o*u-e*l*h+e*o*d+n*r*h-i*r*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,x=g*d*c-u*m*c-g*l*f+r*m*f+u*l*p-r*d*p,M=u*_*c-g*h*c+g*o*f-r*_*f-u*o*p+r*h*p,A=g*h*l-u*_*l-g*o*d+r*_*d+u*o*m-r*h*m,T=e*y+i*x+n*M+a*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(_*d*a-h*m*a-_*n*f+i*m*f+h*n*p-i*d*p)*C,t[2]=(o*m*a-_*l*a+_*n*c-i*m*c-o*n*p+i*l*p)*C,t[3]=(h*l*a-o*d*a-h*n*c+i*d*c+o*n*f-i*l*f)*C,t[4]=x*C,t[5]=(u*m*a-g*d*a+g*n*f-e*m*f-u*n*p+e*d*p)*C,t[6]=(g*l*a-r*m*a-g*n*c+e*m*c+r*n*p-e*l*p)*C,t[7]=(r*d*a-u*l*a+u*n*c-e*d*c-r*n*f+e*l*f)*C,t[8]=M*C,t[9]=(g*h*a-u*_*a-g*i*f+e*_*f+u*i*p-e*h*p)*C,t[10]=(r*_*a-g*o*a+g*i*c-e*_*c-r*i*p+e*o*p)*C,t[11]=(u*o*a-r*h*a-u*i*c+e*h*c+r*i*f-e*o*f)*C,t[12]=A*C,t[13]=(u*_*n-g*h*n+g*i*d-e*_*d-u*i*m+e*h*m)*C,t[14]=(g*o*n-r*_*n-g*i*l+e*_*l+r*i*m-e*o*m)*C,t[15]=(r*h*n-u*o*n+u*i*l-e*h*l-r*i*d+e*o*d)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*r,0,c*l-n*o,u*l+n*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,r){return this.set(1,i,a,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,u=r+r,h=o+o,d=a*c,f=a*u,g=a*h,_=r*u,m=r*h,p=o*h,y=l*c,x=l*u,M=l*h,A=i.x,T=i.y,C=i.z;return n[0]=(1-(_+p))*A,n[1]=(f+M)*A,n[2]=(g-x)*A,n[3]=0,n[4]=(f-M)*T,n[5]=(1-(d+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(g+x)*C,n[9]=(m-y)*C,n[10]=(1-(d+_))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=an.set(n[0],n[1],n[2]).length();const r=an.set(n[4],n[5],n[6]).length(),o=an.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],Ve.copy(this);const c=1/a,u=1/r,h=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=u,Ve.elements[5]*=u,Ve.elements[6]*=u,Ve.elements[8]*=h,Ve.elements[9]*=h,Ve.elements[10]*=h,e.setFromRotationMatrix(Ve),i.x=a,i.y=r,i.z=o,this}makePerspective(t,e,i,n,a,r,o=oi){const l=this.elements,c=2*a/(e-t),u=2*a/(i-n),h=(e+t)/(e-t),d=(i+n)/(i-n);let f,g;if(o===oi)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===js)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,a,r,o=oi){const l=this.elements,c=1/(e-t),u=1/(i-n),h=1/(r-a),d=(e+t)*c,f=(i+n)*u;let g,_;if(o===oi)g=(r+a)*h,_=-2*h;else if(o===js)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const an=new N,Ve=new ce,_h=new N(0,0,0),vh=new N(1,1,1),gi=new N,ms=new N,Ne=new N,uo=new ce,fo=new ji;class hi{constructor(t=0,e=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],r=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fo.setFromEuler(this),this.setFromQuaternion(fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const po=new N,rn=new ji,ei=new ce,gs=new N,zn=new N,yh=new N,Mh=new ji,mo=new N(1,0,0),go=new N(0,1,0),_o=new N(0,0,1),vo={type:"added"},Sh={type:"removed"},on={type:"childadded",child:null},Sa={type:"childremoved",child:null};class we extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new N,e=new hi,i=new ji,n=new N(1,1,1);function a(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ce},normalMatrix:{value:new Nt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rn.setFromAxisAngle(t,e),this.quaternion.multiply(rn),this}rotateOnWorldAxis(t,e){return rn.setFromAxisAngle(t,e),this.quaternion.premultiply(rn),this}rotateX(t){return this.rotateOnAxis(mo,t)}rotateY(t){return this.rotateOnAxis(go,t)}rotateZ(t){return this.rotateOnAxis(_o,t)}translateOnAxis(t,e){return po.copy(t).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mo,t)}translateY(t){return this.translateOnAxis(go,t)}translateZ(t){return this.translateOnAxis(_o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gs.copy(t):gs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(zn,gs,this.up):ei.lookAt(gs,zn,this.up),this.quaternion.setFromRotationMatrix(ei),n&&(ei.extractRotation(n.matrixWorld),rn.setFromRotationMatrix(ei),this.quaternion.premultiply(rn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vo),on.child=t,this.dispatchEvent(on),on.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vo),on.child=t,this.dispatchEvent(on),on.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new N,ii=new N,ba=new N,ni=new N,ln=new N,cn=new N,xo=new N,Ea=new N,wa=new N,Ta=new N;class Xe{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),We.subVectors(t,e),n.cross(We);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){We.subVectors(n,e),ii.subVectors(i,e),ba.subVectors(t,e);const r=We.dot(We),o=We.dot(ii),l=We.dot(ba),c=ii.dot(ii),u=ii.dot(ba),h=r*c-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(r*u-o*l)*d;return a.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,n,a,r,o,l){return this.getBarycoord(t,e,i,n,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ni.x),l.addScaledVector(r,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(t,e,i,n){return We.subVectors(i,e),ii.subVectors(t,e),We.cross(ii).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),We.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,a){return Xe.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let r,o;ln.subVectors(n,i),cn.subVectors(a,i),Ea.subVectors(t,i);const l=ln.dot(Ea),c=cn.dot(Ea);if(l<=0&&c<=0)return e.copy(i);wa.subVectors(t,n);const u=ln.dot(wa),h=cn.dot(wa);if(u>=0&&h<=u)return e.copy(n);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(i).addScaledVector(ln,r);Ta.subVectors(t,a);const f=ln.dot(Ta),g=cn.dot(Ta);if(g>=0&&f<=g)return e.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(cn,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return xo.subVectors(a,n),o=(h-u)/(h-u+(f-g)),e.copy(n).addScaledVector(xo,o);const p=1/(m+_+d);return r=_*p,o=d*p,e.copy(i).addScaledVector(ln,r).addScaledVector(cn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Aa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=rh(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,r=2*i-a;this.r=Aa(r,a,t+1/3),this.g=Aa(r,a,t),this.b=Aa(r,a,t-1/3)}return qt.toWorkingColorSpace(this,n),this}setStyle(t,e=Ke){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const i=Fl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return qt.fromWorkingColorSpace(Me.copy(this),t),Math.round(be(Me.r*255,0,255))*65536+Math.round(be(Me.g*255,0,255))*256+Math.round(be(Me.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Me.copy(this),e);const i=Me.r,n=Me.g,a=Me.b,r=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case i:l=(n-a)/h+(n<a?6:0);break;case n:l=(a-i)/h+2;break;case a:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ke){qt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,i=Me.g,n=Me.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(_s);const i=da(_i.h,_s.h,e),n=da(_i.s,_s.s,e),a=da(_i.l,_s.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new zt;zt.NAMES=Fl;let bh=0;class rs extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=En,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==En&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ka&&(i.blendSrc=this.blendSrc),this.blendDst!==ja&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=n(t.textures),r=n(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qi extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new N,vs=new Lt;class ie{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ao,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return jn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),i=Te(i,this.array),n=Te(n,this.array),a=Te(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ao&&(t.usage=this.usage),t}}class Bl extends ie{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ol extends ie{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _e extends ie{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Eh=0;const Be=new ce,Ca=new we,hn=new N,Ue=new as,Hn=new as,pe=new N;class le extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dl(t)?Ol:Bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Nt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hn).negate(),this.translate(hn.x,hn.y,hn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Ue.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Ue.min,Hn.min),Ue.expandByPoint(pe),pe.addVectors(Ue.max,Hn.max),Ue.expandByPoint(pe)):(Ue.expandByPoint(Hn.min),Ue.expandByPoint(Hn.max))}Ue.getCenter(i);let n=0;for(let a=0,r=t.count;a<r;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pe.fromBufferAttribute(o,c),l&&(hn.fromBufferAttribute(t,c),pe.add(hn)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new N,l[F]=new N;const c=new N,u=new N,h=new N,d=new Lt,f=new Lt,g=new Lt,_=new N,m=new N;function p(F,w,b){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,b),d.fromBufferAttribute(a,F),f.fromBufferAttribute(a,w),g.fromBufferAttribute(a,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[F].add(_),o[w].add(_),o[b].add(_),l[F].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,w=y.length;F<w;++F){const b=y[F],R=b.start,G=b.count;for(let z=R,q=R+G;z<q;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new N,M=new N,A=new N,T=new N;function C(F){A.fromBufferAttribute(n,F),T.copy(A);const w=o[F];x.copy(w),x.sub(A.multiplyScalar(A.dot(w))).normalize(),M.crossVectors(T,w);const R=M.dot(l[F])<0?-1:1;r.setXYZW(F,x.x,x.y,x.z,R)}for(let F=0,w=y.length;F<w;++F){const b=y[F],R=b.start,G=b.count;for(let z=R,q=R+G;z<q;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ie(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new N,a=new N,r=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,a),h.subVectors(n,a),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,a),h.subVectors(n,a),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ie(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(n[l]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(e))}const a=t.morphAttributes;for(const c in a){const u=[],h=a[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new ce,Li=new Hr,xs=new na,Mo=new N,un=new N,dn=new N,fn=new N,Pa=new N,ys=new N,Ms=new Lt,Ss=new Lt,bs=new Lt,So=new N,bo=new N,Eo=new N,Es=new N,ws=new N;class Ee extends we{constructor(t=new le,e=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(a&&o){ys.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],h=a[l];u!==0&&(Pa.fromBufferAttribute(h,t),r?ys.addScaledVector(Pa,u):ys.addScaledVector(Pa.sub(e),u))}e.add(ys)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(a),Li.copy(t.ray).recast(t.near),!(xs.containsPoint(Li.origin)===!1&&(Li.intersectSphere(xs,Mo)===null||Li.origin.distanceToSquared(Mo)>(t.far-t.near)**2))&&(yo.copy(a).invert(),Li.copy(t.ray).applyMatrix4(yo),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,i){let n;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,A=x;M<A;M+=3){const T=o.getX(M),C=o.getX(M+1),F=o.getX(M+2);n=Ts(this,p,t,i,c,u,h,T,C,F),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);n=Ts(this,r,t,i,c,u,h,y,x,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,A=x;M<A;M+=3){const T=M,C=M+1,F=M+2;n=Ts(this,p,t,i,c,u,h,T,C,F),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,M=m+2;n=Ts(this,r,t,i,c,u,h,y,x,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function wh(s,t,e,i,n,a,r,o){let l;if(t.side===Re?l=i.intersectTriangle(r,a,n,!0,o):l=i.intersectTriangle(n,a,r,t.side===li,o),l===null)return null;ws.copy(o),ws.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:s}}function Ts(s,t,e,i,n,a,r,o,l,c){s.getVertexPosition(o,un),s.getVertexPosition(l,dn),s.getVertexPosition(c,fn);const u=wh(s,t,e,i,un,dn,fn,Es);if(u){n&&(Ms.fromBufferAttribute(n,o),Ss.fromBufferAttribute(n,l),bs.fromBufferAttribute(n,c),u.uv=Xe.getInterpolation(Es,un,dn,fn,Ms,Ss,bs,new Lt)),a&&(Ms.fromBufferAttribute(a,o),Ss.fromBufferAttribute(a,l),bs.fromBufferAttribute(a,c),u.uv1=Xe.getInterpolation(Es,un,dn,fn,Ms,Ss,bs,new Lt)),r&&(So.fromBufferAttribute(r,o),bo.fromBufferAttribute(r,l),Eo.fromBufferAttribute(r,c),u.normal=Xe.getInterpolation(Es,un,dn,fn,So,bo,Eo,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};Xe.getNormal(un,dn,fn,h.normal),u.face=h}return u}class Nn extends le{constructor(t=1,e=1,i=1,n=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:r};const o=this;n=Math.floor(n),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,a,0),g("z","y","x",1,-1,i,e,-t,r,a,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,a,4),g("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function g(_,m,p,y,x,M,A,T,C,F,w){const b=M/C,R=A/F,G=M/2,z=A/2,q=T/2,$=C+1,B=F+1;let W=0,V=0;const st=new N;for(let rt=0;rt<B;rt++){const dt=rt*R-z;for(let Bt=0;Bt<$;Bt++){const Yt=Bt*b-G;st[_]=Yt*y,st[m]=dt*x,st[p]=q,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=T>0?1:-1,u.push(st.x,st.y,st.z),h.push(Bt/C),h.push(1-rt/F),W+=1}}for(let rt=0;rt<F;rt++)for(let dt=0;dt<C;dt++){const Bt=d+dt+$*rt,Yt=d+dt+$*(rt+1),X=d+(dt+1)+$*(rt+1),Q=d+(dt+1)+$*rt;l.push(Bt,Yt,Q),l.push(Yt,X,Q),V+=6}o.addGroup(f,V,w),f+=V,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ln(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Se(s){const t={};for(let e=0;e<s.length;e++){const i=Ln(s[e]);for(const n in i)t[n]=i[n]}return t}function Th(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Ah={clone:Ln,merge:Se};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ln(t.uniforms),this.uniformsGroups=Th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zl extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new N,wo=new Lt,To=new Lt;class Oe extends zl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Kn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,wo,To),e.subVectors(To,wo)}setViewOffset(t,e,i,n,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*n/l,e-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pn=-90,mn=1;class Rh extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Oe(pn,mn,t,e);n.layers=this.layers,this.add(n);const a=new Oe(pn,mn,t,e);a.layers=this.layers,this.add(a);const r=new Oe(pn,mn,t,e);r.layers=this.layers,this.add(r);const o=new Oe(pn,mn,t,e);o.layers=this.layers,this.add(o);const l=new Oe(pn,mn,t,e);l.layers=this.layers,this.add(l);const c=new Oe(pn,mn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hl extends Le{constructor(t,e,i,n,a,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:An,super(t,e,i,n,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Hl(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Nn(5,5,5),a=new ui({name:"CubemapFromEquirect",uniforms:Ln(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:wi});a.uniforms.tEquirect.value=e;const r=new Ee(n,a),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=qe),new Rh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(a)}}const Ra=new N,Dh=new N,Ih=new Nt;class yi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ra.subVectors(i,e).cross(Dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ra),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ih.getNormalMatrix(t),n=this.coplanarPoint(Ra).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new na,As=new N;class Gl{constructor(t=new yi,e=new yi,i=new yi,n=new yi,a=new yi,r=new yi){this.planes=[t,e,i,n,a,r]}set(t,e,i,n,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi){const i=this.planes,n=t.elements,a=n[0],r=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],d=n[7],f=n[8],g=n[9],_=n[10],m=n[11],p=n[12],y=n[13],x=n[14],M=n[15];if(i[0].setComponents(l-a,d-c,m-f,M-p).normalize(),i[1].setComponents(l+a,d+c,m+f,M+p).normalize(),i[2].setComponents(l+r,d+u,m+g,M+y).normalize(),i[3].setComponents(l-r,d-u,m-g,M-y).normalize(),i[4].setComponents(l-o,d-h,m-_,M-x).normalize(),e===oi)i[5].setComponents(l+o,d+h,m+_,M+x).normalize();else if(e===js)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(As.x=n.normal.x>0?t.max.x:t.min.x,As.y=n.normal.y>0?t.max.y:t.min.y,As.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let s=null,t=!1,e=null,i=null;function n(a,r){e(a,r),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Nh(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),h.count===-1&&d.length===0&&s.bufferSubData(c,0,u),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:r}}class sa extends le{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,r=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-r;for(let x=0;x<c;x++){const M=x*h-a;g.push(M,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,M=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;f.push(x,M,T),f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hh=`#ifdef USE_AOMAP
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
#endif`,Gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
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
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,Kh=`#ifdef USE_BUMPMAP
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,su=`#define PI 3.141592653589793
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
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ru=`vec3 transformedNormal = objectNormal;
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
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`
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
}`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
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
}`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
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
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
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
#endif`,Iu=`struct PhysicalMaterial {
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
}`,Nu=`
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wu=`#if defined( USE_POINTS_UV )
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
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$u=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ju=`#ifdef USE_MORPHTARGETS
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
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nd=`#ifdef USE_NORMALMAP
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
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xd=`float getShadowMask() {
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
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ud=`uniform sampler2D t2D;
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
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
}`,Hd=`#if DEPTH_PACKING == 3200
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
}`,Gd=`#define DISTANCE
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
}`,Vd=`#define DISTANCE
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
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
}`,Yd=`uniform vec3 diffuse;
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
}`,$d=`#include <common>
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
}`,Kd=`uniform vec3 diffuse;
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
}`,jd=`#define LAMBERT
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
}`,Zd=`#define LAMBERT
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
}`,Jd=`#define MATCAP
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
}`,Qd=`#define MATCAP
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
}`,tf=`#define NORMAL
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
}`,ef=`#define NORMAL
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
}`,nf=`#define PHONG
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
}`,sf=`#define PHONG
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
}`,af=`#define STANDARD
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
}`,rf=`#define STANDARD
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
}`,of=`#define TOON
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
}`,lf=`#define TOON
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
}`,cf=`uniform float size;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,df=`uniform vec3 color;
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
}`,ff=`uniform float rotation;
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
}`,pf=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:Uh,alphahash_pars_fragment:Fh,alphamap_fragment:Bh,alphamap_pars_fragment:Oh,alphatest_fragment:kh,alphatest_pars_fragment:zh,aomap_fragment:Hh,aomap_pars_fragment:Gh,batching_pars_vertex:Vh,batching_vertex:Wh,begin_vertex:qh,beginnormal_vertex:Xh,bsdfs:Yh,iridescence_fragment:$h,bumpmap_pars_fragment:Kh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Qh,color_fragment:tu,color_pars_fragment:eu,color_pars_vertex:iu,color_vertex:nu,common:su,cube_uv_reflection_fragment:au,defaultnormal_vertex:ru,displacementmap_pars_vertex:ou,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:hu,colorspace_fragment:uu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Au,envmap_vertex:_u,fog_vertex:vu,fog_pars_vertex:xu,fog_fragment:yu,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_pars_fragment:bu,lights_lambert_fragment:Eu,lights_lambert_pars_fragment:wu,lights_pars_begin:Tu,lights_toon_fragment:Cu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Ru,lights_phong_pars_fragment:Lu,lights_physical_fragment:Du,lights_physical_pars_fragment:Iu,lights_fragment_begin:Nu,lights_fragment_maps:Uu,lights_fragment_end:Fu,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:Ou,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:zu,map_fragment:Hu,map_pars_fragment:Gu,map_particle_fragment:Vu,map_particle_pars_fragment:Wu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:Yu,morphcolor_vertex:$u,morphnormal_vertex:Ku,morphtarget_pars_vertex:ju,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:td,normal_pars_vertex:ed,normal_vertex:id,normalmap_pars_fragment:nd,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:ad,clearcoat_pars_fragment:rd,iridescence_pars_fragment:od,opaque_fragment:ld,packing:cd,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:vd,shadowmask_pars_fragment:xd,skinbase_vertex:yd,skinning_pars_vertex:Md,skinning_vertex:Sd,skinnormal_vertex:bd,specularmap_fragment:Ed,specularmap_pars_fragment:wd,tonemapping_fragment:Td,tonemapping_pars_fragment:Ad,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Rd,uv_pars_vertex:Ld,uv_vertex:Dd,worldpos_vertex:Id,background_vert:Nd,background_frag:Ud,backgroundCube_vert:Fd,backgroundCube_frag:Bd,cube_vert:Od,cube_frag:kd,depth_vert:zd,depth_frag:Hd,distanceRGBA_vert:Gd,distanceRGBA_frag:Vd,equirect_vert:Wd,equirect_frag:qd,linedashed_vert:Xd,linedashed_frag:Yd,meshbasic_vert:$d,meshbasic_frag:Kd,meshlambert_vert:jd,meshlambert_frag:Zd,meshmatcap_vert:Jd,meshmatcap_frag:Qd,meshnormal_vert:tf,meshnormal_frag:ef,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:af,meshphysical_frag:rf,meshtoon_vert:of,meshtoon_frag:lf,points_vert:cf,points_frag:hf,shadow_vert:uf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},at={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},je={basic:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Se([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Se([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Se([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Se([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Se([at.points,at.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Se([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Se([at.common,at.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Se([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Se([at.sprite,at.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Se([at.common,at.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Se([at.lights,at.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};je.physical={uniforms:Se([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Cs={r:0,b:0,g:0},Ii=new hi,mf=new ce;function gf(s,t,e,i,n,a,r){const o=new zt(0);let l=a===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const M=g(y);M===null?p(o,l):M&&M.isColor&&(p(M,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(s.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===ea)?(u===void 0&&(u=new Ee(new Nn(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Ln(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Ii.copy(x.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(Ii)),u.material.toneMapped=qt.getTransfer(M.colorSpace)!==Zt,(h!==M||d!==M.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ee(new sa(2,2),new ui({name:"BackgroundMaterial",uniforms:Ln(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(M.colorSpace)!==Zt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Cs,kl(s)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function _f(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let a=n,r=!1;function o(b,R,G,z,q){let $=!1;const B=h(z,G,R);a!==B&&(a=B,c(a.object)),$=f(b,z,G,q),$&&g(b,z,G,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,M(b,R,G,z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,R,G){const z=G.wireframe===!0;let q=i[b.id];q===void 0&&(q={},i[b.id]=q);let $=q[R.id];$===void 0&&($={},q[R.id]=$);let B=$[z];return B===void 0&&(B=d(l()),$[z]=B),B}function d(b){const R=[],G=[],z=[];for(let q=0;q<e;q++)R[q]=0,G[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,R,G,z){const q=a.attributes,$=R.attributes;let B=0;const W=G.getAttributes();for(const V in W)if(W[V].location>=0){const rt=q[V];let dt=$[V];if(dt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;B++}return a.attributesNum!==B||a.index!==z}function g(b,R,G,z){const q={},$=R.attributes;let B=0;const W=G.getAttributes();for(const V in W)if(W[V].location>=0){let rt=$[V];rt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));const dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),q[V]=dt,B++}a.attributes=q,a.attributesNum=B,a.index=z}function _(){const b=a.newAttributes;for(let R=0,G=b.length;R<G;R++)b[R]=0}function m(b){p(b,0)}function p(b,R){const G=a.newAttributes,z=a.enabledAttributes,q=a.attributeDivisors;G[b]=1,z[b]===0&&(s.enableVertexAttribArray(b),z[b]=1),q[b]!==R&&(s.vertexAttribDivisor(b,R),q[b]=R)}function y(){const b=a.newAttributes,R=a.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==b[G]&&(s.disableVertexAttribArray(G),R[G]=0)}function x(b,R,G,z,q,$,B){B===!0?s.vertexAttribIPointer(b,R,G,q,$):s.vertexAttribPointer(b,R,G,z,q,$)}function M(b,R,G,z){_();const q=z.attributes,$=G.getAttributes(),B=R.defaultAttributeValues;for(const W in $){const V=$[W];if(V.location>=0){let st=q[W];if(st===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const rt=st.normalized,dt=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const Yt=Bt.buffer,X=Bt.type,Q=Bt.bytesPerElement,gt=X===s.INT||X===s.UNSIGNED_INT||st.gpuType===Nr;if(st.isInterleavedBufferAttribute){const ht=st.data,Et=ht.stride,Pt=st.offset;if(ht.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft,ht.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Ft=0;Ft<V.locationSize;Ft++)x(V.location+Ft,dt/V.locationSize,X,rt,Et*Q,(Pt+dt/V.locationSize*Ft)*Q,gt)}else{if(st.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht,st.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let ht=0;ht<V.locationSize;ht++)x(V.location+ht,dt/V.locationSize,X,rt,dt*Q,dt/V.locationSize*ht*Q,gt)}}else if(B!==void 0){const rt=B[W];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(V.location,rt);break;case 3:s.vertexAttrib3fv(V.location,rt);break;case 4:s.vertexAttrib4fv(V.location,rt);break;default:s.vertexAttrib1fv(V.location,rt)}}}}y()}function A(){F();for(const b in i){const R=i[b];for(const G in R){const z=R[G];for(const q in z)u(z[q].object),delete z[q];delete R[G]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const R=i[b.id];for(const G in R){const z=R[G];for(const q in z)u(z[q].object),delete z[q];delete R[G]}delete i[b.id]}function C(b){for(const R in i){const G=i[R];if(G[b.id]===void 0)continue;const z=G[b.id];for(const q in z)u(z[q].object),delete z[q];delete G[b.id]}}function F(){w(),r=!0,a!==n&&(a=n,c(a.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:F,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function vf(s,t,e){let i;function n(c){i=c}function a(c,u){s.drawArrays(i,c,u),e.update(u,i,1)}function r(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,i,d[_])}}this.setMode=n,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xf(s,t,e,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){return!(T!==Ye&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ci&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ri&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:M,maxSamples:A}}function yf(s){const t=this;let e=null,i=0,n=!1,a=!1;const r=new yi,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||n;return n=d,i=h.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!n||g===null||g.length===0||a&&!m)a?u(null):c();else{const y=a?0:i,x=y*4;let M=p.clippingState||null;l.value=M,M=u(g,d,x,f);for(let A=0;A!==x;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)r.copy(h[x]).applyMatrix4(y,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Mf(s){let t=new WeakMap;function e(r,o){return o===Za?r.mapping=An:o===Ja&&(r.mapping=Cn),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Za||o===Ja)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Lh(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){const o=r.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Sf extends zl{constructor(t=-1,e=1,i=1,n=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,r=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xn=4,Ao=[.125,.215,.35,.446,.526,.582],Oi=20,La=new Sf,Co=new zt;let Da=null,Ia=0,Na=0,Ua=!1;const Fi=(1+Math.sqrt(5))/2,gn=1/Fi,Po=[new N(-Fi,gn,0),new N(Fi,gn,0),new N(-gn,0,Fi),new N(gn,0,Fi),new N(0,Fi,-gn),new N(0,Fi,gn),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ro{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Ia,Na),this._renderer.xr.enabled=Ua,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===An||t.mapping===Cn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:ns,format:Ye,colorSpace:Ai,depthBuffer:!1},n=Lo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(a)),this._blurMaterial=Ef(a,t,e)}return n}_compileMaterial(t){const e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,i,n){const o=new Oe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Co),u.toneMapping=Ti,u.autoClear=!1;const f=new qi({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new Ee(new Nn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Co),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Ps(n,y*x,p>2?x:0,x,x),u.setRenderTarget(n),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===An||t.mapping===Cn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const a=n?this._cubemapMaterial:this._equirectMaterial,r=new Ee(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,La)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Po[(n-a-1)%Po.length];this._blur(t,a-1,a,r,o)}e.autoClear=i}_blur(t,e,i,n,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",a),this._halfBlur(r,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ee(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=a/g,m=isFinite(a)?1+Math.floor(u*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let y=0;for(let C=0;C<Oi;++C){const F=C/_,w=Math.exp(-F*F/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const M=this._sizeLods[n],A=3*M*(n>x-xn?n-x+xn:0),T=4*(this._cubeSize-M);Ps(e,A,T,3*M,2*M),l.setRenderTarget(e),l.render(h,La)}}function bf(s){const t=[],e=[],i=[];let n=s;const a=s-xn+1+Ao.length;for(let r=0;r<a;r++){const o=Math.pow(2,n);e.push(o);let l=1/o;r>s-xn?l=Ao[r-s+xn-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,F=T>2?0:-1,w=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];y.set(w,_*g*T),x.set(d,m*g*T);const b=[T,T,T,T,T,T];M.set(b,p*g*T)}const A=new le;A.setAttribute("position",new ie(y,_)),A.setAttribute("uv",new ie(x,m)),A.setAttribute("faceIndex",new ie(M,p)),t.push(A),n>xn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Lo(s,t,e){const i=new Ki(s,t,e);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Ef(s,t,e){const i=new Float32Array(Oi),n=new N(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Gr(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Do(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gr(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Io(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Gr(){return`

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
	`}function wf(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ja,u=l===An||l===Cn;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ro(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&n(f)?(e===null&&(e=new Ro(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Tf(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&jn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Af(s,t,e,i){const n={},a=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",r),delete n[d.id];const f=a.get(d);f&&(t.remove(f),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){const A=y[x+0],T=y[x+1],C=y[x+2];d.push(A,T,T,C,C,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const A=x+0,T=x+1,C=x+2;d.push(A,T,T,C,C,A)}}else return;const m=new(Dl(d)?Ol:Bl)(d,1);m.version=_;const p=a.get(h);p&&t.remove(p),a.set(h,m)}function u(h){const d=a.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Cf(s,t,e){let i;function n(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,f){s.drawElements(i,f,a,d*r),e.update(f,i,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,a,d*r,g),e.update(f,i,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,a,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y];for(let y=0;y<_.length;y++)e.update(p,i,_[y])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Pf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Rf(s,t,e){const i=new WeakMap,n=new ge;function a(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let b=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*T*4*h),F=new Nl(C,A,T,h);F.type=ri,F.needsUpdate=!0;const w=M*4;for(let R=0;R<h;R++){const G=p[R],z=y[R],q=x[R],$=A*T*4*R;for(let B=0;B<G.count;B++){const W=B*w;g===!0&&(n.fromBufferAttribute(G,B),C[$+W+0]=n.x,C[$+W+1]=n.y,C[$+W+2]=n.z,C[$+W+3]=0),_===!0&&(n.fromBufferAttribute(z,B),C[$+W+4]=n.x,C[$+W+5]=n.y,C[$+W+6]=n.z,C[$+W+7]=0),m===!0&&(n.fromBufferAttribute(q,B),C[$+W+8]=n.x,C[$+W+9]=n.y,C[$+W+10]=n.z,C[$+W+11]=q.itemSize===4?n.w:1)}}d={count:h,texture:F,size:new Lt(A,T)},i.set(o,d),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:a}}function Lf(s,t,e,i){let n=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(n.get(h)!==c&&(t.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return h}function r(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class Wl extends Le{constructor(t,e,i,n,a,r,o,l,c,u=wn){if(u!==wn&&u!==Rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===wn&&(i=$i),i===void 0&&u===Rn&&(i=Pn),super(null,n,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ql=new Le,No=new Wl(1,1),Xl=new Nl,Yl=new mh,$l=new Hl,Uo=[],Fo=[],Bo=new Float32Array(16),Oo=new Float32Array(9),ko=new Float32Array(4);function Un(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Uo[n];if(a===void 0&&(a=new Float32Array(n),Uo[n]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function fe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function aa(s,t){let e=Fo[t];e===void 0&&(e=new Int32Array(t),Fo[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),fe(e,t)}}function Nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),fe(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),fe(e,t)}}function Ff(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,i))return;ko.set(i),s.uniformMatrix2fv(this.addr,!1,ko),fe(e,i)}}function Bf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,i))return;Oo.set(i),s.uniformMatrix3fv(this.addr,!1,Oo),fe(e,i)}}function Of(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,i))return;Bo.set(i),s.uniformMatrix4fv(this.addr,!1,Bo),fe(e,i)}}function kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),fe(e,t)}}function Hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),fe(e,t)}}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),fe(e,t)}}function Vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),fe(e,t)}}function qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),fe(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),fe(e,t)}}function Yf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let a;this.type===s.SAMPLER_2D_SHADOW?(No.compareFunction=Ll,a=No):a=ql,e.setTexture2D(t||a,n)}function $f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yl,n)}function Kf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||$l,n)}function jf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Xl,n)}function Zf(s){switch(s){case 5126:return Df;case 35664:return If;case 35665:return Nf;case 35666:return Uf;case 35674:return Ff;case 35675:return Bf;case 35676:return Of;case 5124:case 35670:return kf;case 35667:case 35671:return zf;case 35668:case 35672:return Hf;case 35669:case 35673:return Gf;case 5125:return Vf;case 36294:return Wf;case 36295:return qf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return jf}}function Jf(s,t){s.uniform1fv(this.addr,t)}function Qf(s,t){const e=Un(t,this.size,2);s.uniform2fv(this.addr,e)}function tp(s,t){const e=Un(t,this.size,3);s.uniform3fv(this.addr,e)}function ep(s,t){const e=Un(t,this.size,4);s.uniform4fv(this.addr,e)}function ip(s,t){const e=Un(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function np(s,t){const e=Un(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sp(s,t){const e=Un(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ap(s,t){s.uniform1iv(this.addr,t)}function rp(s,t){s.uniform2iv(this.addr,t)}function op(s,t){s.uniform3iv(this.addr,t)}function lp(s,t){s.uniform4iv(this.addr,t)}function cp(s,t){s.uniform1uiv(this.addr,t)}function hp(s,t){s.uniform2uiv(this.addr,t)}function up(s,t){s.uniform3uiv(this.addr,t)}function dp(s,t){s.uniform4uiv(this.addr,t)}function fp(s,t,e){const i=this.cache,n=t.length,a=aa(e,n);de(i,a)||(s.uniform1iv(this.addr,a),fe(i,a));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||ql,a[r])}function pp(s,t,e){const i=this.cache,n=t.length,a=aa(e,n);de(i,a)||(s.uniform1iv(this.addr,a),fe(i,a));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Yl,a[r])}function mp(s,t,e){const i=this.cache,n=t.length,a=aa(e,n);de(i,a)||(s.uniform1iv(this.addr,a),fe(i,a));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||$l,a[r])}function gp(s,t,e){const i=this.cache,n=t.length,a=aa(e,n);de(i,a)||(s.uniform1iv(this.addr,a),fe(i,a));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Xl,a[r])}function _p(s){switch(s){case 5126:return Jf;case 35664:return Qf;case 35665:return tp;case 35666:return ep;case 35674:return ip;case 35675:return np;case 35676:return sp;case 5124:case 35670:return ap;case 35667:case 35671:return rp;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}class vp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zf(e.type)}}class xp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_p(e.type)}}class yp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,r=n.length;a!==r;++a){const o=n[a];o.setValue(t,e[o.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function zo(s,t){s.seq.push(t),s.map[t.id]=t}function Mp(s,t,e){const i=s.name,n=i.length;for(Fa.lastIndex=0;;){const a=Fa.exec(i),r=Fa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===n){zo(e,c===void 0?new vp(o,s,t):new xp(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new yp(o),zo(e,h)),e=h}}}class Ws{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),r=t.getUniformLocation(e,a.name);Mp(a,r,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function Ho(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Sp=37297;let bp=0;function Ep(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=n;r<a;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function wp(s){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(s);let i;switch(t===e?i="":t===Ks&&e===$s?i="LinearDisplayP3ToLinearSRGB":t===$s&&e===Ks&&(i="LinearSRGBToLinearDisplayP3"),s){case Ai:case ia:return[i,"LinearTransferOETF"];case Ke:case zr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Go(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Ep(s.getShaderSource(t),r)}else return n}function Tp(s,t){const e=wp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ap(s,t){let e;switch(t){case Hc:e="Linear";break;case Gc:e="Reinhard";break;case Vc:e="Cineon";break;case Wc:e="ACESFilmic";break;case Xc:e="AgX";break;case Yc:e="Neutral";break;case qc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new N;function Cp(){qt.getLuminanceCoefficients(Rs);const s=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yn).join(`
`)}function Rp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Yn(s){return s!==""}function Vo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cr(s){return s.replace(Dp,Np)}const Ip=new Map;function Np(s,t){let e=It[t];if(e===void 0){const i=Ip.get(t);if(i!==void 0)e=It[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cr(e)}const Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(s){return s.replace(Up,Fp)}function Fp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Xo(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Bp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Op(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case An:case Cn:t="ENVMAP_TYPE_CUBE";break;case ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cn:t="ENVMAP_MODE_REFRACTION";break}return t}function zp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case kc:t="ENVMAP_BLENDING_MIX";break;case zc:t="ENVMAP_BLENDING_ADD";break}return t}function Hp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Gp(s,t,e,i){const n=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Bp(e),c=Op(e),u=kp(e),h=zp(e),d=Hp(e),f=Pp(e),g=Rp(a),_=n.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yn).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yn).join(`
`),p.length>0&&(p+=`
`)):(m=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yn).join(`
`),p=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?It.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Tp("linearToOutputTexel",e.outputColorSpace),Cp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yn).join(`
`)),r=Cr(r),r=Vo(r,e),r=Wo(r,e),o=Cr(o),o=Vo(o,e),o=Wo(o,e),r=qo(r),o=qo(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+r,M=y+p+o,A=Ho(n,n.VERTEX_SHADER,x),T=Ho(n,n.FRAGMENT_SHADER,M);n.attachShader(_,A),n.attachShader(_,T),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function C(R){if(s.debug.checkShaderErrors){const G=n.getProgramInfoLog(_).trim(),z=n.getShaderInfoLog(A).trim(),q=n.getShaderInfoLog(T).trim();let $=!0,B=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,A,T);else{const W=Go(n,A,"vertex"),V=Go(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+W+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||q==="")&&(B=!1);B&&(R.diagnostics={runnable:$,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}n.deleteShader(A),n.deleteShader(T),F=new Ws(n,_),w=Lp(n,_)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(_,Sp)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Vp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new qp(t),e.set(t,i)),i}}class qp{constructor(t){this.id=Vp++,this.code=t,this.usedTimes=0}}function Xp(s,t,e,i,n,a,r){const o=new Ul,l=new Wp,c=new Set,u=[],h=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,R,G,z){const q=G.fog,$=z.geometry,B=w.isMeshStandardMaterial?G.environment:null,W=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),V=W&&W.mapping===ea?W.image.height:null,st=g[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=rt!==void 0?rt.length:0;let Bt=0;$.morphAttributes.position!==void 0&&(Bt=1),$.morphAttributes.normal!==void 0&&(Bt=2),$.morphAttributes.color!==void 0&&(Bt=3);let Yt,X,Q,gt;if(st){const Ht=je[st];Yt=Ht.vertexShader,X=Ht.fragmentShader}else Yt=w.vertexShader,X=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),gt=l.getFragmentShaderID(w);const ht=s.getRenderTarget(),Et=z.isInstancedMesh===!0,Pt=z.isBatchedMesh===!0,Ft=!!w.map,Qt=!!w.matcap,L=!!W,ne=!!w.aoMap,Xt=!!w.lightMap,$t=!!w.bumpMap,xt=!!w.normalMap,se=!!w.displacementMap,At=!!w.emissiveMap,Rt=!!w.metalnessMap,P=!!w.roughnessMap,S=w.anisotropy>0,H=w.clearcoat>0,j=w.dispersion>0,J=w.iridescence>0,Z=w.sheen>0,yt=w.transmission>0,ot=S&&!!w.anisotropyMap,ut=H&&!!w.clearcoatMap,Dt=H&&!!w.clearcoatNormalMap,tt=H&&!!w.clearcoatRoughnessMap,ct=J&&!!w.iridescenceMap,Ot=J&&!!w.iridescenceThicknessMap,Tt=Z&&!!w.sheenColorMap,ft=Z&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,Ut=!!w.specularColorMap,Jt=!!w.specularIntensityMap,D=yt&&!!w.transmissionMap,et=yt&&!!w.thicknessMap,Y=!!w.gradientMap,K=!!w.alphaMap,nt=w.alphaTest>0,St=!!w.alphaHash,kt=!!w.extensions;let ae=Ti;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ae=s.toneMapping);const ve={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Yt,fragmentShader:X,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ai,alphaToCoverage:!!w.alphaToCoverage,map:Ft,matcap:Qt,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:V,aoMap:ne,lightMap:Xt,bumpMap:$t,normalMap:xt,displacementMap:d&&se,emissiveMap:At,normalMapObjectSpace:xt&&w.normalMapType===Jc,normalMapTangentSpace:xt&&w.normalMapType===Zc,metalnessMap:Rt,roughnessMap:P,anisotropy:S,anisotropyMap:ot,clearcoat:H,clearcoatMap:ut,clearcoatNormalMap:Dt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:J,iridescenceMap:ct,iridescenceThicknessMap:Ot,sheen:Z,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:Ct,specularColorMap:Ut,specularIntensityMap:Jt,transmission:yt,transmissionMap:D,thicknessMap:et,gradientMap:Y,opaque:w.transparent===!1&&w.blending===En&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:nt,alphaHash:St,combine:w.combine,mapUv:Ft&&_(w.map.channel),aoMapUv:ne&&_(w.aoMap.channel),lightMapUv:Xt&&_(w.lightMap.channel),bumpMapUv:$t&&_(w.bumpMap.channel),normalMapUv:xt&&_(w.normalMap.channel),displacementMapUv:se&&_(w.displacementMap.channel),emissiveMapUv:At&&_(w.emissiveMap.channel),metalnessMapUv:Rt&&_(w.metalnessMap.channel),roughnessMapUv:P&&_(w.roughnessMap.channel),anisotropyMapUv:ot&&_(w.anisotropyMap.channel),clearcoatMapUv:ut&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(w.sheenRoughnessMap.channel),specularMapUv:Ct&&_(w.specularMap.channel),specularColorMapUv:Ut&&_(w.specularColorMap.channel),specularIntensityMapUv:Jt&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:et&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(xt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Ft||K),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ft&&w.map.isVideoTexture===!0&&qt.getTransfer(w.map.colorSpace)===Zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ke,flipSided:w.side===Re,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:kt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&w.extensions.multiDraw===!0||Pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)b.push(R),b.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(y(b,w),x(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function x(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),w.push(o.mask)}function M(w){const b=g[w.type];let R;if(b){const G=je[b];R=Ah.clone(G.uniforms)}else R=w.uniforms;return R}function A(w,b){let R;for(let G=0,z=u.length;G<z;G++){const q=u[G];if(q.cacheKey===b){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Gp(s,b,w,a),u.push(R)),R}function T(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:F}}function Yp(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function i(r){s.delete(r)}function n(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:a}}function $p(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $o(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function r(h,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||$p),i.length>1&&i.sort(d||Yo),n.length>1&&n.sort(d||Yo)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:u,sort:c}}function Kp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let r;return a===void 0?(r=new $o,s.set(i,[r])):n>=a.length?(r=new $o,a.push(r)):r=a[n],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function jp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new zt};break;case"SpotLight":e={position:new N,direction:new N,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jp=0;function Qp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tm(s){const t=new jp,e=Zp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const n=new N,a=new ce,r=new ce;function o(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,M=0,A=0,T=0,C=0;c.sort(Qp);for(let w=0,b=c.length;w<b;w++){const R=c[w],G=R.color,z=R.intensity,q=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=G.r*z,h+=G.g*z,d+=G.b*z;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],z);C++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=R.shadow.matrix,y++}i.directional[f]=B,f++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(G).multiplyScalar(z),B.distance=q,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[_]=B;const W=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,W.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[_]=W.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=$,M++}_++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(G).multiplyScalar(z),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=B,m++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const W=R.shadow,V=e.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(z),B.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==y||F.numPointShadows!==x||F.numSpotShadows!==M||F.numSpotMaps!==A||F.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=y,F.numPointShadows=x,F.numSpotShadows=M,F.numSpotMaps=A,F.numLightProbes=C,i.version=Jp++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),h++}else if(x.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),r.identity(),a.copy(x.matrixWorld),a.premultiply(m),r.extractRotation(a),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Ko(s){const t=new tm(s),e=[],i=[];function n(u){c.camera=u,e.length=0,i.length=0}function a(u){e.push(u)}function r(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function em(s){let t=new WeakMap;function e(n,a=0){const r=t.get(n);let o;return r===void 0?(o=new Ko(s),t.set(n,[o])):a>=r.length?(o=new Ko(s),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class im extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nm extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
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
}`;function rm(s,t,e){let i=new Gl;const n=new Lt,a=new Lt,r=new ge,o=new im({depthPacking:jc}),l=new nm,c={},u=e.maxTextureSize,h={[li]:Re,[Re]:li,[ke]:ke},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:sm,fragmentShader:am}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(T,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),G=s.state;G.setBlending(wi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=p!==si&&this.type===si,q=p===si&&this.type!==si;for(let $=0,B=T.length;$<B;$++){const W=T[$],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const st=V.getFrameExtents();if(n.multiply(st),a.copy(V.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/st.x),n.x=a.x*st.x,V.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/st.y),n.y=a.y*st.y,V.mapSize.y=a.y)),V.map===null||z===!0||q===!0){const dt=this.type!==si?{minFilter:ze,magFilter:ze}:{};V.map!==null&&V.map.dispose(),V.map=new Ki(n.x,n.y,dt),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const rt=V.getViewportCount();for(let dt=0;dt<rt;dt++){const Bt=V.getViewport(dt);r.set(a.x*Bt.x,a.y*Bt.y,a.x*Bt.z,a.y*Bt.w),G.viewport(r),V.updateMatrices(W,dt),i=V.getFrustum(),M(C,F,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===si&&y(V,F),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,R)};function y(T,C){const F=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ki(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,F,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,F,f,_,null)}function x(T,C,F,w){let b=null;const R=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)b=R;else if(b=F.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=b.uuid,z=C.uuid;let q=c[G];q===void 0&&(q={},c[G]=q);let $=q[z];$===void 0&&($=b.clone(),q[z]=$,C.addEventListener("dispose",A)),b=$}if(b.visible=C.visible,b.wireframe=C.wireframe,w===si?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=s.properties.get(b);G.light=F}return b}function M(T,C,F,w,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===si)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const z=t.update(T),q=T.material;if(Array.isArray(q)){const $=z.groups;for(let B=0,W=$.length;B<W;B++){const V=$[B],st=q[V.materialIndex];if(st&&st.visible){const rt=x(T,st,w,b);T.onBeforeShadow(s,T,C,F,z,rt,V),s.renderBufferDirect(F,null,z,rt,T,V),T.onAfterShadow(s,T,C,F,z,rt,V)}}}else if(q.visible){const $=x(T,q,w,b);T.onBeforeShadow(s,T,C,F,z,$,null),s.renderBufferDirect(F,null,z,$,T,null),T.onAfterShadow(s,T,C,F,z,$,null)}}const G=T.children;for(let z=0,q=G.length;z<q;z++)M(G[z],C,F,w,b)}function A(T){T.target.removeEventListener("dispose",A);for(const F in c){const w=c[F],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function om(s){function t(){let D=!1;const et=new ge;let Y=null;const K=new ge(0,0,0,0);return{setMask:function(nt){Y!==nt&&!D&&(s.colorMask(nt,nt,nt,nt),Y=nt)},setLocked:function(nt){D=nt},setClear:function(nt,St,kt,ae,ve){ve===!0&&(nt*=ae,St*=ae,kt*=ae),et.set(nt,St,kt,ae),K.equals(et)===!1&&(s.clearColor(nt,St,kt,ae),K.copy(et))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function e(){let D=!1,et=null,Y=null,K=null;return{setTest:function(nt){nt?gt(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(nt){et!==nt&&!D&&(s.depthMask(nt),et=nt)},setFunc:function(nt){if(Y!==nt){switch(nt){case Dc:s.depthFunc(s.NEVER);break;case Ic:s.depthFunc(s.ALWAYS);break;case Nc:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Uc:s.depthFunc(s.EQUAL);break;case Fc:s.depthFunc(s.GEQUAL);break;case Bc:s.depthFunc(s.GREATER);break;case Oc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=nt}},setLocked:function(nt){D=nt},setClear:function(nt){K!==nt&&(s.clearDepth(nt),K=nt)},reset:function(){D=!1,et=null,Y=null,K=null}}}function i(){let D=!1,et=null,Y=null,K=null,nt=null,St=null,kt=null,ae=null,ve=null;return{setTest:function(Ht){D||(Ht?gt(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(Ht){et!==Ht&&!D&&(s.stencilMask(Ht),et=Ht)},setFunc:function(Ht,Je,$e){(Y!==Ht||K!==Je||nt!==$e)&&(s.stencilFunc(Ht,Je,$e),Y=Ht,K=Je,nt=$e)},setOp:function(Ht,Je,$e){(St!==Ht||kt!==Je||ae!==$e)&&(s.stencilOp(Ht,Je,$e),St=Ht,kt=Je,ae=$e)},setLocked:function(Ht){D=Ht},setClear:function(Ht){ve!==Ht&&(s.clearStencil(Ht),ve=Ht)},reset:function(){D=!1,et=null,Y=null,K=null,nt=null,St=null,kt=null,ae=null,ve=null}}}const n=new t,a=new e,r=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,y=null,x=null,M=null,A=null,T=new zt(0,0,0),C=0,F=!1,w=null,b=null,R=null,G=null,z=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=B>=2);let V=null,st={};const rt=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),Bt=new ge().fromArray(rt),Yt=new ge().fromArray(dt);function X(D,et,Y,K){const nt=new Uint8Array(4),St=s.createTexture();s.bindTexture(D,St),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Y;kt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(et+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return St}const Q={};Q[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),r.setClear(0),gt(s.DEPTH_TEST),a.setFunc(Xs),$t(!1),xt(to),gt(s.CULL_FACE),ne(wi);function gt(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function ht(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Et(D,et){return u[D]!==et?(s.bindFramebuffer(D,et),u[D]=et,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=et),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=et),!0):!1}function Pt(D,et){let Y=d,K=!1;if(D){Y=h.get(et),Y===void 0&&(Y=[],h.set(et,Y));const nt=D.textures;if(Y.length!==nt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let St=0,kt=nt.length;St<kt;St++)Y[St]=s.COLOR_ATTACHMENT0+St;Y.length=nt.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function Ft(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const Qt={[Bi]:s.FUNC_ADD,[mc]:s.FUNC_SUBTRACT,[gc]:s.FUNC_REVERSE_SUBTRACT};Qt[_c]=s.MIN,Qt[vc]=s.MAX;const L={[xc]:s.ZERO,[yc]:s.ONE,[Mc]:s.SRC_COLOR,[Ka]:s.SRC_ALPHA,[Ac]:s.SRC_ALPHA_SATURATE,[wc]:s.DST_COLOR,[bc]:s.DST_ALPHA,[Sc]:s.ONE_MINUS_SRC_COLOR,[ja]:s.ONE_MINUS_SRC_ALPHA,[Tc]:s.ONE_MINUS_DST_COLOR,[Ec]:s.ONE_MINUS_DST_ALPHA,[Cc]:s.CONSTANT_COLOR,[Pc]:s.ONE_MINUS_CONSTANT_COLOR,[Rc]:s.CONSTANT_ALPHA,[Lc]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(D,et,Y,K,nt,St,kt,ae,ve,Ht){if(D===wi){g===!0&&(ht(s.BLEND),g=!1);return}if(g===!1&&(gt(s.BLEND),g=!0),D!==pc){if(D!==_||Ht!==F){if((m!==Bi||x!==Bi)&&(s.blendEquation(s.FUNC_ADD),m=Bi,x=Bi),Ht)switch(D){case En:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFunc(s.ONE,s.ONE);break;case io:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case En:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case io:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,y=null,M=null,A=null,T.set(0,0,0),C=0,_=D,F=Ht}return}nt=nt||et,St=St||Y,kt=kt||K,(et!==m||nt!==x)&&(s.blendEquationSeparate(Qt[et],Qt[nt]),m=et,x=nt),(Y!==p||K!==y||St!==M||kt!==A)&&(s.blendFuncSeparate(L[Y],L[K],L[St],L[kt]),p=Y,y=K,M=St,A=kt),(ae.equals(T)===!1||ve!==C)&&(s.blendColor(ae.r,ae.g,ae.b,ve),T.copy(ae),C=ve),_=D,F=!1}function Xt(D,et){D.side===ke?ht(s.CULL_FACE):gt(s.CULL_FACE);let Y=D.side===Re;et&&(Y=!Y),$t(Y),D.blending===En&&D.transparent===!1?ne(wi):ne(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),n.setMask(D.colorWrite);const K=D.stencilWrite;r.setTest(K),K&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),At(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(D){w!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),w=D)}function xt(D){D!==uc?(gt(s.CULL_FACE),D!==b&&(D===to?s.cullFace(s.BACK):D===dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),b=D}function se(D){D!==R&&($&&s.lineWidth(D),R=D)}function At(D,et,Y){D?(gt(s.POLYGON_OFFSET_FILL),(G!==et||z!==Y)&&(s.polygonOffset(et,Y),G=et,z=Y)):ht(s.POLYGON_OFFSET_FILL)}function Rt(D){D?gt(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function P(D){D===void 0&&(D=s.TEXTURE0+q-1),V!==D&&(s.activeTexture(D),V=D)}function S(D,et,Y){Y===void 0&&(V===null?Y=s.TEXTURE0+q-1:Y=V);let K=st[Y];K===void 0&&(K={type:void 0,texture:void 0},st[Y]=K),(K.type!==D||K.texture!==et)&&(V!==Y&&(s.activeTexture(Y),V=Y),s.bindTexture(D,et||Q[D]),K.type=D,K.texture=et)}function H(){const D=st[V];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(D){Bt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Bt.copy(D))}function ft(D){Yt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Yt.copy(D))}function Ct(D,et){let Y=l.get(et);Y===void 0&&(Y=new WeakMap,l.set(et,Y));let K=Y.get(D);K===void 0&&(K=s.getUniformBlockIndex(et,D.name),Y.set(D,K))}function Ut(D,et){const K=l.get(et).get(D);o.get(et)!==K&&(s.uniformBlockBinding(et,K,D.__bindingPointIndex),o.set(et,K))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},V=null,st={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,y=null,x=null,M=null,A=null,T=new zt(0,0,0),C=0,F=!1,w=null,b=null,R=null,G=null,z=null,Bt.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),n.reset(),a.reset(),r.reset()}return{buffers:{color:n,depth:a,stencil:r},enable:gt,disable:ht,bindFramebuffer:Et,drawBuffers:Pt,useProgram:Ft,setBlending:ne,setMaterial:Xt,setFlipSided:$t,setCullFace:xt,setLineWidth:se,setPolygonOffset:At,setScissorTest:Rt,activeTexture:P,bindTexture:S,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:ct,texImage3D:Ot,updateUBOMapping:Ct,uniformBlockBinding:Ut,texStorage2D:Dt,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:yt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Tt,viewport:ft,reset:Jt}}function jo(s,t,e,i){const n=lm(i);switch(e){case El:return s*t;case Tl:return s*t;case Al:return s*t*2;case Cl:return s*t/n.components*n.byteLength;case Br:return s*t/n.components*n.byteLength;case Pl:return s*t*2/n.components*n.byteLength;case Or:return s*t*2/n.components*n.byteLength;case wl:return s*t*3/n.components*n.byteLength;case Ye:return s*t*4/n.components*n.byteLength;case kr:return s*t*4/n.components*n.byteLength;case ks:case zs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ir:case sr:return Math.max(s,16)*Math.max(t,8)/4;case er:case nr:return Math.max(s,8)*Math.max(t,8)/2;case ar:case rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ur:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case mr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _r:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Mr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vs:case Sr:case br:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rl:case Er:return Math.ceil(s/4)*Math.ceil(t/4)*8;case wr:case Tr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(s){switch(s){case ci:case Ml:return{byteLength:1,components:1};case Qn:case Sl:case ns:return{byteLength:2,components:1};case Ur:case Fr:return{byteLength:2,components:4};case $i:case Nr:case ri:return{byteLength:4,components:1};case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function cm(s,t,e,i,n,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return f?new OffscreenCanvas(P,S):Zs("canvas")}function _(P,S,H){let j=1;const J=Rt(P);if((J.width>H||J.height>H)&&(j=H/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(j*J.width),yt=Math.floor(j*J.height);h===void 0&&(h=g(Z,yt));const ot=S?g(Z,yt):h;return ot.width=Z,ot.height=yt,ot.getContext("2d").drawImage(P,0,0,Z,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+yt+")."),ot}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==ze&&P.minFilter!==qe}function p(P){s.generateMipmap(P)}function y(P,S,H,j,J=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=S;if(S===s.RED&&(H===s.FLOAT&&(Z=s.R32F),H===s.HALF_FLOAT&&(Z=s.R16F),H===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.R8UI),H===s.UNSIGNED_SHORT&&(Z=s.R16UI),H===s.UNSIGNED_INT&&(Z=s.R32UI),H===s.BYTE&&(Z=s.R8I),H===s.SHORT&&(Z=s.R16I),H===s.INT&&(Z=s.R32I)),S===s.RG&&(H===s.FLOAT&&(Z=s.RG32F),H===s.HALF_FLOAT&&(Z=s.RG16F),H===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RG8UI),H===s.UNSIGNED_SHORT&&(Z=s.RG16UI),H===s.UNSIGNED_INT&&(Z=s.RG32UI),H===s.BYTE&&(Z=s.RG8I),H===s.SHORT&&(Z=s.RG16I),H===s.INT&&(Z=s.RG32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){const yt=J?Ys:qt.getTransfer(j);H===s.FLOAT&&(Z=s.RGBA32F),H===s.HALF_FLOAT&&(Z=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Z=yt===Zt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(P,S){let H;return P?S===null||S===$i||S===Pn?H=s.DEPTH24_STENCIL8:S===ri?H=s.DEPTH32F_STENCIL8:S===Qn&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$i||S===Pn?H=s.DEPTH_COMPONENT24:S===ri?H=s.DEPTH_COMPONENT32F:S===Qn&&(H=s.DEPTH_COMPONENT16),H}function M(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ze&&P.minFilter!==qe?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){const S=P.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&u.delete(S)}function T(P){const S=P.target;S.removeEventListener("dispose",T),w(S)}function C(P){const S=i.get(P);if(S.__webglInit===void 0)return;const H=P.source,j=d.get(H);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(P),Object.keys(j).length===0&&d.delete(H)}i.remove(P)}function F(P){const S=i.get(P);s.deleteTexture(S.__webglTexture);const H=P.source,j=d.get(H);delete j[S.__cacheKey],r.memory.textures--}function w(P){const S=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[j][J]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=P.textures;for(let j=0,J=H.length;j<J;j++){const Z=i.get(H[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(H[j])}i.remove(P)}let b=0;function R(){b=0}function G(){const P=b;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),b+=1,P}function z(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function q(P,S){const H=i.get(P);if(P.isVideoTexture&&se(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(H,P,S);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function $(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Yt(H,P,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function B(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Yt(H,P,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function W(P,S){const H=i.get(P);if(P.version>0&&H.__version!==P.version){X(H,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const V={[Qa]:s.REPEAT,[Vi]:s.CLAMP_TO_EDGE,[tr]:s.MIRRORED_REPEAT},st={[ze]:s.NEAREST,[$c]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[qe]:s.LINEAR,[ua]:s.LINEAR_MIPMAP_NEAREST,[Wi]:s.LINEAR_MIPMAP_LINEAR},rt={[Qc]:s.NEVER,[ah]:s.ALWAYS,[th]:s.LESS,[Ll]:s.LEQUAL,[eh]:s.EQUAL,[sh]:s.GEQUAL,[ih]:s.GREATER,[nh]:s.NOTEQUAL};function dt(P,S){if(S.type===ri&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===qe||S.magFilter===ua||S.magFilter===cs||S.magFilter===Wi||S.minFilter===qe||S.minFilter===ua||S.minFilter===cs||S.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,V[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,V[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,V[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,st[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ze||S.minFilter!==cs&&S.minFilter!==Wi||S.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(P,S){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const j=S.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const Z=z(S);if(Z!==P.__cacheKey){J[Z]===void 0&&(J[Z]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,H=!0),J[Z].usedTimes++;const yt=J[P.__cacheKey];yt!==void 0&&(J[P.__cacheKey].usedTimes--,yt.usedTimes===0&&F(S)),P.__cacheKey=Z,P.__webglTexture=J[Z].texture}return H}function Yt(P,S,H){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const J=Bt(P,S),Z=S.source;e.bindTexture(j,P.__webglTexture,s.TEXTURE0+H);const yt=i.get(Z);if(Z.version!==yt.__version||J===!0){e.activeTexture(s.TEXTURE0+H);const ot=qt.getPrimaries(qt.workingColorSpace),ut=S.colorSpace===Mi?null:qt.getPrimaries(S.colorSpace),Dt=S.colorSpace===Mi||ot===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let tt=_(S.image,!1,n.maxTextureSize);tt=At(S,tt);const ct=a.convert(S.format,S.colorSpace),Ot=a.convert(S.type);let Tt=y(S.internalFormat,ct,Ot,S.colorSpace,S.isVideoTexture);dt(j,S);let ft;const Ct=S.mipmaps,Ut=S.isVideoTexture!==!0,Jt=yt.__version===void 0||J===!0,D=Z.dataReady,et=M(S,tt);if(S.isDepthTexture)Tt=x(S.format===Rn,S.type),Jt&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ct,Ot,null));else if(S.isDataTexture)if(Ct.length>0){Ut&&Jt&&e.texStorage2D(s.TEXTURE_2D,et,Tt,Ct[0].width,Ct[0].height);for(let Y=0,K=Ct.length;Y<K;Y++)ft=Ct[Y],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,ct,Ot,ft.data):e.texImage2D(s.TEXTURE_2D,Y,Tt,ft.width,ft.height,0,ct,Ot,ft.data);S.generateMipmaps=!1}else Ut?(Jt&&e.texStorage2D(s.TEXTURE_2D,et,Tt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,ct,Ot,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,ct,Ot,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Tt,Ct[0].width,Ct[0].height,tt.depth);for(let Y=0,K=Ct.length;Y<K;Y++)if(ft=Ct[Y],S.format!==Ye)if(ct!==null)if(Ut){if(D)if(S.layerUpdates.size>0){const nt=jo(ft.width,ft.height,S.format,S.type);for(const St of S.layerUpdates){const kt=ft.data.subarray(St*nt/ft.data.BYTES_PER_ELEMENT,(St+1)*nt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,St,ft.width,ft.height,1,ct,kt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,tt.depth,ct,ft.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Tt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ft.width,ft.height,tt.depth,ct,Ot,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Tt,ft.width,ft.height,tt.depth,0,ct,Ot,ft.data)}else{Ut&&Jt&&e.texStorage2D(s.TEXTURE_2D,et,Tt,Ct[0].width,Ct[0].height);for(let Y=0,K=Ct.length;Y<K;Y++)ft=Ct[Y],S.format!==Ye?ct!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,ct,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ft.width,ft.height,ct,Ot,ft.data):e.texImage2D(s.TEXTURE_2D,Y,Tt,ft.width,ft.height,0,ct,Ot,ft.data)}else if(S.isDataArrayTexture)if(Ut){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Tt,tt.width,tt.height,tt.depth),D)if(S.layerUpdates.size>0){const Y=jo(tt.width,tt.height,S.format,S.type);for(const K of S.layerUpdates){const nt=tt.data.subarray(K*Y/tt.data.BYTES_PER_ELEMENT,(K+1)*Y/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ct,Ot,nt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,Ot,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,ct,Ot,tt.data);else if(S.isData3DTexture)Ut?(Jt&&e.texStorage3D(s.TEXTURE_3D,et,Tt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,Ot,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,ct,Ot,tt.data);else if(S.isFramebufferTexture){if(Jt)if(Ut)e.texStorage2D(s.TEXTURE_2D,et,Tt,tt.width,tt.height);else{let Y=tt.width,K=tt.height;for(let nt=0;nt<et;nt++)e.texImage2D(s.TEXTURE_2D,nt,Tt,Y,K,0,ct,Ot,null),Y>>=1,K>>=1}}else if(Ct.length>0){if(Ut&&Jt){const Y=Rt(Ct[0]);e.texStorage2D(s.TEXTURE_2D,et,Tt,Y.width,Y.height)}for(let Y=0,K=Ct.length;Y<K;Y++)ft=Ct[Y],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ct,Ot,ft):e.texImage2D(s.TEXTURE_2D,Y,Tt,ct,Ot,ft);S.generateMipmaps=!1}else if(Ut){if(Jt){const Y=Rt(tt);e.texStorage2D(s.TEXTURE_2D,et,Tt,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,Ot,tt)}else e.texImage2D(s.TEXTURE_2D,0,Tt,ct,Ot,tt);m(S)&&p(j),yt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function X(P,S,H){if(S.image.length!==6)return;const j=Bt(P,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+H);const Z=i.get(J);if(J.version!==Z.__version||j===!0){e.activeTexture(s.TEXTURE0+H);const yt=qt.getPrimaries(qt.workingColorSpace),ot=S.colorSpace===Mi?null:qt.getPrimaries(S.colorSpace),ut=S.colorSpace===Mi||yt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let K=0;K<6;K++)!Dt&&!tt?ct[K]=_(S.image[K],!0,n.maxCubemapSize):ct[K]=tt?S.image[K].image:S.image[K],ct[K]=At(S,ct[K]);const Ot=ct[0],Tt=a.convert(S.format,S.colorSpace),ft=a.convert(S.type),Ct=y(S.internalFormat,Tt,ft,S.colorSpace),Ut=S.isVideoTexture!==!0,Jt=Z.__version===void 0||j===!0,D=J.dataReady;let et=M(S,Ot);dt(s.TEXTURE_CUBE_MAP,S);let Y;if(Dt){Ut&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,Ct,Ot.width,Ot.height);for(let K=0;K<6;K++){Y=ct[K].mipmaps;for(let nt=0;nt<Y.length;nt++){const St=Y[nt];S.format!==Ye?Tt!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Ct,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,St.width,St.height,Tt,ft,St.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Ct,St.width,St.height,0,Tt,ft,St.data)}}}else{if(Y=S.mipmaps,Ut&&Jt){Y.length>0&&et++;const K=Rt(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,Ct,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ct[K].width,ct[K].height,Tt,ft,ct[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ct,ct[K].width,ct[K].height,0,Tt,ft,ct[K].data);for(let nt=0;nt<Y.length;nt++){const kt=Y[nt].image[K].image;Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,kt.width,kt.height,Tt,ft,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Ct,kt.width,kt.height,0,Tt,ft,kt.data)}}else{Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,ft,ct[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ct,Tt,ft,ct[K]);for(let nt=0;nt<Y.length;nt++){const St=Y[nt];Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,Tt,ft,St.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Ct,Tt,ft,St.image[K])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),Z.__version=J.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Q(P,S,H,j,J,Z){const yt=a.convert(H.format,H.colorSpace),ot=a.convert(H.type),ut=y(H.internalFormat,yt,ot,H.colorSpace);if(!i.get(S).__hasExternalTextures){const tt=Math.max(1,S.width>>Z),ct=Math.max(1,S.height>>Z);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,ut,tt,ct,S.depth,0,yt,ot,null):e.texImage2D(J,Z,ut,tt,ct,0,yt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,J,i.get(H).__webglTexture,0,$t(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,J,i.get(H).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(P,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,Z=x(S.stencilBuffer,J),yt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=$t(S);xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,Z,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,P)}else{const j=S.textures;for(let J=0;J<j.length;J++){const Z=j[J],yt=a.convert(Z.format,Z.colorSpace),ot=a.convert(Z.type),ut=y(Z.internalFormat,yt,ot,Z.colorSpace),Dt=$t(S);H&&xt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ut,S.width,S.height):xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const j=i.get(S.depthTexture).__webglTexture,J=$t(S);if(S.depthTexture.format===wn)xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===Rn)xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Et(P){const S=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,P)}else if(H){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),gt(S.__webglDepthbuffer[j],P,!1);else{const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),gt(S.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,S,H){const j=i.get(P);S!==void 0&&Q(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Et(P)}function Ft(P){const S=P.texture,H=i.get(P),j=i.get(S);P.addEventListener("dispose",T);const J=P.textures,Z=P.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,r.memory.textures++),Z){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let ut=0;ut<S.mipmaps.length;ut++)H.__webglFramebuffer[ot][ut]=s.createFramebuffer()}else H.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)H.__webglFramebuffer[ot]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(yt)for(let ot=0,ut=J.length;ot<ut;ot++){const Dt=i.get(J[ot]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),r.memory.textures++)}if(P.samples>0&&xt(P)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ut=J[ot];H.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ot]);const Dt=a.convert(ut.format,ut.colorSpace),tt=a.convert(ut.type),ct=y(ut.internalFormat,Dt,tt,ut.colorSpace,P.isXRRenderTarget===!0),Ot=$t(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,ct,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,H.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),dt(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)Q(H.__webglFramebuffer[ot][ut],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else Q(H.__webglFramebuffer[ot],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,ut=J.length;ot<ut;ot++){const Dt=J[ot],tt=i.get(Dt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),dt(s.TEXTURE_2D,Dt),Q(H.__webglFramebuffer,P,Dt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(Dt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ot=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),dt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)Q(H.__webglFramebuffer[ut],P,S,s.COLOR_ATTACHMENT0,ot,ut);else Q(H.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,ot,0);m(S)&&p(ot),e.unbindTexture()}P.depthBuffer&&Et(P)}function Qt(P){const S=P.textures;for(let H=0,j=S.length;H<j;H++){const J=S[H];if(m(J)){const Z=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,yt=i.get(J).__webglTexture;e.bindTexture(Z,yt),p(Z),e.unbindTexture()}}}const L=[],ne=[];function Xt(P){if(P.samples>0){if(xt(P)===!1){const S=P.textures,H=P.width,j=P.height;let J=s.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=i.get(P),ot=S.length>1;if(ot)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const Dt=i.get(S[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,H,j,0,0,H,j,J,s.NEAREST),l===!0&&(L.length=0,ne.length=0,L.push(s.COLOR_ATTACHMENT0+ut),P.depthBuffer&&P.resolveDepthBuffer===!1&&(L.push(Z),ne.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,yt.__webglColorRenderbuffer[ut]);const Dt=i.get(S[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $t(P){return Math.min(n.maxSamples,P.samples)}function xt(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(P){const S=r.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function At(P,S){const H=P.colorSpace,j=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Ai&&H!==Mi&&(qt.getTransfer(H)===Zt?(j!==Ye||J!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=xt}function hm(s,t){function e(i,n=Mi){let a;const r=qt.getTransfer(n);if(i===ci)return s.UNSIGNED_BYTE;if(i===Ur)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Fr)return s.UNSIGNED_SHORT_5_5_5_1;if(i===bl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ml)return s.BYTE;if(i===Sl)return s.SHORT;if(i===Qn)return s.UNSIGNED_SHORT;if(i===Nr)return s.INT;if(i===$i)return s.UNSIGNED_INT;if(i===ri)return s.FLOAT;if(i===ns)return s.HALF_FLOAT;if(i===El)return s.ALPHA;if(i===wl)return s.RGB;if(i===Ye)return s.RGBA;if(i===Tl)return s.LUMINANCE;if(i===Al)return s.LUMINANCE_ALPHA;if(i===wn)return s.DEPTH_COMPONENT;if(i===Rn)return s.DEPTH_STENCIL;if(i===Cl)return s.RED;if(i===Br)return s.RED_INTEGER;if(i===Pl)return s.RG;if(i===Or)return s.RG_INTEGER;if(i===kr)return s.RGBA_INTEGER;if(i===ks||i===zs||i===Hs||i===Gs)if(r===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===er||i===ir||i===nr||i===sr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===er)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ir)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ar||i===rr||i===or)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ar||i===rr)return r===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===or)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lr||i===cr||i===hr||i===ur||i===dr||i===fr||i===pr||i===mr||i===gr||i===_r||i===vr||i===xr||i===yr||i===Mr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===lr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ur)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_r)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mr)return r===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vs||i===Sr||i===br)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Vs)return r===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===br)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Er||i===wr||i===Tr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Vs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Er)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class um extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ls extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
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

}`;class mm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Le,a=t.properties.get(n);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ui({vertexShader:fm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gm extends Zi{constructor(t,e){super();const i=this;let n=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new mm,m=e.getContextAttributes();let p=null,y=null;const x=[],M=[],A=new Lt;let T=null;const C=new Oe;C.layers.enable(1),C.viewport=new ge;const F=new Oe;F.layers.enable(2),F.viewport=new ge;const w=[C,F],b=new um;b.layers.enable(1),b.layers.enable(2);let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new Ba,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new Ba,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new Ba,x[X]=Q),Q.getHandSpace()};function z(X){const Q=M.indexOf(X.inputSource);if(Q===-1)return;const gt=x[Q];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||r),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",$);for(let X=0;X<x.length;X++){const Q=M[X];Q!==null&&(M[X]=null,x[X].disconnect(Q))}R=null,G=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,n=null,y=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",q),n.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),n.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,e,Q),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Ye,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,gt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Rn:wn,gt=m.stencil?Pn:$i);const Et={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:a};h=new XRWebGLBinding(n,e),d=h.createProjectionLayer(Et),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ki(d.textureWidth,d.textureHeight,{format:Ye,type:ci,depthTexture:new Wl(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(o),Yt.setContext(n),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let Q=0;Q<X.removed.length;Q++){const gt=X.removed[Q],ht=M.indexOf(gt);ht>=0&&(M[ht]=null,x[ht].disconnect(gt))}for(let Q=0;Q<X.added.length;Q++){const gt=X.added[Q];let ht=M.indexOf(gt);if(ht===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=M.length){M.push(gt),ht=Pt;break}else if(M[Pt]===null){M[Pt]=gt,ht=Pt;break}if(ht===-1)break}const Et=x[ht];Et&&Et.connect(gt)}}const B=new N,W=new N;function V(X,Q,gt){B.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(gt.matrixWorld);const ht=B.distanceTo(W),Et=Q.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ft=Et[14]/(Et[10]-1),Qt=Et[14]/(Et[10]+1),L=(Et[9]+1)/Et[5],ne=(Et[9]-1)/Et[5],Xt=(Et[8]-1)/Et[0],$t=(Pt[8]+1)/Pt[0],xt=Ft*Xt,se=Ft*$t,At=ht/(-Xt+$t),Rt=At*-Xt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Rt),X.translateZ(At),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const P=Ft+At,S=Qt+At,H=xt-Rt,j=se+(ht-Rt),J=L*Qt/S*P,Z=ne*Qt/S*P;X.projectionMatrix.makePerspective(H,j,J,Z,P,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let Q=X.near,gt=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),b.near=F.near=C.near=Q,b.far=F.far=C.far=gt,(R!==b.near||G!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,G=b.far);const ht=X.parent,Et=b.cameras;st(b,ht);for(let Pt=0;Pt<Et.length;Pt++)st(Et[Pt],ht);Et.length===2?V(b,C,F):b.projectionMatrix.copy(C.projectionMatrix),rt(X,b,ht)};function rt(X,Q,gt){gt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ar*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let dt=null;function Bt(X,Q){if(u=Q.getViewerPose(c||r),g=Q,u!==null){const gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ht=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,ht=!0);for(let Pt=0;Pt<gt.length;Pt++){const Ft=gt[Pt];let Qt=null;if(f!==null)Qt=f.getViewport(Ft);else{const ne=h.getViewSubImage(d,Ft);Qt=ne.viewport,Pt===0&&(t.setRenderTargetTextures(y,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(y))}let L=w[Pt];L===void 0&&(L=new Oe,L.layers.enable(Pt),L.viewport=new ge,w[Pt]=L),L.matrix.fromArray(Ft.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ft.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Pt===0&&(b.matrix.copy(L.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ht===!0&&b.cameras.push(L)}const Et=n.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Pt=h.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,n.renderState)}}for(let gt=0;gt<x.length;gt++){const ht=M[gt],Et=x[gt];ht!==null&&Et!==void 0&&Et.update(ht,Q,c||r)}dt&&dt(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Yt=new Vl;Yt.setAnimationLoop(Bt),this.setAnimationLoop=function(X){dt=X},this.dispose=function(){}}}const Ni=new hi,_m=new ce;function vm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,kl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,M=y.envMapRotation;x&&(m.envMap.value=x,Ni.copy(M),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function xm(s,t,e,i){let n={},a={},r=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;i.uniformBlockBinding(y,M)}function c(y,x){let M=n[y.id];M===void 0&&(g(y),M=u(y),n[y.id]=M,y.addEventListener("dispose",m));const A=x.program;i.updateUBOMapping(y,A);const T=t.render.frame;a[y.id]!==T&&(d(y),a[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const M=s.createBuffer(),A=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function h(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=n[y.id],M=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,C=M.length;T<C;T++){const F=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,b=F.length;w<b;w++){const R=F[w];if(f(R,T,w,A)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let $=0;$<z.length;$++){const B=z[$],W=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,G+q,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,M,A){const T=y.value,C=x+"_"+M;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const F=A[C];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return A[C]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(y){const x=y.uniforms;let M=0;const A=16;for(let C=0,F=x.length;C<F;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,R=w.length;b<R;b++){const G=w[b],z=Array.isArray(G.value)?G.value:[G.value];for(let q=0,$=z.length;q<$;q++){const B=z[q],W=_(B),V=M%A,st=V%W.boundary,rt=V+st;M+=st,rt!==0&&A-rt<W.storage&&(M+=A-rt),G.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=W.storage}}}const T=M%A;return T>0&&(M+=A-T),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const M=r.indexOf(x.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete a[x.id]}function p(){for(const y in n)s.deleteBuffer(n[y]);r=[],n={},a={}}return{bind:l,update:c,dispose:p}}class ym{constructor(t={}){const{canvas:e=lh(),context:i=null,depth:n=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Ti,this.toneMappingExposure=1;const x=this;let M=!1,A=0,T=0,C=null,F=-1,w=null;const b=new ge,R=new ge;let G=null;const z=new zt(0);let q=0,$=e.width,B=e.height,W=1,V=null,st=null;const rt=new ge(0,0,$,B),dt=new ge(0,0,$,B);let Bt=!1;const Yt=new Gl;let X=!1,Q=!1;const gt=new ce,ht=new N,Et=new ge,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Qt(){return C===null?W:1}let L=i;function ne(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ir}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",nt,!1),L===null){const I="webgl2";if(L=ne(I,E),L===null)throw ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xt,$t,xt,se,At,Rt,P,S,H,j,J,Z,yt,ot,ut,Dt,tt,ct,Ot,Tt,ft,Ct,Ut,Jt;function D(){Xt=new Tf(L),Xt.init(),Ct=new hm(L,Xt),$t=new xf(L,Xt,t,Ct),xt=new om(L),se=new Pf(L),At=new Yp,Rt=new cm(L,Xt,xt,At,$t,Ct,se),P=new Mf(x),S=new wf(x),H=new Nh(L),Ut=new _f(L,H),j=new Af(L,H,se,Ut),J=new Lf(L,j,H,se),Ot=new Rf(L,$t,Rt),Dt=new yf(At),Z=new Xp(x,P,S,Xt,$t,Ut,Dt),yt=new vm(x,At),ot=new Kp,ut=new em(Xt),ct=new gf(x,P,S,xt,J,d,l),tt=new rm(x,J,$t),Jt=new xm(L,se,$t,xt),Tt=new vf(L,Xt,se),ft=new Cf(L,Xt,se),se.programs=Z.programs,x.capabilities=$t,x.extensions=Xt,x.properties=At,x.renderLists=ot,x.shadowMap=tt,x.state=xt,x.info=se}D();const et=new gm(x,L);this.xr=et,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize($,B,!1))},this.getSize=function(E){return E.set($,B)},this.setSize=function(E,I,O=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,B=I,e.width=Math.floor(E*W),e.height=Math.floor(I*W),O===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set($*W,B*W).floor()},this.setDrawingBufferSize=function(E,I,O){$=E,B=I,W=O,e.width=Math.floor(E*O),e.height=Math.floor(I*O),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,I,O,k){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,I,O,k),xt.viewport(b.copy(rt).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,I,O,k){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,I,O,k),xt.scissor(R.copy(dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(E){xt.setScissorTest(Bt=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(E=!0,I=!0,O=!0){let k=0;if(E){let U=!1;if(C!==null){const it=C.texture.format;U=it===kr||it===Or||it===Br}if(U){const it=C.texture.type,lt=it===ci||it===$i||it===Qn||it===Pn||it===Ur||it===Fr,pt=ct.getClearColor(),mt=ct.getClearAlpha(),bt=pt.r,wt=pt.g,_t=pt.b;lt?(f[0]=bt,f[1]=wt,f[2]=_t,f[3]=mt,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=bt,g[1]=wt,g[2]=_t,g[3]=mt,L.clearBufferiv(L.COLOR,0,g))}else k|=L.COLOR_BUFFER_BIT}I&&(k|=L.DEPTH_BUFFER_BIT),O&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),ot.dispose(),ut.dispose(),At.dispose(),P.dispose(),S.dispose(),J.dispose(),Ut.dispose(),Jt.dispose(),Z.dispose(),et.dispose(),et.removeEventListener("sessionstart",$e),et.removeEventListener("sessionend",Yr),Ci.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=se.autoReset,I=tt.enabled,O=tt.autoUpdate,k=tt.needsUpdate,U=tt.type;D(),se.autoReset=E,tt.enabled=I,tt.autoUpdate=O,tt.needsUpdate=k,tt.type=U}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function St(E){const I=E.target;I.removeEventListener("dispose",St),kt(I)}function kt(E){ae(E),At.remove(E)}function ae(E){const I=At.get(E).programs;I!==void 0&&(I.forEach(function(O){Z.releaseProgram(O)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,O,k,U,it){I===null&&(I=Pt);const lt=U.isMesh&&U.matrixWorld.determinant()<0,pt=Ql(E,I,O,k,U);xt.setMaterial(k,lt);let mt=O.index,bt=1;if(k.wireframe===!0){if(mt=j.getWireframeAttribute(O),mt===void 0)return;bt=2}const wt=O.drawRange,_t=O.attributes.position;let Gt=wt.start*bt,te=(wt.start+wt.count)*bt;it!==null&&(Gt=Math.max(Gt,it.start*bt),te=Math.min(te,(it.start+it.count)*bt)),mt!==null?(Gt=Math.max(Gt,0),te=Math.min(te,mt.count)):_t!=null&&(Gt=Math.max(Gt,0),te=Math.min(te,_t.count));const ee=te-Gt;if(ee<0||ee===1/0)return;Ut.setup(U,k,pt,O,mt);let De,Vt=Tt;if(mt!==null&&(De=H.get(mt),Vt=ft,Vt.setIndex(De)),U.isMesh)k.wireframe===!0?(xt.setLineWidth(k.wireframeLinewidth*Qt()),Vt.setMode(L.LINES)):Vt.setMode(L.TRIANGLES);else if(U.isLine){let vt=k.linewidth;vt===void 0&&(vt=1),xt.setLineWidth(vt*Qt()),U.isLineSegments?Vt.setMode(L.LINES):U.isLineLoop?Vt.setMode(L.LINE_LOOP):Vt.setMode(L.LINE_STRIP)}else U.isPoints?Vt.setMode(L.POINTS):U.isSprite&&Vt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Vt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const vt=U._multiDrawStarts,xe=U._multiDrawCounts,Wt=U._multiDrawCount,He=mt?H.get(mt).bytesPerElement:1,Ji=At.get(k).currentProgram.getUniforms();for(let Ie=0;Ie<Wt;Ie++)Ji.setValue(L,"_gl_DrawID",Ie),Vt.render(vt[Ie]/He,xe[Ie])}else if(U.isInstancedMesh)Vt.renderInstances(Gt,ee,U.count);else if(O.isInstancedBufferGeometry){const vt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,xe=Math.min(O.instanceCount,vt);Vt.renderInstances(Gt,ee,xe)}else Vt.render(Gt,ee)};function ve(E,I,O){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,ls(E,I,O),E.side=li,E.needsUpdate=!0,ls(E,I,O),E.side=ke):ls(E,I,O)}this.compile=function(E,I,O=null){O===null&&(O=E),m=ut.get(O),m.init(I),y.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==O&&E.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const k=new Set;return E.traverse(function(U){const it=U.material;if(it)if(Array.isArray(it))for(let lt=0;lt<it.length;lt++){const pt=it[lt];ve(pt,O,U),k.add(pt)}else ve(it,O,U),k.add(it)}),y.pop(),m=null,k},this.compileAsync=function(E,I,O=null){const k=this.compile(E,I,O);return new Promise(U=>{function it(){if(k.forEach(function(lt){At.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){U(E);return}setTimeout(it,10)}Xt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Ht=null;function Je(E){Ht&&Ht(E)}function $e(){Ci.stop()}function Yr(){Ci.start()}const Ci=new Vl;Ci.setAnimationLoop(Je),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(E){Ht=E,et.setAnimationLoop(E),E===null?Ci.stop():Ci.start()},et.addEventListener("sessionstart",$e),et.addEventListener("sessionend",Yr),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,I,C),m=ut.get(E,y.length),m.init(I),y.push(m),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Yt.setFromProjectionMatrix(gt),Q=this.localClippingEnabled,X=Dt.init(this.clippingPlanes,Q),_=ot.get(E,p.length),_.init(),p.push(_),et.enabled===!0&&et.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&ra(it,I,-1/0,x.sortObjects)}ra(E,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,st),Ft=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ft&&ct.addToRenderList(_,E),this.info.render.frame++,X===!0&&Dt.beginShadows();const O=m.state.shadowsArray;tt.render(O,E,I),X===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,U=_.transmissive;if(m.setupLights(),I.isArrayCamera){const it=I.cameras;if(U.length>0)for(let lt=0,pt=it.length;lt<pt;lt++){const mt=it[lt];Kr(k,U,E,mt)}Ft&&ct.render(E);for(let lt=0,pt=it.length;lt<pt;lt++){const mt=it[lt];$r(_,E,mt,mt.viewport)}}else U.length>0&&Kr(k,U,E,I),Ft&&ct.render(E),$r(_,E,I);C!==null&&(Rt.updateMultisampleRenderTarget(C),Rt.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,I),Ut.resetDefaultState(),F=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&Dt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ra(E,I,O,k){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){k&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const lt=J.update(E),pt=E.material;pt.visible&&_.push(E,lt,pt,O,Et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){const lt=J.update(E),pt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Et.copy(lt.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(gt)),Array.isArray(pt)){const mt=lt.groups;for(let bt=0,wt=mt.length;bt<wt;bt++){const _t=mt[bt],Gt=pt[_t.materialIndex];Gt&&Gt.visible&&_.push(E,lt,Gt,O,Et.z,_t)}}else pt.visible&&_.push(E,lt,pt,O,Et.z,null)}}const it=E.children;for(let lt=0,pt=it.length;lt<pt;lt++)ra(it[lt],I,O,k)}function $r(E,I,O,k){const U=E.opaque,it=E.transmissive,lt=E.transparent;m.setupLightsView(O),X===!0&&Dt.setGlobalState(x.clippingPlanes,O),k&&xt.viewport(b.copy(k)),U.length>0&&os(U,I,O),it.length>0&&os(it,I,O),lt.length>0&&os(lt,I,O),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Kr(E,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Ki(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?ns:ci,minFilter:Wi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const it=m.state.transmissionRenderTarget[k.id],lt=k.viewport||b;it.setSize(lt.z,lt.w);const pt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(z),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ft&&ct.render(O);const mt=x.toneMapping;x.toneMapping=Ti;const bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),X===!0&&Dt.setGlobalState(x.clippingPlanes,k),os(E,O,k),Rt.updateMultisampleRenderTarget(it),Rt.updateRenderTargetMipmap(it),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let _t=0,Gt=I.length;_t<Gt;_t++){const te=I[_t],ee=te.object,De=te.geometry,Vt=te.material,vt=te.group;if(Vt.side===ke&&ee.layers.test(k.layers)){const xe=Vt.side;Vt.side=Re,Vt.needsUpdate=!0,jr(ee,O,k,De,Vt,vt),Vt.side=xe,Vt.needsUpdate=!0,wt=!0}}wt===!0&&(Rt.updateMultisampleRenderTarget(it),Rt.updateRenderTargetMipmap(it))}x.setRenderTarget(pt),x.setClearColor(z,q),bt!==void 0&&(k.viewport=bt),x.toneMapping=mt}function os(E,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,it=E.length;U<it;U++){const lt=E[U],pt=lt.object,mt=lt.geometry,bt=k===null?lt.material:k,wt=lt.group;pt.layers.test(O.layers)&&jr(pt,I,O,mt,bt,wt)}}function jr(E,I,O,k,U,it){E.onBeforeRender(x,I,O,k,U,it),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,I,O,k,E,it),U.transparent===!0&&U.side===ke&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,x.renderBufferDirect(O,I,k,U,E,it),U.side=li,U.needsUpdate=!0,x.renderBufferDirect(O,I,k,U,E,it),U.side=ke):x.renderBufferDirect(O,I,k,U,E,it),E.onAfterRender(x,I,O,k,U,it)}function ls(E,I,O){I.isScene!==!0&&(I=Pt);const k=At.get(E),U=m.state.lights,it=m.state.shadowsArray,lt=U.state.version,pt=Z.getParameters(E,U.state,it,I,O),mt=Z.getProgramCacheKey(pt);let bt=k.programs;k.environment=E.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(E.isMeshStandardMaterial?S:P).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,bt===void 0&&(E.addEventListener("dispose",St),bt=new Map,k.programs=bt);let wt=bt.get(mt);if(wt!==void 0){if(k.currentProgram===wt&&k.lightsStateVersion===lt)return Jr(E,pt),wt}else pt.uniforms=Z.getUniforms(E),E.onBeforeCompile(pt,x),wt=Z.acquireProgram(pt,mt),bt.set(mt,wt),k.uniforms=pt.uniforms;const _t=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_t.clippingPlanes=Dt.uniform),Jr(E,pt),k.needsLights=ec(E),k.lightsStateVersion=lt,k.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=wt,k.uniformsList=null,wt}function Zr(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Jr(E,I){const O=At.get(E);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Ql(E,I,O,k,U){I.isScene!==!0&&(I=Pt),Rt.resetTextureUnits();const it=I.fog,lt=k.isMeshStandardMaterial?I.environment:null,pt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ai,mt=(k.isMeshStandardMaterial?S:P).get(k.envMap||lt),bt=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,wt=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!O.morphAttributes.position,Gt=!!O.morphAttributes.normal,te=!!O.morphAttributes.color;let ee=Ti;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ee=x.toneMapping);const De=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Vt=De!==void 0?De.length:0,vt=At.get(k),xe=m.state.lights;if(X===!0&&(Q===!0||E!==w)){const Fe=E===w&&k.id===F;Dt.setState(k,E,Fe)}let Wt=!1;k.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==xe.state.version||vt.outputColorSpace!==pt||U.isBatchedMesh&&vt.batching===!1||!U.isBatchedMesh&&vt.batching===!0||U.isBatchedMesh&&vt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&vt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&vt.instancing===!1||!U.isInstancedMesh&&vt.instancing===!0||U.isSkinnedMesh&&vt.skinning===!1||!U.isSkinnedMesh&&vt.skinning===!0||U.isInstancedMesh&&vt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&vt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&vt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&vt.instancingMorph===!1&&U.morphTexture!==null||vt.envMap!==mt||k.fog===!0&&vt.fog!==it||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Dt.numPlanes||vt.numIntersection!==Dt.numIntersection)||vt.vertexAlphas!==bt||vt.vertexTangents!==wt||vt.morphTargets!==_t||vt.morphNormals!==Gt||vt.morphColors!==te||vt.toneMapping!==ee||vt.morphTargetsCount!==Vt)&&(Wt=!0):(Wt=!0,vt.__version=k.version);let He=vt.currentProgram;Wt===!0&&(He=ls(k,I,U));let Ji=!1,Ie=!1,oa=!1;const re=He.getUniforms(),di=vt.uniforms;if(xt.useProgram(He.program)&&(Ji=!0,Ie=!0,oa=!0),k.id!==F&&(F=k.id,Ie=!0),Ji||w!==E){re.setValue(L,"projectionMatrix",E.projectionMatrix),re.setValue(L,"viewMatrix",E.matrixWorldInverse);const Fe=re.map.cameraPosition;Fe!==void 0&&Fe.setValue(L,ht.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&re.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&re.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ie=!0,oa=!0)}if(U.isSkinnedMesh){re.setOptional(L,U,"bindMatrix"),re.setOptional(L,U,"bindMatrixInverse");const Fe=U.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),re.setValue(L,"boneTexture",Fe.boneTexture,Rt))}U.isBatchedMesh&&(re.setOptional(L,U,"batchingTexture"),re.setValue(L,"batchingTexture",U._matricesTexture,Rt),re.setOptional(L,U,"batchingIdTexture"),re.setValue(L,"batchingIdTexture",U._indirectTexture,Rt),re.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(L,"batchingColorTexture",U._colorsTexture,Rt));const la=O.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0)&&Ot.update(U,O,He),(Ie||vt.receiveShadow!==U.receiveShadow)&&(vt.receiveShadow=U.receiveShadow,re.setValue(L,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(di.envMap.value=mt,di.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(di.envMapIntensity.value=I.environmentIntensity),Ie&&(re.setValue(L,"toneMappingExposure",x.toneMappingExposure),vt.needsLights&&tc(di,oa),it&&k.fog===!0&&yt.refreshFogUniforms(di,it),yt.refreshMaterialUniforms(di,k,W,B,m.state.transmissionRenderTarget[E.id]),Ws.upload(L,Zr(vt),di,Rt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ws.upload(L,Zr(vt),di,Rt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&re.setValue(L,"center",U.center),re.setValue(L,"modelViewMatrix",U.modelViewMatrix),re.setValue(L,"normalMatrix",U.normalMatrix),re.setValue(L,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Fe=k.uniformsGroups;for(let ca=0,ic=Fe.length;ca<ic;ca++){const Qr=Fe[ca];Jt.update(Qr,He),Jt.bind(Qr,He)}}return He}function tc(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function ec(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,I,O){At.get(E.texture).__webglTexture=I,At.get(E.depthTexture).__webglTexture=O;const k=At.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,I){const O=At.get(E);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,O=0){C=E,A=I,T=O;let k=!0,U=null,it=!1,lt=!1;if(E){const mt=At.get(E);if(mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)Rt.setupRenderTarget(E);else if(mt.__hasExternalTextures)Rt.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const _t=E.depthTexture;if(mt.__boundDepthTexture!==_t){if(_t!==null&&At.has(_t)&&(E.width!==_t.image.width||E.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(E)}}const bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(lt=!0);const wt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?U=wt[I][O]:U=wt[I],it=!0):E.samples>0&&Rt.useMultisampledRTT(E)===!1?U=At.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?U=wt[O]:U=wt,b.copy(E.viewport),R.copy(E.scissor),G=E.scissorTest}else b.copy(rt).multiplyScalar(W).floor(),R.copy(dt).multiplyScalar(W).floor(),G=Bt;if(xt.bindFramebuffer(L.FRAMEBUFFER,U)&&k&&xt.drawBuffers(E,U),xt.viewport(b),xt.scissor(R),xt.setScissorTest(G),it){const mt=At.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,O)}else if(lt){const mt=At.get(E.texture),bt=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,mt.__webglTexture,O||0,bt)}F=-1},this.readRenderTargetPixels=function(E,I,O,k,U,it,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){xt.bindFramebuffer(L.FRAMEBUFFER,pt);try{const mt=E.texture,bt=mt.format,wt=mt.type;if(!$t.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-k&&O>=0&&O<=E.height-U&&L.readPixels(I,O,k,U,Ct.convert(bt),Ct.convert(wt),it)}finally{const mt=C!==null?At.get(C).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(E,I,O,k,U,it,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){xt.bindFramebuffer(L.FRAMEBUFFER,pt);try{const mt=E.texture,bt=mt.format,wt=mt.type;if(!$t.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=E.width-k&&O>=0&&O<=E.height-U){const _t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.bufferData(L.PIXEL_PACK_BUFFER,it.byteLength,L.STREAM_READ),L.readPixels(I,O,k,U,Ct.convert(bt),Ct.convert(wt),0),L.flush();const Gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await ch(L,Gt,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,it)}finally{L.deleteBuffer(_t),L.deleteSync(Gt)}return it}}finally{const mt=C!==null?At.get(C).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(E,I=null,O=0){E.isTexture!==!0&&(jn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-O),U=Math.floor(E.image.width*k),it=Math.floor(E.image.height*k),lt=I!==null?I.x:0,pt=I!==null?I.y:0;Rt.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,O,0,0,lt,pt,U,it),xt.unbindTexture()},this.copyTextureToTexture=function(E,I,O=null,k=null,U=0){E.isTexture!==!0&&(jn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let it,lt,pt,mt,bt,wt;O!==null?(it=O.max.x-O.min.x,lt=O.max.y-O.min.y,pt=O.min.x,mt=O.min.y):(it=E.image.width,lt=E.image.height,pt=0,mt=0),k!==null?(bt=k.x,wt=k.y):(bt=0,wt=0);const _t=Ct.convert(I.format),Gt=Ct.convert(I.type);Rt.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const te=L.getParameter(L.UNPACK_ROW_LENGTH),ee=L.getParameter(L.UNPACK_IMAGE_HEIGHT),De=L.getParameter(L.UNPACK_SKIP_PIXELS),Vt=L.getParameter(L.UNPACK_SKIP_ROWS),vt=L.getParameter(L.UNPACK_SKIP_IMAGES),xe=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,mt),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,bt,wt,it,lt,_t,Gt,xe.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,bt,wt,xe.width,xe.height,_t,xe.data):L.texSubImage2D(L.TEXTURE_2D,U,bt,wt,it,lt,_t,Gt,xe),L.pixelStorei(L.UNPACK_ROW_LENGTH,te),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vt),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(E,I,O=null,k=null,U=0){E.isTexture!==!0&&(jn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,E=arguments[2],I=arguments[3],U=arguments[4]||0);let it,lt,pt,mt,bt,wt,_t,Gt,te;const ee=E.isCompressedTexture?E.mipmaps[U]:E.image;O!==null?(it=O.max.x-O.min.x,lt=O.max.y-O.min.y,pt=O.max.z-O.min.z,mt=O.min.x,bt=O.min.y,wt=O.min.z):(it=ee.width,lt=ee.height,pt=ee.depth,mt=0,bt=0,wt=0),k!==null?(_t=k.x,Gt=k.y,te=k.z):(_t=0,Gt=0,te=0);const De=Ct.convert(I.format),Vt=Ct.convert(I.type);let vt;if(I.isData3DTexture)Rt.setTexture3D(I,0),vt=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Rt.setTexture2DArray(I,0),vt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const xe=L.getParameter(L.UNPACK_ROW_LENGTH),Wt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),He=L.getParameter(L.UNPACK_SKIP_PIXELS),Ji=L.getParameter(L.UNPACK_SKIP_ROWS),Ie=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(vt,U,_t,Gt,te,it,lt,pt,De,Vt,ee.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,U,_t,Gt,te,it,lt,pt,De,ee.data):L.texSubImage3D(vt,U,_t,Gt,te,it,lt,pt,De,Vt,ee),L.pixelStorei(L.UNPACK_ROW_LENGTH,xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ji),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie),U===0&&I.generateMipmaps&&L.generateMipmap(vt),xt.unbindTexture()},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&Rt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Rt.setTextureCube(E,0):E.isData3DTexture?Rt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Rt.setTexture2DArray(E,0):Rt.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,xt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zr?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===ia?"display-p3":"srgb"}}class Vr{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=i}clone(){return new Vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mm extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yi extends rs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Js=new N,Qs=new N,Zo=new ce,Gn=new Hr,Ds=new na,Oa=new N,Jo=new N;class ta extends we{constructor(t=new le,e=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,a=e.count;n<a;n++)Js.fromBufferAttribute(e,n-1),Qs.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Js.distanceTo(Qs);t.setAttribute("lineDistance",new _e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(n),Ds.radius+=a,t.ray.intersectsSphere(Ds)===!1)return;Zo.copy(n).invert(),Gn.copy(t.ray).applyMatrix4(Zo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),x=Is(this,t,Gn,l,p,y);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Is(this,t,Gn,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=Is(this,t,Gn,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Is(this,t,Gn,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++){const o=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Is(s,t,e,i,n,a){const r=s.geometry.attributes.position;if(Js.fromBufferAttribute(r,n),Qs.fromBufferAttribute(r,a),e.distanceSqToSegment(Js,Qs,Oa,Jo)>i)return;Oa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Oa);if(!(l<t.near||l>t.far))return{distance:l,point:Jo.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,object:s}}const Qo=new N,tl=new N;class Pr extends ta{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,a=e.count;n<a;n+=2)Qo.fromBufferAttribute(e,n),tl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Qo.distanceTo(tl);t.setAttribute("lineDistance",new _e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Ns=new N,Us=new N,ka=new N,Fs=new Xe;class Sm extends le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),a=Math.cos(Kn*e),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Fs;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Fs.getNormal(ka),h[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,h[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,M=h[y],A=h[x],T=Fs[u[y]],C=Fs[u[x]],F=`${M}_${A}`,w=`${A}_${M}`;w in d&&d[w]?(ka.dot(d[w].normal)<=a&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),d[w]=null):F in d||(d[F]={index0:c[y],index1:c[x],normal:ka.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Ns.fromBufferAttribute(o,_),Us.fromBufferAttribute(o,m),f.push(Ns.x,Ns.y,Ns.z),f.push(Us.x,Us.y,Us.z)}this.setAttribute("position",new _e(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Wr extends le{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const u=[],h=new N,d=new N,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let M=0;p===0&&r===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const T=A/e;h.x=-t*Math.cos(n+T*a)*Math.sin(r+x*o),h.y=t*Math.cos(r+x*o),h.z=t*Math.sin(n+T*a)*Math.sin(r+x*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+M,1-x),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const x=u[p][y+1],M=u[p][y],A=u[p+1][y],T=u[p+1][y+1];(p!==0||r>0)&&f.push(x,M,T),(p!==i-1||l<Math.PI)&&f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qr extends le{constructor(t=1,e=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);const r=[],o=[],l=[],c=[],u=new N,h=new N,d=new N;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const _=g/n*a,m=f/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const _=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,y=(n+1)*f+g;r.push(_,m,y),r.push(m,p,y)}this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bm extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Em extends bm{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class el{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kl extends Pr{constructor(t=10,e=10,i=4473924,n=8947848){i=new zt(i),n=new zt(n);const a=e/2,r=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=e;d++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===a?i:n;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new le;u.setAttribute("position",new _e(l,3)),u.setAttribute("color",new _e(c,3));const h=new Yi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wm extends Zi{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);function $n(s){const t=Math.max(0,Math.min(1,s));if(t<.2){const i=t/.2;return[Math.round(i*40),0,Math.round(60+i*80)]}if(t<.4){const i=(t-.2)/.2;return[Math.round(40+i*110),Math.round(i*60),Math.round(140-i*40)]}if(t<.62){const i=(t-.4)/.22;return[Math.round(150-i*68),Math.round(60+i*147),Math.round(100+i*154)]}if(t<.82){const i=(t-.62)/.2;return[Math.round(82+i*173),Math.round(207+i*38),Math.round(254-i*200)]}const e=(t-.82)/.18;return[255,Math.round(245+e*10),Math.round(54+e*201)]}const il={type:"change"},Xr={type:"start"},jl={type:"end"},Bs=new Hr,nl=new yi,Tm=Math.cos(70*oh.DEG2RAD),he=new N,Ae=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},za=1e-6;class Am extends wm{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bn.ROTATE,MIDDLE:bn.DOLLY,RIGHT:bn.PAN},this.touches={ONE:vn.ROTATE,TWO:vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ji,this._lastTargetPosition=new N,this._quat=new ji().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new el,this._sphericalDelta=new el,this._scale=1,this._panOffset=new N,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new N,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pm.bind(this),this._onPointerDown=Cm.bind(this),this._onPointerUp=Rm.bind(this),this._onContextMenu=Bm.bind(this),this._onMouseWheel=Im.bind(this),this._onKeyDown=Nm.bind(this),this._onTouchStart=Um.bind(this),this._onTouchMove=Fm.bind(this),this._onMouseDown=Lm.bind(this),this._onMouseMove=Dm.bind(this),this._interceptControlDown=Om.bind(this),this._interceptControlUp=km.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(il),this.update(),this.state=Kt.NONE}update(t=null){const e=this.object.position;he.copy(e).sub(this.target),he.applyQuaternion(this._quat),this._spherical.setFromVector3(he),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Ae:i>Math.PI&&(i-=Ae),n<-Math.PI?n+=Ae:n>Math.PI&&(n-=Ae),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(he.setFromSpherical(this._spherical),he.applyQuaternion(this._quatInverse),e.copy(this.target).add(he),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=he.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=he.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Bs.origin.copy(this.object.position),Bs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bs.direction))<Tm?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bs.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>za||this._lastTargetPosition.distanceToSquared(this.target)>za?(this.dispatchEvent(il),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ae/60*this.autoRotateSpeed*t:Ae/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){he.setFromMatrixColumn(e,0),he.multiplyScalar(-t),this._panOffset.add(he)}_panUp(t,e){this.screenSpacePanning===!0?he.setFromMatrixColumn(e,1):(he.setFromMatrixColumn(e,0),he.crossVectors(this.object.up,he)),he.multiplyScalar(t),this._panOffset.add(he)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;he.copy(n).sub(this.target);let a=he.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=t-i.left,a=e-i.top,r=i.width,o=i.height;this._mouse.x=n/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ae*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ae*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ae*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ae*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ae*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Cm(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Pm(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Rm(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jl),this.state=Kt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Lm(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Kt.DOLLY;break;case bn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}break;case bn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Xr)}function Dm(s){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Im(s){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(s.preventDefault(),this.dispatchEvent(Xr),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(jl))}function Nm(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Um(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Kt.TOUCH_ROTATE;break;case vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Kt.TOUCH_DOLLY_PAN;break;case vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Xr)}function Fm(s){switch(this._trackPointer(s),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Kt.NONE}}function Bm(s){this.enabled!==!1&&s.preventDefault()}function Om(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function km(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sl=263431;function Zl(s,{camera:t,target:e,fov:i=44,fog:n=[8,22]}){const a=Math.min(window.devicePixelRatio||1,2),r=s.width/a,o=s.height/a,l=new ym({canvas:s,antialias:!0,powerPreference:"high-performance"});l.setSize(r,o,!1),l.setPixelRatio(a),l.setClearColor(sl,1);const c=new Mm;c.fog=new Vr(sl,n[0],n[1]),c.add(new Em(16777215,1));const u=new Oe(i,r/o,.1,100);u.position.set(...t);const h=new Am(u,s);return h.enableDamping=!0,h.dampingFactor=.06,h.minDistance=1.2,h.maxDistance=16,h.maxPolarAngle=Math.PI*.88,h.target.set(...e),h.update(),s.addEventListener("wheel",d=>d.preventDefault(),{passive:!1}),{renderer:l,scene:c,camera:u,controls:h}}function Jl(s,t,e){const i=Math.min(window.devicePixelRatio||1,2),n=e.width/i,a=e.height/i;s.setSize(n,a,!1),s.setPixelRatio(i),t.aspect=n/a,t.updateProjectionMatrix()}const ue={sub:(s,t)=>({re:s.re-t.re,im:s.im-t.im}),abs:s=>Math.sqrt(s.re*s.re+s.im*s.im),polar:(s,t)=>({re:s*Math.cos(t),im:s*Math.sin(t)})};function al(s){const t=s.re.toFixed(2),e=Math.abs(s.im).toFixed(2),i=s.im<0?"-":"+";return`${t}${i}${e}j`}function rl(s){let t=[{re:1,im:0}];for(const e of s){const i=Array(t.length+1).fill(null).map(()=>({re:0,im:0}));for(let n=0;n<t.length;n++)i[n].re+=t[n].re,i[n].im+=t[n].im,i[n+1].re-=t[n].re*e.re-t[n].im*e.im,i[n+1].im-=t[n].re*e.im+t[n].im*e.re;t=i}return t}class zm{constructor(t){v(this,"container");v(this,"animId",null);v(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),modeSelector:Mt("modeSelector",!0),waveform:Mt("waveform",!0),zPlane:Mt("zPlane",!0),surface3d:Mt("surface3d",!0),response:Mt("response",!0),spectrum:Mt("spectrum",!0)});v(this,"poles",[]);v(this,"zeros",[]);v(this,"dragging",null);v(this,"planeCanvas");v(this,"leftPlanePanel");v(this,"planeSize",400);v(this,"planeHeight",240);v(this,"surfaceCanvas");v(this,"responseCanvas");v(this,"spectrumCanvas");v(this,"threeRenderer",null);v(this,"threeScene",null);v(this,"threeCamera",null);v(this,"threeControls",null);v(this,"surfaceMesh",null);v(this,"unitCircleLine",null);v(this,"freqRibbon",null);v(this,"spectrumBars3D",null);v(this,"spectrumBars3DCount",96);v(this,"threeN",64);v(this,"threeRange",1.8);v(this,"useThreeJS",!1);v(this,"rotAngle2D",0);v(this,"sharedAudio",Ze.getInstance());v(this,"audioCtx",null);v(this,"originalBuffer",null);v(this,"sourceNode",null);v(this,"dspNode",null);v(this,"compressorNode",null);v(this,"gainNode",null);v(this,"analyserNode",null);v(this,"filterUpdateTimer",null);v(this,"playbackGain",.85);v(this,"maxNormBoost",12);v(this,"lastNormScale",1);v(this,"lastResponsePeak",1);v(this,"lastResponseRms",1);v(this,"outputMakeupGain",1);v(this,"timeDomainScratch",null);v(this,"isPlaying",!1);v(this,"isPaused",!1);v(this,"loop",!1);v(this,"playMode","filtered");v(this,"playbackStartedAt",0);v(this,"pausedAt",0);v(this,"sampleRate",44100);v(this,"origSpectrumStatic",null);v(this,"analyserData",null);v(this,"transportBar");v(this,"statusEl");v(this,"filterInfoEl");v(this,"waveformTimeline");v(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.loadDefaults(),this.buildUI(),this.tryInitThreeJS(),this.startAnimation(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.loadDefaultAudioClip()}async loadDefaultAudioClip(){var e,i;const t=ts("audio");if(t){this.statusEl.textContent="Loading…";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext());const a=await(await fetch(es(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(a),this.sampleRate=this.originalBuffer.sampleRate;const r=this.originalBuffer.getChannelData(0),o=4096,l=Math.floor(r.length/2);this.origSpectrumStatic=this.computeFFT(r.slice(l,l+o),o),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(i=this.waveformTimeline)==null||i.setPlayhead(0),this.pausedAt=0;const c=t.split("/").pop()??t;this.statusEl.textContent=`${c} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="Load error"}}}loadDefaults(){this.zeros=[ue.polar(1,Math.PI/2),ue.polar(1,-Math.PI/2)],this.poles=[ue.polar(.8,Math.PI/2),ue.polar(.8,-Math.PI/2)]}computeMag(t){let e=1,i=1;for(const n of this.zeros)e*=ue.abs(ue.sub(t,n));for(const n of this.poles)i*=ue.abs(ue.sub(t,n));return i<1e-12?1/0:!this.zeros.length&&!this.poles.length?1:e/i}computePhase(t){let e=0;for(const i of this.zeros){const n=ue.sub(t,i);e+=Math.atan2(n.im,n.re)}for(const i of this.poles){const n=ue.sub(t,i);e-=Math.atan2(n.im,n.re)}return e}getCoeffs(){const t=rl(this.zeros).map(i=>i.re),e=rl(this.poles).map(i=>i.re);return t.length||t.push(1),e.length||e.push(1),{b:t,a:e}}tryInitThreeJS(){try{const t=Zl(this.surfaceCanvas,{camera:[2.8,3.2,4.4],target:[0,.45,0]});this.threeRenderer=t.renderer,this.threeScene=t.scene,this.threeCamera=t.camera,this.threeControls=t.controls;const e=new Kl(3.8,20,861504,861504);this.threeScene.add(e);const i=this.threeRange,n=(r,o,l=1)=>new ta(new le().setFromPoints(r),new Yi({color:o,transparent:l<1,opacity:l}));this.threeScene.add(n([new N(-i-.15,0,0),new N(i+.15,0,0)],16737860,.85)),this.threeScene.add(n([new N(0,0,-i-.15),new N(0,0,i+.15)],4513160,.85)),this.threeScene.add(n([new N(0,0,0),new N(0,1.5,0)],16777215,.55));const a=new Ee(new qr(1,.022,8,128),new qi({color:5427198}));a.rotation.x=Math.PI/2,this.threeScene.add(a),this.createThreeSurface(),this.unitCircleLine=this.createUnitCircleLine(),this.threeScene.add(this.unitCircleLine),this.createFreqRibbon(),this.createSpectrumBars3D(),this.useThreeJS=!0}catch(t){console.warn("Three.js init failed, using Canvas2D fallback:",t),this.useThreeJS=!1}}createThreeSurface(){if(!this.threeScene)return;const t=this.threeN,e=this.threeRange,i=(t+1)*(t+1),n=new Float32Array(i*3),a=new Float32Array(i*3),r=[];for(let c=0;c<=t;c++)for(let u=0;u<=t;u++){const h=c*(t+1)+u;n[h*3]=-e+2*e*c/t,n[h*3+1]=0,n[h*3+2]=-e+2*e*u/t,a[h*3+2]=.15}for(let c=0;c<t;c++)for(let u=0;u<t;u++){const h=c*(t+1)+u,d=h+1,f=(c+1)*(t+1)+u,g=f+1;r.push(h,d,g,h,g,f)}const o=new le;o.setAttribute("position",new ie(n,3)),o.setAttribute("color",new ie(a,3)),o.setIndex(r);const l=new qi({vertexColors:!0,side:li,transparent:!0,opacity:.82,depthWrite:!1});this.surfaceMesh=new Ee(o,l),this.threeScene.add(this.surfaceMesh)}createUnitCircleLine(){const e=new le;return e.setAttribute("position",new ie(new Float32Array(301*3),3)),new ta(e,new Yi({color:16777215,linewidth:2}))}createFreqRibbon(){if(!this.threeScene)return;const t=300,e=new Float32Array((t+1)*2*3),i=new Float32Array((t+1)*2*3),n=[];for(let r=0;r<=t;r++){const o=2*Math.PI*r/t,l=Math.cos(o),c=Math.sin(o);if(e[r*2*3]=l,e[r*2*3+2]=c,e[r*2*3+1]=.01,e[(r*2+1)*3]=l,e[(r*2+1)*3+2]=c,e[(r*2+1)*3+1]=.01,r<t){const u=r*2,h=r*2+1,d=(r+1)*2,f=(r+1)*2+1;n.push(u,h,f,u,f,d)}}const a=new le;a.setAttribute("position",new ie(e,3)),a.setAttribute("color",new ie(i,3)),a.setIndex(n),this.freqRibbon=new Ee(a,new qi({vertexColors:!0,side:ke,transparent:!0,opacity:.3,depthWrite:!1})),this.threeScene.add(this.freqRibbon),this.updateThreeSurface()}createSpectrumBars3D(){if(!this.threeScene)return;const t=this.spectrumBars3DCount,e=new Float32Array(t*4*3),i=new Float32Array(t*4*3),n=[],a=1.35,r=.038;for(let l=0;l<t;l++){const c=2*Math.PI*l/t,u=Math.cos(c),h=Math.sin(c),d=-Math.sin(c)*r,f=Math.cos(c)*r,g=l*4;e[(g+0)*3]=u*a-d,e[(g+0)*3+1]=.005,e[(g+0)*3+2]=h*a-f,e[(g+1)*3]=u*a+d,e[(g+1)*3+1]=.005,e[(g+1)*3+2]=h*a+f,e[(g+2)*3]=u*a-d,e[(g+2)*3+1]=.005,e[(g+2)*3+2]=h*a-f,e[(g+3)*3]=u*a+d,e[(g+3)*3+1]=.005,e[(g+3)*3+2]=h*a+f,n.push(g,g+1,g+3,g,g+3,g+2)}const o=new le;o.setAttribute("position",new ie(e,3)),o.setAttribute("color",new ie(i,3)),o.setIndex(n),this.spectrumBars3D=new Ee(o,new qi({vertexColors:!0,side:ke,transparent:!0,opacity:.85,depthWrite:!1})),this.threeScene.add(this.spectrumBars3D)}updateSpectrumBars3D(){if(!this.spectrumBars3D||!this.analyserNode||!this.analyserData)return;this.analyserNode.getFloatFrequencyData(this.analyserData);const t=this.spectrumBars3DCount,e=1.35,i=.038,n=.9,a=-80,r=80,o=this.analyserData.length,l=this.spectrumBars3D.geometry.attributes.position,c=this.spectrumBars3D.geometry.attributes.color;for(let u=0;u<t;u++){const h=2*Math.PI*u/t,d=Math.cos(h),f=Math.sin(h),g=-Math.sin(h)*i,_=Math.cos(h)*i,m=u/t,p=Math.log10(1+m*9)/Math.log10(10),y=Math.max(1,Math.min(o-1,Math.floor(p*o))),x=this.analyserData[y],M=Math.max(0,Math.min(1,(x-a)/r)),A=M*n,[T,C,F]=$n(M*.85+.1),w=T/255,b=C/255,R=F/255,G=u*4;l.setXYZ(G,d*e-g,.005,f*e-_),c.setXYZ(G,w*.3,b*.3,R*.3),l.setXYZ(G+1,d*e+g,.005,f*e+_),c.setXYZ(G+1,w*.3,b*.3,R*.3),l.setXYZ(G+2,d*e-g,A,f*e-_),c.setXYZ(G+2,w,b,R),l.setXYZ(G+3,d*e+g,A,f*e+_),c.setXYZ(G+3,w,b,R)}l.needsUpdate=!0,c.needsUpdate=!0}updateThreeSurface(){if(!this.surfaceMesh)return;const t=this.threeN,e=this.threeRange,i=3.8,n=.7,a=l=>Math.atan((isFinite(l)?l:100)/2)/(Math.PI/2)*i*n,r=this.surfaceMesh.geometry.attributes.position,o=this.surfaceMesh.geometry.attributes.color;for(let l=0;l<=t;l++)for(let c=0;c<=t;c++){const u=l*(t+1)+c,h=-e+2*e*l/t,d=-e+2*e*c/t,f=a(this.computeMag({re:h,im:d}));r.setY(u,f);const[g,_,m]=$n(f/(i*n));o.setXYZ(u,g/255,_/255,m/255)}if(r.needsUpdate=!0,o.needsUpdate=!0,this.surfaceMesh.geometry.computeVertexNormals(),this.unitCircleLine){const c=this.unitCircleLine.geometry.attributes.position;for(let u=0;u<=300;u++){const h=2*Math.PI*u/300,d=a(this.computeMag({re:Math.cos(h),im:Math.sin(h)}));c.setXYZ(u,Math.cos(h),d+.03,Math.sin(h))}c.needsUpdate=!0}if(this.freqRibbon){const c=this.freqRibbon.geometry.attributes.position,u=this.freqRibbon.geometry.attributes.color;for(let h=0;h<=300;h++){const d=2*Math.PI*h/300,f=Math.cos(d),g=Math.sin(d),_=a(this.computeMag({re:f,im:g})),[m,p,y]=$n(_/(i*n));c.setXYZ(h*2,f,.01,g),u.setXYZ(h*2,m/255,p/255,y/255),c.setXYZ(h*2+1,f,_+.02,g),u.setXYZ(h*2+1,m/255,p/255,y/255)}c.needsUpdate=!0,u.needsUpdate=!0}}buildUI(){var o;if(document.body.classList.add("page-scroll"),this.ui.transport){if(this.transportBar=new In({onPlay:()=>this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:l=>this.handleUpload(l),uploadLabel:"Upload",showUpload:this.ui.upload,onLoopToggle:l=>{if(this.isPlaying&&this.audioCtx){const c=this.currentPlaybackTime();this.pausedAt=c,this.playbackStartedAt=this.audioCtx.currentTime-c}this.loop=l,this.sourceNode&&(this.sourceNode.loop=l)}}),this.ui.modeSelector){const l=Jn({className:"transport-mode-inline",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"filtered",label:"Filtered"}],onChange:c=>{this.playMode=c,this.isPlaying&&(this.stopAudio(!1),this.startPlayback(c))}});this.transportBar.getElement().querySelector(".transport-left").appendChild(l)}this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.textContent="Load audio",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusEl),this.filterInfoEl=document.createElement("span"),this.filterInfoEl.className="pz-filter-info",(o=this.transportBar.getElement().querySelector(".transport-right"))==null||o.prepend(this.filterInfoEl),this.container.appendChild(this.transportBar.getElement())}else this.statusEl=document.createElement("span"),this.statusEl.className="transport-status hidden",this.filterInfoEl=document.createElement("span"),this.filterInfoEl.className="hidden",this.container.append(this.statusEl,this.filterInfoEl);this.ui.waveform&&(this.waveformTimeline=new Dn({width:900,height:64,title:"Waveform"},l=>this.handlePlayheadSeek(l)),this.waveformTimeline.getElement().classList.add("timeline-panel--spaced"),this.container.appendChild(this.waveformTimeline.getElement()));const t=document.createElement("div");t.className="pz-top-row";const e=bi("Z-plane","pz-plane-panel");this.ui.zPlane||e.classList.add("hidden"),this.leftPlanePanel=e,this.planeCanvas=Sn(e,400,240),this.setupPlaneInteraction(),t.appendChild(e);const i=bi("|H(z)|","pz-surface-panel");this.ui.surface3d||i.classList.add("hidden"),this.surfaceCanvas=gl(i,480,240),t.appendChild(i),(this.ui.zPlane||this.ui.surface3d)&&this.container.appendChild(t);const n=bi("Spectrum","viz-panel--spaced");this.spectrumCanvas=Sn(n,900,160),this.ui.spectrum||n.classList.add("hidden"),this.container.appendChild(n);const a=bi("Phase");this.responseCanvas=Sn(a,900,150),this.ui.response||a.classList.add("hidden"),this.container.appendChild(a);const r=this.computeNormalizationScale();this.lastNormScale=r.scale,this.lastResponsePeak=r.peakMag,this.lastResponseRms=r.rmsMag,this.updateFilterInfo()}resizeLayout(){var o;const t=Math.max(640,this.container.clientWidth-2),e=Math.max(260,Math.floor(t*.42)),i=Math.max(300,t-e-6),n=Math.max(200,Math.floor(e*.58)),a=160,r=150;this.planeSize=e,this.planeHeight=n,Ei(this.planeCanvas,e,n,120,80),_l(this.surfaceCanvas,i,n,120,80),Ei(this.responseCanvas,t,r,120,80),Ei(this.spectrumCanvas,t,a,120,80),(o=this.waveformTimeline)==null||o.resize(t,64),this.threeRenderer&&this.threeCamera&&Jl(this.threeRenderer,this.threeCamera,this.surfaceCanvas)}setupPlaneInteraction(){const t=this.planeCanvas,e=(l,c)=>Math.max(40,Math.min(l,c)/2-24),i=l=>{const c=t.getBoundingClientRect(),u=c.width>0?(l.clientX-c.left)/c.width:.5,h=c.height>0?(l.clientY-c.top)/c.height:.5,d=this.planeSize,f=this.planeHeight,g=u*d,_=h*f,m=e(d,f);return{re:(g-d/2)/m,im:-(_-f/2)/m}},n=(l,c,u=.13)=>{let h=-1,d=u;return c.forEach((f,g)=>{const _=ue.abs(ue.sub(f,l));_<d&&(d=_,h=g)}),h},a=(l,c)=>{const u=l[c];return l.filter((h,d)=>d!==c&&!(Math.abs(h.re-u.re)<.02&&Math.abs(Math.abs(h.im)-Math.abs(u.im))<.02))};t.oncontextmenu=l=>l.preventDefault(),t.onmousedown=l=>{l.preventDefault();const c=i(l),u=n(c,this.poles),h=n(c,this.zeros);if(u>=0){const d=this.poles[u],f=this.poles.findIndex((g,_)=>_!==u&&Math.abs(g.re-d.re)<.03&&Math.abs(g.im+d.im)<.03);this.dragging={type:"pole",idx:u,conjIdx:f,origIm:d.im};return}if(h>=0){const d=this.zeros[h],f=this.zeros.findIndex((g,_)=>_!==h&&Math.abs(g.re-d.re)<.03&&Math.abs(g.im+d.im)<.03);this.dragging={type:"zero",idx:h,conjIdx:f,origIm:d.im};return}l.button===2?(this.poles.push({re:c.re,im:c.im}),Math.abs(c.im)>.04&&this.poles.push({re:c.re,im:-c.im})):(this.zeros.push({re:c.re,im:c.im}),Math.abs(c.im)>.04&&this.zeros.push({re:c.re,im:-c.im})),this.onFilterChanged(!1)},t.ondblclick=l=>{const c=i(l),u=.16,h=this.poles.findIndex(f=>ue.abs(ue.sub(f,c))<u);if(h>=0){this.poles=a(this.poles,h),this.onFilterChanged(!1);return}const d=this.zeros.findIndex(f=>ue.abs(ue.sub(f,c))<u);d>=0&&(this.zeros=a(this.zeros,d),this.onFilterChanged(!1))};const r=.06,o=l=>{const c=ue.abs(l);return c>1e-6&&Math.abs(c-1)<r?{re:l.re/c,im:l.im/c}:l};t.onmousemove=l=>{if(!this.dragging)return;const c=i(l),{type:u,idx:h,conjIdx:d}=this.dragging,f=u==="pole"?this.poles:this.zeros;if(d>=0&&d<f.length){const _=o({re:c.re,im:c.im});f[h]=_,f[d]={re:_.re,im:-_.im}}else f[h]=o({re:c.re,im:c.im});this.onFilterChanged(!0)},t.onmouseup=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null},t.onmouseleave=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null}}onFilterChanged(t=!1){this.useThreeJS&&this.updateThreeSurface(),this.updateFilterInfo(),t&&this.isPlaying?this.scheduleLiveFilterUpdate():this.flushLiveFilterUpdate()}scheduleLiveFilterUpdate(){if(!this.dspNode){this.updateLiveFilter();return}this.filterUpdateTimer&&clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=setTimeout(()=>{this.filterUpdateTimer=null,this.updateLiveFilter()},150)}flushLiveFilterUpdate(){this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.updateLiveFilter()}updateFilterInfo(){const t=this.poles.every(n=>ue.abs(n)<1),e=this.computeMag({re:1,im:0}),i=Math.max(this.poles.length,this.zeros.length);this.filterInfoEl.textContent=`P${this.poles.length} Z${this.zeros.length} ord${i} · ${t?"stable":"unstable"} · DC ${isFinite(e)?e.toFixed(2):"∞"}`,this.filterInfoEl.classList.toggle("pz-filter-info--unstable",!t)}measureFilterResponse(){const t=new Set,e=768;for(let l=0;l<e;l++)t.add(Math.PI*l/(e-1));for(const l of[...this.poles,...this.zeros]){if(Math.abs(l.im)<1e-7){t.add(0),t.add(Math.PI);continue}let c=Math.atan2(l.im,l.re);c<0&&(c+=2*Math.PI),c>Math.PI&&(c=2*Math.PI-c),t.add(c);for(const u of[-.03,-.01,.01,.03])t.add(Math.max(0,Math.min(Math.PI,c+u)))}let i=1e-9,n=0,a=0;for(const l of t){const c=this.computeMag({re:Math.cos(l),im:Math.sin(l)});!isFinite(c)||c<=0||(i=Math.max(i,c),n+=c*c,a++)}const r=a>0?Math.sqrt(n/a):1e-9,o=Math.max(i,r,1e-9);return{peakScale:Math.min(this.maxNormBoost,1/o),peakMag:i,rmsMag:r}}computeNormalizationScale(){const{peakScale:t,peakMag:e,rmsMag:i}=this.measureFilterResponse();let n=1;const a=this.origSpectrumStatic;if(a&&a.length>=8){const r=a.length;let o=0,l=0;for(let c=0;c<r;c++){const u=r>1?Math.PI*c/(r-1):0,h=this.computeMag({re:Math.cos(u),im:Math.sin(u)});if(!isFinite(h)||h<=0)continue;const d=h*t,f=a[c]*a[c];o+=f,l+=f*d*d}l>1e-20&&o>1e-20?n=Math.sqrt(o/l):o>1e-20&&(n=this.maxNormBoost),n=Math.min(this.maxNormBoost,Math.max(1,n))}return{scale:Math.min(this.maxNormBoost*1.5,t*n),peakMag:e,rmsMag:i}}updateOutputMakeup(){if(!this.isPlaying||this.playMode!=="filtered"||!this.analyserNode||!this.gainNode||!this.timeDomainScratch||!this.audioCtx)return;this.analyserNode.getFloatTimeDomainData(this.timeDomainScratch);let t=0;for(let i=0;i<this.timeDomainScratch.length;i++){const n=this.timeDomainScratch[i];t+=n*n}const e=Math.sqrt(t/this.timeDomainScratch.length);if(e<.05){const i=Math.min(16,.14/Math.max(e,1e-5));this.outputMakeupGain=this.outputMakeupGain*.88+i*.01}else this.outputMakeupGain=this.outputMakeupGain*.94+1*.06;this.outputMakeupGain=Math.min(16,Math.max(.5,this.outputMakeupGain)),this.gainNode.gain.setTargetAtTime(this.playbackGain*this.outputMakeupGain,this.audioCtx.currentTime,.15)}updateLiveFilter(){var r;const{b:t,a:e}=this.getCoeffs(),{scale:i,peakMag:n,rmsMag:a}=this.computeNormalizationScale();this.lastNormScale=i,this.lastResponsePeak=n,this.lastResponseRms=a,(r=this.dspNode)==null||r.port.postMessage({type:"setIIR",b:t.map(o=>o*i),a:e})}async handleUpload(t){var e,i;this.statusEl.textContent="Decoding…";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate;const n=this.originalBuffer.getChannelData(0),a=4096,r=Math.floor(n.length/2);this.origSpectrumStatic=this.computeFFT(n.slice(r,r+a),a),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(i=this.waveformTimeline)==null||i.setPlayhead(0),this.pausedAt=0,this.statusEl.textContent=`${t.name} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="Load error"}}computeFFT(t,e){const i=new Float64Array(e),n=new Float64Array(e);for(let r=0;r<e&&r<t.length;r++){const o=.5*(1-Math.cos(2*Math.PI*r/(e-1)));i[r]=t[r]*o}is(i,n);const a=new Float32Array(e/2);for(let r=0;r<e/2;r++)a[r]=Math.sqrt(i[r]*i[r]+n[r]*n[r])/e;return a}async startPlayback(t){var e;if(this.stopAudio(!1),!this.originalBuffer){this.statusEl.textContent="Load audio first";return}this.audioCtx&&(this.playMode=t,this.updateLiveFilter(),this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserNode.smoothingTimeConstant=.72,this.analyserData=new Float32Array(this.analyserNode.frequencyBinCount),this.timeDomainScratch=new Float32Array(this.analyserNode.fftSize),this.outputMakeupGain=1,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=t==="original"?.85:1,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=this.loop,t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[Math.min(this.originalBuffer.numberOfChannels,2)]}),this.dspNode.port.postMessage({type:"setMode",mode:"iir"}),this.compressorNode=this.audioCtx.createDynamicsCompressor(),this.compressorNode.threshold.value=-3,this.compressorNode.knee.value=6,this.compressorNode.ratio.value=2,this.compressorNode.attack.value=.003,this.compressorNode.release.value=.08,this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.compressorNode),this.compressorNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.gain.value=this.playbackGain,this.gainNode.connect(this.audioCtx.destination),this.updateLiveFilter()),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.originalBuffer||!this.audioCtx||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.originalBuffer.duration-.03&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(e=this.transportBar)==null||e.setPlaying(!0),this.statusEl.textContent=t==="filtered"?"Playing filtered":"Playing original")}currentPlaybackTime(){if(!this.audioCtx||!this.originalBuffer)return this.pausedAt;const t=this.originalBuffer.duration,e=this.audioCtx.currentTime-this.playbackStartedAt;return this.loop&&t>0?e%t:Math.min(e,t)}pauseAudio(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.currentPlaybackTime(),this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusEl.textContent="Paused",(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,i;this._teardownNodes(),this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(i=this.waveformTimeline)==null||i.setPlayhead(this.pausedAt),this.originalBuffer&&(this.statusEl.textContent="Stopped")}_teardownNodes(){var t,e,i,n,a,r;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(i=this.dspNode)==null||i.disconnect(),(n=this.compressorNode)==null||n.disconnect(),(a=this.gainNode)==null||a.disconnect(),(r=this.analyserNode)==null||r.disconnect(),this.sourceNode=null,this.dspNode=null,this.compressorNode=null,this.gainNode=null,this.analyserNode=null,this.timeDomainScratch=null,this.outputMakeupGain=1}handlePlayheadSeek(t){var e;!this.originalBuffer||!this.audioCtx||(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}drawPointLabel(t,e,i,n,a,r,o,l){const u=t.measureText(n).width+4,h=11,d=9,f=6,g=2,_=e+d,m=e-d-u;let p=_+u>r-g&&m>=g?m:_;p=Math.max(g,Math.min(p,r-u-g));const y=i+f,x=i-f-h;let M;l?M=y+h>o-g&&x>=g?x:y:M=x<g&&y+h<=o-g?y:x,M=Math.max(g,Math.min(M,o-h-g)),t.textAlign="left",t.fillStyle="rgba(0,0,0,0.55)",t.fillRect(p,M,u,h),t.fillStyle=a,t.fillText(n,p+2,M+9)}drawZPlane(){const e=this.planeCanvas.getContext("2d"),i=this.planeSize,n=this.planeHeight,a=i/2,r=n/2,o=Math.max(40,Math.min(i,n)/2-24);e.fillStyle="#06070b",e.fillRect(0,0,i,n),e.strokeStyle="rgba(255,255,255,0.03)",e.lineWidth=1;for(let c=-1.5;c<=1.5;c+=.5)e.beginPath(),e.moveTo(a+c*o,0),e.lineTo(a+c*o,n),e.stroke(),e.beginPath(),e.moveTo(0,r-c*o),e.lineTo(i,r-c*o),e.stroke();e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1,e.beginPath(),e.moveTo(0,r),e.lineTo(i,r),e.stroke(),e.beginPath(),e.moveTo(a,0),e.lineTo(a,n),e.stroke(),e.beginPath(),e.arc(a,r,o,0,2*Math.PI),e.fillStyle="rgba(82,207,254,0.03)",e.fill();for(let c=0;c<2;c++)e.beginPath(),e.arc(a,r,o,0,2*Math.PI),e.strokeStyle=c===0?"rgba(82,207,254,0.08)":"rgba(82,207,254,0.55)",e.lineWidth=c===0?10:1.5,e.stroke();e.font="8.5px JetBrains Mono",e.fillStyle="rgba(255,255,255,0.16)",e.textAlign="center",e.fillText("DC",a+o+20,r+4),e.fillText("π",a-o-15,r+4),e.fillText("π/2",a+3,r-o-8),e.textAlign="left",e.fillText("Re",i-14,r-4),e.textAlign="right",e.fillText("Im",a-4,10),e.font="700 9px 'JetBrains Mono', monospace",this.zeros.forEach(c=>{const u=a+c.re*o,h=r-c.im*o;e.beginPath(),e.arc(u,h,7.5,0,2*Math.PI),e.strokeStyle="#52cffe",e.lineWidth=2.5,e.shadowColor="rgba(82,207,254,0.7)",e.shadowBlur=10,e.stroke(),e.shadowBlur=0,this.drawPointLabel(e,u,h,al(c),"#52cffe",i,n,!1)}),this.poles.forEach(c=>{const u=a+c.re*o,h=r-c.im*o;ue.abs(c)>=1&&(e.beginPath(),e.arc(u,h,14,0,2*Math.PI),e.strokeStyle="rgba(255,85,85,0.4)",e.lineWidth=2,e.stroke());const d=8;e.strokeStyle="#ff869a",e.lineWidth=2.5,e.shadowColor="rgba(255,134,154,0.7)",e.shadowBlur=10,e.beginPath(),e.moveTo(u-d,h-d),e.lineTo(u+d,h+d),e.moveTo(u+d,h-d),e.lineTo(u-d,h+d),e.stroke(),e.shadowBlur=0,this.drawPointLabel(e,u,h,al(c),"#ff869a",i,n,!0)}),e.fillStyle="rgba(0,0,0,0.6)",e.fillRect(0,0,i,22),e.font="8px JetBrains Mono",e.fillStyle="rgba(255,255,255,0.26)",e.textAlign="left",e.fillText(`Poles ${this.poles.length} · zeros ${this.zeros.length}`,8,14),e.textAlign="right",e.fillStyle="#52cffe";const l=this.computeMag({re:1,im:0});e.fillText(`DC ${isFinite(l)?l.toFixed(3):"∞"}`,i-8,14)}computeUnwrappedPhase(t){const e=new Float32Array(t),i=new Array(t).fill(!1);let n=this.computePhase({re:1,im:0});e[0]=n;for(let a=1;a<t;a++){const r=Math.PI*a/(t-1);let o=this.computePhase({re:Math.cos(r),im:Math.sin(r)}),l=0;for(;o-n>Math.PI;)o-=2*Math.PI,l++;for(;o-n<-Math.PI;)o+=2*Math.PI,l++;l>1&&(i[a]=!0),e[a]=o,n=o}return{phase:e,breaks:i}}drawResponse(){const t=this.responseCanvas,e=window.devicePixelRatio||1,i=t.width/e,n=t.height/e,a=t.getContext("2d");let r=1;for(const x of[...this.poles,...this.zeros]){const M=Math.hypot(x.re,x.im);r=Math.min(r,Math.abs(1-M))}const o=Math.min(4e3,Math.max(800,Math.round(24/Math.max(r,.006)))),l={l:48,r:14,t:22,b:24},c=i-l.l-l.r,u=n-l.t-l.b;a.fillStyle="#04050a",a.fillRect(0,0,i,n);const{phase:h,breaks:d}=this.computeUnwrappedPhase(o);let f=h[0],g=h[0];for(let x=1;x<o;x++)f=Math.min(f,h[x]),g=Math.max(g,h[x]);const m=Math.max(g-f,.25)*.1;f-=m,g+=m;const p=x=>l.t+u-(x-f)/(g-f)*u;a.strokeStyle="rgba(255,255,255,0.04)",a.lineWidth=1;for(let x=0;x<=4;x++){const M=l.t+u-x/4*u;a.beginPath(),a.moveTo(l.l,M),a.lineTo(l.l+c,M),a.stroke();const A=f+x/4*(g-f);a.fillStyle="rgba(255,255,255,0.18)",a.font="8px JetBrains Mono",a.textAlign="right",a.fillText(`${A.toFixed(2)}`,l.l-4,M+3)}a.beginPath();let y=!1;for(let x=0;x<o;x++){const M=l.l+x/(o-1)*c,A=p(h[x]);!y||d[x]?(a.moveTo(M,A),y=!0):a.lineTo(M,A)}a.strokeStyle="rgba(255,255,255,0.9)",a.lineWidth=2,a.stroke(),a.textAlign="center",a.fillStyle="rgba(255,255,255,0.18)",a.font="8px JetBrains Mono",["DC (0)","π/4","π/2","3π/4","Nyquist (π)"].forEach((x,M)=>a.fillText(x,l.l+M/4*c,n-6))}drawSpectrum(){const t=this.spectrumCanvas,e=window.devicePixelRatio||1,i=t.width/e,n=t.height/e,a=t.getContext("2d"),r={l:44,r:14,t:22,b:18},o=i-r.l-r.r,l=n-r.t-r.b;a.fillStyle="#04050a",a.fillRect(0,0,i,n),!!(this.origSpectrumStatic||this.analyserNode)||(a.fillStyle="rgba(255,255,255,0.07)",a.font="10px JetBrains Mono",a.textAlign="center",a.fillText("Load audio",i/2,n/2+4));const u=512,h=new Float32Array(u);for(let M=0;M<u;M++){const A=Math.PI*M/(u-1),T=this.computeMag({re:Math.cos(A),im:Math.sin(A)});h[M]=isFinite(T)?T*this.lastNormScale:0}const d=-90,f=M=>M>0?20*Math.log10(M):d;let g=0;for(let M=0;M<u;M++)g=Math.max(g,f(h[M]));if(this.origSpectrumStatic)for(let M=0;M<this.origSpectrumStatic.length;M++)g=Math.max(g,f(this.origSpectrumStatic[M]));g=Math.ceil((g+3)/6)*6;const _=g-d,m=M=>r.t+l-(Math.max(d,M)-d)/_*l;a.strokeStyle="rgba(255,255,255,0.04)",a.lineWidth=1;for(let M=0;M<=4;M++){const A=r.t+l-M/4*l;a.beginPath(),a.moveTo(r.l,A),a.lineTo(r.l+o,A),a.stroke(),a.fillStyle="rgba(255,255,255,0.18)",a.font="8px JetBrains Mono",a.textAlign="right";const T=d+M/4*_;a.fillText(`${T.toFixed(0)}dB`,r.l-4,A+3)}const p=(M,A,T,C,F)=>{a.beginPath(),a.moveTo(r.l,r.t+l);for(let w=1;w<A;w++){const b=T?M[w]:f(M[w]),R=r.l+w/A*o,G=m(b);a.lineTo(R,G)}a.lineTo(r.l+o,r.t+l),a.closePath(),a.fillStyle=`rgba(${C},${F})`,a.fill()};this.origSpectrumStatic&&p(this.origSpectrumStatic,this.origSpectrumStatic.length,!1,"200,200,200",.22),this.analyserNode&&this.analyserData&&(this.analyserNode.getFloatFrequencyData(this.analyserData),p(this.analyserData,this.analyserData.length,!0,"82,207,254",.65)),a.beginPath();let y=!1;for(let M=1;M<u;M++){const A=r.l+M/(u-1)*o,T=m(f(h[M]));y?a.lineTo(A,T):(a.moveTo(A,T),y=!0)}a.strokeStyle="rgba(255,220,80,0.9)",a.lineWidth=1.5,a.shadowColor="rgba(255,200,60,0.6)",a.shadowBlur=6,a.stroke(),a.shadowBlur=0,a.fillStyle="rgba(255,255,255,0.18)",a.font="8px JetBrains Mono",a.textAlign="center";const x=this.sampleRate/2;[0,.25,.5,.75,1].forEach(M=>{const A=M*x;a.fillText(A>=1e3?`${(A/1e3).toFixed(0)}k`:`${A.toFixed(0)}`,r.l+M*o,n-4)}),this.analyserNode&&(a.fillStyle="rgba(82,207,254,0.8)",a.font="bold 8px JetBrains Mono",a.textAlign="right",a.fillText("Live",i-r.r-2,r.t+22)),a.fillStyle="rgba(255,220,80,0.85)",a.font="bold 8px JetBrains Mono",a.textAlign="right",a.fillText("— |H(ω)| normalized",i-r.r-2,r.t+12)}draw3DFallback(){const t=this.surfaceCanvas,e=window.devicePixelRatio||1,i=t.width/e,n=t.height/e,a=t.getContext("2d");if(!a)return;const r=44,o=1.75,l=this.rotAngle2D,c=.47,u=Math.cos(l),h=Math.sin(l),d=Math.cos(c),f=Math.sin(c),g=220,_=5.2,m=3.8;a.fillStyle="#04050a",a.fillRect(0,0,i,n);const p=[];for(let M=0;M<=r;M++){p[M]=[];for(let A=0;A<=r;A++){const T=-o+2*o*M/r,C=-o+2*o*A/r,F=this.computeMag({re:T,im:C}),w=Math.atan(isFinite(F)?F/2:50)/(Math.PI/2)*m*.32,b=T*u+C*h,R=-T*h+C*u,G=w*d-R*f,q=w*f+R*d+_;p[M][A]={sx:b/q*g+i/2,sy:-G/q*g+n*.6,depth:q,h:w}}}const y=[];for(let M=0;M<r;M++)for(let A=0;A<r;A++){const T=(p[M][A].depth+p[M+1][A].depth+p[M][A+1].depth+p[M+1][A+1].depth)/4,C=(p[M][A].h+p[M+1][A].h+p[M][A+1].h+p[M+1][A+1].h)/4;y.push({i:M,j:A,d:T,aH:C})}y.sort((M,A)=>A.d-M.d);const x=m*.32;for(const{i:M,j:A,aH:T}of y){a.beginPath(),a.moveTo(p[M][A].sx,p[M][A].sy),a.lineTo(p[M+1][A].sx,p[M+1][A].sy),a.lineTo(p[M+1][A+1].sx,p[M+1][A+1].sy),a.lineTo(p[M][A+1].sx,p[M][A+1].sy),a.closePath();const[C,F,w]=$n(T/x);a.fillStyle=`rgb(${C},${F},${w})`,a.fill(),a.strokeStyle="rgba(0,0,0,0.2)",a.lineWidth=.3,a.stroke()}}startAnimation(){let t=0;const e=i=>{var a,r;const n=Math.min((i-t)/1e3,.05);t=i,this.rotAngle2D=(this.rotAngle2D+n*.2)%(2*Math.PI),this.useThreeJS&&this.threeRenderer&&this.threeScene&&this.threeCamera?(this.updateSpectrumBars3D(),(a=this.threeControls)==null||a.update(),this.threeRenderer.render(this.threeScene,this.threeCamera)):this.draw3DFallback(),this.isPlaying&&this.audioCtx&&this.originalBuffer&&(this.pausedAt=this.currentPlaybackTime(),(r=this.waveformTimeline)==null||r.setPlayhead(this.pausedAt)),this.updateOutputMakeup(),this.drawZPlane(),this.drawResponse(),this.drawSpectrum(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}destroy(){var t,e;this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),this.audioCtx=null,(t=this.threeControls)==null||t.dispose(),(e=this.threeRenderer)==null||e.dispose(),document.body.classList.remove("page-scroll"),window.removeEventListener("resize",this.onResize)}}const Hm=2048,jt={bg:"rgba(11, 16, 24, 0.92)",lane:"rgba(255, 255, 255, 0.025)",grid:"rgba(255, 255, 255, 0.10)",text:"rgba(255, 255, 255, 0.55)",signal:"#52cffe",kernel:"#ffd700",pos:"#4ade80",neg:"#f472b6",out:"#ff4d6d",marker:"#ff9a4d"},Gm=["#ffd700","#ff9a4d","#4ade80","#a78bfa","#38bdf8","#f472b6","#facc15","#fb7185"],xi="JetBrains Mono, monospace",Ha=480,Ga=64,ol=26,ll=12,cl=6;function Os(s){const t=Math.abs(s);if(t<1e-9)return"0";const e=t>=100?s.toFixed(0):t>=10?s.toFixed(1):s.toFixed(2);return e.includes(".")?e.replace(/\.?0+$/,""):e}class Vm{constructor(){v(this,"el",document.createElement("div"));v(this,"overview",document.createElement("canvas"));v(this,"main",document.createElement("canvas"));v(this,"ovCtx");v(this,"ctx");v(this,"width",800);v(this,"x",null);v(this,"h",null);v(this,"y",null);v(this,"sr",44100);v(this,"maxX",1);v(this,"maxH",1);v(this,"maxY",1);v(this,"n",0);v(this,"mode","slide");v(this,"zoom",0);v(this,"vLeft",0);v(this,"vSpan",1);v(this,"tailKey","");v(this,"tail",new Float64Array(0));v(this,"onScrub",null);this.el.className="conv-lab-scope",this.overview.className="conv-lab-canvas",this.main.className="conv-lab-canvas",this.main.tabIndex=0,this.el.append(this.overview,this.main),this.ovCtx=this.overview.getContext("2d",{alpha:!0}),this.ctx=this.main.getContext("2d",{alpha:!0}),this.attachPointer(),this.resize(this.width)}getElement(){return this.el}setScrubHandler(t){this.onScrub=t}setData(t,e,i,n){this.x=t,this.h=e,this.y=i,this.sr=n,this.maxX=Math.max(1e-9,this.peak(t)),this.maxH=Math.max(1e-9,this.peak(e)),this.maxY=Math.max(1e-9,this.peak(i)),this.tailKey="",this.n=0}clearData(){this.x=this.h=this.y=null,this.tailKey="",this.render()}hasData(){return!!(this.x&&this.h&&this.y)}canStamp(){return!!this.h&&this.h.length<=Hm}setView(t,e,i){this.n=Math.max(0,Math.floor(t)),this.mode=e,this.zoom=Math.max(0,Math.min(1,i))}resize(t){this.width=Math.max(480,Math.floor(t)),Ei(this.main,this.width,Ha),Ei(this.overview,this.width,Ga),this.main.style.width=`${this.width}px`,this.main.style.height=`${Ha}px`,this.overview.style.width=`${this.width}px`,this.overview.style.height=`${Ga}px`,this.render()}render(){this.updateView(),this.drawOverview(),this.drawMain()}peak(t){let e=0;for(let i=0;i<t.length;i++){const n=Math.abs(t[i]);n>e&&(e=n)}return e}fitSpan(){var t;return Math.max(16,Math.round((((t=this.h)==null?void 0:t.length)??0)*1.4))}span(){const t=this.fitSpan(),e=Math.min(t,24);return Math.max(e,Math.round(Math.exp(Math.log(t)+(Math.log(e)-Math.log(t))*this.zoom)))}updateView(){this.vSpan=this.span(),this.vLeft=this.mode==="stamp"?this.n-.2*this.vSpan:this.n-.8*this.vSpan}attachPointer(){let t=!1;const e=r=>{var c;if(!this.y)return;const o=this.overview.getBoundingClientRect(),l=Math.max(0,Math.min(1,(r-o.left)/Math.max(1,o.width)));(c=this.onScrub)==null||c.call(this,Math.round(l*(this.y.length-1)))};this.overview.addEventListener("pointerdown",r=>{t=!0,this.overview.setPointerCapture(r.pointerId),e(r.clientX)}),this.overview.addEventListener("pointermove",r=>{t&&e(r.clientX)});const i=()=>t=!1;this.overview.addEventListener("pointerup",i),this.overview.addEventListener("pointercancel",i);let n=null;this.main.addEventListener("pointerdown",r=>{n={x0:r.clientX,n0:this.n},this.main.setPointerCapture(r.pointerId),this.main.focus()}),this.main.addEventListener("pointermove",r=>{var l;if(!n||!this.y)return;const o=this.width/this.vSpan;(l=this.onScrub)==null||l.call(this,Math.round(n.n0-(r.clientX-n.x0)/o))});const a=()=>n=null;this.main.addEventListener("pointerup",a),this.main.addEventListener("pointercancel",a),this.main.addEventListener("keydown",r=>{var l,c;const o=r.shiftKey?10:1;r.key==="ArrowRight"?((l=this.onScrub)==null||l.call(this,this.n+o),r.preventDefault()):r.key==="ArrowLeft"&&((c=this.onScrub)==null||c.call(this,this.n-o),r.preventDefault())})}series(t,e,i,n,a){const r=this.ctx,o=this.width,l=this.vLeft,c=o/this.vSpan,u=Math.max(Math.ceil(i),Math.floor(l)-1),h=Math.min(Math.floor(n),Math.ceil(l+this.vSpan)+1);if(u>h)return;const d=_=>(_-l+.5)*c,f=_=>t.cy-_*a.amp,g=a.alpha??1;if(r.save(),r.globalAlpha=g,r.strokeStyle=a.color,r.fillStyle=a.color,r.lineWidth=a.lw??1.5,r.lineJoin="round",c>=4){const _=Math.min(c*.55,44);for(let m=u;m<=h;m++){const p=e(m),y=d(m),x=f(p);a.fill?(r.globalAlpha=g*.75,r.fillStyle=p>=0?jt.pos:jt.neg,r.fillRect(y-_/2,Math.min(t.cy,x),_,Math.abs(x-t.cy)),r.globalAlpha=g):(r.beginPath(),r.moveTo(y,t.cy),r.lineTo(y,x),r.stroke(),r.beginPath(),r.arc(y,x,c>=12?4:2.5,0,Math.PI*2),r.fill()),a.labels&&c>=26&&(r.save(),r.globalAlpha=Math.max(g,.6),r.fillStyle=a.fill?"rgba(255,255,255,0.85)":a.color,r.font=`600 11px ${xi}`,r.textAlign="center",r.fillText(Os(p),y+(a.labelDx??0),p>=0?Math.min(x,t.cy)-8:Math.max(x,t.cy)+16),r.restore())}}else if(c>=.7){const _=new Path2D;for(let m=u;m<=h;m++){const p=d(m),y=f(e(m));m===u?_.moveTo(p,y):_.lineTo(p,y)}if(a.fill){const m=new Path2D;m.moveTo(d(u),t.cy);for(let y=u;y<=h;y++)m.lineTo(d(y),f(e(y)));m.lineTo(d(h),t.cy),m.closePath();const p=t.top-4;r.save(),r.beginPath(),r.rect(0,p,o,t.cy-p),r.clip(),r.globalAlpha=g*.55,r.fillStyle=jt.pos,r.fill(m),r.restore(),r.save(),r.beginPath(),r.rect(0,t.cy,o,t.top+t.h+4-t.cy),r.clip(),r.globalAlpha=g*.55,r.fillStyle=jt.neg,r.fill(m),r.restore()}r.stroke(_)}else{const _=new Path2D,m=Math.max(0,Math.floor(d(u))),p=Math.min(o-1,Math.ceil(d(h)));for(let y=m;y<=p;y++){const x=Math.max(u,Math.ceil(l+y/c-.5));let M=Math.min(h,Math.ceil(l+(y+1)/c-.5)-1);if(M<x&&(M=x),x>h)break;let A=1/0,T=-1/0;for(let C=x;C<=M;C++){const F=e(C);F<A&&(A=F),F>T&&(T=F)}A!==1/0&&(a.fill?(T>0&&(r.fillStyle=jt.pos,r.globalAlpha=g*.7,r.fillRect(y,f(T),1,t.cy-f(T))),A<0&&(r.fillStyle=jt.neg,r.globalAlpha=g*.7,r.fillRect(y,t.cy,1,f(A)-t.cy))):(_.moveTo(y+.5,f(T)),_.lineTo(y+.5,Math.max(f(A),f(T)+1))))}a.fill||r.stroke(_)}r.restore()}drawMain(){const t=this.ctx,e=this.width,i=Ha;t.clearRect(0,0,e,i),t.fillStyle=jt.bg,t.fillRect(0,0,e,i);const n=this.x,a=this.h,r=this.y;if(!n||!a||!r){t.fillStyle=jt.text,t.font=`600 12px ${xi}`,t.textAlign="center",t.fillText("Upload signal and kernel",e/2,i/2);return}const o=Math.min(this.n,r.length-1),l=a.length,c=this.mode==="stamp",u=this.vLeft,h=this.vSpan,d=e/h,f=B=>(B-u+.5)*d,g=(i-cl-ol-2*ll)/3,_=[0,1,2].map(B=>{const W=cl+B*(g+ll);return{top:W,h:g,cy:W+g/2+8,amp:g*.34}}),m=c?["Signal x[k]","Kernel copies","Output y[m]"]:["Signal x[k] + kernel h[n−k]","Products x[k]·h[n−k]","Output y[n]"];_.forEach((B,W)=>{t.fillStyle=jt.lane,t.fillRect(0,B.top,e,B.h),t.strokeStyle=jt.grid,t.lineWidth=1,t.beginPath(),t.moveTo(0,B.cy),t.lineTo(e,B.cy),t.stroke(),t.fillStyle=jt.text,t.font=`600 10px ${xi}`,t.textAlign="left",t.fillText(m[W],8,B.top+13)});const[p,y,x]=_,M=p.amp/this.maxX;if(c){const B=Math.min(o,n.length-1);this.series(p,W=>n[W],0,B,{color:jt.signal,amp:M,labels:!0}),this.series(p,W=>n[W],B+1,n.length-1,{color:jt.signal,amp:M,alpha:.28}),t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.arc(f(B),p.cy-n[B]*M,7,0,Math.PI*2),t.stroke()}else{const B=o-l+1;t.fillStyle="rgba(255, 215, 0, 0.07)",t.fillRect(f(B)-d/2,p.top,l*d,p.h),this.series(p,W=>n[W],0,n.length-1,{color:jt.signal,amp:M,labels:!0,labelDx:-9}),this.series(p,W=>a[o-W],B,o,{color:jt.kernel,amp:p.amp/this.maxH,lw:2,labels:!0,labelDx:9})}const A=y.amp/(this.maxX*this.maxH);if(c){const B=Math.min(o,n.length-1),W=d>=4?1:Math.max(1,Math.ceil(10/d));for(let V=13;V>=0;V--){const st=B-V*W;if(st<0)continue;const rt=n[st];d>=4&&rt===0||this.series(y,dt=>rt*a[dt-st],st,st+l-1,{color:d>=4?Gm[(st%8+8)%8]:jt.kernel,amp:A,alpha:V===0?1:Math.max(.25,.75-V*.05),lw:V===0?2.2:1.2,labels:V===0})}t.textAlign="right",t.font=`700 12px ${xi}`,t.fillStyle=jt.kernel,t.fillText(`copy scaled by x[${B}] = ${Os(n[B])}`+(W>1?`   (showing every ${W}th sample)`:""),e-8,y.top+14)}else{const B=Math.max(0,o-l+1),W=Math.min(o,n.length-1);this.series(y,rt=>n[rt]*a[o-rt],B,W,{color:"rgba(255,255,255,0.7)",amp:A,fill:!0,lw:1,labels:!0});let V=0,st=0;for(let rt=B;rt<=W;rt++){const dt=n[rt]*a[o-rt];dt>0?V+=dt:st+=dt}t.textAlign="right",t.font=`700 12px ${xi}`,t.fillStyle="#fff",t.fillText(`Σ = ${Os(V+st)}`,e-8,y.top+14)}const T=x.amp/this.maxY;if(this.series(x,B=>r[B],0,o,{color:jt.out,amp:T,lw:2,labels:!0}),c){const B=Math.min(r.length-1,o+l-1,Math.ceil(u+h));if(B>o){const W=this.getTail(o,B);this.series(x,V=>W[V-o-1],o+1,B,{color:jt.out,amp:T,alpha:.4,lw:1.5,labels:!0})}}const C=f(o),F=x.cy-r[o]*T;t.fillStyle="#fff",t.strokeStyle=jt.out,t.lineWidth=2,t.beginPath(),t.arc(C,F,5.5,0,Math.PI*2),t.fill(),t.stroke(),t.font=`700 12px ${xi}`,t.fillStyle="#fff",t.textAlign=C>e-150?"right":"left",t.fillText(`y[${o}] = ${Os(r[o])}`,C+(C>e-150?-12:12),Math.max(x.top+30,Math.min(x.top+x.h-8,F-10))),t.save(),t.strokeStyle=jt.marker,t.lineWidth=1.5,t.setLineDash([5,4]),t.globalAlpha=.85,t.beginPath(),t.moveTo(C,p.top),t.lineTo(C,x.top+x.h),t.stroke(),t.restore();const w=i-ol+4;t.strokeStyle="rgba(255,255,255,0.2)",t.lineWidth=1,t.beginPath(),t.moveTo(0,w),t.lineTo(e,w),t.stroke();const b=80/d,R=Math.pow(10,Math.floor(Math.log10(b))),G=[1,2,5,10].map(B=>B*R).find(B=>B>=b)??b;t.fillStyle="rgba(255,255,255,0.4)",t.font=`10px ${xi}`,t.textAlign="center";for(let B=Math.ceil(u/G)*G;B<u+h;B+=G){const W=f(B);t.beginPath(),t.moveTo(W,w),t.lineTo(W,w+4),t.stroke(),t.fillText(String(Math.round(B)),W,w+15)}const z=`n = ${o}  ·  ${(o/this.sr*1e3).toFixed(1)} ms`;t.font=`700 10px ${xi}`;const q=t.measureText(z).width+12,$=Math.max(q/2,Math.min(e-q/2,C));t.fillStyle=jt.marker,t.fillRect($-q/2,w+5,q,15),t.fillStyle="#10151d",t.fillText(z,$,w+16)}getTail(t,e){const i=`${t}:${e}`;if(i===this.tailKey)return this.tail;const n=this.x,a=this.h,r=a.length,o=Math.min(t,n.length-1),l=new Float64Array(e-t);for(let c=t+1;c<=e;c++){let u=0;for(let h=Math.max(0,c-r+1);h<=o;h++)u+=n[h]*a[c-h];l[c-t-1]=u}return this.tailKey=i,this.tail=l,l}envelope(t,e,i,n,a,r,o){if(i<e)return;const l=this.ovCtx,c=this.width,u=new Path2D,h=Math.floor(e/n*c),d=Math.min(c-1,Math.floor(i/n*c));for(let f=h;f<=d;f++){const g=Math.max(e,Math.floor(f/c*n)),_=Math.min(i,Math.max(g,Math.floor((f+1)/c*n)-1));let m=1/0,p=-1/0;for(let y=g;y<=_;y++){const x=t[y];x<m&&(m=x),x>p&&(p=x)}m!==1/0&&(u.moveTo(f+.5,a-p*r),u.lineTo(f+.5,Math.max(a-m*r,a-p*r+1)))}l.strokeStyle=o,l.lineWidth=1,l.stroke(u)}drawOverview(){const t=this.ovCtx,e=this.width,i=Ga;t.clearRect(0,0,e,i),t.fillStyle=jt.bg,t.fillRect(0,0,e,i);const n=this.x,a=this.y;if(!n||!a)return;const r=a.length,o=i/2;t.strokeStyle="rgba(255,255,255,0.08)",t.beginPath(),t.moveTo(0,o),t.lineTo(e,o),t.stroke();const l=Math.min(this.n,r-1);this.envelope(n,0,n.length-1,r,o,i*.4/this.maxX,"rgba(82,207,254,0.35)"),this.envelope(a,l+1,r-1,r,o,i*.4/this.maxY,"rgba(255,77,109,0.2)"),this.envelope(a,0,l,r,o,i*.4/this.maxY,jt.out);const c=Math.max(0,this.vLeft/r*e),u=Math.min(e,(this.vLeft+this.vSpan)/r*e),h=Math.max(4,u-c);t.fillStyle="rgba(255,154,77,0.12)",t.fillRect(c,1,h,i-2),t.strokeStyle=jt.marker,t.lineWidth=1.5,t.strokeRect(c+.5,1.5,h,i-3)}}let Va=null,Wm=0;function qm(){if(!Va){const s="/visualization/workers/convolve-worker.js";Va=new Worker(s,{type:"classic"})}return Va}function Xm(s,t){return new Promise((e,i)=>{const n=qm(),a=++Wm,r=c=>{const u=c.data||{};u.id===a&&(n.removeEventListener("message",r),u.type==="result"?e(new Float32Array(u.result)):i(new Error(u.message||"Convolution worker failed")))};n.addEventListener("message",r);const o=s.slice(),l=t.slice();n.postMessage({type:"convolve",id:a,signal:o,kernel:l},[o.buffer,l.buffer])})}const Ym=4e6;class $m{constructor(t){v(this,"container");v(this,"sharedAudio",Ze.getInstance());v(this,"audioContext",null);v(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),signalWaveform:Mt("signalWaveform",!0),kernelWaveform:Mt("kernelWaveform",!0)});v(this,"signalTrack");v(this,"kernelTrack");v(this,"totalSize",480);v(this,"onResize",()=>this.resizeDisplays());v(this,"scope");v(this,"transport");v(this,"statusLabel");v(this,"pos",0);v(this,"lastDrawnN",-1);v(this,"animating",!1);v(this,"rafId",null);v(this,"lastTick",0);v(this,"rawOut",null);v(this,"convolved",null);v(this,"convolvedBuffer",null);v(this,"convSampleRate",44100);v(this,"computeToken",0);v(this,"sourceNode",null);v(this,"gainNode",null);v(this,"loop",!1);v(this,"audioStartCtxTime",0);v(this,"audioStartPos",0);v(this,"tick",t=>{if(!this.animating)return;const e=this.audioContext;let i;if(e&&this.sourceNode)i=this.audioStartPos+(e.currentTime-this.audioStartCtxTime)*this.convSampleRate;else{const a=Math.min(.1,(t-this.lastTick)/1e3);this.lastTick=t,i=this.pos+a*this.convSampleRate}this.pos=i;const n=this.endPos();if(this.pos>=n)if(this.loop)this.pos=0,this.audioStartCtxTime=(e==null?void 0:e.currentTime)??0,this.audioStartPos=0;else{this.pos=n,this.pause(),this.statusLabel.textContent="Done",this.syncScope(!1);return}this.syncScope(!1),this.rafId=requestAnimationFrame(this.tick)});const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext()}computeTotalSize(){return Math.max(480,Math.floor(this.container.clientWidth)-4)}createUI(){this.container.classList.add("convolution-demo"),this.totalSize=this.computeTotalSize();const t=Math.floor((this.totalSize-16)/2);this.ui.transport?(this.transport=new In({onPlay:()=>this.play(),onPause:()=>this.pause(),onStop:()=>this.stop(),showUpload:!1,onLoopToggle:n=>{this.loop=n,this.sourceNode&&(this.sourceNode.loop=n)}}),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Load clips",this.transport.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transport.getElement())):(this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status transport-status--standalone",this.statusLabel.textContent="Load clips",this.container.appendChild(this.statusLabel));const e=document.createElement("div");e.className="conv-input-row",this.signalTrack=this.createTrack("Signal",t,n=>this.loadTrack(this.signalTrack,n),this.ui.signalWaveform),this.kernelTrack=this.createTrack("Kernel",t,n=>this.loadTrack(this.kernelTrack,n),this.ui.kernelWaveform),e.append(this.signalTrack.element,this.kernelTrack.element),this.container.appendChild(e);const i=document.createElement("div");i.className="conv-scope-panel",this.scope=new Vm,this.scope.setScrubHandler(n=>this.seek(n)),i.appendChild(this.scope.getElement()),this.container.appendChild(i),this.resizeDisplays()}createTrack(t,e,i,n){const a=document.createElement("span");a.className="conv-input-status",a.textContent="No file";const r=document.createElement("div");r.className="conv-input";const o=document.createElement("div");o.className="conv-input-head";const l=document.createElement("span");l.className="conv-input-title",l.textContent=t;const c=this.createUploadButton(i);o.append(l,a,c),r.appendChild(o);const u=n?new Dn({width:e,height:60,title:""},()=>{}):void 0;return u&&r.appendChild(u.getElement()),{samples:null,sampleRate:44100,waveform:u,status:a,element:r}}createUploadButton(t){const e=document.createElement("label");e.className="transport-upload",e.title="Upload";const i=document.createElement("input");i.type="file",i.accept="audio/*",i.hidden=!0,i.addEventListener("change",()=>{var r;const a=(r=i.files)==null?void 0:r[0];a&&t(a),i.value=""});const n=document.createElement("span");return n.innerHTML='<svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V5M6 9l4-4 4 4"/><path d="M3 15h14"/></svg>',e.append(i,n),e}resizeDisplays(){var e,i,n,a,r;this.totalSize=this.computeTotalSize();const t=Math.floor((this.totalSize-16)/2);(i=(e=this.signalTrack)==null?void 0:e.waveform)==null||i.resize(t,60),(a=(n=this.kernelTrack)==null?void 0:n.waveform)==null||a.resize(t,60),(r=this.scope)==null||r.resize(this.totalSize)}async loadTrack(t,e){t.status.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const i=await this.sharedAudio.decodeAudioData(await e.arrayBuffer());this.setTrackBuffer(t,i,e.name)}catch{t.status.textContent="Load error"}}setTrackBuffer(t,e,i){var n;t.samples=new Float32Array(e.getChannelData(0)),t.sampleRate=e.sampleRate,(n=t.waveform)==null||n.setWaveformFromBuffer(e),t.status.textContent=i,this.invalidateResult(),this.signalTrack.samples&&this.kernelTrack.samples&&this.runConvolution()}invalidateResult(){this.pause(),this.rawOut=null,this.convolved=null,this.convolvedBuffer=null,this.computeToken++,this.pos=0,this.lastDrawnN=-1,this.scope.clearData(),this.statusLabel.textContent="Load clips"}async runConvolution(){const t=this.signalTrack.samples,e=this.kernelTrack.samples;if(!t||!e)return;const i=++this.computeToken;this.statusLabel.textContent="Computing…",this.convSampleRate=this.signalTrack.sampleRate;let n;if(t.length*e.length<=Ym)n=Si.convolve(t,e);else try{n=await Xm(t,e)}catch{n=Si.convolve(t,e)}if(i===this.computeToken){if(this.rawOut=n,this.convolved=Si.normalizePeak(n,.9),this.audioContext){const a=this.audioContext.createBuffer(1,n.length,this.convSampleRate);a.copyToChannel(new Float32Array(this.convolved),0),this.convolvedBuffer=a}this.scope.setData(t,e,n,this.convSampleRate),this.pos=0,this.lastDrawnN=-1,this.syncScope(!0),this.statusLabel.textContent="Ready"}}endPos(){var t;return Math.max(0,(((t=this.rawOut)==null?void 0:t.length)??1)-1)}play(){var t,e,i;!this.rawOut||this.animating||(this.pos>=this.endPos()&&(this.pos=0),(t=this.audioContext)==null||t.resume().catch(()=>{}),this.startAudio(),this.animating=!0,this.lastTick=performance.now(),this.audioStartCtxTime=((e=this.audioContext)==null?void 0:e.currentTime)??0,this.audioStartPos=this.pos,(i=this.transport)==null||i.setPlaying(!0),this.rafId=requestAnimationFrame(this.tick))}pause(){var t;!this.animating&&this.rafId===null||(this.animating=!1,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.stopAudio(),(t=this.transport)==null||t.setPlaying(!1))}stop(){this.pause(),this.pos=0,this.syncScope(!0),this.statusLabel.textContent=this.rawOut?"Ready":"Load clips"}seek(t){var e;this.rawOut&&(this.pos=Math.max(0,Math.min(this.endPos(),Math.round(t))),this.animating&&(this.startAudio(),this.audioStartCtxTime=((e=this.audioContext)==null?void 0:e.currentTime)??0,this.audioStartPos=this.pos),this.syncScope(!1))}syncScope(t){const e=Math.floor(this.pos);!t&&e===this.lastDrawnN||(this.lastDrawnN=e,this.scope.setView(e,"slide",0),this.scope.render())}startAudio(){this.stopAudio();const t=this.audioContext,e=this.convolvedBuffer;if(!t||!e)return;const i=t.createBufferSource();i.buffer=e,i.loop=this.loop;const n=t.createGain();n.gain.value=.85,i.connect(n),n.connect(t.destination);const a=Math.min(e.duration-.001,Math.max(0,this.pos/this.convSampleRate));i.start(0,a),this.sourceNode=i,this.gainNode=n}stopAudio(){var t,e,i;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(i=this.gainNode)==null||i.disconnect(),this.sourceNode=null,this.gainNode=null}destroy(){this.pause(),window.removeEventListener("resize",this.onResize)}}let ai=null,Zn=null,Km=0;const yn=new Map,jm=`
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
`;function Zm(){if(!ai){const s=new Blob([jm],{type:"application/javascript"});Zn=URL.createObjectURL(s),ai=new Worker(Zn),ai.addEventListener("message",t=>{const e=t.data||{},i=yn.get(e.id);i&&(yn.delete(e.id),e.type==="result"?i.resolve({freqs:new Float32Array(e.freqs),magnitudesDb:new Float32Array(e.magnitudesDb)}):i.reject(new Error(e.message||"FFT worker failed")))}),ai.addEventListener("error",t=>{for(const[e,i]of yn)i.reject(new Error(t.message||"FFT worker crashed")),yn.delete(e)})}return ai}function Jm(s,t,e){return new Promise((i,n)=>{const a=Zm(),r=++Km;yn.set(r,{resolve:i,reject:n});const o=s.slice();a.postMessage({type:"compute",id:r,samples:o.buffer,sampleRate:t,numPoints:e},[o.buffer])})}function Qm(){ai==null||ai.terminate(),ai=null,Zn&&(URL.revokeObjectURL(Zn),Zn=null),yn.clear()}class tg{constructor(t){v(this,"container");v(this,"sharedAudio",Ze.getInstance());v(this,"audioContext",null);v(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),waveform:Mt("waveform",!0),scope:Mt("scope",!0),liveSpectrum:Mt("liveSpectrum",!0),cumulativeSpectrum:Mt("cumulativeSpectrum",!0)});v(this,"transportBar");v(this,"statusLabel");v(this,"waveformTimeline");v(this,"scopeDisplay");v(this,"liveSpectrum");v(this,"fullSpectrum");v(this,"rawBuffer",null);v(this,"samples",null);v(this,"sampleRate",44100);v(this,"windowSize",8192*2);v(this,"liveSpectrumPoints",2048*4);v(this,"fullSpectrumPoints",4096*32);v(this,"fullSpectrumData",null);v(this,"fullSpectrumComputing",!1);v(this,"fullSpectrumRequestId",0);v(this,"scopeWindowSamples",2048);v(this,"scopeStemCount",180);v(this,"scopeSincA",3);v(this,"scopeWidth",620);v(this,"scopeHeight",160);v(this,"sourceNode",null);v(this,"gainNode",null);v(this,"isPlaying",!1);v(this,"loop",!1);v(this,"animationId",null);v(this,"startTime",0);v(this,"pausedAt",0);v(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext(),await this.loadDefaultAudio()}getWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=this.getWidth();if(this.ui.transport?(this.transportBar=new In({onPlay:()=>this.play(),onPause:()=>this.pause(),onStop:()=>this.stop(!0),onUpload:e=>this.handleUpload(e),uploadLabel:"Upload",showUpload:this.ui.upload,onLoopToggle:e=>{this.loop=e}}),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())):(this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status transport-status--standalone",this.statusLabel.textContent="Loading…",this.container.appendChild(this.statusLabel)),this.ui.waveform&&(this.waveformTimeline=new Dn({width:t,height:100,title:"Waveform"},e=>this.seek(e)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.scope&&(this.scopeWidth=t,this.scopeHeight=160,this.scopeDisplay=new Xn({width:this.scopeWidth,height:this.scopeHeight,label:"Scope"}),this.scopeDisplay.getElement().classList.add("wave-display--spaced"),this.container.appendChild(this.scopeDisplay.getElement())),this.ui.liveSpectrum||this.ui.cumulativeSpectrum){const e=document.createElement("div");e.className="dft-spec-layout",this.ui.liveSpectrum&&(this.liveSpectrum=new Gi({width:t,height:360,label:"Live",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0,logScale:!0}),e.appendChild(this.liveSpectrum.getElement())),this.ui.cumulativeSpectrum&&(this.fullSpectrum=new Gi({width:t,height:360,label:"Full clip",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0,logScale:!0}),e.appendChild(this.fullSpectrum.getElement())),this.container.appendChild(e)}this.resizeDisplays()}async loadDefaultAudio(){const t=ts("audio");if(t){await this.loadFromUrl(t);return}await this.loadBuiltInChirp()}async loadBuiltInChirp(){if(!this.audioContext)return;const t=44100,e=2,i=t*e,n=this.audioContext.createBuffer(1,i,t),a=n.getChannelData(0);for(let r=0;r<i;r++){const o=r/t,l=200+3800*(o/e);a[r]=.55*Math.sin(2*Math.PI*l*o)}this.setBuffer(n,"Default chirp")}async loadFromUrl(t){this.statusLabel.textContent="Loading…";try{const i=await(await fetch(es(t))).arrayBuffer(),n=await this.sharedAudio.decodeAudioData(i);this.setBuffer(n,t.split("/").pop()??t)}catch{this.statusLabel.textContent="Load error",await this.loadBuiltInChirp()}}async handleUpload(t){this.statusLabel.textContent="Decoding…";try{const e=await t.arrayBuffer(),i=await this.sharedAudio.decodeAudioData(e);this.setBuffer(i,t.name)}catch{this.statusLabel.textContent="Load error"}}setBuffer(t,e){var i;this.rawBuffer=t,this.samples=new Float32Array(t.getChannelData(0)),this.sampleRate=t.sampleRate,(i=this.waveformTimeline)==null||i.setWaveformFromBuffer(t),this.pausedAt=0,this.statusLabel.textContent=e,this.computeFullSpectrum(),this.drawSpectra(0),this.drawScope(0)}computeFullSpectrum(){if(this.fullSpectrumData=null,!this.samples){this.fullSpectrumComputing=!1,this.drawFullSpectrum();return}const t=++this.fullSpectrumRequestId;this.fullSpectrumComputing=!0,this.drawFullSpectrum(),Jm(this.samples,this.sampleRate,this.fullSpectrumPoints).then(e=>{t===this.fullSpectrumRequestId&&(this.fullSpectrumData=e,this.fullSpectrumComputing=!1,this.drawFullSpectrum())}).catch(()=>{t===this.fullSpectrumRequestId&&(this.fullSpectrumComputing=!1,this.drawFullSpectrum())})}seek(t){var i;if(!this.samples)return;this.pausedAt=t;const e=Math.floor(t*this.sampleRate);(i=this.waveformTimeline)==null||i.setPlayhead(t),this.drawSpectra(e),this.drawScope(e),this.isPlaying&&(this.stop(!1),this.play())}async play(){var t;!this.rawBuffer||!this.audioContext||(this.stop(!1),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.rawBuffer,this.gainNode=this.audioContext.createGain(),this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&(this.loop?(this.pausedAt=0,this.play()):this.stop(!0))},this.isPlaying=!0,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel.textContent="Playing",this.startAnimation())}pause(){var t;!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this.teardownAudio(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.statusLabel.textContent="Paused")}stop(t){var e,i;this.teardownAudio(),this.isPlaying=!1,(e=this.transportBar)==null||e.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),t&&(this.pausedAt=0,(i=this.waveformTimeline)==null||i.setPlayhead(0),this.drawSpectra(0),this.drawScope(0),this.statusLabel.textContent="Stopped")}teardownAudio(){var t,e,i;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(i=this.gainNode)==null||i.disconnect(),this.sourceNode=null,this.gainNode=null}startAnimation(){const t=()=>{var n;if(!this.isPlaying||!this.audioContext||!this.samples)return;const e=this.audioContext.currentTime-this.startTime;this.pausedAt=e,(n=this.waveformTimeline)==null||n.setPlayhead(e);const i=Math.min(this.samples.length,Math.floor(e*this.sampleRate));this.drawSpectra(i),this.drawScope(i),this.animationId=requestAnimationFrame(t)};t()}drawSpectra(t){if(this.samples){if(this.liveSpectrum){const e=Math.max(0,t-this.windowSize),i=this.samples.slice(e,t);if(this.liveSpectrum.clear(),this.liveSpectrum.drawGrid(),i.length>=8){const n=cc(i,this.sampleRate,this.liveSpectrumPoints);this.liveSpectrum.drawSpectrum(n.freqs,n.magnitudesDb,"#52cffe",2,1,!0)}this.liveSpectrum.drawFreqAxis()}this.drawFullSpectrum()}}drawFullSpectrum(){this.fullSpectrum&&(this.fullSpectrum.clear(),this.fullSpectrum.drawGrid(),this.fullSpectrumData?this.fullSpectrum.drawSpectrum(this.fullSpectrumData.freqs,this.fullSpectrumData.magnitudesDb,"#ffd700",2.5,1,!0):this.fullSpectrumComputing&&this.drawFullSpectrumComputingLabel(),this.fullSpectrum.drawFreqAxis())}drawFullSpectrumComputingLabel(){var n;const t=(n=this.fullSpectrum)==null?void 0:n.getElement(),e=t==null?void 0:t.querySelector(".spectrum-canvas"),i=e==null?void 0:e.getContext("2d");!i||!e||(i.save(),i.font="600 12px JetBrains Mono",i.fillStyle="rgba(255, 215, 0, 0.55)",i.textAlign="center",i.fillText("Computing…",e.clientWidth/2,e.clientHeight/2),i.restore())}drawScope(t){if(!this.scopeDisplay||(this.scopeDisplay.clear(),this.scopeDisplay.drawGrid(),!this.samples||this.samples.length===0))return;const e=Math.floor(this.scopeWindowSamples/2),i=Math.max(0,t-e),n=Math.min(this.samples.length,i+this.scopeWindowSamples),a=this.samples.slice(i,n);if(a.length===0)return;const r=this.scopeWidth,o=this.scopeHeight,l=o/2,u=o-2*14,h=Math.max(2,Math.round(r)),d=new Array(h);for(let _=0;_<h;_++){const m=_/(h-1)*(a.length-1),p=this.lanczosInterpolate(a,m,this.scopeSincA),y=_/(h-1)*r,x=l-p*u/2;d[_]={x:y,y:x}}this.scopeDisplay.drawSmoothCurve(d,"#52cffe",1.6);const f=Math.min(this.scopeStemCount,a.length),g=[];for(let _=0;_<f;_++){const m=_/(f-1)*(a.length-1),p=this.lanczosInterpolate(a,m,this.scopeSincA),y=_/(f-1)*r,x=l-p*u/2;g.push({x:y,y:x})}this.scopeDisplay.drawSamplePoints(g,"#52cffe",!1)}lanczosInterpolate(t,e,i){const n=Math.floor(e);let a=0;for(let r=n-i+1;r<=n+i;r++)r<0||r>=t.length||(a+=t[r]*this.lanczosKernel(e-r,i));return a}lanczosKernel(t,e){if(t===0)return 1;if(t<=-e||t>=e)return 0;const i=Math.PI*t;return e*Math.sin(i)*Math.sin(i/e)/(i*i)}resizeDisplays(){var e,i,n,a;const t=this.getWidth();(e=this.waveformTimeline)==null||e.resize(t,100),this.scopeWidth=t,this.scopeHeight=160,(i=this.scopeDisplay)==null||i.resize(this.scopeWidth,this.scopeHeight),(n=this.liveSpectrum)==null||n.resize(t,360),(a=this.fullSpectrum)==null||a.resize(t,360),this.drawSpectra(Math.floor(this.pausedAt*this.sampleRate)),this.drawScope(Math.floor(this.pausedAt*this.sampleRate))}destroy(){this.stop(!0),window.removeEventListener("resize",this.onResize),Qm()}}const Vn=1.7,Wn=1.1,Rr=3,Ui=Rr/2,hl=.034,eg=2e4,ul=96,_n=(()=>{const s=new Float32Array(768);for(let t=0;t<256;t++){const[e,i,n]=$n(t/255);s[t*3]=e/255,s[t*3+1]=i/255,s[t*3+2]=n/255}return s})();class ig{constructor(t,{capacity:e=eg}={}){v(this,"xs");v(this,"ys");v(this,"capacity");v(this,"head",0);v(this,"count",0);v(this,"dirty",!0);v(this,"view",null);v(this,"ribbon",null);v(this,"frontLine",null);v(this,"marker",null);v(this,"fallback",null);this.canvas=t,this.capacity=e,this.xs=new Float32Array(e),this.ys=new Float32Array(e);try{this.initScene()}catch(i){console.warn("WebGL unavailable, using 2D X/Y graph:",i),this.fallback=t.getContext("2d")}}push(t,e){this.xs[this.head]=t,this.ys[this.head]=e,this.head=(this.head+1)%this.capacity,this.count<this.capacity&&this.count++,this.dirty=!0}resize(){this.view&&Jl(this.view.renderer,this.view.camera,this.canvas),this.dirty=!0}render(){this.view?(this.dirty&&this.updateRibbon(),this.view.controls.update(),this.view.renderer.render(this.view.scene,this.view.camera)):this.dirty&&this.drawFallback(),this.dirty=!1}dispose(){var t,e,i;(t=this.view)==null||t.scene.traverse(n=>{var o;const a=n;(o=a.geometry)==null||o.dispose();const r=a.material;Array.isArray(r)?r.forEach(l=>l.dispose()):r==null||r.dispose()}),(e=this.view)==null||e.controls.dispose(),(i=this.view)==null||i.renderer.dispose()}initScene(){const t=Zl(this.canvas,{camera:[4.4,3.2,6.4],target:[0,0,0],fog:[6,14]}),e=new Nn(2*Vn,2*Wn,Rr),i=new Sm(e);e.dispose(),t.scene.add(new Pr(i,new Yi({color:2372676})));const n=new Kl(2*Vn,14,1780539,1055268);n.position.y=-Wn,t.scene.add(n);const a=new le().setFromPoints([new N(-Vn,0,Ui),new N(Vn,0,Ui),new N(0,-Wn,Ui),new N(0,Wn,Ui)]);t.scene.add(new Pr(a,new Yi({color:3493994})));const r=this.capacity;this.ribbon=new le,this.ribbon.setAttribute("position",new ie(new Float32Array(r*2*3),3)),this.ribbon.setAttribute("aColor",new ie(new Float32Array(r*2*3),3)),this.ribbon.setAttribute("aAge",new ie(new Float32Array(r*2),1));const o=[];for(let u=0;u<r-1;u++){const h=u*2;o.push(h,h+1,h+2,h+1,h+3,h+2)}this.ribbon.setIndex(o);const l=new Ee(this.ribbon,new ui({vertexShader:`
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
        `,transparent:!0,depthWrite:!0,side:ke}));l.frustumCulled=!1,l.renderOrder=1,t.scene.add(l),this.frontLine=new le,this.frontLine.setAttribute("position",new ie(new Float32Array(ul*3),3));const c=new ta(this.frontLine,new Yi({color:11070719,transparent:!0,opacity:1}));c.renderOrder=2,t.scene.add(c),this.marker=new Ee(new Wr(.032,12,8),new qi({color:5427198})),this.marker.renderOrder=3,t.scene.add(this.marker),this.view=t}updateRibbon(){if(!this.ribbon||!this.frontLine||!this.marker)return;const t=this.capacity,e=this.count,i=this.ribbon.getAttribute("position"),n=this.ribbon.getAttribute("aColor"),a=this.ribbon.getAttribute("aAge"),r=i.array,o=n.array,l=a.array,c=_=>(this.head-1-_+t)%t,u=_=>this.xs[c(_)]*Vn,h=_=>this.ys[c(_)]*Wn;for(let _=0;_<e;_++){const m=u(_),p=h(_),y=Ui-_/(t-1)*Rr,x=Math.min(e-1,_+1),M=Math.max(0,_-1);let A=u(M)-u(x),T=h(M)-h(x),C=Math.hypot(A,T);C<1e-9&&(A=0,T=1,C=1);const F=-T/C*hl,w=A/C*hl,b=_*2;r[b*3]=m+F,r[b*3+1]=p+w,r[b*3+2]=y,r[(b+1)*3]=m-F,r[(b+1)*3+1]=p-w,r[(b+1)*3+2]=y;const R=_/Math.max(1,t-1),G=.35+.65*(1-R),z=Math.round(G*255)*3;o[b*3]=o[(b+1)*3]=_n[z],o[b*3+1]=o[(b+1)*3+1]=_n[z+1],o[b*3+2]=o[(b+1)*3+2]=_n[z+2],l[b]=l[b+1]=R}this.ribbon.setDrawRange(0,Math.max(0,e-1)*6),i.needsUpdate=!0,n.needsUpdate=!0,a.needsUpdate=!0;const d=this.frontLine.getAttribute("position"),f=d.array,g=Math.min(e,ul);for(let _=0;_<g;_++)f[_*3]=u(_),f[_*3+1]=h(_),f[_*3+2]=Ui+.002;this.frontLine.setDrawRange(0,g),d.needsUpdate=!0,e>0?(this.marker.position.set(u(0),h(0),Ui+.002),this.marker.visible=!0):this.marker.visible=!1}drawFallback(){const t=this.fallback;if(!t)return;const e=this.canvas.width,i=this.canvas.height,n=22,a=e-n*2,r=i-n*2,o=n+a/2,l=n+r/2;t.fillStyle="#04050a",t.fillRect(0,0,e,i),t.strokeStyle="rgba(255,255,255,0.14)",t.lineWidth=1,t.strokeRect(n,n,a,r),t.beginPath(),t.moveTo(n,l),t.lineTo(n+a,l),t.moveTo(o,n),t.lineTo(o,n+r),t.strokeStyle="rgba(255,255,255,0.08)",t.stroke();const c=this.capacity;for(let u=this.count-1;u>=0;u--){const h=(this.head-1-u+c)%c,d=o+Math.max(-1,Math.min(1,this.xs[h]))*(a/2),f=l-Math.max(-1,Math.min(1,this.ys[h]))*(r/2),_=.2+.8*(1-u/Math.max(1,this.count-1)),m=Math.round(_*255)*3;t.fillStyle=`rgba(${Math.round(_n[m]*255)},${Math.round(_n[m+1]*255)},${Math.round(_n[m+2]*255)},0.85)`,t.fillRect(d-1,f-1,2,2)}t.fillStyle="rgba(255,255,255,0.3)",t.font="10px JetBrains Mono",t.textAlign="center",t.fillText("x",n+a/2,i-4),t.save(),t.translate(8,n+r/2),t.rotate(-Math.PI/2),t.fillText("y",0,0),t.restore()}}const ng=[{value:"tremolo",label:"Tremolo"},{value:"lowpass",label:"Lowpass"},{value:"highpass",label:"Highpass"},{value:"delay",label:"Delay"}],Wa=300;class sg{constructor(t){v(this,"container");v(this,"animId",null);v(this,"sharedAudio",Ze.getInstance());v(this,"audioCtx",null);v(this,"originalBuffer",null);v(this,"sourceNode",null);v(this,"preset","tremolo");v(this,"tremoloRateHz",10);v(this,"lowpassCutoffHz",1200);v(this,"highpassCutoffHz",800);v(this,"delayTimeMs",300);v(this,"delayFeedback",.35);v(this,"delayWetMix",.55);v(this,"dspNode",null);v(this,"biquadNode",null);v(this,"delayNode",null);v(this,"delayFeedbackGain",null);v(this,"delayWetGain",null);v(this,"delayDryGain",null);v(this,"gainNode",null);v(this,"analyserNode",null);v(this,"analyserFreqData",null);v(this,"postTimeData",null);v(this,"preAnalyserNode",null);v(this,"preSilentGain",null);v(this,"preTimeData",null);v(this,"origSpectrumStatic",null);v(this,"sampleRate",44100);v(this,"synthLastFrameMs",null);v(this,"synthSampleRate",2e4);v(this,"synthN",0);v(this,"synthState",{x1:0,x2:0,y1:0,y2:0});v(this,"synthDelayBuffer",new Float32Array(20001));v(this,"synthDelayWriteIdx",0);v(this,"isPlaying",!1);v(this,"playMode","filtered");v(this,"playbackStartedAt",0);v(this,"pausedAt",0);v(this,"loop",!1);v(this,"transportBar");v(this,"waveformTimeline");v(this,"statusEl");v(this,"eqLabelEl");v(this,"knobGroups",{});v(this,"xyPanel");v(this,"xyCanvas");v(this,"xySurface");v(this,"scopePanel");v(this,"scopeCanvas");v(this,"spectrumCanvas");v(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),this.updateEquationLabel(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.startAnimation(),this.loadDefaultAudio()}buildUI(){document.body.classList.add("page-scroll"),this.buildTransport(),Mt("waveform",!0)&&(this.waveformTimeline=new Dn({width:900,height:64,title:"Waveform"},n=>this.seek(n)),this.waveformTimeline.getElement().classList.add("timeline-panel--spaced"),this.container.appendChild(this.waveformTimeline.getElement()));const t=document.createElement("div");t.className="deq-viz-row",this.xyPanel=bi("X/Y","deq-xy-panel"),this.xyCanvas=gl(this.xyPanel,600,Wa),this.xySurface=new ig(this.xyCanvas);const e=document.createElement("div");e.className="deq-side",this.scopePanel=bi("Scope"),this.scopeCanvas=Sn(this.scopePanel,400,146);const i=bi("Spectrum");this.spectrumCanvas=Sn(i,400,146),e.append(this.scopePanel,i),t.append(this.xyPanel,e),this.container.appendChild(t),this.container.appendChild(this.buildControls())}buildTransport(){if(!Mt("transport",!0)){this.statusEl=document.createElement("span"),this.statusEl.className="hidden";return}this.transportBar=new In({onPlay:()=>void this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:e=>void this.handleUpload(e),uploadLabel:"Upload",showUpload:Mt("upload",!0),onLoopToggle:e=>{if(this.isPlaying&&this.audioCtx){const i=this.currentPlaybackTime();this.pausedAt=i,this.playbackStartedAt=this.audioCtx.currentTime-i}this.loop=e,this.sourceNode&&(this.sourceNode.loop=e)}});const t=this.transportBar.getElement().querySelector(".transport-left");t.appendChild(Jn({className:"transport-mode-inline",value:this.playMode,modes:[{value:"original",label:"Original"},{value:"filtered",label:"Filtered"}],onChange:e=>{this.playMode=e,this.isPlaying&&(this.stopAudio(!1),this.startPlayback(e))}})),this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.textContent="Load audio",t.appendChild(this.statusEl),this.container.appendChild(this.transportBar.getElement())}buildControls(){const t=document.createElement("div");t.className="deq-controls";const e=Jn({className:"transport-mode-group",value:this.preset,modes:ng,onChange:r=>this.applyPreset(r)});this.eqLabelEl=document.createElement("div"),this.eqLabelEl.className="deq-eq-label";const i=document.createElement("div");i.className="deq-knob-row";const n=(r,o,l)=>new Hi(o,c=>{l(c),this.updateEquationLabel(),this.preset===r&&this.applyLiveParams()}).getElement(),a=(r,...o)=>{const l=document.createElement("div");l.className="deq-knob-row",l.classList.toggle("hidden",r!==this.preset),l.append(...o),this.knobGroups[r]=l,i.appendChild(l)};return a("tremolo",n("tremolo",{label:"Rate",unit:"Hz",min:.5,max:500,step:.5,value:this.tremoloRateHz,defaultValue:10},r=>this.tremoloRateHz=r)),a("lowpass",n("lowpass",{label:"Cutoff",unit:"Hz",min:100,max:8e3,step:10,value:this.lowpassCutoffHz,defaultValue:1200},r=>this.lowpassCutoffHz=r)),a("highpass",n("highpass",{label:"Cutoff",unit:"Hz",min:100,max:8e3,step:10,value:this.highpassCutoffHz,defaultValue:800},r=>this.highpassCutoffHz=r)),a("delay",n("delay",{label:"Time",unit:"ms",min:10,max:1e3,step:5,value:this.delayTimeMs,defaultValue:300},r=>this.delayTimeMs=r),n("delay",{label:"Feedback",unit:"%",min:0,max:90,step:1,value:this.delayFeedback*100,defaultValue:35},r=>this.delayFeedback=r/100)),t.append(e,this.eqLabelEl,i),t}resizeLayout(){var n;const t=Math.max(640,this.container.clientWidth-2);(n=this.waveformTimeline)==null||n.resize(t,64);const e=Math.floor((Wa-6-2)/2);_l(this.xyCanvas,Math.max(240,this.xyPanel.clientWidth),Wa),this.xySurface.resize();const i=Math.max(200,this.scopePanel.clientWidth);Ei(this.scopeCanvas,i,e),Ei(this.spectrumCanvas,i,e)}applyPreset(t){this.preset!==t&&(this.preset=t,Object.keys(this.knobGroups).forEach(e=>{this.knobGroups[e].classList.toggle("hidden",e!==t)}),this.updateEquationLabel(),this.isPlaying&&this.playMode==="filtered"&&(this.stopAudio(!1),this.startPlayback("filtered")))}updateEquationLabel(){if(this.preset==="tremolo")this.eqLabelEl.textContent=`y[n] = x[n] · cos(2π · ${this.tremoloRateHz.toFixed(1)} · n / Fs)`;else if(this.preset==="delay"){const t=this.sampleRate||44100,e=Math.max(1,Math.round(this.delayTimeMs/1e3*t));this.eqLabelEl.textContent=`D = ${this.delayTimeMs.toFixed(0)} ms = ${e} samples @ Fs
s[n] = x[n] + ${this.delayFeedback.toFixed(2)} · s[n − D],   y[n] = x[n] + ${this.delayWetMix.toFixed(2)} · s[n − D]`}else{const t=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz,e=this.sampleRate||44100,i=this.biquadCoeffs(this.preset,Math.min(t,e*.45),e),n=this.preset==="lowpass"?"Lowpass":"Highpass";this.eqLabelEl.textContent=`${n} · fc = ${t.toFixed(0)} Hz (Fs = ${e} Hz)
y[n] = ${i.b0.toFixed(3)}x[n] + ${i.b1.toFixed(3)}x[n−1] + ${i.b2.toFixed(3)}x[n−2] − (${i.a1.toFixed(3)})y[n−1] − (${i.a2.toFixed(3)})y[n−2]`}}biquadCoeffs(t,e,i){const n=2*Math.PI*e/i,a=Math.sin(n)/(2*Math.SQRT1_2),r=Math.cos(n);let o,l,c;t==="lowpass"?(o=(1-r)/2,l=1-r,c=(1-r)/2):(o=(1+r)/2,l=-(1+r),c=(1+r)/2);const u=1+a,h=-2*r,d=1-a;return{b0:o/u,b1:l/u,b2:c/u,a1:h/u,a2:d/u}}synthTestSignal(t){const e=t/this.synthSampleRate,i=Math.sin(2*Math.PI*223*e),n=Math.sin(2*Math.PI*669*e);return .5*i+.35*n}stepSynthSample(){const t=this.synthN++,e=this.synthTestSignal(t);let i;if(this.preset==="tremolo")i=e*Math.cos(2*Math.PI*this.tremoloRateHz*t/this.synthSampleRate);else if(this.preset==="delay"){const n=Math.min(this.synthDelayBuffer.length-1,Math.max(1,Math.round(this.delayTimeMs/1e3*this.synthSampleRate))),a=this.synthDelayBuffer,r=(this.synthDelayWriteIdx-n+a.length)%a.length,o=a[r],l=e+this.delayFeedback*o;a[this.synthDelayWriteIdx]=l,this.synthDelayWriteIdx=(this.synthDelayWriteIdx+1)%a.length,i=e+this.delayWetMix*o}else{const n=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz,a=Math.min(n,this.synthSampleRate*.45),r=this.biquadCoeffs(this.preset,a,this.synthSampleRate),o=this.synthState;i=r.b0*e+r.b1*o.x1+r.b2*o.x2-r.a1*o.y1-r.a2*o.y2,o.x2=o.x1,o.x1=e,o.y2=o.y1,o.y1=i}t%4===0&&this.xySurface.push(e,i)}async loadDefaultAudio(){var e;const t=ts("audio")??"audio/Linux.wav";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext());const n=await(await fetch(es(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(n),this.sampleRate=this.originalBuffer.sampleRate,this.cacheStaticSpectrum(),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),this.statusEl.textContent=`${t.split("/").pop()} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="Load audio"}}async handleUpload(t){var e;this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate,this.cacheStaticSpectrum(),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),this.statusEl.textContent=`${t.name} · ${this.originalBuffer.duration.toFixed(1)}s`}cacheStaticSpectrum(){if(!this.originalBuffer)return;const t=this.originalBuffer.getChannelData(0),e=4096,i=Math.floor(t.length/2);this.origSpectrumStatic=this.fftMag(t.slice(i,i+e),e)}applyLiveParams(){var t,e;if(this.preset==="tremolo"){(t=this.dspNode)==null||t.port.postMessage({type:"setMode",mode:"amplitude-mod"}),(e=this.dspNode)==null||e.port.postMessage({type:"setModulation",frequency:this.tremoloRateHz});return}if(this.preset==="delay"){this.delayNode&&this.audioCtx&&this.delayNode.delayTime.setTargetAtTime(this.delayTimeMs/1e3,this.audioCtx.currentTime,.01),this.delayFeedbackGain&&(this.delayFeedbackGain.gain.value=this.delayFeedback);return}if(this.biquadNode&&this.audioCtx){this.biquadNode.type=this.preset==="lowpass"?"lowpass":"highpass";const i=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz;this.biquadNode.frequency.setValueAtTime(i,this.audioCtx.currentTime),this.biquadNode.Q.value=Math.SQRT1_2}}async startPlayback(t){var e;if(this.stopAudio(!1),!this.originalBuffer||!this.audioCtx){this.statusEl.textContent="Load audio first";return}this.playMode=t,this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserFreqData=new Float32Array(this.analyserNode.frequencyBinCount),this.postTimeData=new Float32Array(this.analyserNode.fftSize),this.preAnalyserNode=this.audioCtx.createAnalyser(),this.preAnalyserNode.fftSize=4096,this.preTimeData=new Float32Array(this.preAnalyserNode.fftSize),this.preSilentGain=this.audioCtx.createGain(),this.preSilentGain.gain.value=0,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=.85,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=this.loop,this.sourceNode.connect(this.preAnalyserNode),this.preAnalyserNode.connect(this.preSilentGain),this.preSilentGain.connect(this.audioCtx.destination),t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.preset==="tremolo"?(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[1]}),this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.analyserNode)):this.preset==="delay"?(this.delayNode=this.audioCtx.createDelay(2),this.delayFeedbackGain=this.audioCtx.createGain(),this.delayWetGain=this.audioCtx.createGain(),this.delayWetGain.gain.value=this.delayWetMix,this.delayDryGain=this.audioCtx.createGain(),this.delayDryGain.gain.value=1,this.sourceNode.connect(this.delayDryGain),this.delayDryGain.connect(this.analyserNode),this.sourceNode.connect(this.delayNode),this.delayNode.connect(this.delayWetGain),this.delayWetGain.connect(this.analyserNode),this.delayNode.connect(this.delayFeedbackGain),this.delayFeedbackGain.connect(this.delayNode)):(this.biquadNode=this.audioCtx.createBiquadFilter(),this.sourceNode.connect(this.biquadNode),this.biquadNode.connect(this.analyserNode)),this.applyLiveParams(),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{!this.isPlaying||this.loop||this.stopAudio(!0)},this.isPlaying=!0,(e=this.transportBar)==null||e.setPlaying(!0)}currentPlaybackTime(){if(!this.audioCtx||!this.originalBuffer)return this.pausedAt;const t=this.originalBuffer.duration,e=this.audioCtx.currentTime-this.playbackStartedAt;return this.loop&&t>0?e%t:Math.min(e,t)}pauseAudio(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.currentPlaybackTime(),this.teardownNodes(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t){var e,i;this.teardownNodes(),this.isPlaying=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(i=this.waveformTimeline)==null||i.setPlayhead(this.pausedAt)}teardownNodes(){var t,e,i,n,a,r,o,l,c,u,h,d;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(i=this.dspNode)==null||i.disconnect(),(n=this.biquadNode)==null||n.disconnect(),(a=this.delayNode)==null||a.disconnect(),(r=this.delayFeedbackGain)==null||r.disconnect(),(o=this.delayWetGain)==null||o.disconnect(),(l=this.delayDryGain)==null||l.disconnect(),(c=this.analyserNode)==null||c.disconnect(),(u=this.gainNode)==null||u.disconnect(),(h=this.preAnalyserNode)==null||h.disconnect(),(d=this.preSilentGain)==null||d.disconnect(),this.sourceNode=null,this.dspNode=null,this.biquadNode=null,this.delayNode=null,this.delayFeedbackGain=null,this.delayWetGain=null,this.delayDryGain=null,this.analyserNode=null,this.gainNode=null,this.preAnalyserNode=null,this.preSilentGain=null}seek(t){this.originalBuffer&&(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}pushAudioToXY(){if(!this.preAnalyserNode||!this.analyserNode||!this.preTimeData||!this.postTimeData||!this.audioCtx)return;this.preAnalyserNode.getFloatTimeDomainData(this.preTimeData),this.analyserNode.getFloatTimeDomainData(this.postTimeData);const t=this.preTimeData.length,e=Math.min(t,Math.round(this.audioCtx.sampleRate*.016)),i=8;for(let n=Math.max(0,t-e);n<t;n+=i)this.xySurface.push(this.preTimeData[n],this.postTimeData[n])}drawScope(){const t=this.scopeCanvas,e=t.getContext("2d"),i=window.devicePixelRatio||1,n=t.width/i,a=t.height/i;e.fillStyle="#04050a",e.fillRect(0,0,n,a);const r=a/2;if(e.strokeStyle="rgba(255,255,255,0.08)",e.beginPath(),e.moveTo(0,r),e.lineTo(n,r),e.stroke(),!this.preAnalyserNode||!this.analyserNode||!this.preTimeData||!this.postTimeData){e.fillStyle="rgba(255,255,255,0.3)",e.font="10px JetBrains Mono",e.textAlign="center",e.fillText("Press play",n/2,r-6);return}this.preAnalyserNode.getFloatTimeDomainData(this.preTimeData),this.analyserNode.getFloatTimeDomainData(this.postTimeData);const o=(l,c,u,h)=>{const d=l.length,f=Math.max(1,Math.floor(d/n));e.beginPath(),e.lineWidth=h,e.strokeStyle=`rgba(${c},${u})`;let g=!0;for(let _=0;_<d;_+=f){const m=_/d*n,p=r-l[_]*(a*.42);g?(e.moveTo(m,p),g=!1):e.lineTo(m,p)}e.stroke()};o(this.preTimeData,"170,180,195",.55,1.25),o(this.postTimeData,"82,207,254",.9,1.5),e.font="8px JetBrains Mono",e.textAlign="right",e.fillStyle="rgba(220,224,232,0.85)",e.fillText("before",n-8,14),e.fillStyle="rgba(82,207,254,0.9)",e.fillText("after",n-8,26)}drawSpectrumLinear(){const t=this.spectrumCanvas,e=t.getContext("2d"),i=window.devicePixelRatio||1,n=t.width/i,a=t.height/i,r={l:40,r:12,t:20,b:18},o=n-r.l-r.r,l=a-r.t-r.b;e.fillStyle="#04050a",e.fillRect(0,0,n,a);const c=(h,d,f,g)=>{let _=1e-9;const m=h.length;for(let p=0;p<m;p++){const y=d?Math.pow(10,h[p]/20):h[p];_=Math.max(_,y)}e.beginPath(),e.moveTo(r.l,r.t+l);for(let p=1;p<m;p++){const y=d?Math.pow(10,h[p]/20):h[p],x=r.l+p/(m-1)*o,M=r.t+l-y/_*l;e.lineTo(x,M)}e.lineTo(r.l+o,r.t+l),e.closePath(),e.fillStyle=`rgba(${f},${g})`,e.fill()};this.origSpectrumStatic&&c(this.origSpectrumStatic,!1,"180,180,180",.25),this.analyserNode&&this.analyserFreqData&&(this.analyserNode.getFloatFrequencyData(this.analyserFreqData),c(this.analyserFreqData,!0,"82,207,254",.65)),e.fillStyle="rgba(255,255,255,0.25)",e.font="8px JetBrains Mono",e.textAlign="center";const u=this.sampleRate/2;[0,.25,.5,.75,1].forEach(h=>{const d=h*u;e.fillText(d>=1e3?`${(d/1e3).toFixed(1)}k`:`${d.toFixed(0)}`,r.l+h*o,a-4)})}fftMag(t,e){const i=new Float64Array(e),n=new Float64Array(e);for(let r=0;r<e&&r<t.length;r++){const o=.5*(1-Math.cos(2*Math.PI*r/(e-1)));i[r]=t[r]*o}is(i,n);const a=new Float32Array(e/2);for(let r=0;r<e/2;r++)a[r]=Math.sqrt(i[r]*i[r]+n[r]*n[r])/e;return a}startAnimation(){const t=e=>{var n;if(!!(this.isPlaying&&this.audioCtx&&this.originalBuffer))this.pushAudioToXY(),this.synthLastFrameMs=e,this.pausedAt=this.currentPlaybackTime(),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt);else{this.synthLastFrameMs===null&&(this.synthLastFrameMs=e);const a=Math.min(250,e-this.synthLastFrameMs);this.synthLastFrameMs=e;const r=Math.max(1,Math.round(a/1e3*this.synthSampleRate));for(let o=0;o<r;o++)this.stepSynthSample()}this.xySurface.render(),this.drawScope(),this.drawSpectrumLinear(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),this.xySurface.dispose(),window.removeEventListener("resize",this.onResize),document.body.classList.remove("page-scroll")}}function Lr(s,t,e=5){const i=new Float64Array(t),n=t-1;for(let a=0;a<t;a++)if(s==="rectangular")i[a]=1;else if(s==="hann")i[a]=.5*(1-Math.cos(2*Math.PI*a/n));else if(s==="hamming")i[a]=.54-.46*Math.cos(2*Math.PI*a/n);else if(s==="blackman")i[a]=.42-.5*Math.cos(2*Math.PI*a/n)+.08*Math.cos(4*Math.PI*a/n);else{const r=2*a/n-1;i[a]=dl(e*Math.sqrt(Math.max(0,1-r*r)))/dl(e)}return i}function dl(s){let t=1,e=1;for(let i=1;i<24&&(e*=s*s/(4*i*i),t+=e,!(e<1e-12));i++);return t}function ag(s){return .5842*Math.pow(s-21,.4)+.07886*(s-21)}function rg(s,t,e){let i=e;i=Math.max(3,i%2===0?i+1:i);const n=(s.fp+s.fstop)/2,a=t==="kaiser"?ag(s.asDb):5,r=Lr(t,i,a),o=new Array(i),l=(i-1)/2,c=2*Math.PI*n/s.fs;for(let h=0;h<i;h++){const d=h-l,f=d===0?c/Math.PI:Math.sin(c*d)/(Math.PI*d);o[h]=f*r[h]}const u=o.reduce((h,d)=>h+d,0);if(Math.abs(u)>1e-12)for(let h=0;h<o.length;h++)o[h]/=u;return{b:o,a:[1],order:i-1,methodLabel:`FIR · window ${t}`,window:t}}function fl(s,t){const e=new Array(s.length+t.length-1).fill(0);for(let i=0;i<s.length;i++)for(let n=0;n<t.length;n++)e[i+n]+=s[i]*t[n];return e}function og(s,t){const e=2*t+1;return 1/(2*Math.cos(Math.PI*e/(2*s)))}function lg(s,t,e){const i=2*Math.PI*s/e,n=Math.cos(i),r=Math.sin(i)/(2*t),o=1+r;return{b:[(1-n)/2/o,(1-n)/o,(1-n)/2/o],a:[1,-2*n/o,(1-r)/o]}}function cg(s){const[,t,e]=s,i=t*t-4*e;if(i>=0){const a=Math.sqrt(i);return[{re:(-t+a)/2,im:0},{re:(-t-a)/2,im:0}]}const n=Math.sqrt(-i);return[{re:-t/2,im:n/2},{re:-t/2,im:-n/2}]}function hg(s){const t=dg(s),e=s.fp*1.02,i=Math.max(1,Math.ceil(t/2)),n=[];let a=[1],r=[1];for(let c=0;c<i;c++){const u=og(t,c),{b:h,a:d}=lg(e,u,s.fs),f=2*c+1,g=Math.PI*f/(2*t);n.push({b:h,a:d,q:u,poleAngle:g,poles:cg(d)}),a=fl(a,h),r=fl(r,d)}const o=a.reduce((c,u)=>c+u,0)/r.reduce((c,u)=>c+u,0);a=a.map(c=>c/o);const l={b:a,a:r,order:t,methodLabel:`IIR · Butterworth (order ${t}, ${i} stage${i>1?"s":""})`};return{sections:n,combined:l,order:t,fc:e}}function ug(s,t){const[e,i,n]=t.b,[,a,r]=t.a,o=new Float32Array(s.length);let l=0,c=0;for(let u=0;u<s.length;u++){const h=s[u],d=e*h+l;l=i*h-a*d+c,c=n*h-r*d,o[u]=d}return o}function dg(s,t){const e=2*Math.PI*s.fp/s.fs,n=2*Math.PI*s.fstop/s.fs/e;{const a=Math.ceil(Math.log10((Math.pow(10,s.asDb/10)-1)/(Math.pow(10,s.apDb/10)-1))/(2*Math.log10(n)));return Math.max(2,Math.min(12,a))}}const Xi=6e3,Pe=3.6,Mn=Math.floor(Xi*Pe),qa=91,pl={fs:Xi,fp:180,fstop:520,asDb:40,apDb:1},fg=[{v:"rectangular",l:"Rectangular"},{v:"hann",l:"Hann"},{v:"hamming",l:"Hamming"},{v:"blackman",l:"Blackman"},{v:"kaiser",l:"Kaiser"}],Ce={bg:"#0a0d12",line:"rgba(255,255,255,0.06)",signal:"#e2a23f",window:"#d16fa0",output:"#4fc9b8",poleDim:"rgba(255,255,255,0.25)",poleActive:"#d16fa0"};function qn(s,t,e,i){const n=s-t;return i*Math.exp(-(n*n)/(2*e*e))}function pg(){const s=new Float32Array(Mn),e=60/70;for(let n=0;n<Mn;n++){const a=n/Xi,r=a%e;let o=0;o+=qn(r,.09,.014,.14),o+=qn(r,.17,.007,-.2),o+=qn(r,.19,.007,1),o+=qn(r,.21,.009,-.3),o+=qn(r,.34,.035,.3),o+=.03*Math.sin(2*Math.PI*.25*a),o+=.22*Math.sin(2*Math.PI*700*a),s[n]=o}let i=1e-6;for(let n=0;n<Mn;n++)i=Math.max(i,Math.abs(s[n]));for(let n=0;n<Mn;n++)s[n]/=i*1.05;return s}function mg(s,t){const e=s.length,i=t.length,n=(i-1)/2,a=new Float32Array(e);for(let r=0;r<e;r++){let o=0;for(let l=0;l<i;l++){const c=r+l-n;c>=0&&c<e&&(o+=s[c]*t[l])}a[r]=o}return a}class gg{constructor(t){v(this,"container");v(this,"stageCanvas");v(this,"sctx");v(this,"poleCanvas");v(this,"pctx");v(this,"windowsEl");v(this,"orderEl");v(this,"playBtn");v(this,"playIcon");v(this,"abEl");v(this,"scrubEl");v(this,"tabEls",{});v(this,"engine",Ze.getInstance());v(this,"rawSignal",pg());v(this,"tab","fir");v(this,"windowType","hamming");v(this,"order",4);v(this,"mode","filtered");v(this,"firFiltered");v(this,"firTaps");v(this,"iirSections",[]);v(this,"iirStageOutputs",[]);v(this,"iirCombinedOutput");v(this,"audioCtx",null);v(this,"sourceNode",null);v(this,"bufNoisy",null);v(this,"bufFiltered",null);v(this,"isPlaying",!1);v(this,"startedAt",0);v(this,"pausedAt",0);v(this,"scrubbing",!1);v(this,"scrubT",0);v(this,"rafId",null);const e=typeof t=="string"?document.getElementById(t):t;if(!e)throw new Error(`FilterDesignDemo: no element found for "${t}". Pass the container element itself, or an id that exists in the DOM at construction time.`);this.container=e,this.render(),this.redesignFir(),this.redesignIir(),this.loop=this.loop.bind(this),this.rafId=requestAnimationFrame(this.loop)}destroy(){this.rafId&&cancelAnimationFrame(this.rafId),this.stopSource()}render(){this.container.innerHTML="",this.container.className="filter-demo";const t=document.createElement("div");t.className="fd-head",t.innerHTML='<p id="fd-sub"></p>',this.container.appendChild(t);const e=document.createElement("div");e.className="fd-tabs",e.innerHTML=`
      <button data-tab="fir" class="active">FIR</button>
      <button data-tab="iir">IIR</button>
    `,e.querySelectorAll("button").forEach(a=>{const r=a.getAttribute("data-tab");this.tabEls[r]=a,a.addEventListener("click",()=>this.setTab(r))}),this.container.appendChild(e),this.windowsEl=document.createElement("div"),this.windowsEl.className="fd-controls",this.container.appendChild(this.windowsEl),this.orderEl=document.createElement("div"),this.orderEl.className="fd-controls hidden",this.container.appendChild(this.orderEl);const i=document.createElement("div");i.className="fd-panel",this.stageCanvas=document.createElement("canvas"),this.stageCanvas.width=1480,this.stageCanvas.height=720,i.appendChild(this.stageCanvas),this.container.appendChild(i),this.sctx=this.stageCanvas.getContext("2d");const n=document.createElement("div");n.className="fd-transport",n.innerHTML=`
      <div class="fd-ab">
        <button data-m="noisy">Noisy</button>
        <button data-m="filtered" class="active">Filtered</button>
      </div>
      <button class="fd-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
      <input class="fd-scrub" type="range" min="0" max="1000" value="0" />
    `,this.container.appendChild(n),this.playBtn=n.querySelector(".fd-play"),this.playIcon=n.querySelector("svg"),this.abEl=n.querySelector(".fd-ab"),this.scrubEl=n.querySelector(".fd-scrub"),this.playBtn.addEventListener("click",()=>this.isPlaying?this.pause():this.play()),this.abEl.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{this.abEl.querySelectorAll("button").forEach(r=>r.classList.remove("active")),a.classList.add("active"),this.mode=a.getAttribute("data-m"),this.isPlaying&&(this.pause(),this.play())})}),this.scrubEl.addEventListener("input",()=>{this.scrubbing=!0,this.scrubT=Number(this.scrubEl.value)/1e3*Pe}),this.scrubEl.addEventListener("change",()=>{this.pausedAt=this.scrubT,this.scrubbing=!1,this.isPlaying&&(this.pause(),this.play())}),this.buildWindowPicker(),this.buildOrderPicker(),this.updateSub()}buildWindowPicker(){this.windowsEl.innerHTML="",fg.forEach(({v:t,l:e})=>{const i=document.createElement("button");i.className="fd-chip"+(t===this.windowType?" active":"");const n=document.createElement("canvas");n.className="fd-window-preview",n.width=60,n.height=26;const a=document.createElement("span");a.textContent=e,i.append(n,a),i.addEventListener("click",()=>{this.windowType=t,this.windowsEl.querySelectorAll(".fd-chip").forEach(r=>r.classList.remove("active")),i.classList.add("active"),this.redesignFir()}),this.windowsEl.appendChild(i),this.drawWindowPreview(n,t)})}drawWindowPreview(t,e){const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height);const n=Lr(e,40);i.strokeStyle=e===this.windowType?Ce.window:"rgba(255,255,255,0.4)",i.lineWidth=1.4,i.beginPath();for(let a=0;a<n.length;a++){const r=4+a/(n.length-1)*(t.width-8),o=t.height-3-n[a]*(t.height-6);a===0?i.moveTo(r,o):i.lineTo(r,o)}i.stroke()}buildOrderPicker(){this.orderEl.innerHTML="",[2,4,6,8].forEach(t=>{const e=document.createElement("button");e.className="fd-chip"+(t===this.order?" active":"");const i=document.createElement("canvas");i.className="fd-order-preview",i.width=30,i.height=30;const n=document.createElement("span");n.textContent=`${t}`,e.append(i,n),e.addEventListener("click",()=>{this.order=t,this.orderEl.querySelectorAll(".fd-chip").forEach(a=>a.classList.remove("active")),e.classList.add("active"),this.redesignIir()}),this.orderEl.appendChild(e),this.drawOrderPreview(i,t)})}drawOrderPreview(t,e){const i=t.getContext("2d");i.clearRect(0,0,t.width,t.height);const n=t.width/2,a=t.height/2,r=t.width/2-4;i.strokeStyle="rgba(255,255,255,0.25)",i.beginPath(),i.arc(n,a,r,0,Math.PI*2),i.stroke(),i.fillStyle=e===this.order?Ce.window:"rgba(255,255,255,0.5)";for(let o=0;o<e;o++){const l=Math.PI*(2*o+1)/(2*e),c=Math.PI/2+l,u=Math.PI/2-l;[c,u].forEach(h=>{const d=n+r*Math.cos(h),f=a+r*Math.sin(h);i.beginPath(),i.arc(d,f,1.8,0,Math.PI*2),i.fill()})}}setTab(t){this.tab=t,Object.keys(this.tabEls).forEach(e=>this.tabEls[e].classList.toggle("active",e===t)),this.windowsEl.classList.toggle("hidden",t!=="fir"),this.orderEl.classList.toggle("hidden",t!=="iir"),this.updateSub(),this.rebuildAudioBuffers(),this.isPlaying&&(this.pause(),this.play())}updateSub(){const t=this.container.querySelector("#fd-sub");t.textContent=this.tab==="fir"?"Windowed FIR.":"Butterworth IIR."}redesignFir(){const t=rg(pl,this.windowType,qa);this.firTaps=t.b,this.firFiltered=mg(this.rawSignal,this.firTaps),this.tab==="fir"&&this.rebuildAudioBuffers()}redesignIir(){const t={...pl,asDb:this.order*10,apDb:1},{sections:e}=hg(t);let i=e;const n=Math.max(1,Math.ceil(this.order/2));for(i.length>n&&(i=i.slice(0,n));i.length<n;)i.push(i[i.length-1]);this.iirSections=i;const a=[this.rawSignal];let r=this.rawSignal;for(const o of i)r=ug(r,o),a.push(r);this.iirStageOutputs=a,this.iirCombinedOutput=a[a.length-1],this.tab==="iir"&&this.rebuildAudioBuffers()}ensureCtx(){return this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext)),this.audioCtx}rebuildAudioBuffers(){const t=this.ensureCtx(),e=this.tab==="fir"?this.firFiltered:this.iirCombinedOutput,i=t.createBuffer(1,Mn,Xi);i.copyToChannel(this.rawSignal,0);const n=t.createBuffer(1,Mn,Xi);n.copyToChannel(e,0),this.bufNoisy=i,this.bufFiltered=n}currentBuffer(){return this.mode==="filtered"?this.bufFiltered:this.bufNoisy}stopSource(){if(this.sourceNode){try{this.sourceNode.stop()}catch{}this.sourceNode.disconnect(),this.sourceNode=null}}play(){const t=this.ensureCtx();t.state==="suspended"&&t.resume(),this.stopSource();const e=t.createBufferSource();e.buffer=this.currentBuffer();const i=t.createGain();i.gain.value=.9,e.connect(i).connect(t.destination),this.pausedAt>=Pe-.02&&(this.pausedAt=0),e.start(0,this.pausedAt),this.startedAt=t.currentTime-this.pausedAt,e.onended=()=>{this.isPlaying&&Math.abs(this.currentTime()-Pe)<.05&&(this.isPlaying=!1,this.pausedAt=0,this.updatePlayIcon())},this.sourceNode=e,this.isPlaying=!0,this.updatePlayIcon()}pause(){this.isPlaying&&(this.pausedAt=this.currentTime(),this.stopSource(),this.isPlaying=!1,this.updatePlayIcon())}currentTime(){return!this.isPlaying||!this.audioCtx?this.pausedAt:Math.min(Pe,this.audioCtx.currentTime-this.startedAt)}updatePlayIcon(){this.playIcon.innerHTML=this.isPlaying?'<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>':'<path d="M8 5v14l11-7z"/>'}loop(){this.draw(),this.scrubbing||(this.scrubEl.value=String(Math.round(this.currentTime()/Pe*1e3))),this.rafId=requestAnimationFrame(this.loop)}draw(){const t=this.scrubbing?this.scrubT:this.currentTime();this.tab==="fir"?this.drawFir(t):this.drawIir(t)}geometry(){const t=this.sctx,e=this.stageCanvas.width,i=e/760,n=26*i,a=150*i,r=40*i,o=34*i,l=o+a+r,c=l+a+r,u=e-n*2;return{ctx:t,CW:e,SCALE:i,padX:n,laneH:a,gap:r,lane1Y:o,lane2Y:l,lane3Y:c,plotW:u}}clear(){const{ctx:t,CW:e}=this.geometry();t.clearRect(0,0,e,this.stageCanvas.height),t.fillStyle=Ce.bg,t.fillRect(0,0,e,this.stageCanvas.height)}tToX(t,e,i){return e+t/Pe*i}sampleAt(t,e){const i=Math.max(0,Math.min(t.length-1,Math.round(e*Xi)));return t[i]}drawBaseline(t,e,i,n){const a=this.sctx;a.strokeStyle=Ce.line,a.lineWidth=1,a.beginPath(),a.moveTo(i,t+e/2),a.lineTo(i+n,t+e/2),a.stroke()}drawLabel(t,e,i,n,a){const r=this.sctx;r.fillStyle=n,r.font=`${11*a}px JetBrains Mono`,r.textAlign="left",r.fillText(t,e,i)}drawWave(t,e,i,n,a,r,o,l,c,u){const h=this.sctx,d=e+i/2,f=i*.42,g=this.tToX(Math.max(0,a),l,c),_=this.tToX(Math.min(Pe,r),l,c);if(_<=g)return;h.save(),h.strokeStyle=n,h.lineWidth=2*u,o&&(h.shadowColor=n,h.shadowBlur=8*u),h.beginPath();const m=Math.max(2,Math.floor(_-g));for(let p=0;p<=m;p++){const y=g+p/m*(_-g),x=(y-l)/c*Pe,M=this.sampleAt(t,x),A=d-M*f;p===0?h.moveTo(y,A):h.lineTo(y,A)}h.stroke(),h.restore()}drawFir(t){this.clear();const{padX:e,laneH:i,lane1Y:n,lane2Y:a,lane3Y:r,plotW:o,SCALE:l}=this.geometry(),c=qa/Xi/2;this.drawBaseline(n,i,e,o),this.drawBaseline(a,i,e,o),this.drawBaseline(r,i,e,o),this.drawLabel("input",e,n-10*l,"rgba(226,162,63,0.85)",l),this.drawLabel("window × input",e,a-10*l,"rgba(209,111,160,0.9)",l),this.drawLabel("output",e,r-10*l,"rgba(79,201,184,0.9)",l),this.drawWave(this.rawSignal,n,i,"rgba(226,162,63,0.28)",0,Pe,!1,e,o,l),this.drawWave(this.rawSignal,n,i,Ce.signal,t-c,t+c,!0,e,o,l);const u=Lr(this.windowType,qa),h=this.sctx;{const d=n+i/2,f=i*.48;h.save(),h.beginPath();for(let g=0;g<u.length;g++){const _=t-c+g/(u.length-1)*(c*2),m=this.tToX(_,e,o),p=d-u[g]*f;g===0?h.moveTo(m,p):h.lineTo(m,p)}for(let g=u.length-1;g>=0;g--){const _=t-c+g/(u.length-1)*(c*2),m=this.tToX(_,e,o),p=d+u[g]*f;h.lineTo(m,p)}h.closePath(),h.fillStyle="rgba(209,111,160,0.16)",h.fill(),h.restore()}{const d=a+i/2,f=i*.42;h.save(),h.strokeStyle=Ce.window,h.lineWidth=2*l,h.shadowColor=Ce.window,h.shadowBlur=8*l;const g=[];h.beginPath();for(let _=0;_<u.length;_++){const m=t-c+_/(u.length-1)*(c*2),y=this.sampleAt(this.rawSignal,m)*u[_],x=this.tToX(m,e,o),M=d-y*f;g.push([x,M]),_===0?h.moveTo(x,M):h.lineTo(x,M)}h.stroke(),h.beginPath(),h.moveTo(g[0][0],d),g.forEach(_=>h.lineTo(_[0],_[1])),h.lineTo(g[g.length-1][0],d),h.closePath(),h.shadowBlur=0,h.fillStyle="rgba(209,111,160,0.14)",h.fill(),h.restore()}this.drawWave(this.firFiltered,r,i,"rgba(79,201,184,0.22)",0,Pe,!1,e,o,l),this.drawWave(this.firFiltered,r,i,Ce.output,0,t,!0,e,o,l),this.drawOutputDot(this.firFiltered,r,i,t,e,o,l),this.drawPlayhead(t,e,o,l,n,r,i)}drawIir(t){this.clear();const{padX:e,laneH:i,lane1Y:n,lane2Y:a,lane3Y:r,plotW:o,SCALE:l}=this.geometry();this.drawBaseline(n,i,e,o),this.drawBaseline(r,i,e,o),this.drawLabel("input",e,n-10*l,"rgba(226,162,63,0.85)",l),this.drawLabel("stages",e,a-10*l,"rgba(209,111,160,0.9)",l),this.drawLabel("output",e,r-10*l,"rgba(79,201,184,0.9)",l),this.drawWave(this.rawSignal,n,i,"rgba(226,162,63,0.28)",0,Pe,!1,e,o,l),this.drawWave(this.rawSignal,n,i,Ce.signal,t-.05,t+.05,!0,e,o,l);const c=this.sctx,u=this.iirSections.length,h=i,d=e+h/2,f=a+i/2,g=h*.42;c.save(),c.strokeStyle="rgba(255,255,255,0.18)",c.lineWidth=1,c.beginPath(),c.arc(d,f,g,0,Math.PI*2),c.stroke(),c.beginPath(),c.moveTo(d-g,f),c.lineTo(d+g,f),c.moveTo(d,f-g),c.lineTo(d,f+g),c.strokeStyle="rgba(255,255,255,0.08)",c.stroke();const _=u>0?Math.floor(t/Pe*u)%u:-1;this.iirSections.forEach((A,T)=>{const C=T===_;c.fillStyle=C?Ce.poleActive:Ce.poleDim,A.poles.forEach(F=>{const w=d+F.re*g,b=f-F.im*g;c.beginPath(),c.arc(w,b,C?4*l:3*l,0,Math.PI*2),c.fill(),c.strokeStyle=c.fillStyle,c.lineWidth=1.4*l;const R=3*l;c.beginPath(),c.moveTo(w-R,b-R),c.lineTo(w+R,b+R),c.moveTo(w-R,b+R),c.lineTo(w+R,b-R),c.stroke()})}),c.restore();const m=d+g+26*l,p=e+o-m,y=10*l,x=u>0?(p-y*(u-1))/u:0,M=i;for(let A=0;A<u;A++){const T=m+A*(x+y),C=A===_,F=this.iirStageOutputs[A+1];c.save(),c.strokeStyle=C?"rgba(209,111,160,0.5)":"rgba(255,255,255,0.1)",c.lineWidth=1,c.strokeRect(T,a,x,M);const w=a+M/2,b=M*.4,R=.18;c.beginPath(),c.strokeStyle=C?Ce.window:"rgba(209,111,160,0.55)",c.lineWidth=1.4*l;const G=60;for(let z=0;z<=G;z++){const q=t-R/2+z/G*R,$=this.sampleAt(F,q),B=T+z/G*x,W=w-$*b;z===0?c.moveTo(B,W):c.lineTo(B,W)}c.stroke(),this.drawLabel(`stage ${A+1}`,T+4*l,a+M-6*l,"rgba(255,255,255,0.35)",l),c.restore()}this.drawWave(this.iirCombinedOutput,r,i,"rgba(79,201,184,0.22)",0,Pe,!1,e,o,l),this.drawWave(this.iirCombinedOutput,r,i,Ce.output,0,t,!0,e,o,l),this.drawOutputDot(this.iirCombinedOutput,r,i,t,e,o,l),this.drawPlayhead(t,e,o,l,n,r,i)}drawOutputDot(t,e,i,n,a,r,o){const l=this.sctx,c=e+i/2,u=i*.42,h=this.sampleAt(t,n),d=this.tToX(n,a,r),f=c-h*u;l.fillStyle=Ce.output,l.beginPath(),l.arc(d,f,4.5*o,0,Math.PI*2),l.fill()}drawPlayhead(t,e,i,n,a,r,o){const l=this.sctx,c=this.tToX(t,e,i);l.save(),l.strokeStyle="rgba(255,255,255,0.22)",l.setLineDash([4*n,4*n]),l.lineWidth=1,l.beginPath(),l.moveTo(c,a-14*n),l.lineTo(c,r+o),l.stroke(),l.restore()}}class _g{constructor(t,e){v(this,"root");v(this,"content");this.root=document.createElement("div"),this.root.className="demo-shell";const i=document.createElement("div");i.className="demo-shell-toolbar";const n=document.createElement("button");n.className="back-button",n.title="Back",n.setAttribute("aria-label","Back"),n.innerHTML='<svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 6 10l6 6"/></svg>',n.onclick=e;const a=document.createElement("div");a.className="demo-shell-title",a.textContent=t,i.append(n,a),this.content=document.createElement("div"),this.content.className="demo-shell-content",this.root.append(i,this.content)}getElement(){return this.root}getContentElement(){return this.content}}function vg(s="app"){const t=document.getElementById(s);if(!t)return()=>{};let e=null;const i=()=>{e=null;const r=t.offsetWidth,o=t.offsetHeight;if(r===0||o===0)return;const l=window.innerWidth,c=window.innerHeight,u=16,h=(l-u)/r,d=(c-u)/o,f=Math.max(.1,Math.min(h,d));t.style.transform=`scale(${f})`},n=()=>{e!==null&&cancelAnimationFrame(e),e=requestAnimationFrame(i)};window.addEventListener("resize",n);const a=new ResizeObserver(n);return a.observe(t),n(),()=>{window.removeEventListener("resize",n),a.disconnect(),e!==null&&cancelAnimationFrame(e)}}const xg=[{route:"/aliasing-sine",title:"Sine aliasing",containerId:"sine-container",create:s=>new lc(s)},{route:"/aliasing-audio",title:"Audio aliasing",containerId:"audio-container",create:s=>new Ya(s)},{route:"/z-transform",title:"Z-transform",containerId:"ztransform-container",create:s=>new $a(s)},{route:"/pole-zero",title:"Pole-zero",containerId:"polezero-container",create:s=>new zm(s)},{route:"/convolution",title:"Convolution",containerId:"convolution-container",create:s=>new $m(s)},{route:"/dft-demo",title:"DFT",containerId:"dft-container",create:s=>new tg(s)},{route:"/difference-equations",title:"Difference equations",containerId:"diff-eq-container",create:s=>new sg(s)},{route:"/filter-design",title:"Filter design",containerId:"filter-design-container",create:s=>new gg(s)}];document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("app"),t=new rc;let e=null;t.register("/",()=>({mount:()=>new oc(s,t).mount(),unmount:()=>{s.innerHTML=""}}));for(const i of xg)t.register(i.route,()=>({mount:()=>{s.innerHTML="";const n=new _g(i.title,()=>t.navigate("/")),a=document.createElement("div");a.id=i.containerId,n.getContentElement().appendChild(a),s.appendChild(n.getElement()),e=i.create(i.containerId)},unmount:()=>{e==null||e.destroy(),e=null,s.innerHTML=""}}));t.start(),vg("app")});
