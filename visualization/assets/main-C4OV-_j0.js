var vl=Object.defineProperty;var xl=(r,t,e)=>t in r?vl(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var b=(r,t,e)=>xl(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();class Sl{constructor(){b(this,"currentHandler",null);b(this,"handlers",new Map);b(this,"basePath");this.basePath="/visualization/",window.addEventListener("popstate",()=>this.handleRoute())}register(t,e){this.handlers.set(t,e)}navigate(t){const e=t==="/"?this.basePath:`${this.basePath}${t.slice(1)}.html`;window.location.href=e}handleRoute(){const t=window.location.pathname;let e="/";t.includes("aliasing-sine.html")?e="/aliasing-sine":t.includes("aliasing-audio.html")?e="/aliasing-audio":t.includes("z-transform.html")?e="/z-transform":t.includes("pole-zero.html")?e="/pole-zero":t.includes("convolution.html")?e="/convolution":t.includes("dft-demo.html")&&(e="/dft-demo"),this.currentHandler&&this.currentHandler.unmount();const n=this.handlers.get(e)||this.handlers.get("/");n&&(this.currentHandler=n(),this.currentHandler.mount())}start(){this.handleRoute()}}class Ml{constructor(t,e){b(this,"container");b(this,"router");this.container=t,this.router=e}mount(){this.container.innerHTML=`
      <div class="home-container">
        <h1 class="home-title">Digital Filters VISUALIZATIONS</h1>
        <br />
        
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
            <h2 class="card-title">Sine Wave Aliasing</h2>
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
            <h2 class="card-title">Audio Aliasing</h2>
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
            <h2 class="card-title">Z-Transform Explorer</h2>
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
            <h2 class="card-title">Pole-Zero Designer</h2>
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
            <h2 class="card-title">DFT Demo</h2>
            <div class="card-arrow">→</div>
          </div>
        </div>
      </div>
    `,this.container.querySelectorAll(".home-card").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-route");n&&this.router.navigate(n)})})}unmount(){this.container.innerHTML=""}}class oi{constructor(t,e){b(this,"container");b(this,"svg");b(this,"value");b(this,"config");b(this,"onChange");b(this,"isDragging",!1);b(this,"startX",0);b(this,"startY",0);b(this,"startValue",0);b(this,"indicator");this.config={...t,defaultValue:t.defaultValue??t.value},this.value=t.value,this.onChange=e,this.container=this.createKnob(),this.svg=this.container.querySelector("svg"),this.indicator=this.svg.querySelector(".knob-indicator"),this.updateVisuals(),this.attachEventListeners()}createKnob(){const t=document.createElement("div");t.className="knob-wrapper";const e=document.createElement("div");e.className="knob-container";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 100 100"),n.setAttribute("class","knob-svg");const i=document.createElementNS("http://www.w3.org/2000/svg","circle");i.setAttribute("cx","50"),i.setAttribute("cy","50"),i.setAttribute("r","48"),i.setAttribute("class","knob-outer");const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx","50"),s.setAttribute("cy","50"),s.setAttribute("r","42"),s.setAttribute("class","knob-body");const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx","50"),a.setAttribute("cy","50"),a.setAttribute("r","38"),a.setAttribute("class","knob-inner");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("class","knob-arc-track"),o.setAttribute("d",this.describeArc(50,50,45,210,330)),o.setAttribute("fill","none");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("class","knob-arc-value"),l.setAttribute("fill","none");const c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("class","knob-indicator");const h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("x1","50"),h.setAttribute("y1","18"),h.setAttribute("x2","50"),h.setAttribute("y2","32"),h.setAttribute("stroke-linecap","round");const u=document.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("cx","50"),u.setAttribute("cy","25"),u.setAttribute("r","4"),c.appendChild(h),c.appendChild(u),n.appendChild(i),n.appendChild(s),n.appendChild(a),n.appendChild(o),n.appendChild(l),n.appendChild(c),e.appendChild(n);const d=document.createElement("div");d.className="knob-label",d.textContent=this.config.label;const f=document.createElement("div");return f.className="knob-value",f.textContent=`${this.value}${this.config.unit}`,t.appendChild(e),t.appendChild(f),t.appendChild(d),t}describeArc(t,e,n,i,s){const a=this.polarToCartesian(t,e,n,s),o=this.polarToCartesian(t,e,n,i),l=s-i<=180?"0":"1";return`M ${a.x} ${a.y} A ${n} ${n} 0 ${l} 0 ${o.x} ${o.y}`}polarToCartesian(t,e,n,i){const s=(i-90)*Math.PI/180;return{x:t+n*Math.cos(s),y:e+n*Math.sin(s)}}getAngle(){return 210+(this.value-this.config.min)/(this.config.max-this.config.min)*300}updateVisuals(){const t=this.getAngle();this.indicator.setAttribute("transform",`rotate(${t} 50 50)`);const e=this.svg.querySelector(".knob-arc-value");e&&e.setAttribute("d",this.describeArc(50,50,45,210,t));const n=this.container.querySelector(".knob-value");if(n){const i=this.config.unit==="Hz"&&this.value>=1e3?`${(this.value/1e3).toFixed(1)}k${this.config.unit}`:`${Math.round(this.value)}${this.config.unit}`;n.textContent=i}}attachEventListeners(){const t=this.svg;t.addEventListener("dblclick",s=>{s.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value)}),t.addEventListener("mousedown",s=>{if(s.button===1){s.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value);return}});const e=s=>{s.button===0&&(s.preventDefault(),this.isDragging=!0,this.startX=s.clientX,this.startY=s.clientY,this.startValue=this.value,document.body.style.cursor="grabbing")},n=s=>{if(!this.isDragging)return;const a=s.clientX-this.startX,l=this.startY-s.clientY+a,c=this.config.max-this.config.min,u=.45*(s.shiftKey?.25:1),d=l*u*c/220;let f=this.startValue+d;f=Math.max(this.config.min,Math.min(this.config.max,f)),f=Math.round(f/this.config.step)*this.config.step,f!==this.value&&(this.value=f,this.updateVisuals(),this.onChange(this.value))},i=()=>{this.isDragging=!1,document.body.style.cursor=""};t.addEventListener("mousedown",e),document.addEventListener("mousemove",n),document.addEventListener("mouseup",i),t.addEventListener("touchstart",s=>{s.preventDefault(),this.isDragging=!0,this.startX=s.touches[0].clientX,this.startY=s.touches[0].clientY,this.startValue=this.value}),document.addEventListener("touchmove",s=>{if(!this.isDragging)return;const a=s.touches[0].clientX-this.startX,l=this.startY-s.touches[0].clientY+a,c=this.config.max-this.config.min,h=l*.45*c/220;let u=this.startValue+h;u=Math.max(this.config.min,Math.min(this.config.max,u)),u=Math.round(u/this.config.step)*this.config.step,u!==this.value&&(this.value=u,this.updateVisuals(),this.onChange(this.value))}),document.addEventListener("touchend",()=>{this.isDragging=!1})}getValue(){return this.value}setValue(t){this.value=Math.max(this.config.min,Math.min(this.config.max,t)),this.value=Math.round(this.value/this.config.step)*this.config.step,this.updateVisuals()}setMax(t){this.config.max=t,this.value>t&&(this.value=t,this.onChange(this.value)),this.updateVisuals()}getElement(){return this.container}}class Io{constructor(t,e){b(this,"element");b(this,"onClick");this.onClick=e,this.element=this.createButton(t)}createButton(t){const e=document.createElement("button");return e.className="vst-button",e.textContent=t,e.addEventListener("click",()=>{this.onClick()}),e}setText(t){this.element.textContent=t}setActive(t){t?this.element.classList.add("active"):this.element.classList.remove("active")}setDisabled(t){this.element.disabled=t}getElement(){return this.element}}class Un{static quantize(t,e){const n=Math.pow(2,e);let i=Math.floor((t+1)*.5*n);return i=Math.max(0,Math.min(n-1,i)),i/(n-1)*2-1}static getSamples(t,e,n=.1){const i=Math.floor(e*n),s=new Float32Array(i),a=new Float32Array(i);for(let o=0;o<i;o++){const l=o/e;s[o]=Math.sin(2*Math.PI*t*l),a[o]=l}return{samples:s,sampleTimes:a,duration:n}}static getAliasedFrequency(t,e){const n=e/2;if(t<=n)return t;const i=Math.floor((t+n)/e);return Math.abs(t-i*e)}static getAliasingInfo(t,e){const n=e/2,i=t>n,s=this.getAliasedFrequency(t,e);return{nyquistFreq:n,isAliasing:i,aliasedFreq:s}}static generateAudioForPlayback(t,e,n,i=32){const a=Math.floor(44100*n),o=new Float32Array(a),l=Math.round(t/e),c=t-l*e,h=Math.abs(c);if(h===0)return o;const u=c===0?1:Math.sign(c);for(let d=0;d<a;d++){const f=d/44100,g=u*Math.sin(2*Math.PI*h*f);o[d]=this.quantize(g,i)}return o}static convolve(t,e){const n=t.length+e.length-1,i=new Float32Array(n);for(let s=0;s<n;s++){let a=0;for(let o=0;o<e.length;o++){const l=s-o;l>=0&&l<t.length&&(a+=t[l]*e[o])}i[s]=a}return i}static normalizePeak(t,e=.95){let n=0;for(let a=0;a<t.length;a++)n=Math.max(n,Math.abs(t[a]));if(n<1e-8)return t;const i=e/n,s=new Float32Array(t.length);for(let a=0;a<t.length;a++)s[a]=t[a]*i;return s}}class Vi{constructor(t){b(this,"canvas");b(this,"ctx");b(this,"container");b(this,"options");b(this,"dpr",1);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.1)",...t},this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas()}createContainer(){const t=document.createElement("div");t.className="wave-display";const e=document.createElement("canvas");return e.className="wave-canvas",t.appendChild(e),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.canvas.style.width=this.options.width+"px",this.canvas.style.height=this.options.height+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas()}clear(){this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t,height:e}=this.options,n=e/2;this.ctx.font="700 16px 'Segoe UI', sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.textAlign="center",this.ctx.fillText(this.options.label,460,15),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath();const i=8;for(let s=1;s<i;s++){const a=t/i*s;this.ctx.moveTo(a,0),this.ctx.lineTo(a,e)}this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255,255,255,0.05)",this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(t,e),this.ctx.stroke()}drawWave(t,e,n=.8,i,s=2,a,o=0){const{width:l,height:c}=this.options,h=c/2,d=c-2*20;this.ctx.shadowBlur=8,this.ctx.shadowColor=i,this.ctx.strokeStyle=i,this.ctx.lineWidth=s,this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.lineJoin="round";const f=l,g=.008;for(let _=0;_<=f;_++){const p=_/f*l,m=p/l*g,M=e-g+m,S=2*Math.PI*t*M+o;let E=Math.sin(S);a!==void 0&&(E=Un.quantize(E,a));const D=h-E*n*d/2;_===0?this.ctx.moveTo(p,D):this.ctx.lineTo(p,D)}this.ctx.stroke(),this.ctx.shadowBlur=0}drawSincReconstruction(t,e,n,i,s=.8,a,o=2){if(t.length===0)return;const{width:l,height:c}=this.options,h=c/2,d=c-2*20,f=g=>{if(Math.abs(g)<1e-10)return 1;const _=Math.PI*g;return Math.sin(_)/_};this.ctx.save(),this.ctx.shadowBlur=8,this.ctx.shadowColor=a,this.ctx.strokeStyle=a,this.ctx.lineWidth=o,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath();for(let g=0;g<=l;g++){const _=n+g/l*i;let p=0;for(const M of t){const S=(_-M.time)*e;p+=M.value*f(S)}p=Math.max(-1.15,Math.min(1.15,p));const m=h-p*s*d/2;g===0?this.ctx.moveTo(0,m):this.ctx.lineTo(g,m)}this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawQuantizationStaircase(t,e){if(t.length<2)return;this.ctx.save(),this.ctx.strokeStyle=e,this.ctx.lineWidth=2,this.ctx.shadowBlur=8,this.ctx.shadowColor=e,this.ctx.globalAlpha=.75,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let i=0;i<t.length-1;i++){const s=t[i],a=t[i+1];this.ctx.lineTo(a.x,s.y),this.ctx.lineTo(a.x,a.y)}const n=t[t.length-1];this.ctx.lineTo(this.options.width,n.y),this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawSamplePoints(t,e,n=!0){if(t.length===0)return;const i=this.options.height/2;n&&(this.ctx.strokeStyle=e,this.ctx.lineWidth=1.5,this.ctx.globalAlpha=.6,this.ctx.beginPath(),t.forEach((s,a)=>{a===0?this.ctx.moveTo(s.x,s.y):this.ctx.lineTo(s.x,s.y)}),this.ctx.stroke(),this.ctx.globalAlpha=1),t.forEach(s=>{this.ctx.strokeStyle=e,this.ctx.globalAlpha=.2,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(s.x,i),this.ctx.lineTo(s.x,s.y),this.ctx.stroke()}),t.forEach(s=>{this.ctx.globalAlpha=1,this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(s.x,s.y,3,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=0}getElement(){return this.container}}class No{constructor(t){b(this,"container");b(this,"items",new Map);this.container=this.createPanel(t)}createPanel(t){const e=document.createElement("div");return e.className="info-panel",t.forEach(n=>{const i=this.createItem(n);this.items.set(n.label,i),e.appendChild(i)}),e}createItem(t){const e=document.createElement("div");e.className="info-item";const n=document.createElement("div");n.className="info-item-label",n.textContent=t.label;const i=document.createElement("div");return i.className="info-item-value",t.warning&&i.classList.add("warning"),i.textContent=t.value,e.appendChild(n),e.appendChild(i),e}updateItem(t,e,n=!1){const i=this.items.get(t);if(i){const s=i.querySelector(".info-item-value");s&&(s.textContent=e,n?s.classList.add("warning"):s.classList.remove("warning"))}}getElement(){return this.container}}const In=class In{constructor(){b(this,"context",null);b(this,"workletReady",!1)}static getInstance(){return In.instance||(In.instance=new In),In.instance}async getContext(t){return this.context||(this.context=new AudioContext(t?{sampleRate:t}:void 0)),this.context.state==="suspended"&&this.context.resume().catch(()=>{}),await this.ensureWorklet(),this.context}async ensureWorklet(){if(!this.context||this.workletReady)return;await this.context.audioWorklet.addModule("/visualization/worklets/dsp-processor.js"),this.workletReady=!0}async createDspNode(t){const e=await this.getContext();return new AudioWorkletNode(e,"shared-dsp-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCountMode:"explicit",channelInterpretation:"speakers",...t})}async decodeAudioData(t){return await(await this.getContext()).decodeAudioData(t)}async createBuffer(t,e,n){return(await this.getContext()).createBuffer(t,e,n)}async createBufferSource(){return(await this.getContext()).createBufferSource()}async createGain(){return(await this.getContext()).createGain()}async createAnalyser(){return(await this.getContext()).createAnalyser()}async createConvolver(){return(await this.getContext()).createConvolver()}getCurrentTime(){var t;return((t=this.context)==null?void 0:t.currentTime)??0}getState(){var t;return((t=this.context)==null?void 0:t.state)??"closed"}};b(In,"instance",null);let Sn=In;function Mt(r,t=!0){const e=new URLSearchParams(window.location.search);if(!e.has(r))return t;const n=e.get(r).toLowerCase();return n!=="0"&&n!=="false"&&n!=="off"&&n!=="no"}function mi(r){return new URLSearchParams(window.location.search).get(r)}function Ni(r){const t="/visualization/",e=new URL(t,window.location.origin);return new URL(r.replace(/^\//,""),e).href}class yl{constructor(t){b(this,"ui",{frequencyKnob:Mt("frequencyKnob",!0),sampleRateKnob:Mt("sampleRateKnob",!0),bitDepthKnob:Mt("bitDepthKnob",!0),phaseKnob:Mt("phaseKnob",!0),playButton:Mt("playButton",!0),infoPanel:Mt("infoPanel",!0),originalDisplay:Mt("originalDisplay",!0),sampledDisplay:Mt("sampledDisplay",!0),quantizedDisplay:Mt("quantizedDisplay",!0),reconstructedDisplay:Mt("reconstructedDisplay",!0)});b(this,"frequency",1e3);b(this,"sampleRate",2e3);b(this,"bitDepth",16);b(this,"phaseDeg",0);b(this,"speed",.1);b(this,"audioEngine");b(this,"dspNode",null);b(this,"outputGain",null);b(this,"frequencyKnob");b(this,"sampleRateKnob");b(this,"bitDepthKnob");b(this,"phaseKnob");b(this,"playButton");b(this,"infoPanel");b(this,"originalDisplay");b(this,"sampledDisplay");b(this,"quantizedDisplay");b(this,"reconstructedDisplay");b(this,"container");b(this,"isPlaying",!1);b(this,"animationId",null);b(this,"time",0);b(this,"lastTimestamp",0);b(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.audioEngine=Sn.getInstance(),this.init()}init(){this.createUI(),window.addEventListener("resize",this.onResize),this.startAnimation()}getDisplayWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=document.createElement("div");t.className="displays-container";const i={width:this.getDisplayWidth(),height:220,backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)"};this.ui.originalDisplay&&(this.originalDisplay=new Vi({...i,label:"1. ORIGINAL ANALOG SIGNAL"}),t.appendChild(this.originalDisplay.getElement())),this.ui.sampledDisplay&&(this.sampledDisplay=new Vi({...i,label:"2. DISCRETE TIME (SAMPLING)"}),t.appendChild(this.sampledDisplay.getElement())),this.ui.quantizedDisplay&&(this.quantizedDisplay=new Vi({...i,label:"3. QUANTIZATION (AMPLITUDE)"}),t.appendChild(this.quantizedDisplay.getElement())),this.ui.reconstructedDisplay&&(this.reconstructedDisplay=new Vi({...i,label:"4. RECONSTRUCTED SIGNAL (SINC INTERPOLATION)"}),t.appendChild(this.reconstructedDisplay.getElement()));const s=document.createElement("div");s.className="controls-container",this.ui.infoPanel&&(this.infoPanel=new No([{label:"NYQUIST",value:"1000 Hz"},{label:"ALIAS",value:"—"}]));const a=document.createElement("div");a.className="knobs-wrapper";const o={min:10,max:1e4,value:this.frequency,step:100,label:"INPUT FREQ",unit:"Hz"},l={min:500,max:2e4,value:this.sampleRate,step:100,label:"SAMPLE RATE",unit:"Hz"},c={min:1,max:16,value:this.bitDepth,step:1,label:"BIT DEPTH",unit:"bits"},h={min:0,max:360,value:this.phaseDeg,step:1,label:"PHASE",unit:"°"};this.ui.frequencyKnob&&(this.frequencyKnob=new oi(o,u=>{this.frequency=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),a.appendChild(this.frequencyKnob.getElement())),this.ui.sampleRateKnob&&(this.sampleRateKnob=new oi(l,u=>{this.sampleRate=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),a.appendChild(this.sampleRateKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new oi(c,u=>{this.bitDepth=u,this.updateAudio()}),a.appendChild(this.bitDepthKnob.getElement())),this.ui.phaseKnob&&(this.phaseKnob=new oi(h,u=>{this.phaseDeg=u,this.updateAudio()}),a.appendChild(this.phaseKnob.getElement())),this.ui.playButton&&(this.playButton=new Io("Play Audio",()=>this.toggleAudio())),this.infoPanel&&s.appendChild(this.infoPanel.getElement()),a.childElementCount>0&&s.appendChild(a),this.playButton&&s.appendChild(this.playButton.getElement()),this.container.appendChild(t),this.container.appendChild(s),this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){var n,i,s,a;const t=this.getDisplayWidth(),e=220;(n=this.originalDisplay)==null||n.resize(t,e),(i=this.sampledDisplay)==null||i.resize(t,e),(s=this.quantizedDisplay)==null||s.resize(t,e),(a=this.reconstructedDisplay)==null||a.resize(t,e)}startAnimation(){const t=e=>{this.lastTimestamp===0&&(this.lastTimestamp=e);const n=(e-this.lastTimestamp)/1e3;this.lastTimestamp=e,this.speed>0&&(this.time+=n*this.speed*.005),this.updateAnimation(),this.animationId=requestAnimationFrame(t)};this.animationId=requestAnimationFrame(t)}updateAnimation(){this.renderDisplays()}renderDisplays(){this.renderOriginalSignal(),this.renderSampledSignal(),this.renderQuantizedSignal(),this.renderReconstructedSignal()}renderOriginalSignal(){this.originalDisplay&&(this.originalDisplay.clear(),this.originalDisplay.drawGrid(),this.originalDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"#52cffe",2))}get phaseRad(){return this.phaseDeg*Math.PI/180}phaseTimeOffset(t){return t<=0?0:this.phaseRad/(2*Math.PI*t)}renderSampledSignal(){if(!this.sampledDisplay)return;this.sampledDisplay.clear(),this.sampledDisplay.drawGrid(),this.sampledDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(82, 208, 254, 0.2)",1);const t=this.canvasSamplePoints(this.frequency);this.sampledDisplay.drawSamplePoints(t,"#ff4d6d",!1)}renderQuantizedSignal(){if(!this.quantizedDisplay)return;this.quantizedDisplay.clear(),this.quantizedDisplay.drawGrid(),this.quantizedDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(74, 222, 128, 0.15)",1);const t=this.quantizedDisplay.getElement().querySelector("canvas"),e=(t==null?void 0:t.getContext("2d"))??null,n=(t==null?void 0:t.offsetWidth)??this.getDisplayWidth(),i=(t==null?void 0:t.offsetHeight)??220,s=i/2,o=i-2*20;if(e){const c=Math.min(2**this.bitDepth,64);e.save(),e.strokeStyle="rgba(74, 222, 128, 0.15)",e.lineWidth=1;for(let h=0;h<=c;h++){const u=-1+2*h/c,d=Un.quantize(u,this.bitDepth),f=s-d*.8*o/2;e.beginPath(),e.moveTo(0,f),e.lineTo(n,f),e.stroke()}e.restore()}const l=this.canvasSamplePoints(this.frequency,this.bitDepth);if(e&&l.length>0){e.save(),e.strokeStyle="#4ade80",e.lineWidth=1.5,e.globalAlpha=.8;for(const c of l)e.beginPath(),e.moveTo(c.x,s),e.lineTo(c.x,c.y),e.stroke();e.restore()}this.quantizedDisplay.drawSamplePoints(l,"#4ade80",!1)}renderReconstructedSignal(){if(!this.reconstructedDisplay)return;this.reconstructedDisplay.clear(),this.reconstructedDisplay.drawGrid();const t=.008,e=this.time-t,n=this.rawSamples(this.frequency,this.bitDepth,30);this.reconstructedDisplay.drawSincReconstruction(n,this.sampleRate,e,t,.8,"#ffd700",2);const i=this.canvasSamplePoints(this.frequency,this.bitDepth);this.reconstructedDisplay.drawSamplePoints(i,"#ffd700",!1)}rawSamples(t,e,n=30){const s=this.time-.008,a=this.time,o=Math.ceil(s*this.sampleRate)-n,l=Math.floor(a*this.sampleRate)+n,c=[];for(let h=o;h<=l;h++){const u=h/this.sampleRate,d=2*Math.PI*t*u+this.phaseRad;let f=Math.sin(d);e!==void 0&&(f=Un.quantize(f,e)),c.push({time:u,value:f})}return c}canvasSamplePoints(t,e){const n=this.originalDisplay??this.sampledDisplay??this.reconstructedDisplay,i=(n==null?void 0:n.getElement().querySelector("canvas"))??null,s=(i==null?void 0:i.offsetWidth)??this.getDisplayWidth(),a=(i==null?void 0:i.offsetHeight)??220,o=a/2,c=a-2*20,h=.008,u=this.time-h,d=this.time,f=Math.ceil(u*this.sampleRate),g=[];let _=f;for(;;){const p=_/this.sampleRate;if(p>d)break;const M=(p-u)/h*s,S=2*Math.PI*t*p+this.phaseRad;let E=Math.sin(S);e!==void 0&&(E=Un.quantize(E,e));const D=o-E*.8*c/2;g.push({x:M,y:D}),_++}return g}updateInfoPanel(){if(!this.infoPanel)return;const t=Un.getAliasingInfo(this.frequency,this.sampleRate),e=t.nyquistFreq>=1e3?`${(t.nyquistFreq/1e3).toFixed(1)}kHz`:`${t.nyquistFreq.toFixed(0)}Hz`;if(this.infoPanel.updateItem("NYQUIST",e),t.isAliasing){const n=t.aliasedFreq>=1e3?`${(t.aliasedFreq/1e3).toFixed(1)}kHz`:`${t.aliasedFreq.toFixed(0)}Hz`;this.infoPanel.updateItem("ALIAS",n,!0)}else this.infoPanel.updateItem("ALIAS","CLEAN",!1)}toggleAudio(){this.isPlaying?this.stopAudio():this.playAudio()}async playAudio(){var t,e;await this.ensureAudioGraph(),this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:"tone"}),this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad}),this.isPlaying=!0,(t=this.playButton)==null||t.setText("STOP AUDIO"),(e=this.playButton)==null||e.setActive(!0))}updateAudio(){this.isPlaying&&this.dspNode&&this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad})}stopAudio(){var t,e;this.dspNode&&this.dspNode.port.postMessage({type:"setMode",mode:"passthrough"}),this.isPlaying=!1,(t=this.playButton)==null||t.setText("Play Audio"),(e=this.playButton)==null||e.setActive(!1)}async ensureAudioGraph(){if(this.dspNode&&this.outputGain)return;const t=await this.audioEngine.getContext();this.dspNode=await this.audioEngine.createDspNode({numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.outputGain=await this.audioEngine.createGain(),this.outputGain.gain.value=.9,this.dspNode.connect(this.outputGain),this.outputGain.connect(t.destination)}destroy(){var t,e;this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onResize),this.stopAudio(),(t=this.dspNode)==null||t.disconnect(),(e=this.outputGain)==null||e.disconnect(),this.dspNode=null,this.outputGain=null}}class We{constructor(t){b(this,"overlayCanvas");b(this,"ctx");b(this,"glCanvas");b(this,"gl",null);b(this,"container");b(this,"options");b(this,"glProgram",null);b(this,"glPosBuffer",null);b(this,"glResolutionLoc",null);b(this,"glColorLoc",null);b(this,"glPosAttribLoc",-1);b(this,"dpr",1);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)",minFreq:-24e3,maxFreq:24e3,minDb:-120,maxDb:20,...t},this.container=this.createContainer(),this.glCanvas=this.container.querySelector(".spectrum-webgl"),this.overlayCanvas=this.container.querySelector(".spectrum-canvas"),this.ctx=this.overlayCanvas.getContext("2d",{alpha:!0}),this.gl=this.glCanvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0}),this.setupCanvas(),this.initGL()}createContainer(){const t=document.createElement("div");t.className="spectrum-display";const e=document.createElement("canvas");e.className="spectrum-webgl";const n=document.createElement("canvas");return n.className="spectrum-canvas",t.appendChild(e),t.appendChild(n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.overlayCanvas.width=this.options.width*this.dpr,this.overlayCanvas.height=this.options.height*this.dpr,this.overlayCanvas.style.width=this.options.width+"px",this.overlayCanvas.style.height=this.options.height+"px",this.glCanvas.width=this.options.width*this.dpr,this.glCanvas.height=this.options.height*this.dpr,this.glCanvas.style.width=this.options.width+"px",this.glCanvas.style.height=this.options.height+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.gl&&this.gl.viewport(0,0,this.glCanvas.width,this.glCanvas.height)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas(),this.clear()}initGL(){if(!this.gl)return;const t=`
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
    `,n=this.createShader(this.gl.VERTEX_SHADER,t),i=this.createShader(this.gl.FRAGMENT_SHADER,e);if(!n||!i)return;const s=this.gl.createProgram();s&&(this.gl.attachShader(s,n),this.gl.attachShader(s,i),this.gl.linkProgram(s),this.gl.getProgramParameter(s,this.gl.LINK_STATUS)&&(this.glProgram=s,this.glPosBuffer=this.gl.createBuffer(),this.glPosAttribLoc=this.gl.getAttribLocation(s,"a_position"),this.glResolutionLoc=this.gl.getUniformLocation(s,"u_resolution"),this.glColorLoc=this.gl.getUniformLocation(s,"u_color"),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)))}createShader(t,e){if(!this.gl)return null;const n=this.gl.createShader(t);return!n||(this.gl.shaderSource(n,e),this.gl.compileShader(n),!this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS))?null:n}clear(){this.gl&&(this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t}=this.options;this.ctx.font="700 14px 'Segoe UI', sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)",this.ctx.textAlign="left",this.ctx.fillText(this.options.label,10,20),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath(),[-100,-80,-60,-40,-20,0].forEach(n=>{if(n>=this.options.minDb&&n<=this.options.maxDb){const i=this.dbToY(n);this.ctx.moveTo(0,i),this.ctx.lineTo(t,i)}}),this.ctx.stroke()}drawFreqAxis(t=5){const{width:e,height:n,minFreq:i,maxFreq:s}=this.options;if(s<=i)return;const a=n-4;this.ctx.strokeStyle="rgba(255, 255, 255, 0.2)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,a),this.ctx.lineTo(e,a),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.4)",this.ctx.font="10px 'JetBrains Mono', monospace",this.ctx.textAlign="center";for(let o=0;o<=t;o++){const l=i+o/t*(s-i),c=this.freqToX(l);this.ctx.beginPath(),this.ctx.moveTo(c,a-4),this.ctx.lineTo(c,a),this.ctx.stroke();const h=Math.abs(l)>=1e3?`${(l/1e3).toFixed(1)}k`:`${Math.round(l)}`;this.ctx.fillText(h,c,n-1)}}drawSamplingGrid(t){const e=t/2,{height:n}=this.options,i=(s,a,o,l)=>{const c=this.freqToX(s);c<0||c>this.options.width||(this.ctx.strokeStyle=a,this.ctx.lineWidth=1.5,l?this.ctx.setLineDash([4,4]):this.ctx.setLineDash([]),this.ctx.globalAlpha=.6,this.ctx.beginPath(),this.ctx.moveTo(c,0),this.ctx.lineTo(c,n),this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=a,this.ctx.font="10px 'Segoe UI', sans-serif",this.ctx.textAlign="center",this.ctx.fillText(o,c,n-10))};i(0,"rgba(255,255,255,0.6)","DC (0 Hz)",!1),i(e,"#00ff00",`+Fn (${(e/1e3).toFixed(1)}k)`,!0),i(-e,"#00ff00","-Fn",!0),i(t,"rgba(255,255,255,0.3)","+Fs",!0),i(-t,"rgba(255,255,255,0.3)","-Fs",!0),i(t*2,"rgba(255,255,255,0.3)","+2Fs",!0),i(-t*2,"rgba(255,255,255,0.3)","-2Fs",!0)}drawLowPassOverlay(t,e=!1){const{width:n,height:i,maxFreq:s,minDb:a,maxDb:o}=this.options,l=Math.max(0,t),c=e?"#ff7b5c":"#ff9a4d",h=e?"rgba(255, 123, 92, 0.10)":"rgba(255, 154, 77, 0.07)",u=256,d=new Float32Array(u*2);for(let g=0;g<u;g++){const _=g/(u-1)*n,p=g/(u-1)*s,m=l>1?p/l:1e6,M=1/Math.sqrt(1+Math.pow(m,4)),S=Math.max(a,Math.min(o,20*Math.log10(M+1e-8))),E=this.dbToY(S);d[g*2]=_+n/2,d[g*2+1]=E}this.ctx.save(),this.ctx.fillStyle=h,this.ctx.beginPath(),this.ctx.rect(0,0,n,i),this.ctx.fill(),this.ctx.restore(),this.drawLineGPU(d,c,e?.95:.8);const f=new Float32Array(u*2);for(let g=0;g<u;g++)f[g*2]=n-d[g*2],f[g*2+1]=d[g*2+1];this.drawLineGPU(f,c,e?.95:.8),this.ctx.strokeStyle=c,this.ctx.lineWidth=e?1.8:1.2,this.ctx.globalAlpha=e?.85:.65,this.ctx.beginPath();for(let g=0;g<u;g++){const _=d[g*2],p=d[g*2+1];g===0?this.ctx.moveTo(_,p):this.ctx.lineTo(_,p)}this.ctx.stroke(),this.ctx.beginPath();for(let g=0;g<u;g++){const _=f[g*2],p=f[g*2+1];g===0?this.ctx.moveTo(_,p):this.ctx.lineTo(_,p)}this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=c,this.ctx.font="700 10px 'Segoe UI', sans-serif",this.ctx.textAlign="left",this.ctx.fillText(`LPF ${Math.round(l)} Hz`,Math.min(n-90,n/2+8),14)}drawSpectrum(t,e,n,i=2,s=1,a=!1){if(t.length===0||e.length===0)return;const o=new Float32Array(t.length*2);for(let l=0;l<t.length;l++){const c=t[l];let h=e[l];h<this.options.minDb&&(h=this.options.minDb),o[l*2]=this.freqToX(c),o[l*2+1]=this.dbToY(h)}this.drawLineGPU(o,n,s),a&&this.drawAreaGPU(o,n,Math.min(.35,s*.35))}drawLineGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const i=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,i[0],i[1],i[2],i[3]),this.gl.drawArrays(this.gl.LINE_STRIP,0,t.length/2)}drawAreaGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const i=this.dbToY(this.options.minDb),s=new Float32Array(t.length*2);for(let o=0;o<t.length/2;o++)s[o*4]=t[o*2],s[o*4+1]=i,s[o*4+2]=t[o*2],s[o*4+3]=t[o*2+1];const a=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,s,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,a[0],a[1],a[2],a[3]),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,s.length/2)}parseColor(t,e){if(t.startsWith("#")){const i=t.slice(1),s=i.length===3?i.split("").map(o=>o+o).join(""):i,a=parseInt(s,16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255,e]}const n=t.match(/rgba?\(([^)]+)\)/);if(n){const i=n[1].split(",").map(c=>c.trim()),s=Number(i[0])/255,a=Number(i[1])/255,o=Number(i[2])/255,l=i[3]!==void 0?Number(i[3])*e:e;return[s,a,o,l]}return[.32,.81,1,e]}freqToX(t){const e=this.options.maxFreq-this.options.minFreq;return(t-this.options.minFreq)/e*this.options.width}dbToY(t){const e=this.options.maxDb-this.options.minDb;return(this.options.maxDb-t)/e*this.options.height}getElement(){return this.container}}class Mr{constructor(t,e){b(this,"container");b(this,"input");b(this,"valueDisplay");b(this,"onChange");b(this,"config");this.config=t,this.onChange=e,this.container=this.createContainer(),this.input=this.container.querySelector("input"),this.valueDisplay=this.container.querySelector(".slider-value"),this.setupEventListeners(),this.updateDisplay()}createContainer(){const t=document.createElement("div");return t.className="slider-container",t.innerHTML=`
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
    `,t}setupEventListeners(){this.input.addEventListener("input",()=>{const t=parseFloat(this.input.value);this.updateDisplay(),this.onChange(t)})}updateDisplay(){const t=parseFloat(this.input.value);let e;this.config.unit==="%"?e=t.toFixed(1):t>=1e3?e=`${(t/1e3).toFixed(1)}k`:e=t.toString(),this.valueDisplay.textContent=`${e} ${this.config.unit}`}getValue(){return parseFloat(this.input.value)}setValue(t){this.input.value=t.toString(),this.updateDisplay()}getElement(){return this.container}}class gi{constructor(t,e){b(this,"container");b(this,"canvas");b(this,"ctx");b(this,"options");b(this,"onSeek");b(this,"waveformData",null);b(this,"sourceData",null);b(this,"duration",0);b(this,"playheadTime",0);b(this,"isDragging",!1);b(this,"dpr",1);this.options=t,this.onSeek=e,this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas(),this.attachListeners(),this.draw()}createContainer(){const t=document.createElement("div");t.className="timeline-panel";const e=document.createElement("div");e.className="timeline-title",e.textContent=this.options.title??"AUDIO TIMELINE";const n=document.createElement("canvas");return n.className="timeline-canvas",t.append(e,n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.canvas.style.width=`${this.options.width}px`,this.canvas.style.height=`${this.options.height}px`,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}attachListeners(){const t=n=>{if(this.duration<=0)return;const i=this.canvas.getBoundingClientRect(),s=Math.max(0,Math.min(i.width,n-i.left)),o=(i.width>0?s/i.width:0)*this.duration;this.setPlayhead(o),this.onSeek(o)};this.canvas.addEventListener("pointerdown",n=>{this.isDragging=!0,this.canvas.setPointerCapture(n.pointerId),t(n.clientX)}),this.canvas.addEventListener("pointermove",n=>{this.isDragging&&t(n.clientX)});const e=()=>{this.isDragging=!1};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e)}setWaveformFromBuffer(t){this.sourceData=new Float32Array(t.getChannelData(0)),this.rebuildWaveformPeaks(),this.duration=t.duration,this.playheadTime=0,this.draw()}setWaveformFromArray(t,e){this.sourceData=new Float32Array(t),this.rebuildWaveformPeaks(),this.duration=e>0?t.length/e:0,this.playheadTime=0,this.draw()}rebuildWaveformPeaks(){if(!this.sourceData){this.waveformData=null;return}const t=this.sourceData,e=Math.max(1,this.options.width),n=Math.max(1,Math.floor(t.length/e)),i=new Float32Array(e);for(let s=0;s<e;s++){const a=s*n,o=Math.min(a+n,t.length);let l=0;for(let c=a;c<o;c++){const h=Math.abs(t[c]);h>l&&(l=h)}i[s]=l}this.waveformData=i}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(60,Math.floor(e)),this.setupCanvas(),this.sourceData&&this.rebuildWaveformPeaks(),this.draw()}setPlayhead(t){this.playheadTime=Math.max(0,Math.min(this.duration,t)),this.draw()}draw(){const{width:t,height:e}=this.options,n=e/2;if(this.ctx.clearRect(0,0,t,e),this.ctx.fillStyle="rgba(11, 16, 24, 0.92)",this.ctx.fillRect(0,0,t,e),this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.waveformData){this.ctx.strokeStyle="rgba(82, 207, 254, 0.95)",this.ctx.lineWidth=1.1,this.ctx.beginPath();for(let i=0;i<this.waveformData.length;i++){const s=this.waveformData[i],a=n-s*(e*.44),o=n+s*(e*.44);this.ctx.moveTo(i,a),this.ctx.lineTo(i,o)}this.ctx.stroke()}if(this.duration>0){const i=this.playheadTime/this.duration*t;this.ctx.strokeStyle="#ff9a4d",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,e),this.ctx.stroke(),this.ctx.fillStyle="#ff9a4d",this.ctx.beginPath(),this.ctx.moveTo(i-6,0),this.ctx.lineTo(i+6,0),this.ctx.lineTo(i,8),this.ctx.closePath(),this.ctx.fill()}}getElement(){return this.container}}class Ui{constructor(t){b(this,"root");b(this,"playPauseBtn");b(this,"stopBtn");b(this,"fileInput",null);b(this,"isPlaying",!1);this.opts=t,this.root=document.createElement("div"),this.root.className="transport-bar";const e=document.createElement("div");if(e.className="transport-left",this.playPauseBtn=this.makeIconBtn(this.svgPlay(),"Play","transport-play"),this.playPauseBtn.addEventListener("click",()=>this.handlePlayPause()),this.stopBtn=this.makeIconBtn(this.svgStop(),"Stop","transport-stop"),this.stopBtn.addEventListener("click",()=>this.opts.onStop()),e.appendChild(this.playPauseBtn),e.appendChild(this.stopBtn),t.extraLeft&&e.appendChild(t.extraLeft),this.root.appendChild(e),t.showUpload!==!1&&t.onUpload){const n=document.createElement("div");n.className="transport-right";const i=document.createElement("label");i.className="transport-upload",i.title="Upload Audio",this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept=t.accept??"audio/*",this.fileInput.style.display="none",this.fileInput.addEventListener("change",o=>{var c;const l=(c=o.target.files)==null?void 0:c[0];l&&t.onUpload(l),this.fileInput.value=""});const s=document.createElement("span");s.innerHTML=this.svgUpload();const a=document.createElement("span");a.className="transport-upload-text",a.textContent=t.uploadLabel??"Upload Audio",i.appendChild(this.fileInput),i.appendChild(s),i.appendChild(a),n.appendChild(i),this.root.appendChild(n)}}setPlaying(t){this.isPlaying=t,this.playPauseBtn.innerHTML=t?this.svgPause():this.svgPlay(),this.playPauseBtn.title=t?"Pause":"Play",this.playPauseBtn.classList.toggle("active",t)}getElement(){return this.root}async handlePlayPause(){this.isPlaying?this.opts.onPause():await this.opts.onPlay()}makeIconBtn(t,e,n){const i=document.createElement("button");return i.className=`transport-btn ${n}`,i.title=e,i.innerHTML=t,i}svgPlay(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <polygon points="4,2 18,10 4,18"/>
    </svg>`}svgPause(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <rect x="3" y="2" width="5" height="16" rx="1"/>
      <rect x="12" y="2" width="5" height="16" rx="1"/>
    </svg>`}svgStop(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <rect x="3" y="3" width="14" height="14" rx="2"/>
    </svg>`}svgUpload(){return`<svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 13V5M6 9l4-4 4 4"/>
      <path d="M3 15h14"/>
    </svg>`}}const de=class de{constructor(t){b(this,"container");b(this,"sharedAudio",Sn.getInstance());b(this,"audioContext",null);b(this,"sourceNode",null);b(this,"dspNode",null);b(this,"outputLpFilters",[]);b(this,"gainNode",null);b(this,"isPlaying",!1);b(this,"isPaused",!1);b(this,"animationId",null);b(this,"onResize",()=>this.resizeDisplays());b(this,"rawAudioBuffer",null);b(this,"filteredBuffer",null);b(this,"targetSampleRate",32e3);b(this,"targetBitDepth",16);b(this,"lpfCutoff",22050);b(this,"startTime",0);b(this,"pausedAt",0);b(this,"isProcessing",!1);b(this,"pendingUpdate",!1);b(this,"lpfEditHighlightUntil",0);b(this,"originalSpectrum");b(this,"sampleRateSlider");b(this,"bitDepthKnob");b(this,"lpfKnob");b(this,"waveformTimeline");b(this,"transportBar");b(this,"infoPanel");b(this,"statusLabel");b(this,"playMode","original");b(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),modeSelector:Mt("modeSelector",!0),waveform:Mt("waveform",!0),spectrum:Mt("spectrum",!0),lpfKnob:Mt("lpfKnob",!0),bitDepthKnob:Mt("bitDepthKnob",!0),sampleRateSlider:Mt("sampleRateSlider",!0),infoPanel:Mt("infoPanel",!0)});b(this,"_windowData",new Float32Array(de.VIS_WINDOW_SIZE));b(this,"_fftReal",new Float64Array(de.VIS_WINDOW_SIZE));b(this,"_fftImag",new Float64Array(de.VIS_WINDOW_SIZE));b(this,"_fftMag",new Float32Array(de.VIS_NUM_BINS));b(this,"_basebandDb",new Float32Array(de.VIS_NUM_BINS));b(this,"_graphFreqs",new Float32Array(de.VIS_NUM_POINTS));b(this,"_baseGraph",new Float32Array(de.VIS_NUM_POINTS));b(this,"_copiesGraph",new Float32Array(de.VIS_NUM_POINTS));b(this,"_aliasingGraph",new Float32Array(de.VIS_NUM_POINTS));const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),await this.loadDefaultAudio()}createUI(){if(this.ui.transport){if(this.transportBar=new Ui({onPlay:()=>this.playAudio(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:n=>this.handleFileUpload(n),uploadLabel:"Upload Audio",showUpload:this.ui.upload}),this.ui.modeSelector){const n=this.buildModeSelector();this.transportBar.getElement().querySelector(".transport-left").appendChild(n)}this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading default audio…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())}else this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading default audio…",this.statusLabel.style.display="block",this.statusLabel.style.marginBottom="8px",this.container.appendChild(this.statusLabel);const t=Math.max(620,this.container.clientWidth-2);if(this.ui.waveform&&(this.waveformTimeline=new gi({width:t,height:100,title:"WAVEFORM / PLAYHEAD"},n=>this.handlePlayheadSeek(n)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.spectrum){const n=document.createElement("div");n.className="spectrum-row",this.originalSpectrum=new We({width:t,height:280,label:"ORIGINAL — Baseband · Spectral Copies · Aliasing",minFreq:-48e3,maxFreq:48e3}),n.appendChild(this.originalSpectrum.getElement()),this.container.appendChild(n)}if(this.ui.lpfKnob||this.ui.bitDepthKnob||this.ui.sampleRateSlider||this.ui.infoPanel){const n=document.createElement("div");n.className="controls-container audio-controls",this.ui.infoPanel&&(this.infoPanel=new No([{label:"NYQUIST",value:"5.5 kHz"},{label:"LPF CUTOFF",value:"22.0 kHz"}]));const i=document.createElement("div");i.className="knobs-wrapper",this.ui.lpfKnob&&(this.lpfKnob=new oi({min:500,max:22050,value:this.lpfCutoff,step:100,label:"ANTI-ALIASING LPF",unit:"Hz"},o=>this.handleLPFChange(o)),i.appendChild(this.lpfKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new oi({min:1,max:16,value:16,step:1,label:"BIT DEPTH",unit:"bits"},o=>this.handleBitDepthChange(o)),i.appendChild(this.bitDepthKnob.getElement()));const s=document.createElement("div");s.className="middle-row-wrapper",i.childElementCount>0&&s.appendChild(i),this.ui.infoPanel&&this.infoPanel&&s.appendChild(this.infoPanel.getElement());const a=document.createElement("div");a.className="right-controls control-column",this.ui.sampleRateSlider&&(this.sampleRateSlider=new Mr({min:1e3,max:48e3,value:this.targetSampleRate,step:100,label:"TARGET SAMPLE RATE",unit:"Hz"},o=>this.handleSampleRateChange(o)),a.appendChild(this.sampleRateSlider.getElement())),s.childElementCount>0&&n.appendChild(s),a.childElementCount>0&&n.appendChild(a),this.container.appendChild(n)}this.resizeDisplays(),this.updateInfoPanel()}buildModeSelector(){const t=document.createElement("div");return t.className="transport-mode-group",[{mode:"original",label:"Original"},{mode:"aliased",label:"Processed"},{mode:"alias_only",label:"Diff"}].forEach(({mode:n,label:i})=>{const s=document.createElement("button");s.className="transport-mode-btn"+(n===this.playMode?" active":""),s.textContent=i,s.addEventListener("click",()=>{this.playMode=n,t.querySelectorAll(".transport-mode-btn").forEach(a=>a.classList.toggle("active",a===s)),this.isPlaying&&(this.stopAudio(!1),this.playAudio(n))}),t.appendChild(s)}),t}resizeDisplays(){const t=Math.max(620,this.container.clientWidth-2);this.ui.spectrum&&this.originalSpectrum&&this.originalSpectrum.resize(t,280),this.ui.waveform&&this.waveformTimeline&&this.waveformTimeline.resize(t,100)}async loadDefaultAudio(){const t=mi("audio");if(console.log("[audio-app] location.search =",window.location.search,"| audioParam =",t),t){await this.loadAudioFromUrl(t);return}await this.loadBuiltInSweep()}async loadAudioFromUrl(t){this.statusLabel.textContent="Loading audio…";try{this.audioContext||(this.audioContext=await this.sharedAudio.getContext());const e=Ni(t);console.log("[audio-app] fetching",e);const n=await fetch(e);if(!n.ok)throw new Error(`HTTP ${n.status}`);const i=await n.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(i),this.pausedAt=0,await this.processAudioUpdate();const s=t.split("/").pop()??t;this.statusLabel.textContent=s}catch(e){console.error("[audio-app] failed to load default audio:",e),this.statusLabel.textContent="Error loading audio URL",await this.loadBuiltInSweep()}}async loadBuiltInSweep(){this.audioContext=await this.sharedAudio.getContext(44100),this.rawAudioBuffer=this.audioContext.createBuffer(2,132300,44100);const s=this.rawAudioBuffer.getChannelData(0);for(let o=0;o<132300;o++){const l=o/44100,c=100*Math.pow(22e3/100,l/3);s[o]=Math.sin(2*Math.PI*c*l)*.5}const a=this.rawAudioBuffer.getChannelData(1);for(let o=0;o<132300;o++){const l=o/44100,c=22e3*Math.pow(100/22e3,l/3);a[o]=Math.sin(2*Math.PI*c*l)*.5}await this.processAudioUpdate(),this.statusLabel.textContent="Default: sine sweep"}async handleFileUpload(t){this.statusLabel.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const e=await t.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(e),this.pausedAt=0,await this.processAudioUpdate(),this.statusLabel.textContent=t.name}catch{this.statusLabel.textContent="Error loading audio"}}handlePlayheadSeek(t){this.filteredBuffer&&(this.pausedAt=t,this.isPlaying?this.restartPlayback():this.updateVisualization())}handleLPFChange(t){this.lpfCutoff=t,this.lpfEditHighlightUntil=performance.now()+900,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.triggerProcessing()}handleSampleRateChange(t){this.targetSampleRate=t,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.syncOutputLpCutoff(),this.triggerProcessing()}handleBitDepthChange(t){this.targetBitDepth=t,this.syncRealtimeDspParams(),this.triggerProcessing()}triggerProcessing(){if(this.isPlaying||this.updateVisualization(),this.isProcessing){this.pendingUpdate=!0;return}this.processAudioUpdate()}async processAudioUpdate(){this.isProcessing=!0,this.pendingUpdate=!1,this.rawAudioBuffer&&(this.filteredBuffer=await this.createFilteredBuffer(this.rawAudioBuffer,this.lpfCutoff),this.pausedAt=Math.min(this.pausedAt,this.filteredBuffer.duration),this.waveformTimeline&&(this.waveformTimeline.setWaveformFromBuffer(this.filteredBuffer),this.waveformTimeline.setPlayhead(this.pausedAt))),this.isProcessing=!1,this.pendingUpdate&&this.processAudioUpdate(),this.isPlaying||this.updateVisualization()}updateInfoPanel(){if(!this.infoPanel)return;const t=this.targetSampleRate/2;this.infoPanel.updateItem("NYQUIST",t>=1e3?`${(t/1e3).toFixed(1)} kHz`:`${t.toFixed(0)} Hz`),this.infoPanel.updateItem("LPF CUTOFF",this.lpfCutoff>=1e3?`${(this.lpfCutoff/1e3).toFixed(1)} kHz`:`${this.lpfCutoff.toFixed(0)} Hz`)}async createFilteredBuffer(t,e){const n=t.numberOfChannels,i=new OfflineAudioContext(n,t.length,t.sampleRate),s=i.createBufferSource();s.buffer=t;const a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=e,a.Q.value=.707;const o=i.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.707,s.connect(a),a.connect(o),o.connect(i.destination),s.start(),await i.startRendering()}async playAudio(t){var n;if(!this.filteredBuffer||!this.audioContext)return;this.isPlaying&&this.stopAudio(!1),this.playMode=t;let e;t==="original"?e=this.filteredBuffer:e=this.rawAudioBuffer??this.filteredBuffer,this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=e,this.gainNode=this.audioContext.createGain(),t==="aliased"||t==="alias_only"?(this.dspNode=await this.sharedAudio.createDspNode(),this.configureRealtimeDsp(t),this.sourceNode.connect(this.dspNode),this.connectOutputLowpass(this.dspNode).connect(this.gainNode)):this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{var i;this.isPlaying&&((i=this.sourceNode)!=null&&i.buffer)&&this.audioContext.currentTime-this.startTime>=this.sourceNode.buffer.duration-.1&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(n=this.transportBar)==null||n.setPlaying(!0),this.statusLabel.textContent=t==="original"?"Playing original":t==="aliased"?"Playing processed":"Playing diff",this.startRealtimeVisualization()}pauseAudio(){var t,e;!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel.textContent="Paused",this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,n;this._teardownNodes(),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel.textContent="Stopped",this.filteredBuffer&&((n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt))}_teardownNodes(){var t,e,n,i;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),(i=this.dspNode)==null||i.disconnect();for(const s of this.outputLpFilters)s.disconnect();this.outputLpFilters=[],this.sourceNode=null,this.gainNode=null,this.dspNode=null}connectOutputLowpass(t){if(!this.audioContext)return t;const e=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);let n=t;this.outputLpFilters=[];for(let i=0;i<2;i++){const s=this.audioContext.createBiquadFilter();s.type="lowpass",s.frequency.value=e,s.Q.value=.707,n.connect(s),n=s,this.outputLpFilters.push(s)}return n}syncOutputLpCutoff(){if(!this.audioContext)return;const t=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);for(const e of this.outputLpFilters)e.frequency.value=t}restartPlayback(){if(!this.isPlaying)return;const t=this.playMode;this.stopAudio(!1),this.playAudio(t)}configureRealtimeDsp(t){this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:t==="alias_only"?"alias-diff":"alias-processed"}),this.syncRealtimeDspParams())}syncRealtimeDspParams(){!this.dspNode||!this.audioContext||this.dspNode.port.postMessage({type:"setAliasingParams",lpfCutoff:this.lpfCutoff,targetSampleRate:this.targetSampleRate,bitDepth:this.targetBitDepth,sourceSampleRate:this.audioContext.sampleRate})}updateVisualization(){if(!this.filteredBuffer||!this.ui.spectrum||!this.originalSpectrum)return;const t=de.VIS_WINDOW_SIZE,e=de.VIS_NUM_BINS,n=de.VIS_NUM_POINTS,i=this.filteredBuffer.sampleRate,s=Math.floor(this.pausedAt*i),o=Math.pow(2,this.targetBitDepth)/2,l=this.filteredBuffer.numberOfChannels;this._windowData.fill(0);for(let f=0;f<l;f++){const g=this.filteredBuffer.getChannelData(f);for(let _=0;_<t;_++){const p=s+_;if(p<g.length){const m=.5*(1-Math.cos(2*Math.PI*_/(t-1)));let M=g[p]*m;M=Math.round(M*o)/o,this._windowData[_]+=M}}}if(l>1){const f=1/l;for(let g=0;g<t;g++)this._windowData[g]*=f}this.computeFFT(this._windowData,this._fftMag);for(let f=0;f<e;f++)this._basebandDb[f]=20*Math.log10(this._fftMag[f]+1e-10);const c=f=>{const g=Math.abs(f);if(g>i/2)return-120;const _=Math.round(g/(i/2)*(e-1));return _>=e?-120:this._basebandDb[_]},h=-48e3,u=48e3,d=this.targetSampleRate;for(let f=0;f<n;f++){const g=h+f/(n-1)*(u-h);this._graphFreqs[f]=g,this._baseGraph[f]=c(g);let _=-120;const p=Math.ceil((g-i/2)/d),m=Math.floor((g+i/2)/d);for(let M=p;M<=m;M++){if(M===0)continue;const S=c(g-M*d);S>_&&(_=S)}this._copiesGraph[f]=_,this._aliasingGraph[f]=g>=-d/2&&g<=d/2?_:-120}this.originalSpectrum.clear(),this.originalSpectrum.drawGrid(),this.originalSpectrum.drawLowPassOverlay(this.lpfCutoff,performance.now()<this.lpfEditHighlightUntil),this.originalSpectrum.drawSamplingGrid(d),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._copiesGraph,"rgba(255,255,255,0.3)",1.5),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._aliasingGraph,"rgba(255,77,109,0.8)",2,1,!0),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._baseGraph,"#52cffe",2.5)}computeFFT(t,e){const n=t.length,i=this._fftReal,s=this._fftImag;for(let l=0;l<n;l++)i[l]=t[l],s[l]=0;let a=0;for(let l=0;l<n-1;l++){if(l<a){let h=i[l];i[l]=i[a],i[a]=h,h=s[l],s[l]=s[a],s[a]=h}let c=n>>1;for(;c<=a;)a-=c,c>>=1;a+=c}for(let l=1;l<n;l<<=1){const c=l<<1,h=Math.PI/l;for(let u=0;u<l;u++){const d=-u*h,f=Math.cos(d),g=Math.sin(d);for(let _=u;_<n;_+=c){const p=_+l,m=f*i[p]-g*s[p],M=f*s[p]+g*i[p];i[p]=i[_]-m,s[p]=s[_]-M,i[_]+=m,s[_]+=M}}}const o=n/2;for(let l=0;l<o;l++)e[l]=Math.sqrt(i[l]*i[l]+s[l]*s[l])/n}startRealtimeVisualization(){const t=()=>{var n;if(!this.isPlaying||!this.audioContext)return;const e=this.audioContext.currentTime-this.startTime;this.filteredBuffer&&(this.pausedAt=Math.min(e,this.filteredBuffer.duration),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)),this.updateVisualization(),this.animationId=requestAnimationFrame(t)};t()}destroy(){this.stopAudio(!0),window.removeEventListener("resize",this.onResize),this.audioContext=null}};b(de,"VIS_WINDOW_SIZE",512),b(de,"VIS_NUM_POINTS",800),b(de,"VIS_NUM_BINS",de.VIS_WINDOW_SIZE/2);let yr=de;function Es(r){const t=r.length,e=new Float32Array(t),n=new Float32Array(t);for(let s=0;s<t;s++)e[s]=r[s];let i=0;for(let s=1;s<t;s++){let a=t>>1;for(;i&a;a>>=1)i^=a;i^=a,s<i&&([e[s],e[i]]=[e[i],e[s]],[n[s],n[i]]=[n[i],n[s]])}for(let s=2;s<=t;s<<=1){const a=-2*Math.PI/s,o=Math.cos(a),l=Math.sin(a);for(let c=0;c<t;c+=s){let h=1,u=0;for(let d=0;d<s/2;d++){const f=e[c+d],g=n[c+d],_=e[c+d+s/2]*h-n[c+d+s/2]*u,p=e[c+d+s/2]*u+n[c+d+s/2]*h;e[c+d]=f+_,n[c+d]=g+p,e[c+d+s/2]=f-_,n[c+d+s/2]=g-p;const m=h*o-u*l;u=h*l+u*o,h=m}}}return{re:e,im:n}}function Uo(r){let t=1;for(;t<r;)t<<=1;return t}function El(r,t=-80){const e=Uo(r.length),n=new Float32Array(e);n.set(r.subarray(0,Math.min(r.length,e)));const{re:i,im:s}=Es(n),a=e/2,o=new Float32Array(a);for(let l=0;l<a;l++){const c=Math.sqrt(i[l]*i[l]+s[l]*s[l])/e;o[l]=Math.max(t,20*Math.log10(c+1e-10))}return o}function Gs(r,t,e,n){const i=e/2,s=r/2,a=n/2,o=new Float32Array(n);for(let d=0;d<a;d++){const f=d/a*s,g=Math.exp(-.5*Math.pow((f-t)/i,2));o[d]=g,d>0&&d<a&&(o[n-d]=g)}const{re:l}=Es(o),c=new Float32Array(n);for(let d=0;d<n;d++)c[d]=l[d]/n;const h=new Float32Array(n),u=n/2;for(let d=0;d<n;d++)h[d]=c[(d+u)%n];for(let d=0;d<n;d++)h[d]*=.5*(1-Math.cos(2*Math.PI*d/(n-1)));return h}const Nn=class Nn{constructor(t){b(this,"container");b(this,"animId",null);b(this,"animTime",0);b(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),waveform:Mt("waveform",!0),ir:Mt("ir",!0),liveSpectrum:Mt("liveSpectrum",!0),staticSpectrum:Mt("staticSpectrum",!0),filterControls:Mt("filterControls",!0)});b(this,"fCenter",1e3);b(this,"bandwidth",40);b(this,"nFft",4096);b(this,"sourceBuffer",null);b(this,"sourceSamples",null);b(this,"sourceSampleRate",44100);b(this,"sourceFullFftDb",null);b(this,"processedFullFftDb",null);b(this,"processedFftDirty",!0);b(this,"sharedAudio",Sn.getInstance());b(this,"audioCtx",null);b(this,"isPlaying",!1);b(this,"isPaused",!1);b(this,"pausedAt",0);b(this,"playbackStartedAt",0);b(this,"sourceNode",null);b(this,"convolver",null);b(this,"outputGain",null);b(this,"sourceAnalyser",null);b(this,"outputAnalyser",null);b(this,"convolverRebuildTimer",null);b(this,"transportBar");b(this,"statusLabel");b(this,"waveformTimeline");b(this,"sourceSpectrum");b(this,"processedSpectrum");b(this,"sourceStaticSpectrum");b(this,"processedStaticSpectrum");b(this,"irCanvas");b(this,"sourceFileLabel");b(this,"fCenterSlider");b(this,"bandwidthSlider");b(this,"liveSpecFreqs",new Float32Array(Nn.SPEC_POINTS));b(this,"liveSpecDb",new Float32Array(Nn.SPEC_POINTS));b(this,"analyserScratch",null);b(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),window.addEventListener("resize",this.onResize),this.startAnimation(),this.resizeLayout(),this.loadDefaultAudioClip()}async loadDefaultAudioClip(){var e,n;const t=mi("audio");if(t){this.statusLabel&&(this.statusLabel.textContent="Loading…");try{await this.initAudio();const s=await(await fetch(Ni(t))).arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(s),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate;const a=t.split("/").pop()??t;this.sourceFileLabel&&(this.sourceFileLabel.textContent=a),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${a} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()}catch{this.statusLabel&&(this.statusLabel.textContent="✗ Error loading audio")}}}async initAudio(){this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.audioCtx.state==="suspended"&&await this.audioCtx.resume(),this.sourceAnalyser||(this.sourceAnalyser=this.audioCtx.createAnalyser(),this.sourceAnalyser.fftSize=2048,this.sourceAnalyser.smoothingTimeConstant=.7,this.analyserScratch=new Uint8Array(this.sourceAnalyser.frequencyBinCount)),this.outputAnalyser||(this.outputAnalyser=this.audioCtx.createAnalyser(),this.outputAnalyser.fftSize=2048,this.outputAnalyser.smoothingTimeConstant=.55,this.outputGain||(this.outputGain=this.audioCtx.createGain(),this.outputGain.gain.value=.8),this.outputAnalyser.connect(this.outputGain),this.outputGain.connect(this.audioCtx.destination))}buildFilterIR(){if(!this.audioCtx)return null;const t=this.audioCtx.sampleRate,e=Gs(t,this.fCenter,this.bandwidth,this.nFft),n=this.audioCtx.createBuffer(1,e.length,t);return n.getChannelData(0).set(e),n}rebuildConvolver(){var e;if(!this.audioCtx||!this.sourceAnalyser||!this.outputAnalyser)return;const t=this.buildFilterIR();if(t){try{(e=this.convolver)==null||e.disconnect()}catch{}this.convolver=this.audioCtx.createConvolver(),this.convolver.normalize=!1,this.convolver.buffer=t,this.sourceAnalyser.connect(this.convolver),this.convolver.connect(this.outputAnalyser),this.processedFftDirty=!0}}scheduleConvolverRebuild(){this.convolverRebuildTimer!==null&&clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=setTimeout(()=>{this.convolverRebuildTimer=null,this.isPlaying&&this.rebuildConvolver(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()},250)}recomputeSourceFft(){if(!this.sourceSamples)return;const t=this.sourceSamples.subarray(0,Math.min(this.sourceSamples.length,65536));this.sourceFullFftDb=El(t)}recomputeProcessedFftAsync(){if(!this.sourceSamples||!this.audioCtx)return;this.processedFftDirty=!1;const t=this.audioCtx.sampleRate,e=this.sourceSamples,n=Gs(t,this.fCenter,this.bandwidth,this.nFft),i=Math.min(e.length,t*4),s=e.subarray(0,i),a=Uo(s.length+n.length-1),o=new Float32Array(a);o.set(s);const l=new Float32Array(a);l.set(n);const c=Es(o),h=Es(l),u=new Float32Array(a),d=new Float32Array(a);for(let p=0;p<a;p++)u[p]=c.re[p]*h.re[p]-c.im[p]*h.im[p],d[p]=c.re[p]*h.im[p]+c.im[p]*h.re[p];const f=new Float32Array(a);for(let p=0;p<a;p++)f[p]=u[p];const g=a/2,_=new Float32Array(g);for(let p=0;p<g;p++)_[p]=Math.max(-80,20*Math.log10(Math.sqrt(u[p]*u[p]+d[p]*d[p])/a+1e-10));this.processedFullFftDb=_}async startPlayback(){var t;if(await this.initAudio(),!!this.audioCtx){if(!this.sourceBuffer){this.statusLabel&&(this.statusLabel.textContent="Upload source audio first");return}this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.sourceBuffer,this.sourceNode.loop=!1,this.sourceNode.connect(this.sourceAnalyser),this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.audioCtx||!this.sourceBuffer||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.sourceBuffer.duration-.05&&this.stopPlayback(!0)},this.rebuildConvolver(),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.isPlaying=!0,this.isPaused=!1,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel&&(this.statusLabel.textContent="Playing")}}pausePlayback(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.audioCtx.currentTime-this.playbackStartedAt,this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent="Paused"),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopPlayback(t=!1){var e,n;this._teardownNodes(),this.convolverRebuildTimer!==null&&(clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent=this.sourceBuffer?"Stopped":"Upload source audio"),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)}_teardownNodes(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect();try{(n=this.convolver)==null||n.disconnect()}catch{}this.sourceNode=null,this.convolver=null}async handleSourceClipUpload(t){var e,n;await this.initAudio(),this.statusLabel&&(this.statusLabel.textContent="Decoding…");try{const i=await t.arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(i),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate,this.sourceFileLabel&&(this.sourceFileLabel.textContent=t.name),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${t.name} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync(),this.isPlaying&&(this.stopPlayback(!1),await this.startPlayback())}catch{this.statusLabel&&(this.statusLabel.textContent="Error loading audio")}}buildUI(){var s;document.body.style.overflowY="auto";const t=document.createElement("div");t.style.cssText="font-size:11px;font-weight:700;letter-spacing:.12em;color:#52cffe;margin:4px 0 8px;",t.textContent="Z-TRANSFORM · GAUSSIAN BANDPASS FILTER",this.container.appendChild(t);const e=Math.max(600,this.container.clientWidth-2);this.ui.transport&&(this.transportBar=new Ui({onPlay:()=>this.startPlayback(),onPause:()=>this.pausePlayback(),onStop:()=>this.stopPlayback(!0),onUpload:a=>this.handleSourceClipUpload(a),uploadLabel:"Upload Source",showUpload:this.ui.upload}),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Upload source audio",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.sourceFileLabel=document.createElement("span"),this.sourceFileLabel.style.cssText="font-size:9px;color:#6c7685;margin-left:4px;",this.sourceFileLabel.textContent="",(s=this.transportBar.getElement().querySelector(".transport-right"))==null||s.prepend(this.sourceFileLabel),this.container.appendChild(this.transportBar.getElement())),this.ui.waveform&&(this.waveformTimeline=new gi({width:e,height:80,title:"SOURCE WAVEFORM"},a=>this.handlePlayheadSeek(a)),this.waveformTimeline.getElement().style.marginBottom="6px",this.container.appendChild(this.waveformTimeline.getElement()));let n=null;if(this.ui.filterControls){n=this.el("div",{style:"padding:8px 10px;background:rgba(82,207,254,0.04);border:1px solid rgba(82,207,254,0.12);border-radius:6px;margin-bottom:6px;"});const a=this.el("div",{style:"font-size:9px;font-weight:700;letter-spacing:.1em;color:rgba(82,207,254,0.7);margin-bottom:8px;"});a.textContent="GAUSSIAN BANDPASS FILTER  H(f) = exp(−½·((f − f₀)/σ)²)   σ = bandwidth/2",n.appendChild(a);const o=this.el("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:8px;"});this.fCenterSlider=new Mr({min:100,max:1e4,value:this.fCenter,step:50,label:"CENTER FREQ f₀",unit:"Hz"},l=>{this.fCenter=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),this.bandwidthSlider=new Mr({min:10,max:2e3,value:this.bandwidth,step:10,label:"BANDWIDTH",unit:"Hz"},l=>{this.bandwidth=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),o.appendChild(this.fCenterSlider.getElement()),o.appendChild(this.bandwidthSlider.getElement()),n.appendChild(o)}if(this.ui.ir){const a=this.makePanel("IMPULSE RESPONSE h[n]  (Gaussian BP kernel, fftshift-centered)");this.irCanvas=this.makeCanvas(a,e,80),a.style.marginBottom="6px",this.container.appendChild(a)}const i=Math.floor((e-6)/2);if(this.ui.liveSpectrum){const a=this.el("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;"});this.sourceSpectrum=new We({width:i,height:200,label:"SOURCE SPECTRUM (LIVE)  |X(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),a.appendChild(this.sourceSpectrum.getElement()),this.processedSpectrum=new We({width:i,height:200,label:"PROCESSED SPECTRUM (LIVE)  |Y(f)| = |X(f)·H(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),a.appendChild(this.processedSpectrum.getElement()),this.container.appendChild(a)}if(this.ui.staticSpectrum){const a=this.el("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;"});this.sourceStaticSpectrum=new We({width:i,height:200,label:"SOURCE SPECTRUM (FULL CLIP)  |X(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),a.appendChild(this.sourceStaticSpectrum.getElement()),this.processedStaticSpectrum=new We({width:i,height:200,label:"PROCESSED SPECTRUM (FULL CLIP)  |Y(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),a.appendChild(this.processedStaticSpectrum.getElement()),this.container.appendChild(a)}n&&this.container.appendChild(n)}handlePlayheadSeek(t){var e;this.sourceBuffer&&(this.pausedAt=Math.max(0,Math.min(this.sourceBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopPlayback(!1),this.startPlayback()))}startAnimation(){let t=0;const e=n=>{const i=Math.min((n-t)/1e3,.05);t=n,this.animTime+=i,this.drawAll(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}drawAll(){var t;this.drawIR(),this.updateSpectrumDisplays(),this.isPlaying&&this.audioCtx&&this.sourceBuffer&&(this.pausedAt=Math.min(this.audioCtx.currentTime-this.playbackStartedAt,this.sourceBuffer.duration),(t=this.waveformTimeline)==null||t.setPlayhead(this.pausedAt))}updateSpectrumDisplays(){var s,a,o,l,c,h,u,d,f,g,_,p,m;const t=this.sourceSampleRate/2,e=Nn.SPEC_POINTS,n=Math.log10(20),i=Math.log10(t);for(let M=0;M<e;M++)this.liveSpecFreqs[M]=Math.pow(10,n+M/(e-1)*(i-n));if((s=this.sourceSpectrum)==null||s.clear(),(a=this.sourceSpectrum)==null||a.drawGrid(),this.isPlaying&&this.sourceAnalyser&&this.analyserScratch){this.sourceAnalyser.getByteFrequencyData(this.analyserScratch);const M=this.analyserScratch;for(let S=0;S<e;S++){const E=this.liveSpecFreqs[S],D=Math.round(E/t*(M.length-1)),A=M[Math.min(D,M.length-1)]/255;this.liveSpecDb[S]=-80+A*80}(o=this.sourceSpectrum)==null||o.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ff869a",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceSpectrum,this.sourceBuffer?"Press play to see live spectrum":"Upload source audio");if(this.drawFilterOverlayOnSpectrum(this.sourceSpectrum,t),(l=this.processedSpectrum)==null||l.clear(),(c=this.processedSpectrum)==null||c.drawGrid(),this.isPlaying&&this.outputAnalyser&&this.analyserScratch){const M=new Uint8Array(this.outputAnalyser.frequencyBinCount);this.outputAnalyser.getByteFrequencyData(M);for(let S=0;S<e;S++){const E=this.liveSpecFreqs[S],D=Math.round(E/t*(M.length-1)),A=M[Math.min(D,M.length-1)]/255;this.liveSpecDb[S]=-80+A*80}(h=this.processedSpectrum)==null||h.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ffc86b",2.5,1,!0)}else this.drawPlaceholderOnSpectrum(this.processedSpectrum,this.sourceBuffer?"Press play to see live spectrum":"Upload source audio");if(this.drawFilterOverlayOnSpectrum(this.processedSpectrum,t),(u=this.sourceStaticSpectrum)==null||u.clear(),(d=this.sourceStaticSpectrum)==null||d.drawGrid(),this.sourceFullFftDb){const M=this.sourceFullFftDb,S=new Float32Array(e);for(let E=0;E<e;E++){const D=this.liveSpecFreqs[E],A=Math.round(D/t*(M.length-1));S[E]=M[Math.min(A,M.length-1)]}(f=this.sourceStaticSpectrum)==null||f.drawSpectrum(this.liveSpecFreqs,S,"#ff869a",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceStaticSpectrum,"Upload source audio");if(this.drawFilterOverlayOnSpectrum(this.sourceStaticSpectrum,t),(g=this.processedStaticSpectrum)==null||g.clear(),(_=this.processedStaticSpectrum)==null||_.drawGrid(),this.processedFullFftDb){const M=this.processedFullFftDb,S=new Float32Array(e);for(let E=0;E<e;E++){const D=this.liveSpecFreqs[E],A=Math.round(D/t*(M.length-1));S[E]=M[Math.min(A,M.length-1)]}(p=this.processedStaticSpectrum)==null||p.drawSpectrum(this.liveSpecFreqs,S,"#ffc86b",2,.9,!0)}else if(this.sourceFullFftDb){const M=this.sourceFullFftDb,S=new Float32Array(e);for(let E=0;E<e;E++){const D=this.liveSpecFreqs[E],A=Math.round(D/t*(M.length-1));S[E]=M[Math.min(A,M.length-1)]}(m=this.processedStaticSpectrum)==null||m.drawSpectrum(this.liveSpecFreqs,S,"rgba(255,200,107,0.35)",1,.5)}else this.drawPlaceholderOnSpectrum(this.processedStaticSpectrum,"Upload source audio to see processed spectrum");this.drawFilterOverlayOnSpectrum(this.processedStaticSpectrum,t)}drawFilterOverlayOnSpectrum(t,e){if(!t)return;const n=Nn.SPEC_POINTS,i=this.liveSpecFreqs,s=new Float32Array(n),a=this.bandwidth/2;for(let o=0;o<n;o++){const l=i[o],c=Math.exp(-.5*Math.pow((l-this.fCenter)/a,2));s[o]=20*Math.log10(Math.max(c,1e-9))}t.drawSpectrum(i,s,"rgba(82,207,254,0.6)",1.5,.8)}drawPlaceholderOnSpectrum(t,e){if(!t)return;const i=t.getElement().querySelector("canvas.spectrum-canvas");if(!i)return;const s=window.devicePixelRatio||1,a=i.width/s,o=i.height/s,l=i.getContext("2d");l&&(l.fillStyle="rgba(255,255,255,0.12)",l.font="10px 'Segoe UI', sans-serif",l.textAlign="center",l.fillText(e,a/2,o/2+4))}drawIR(){var m;if(!this.irCanvas)return;const t=this.irCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d");s.clearRect(0,0,n,i);const a=((m=this.audioCtx)==null?void 0:m.sampleRate)??this.sourceSampleRate,o=Gs(a,this.fCenter,this.bandwidth,512),l={l:10,r:10,t:20,b:16},c=n-l.l-l.r,h=i-l.t-l.b,u=l.t+h/2,d="#52cffe";s.strokeStyle="rgba(255,255,255,0.04)",s.lineWidth=1;for(let M=1;M<8;M++)s.beginPath(),s.moveTo(l.l+c/8*M,l.t),s.lineTo(l.l+c/8*M,l.t+h),s.stroke();s.beginPath(),s.moveTo(l.l,u),s.lineTo(l.l+c,u),s.strokeStyle="rgba(255,255,255,0.1)",s.stroke();let f=0;for(let M=0;M<o.length;M++){const S=Math.abs(o[M]);S>f&&(f=S)}f<1e-12&&(f=1);const g=Math.min(o.length,Math.floor(c/2)),_=o.length/g;for(let M=0;M<g;M++){const S=Math.round(M*_),D=o[Math.min(S,o.length-1)]/f,A=l.l+M/g*c,C=D*(h/2-2);s.beginPath(),s.moveTo(A,u),s.lineTo(A,u-C),s.strokeStyle=D>=0?d:"#f472b6",s.globalAlpha=.3+.7*Math.abs(D),s.lineWidth=g>200?1:1.5,s.stroke()}s.globalAlpha=1;const p=(o.length/a*1e3).toFixed(1);s.fillStyle="rgba(82,207,254,0.6)",s.font="700 8px monospace",s.textAlign="left",s.fillText(`h[n]  Gaussian BP · f₀=${this.fCenter}Hz · BW=${this.bandwidth}Hz`,l.l+4,l.t+10),s.textAlign="right",s.fillText(`${o.length} smp · ${p}ms`,n-l.r,l.t+10),s.fillStyle="rgba(255,255,255,0.2)",s.font="8px monospace",s.textAlign="center",s.fillText("n →",l.l+c/2,i-2)}makePanel(t){const e=document.createElement("div");e.style.cssText="background:#080b10;border:1px solid #1e2530;border-radius:6px;overflow:hidden;position:relative;";const n=document.createElement("div");return n.style.cssText="position:absolute;top:5px;left:9px;font-size:8px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,0.35);text-transform:uppercase;z-index:2;pointer-events:none;",n.textContent=t,e.appendChild(n),e}makeCanvas(t,e,n){const i=window.devicePixelRatio||1,s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=e+"px",s.style.height=n+"px",s.style.display="block",s.getContext("2d").scale(i,i),t.appendChild(s),s}resizeCanvas(t,e,n){const i=window.devicePixelRatio||1;t.width=Math.max(100,e)*i,t.height=Math.max(60,n)*i,t.style.width=`${Math.max(100,e)}px`,t.style.height=`${Math.max(60,n)}px`;const s=t.getContext("2d");s.setTransform(1,0,0,1,0,0),s.scale(i,i)}resizeLayout(){var i,s,a,o,l;const t=Math.max(600,this.container.clientWidth-2),e=Math.floor((t-6)/2),n=200;(i=this.waveformTimeline)==null||i.resize(t,80),this.irCanvas&&this.resizeCanvas(this.irCanvas,t,80),(s=this.sourceSpectrum)==null||s.resize(e,n),(a=this.processedSpectrum)==null||a.resize(e,n),(o=this.sourceStaticSpectrum)==null||o.resize(e,n),(l=this.processedStaticSpectrum)==null||l.resize(e,n)}el(t,e={}){const n=document.createElement(t);for(const[i,s]of Object.entries(e))i==="style"?n.style.cssText=s:n[i]=s;return n}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopPlayback(!0),window.removeEventListener("resize",this.onResize)}};b(Nn,"SPEC_POINTS",512);let Er=Nn;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="168",ui={ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bl=0,Aa=1,Tl=2,Fo=1,wl=2,nn=3,an=0,we=1,Ge=2,vn=0,di=1,Ca=2,Ra=3,Pa=4,Al=5,Dn=100,Cl=101,Rl=102,Pl=103,Dl=104,Ll=200,Il=201,Nl=202,Ul=203,br=204,Tr=205,Fl=206,Ol=207,Bl=208,kl=209,zl=210,Hl=211,Gl=212,Vl=213,Wl=214,Xl=0,ql=1,Yl=2,bs=3,Kl=4,$l=5,Zl=6,jl=7,Oo=0,Jl=1,Ql=2,xn=0,tc=1,ec=2,nc=3,ic=4,sc=5,rc=6,ac=7,Bo=300,_i=301,vi=302,wr=303,Ar=304,Is=306,Cr=1e3,Fn=1001,Rr=1002,Oe=1003,oc=1004,Wi=1005,Ve=1006,Vs=1007,On=1008,on=1009,ko=1010,zo=1011,Ii=1012,oa=1013,Bn=1014,sn=1015,Fi=1016,la=1017,ca=1018,xi=1020,Ho=35902,Go=1021,Vo=1022,Xe=1023,Wo=1024,Xo=1025,fi=1026,Si=1027,qo=1028,ha=1029,Yo=1030,ua=1031,da=1033,gs=33776,_s=33777,vs=33778,xs=33779,Pr=35840,Dr=35841,Lr=35842,Ir=35843,Nr=36196,Ur=37492,Fr=37496,Or=37808,Br=37809,kr=37810,zr=37811,Hr=37812,Gr=37813,Vr=37814,Wr=37815,Xr=37816,qr=37817,Yr=37818,Kr=37819,$r=37820,Zr=37821,Ss=36492,jr=36494,Jr=36495,Ko=36283,Qr=36284,ta=36285,ea=36286,lc=3200,cc=3201,hc=0,uc=1,_n="",Ye="srgb",yn="srgb-linear",fa="display-p3",Ns="display-p3-linear",Ts="linear",jt="srgb",ws="rec709",As="p3",Vn=7680,Da=519,dc=512,fc=513,pc=514,$o=515,mc=516,gc=517,_c=518,vc=519,La=35044,Ia="300 es",rn=2e3,Cs=2001;class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,na=180/Math.PI;function Oi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[r&255]+_e[r>>8&255]+_e[r>>16&255]+_e[r>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Me(r,t,e){return Math.max(t,Math.min(e,r))}function xc(r,t){return(r%t+t)%t}function Ws(r,t,e){return(1-e)*r+e*t}function Ei(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sc={DEG2RAD:Ms};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,s,a,o,l,c){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],S=i[4],E=i[7],D=i[2],A=i[5],C=i[8];return s[0]=a*_+o*M+l*D,s[3]=a*p+o*S+l*A,s[6]=a*m+o*E+l*C,s[1]=c*_+h*M+u*D,s[4]=c*p+h*S+u*A,s[7]=c*m+h*E+u*C,s[2]=d*_+f*M+g*D,s[5]=d*p+f*S+g*A,s[8]=d*m+f*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Nt;function Zo(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Rs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mc(){const r=Rs("canvas");return r.style.display="block",r}const Na={};function Li(r){r in Na||(Na[r]=!0,console.warn(r))}function yc(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ua=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fa=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bi={[yn]:{transfer:Ts,primaries:ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Ye]:{transfer:jt,primaries:ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ns]:{transfer:Ts,primaries:As,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Fa),fromReference:r=>r.applyMatrix3(Ua)},[fa]:{transfer:jt,primaries:As,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Fa),fromReference:r=>r.applyMatrix3(Ua).convertLinearToSRGB()}},Ec=new Set([yn,Ns]),qt={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ec.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=bi[t].toReference,i=bi[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return bi[r].primaries},getTransfer:function(r){return r===_n?Ts:bi[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(bi[t].luminanceCoefficients)}};function pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wn;class bc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=Rs("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tc=0;class jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ys(i[a].image)):s.push(Ys(i[a]))}else s=Ys(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ys(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wc=0;class Ae extends Hn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Fn,i=Fn,s=Ve,a=On,o=Xe,l=on,c=Ae.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Oi(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Bo;Ae.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,i=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,E=(f+1)/2,D=(m+1)/2,A=(h+d)/4,C=(u+_)/4,F=(g+p)/4;return S>E&&S>D?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=C/n):E>D?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=A/i,s=F/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=C/s,i=F/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ac extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Ac{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jo extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-o;const m=l*d+c*f+h*g+u*_,M=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const D=Math.sqrt(S),A=Math.atan2(D,m*M);p=Math.sin(p*A)/D,o=Math.sin(o*A)/D}const E=o*M;if(l=l*p+d*E,c=c*p+f*E,h=h*p+g*E,u=u*p+_*E,p===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new U,Oa=new zn;class Bi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(s,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),qi.subVectors(this.max,Ti),Xn.subVectors(t.a,Ti),qn.subVectors(t.b,Ti),Yn.subVectors(t.c,Ti),hn.subVectors(qn,Xn),un.subVectors(Yn,qn),bn.subVectors(Xn,Yn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-bn.z,bn.y,hn.z,0,-hn.x,un.z,0,-un.x,bn.z,0,-bn.x,-hn.y,hn.x,0,-un.y,un.x,0,-bn.y,bn.x,0];return!$s(e,Xn,qn,Yn,qi)||(e=[1,0,0,0,1,0,0,0,1],!$s(e,Xn,qn,Yn,qi))?!1:(Yi.crossVectors(hn,un),e=[Yi.x,Yi.y,Yi.z],$s(e,Xn,qn,Yn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new U,new U,new U,new U,new U,new U,new U,new U],ke=new U,Xi=new Bi,Xn=new U,qn=new U,Yn=new U,hn=new U,un=new U,bn=new U,Ti=new U,qi=new U,Yi=new U,Tn=new U;function $s(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Tn.fromArray(r,s);const o=i.x*Math.abs(Tn.x)+i.y*Math.abs(Tn.y)+i.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rc=new Bi,wi=new U,Zs=new U;class Us{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(Zs)),this.expandByPoint(wi.copy(t.center).sub(Zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new U,js=new U,Ki=new U,dn=new U,Js=new U,$i=new U,Qs=new U;class pa{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){js.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(js);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ki),o=dn.dot(this.direction),l=-dn.dot(Ki),c=dn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(js).addScaledVector(Ki,d),f}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const n=Je.dot(this.direction),i=Je.dot(Je)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,i,s){Js.subVectors(e,t),$i.subVectors(n,t),Qs.crossVectors(Js,$i);let a=this.direction.dot(Qs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dn.subVectors(this.origin,t);const l=o*this.direction.dot($i.crossVectors(dn,$i));if(l<0)return null;const c=o*this.direction.dot(Js.cross(dn));if(c<0||l+c>a)return null;const h=-o*dn.dot(Qs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Kn.setFromMatrixColumn(t,0).length(),s=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pc,t,Dc)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),fn.crossVectors(n,De),fn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),fn.crossVectors(n,De)),fn.normalize(),Zi.crossVectors(De,fn),i[0]=fn.x,i[4]=Zi.x,i[8]=De.x,i[1]=fn.y,i[5]=Zi.y,i[9]=De.y,i[2]=fn.z,i[6]=Zi.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],S=n[7],E=n[11],D=n[15],A=i[0],C=i[4],F=i[8],T=i[12],y=i[1],P=i[5],H=i[9],z=i[13],q=i[2],$=i[6],W=i[10],j=i[14],G=i[3],ot=i[7],ut=i[11],gt=i[15];return s[0]=a*A+o*y+l*q+c*G,s[4]=a*C+o*P+l*$+c*ot,s[8]=a*F+o*H+l*W+c*ut,s[12]=a*T+o*z+l*j+c*gt,s[1]=h*A+u*y+d*q+f*G,s[5]=h*C+u*P+d*$+f*ot,s[9]=h*F+u*H+d*W+f*ut,s[13]=h*T+u*z+d*j+f*gt,s[2]=g*A+_*y+p*q+m*G,s[6]=g*C+_*P+p*$+m*ot,s[10]=g*F+_*H+p*W+m*ut,s[14]=g*T+_*z+p*j+m*gt,s[3]=M*A+S*y+E*q+D*G,s[7]=M*C+S*P+E*$+D*ot,s[11]=M*F+S*H+E*W+D*ut,s[15]=M*T+S*z+E*j+D*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+p*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=u*p*c-_*d*c+_*l*f-o*p*f-u*l*m+o*d*m,S=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,E=h*_*c-g*u*c+g*o*f-a*_*f-h*o*m+a*u*m,D=g*u*l-h*_*l-g*o*d+a*_*d+h*o*p-a*u*p,A=e*M+n*S+i*E+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=M*C,t[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*C,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*C,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*C,t[4]=S*C,t[5]=(h*p*s-g*d*s+g*i*f-e*p*f-h*i*m+e*d*m)*C,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*m-e*l*m)*C,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*C,t[8]=E*C,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*m-e*u*m)*C,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*m+e*o*m)*C,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=D*C,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*C,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,p=a*u,m=o*u,M=l*c,S=l*h,E=l*u,D=n.x,A=n.y,C=n.z;return i[0]=(1-(_+m))*D,i[1]=(f+E)*D,i[2]=(g-S)*D,i[3]=0,i[4]=(f-E)*A,i[5]=(1-(d+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+S)*C,i[9]=(p-M)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Kn.set(i[0],i[1],i[2]).length();const a=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const c=1/s,h=1/a,u=1/o;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,e.setFromRotationMatrix(ze),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=rn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===rn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Cs)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=rn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===rn)g=(a+s)*u,_=-2*u;else if(o===Cs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new U,ze=new oe,Pc=new U(0,0,0),Dc=new U(1,1,1),fn=new U,Zi=new U,De=new U,Ba=new oe,ka=new zn;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ka.setFromEuler(this),this.setFromQuaternion(ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lc=0;const za=new U,$n=new zn,Qe=new oe,ji=new U,Ai=new U,Ic=new U,Nc=new zn,Ha=new U(1,0,0),Ga=new U(0,1,0),Va=new U(0,0,1),Wa={type:"added"},Uc={type:"removed"},Zn={type:"childadded",child:null},tr={type:"childremoved",child:null};class Ee extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new U,e=new ln,n=new zn,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Nt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Ha,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Va,t)}translateOnAxis(t,e){return za.copy(t).applyQuaternion(this.quaternion),this.position.add(za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ha,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Va,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Ai,ji,this.up):Qe.lookAt(ji,Ai,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(Qe),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wa),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uc),tr.child=t,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wa),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,Ic),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new U(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new U,tn=new U,er=new U,en=new U,jn=new U,Jn=new U,Xa=new U,nr=new U,ir=new U,sr=new U;class $e{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){He.subVectors(i,e),tn.subVectors(n,e),er.subVectors(t,e);const a=He.dot(He),o=He.dot(tn),l=He.dot(er),c=tn.dot(tn),h=tn.dot(er),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),tn.subVectors(t,e),He.cross(tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),He.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;jn.subVectors(i,n),Jn.subVectors(s,n),nr.subVectors(t,n);const l=jn.dot(nr),c=Jn.dot(nr);if(l<=0&&c<=0)return e.copy(n);ir.subVectors(t,i);const h=jn.dot(ir),u=Jn.dot(ir);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(jn,a);sr.subVectors(t,s);const f=jn.dot(sr),g=Jn.dot(sr);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Jn,o);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Xa.subVectors(s,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Xa,o);const m=1/(p+_+d);return a=_*m,o=d*m,e.copy(n).addScaledVector(jn,a).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function rr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=xc(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=rr(a,s,t+1/3),this.g=rr(a,s,t),this.b=rr(a,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=tl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return qt.fromWorkingColorSpace(ve.copy(this),t),Math.round(Me(ve.r*255,0,255))*65536+Math.round(Me(ve.g*255,0,255))*256+Math.round(Me(ve.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,i=ve.g,s=ve.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Ye){qt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,i=ve.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(Ji);const n=Ws(pn.h,Ji.h,e),i=Ws(pn.s,Ji.s,e),s=Ws(pn.l,Ji.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new zt;zt.NAMES=tl;let Fc=0;class ki extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=di,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=br,this.blendDst=Tr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==br&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new U,Qi=new Dt;class ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Li("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class el extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nl extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Oc=0;const Ue=new oe,ar=new Ee,Qn=new U,Le=new Bi,Ci=new Bi,ue=new U;class ye extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zo(t)?nl:el)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return ar.lookAt(t),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Le.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(Le.min,Ci.min),Le.expandByPoint(ue),ue.addVectors(Le.max,Ci.max),Le.expandByPoint(ue)):(Le.expandByPoint(Ci.min),Le.expandByPoint(Ci.max))}Le.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ue.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(t,c),ue.add(Qn)),i=Math.max(i,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;const c=new U,h=new U,u=new U,d=new Dt,f=new Dt,g=new Dt,_=new U,p=new U;function m(F,T,y){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,F),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[F].add(_),o[T].add(_),o[y].add(_),l[F].add(p),l[T].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let F=0,T=M.length;F<T;++F){const y=M[F],P=y.start,H=y.count;for(let z=P,q=P+H;z<q;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new U,E=new U,D=new U,A=new U;function C(F){D.fromBufferAttribute(i,F),A.copy(D);const T=o[F];S.copy(T),S.sub(D.multiplyScalar(D.dot(T))).normalize(),E.crossVectors(A,T);const P=E.dot(l[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,P)}for(let F=0,T=M.length;F<T;++F){const y=M[F],P=y.start,H=y.count;for(let z=P,q=P+H;z<q;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new oe,wn=new pa,ts=new Us,Ya=new U,ti=new U,ei=new U,ni=new U,or=new U,es=new U,ns=new Dt,is=new Dt,ss=new Dt,Ka=new U,$a=new U,Za=new U,rs=new U,as=new U;class Ie extends Ee{constructor(t=new ye,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(or.fromBufferAttribute(u,t),a?es.addScaledVector(or,h):es.addScaledVector(or.sub(e),h))}e.add(es)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),wn.copy(t.ray).recast(t.near),!(ts.containsPoint(wn.origin)===!1&&(wn.intersectSphere(ts,Ya)===null||wn.origin.distanceToSquared(Ya)>(t.far-t.near)**2))&&(qa.copy(s).invert(),wn.copy(t.ray).applyMatrix4(qa),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,D=S;E<D;E+=3){const A=o.getX(E),C=o.getX(E+1),F=o.getX(E+2);i=os(this,m,t,n,c,h,u,A,C,F),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);i=os(this,a,t,n,c,h,u,M,S,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,D=S;E<D;E+=3){const A=E,C=E+1,F=E+2;i=os(this,m,t,n,c,h,u,A,C,F),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=p,S=p+1,E=p+2;i=os(this,a,t,n,c,h,u,M,S,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Bc(r,t,e,n,i,s,a,o){let l;if(t.side===we?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===an,o),l===null)return null;as.copy(o),as.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:r}}function os(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ti),r.getVertexPosition(l,ei),r.getVertexPosition(c,ni);const h=Bc(r,t,e,n,ti,ei,ni,rs);if(h){i&&(ns.fromBufferAttribute(i,o),is.fromBufferAttribute(i,l),ss.fromBufferAttribute(i,c),h.uv=$e.getInterpolation(rs,ti,ei,ni,ns,is,ss,new Dt)),s&&(ns.fromBufferAttribute(s,o),is.fromBufferAttribute(s,l),ss.fromBufferAttribute(s,c),h.uv1=$e.getInterpolation(rs,ti,ei,ni,ns,is,ss,new Dt)),a&&(Ka.fromBufferAttribute(a,o),$a.fromBufferAttribute(a,l),Za.fromBufferAttribute(a,c),h.normal=$e.getInterpolation(rs,ti,ei,ni,Ka,$a,Za,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};$e.getNormal(ti,ei,ni,u.normal),h.face=u}return h}class zi extends ye{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,p,m,M,S,E,D,A,C,F,T){const y=E/C,P=D/F,H=E/2,z=D/2,q=A/2,$=C+1,W=F+1;let j=0,G=0;const ot=new U;for(let ut=0;ut<W;ut++){const gt=ut*P-z;for(let Ot=0;Ot<$;Ot++){const Kt=Ot*y-H;ot[_]=Kt*M,ot[p]=gt*S,ot[m]=q,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[p]=0,ot[m]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ot/C),u.push(1-ut/F),j+=1}}for(let ut=0;ut<F;ut++)for(let gt=0;gt<C;gt++){const Ot=d+gt+$*ut,Kt=d+gt+$*(ut+1),V=d+(gt+1)+$*(ut+1),Q=d+(gt+1)+$*ut;l.push(Ot,Kt,Q),l.push(Kt,V,Q),G+=6}o.addGroup(f,G,T),f+=G,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Se(r){const t={};for(let e=0;e<r.length;e++){const n=Mi(r[e]);for(const i in n)t[i]=n[i]}return t}function kc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function il(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const zc={clone:Mi,merge:Se};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sl extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mn=new U,ja=new Dt,Ja=new Dt;class Fe extends sl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,ja,Ja),e.subVectors(Ja,ja)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class Vc extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(ii,si,t,e);i.layers=this.layers,this.add(i);const s=new Fe(ii,si,t,e);s.layers=this.layers,this.add(s);const a=new Fe(ii,si,t,e);a.layers=this.layers,this.add(a);const o=new Fe(ii,si,t,e);o.layers=this.layers,this.add(o);const l=new Fe(ii,si,t,e);l.layers=this.layers,this.add(l);const c=new Fe(ii,si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rl extends Ae{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wc extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zi(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:vn});s.uniforms.tEquirect.value=e;const a=new Ie(i,s),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Ve),new Vc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const lr=new U,Xc=new U,qc=new Nt;class gn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=lr.subVectors(n,e).cross(Xc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qc.getNormalMatrix(t),i=this.coplanarPoint(lr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Us,ls=new U;class al{constructor(t=new gn,e=new gn,n=new gn,i=new gn,s=new gn,a=new gn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],S=i[14],E=i[15];if(n[0].setComponents(l-s,d-c,p-f,E-m).normalize(),n[1].setComponents(l+s,d+c,p+f,E+m).normalize(),n[2].setComponents(l+a,d+h,p+g,E+M).normalize(),n[3].setComponents(l-a,d-h,p-g,E-M).normalize(),n[4].setComponents(l-o,d-u,p-_,E-S).normalize(),e===rn)n[5].setComponents(l+o,d+u,p+_,E+S).normalize();else if(e===Cs)n[5].setComponents(o,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ls.x=i.normal.x>0?t.max.x:t.min.x,ls.y=i.normal.y>0?t.max.y:t.min.y,ls.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ol(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Yc(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Fs extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const M=m*d-a;for(let S=0;S<c;S++){const E=S*u-s;g.push(E,-M,0),_.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const S=M+c*m,E=M+c*(m+1),D=M+1+c*(m+1),A=M+1+c*m;f.push(S,E,A),f.push(E,D,A)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
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
#endif`,Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,th=`#ifdef USE_AOMAP
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
#endif`,eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh=`#ifdef USE_BATCHING
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
#endif`,ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oh=`#ifdef USE_IRIDESCENCE
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
#endif`,lh=`#ifdef USE_BUMPMAP
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_h=`#define PI 3.141592653589793
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
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xh=`vec3 transformedNormal = objectNormal;
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
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Th=`
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
}`,wh=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uh=`#ifdef USE_GRADIENTMAP
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
}`,Fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kh=`uniform bool receiveShadow;
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
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
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
#endif`,qh=`struct PhysicalMaterial {
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
}`,Yh=`
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
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
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
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iu=`#if defined( USE_POINTS_UV )
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
#endif`,su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,au=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,du=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Su=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Du=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lu=`float getShadowMask() {
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
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hu=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#ifdef USE_TRANSMISSION
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
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ku=`uniform sampler2D t2D;
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`#include <common>
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
}`,td=`#if DEPTH_PACKING == 3200
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
}`,ed=`#define DISTANCE
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
}`,nd=`#define DISTANCE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`uniform float scale;
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
}`,ad=`uniform vec3 diffuse;
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
}`,od=`#include <common>
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#define LAMBERT
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
}`,hd=`#define LAMBERT
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
}`,ud=`#define MATCAP
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
}`,dd=`#define MATCAP
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
}`,fd=`#define NORMAL
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
}`,pd=`#define NORMAL
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
}`,md=`#define PHONG
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
}`,gd=`#define PHONG
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
}`,_d=`#define STANDARD
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
}`,vd=`#define STANDARD
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
}`,xd=`#define TOON
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
}`,Sd=`#define TOON
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
}`,Md=`uniform float size;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Ed=`#include <common>
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
}`,bd=`uniform vec3 color;
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
}`,Td=`uniform float rotation;
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
}`,wd=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:Kc,alphahash_pars_fragment:$c,alphamap_fragment:Zc,alphamap_pars_fragment:jc,alphatest_fragment:Jc,alphatest_pars_fragment:Qc,aomap_fragment:th,aomap_pars_fragment:eh,batching_pars_vertex:nh,batching_vertex:ih,begin_vertex:sh,beginnormal_vertex:rh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:lh,clipping_planes_fragment:ch,clipping_planes_pars_fragment:hh,clipping_planes_pars_vertex:uh,clipping_planes_vertex:dh,color_fragment:fh,color_pars_fragment:ph,color_pars_vertex:mh,color_vertex:gh,common:_h,cube_uv_reflection_fragment:vh,defaultnormal_vertex:xh,displacementmap_pars_vertex:Sh,displacementmap_vertex:Mh,emissivemap_fragment:yh,emissivemap_pars_fragment:Eh,colorspace_fragment:bh,colorspace_pars_fragment:Th,envmap_fragment:wh,envmap_common_pars_fragment:Ah,envmap_pars_fragment:Ch,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:zh,envmap_vertex:Ph,fog_vertex:Dh,fog_pars_vertex:Lh,fog_fragment:Ih,fog_pars_fragment:Nh,gradientmap_pars_fragment:Uh,lightmap_pars_fragment:Fh,lights_lambert_fragment:Oh,lights_lambert_pars_fragment:Bh,lights_pars_begin:kh,lights_toon_fragment:Hh,lights_toon_pars_fragment:Gh,lights_phong_fragment:Vh,lights_phong_pars_fragment:Wh,lights_physical_fragment:Xh,lights_physical_pars_fragment:qh,lights_fragment_begin:Yh,lights_fragment_maps:Kh,lights_fragment_end:$h,logdepthbuf_fragment:Zh,logdepthbuf_pars_fragment:jh,logdepthbuf_pars_vertex:Jh,logdepthbuf_vertex:Qh,map_fragment:tu,map_pars_fragment:eu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:su,metalnessmap_pars_fragment:ru,morphinstance_vertex:au,morphcolor_vertex:ou,morphnormal_vertex:lu,morphtarget_pars_vertex:cu,morphtarget_vertex:hu,normal_fragment_begin:uu,normal_fragment_maps:du,normal_pars_fragment:fu,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:xu,iridescence_pars_fragment:Su,opaque_fragment:Mu,packing:yu,premultiplied_alpha_fragment:Eu,project_vertex:bu,dithering_fragment:Tu,dithering_pars_fragment:wu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:Cu,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:Pu,shadowmap_vertex:Du,shadowmask_pars_fragment:Lu,skinbase_vertex:Iu,skinning_pars_vertex:Nu,skinning_vertex:Uu,skinnormal_vertex:Fu,specularmap_fragment:Ou,specularmap_pars_fragment:Bu,tonemapping_fragment:ku,tonemapping_pars_fragment:zu,transmission_fragment:Hu,transmission_pars_fragment:Gu,uv_pars_fragment:Vu,uv_pars_vertex:Wu,uv_vertex:Xu,worldpos_vertex:qu,background_vert:Yu,background_frag:Ku,backgroundCube_vert:$u,backgroundCube_frag:Zu,cube_vert:ju,cube_frag:Ju,depth_vert:Qu,depth_frag:td,distanceRGBA_vert:ed,distanceRGBA_frag:nd,equirect_vert:id,equirect_frag:sd,linedashed_vert:rd,linedashed_frag:ad,meshbasic_vert:od,meshbasic_frag:ld,meshlambert_vert:cd,meshlambert_frag:hd,meshmatcap_vert:ud,meshmatcap_frag:dd,meshnormal_vert:fd,meshnormal_frag:pd,meshphong_vert:md,meshphong_frag:gd,meshphysical_vert:_d,meshphysical_frag:vd,meshtoon_vert:xd,meshtoon_frag:Sd,points_vert:Md,points_frag:yd,shadow_vert:Ed,shadow_frag:bd,sprite_vert:Td,sprite_frag:wd},st={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ke={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ke.physical={uniforms:Se([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const cs={r:0,b:0,g:0},Cn=new ln,Ad=new oe;function Cd(r,t,e,n,i,s,a){const o=new zt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function _(M){let S=!1;const E=g(M);E===null?m(o,l):E&&E.isColor&&(m(E,1),S=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===Is)?(h===void 0&&(h=new Ie(new zi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Mi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cn.copy(S.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(Cn)),h.material.toneMapped=qt.getTransfer(E.colorSpace)!==jt,(u!==E||d!==E.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ie(new Fs(2,2),new Mn({name:"BackgroundMaterial",uniforms:Mi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(E.colorSpace)!==jt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(cs,il(r)),n.buffers.color.setClear(cs.r,cs.g,cs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:_,addToRenderList:p}}function Rd(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,P,H,z,q){let $=!1;const W=u(z,H,P);s!==W&&(s=W,c(s.object)),$=f(y,z,H,q),$&&g(y,z,H,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(y,P,H,z),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,P,H){const z=H.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let $=q[P.id];$===void 0&&($={},q[P.id]=$);let W=$[z];return W===void 0&&(W=d(l()),$[z]=W),W}function d(y){const P=[],H=[],z=[];for(let q=0;q<e;q++)P[q]=0,H[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,P,H,z){const q=s.attributes,$=P.attributes;let W=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){const ut=q[G];let gt=$[G];if(gt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(y,P,H,z){const q={},$=P.attributes;let W=0;const j=H.getAttributes();for(const G in j)if(j[G].location>=0){let ut=$[G];ut===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),q[G]=gt,W++}s.attributes=q,s.attributesNum=W,s.index=z}function _(){const y=s.newAttributes;for(let P=0,H=y.length;P<H;P++)y[P]=0}function p(y){m(y,0)}function m(y,P){const H=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;H[y]=1,z[y]===0&&(r.enableVertexAttribArray(y),z[y]=1),q[y]!==P&&(r.vertexAttribDivisor(y,P),q[y]=P)}function M(){const y=s.newAttributes,P=s.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==y[H]&&(r.disableVertexAttribArray(H),P[H]=0)}function S(y,P,H,z,q,$,W){W===!0?r.vertexAttribIPointer(y,P,H,q,$):r.vertexAttribPointer(y,P,H,z,q,$)}function E(y,P,H,z){_();const q=z.attributes,$=H.getAttributes(),W=P.defaultAttributeValues;for(const j in $){const G=$[j];if(G.location>=0){let ot=q[j];if(ot===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const ut=ot.normalized,gt=ot.itemSize,Ot=t.get(ot);if(Ot===void 0)continue;const Kt=Ot.buffer,V=Ot.type,Q=Ot.bytesPerElement,mt=V===r.INT||V===r.UNSIGNED_INT||ot.gpuType===oa;if(ot.isInterleavedBufferAttribute){const ct=ot.data,bt=ct.stride,Rt=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let Ft=0;Ft<G.locationSize;Ft++)m(G.location+Ft,ct.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ft=0;Ft<G.locationSize;Ft++)p(G.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let Ft=0;Ft<G.locationSize;Ft++)S(G.location+Ft,gt/G.locationSize,V,ut,bt*Q,(Rt+gt/G.locationSize*Ft)*Q,mt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct,ot.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let ct=0;ct<G.locationSize;ct++)S(G.location+ct,gt/G.locationSize,V,ut,gt*Q,gt/G.locationSize*ct*Q,mt)}}else if(W!==void 0){const ut=W[j];if(ut!==void 0)switch(ut.length){case 2:r.vertexAttrib2fv(G.location,ut);break;case 3:r.vertexAttrib3fv(G.location,ut);break;case 4:r.vertexAttrib4fv(G.location,ut);break;default:r.vertexAttrib1fv(G.location,ut)}}}}M()}function D(){F();for(const y in n){const P=n[y];for(const H in P){const z=P[H];for(const q in z)h(z[q].object),delete z[q];delete P[H]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const H in P){const z=P[H];for(const q in z)h(z[q].object),delete z[q];delete P[H]}delete n[y.id]}function C(y){for(const P in n){const H=n[P];if(H[y.id]===void 0)continue;const z=H[y.id];for(const q in z)h(z[q].object),delete z[q];delete H[y.id]}}function F(){T(),a=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Pd(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dd(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Xe&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==on&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:E,maxSamples:D}}function Ld(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new gn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const M=s?0:n,S=M*4;let E=m.clippingState||null;l.value=E,E=h(g,d,S,f);for(let D=0;D!==S;++D)E[D]=e[D];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,E=f;S!==_;++S,E+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Id(r){let t=new WeakMap;function e(a,o){return o===wr?a.mapping=_i:o===Ar&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wr||o===Ar)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wc(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Nd extends sl{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hi=4,Qa=[.125,.215,.35,.446,.526,.582],Ln=20,cr=new Nd,to=new zt;let hr=null,ur=0,dr=0,fr=!1;const Pn=(1+Math.sqrt(5))/2,ri=1/Pn,eo=[new U(-Pn,ri,0),new U(Pn,ri,0),new U(-ri,0,Pn),new U(ri,0,Pn),new U(0,Pn,-ri),new U(0,Pn,ri),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class no{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hr,ur,dr),this._renderer.xr.enabled=fr,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Fi,format:Xe,colorSpace:yn,depthBuffer:!1},i=io(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=io(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ud(s)),this._blurMaterial=Fd(s,t,e)}return i}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,cr)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(to),h.toneMapping=xn,h.autoClear=!1;const f=new ci({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new Ie(new zi,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(to),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const S=this._cubeSize;hs(i,M*S,m>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=eo[(i-s-1)%eo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ie(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ln-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Ln;p>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const m=[];let M=0;for(let C=0;C<Ln;++C){const F=C/_,T=Math.exp(-F*F/2);m.push(T),C===0?M+=T:C<p&&(M+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const E=this._sizeLods[i],D=3*E*(i>S-hi?i-S+hi:0),A=4*(this._cubeSize-E);hs(e,D,A,3*E,2*E),l.setRenderTarget(e),l.render(u,cr)}}function Ud(r){const t=[],e=[],n=[];let i=r;const s=r-hi+1+Qa.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-hi?l=Qa[a-r+hi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),S=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,F=A>2?0:-1,T=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];M.set(T,_*g*A),S.set(d,p*g*A);const y=[A,A,A,A,A,A];E.set(y,m*g*A)}const D=new ye;D.setAttribute("position",new ge(M,_)),D.setAttribute("uv",new ge(S,p)),D.setAttribute("faceIndex",new ge(E,m)),t.push(D),i>hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function io(r,t,e){const n=new kn(r,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Fd(r,t,e){const n=new Float32Array(Ln),i=new U(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ma(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function so(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ro(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function Od(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wr||l===Ar,h=l===_i||l===vi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new no(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new no(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bd(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kd(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let S=0,E=M.length;S<E;S+=3){const D=M[S+0],A=M[S+1],C=M[S+2];d.push(D,A,A,C,C,D)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,E=M.length/3-1;S<E;S+=3){const D=S+0,A=S+1,C=S+2;d.push(D,A,A,C,C,D)}}else return;const p=new(Zo(d)?nl:el)(d,1);p.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function zd(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hd(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gd(r,t,e){const n=new WeakMap,i=new fe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let D=o.attributes.position.count*E,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*A*4*u),F=new Jo(C,D,A,u);F.type=sn,F.needsUpdate=!0;const T=E*4;for(let P=0;P<u;P++){const H=m[P],z=M[P],q=S[P],$=D*A*4*P;for(let W=0;W<H.count;W++){const j=W*T;g===!0&&(i.fromBufferAttribute(H,W),C[$+j+0]=i.x,C[$+j+1]=i.y,C[$+j+2]=i.z,C[$+j+3]=0),_===!0&&(i.fromBufferAttribute(z,W),C[$+j+4]=i.x,C[$+j+5]=i.y,C[$+j+6]=i.z,C[$+j+7]=0),p===!0&&(i.fromBufferAttribute(q,W),C[$+j+8]=i.x,C[$+j+9]=i.y,C[$+j+10]=i.z,C[$+j+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:F,size:new Dt(D,A)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Vd(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class ll extends Ae{constructor(t,e,n,i,s,a,o,l,c,h=fi){if(h!==fi&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fi&&(n=Bn),n===void 0&&h===Si&&(n=xi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cl=new Ae,ao=new ll(1,1),hl=new Jo,ul=new Cc,dl=new rl,oo=[],lo=[],co=new Float32Array(16),ho=new Float32Array(9),uo=new Float32Array(4);function yi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=oo[i];if(s===void 0&&(s=new Float32Array(i),oo[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ce(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function he(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Os(r,t){let e=lo[t];e===void 0&&(e=new Int32Array(t),lo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Wd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Xd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2fv(this.addr,t),he(e,t)}}function qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;r.uniform3fv(this.addr,t),he(e,t)}}function Yd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4fv(this.addr,t),he(e,t)}}function Kd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;uo.set(n),r.uniformMatrix2fv(this.addr,!1,uo),he(e,n)}}function $d(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ho.set(n),r.uniformMatrix3fv(this.addr,!1,ho),he(e,n)}}function Zd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;co.set(n),r.uniformMatrix4fv(this.addr,!1,co),he(e,n)}}function jd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Jd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2iv(this.addr,t),he(e,t)}}function Qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3iv(this.addr,t),he(e,t)}}function tf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4iv(this.addr,t),he(e,t)}}function ef(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function nf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2uiv(this.addr,t),he(e,t)}}function sf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3uiv(this.addr,t),he(e,t)}}function rf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4uiv(this.addr,t),he(e,t)}}function af(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ao.compareFunction=$o,s=ao):s=cl,e.setTexture2D(t||s,i)}function of(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ul,i)}function lf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dl,i)}function cf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hl,i)}function hf(r){switch(r){case 5126:return Wd;case 35664:return Xd;case 35665:return qd;case 35666:return Yd;case 35674:return Kd;case 35675:return $d;case 35676:return Zd;case 5124:case 35670:return jd;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return tf;case 5125:return ef;case 36294:return nf;case 36295:return sf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return cf}}function uf(r,t){r.uniform1fv(this.addr,t)}function df(r,t){const e=yi(t,this.size,2);r.uniform2fv(this.addr,e)}function ff(r,t){const e=yi(t,this.size,3);r.uniform3fv(this.addr,e)}function pf(r,t){const e=yi(t,this.size,4);r.uniform4fv(this.addr,e)}function mf(r,t){const e=yi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function gf(r,t){const e=yi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function _f(r,t){const e=yi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function vf(r,t){r.uniform1iv(this.addr,t)}function xf(r,t){r.uniform2iv(this.addr,t)}function Sf(r,t){r.uniform3iv(this.addr,t)}function Mf(r,t){r.uniform4iv(this.addr,t)}function yf(r,t){r.uniform1uiv(this.addr,t)}function Ef(r,t){r.uniform2uiv(this.addr,t)}function bf(r,t){r.uniform3uiv(this.addr,t)}function Tf(r,t){r.uniform4uiv(this.addr,t)}function wf(r,t,e){const n=this.cache,i=t.length,s=Os(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||cl,s[a])}function Af(r,t,e){const n=this.cache,i=t.length,s=Os(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ul,s[a])}function Cf(r,t,e){const n=this.cache,i=t.length,s=Os(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dl,s[a])}function Rf(r,t,e){const n=this.cache,i=t.length,s=Os(e,i);ce(n,s)||(r.uniform1iv(this.addr,s),he(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||hl,s[a])}function Pf(r){switch(r){case 5126:return uf;case 35664:return df;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return vf;case 35667:case 35671:return xf;case 35668:case 35672:return Sf;case 35669:case 35673:return Mf;case 5125:return yf;case 36294:return Ef;case 36295:return bf;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Rf}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hf(e.type)}}class Lf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pf(e.type)}}class If{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function fo(r,t){r.seq.push(t),r.map[t.id]=t}function Nf(r,t,e){const n=r.name,i=n.length;for(pr.lastIndex=0;;){const s=pr.exec(n),a=pr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){fo(e,c===void 0?new Df(o,r,t):new Lf(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new If(o),fo(e,u)),e=u}}}class ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Nf(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function po(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Uf=37297;let Ff=0;function Of(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Bf(r){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(r);let n;switch(t===e?n="":t===As&&e===ws?n="LinearDisplayP3ToLinearSRGB":t===ws&&e===As&&(n="LinearSRGBToLinearDisplayP3"),r){case yn:case Ns:return[n,"LinearTransferOETF"];case Ye:case fa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function mo(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Of(r.getShaderSource(t),a)}else return i}function kf(r,t){const e=Bf(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function zf(r,t){let e;switch(t){case tc:e="Linear";break;case ec:e="Reinhard";break;case nc:e="Cineon";break;case ic:e="ACESFilmic";break;case rc:e="AgX";break;case ac:e="Neutral";break;case sc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const us=new U;function Hf(){qt.getLuminanceCoefficients(us);const r=us.x.toFixed(4),t=us.y.toFixed(4),e=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function Vf(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wf(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Di(r){return r!==""}function go(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _o(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(r){return r.replace(Xf,Yf)}const qf=new Map;function Yf(r,t){let e=It[t];if(e===void 0){const n=qf.get(t);if(n!==void 0)e=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(r){return r.replace(Kf,$f)}function $f(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xo(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===wl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _i:case vi:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jf(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Qf(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case Jl:t="ENVMAP_BLENDING_MIX";break;case Ql:t="ENVMAP_BLENDING_ADD";break}return t}function tp(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ep(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Zf(e),c=jf(e),h=Jf(e),u=Qf(e),d=tp(e),f=Gf(e),g=Vf(s),_=i.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),m.length>0&&(m+=`
`)):(p=[xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),m=[xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?It.tonemapping_pars_fragment:"",e.toneMapping!==xn?zf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,kf("linearToOutputTexel",e.outputColorSpace),Hf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),a=ia(a),a=go(a,e),a=_o(a,e),o=ia(o),o=go(o,e),o=_o(o,e),a=vo(a),o=vo(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+p+a,E=M+m+o,D=po(i,i.VERTEX_SHADER,S),A=po(i,i.FRAGMENT_SHADER,E);i.attachShader(_,D),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(D).trim(),q=i.getShaderInfoLog(A).trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,D,A);else{const j=mo(i,D,"vertex"),G=mo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+j+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||q==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:q,prefix:m}})}i.deleteShader(D),i.deleteShader(A),F=new ys(i,_),T=Wf(i,_)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Uf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let np=0;class ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sp(t),e.set(t,n)),n}}class sp{constructor(t){this.id=np++,this.code=t,this.usedTimes=0}}function rp(r,t,e,n,i,s,a){const o=new Qo,l=new ip,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,P,H,z){const q=H.fog,$=z.geometry,W=T.isMeshStandardMaterial?H.environment:null,j=(T.isMeshStandardMaterial?e:t).get(T.envMap||W),G=j&&j.mapping===Is?j.image.height:null,ot=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=ut!==void 0?ut.length:0;let Ot=0;$.morphAttributes.position!==void 0&&(Ot=1),$.morphAttributes.normal!==void 0&&(Ot=2),$.morphAttributes.color!==void 0&&(Ot=3);let Kt,V,Q,mt;if(ot){const Ht=Ke[ot];Kt=Ht.vertexShader,V=Ht.fragmentShader}else Kt=T.vertexShader,V=T.fragmentShader,l.update(T),Q=l.getVertexShaderID(T),mt=l.getFragmentShaderID(T);const ct=r.getRenderTarget(),bt=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,Ft=!!T.map,Qt=!!T.matcap,R=!!j,ne=!!T.aoMap,Yt=!!T.lightMap,$t=!!T.bumpMap,xt=!!T.normalMap,ie=!!T.displacementMap,At=!!T.emissiveMap,Pt=!!T.metalnessMap,w=!!T.roughnessMap,v=T.anisotropy>0,k=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,Z=T.sheen>0,St=T.transmission>0,rt=v&&!!T.anisotropyMap,ht=k&&!!T.clearcoatMap,Lt=k&&!!T.clearcoatNormalMap,tt=k&&!!T.clearcoatRoughnessMap,lt=J&&!!T.iridescenceMap,Bt=J&&!!T.iridescenceThicknessMap,wt=Z&&!!T.sheenColorMap,dt=Z&&!!T.sheenRoughnessMap,Ct=!!T.specularMap,Ut=!!T.specularColorMap,Jt=!!T.specularIntensityMap,L=St&&!!T.transmissionMap,et=St&&!!T.thicknessMap,X=!!T.gradientMap,Y=!!T.alphaMap,it=T.alphaTest>0,yt=!!T.alphaHash,kt=!!T.extensions;let se=xn;T.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(se=r.toneMapping);const pe={shaderID:ot,shaderType:T.type,shaderName:T.name,vertexShader:Kt,fragmentShader:V,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:bt,instancingColor:bt&&z.instanceColor!==null,instancingMorph:bt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:yn,alphaToCoverage:!!T.alphaToCoverage,map:Ft,matcap:Qt,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:G,aoMap:ne,lightMap:Yt,bumpMap:$t,normalMap:xt,displacementMap:d&&ie,emissiveMap:At,normalMapObjectSpace:xt&&T.normalMapType===uc,normalMapTangentSpace:xt&&T.normalMapType===hc,metalnessMap:Pt,roughnessMap:w,anisotropy:v,anisotropyMap:rt,clearcoat:k,clearcoatMap:ht,clearcoatNormalMap:Lt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:J,iridescenceMap:lt,iridescenceThicknessMap:Bt,sheen:Z,sheenColorMap:wt,sheenRoughnessMap:dt,specularMap:Ct,specularColorMap:Ut,specularIntensityMap:Jt,transmission:St,transmissionMap:L,thicknessMap:et,gradientMap:X,opaque:T.transparent===!1&&T.blending===di&&T.alphaToCoverage===!1,alphaMap:Y,alphaTest:it,alphaHash:yt,combine:T.combine,mapUv:Ft&&_(T.map.channel),aoMapUv:ne&&_(T.aoMap.channel),lightMapUv:Yt&&_(T.lightMap.channel),bumpMapUv:$t&&_(T.bumpMap.channel),normalMapUv:xt&&_(T.normalMap.channel),displacementMapUv:ie&&_(T.displacementMap.channel),emissiveMapUv:At&&_(T.emissiveMap.channel),metalnessMapUv:Pt&&_(T.metalnessMap.channel),roughnessMapUv:w&&_(T.roughnessMap.channel),anisotropyMapUv:rt&&_(T.anisotropyMap.channel),clearcoatMapUv:ht&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(T.sheenRoughnessMap.channel),specularMapUv:Ct&&_(T.specularMap.channel),specularColorMapUv:Ut&&_(T.specularColorMap.channel),specularIntensityMapUv:Jt&&_(T.specularIntensityMap.channel),transmissionMapUv:L&&_(T.transmissionMap.channel),thicknessMapUv:et&&_(T.thicknessMap.channel),alphaMapUv:Y&&_(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(xt||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Ft||Y),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:Ft&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ge,flipSided:T.side===we,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function m(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)y.push(P),y.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(M(y,T),S(y,T),y.push(r.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function M(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function S(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),T.push(o.mask)}function E(T){const y=g[T.type];let P;if(y){const H=Ke[y];P=zc.clone(H.uniforms)}else P=T.uniforms;return P}function D(T,y){let P;for(let H=0,z=h.length;H<z;H++){const q=h[H];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new ep(r,y,T,s),h.push(P)),P}function A(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function C(T){l.remove(T)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:F}}function ap(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function op(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function So(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Mo(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function o(u,d,f,g,_,p){const m=a(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=a(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||op),n.length>1&&n.sort(d||So),i.length>1&&i.sort(d||So)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function lp(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Mo,r.set(n,[a])):i>=s.length?(a=new Mo,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function cp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new zt};break;case"SpotLight":e={position:new U,direction:new U,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function hp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let up=0;function dp(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function fp(r){const t=new cp,e=hp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,S=0,E=0,D=0,A=0,C=0;c.sort(dp);for(let T=0,y=c.length;T<y;T++){const P=c[T],H=P.color,z=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*z,u+=H.g*z,d+=H.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],z);C++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const j=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,j.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,E++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const j=P.shadow,G=e.get(P);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[m]=W,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==m||F.numDirectionalShadows!==M||F.numPointShadows!==S||F.numSpotShadows!==E||F.numSpotMaps!==D||F.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=m,F.numDirectionalShadows=M,F.numPointShadows=S,F.numSpotShadows=E,F.numSpotMaps=D,F.numLightProbes=C,n.version=up++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const S=c[m];if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),u++}else if(S.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function yo(r){const t=new fp(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function pp(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new yo(r),t.set(i,[o])):s>=a.length?(o=new yo(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class mp extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gp extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
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
}`;function xp(r,t,e){let n=new al;const i=new Dt,s=new Dt,a=new fe,o=new mp({depthPacking:cc}),l=new gp,c={},h=e.maxTextureSize,u={[an]:we,[we]:an,[Ge]:Ge},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:_p,fragmentShader:vp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let m=this.type;this.render=function(A,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const T=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),H=r.state;H.setBlending(vn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=m!==nn&&this.type===nn,q=m===nn&&this.type!==nn;for(let $=0,W=A.length;$<W;$++){const j=A[$],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ot=G.getFrameExtents();if(i.multiply(ot),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ot.x),i.x=s.x*ot.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ot.y),i.y=s.y*ot.y,G.mapSize.y=s.y)),G.map===null||z===!0||q===!0){const gt=this.type!==nn?{minFilter:Oe,magFilter:Oe}:{};G.map!==null&&G.map.dispose(),G.map=new kn(i.x,i.y,gt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ut=G.getViewportCount();for(let gt=0;gt<ut;gt++){const Ot=G.getViewport(gt);a.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),H.viewport(a),G.updateMatrices(j,gt),n=G.getFrustum(),E(C,F,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===nn&&M(G,F),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(T,y,P)};function M(A,C){const F=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,F,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,F,f,_,null)}function S(A,C,F,T){let y=null;const P=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=F.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=y.uuid,z=C.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let $=q[z];$===void 0&&($=y.clone(),q[z]=$,C.addEventListener("dispose",D)),y=$}if(y.visible=C.visible,y.wireframe=C.wireframe,T===nn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=r.properties.get(y);H.light=F}return y}function E(A,C,F,T,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const z=t.update(A),q=A.material;if(Array.isArray(q)){const $=z.groups;for(let W=0,j=$.length;W<j;W++){const G=$[W],ot=q[G.materialIndex];if(ot&&ot.visible){const ut=S(A,ot,T,y);A.onBeforeShadow(r,A,C,F,z,ut,G),r.renderBufferDirect(F,null,z,ut,A,G),A.onAfterShadow(r,A,C,F,z,ut,G)}}}else if(q.visible){const $=S(A,q,T,y);A.onBeforeShadow(r,A,C,F,z,$,null),r.renderBufferDirect(F,null,z,$,A,null),A.onAfterShadow(r,A,C,F,z,$,null)}}const H=A.children;for(let z=0,q=H.length;z<q;z++)E(H[z],C,F,T,y)}function D(A){A.target.removeEventListener("dispose",D);for(const F in c){const T=c[F],y=A.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function Sp(r){function t(){let L=!1;const et=new fe;let X=null;const Y=new fe(0,0,0,0);return{setMask:function(it){X!==it&&!L&&(r.colorMask(it,it,it,it),X=it)},setLocked:function(it){L=it},setClear:function(it,yt,kt,se,pe){pe===!0&&(it*=se,yt*=se,kt*=se),et.set(it,yt,kt,se),Y.equals(et)===!1&&(r.clearColor(it,yt,kt,se),Y.copy(et))},reset:function(){L=!1,X=null,Y.set(-1,0,0,0)}}}function e(){let L=!1,et=null,X=null,Y=null;return{setTest:function(it){it?mt(r.DEPTH_TEST):ct(r.DEPTH_TEST)},setMask:function(it){et!==it&&!L&&(r.depthMask(it),et=it)},setFunc:function(it){if(X!==it){switch(it){case Xl:r.depthFunc(r.NEVER);break;case ql:r.depthFunc(r.ALWAYS);break;case Yl:r.depthFunc(r.LESS);break;case bs:r.depthFunc(r.LEQUAL);break;case Kl:r.depthFunc(r.EQUAL);break;case $l:r.depthFunc(r.GEQUAL);break;case Zl:r.depthFunc(r.GREATER);break;case jl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}X=it}},setLocked:function(it){L=it},setClear:function(it){Y!==it&&(r.clearDepth(it),Y=it)},reset:function(){L=!1,et=null,X=null,Y=null}}}function n(){let L=!1,et=null,X=null,Y=null,it=null,yt=null,kt=null,se=null,pe=null;return{setTest:function(Ht){L||(Ht?mt(r.STENCIL_TEST):ct(r.STENCIL_TEST))},setMask:function(Ht){et!==Ht&&!L&&(r.stencilMask(Ht),et=Ht)},setFunc:function(Ht,Ze,qe){(X!==Ht||Y!==Ze||it!==qe)&&(r.stencilFunc(Ht,Ze,qe),X=Ht,Y=Ze,it=qe)},setOp:function(Ht,Ze,qe){(yt!==Ht||kt!==Ze||se!==qe)&&(r.stencilOp(Ht,Ze,qe),yt=Ht,kt=Ze,se=qe)},setLocked:function(Ht){L=Ht},setClear:function(Ht){pe!==Ht&&(r.clearStencil(Ht),pe=Ht)},reset:function(){L=!1,et=null,X=null,Y=null,it=null,yt=null,kt=null,se=null,pe=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,S=null,E=null,D=null,A=new zt(0,0,0),C=0,F=!1,T=null,y=null,P=null,H=null,z=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=W>=2);let G=null,ot={};const ut=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),Ot=new fe().fromArray(ut),Kt=new fe().fromArray(gt);function V(L,et,X,Y){const it=new Uint8Array(4),yt=r.createTexture();r.bindTexture(L,yt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<X;kt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(et,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,it):r.texImage2D(et+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,it);return yt}const Q={};Q[r.TEXTURE_2D]=V(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=V(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=V(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=V(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),mt(r.DEPTH_TEST),s.setFunc(bs),$t(!1),xt(Aa),mt(r.CULL_FACE),ne(vn);function mt(L){c[L]!==!0&&(r.enable(L),c[L]=!0)}function ct(L){c[L]!==!1&&(r.disable(L),c[L]=!1)}function bt(L,et){return h[L]!==et?(r.bindFramebuffer(L,et),h[L]=et,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=et),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=et),!0):!1}function Rt(L,et){let X=d,Y=!1;if(L){X=u.get(et),X===void 0&&(X=[],u.set(et,X));const it=L.textures;if(X.length!==it.length||X[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,kt=it.length;yt<kt;yt++)X[yt]=r.COLOR_ATTACHMENT0+yt;X.length=it.length,Y=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Y=!0);Y&&r.drawBuffers(X)}function Ft(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const Qt={[Dn]:r.FUNC_ADD,[Cl]:r.FUNC_SUBTRACT,[Rl]:r.FUNC_REVERSE_SUBTRACT};Qt[Pl]=r.MIN,Qt[Dl]=r.MAX;const R={[Ll]:r.ZERO,[Il]:r.ONE,[Nl]:r.SRC_COLOR,[br]:r.SRC_ALPHA,[zl]:r.SRC_ALPHA_SATURATE,[Bl]:r.DST_COLOR,[Fl]:r.DST_ALPHA,[Ul]:r.ONE_MINUS_SRC_COLOR,[Tr]:r.ONE_MINUS_SRC_ALPHA,[kl]:r.ONE_MINUS_DST_COLOR,[Ol]:r.ONE_MINUS_DST_ALPHA,[Hl]:r.CONSTANT_COLOR,[Gl]:r.ONE_MINUS_CONSTANT_COLOR,[Vl]:r.CONSTANT_ALPHA,[Wl]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(L,et,X,Y,it,yt,kt,se,pe,Ht){if(L===vn){g===!0&&(ct(r.BLEND),g=!1);return}if(g===!1&&(mt(r.BLEND),g=!0),L!==Al){if(L!==_||Ht!==F){if((p!==Dn||S!==Dn)&&(r.blendEquation(r.FUNC_ADD),p=Dn,S=Dn),Ht)switch(L){case di:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ca:r.blendFunc(r.ONE,r.ONE);break;case Ra:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case di:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ca:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ra:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,M=null,E=null,D=null,A.set(0,0,0),C=0,_=L,F=Ht}return}it=it||et,yt=yt||X,kt=kt||Y,(et!==p||it!==S)&&(r.blendEquationSeparate(Qt[et],Qt[it]),p=et,S=it),(X!==m||Y!==M||yt!==E||kt!==D)&&(r.blendFuncSeparate(R[X],R[Y],R[yt],R[kt]),m=X,M=Y,E=yt,D=kt),(se.equals(A)===!1||pe!==C)&&(r.blendColor(se.r,se.g,se.b,pe),A.copy(se),C=pe),_=L,F=!1}function Yt(L,et){L.side===Ge?ct(r.CULL_FACE):mt(r.CULL_FACE);let X=L.side===we;et&&(X=!X),$t(X),L.blending===di&&L.transparent===!1?ne(vn):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),At(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function xt(L){L!==bl?(mt(r.CULL_FACE),L!==y&&(L===Aa?r.cullFace(r.BACK):L===Tl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ct(r.CULL_FACE),y=L}function ie(L){L!==P&&($&&r.lineWidth(L),P=L)}function At(L,et,X){L?(mt(r.POLYGON_OFFSET_FILL),(H!==et||z!==X)&&(r.polygonOffset(et,X),H=et,z=X)):ct(r.POLYGON_OFFSET_FILL)}function Pt(L){L?mt(r.SCISSOR_TEST):ct(r.SCISSOR_TEST)}function w(L){L===void 0&&(L=r.TEXTURE0+q-1),G!==L&&(r.activeTexture(L),G=L)}function v(L,et,X){X===void 0&&(G===null?X=r.TEXTURE0+q-1:X=G);let Y=ot[X];Y===void 0&&(Y={type:void 0,texture:void 0},ot[X]=Y),(Y.type!==L||Y.texture!==et)&&(G!==X&&(r.activeTexture(X),G=X),r.bindTexture(L,et||Q[L]),Y.type=L,Y.texture=et)}function k(){const L=ot[G];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){Ot.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ot.copy(L))}function dt(L){Kt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Kt.copy(L))}function Ct(L,et){let X=l.get(et);X===void 0&&(X=new WeakMap,l.set(et,X));let Y=X.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(et,L.name),X.set(L,Y))}function Ut(L,et){const Y=l.get(et).get(L);o.get(et)!==Y&&(r.uniformBlockBinding(et,Y,L.__bindingPointIndex),o.set(et,Y))}function Jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,ot={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,S=null,E=null,D=null,A=new zt(0,0,0),C=0,F=!1,T=null,y=null,P=null,H=null,z=null,Ot.set(0,0,r.canvas.width,r.canvas.height),Kt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:mt,disable:ct,bindFramebuffer:bt,drawBuffers:Rt,useProgram:Ft,setBlending:ne,setMaterial:Yt,setFlipSided:$t,setCullFace:xt,setLineWidth:ie,setPolygonOffset:At,setScissorTest:Pt,activeTexture:w,bindTexture:v,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:lt,texImage3D:Bt,updateUBOMapping:Ct,uniformBlockBinding:Ut,texStorage2D:Lt,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:wt,viewport:dt,reset:Jt}}function Eo(r,t,e,n){const i=Mp(n);switch(e){case Go:return r*t;case Wo:return r*t;case Xo:return r*t*2;case qo:return r*t/i.components*i.byteLength;case ha:return r*t/i.components*i.byteLength;case Yo:return r*t*2/i.components*i.byteLength;case ua:return r*t*2/i.components*i.byteLength;case Vo:return r*t*3/i.components*i.byteLength;case Xe:return r*t*4/i.components*i.byteLength;case da:return r*t*4/i.components*i.byteLength;case gs:case _s:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vs:case xs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dr:case Ir:return Math.max(r,16)*Math.max(t,8)/4;case Pr:case Lr:return Math.max(r,8)*Math.max(t,8)/2;case Nr:case Ur:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Or:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case kr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case zr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case qr:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case $r:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Zr:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ss:case jr:case Jr:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ko:case Qr:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ta:case ea:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mp(r){switch(r){case on:case ko:return{byteLength:1,components:1};case Ii:case zo:case Fi:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case Bn:case oa:case sn:return{byteLength:4,components:1};case Ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function yp(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Rs("canvas")}function _(w,v,k){let K=1;const J=Pt(w);if((J.width>k||J.height>k)&&(K=k/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(K*J.width),St=Math.floor(K*J.height);u===void 0&&(u=g(Z,St));const rt=v?g(Z,St):u;return rt.width=Z,rt.height=St,rt.getContext("2d").drawImage(w,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+St+")."),rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==Oe&&w.minFilter!==Ve}function m(w){r.generateMipmap(w)}function M(w,v,k,K,J=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=v;if(v===r.RED&&(k===r.FLOAT&&(Z=r.R32F),k===r.HALF_FLOAT&&(Z=r.R16F),k===r.UNSIGNED_BYTE&&(Z=r.R8)),v===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.R8UI),k===r.UNSIGNED_SHORT&&(Z=r.R16UI),k===r.UNSIGNED_INT&&(Z=r.R32UI),k===r.BYTE&&(Z=r.R8I),k===r.SHORT&&(Z=r.R16I),k===r.INT&&(Z=r.R32I)),v===r.RG&&(k===r.FLOAT&&(Z=r.RG32F),k===r.HALF_FLOAT&&(Z=r.RG16F),k===r.UNSIGNED_BYTE&&(Z=r.RG8)),v===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Z=r.RG8UI),k===r.UNSIGNED_SHORT&&(Z=r.RG16UI),k===r.UNSIGNED_INT&&(Z=r.RG32UI),k===r.BYTE&&(Z=r.RG8I),k===r.SHORT&&(Z=r.RG16I),k===r.INT&&(Z=r.RG32I)),v===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),v===r.RGBA){const St=J?Ts:qt.getTransfer(K);k===r.FLOAT&&(Z=r.RGBA32F),k===r.HALF_FLOAT&&(Z=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Z=St===jt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(w,v){let k;return w?v===null||v===Bn||v===xi?k=r.DEPTH24_STENCIL8:v===sn?k=r.DEPTH32F_STENCIL8:v===Ii&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bn||v===xi?k=r.DEPTH_COMPONENT24:v===sn?k=r.DEPTH_COMPONENT32F:v===Ii&&(k=r.DEPTH_COMPONENT16),k}function E(w,v){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Oe&&w.minFilter!==Ve?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function D(w){const v=w.target;v.removeEventListener("dispose",D),C(v),v.isVideoTexture&&h.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),T(v)}function C(w){const v=n.get(w);if(v.__webglInit===void 0)return;const k=w.source,K=d.get(k);if(K){const J=K[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(w),Object.keys(K).length===0&&d.delete(k)}n.remove(w)}function F(w){const v=n.get(w);r.deleteTexture(v.__webglTexture);const k=w.source,K=d.get(k);delete K[v.__cacheKey],a.memory.textures--}function T(w){const v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let J=0;J<v.__webglFramebuffer[K].length;J++)r.deleteFramebuffer(v.__webglFramebuffer[K][J]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=w.textures;for(let K=0,J=k.length;K<J;K++){const Z=n.get(k[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(w)}let y=0;function P(){y=0}function H(){const w=y;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),y+=1,w}function z(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function q(w,v){const k=n.get(w);if(w.isVideoTexture&&ie(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(k,w,v);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+v)}function $(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Kt(k,w,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+v)}function W(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){Kt(k,w,v);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+v)}function j(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){V(k,w,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+v)}const G={[Cr]:r.REPEAT,[Fn]:r.CLAMP_TO_EDGE,[Rr]:r.MIRRORED_REPEAT},ot={[Oe]:r.NEAREST,[oc]:r.NEAREST_MIPMAP_NEAREST,[Wi]:r.NEAREST_MIPMAP_LINEAR,[Ve]:r.LINEAR,[Vs]:r.LINEAR_MIPMAP_NEAREST,[On]:r.LINEAR_MIPMAP_LINEAR},ut={[dc]:r.NEVER,[vc]:r.ALWAYS,[fc]:r.LESS,[$o]:r.LEQUAL,[pc]:r.EQUAL,[_c]:r.GEQUAL,[mc]:r.GREATER,[gc]:r.NOTEQUAL};function gt(w,v){if(v.type===sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ve||v.magFilter===Vs||v.magFilter===Wi||v.magFilter===On||v.minFilter===Ve||v.minFilter===Vs||v.minFilter===Wi||v.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,G[v.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,G[v.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,G[v.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ot[v.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Oe||v.minFilter!==Wi&&v.minFilter!==On||v.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ot(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",D));const K=v.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Z=z(v);if(Z!==w.__cacheKey){J[Z]===void 0&&(J[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[Z].usedTimes++;const St=J[w.__cacheKey];St!==void 0&&(J[w.__cacheKey].usedTimes--,St.usedTimes===0&&F(v)),w.__cacheKey=Z,w.__webglTexture=J[Z].texture}return k}function Kt(w,v,k){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);const J=Ot(w,v),Z=v.source;e.bindTexture(K,w.__webglTexture,r.TEXTURE0+k);const St=n.get(Z);if(Z.version!==St.__version||J===!0){e.activeTexture(r.TEXTURE0+k);const rt=qt.getPrimaries(qt.workingColorSpace),ht=v.colorSpace===_n?null:qt.getPrimaries(v.colorSpace),Lt=v.colorSpace===_n||rt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let tt=_(v.image,!1,i.maxTextureSize);tt=At(v,tt);const lt=s.convert(v.format,v.colorSpace),Bt=s.convert(v.type);let wt=M(v.internalFormat,lt,Bt,v.colorSpace,v.isVideoTexture);gt(K,v);let dt;const Ct=v.mipmaps,Ut=v.isVideoTexture!==!0,Jt=St.__version===void 0||J===!0,L=Z.dataReady,et=E(v,tt);if(v.isDepthTexture)wt=S(v.format===Si,v.type),Jt&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,wt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,wt,tt.width,tt.height,0,lt,Bt,null));else if(v.isDataTexture)if(Ct.length>0){Ut&&Jt&&e.texStorage2D(r.TEXTURE_2D,et,wt,Ct[0].width,Ct[0].height);for(let X=0,Y=Ct.length;X<Y;X++)dt=Ct[X],Ut?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,dt.width,dt.height,lt,Bt,dt.data):e.texImage2D(r.TEXTURE_2D,X,wt,dt.width,dt.height,0,lt,Bt,dt.data);v.generateMipmaps=!1}else Ut?(Jt&&e.texStorage2D(r.TEXTURE_2D,et,wt,tt.width,tt.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,lt,Bt,tt.data)):e.texImage2D(r.TEXTURE_2D,0,wt,tt.width,tt.height,0,lt,Bt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&Jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,wt,Ct[0].width,Ct[0].height,tt.depth);for(let X=0,Y=Ct.length;X<Y;X++)if(dt=Ct[X],v.format!==Xe)if(lt!==null)if(Ut){if(L)if(v.layerUpdates.size>0){const it=Eo(dt.width,dt.height,v.format,v.type);for(const yt of v.layerUpdates){const kt=dt.data.subarray(yt*it/dt.data.BYTES_PER_ELEMENT,(yt+1)*it/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,yt,dt.width,dt.height,1,lt,kt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,dt.width,dt.height,tt.depth,lt,dt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,wt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,dt.width,dt.height,tt.depth,lt,Bt,dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,wt,dt.width,dt.height,tt.depth,0,lt,Bt,dt.data)}else{Ut&&Jt&&e.texStorage2D(r.TEXTURE_2D,et,wt,Ct[0].width,Ct[0].height);for(let X=0,Y=Ct.length;X<Y;X++)dt=Ct[X],v.format!==Xe?lt!==null?Ut?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,dt.width,dt.height,lt,dt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,dt.width,dt.height,lt,Bt,dt.data):e.texImage2D(r.TEXTURE_2D,X,wt,dt.width,dt.height,0,lt,Bt,dt.data)}else if(v.isDataArrayTexture)if(Ut){if(Jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,wt,tt.width,tt.height,tt.depth),L)if(v.layerUpdates.size>0){const X=Eo(tt.width,tt.height,v.format,v.type);for(const Y of v.layerUpdates){const it=tt.data.subarray(Y*X/tt.data.BYTES_PER_ELEMENT,(Y+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,tt.width,tt.height,1,lt,Bt,it)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Bt,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,lt,Bt,tt.data);else if(v.isData3DTexture)Ut?(Jt&&e.texStorage3D(r.TEXTURE_3D,et,wt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Bt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,lt,Bt,tt.data);else if(v.isFramebufferTexture){if(Jt)if(Ut)e.texStorage2D(r.TEXTURE_2D,et,wt,tt.width,tt.height);else{let X=tt.width,Y=tt.height;for(let it=0;it<et;it++)e.texImage2D(r.TEXTURE_2D,it,wt,X,Y,0,lt,Bt,null),X>>=1,Y>>=1}}else if(Ct.length>0){if(Ut&&Jt){const X=Pt(Ct[0]);e.texStorage2D(r.TEXTURE_2D,et,wt,X.width,X.height)}for(let X=0,Y=Ct.length;X<Y;X++)dt=Ct[X],Ut?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,lt,Bt,dt):e.texImage2D(r.TEXTURE_2D,X,wt,lt,Bt,dt);v.generateMipmaps=!1}else if(Ut){if(Jt){const X=Pt(tt);e.texStorage2D(r.TEXTURE_2D,et,wt,X.width,X.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,Bt,tt)}else e.texImage2D(r.TEXTURE_2D,0,wt,lt,Bt,tt);p(v)&&m(K),St.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function V(w,v,k){if(v.image.length!==6)return;const K=Ot(w,v),J=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+k);const Z=n.get(J);if(J.version!==Z.__version||K===!0){e.activeTexture(r.TEXTURE0+k);const St=qt.getPrimaries(qt.workingColorSpace),rt=v.colorSpace===_n?null:qt.getPrimaries(v.colorSpace),ht=v.colorSpace===_n||St===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Lt=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,lt=[];for(let Y=0;Y<6;Y++)!Lt&&!tt?lt[Y]=_(v.image[Y],!0,i.maxCubemapSize):lt[Y]=tt?v.image[Y].image:v.image[Y],lt[Y]=At(v,lt[Y]);const Bt=lt[0],wt=s.convert(v.format,v.colorSpace),dt=s.convert(v.type),Ct=M(v.internalFormat,wt,dt,v.colorSpace),Ut=v.isVideoTexture!==!0,Jt=Z.__version===void 0||K===!0,L=J.dataReady;let et=E(v,Bt);gt(r.TEXTURE_CUBE_MAP,v);let X;if(Lt){Ut&&Jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,Ct,Bt.width,Bt.height);for(let Y=0;Y<6;Y++){X=lt[Y].mipmaps;for(let it=0;it<X.length;it++){const yt=X[it];v.format!==Xe?wt!==null?Ut?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,yt.width,yt.height,wt,yt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ct,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,yt.width,yt.height,wt,dt,yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ct,yt.width,yt.height,0,wt,dt,yt.data)}}}else{if(X=v.mipmaps,Ut&&Jt){X.length>0&&et++;const Y=Pt(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,Ct,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lt[Y].width,lt[Y].height,wt,dt,lt[Y].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ct,lt[Y].width,lt[Y].height,0,wt,dt,lt[Y].data);for(let it=0;it<X.length;it++){const kt=X[it].image[Y].image;Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,kt.width,kt.height,wt,dt,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ct,kt.width,kt.height,0,wt,dt,kt.data)}}else{Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,wt,dt,lt[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ct,wt,dt,lt[Y]);for(let it=0;it<X.length;it++){const yt=X[it];Ut?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,wt,dt,yt.image[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ct,wt,dt,yt.image[Y])}}}p(v)&&m(r.TEXTURE_CUBE_MAP),Z.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Q(w,v,k,K,J,Z){const St=s.convert(k.format,k.colorSpace),rt=s.convert(k.type),ht=M(k.internalFormat,St,rt,k.colorSpace);if(!n.get(v).__hasExternalTextures){const tt=Math.max(1,v.width>>Z),lt=Math.max(1,v.height>>Z);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,ht,tt,lt,v.depth,0,St,rt,null):e.texImage2D(J,Z,ht,tt,lt,0,St,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),xt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,J,n.get(k).__webglTexture,0,$t(v)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,J,n.get(k).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(w,v,k){if(r.bindRenderbuffer(r.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,J=K&&K.isDepthTexture?K.type:null,Z=S(v.stencilBuffer,J),St=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=$t(v);xt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,Z,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Z,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Z,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,w)}else{const K=v.textures;for(let J=0;J<K.length;J++){const Z=K[J],St=s.convert(Z.format,Z.colorSpace),rt=s.convert(Z.type),ht=M(Z.internalFormat,St,rt,Z.colorSpace),Lt=$t(v);k&&xt(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,ht,v.width,v.height):xt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Lt,ht,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ht,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const K=n.get(v.depthTexture).__webglTexture,J=$t(v);if(v.depthTexture.format===fi)xt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(v.depthTexture.format===Si)xt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function bt(w){const v=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=K}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ct(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),mt(v.__webglDepthbuffer[K],w,!1);else{const J=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),mt(v.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(w,v,k){const K=n.get(w);v!==void 0&&Q(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&bt(w)}function Ft(w){const v=w.texture,k=n.get(w),K=n.get(v);w.addEventListener("dispose",A);const J=w.textures,Z=w.isWebGLCubeRenderTarget===!0,St=J.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let ht=0;ht<v.mipmaps.length;ht++)k.__webglFramebuffer[rt][ht]=r.createFramebuffer()}else k.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)k.__webglFramebuffer[rt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(St)for(let rt=0,ht=J.length;rt<ht;rt++){const Lt=n.get(J[rt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&xt(w)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const ht=J[rt];k.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);const Lt=s.convert(ht.format,ht.colorSpace),tt=s.convert(ht.type),lt=M(ht.internalFormat,Lt,tt,ht.colorSpace,w.isXRRenderTarget===!0),Bt=$t(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,lt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,k.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),gt(r.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)Q(k.__webglFramebuffer[rt][ht],w,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else Q(k.__webglFramebuffer[rt],w,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(v)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let rt=0,ht=J.length;rt<ht;rt++){const Lt=J[rt],tt=n.get(Lt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),gt(r.TEXTURE_2D,Lt),Q(k.__webglFramebuffer,w,Lt,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,0),p(Lt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),gt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)Q(k.__webglFramebuffer[ht],w,v,r.COLOR_ATTACHMENT0,rt,ht);else Q(k.__webglFramebuffer,w,v,r.COLOR_ATTACHMENT0,rt,0);p(v)&&m(rt),e.unbindTexture()}w.depthBuffer&&bt(w)}function Qt(w){const v=w.textures;for(let k=0,K=v.length;k<K;k++){const J=v[k];if(p(J)){const Z=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,St=n.get(J).__webglTexture;e.bindTexture(Z,St),m(Z),e.unbindTexture()}}}const R=[],ne=[];function Yt(w){if(w.samples>0){if(xt(w)===!1){const v=w.textures,k=w.width,K=w.height;let J=r.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(w),rt=v.length>1;if(rt)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[ht]);const Lt=n.get(v[ht]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Lt,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,J,r.NEAREST),l===!0&&(R.length=0,ne.length=0,R.push(r.COLOR_ATTACHMENT0+ht),w.depthBuffer&&w.resolveDepthBuffer===!1&&(R.push(Z),ne.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,R))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,St.__webglColorRenderbuffer[ht]);const Lt=n.get(v[ht]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,Lt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function $t(w){return Math.min(i.maxSamples,w.samples)}function xt(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function At(w,v){const k=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==yn&&k!==_n&&(qt.getTransfer(k)===jt?(K!==Xe||J!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Rt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=xt}function Ep(r,t){function e(n,i=_n){let s;const a=qt.getTransfer(i);if(n===on)return r.UNSIGNED_BYTE;if(n===la)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ko)return r.BYTE;if(n===zo)return r.SHORT;if(n===Ii)return r.UNSIGNED_SHORT;if(n===oa)return r.INT;if(n===Bn)return r.UNSIGNED_INT;if(n===sn)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===Go)return r.ALPHA;if(n===Vo)return r.RGB;if(n===Xe)return r.RGBA;if(n===Wo)return r.LUMINANCE;if(n===Xo)return r.LUMINANCE_ALPHA;if(n===fi)return r.DEPTH_COMPONENT;if(n===Si)return r.DEPTH_STENCIL;if(n===qo)return r.RED;if(n===ha)return r.RED_INTEGER;if(n===Yo)return r.RG;if(n===ua)return r.RG_INTEGER;if(n===da)return r.RGBA_INTEGER;if(n===gs||n===_s||n===vs||n===xs)if(a===jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pr||n===Dr||n===Lr||n===Ir)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ir)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===Ur||n===Fr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nr||n===Ur)return a===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Or||n===Br||n===kr||n===zr||n===Hr||n===Gr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===Kr||n===$r||n===Zr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Or)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Br)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$r)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zr)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ss||n===jr||n===Jr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ss)return a===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===Qr||n===ta||n===ea)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ss)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class bp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ds extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tp={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ap=`
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

}`;class Cp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:wp,fragmentShader:Ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rp extends Hn{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Cp,p=e.getContextAttributes();let m=null,M=null;const S=[],E=[],D=new Dt;let A=null;const C=new Fe;C.layers.enable(1),C.viewport=new fe;const F=new Fe;F.layers.enable(2),F.viewport=new fe;const T=[C,F],y=new bp;y.layers.enable(1),y.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=S[V];return Q===void 0&&(Q=new mr,S[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=S[V];return Q===void 0&&(Q=new mr,S[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=S[V];return Q===void 0&&(Q=new mr,S[V]=Q),Q.getHandSpace()};function z(V){const Q=E.indexOf(V.inputSource);if(Q===-1)return;const mt=S[Q];mt!==void 0&&(mt.update(V.inputSource,V.frame,c||a),mt.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",$);for(let V=0;V<S.length;V++){const Q=E[V];Q!==null&&(E[V]=null,S[V].disconnect(Q))}P=null,H=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new kn(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:on,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,mt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Si:fi,mt=p.stencil?xi:Bn);const bt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new kn(d.textureWidth,d.textureHeight,{format:Xe,type:on,depthTexture:new ll(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(V){for(let Q=0;Q<V.removed.length;Q++){const mt=V.removed[Q],ct=E.indexOf(mt);ct>=0&&(E[ct]=null,S[ct].disconnect(mt))}for(let Q=0;Q<V.added.length;Q++){const mt=V.added[Q];let ct=E.indexOf(mt);if(ct===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=E.length){E.push(mt),ct=Rt;break}else if(E[Rt]===null){E[Rt]=mt,ct=Rt;break}if(ct===-1)break}const bt=S[ct];bt&&bt.connect(mt)}}const W=new U,j=new U;function G(V,Q,mt){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(mt.matrixWorld);const ct=W.distanceTo(j),bt=Q.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),Qt=bt[14]/(bt[10]+1),R=(bt[9]+1)/bt[5],ne=(bt[9]-1)/bt[5],Yt=(bt[8]-1)/bt[0],$t=(Rt[8]+1)/Rt[0],xt=Ft*Yt,ie=Ft*$t,At=ct/(-Yt+$t),Pt=At*-Yt;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Pt),V.translateZ(At),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),bt[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=Ft+At,v=Qt+At,k=xt-Pt,K=ie+(ct-Pt),J=R*Qt/v*w,Z=ne*Qt/v*w;V.projectionMatrix.makePerspective(k,K,J,Z,w,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ot(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let Q=V.near,mt=V.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),y.near=F.near=C.near=Q,y.far=F.far=C.far=mt,(P!==y.near||H!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,H=y.far);const ct=V.parent,bt=y.cameras;ot(y,ct);for(let Rt=0;Rt<bt.length;Rt++)ot(bt[Rt],ct);bt.length===2?G(y,C,F):y.projectionMatrix.copy(C.projectionMatrix),ut(V,y,ct)};function ut(V,Q,mt){mt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=na*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let gt=null;function Ot(V,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ct=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let Rt=0;Rt<mt.length;Rt++){const Ft=mt[Rt];let Qt=null;if(f!==null)Qt=f.getViewport(Ft);else{const ne=u.getViewSubImage(d,Ft);Qt=ne.viewport,Rt===0&&(t.setRenderTargetTextures(M,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(M))}let R=T[Rt];R===void 0&&(R=new Fe,R.layers.enable(Rt),R.viewport=new fe,T[Rt]=R),R.matrix.fromArray(Ft.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ft.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Rt===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(R)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Rt=u.getDepthInformation(mt[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,i.renderState)}}for(let mt=0;mt<S.length;mt++){const ct=E[mt],bt=S[mt];ct!==null&&bt!==void 0&&bt.update(ct,Q,c||a)}gt&&gt(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Kt=new ol;Kt.setAnimationLoop(Ot),this.setAnimationLoop=function(V){gt=V},this.dispose=function(){}}}const Rn=new ln,Pp=new oe;function Dp(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,il(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,S,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===we&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===we&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),S=M.envMap,E=M.envMapRotation;S&&(p.envMap.value=S,Rn.copy(E),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),p.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Rn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===we&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lp(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const E=S.program;n.uniformBlockBinding(M,E)}function c(M,S){let E=i[M.id];E===void 0&&(g(M),E=h(M),i[M.id]=E,M.addEventListener("dispose",p));const D=S.program;n.updateUBOMapping(M,D);const A=t.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function h(M){const S=u();M.__bindingPointIndex=S;const E=r.createBuffer(),D=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,D,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,E),E}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],E=M.uniforms,D=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,C=E.length;A<C;A++){const F=Array.isArray(E[A])?E[A]:[E[A]];for(let T=0,y=F.length;T<y;T++){const P=F[T];if(f(P,A,T,D)===!0){const H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let $=0;$<z.length;$++){const W=z[$],j=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,H+q,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,E,D){const A=M.value,C=S+"_"+E;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{const F=D[C];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return D[C]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(M){const S=M.uniforms;let E=0;const D=16;for(let C=0,F=S.length;C<F;C++){const T=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,P=T.length;y<P;y++){const H=T[y],z=Array.isArray(H.value)?H.value:[H.value];for(let q=0,$=z.length;q<$;q++){const W=z[q],j=_(W),G=E%D,ot=G%j.boundary,ut=G+ot;E+=ot,ut!==0&&D-ut<j.storage&&(E+=D-ut),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=j.storage}}}const A=E%D;return A>0&&(E+=D-A),M.__size=E,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Ip{constructor(t={}){const{canvas:e=Mc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=xn,this.toneMappingExposure=1;const S=this;let E=!1,D=0,A=0,C=null,F=-1,T=null;const y=new fe,P=new fe;let H=null;const z=new zt(0);let q=0,$=e.width,W=e.height,j=1,G=null,ot=null;const ut=new fe(0,0,$,W),gt=new fe(0,0,$,W);let Ot=!1;const Kt=new al;let V=!1,Q=!1;const mt=new oe,ct=new U,bt=new fe,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Qt(){return C===null?j:1}let R=n;function ne(x,I){return e.getContext(x,I)}try{const x={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",it,!1),R===null){const I="webgl2";if(R=ne(I,x),R===null)throw ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Yt,$t,xt,ie,At,Pt,w,v,k,K,J,Z,St,rt,ht,Lt,tt,lt,Bt,wt,dt,Ct,Ut,Jt;function L(){Yt=new Bd(R),Yt.init(),Ct=new Ep(R,Yt),$t=new Dd(R,Yt,t,Ct),xt=new Sp(R),ie=new Hd(R),At=new ap,Pt=new yp(R,Yt,xt,At,$t,Ct,ie),w=new Id(S),v=new Od(S),k=new Yc(R),Ut=new Rd(R,k),K=new kd(R,k,ie,Ut),J=new Vd(R,K,k,ie),Bt=new Gd(R,$t,Pt),Lt=new Ld(At),Z=new rp(S,w,v,Yt,$t,Ut,Lt),St=new Dp(S,At),rt=new lp,ht=new pp(Yt),lt=new Cd(S,w,v,xt,J,d,l),tt=new xp(S,J,$t),Jt=new Lp(R,ie,$t,xt),wt=new Pd(R,Yt,ie),dt=new zd(R,Yt,ie),ie.programs=Z.programs,S.capabilities=$t,S.extensions=Yt,S.properties=At,S.renderLists=rt,S.shadowMap=tt,S.state=xt,S.info=ie}L();const et=new Rp(S,R);this.xr=et,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=Yt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Yt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize($,W,!1))},this.getSize=function(x){return x.set($,W)},this.setSize=function(x,I,O=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,W=I,e.width=Math.floor(x*j),e.height=Math.floor(I*j),O===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set($*j,W*j).floor()},this.setDrawingBufferSize=function(x,I,O){$=x,W=I,j=O,e.width=Math.floor(x*O),e.height=Math.floor(I*O),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(ut)},this.setViewport=function(x,I,O,B){x.isVector4?ut.set(x.x,x.y,x.z,x.w):ut.set(x,I,O,B),xt.viewport(y.copy(ut).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(gt)},this.setScissor=function(x,I,O,B){x.isVector4?gt.set(x.x,x.y,x.z,x.w):gt.set(x,I,O,B),xt.scissor(P.copy(gt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(x){xt.setScissorTest(Ot=x)},this.setOpaqueSort=function(x){G=x},this.setTransparentSort=function(x){ot=x},this.getClearColor=function(x){return x.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(x=!0,I=!0,O=!0){let B=0;if(x){let N=!1;if(C!==null){const nt=C.texture.format;N=nt===da||nt===ua||nt===ha}if(N){const nt=C.texture.type,at=nt===on||nt===Bn||nt===Ii||nt===xi||nt===la||nt===ca,ft=lt.getClearColor(),pt=lt.getClearAlpha(),Et=ft.r,Tt=ft.g,_t=ft.b;at?(f[0]=Et,f[1]=Tt,f[2]=_t,f[3]=pt,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Et,g[1]=Tt,g[2]=_t,g[3]=pt,R.clearBufferiv(R.COLOR,0,g))}else B|=R.COLOR_BUFFER_BIT}I&&(B|=R.DEPTH_BUFFER_BIT),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",it,!1),rt.dispose(),ht.dispose(),At.dispose(),w.dispose(),v.dispose(),J.dispose(),Ut.dispose(),Jt.dispose(),Z.dispose(),et.dispose(),et.removeEventListener("sessionstart",qe),et.removeEventListener("sessionend",Sa),En.stop()};function X(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const x=ie.autoReset,I=tt.enabled,O=tt.autoUpdate,B=tt.needsUpdate,N=tt.type;L(),ie.autoReset=x,tt.enabled=I,tt.autoUpdate=O,tt.needsUpdate=B,tt.type=N}function it(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function yt(x){const I=x.target;I.removeEventListener("dispose",yt),kt(I)}function kt(x){se(x),At.remove(x)}function se(x){const I=At.get(x).programs;I!==void 0&&(I.forEach(function(O){Z.releaseProgram(O)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,O,B,N,nt){I===null&&(I=Rt);const at=N.isMesh&&N.matrixWorld.determinant()<0,ft=pl(x,I,O,B,N);xt.setMaterial(B,at);let pt=O.index,Et=1;if(B.wireframe===!0){if(pt=K.getWireframeAttribute(O),pt===void 0)return;Et=2}const Tt=O.drawRange,_t=O.attributes.position;let Gt=Tt.start*Et,te=(Tt.start+Tt.count)*Et;nt!==null&&(Gt=Math.max(Gt,nt.start*Et),te=Math.min(te,(nt.start+nt.count)*Et)),pt!==null?(Gt=Math.max(Gt,0),te=Math.min(te,pt.count)):_t!=null&&(Gt=Math.max(Gt,0),te=Math.min(te,_t.count));const ee=te-Gt;if(ee<0||ee===1/0)return;Ut.setup(N,B,ft,O,pt);let Re,Vt=wt;if(pt!==null&&(Re=k.get(pt),Vt=dt,Vt.setIndex(Re)),N.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*Qt()),Vt.setMode(R.LINES)):Vt.setMode(R.TRIANGLES);else if(N.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),xt.setLineWidth(vt*Qt()),N.isLineSegments?Vt.setMode(R.LINES):N.isLineLoop?Vt.setMode(R.LINE_LOOP):Vt.setMode(R.LINE_STRIP)}else N.isPoints?Vt.setMode(R.POINTS):N.isSprite&&Vt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Vt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const vt=N._multiDrawStarts,me=N._multiDrawCounts,Wt=N._multiDrawCount,Be=pt?k.get(pt).bytesPerElement:1,Gn=At.get(B).currentProgram.getUniforms();for(let Pe=0;Pe<Wt;Pe++)Gn.setValue(R,"_gl_DrawID",Pe),Vt.render(vt[Pe]/Be,me[Pe])}else if(N.isInstancedMesh)Vt.renderInstances(Gt,ee,N.count);else if(O.isInstancedBufferGeometry){const vt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,me=Math.min(O.instanceCount,vt);Vt.renderInstances(Gt,ee,me)}else Vt.render(Gt,ee)};function pe(x,I,O){x.transparent===!0&&x.side===Ge&&x.forceSinglePass===!1?(x.side=we,x.needsUpdate=!0,Gi(x,I,O),x.side=an,x.needsUpdate=!0,Gi(x,I,O),x.side=Ge):Gi(x,I,O)}this.compile=function(x,I,O=null){O===null&&(O=x),p=ht.get(O),p.init(I),M.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==O&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return x.traverse(function(N){const nt=N.material;if(nt)if(Array.isArray(nt))for(let at=0;at<nt.length;at++){const ft=nt[at];pe(ft,O,N),B.add(ft)}else pe(nt,O,N),B.add(nt)}),M.pop(),p=null,B},this.compileAsync=function(x,I,O=null){const B=this.compile(x,I,O);return new Promise(N=>{function nt(){if(B.forEach(function(at){At.get(at).currentProgram.isReady()&&B.delete(at)}),B.size===0){N(x);return}setTimeout(nt,10)}Yt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ht=null;function Ze(x){Ht&&Ht(x)}function qe(){En.stop()}function Sa(){En.start()}const En=new ol;En.setAnimationLoop(Ze),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(x){Ht=x,et.setAnimationLoop(x),x===null?En.stop():En.start()},et.addEventListener("sessionstart",qe),et.addEventListener("sessionend",Sa),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,C),p=ht.get(x,M.length),p.init(I),M.push(p),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Kt.setFromProjectionMatrix(mt),Q=this.localClippingEnabled,V=Lt.init(this.clippingPlanes,Q),_=rt.get(x,m.length),_.init(),m.push(_),et.enabled===!0&&et.isPresenting===!0){const nt=S.xr.getDepthSensingMesh();nt!==null&&Bs(nt,I,-1/0,S.sortObjects)}Bs(x,I,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(G,ot),Ft=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ft&&lt.addToRenderList(_,x),this.info.render.frame++,V===!0&&Lt.beginShadows();const O=p.state.shadowsArray;tt.render(O,x,I),V===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(N.length>0)for(let at=0,ft=nt.length;at<ft;at++){const pt=nt[at];ya(B,N,x,pt)}Ft&&lt.render(x);for(let at=0,ft=nt.length;at<ft;at++){const pt=nt[at];Ma(_,x,pt,pt.viewport)}}else N.length>0&&ya(B,N,x,I),Ft&&lt.render(x),Ma(_,x,I);C!==null&&(Pt.updateMultisampleRenderTarget(C),Pt.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(S,x,I),Ut.resetDefaultState(),F=-1,T=null,M.pop(),M.length>0?(p=M[M.length-1],V===!0&&Lt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Bs(x,I,O,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Kt.intersectsSprite(x)){B&&bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(mt);const at=J.update(x),ft=x.material;ft.visible&&_.push(x,at,ft,O,bt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Kt.intersectsObject(x))){const at=J.update(x),ft=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),bt.copy(x.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),bt.copy(at.boundingSphere.center)),bt.applyMatrix4(x.matrixWorld).applyMatrix4(mt)),Array.isArray(ft)){const pt=at.groups;for(let Et=0,Tt=pt.length;Et<Tt;Et++){const _t=pt[Et],Gt=ft[_t.materialIndex];Gt&&Gt.visible&&_.push(x,at,Gt,O,bt.z,_t)}}else ft.visible&&_.push(x,at,ft,O,bt.z,null)}}const nt=x.children;for(let at=0,ft=nt.length;at<ft;at++)Bs(nt[at],I,O,B)}function Ma(x,I,O,B){const N=x.opaque,nt=x.transmissive,at=x.transparent;p.setupLightsView(O),V===!0&&Lt.setGlobalState(S.clippingPlanes,O),B&&xt.viewport(y.copy(B)),N.length>0&&Hi(N,I,O),nt.length>0&&Hi(nt,I,O),at.length>0&&Hi(at,I,O),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ya(x,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new kn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Fi:on,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[B.id],at=B.viewport||y;nt.setSize(at.z,at.w);const ft=S.getRenderTarget();S.setRenderTarget(nt),S.getClearColor(z),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),Ft&&lt.render(O);const pt=S.toneMapping;S.toneMapping=xn;const Et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),V===!0&&Lt.setGlobalState(S.clippingPlanes,B),Hi(x,O,B),Pt.updateMultisampleRenderTarget(nt),Pt.updateRenderTargetMipmap(nt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let _t=0,Gt=I.length;_t<Gt;_t++){const te=I[_t],ee=te.object,Re=te.geometry,Vt=te.material,vt=te.group;if(Vt.side===Ge&&ee.layers.test(B.layers)){const me=Vt.side;Vt.side=we,Vt.needsUpdate=!0,Ea(ee,O,B,Re,Vt,vt),Vt.side=me,Vt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Pt.updateMultisampleRenderTarget(nt),Pt.updateRenderTargetMipmap(nt))}S.setRenderTarget(ft),S.setClearColor(z,q),Et!==void 0&&(B.viewport=Et),S.toneMapping=pt}function Hi(x,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,nt=x.length;N<nt;N++){const at=x[N],ft=at.object,pt=at.geometry,Et=B===null?at.material:B,Tt=at.group;ft.layers.test(O.layers)&&Ea(ft,I,O,pt,Et,Tt)}}function Ea(x,I,O,B,N,nt){x.onBeforeRender(S,I,O,B,N,nt),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,I,O,B,x,nt),N.transparent===!0&&N.side===Ge&&N.forceSinglePass===!1?(N.side=we,N.needsUpdate=!0,S.renderBufferDirect(O,I,B,N,x,nt),N.side=an,N.needsUpdate=!0,S.renderBufferDirect(O,I,B,N,x,nt),N.side=Ge):S.renderBufferDirect(O,I,B,N,x,nt),x.onAfterRender(S,I,O,B,N,nt)}function Gi(x,I,O){I.isScene!==!0&&(I=Rt);const B=At.get(x),N=p.state.lights,nt=p.state.shadowsArray,at=N.state.version,ft=Z.getParameters(x,N.state,nt,I,O),pt=Z.getProgramCacheKey(ft);let Et=B.programs;B.environment=x.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(x.isMeshStandardMaterial?v:w).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Et===void 0&&(x.addEventListener("dispose",yt),Et=new Map,B.programs=Et);let Tt=Et.get(pt);if(Tt!==void 0){if(B.currentProgram===Tt&&B.lightsStateVersion===at)return Ta(x,ft),Tt}else ft.uniforms=Z.getUniforms(x),x.onBeforeCompile(ft,S),Tt=Z.acquireProgram(ft,pt),Et.set(pt,Tt),B.uniforms=ft.uniforms;const _t=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_t.clippingPlanes=Lt.uniform),Ta(x,ft),B.needsLights=gl(x),B.lightsStateVersion=at,B.needsLights&&(_t.ambientLightColor.value=N.state.ambient,_t.lightProbe.value=N.state.probe,_t.directionalLights.value=N.state.directional,_t.directionalLightShadows.value=N.state.directionalShadow,_t.spotLights.value=N.state.spot,_t.spotLightShadows.value=N.state.spotShadow,_t.rectAreaLights.value=N.state.rectArea,_t.ltc_1.value=N.state.rectAreaLTC1,_t.ltc_2.value=N.state.rectAreaLTC2,_t.pointLights.value=N.state.point,_t.pointLightShadows.value=N.state.pointShadow,_t.hemisphereLights.value=N.state.hemi,_t.directionalShadowMap.value=N.state.directionalShadowMap,_t.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_t.spotShadowMap.value=N.state.spotShadowMap,_t.spotLightMatrix.value=N.state.spotLightMatrix,_t.spotLightMap.value=N.state.spotLightMap,_t.pointShadowMap.value=N.state.pointShadowMap,_t.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Tt,B.uniformsList=null,Tt}function ba(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ys.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Ta(x,I){const O=At.get(x);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function pl(x,I,O,B,N){I.isScene!==!0&&(I=Rt),Pt.resetTextureUnits();const nt=I.fog,at=B.isMeshStandardMaterial?I.environment:null,ft=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yn,pt=(B.isMeshStandardMaterial?v:w).get(B.envMap||at),Et=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Tt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_t=!!O.morphAttributes.position,Gt=!!O.morphAttributes.normal,te=!!O.morphAttributes.color;let ee=xn;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ee=S.toneMapping);const Re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Vt=Re!==void 0?Re.length:0,vt=At.get(B),me=p.state.lights;if(V===!0&&(Q===!0||x!==T)){const Ne=x===T&&B.id===F;Lt.setState(B,x,Ne)}let Wt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==me.state.version||vt.outputColorSpace!==ft||N.isBatchedMesh&&vt.batching===!1||!N.isBatchedMesh&&vt.batching===!0||N.isBatchedMesh&&vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&vt.instancing===!1||!N.isInstancedMesh&&vt.instancing===!0||N.isSkinnedMesh&&vt.skinning===!1||!N.isSkinnedMesh&&vt.skinning===!0||N.isInstancedMesh&&vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&vt.instancingMorph===!1&&N.morphTexture!==null||vt.envMap!==pt||B.fog===!0&&vt.fog!==nt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Lt.numPlanes||vt.numIntersection!==Lt.numIntersection)||vt.vertexAlphas!==Et||vt.vertexTangents!==Tt||vt.morphTargets!==_t||vt.morphNormals!==Gt||vt.morphColors!==te||vt.toneMapping!==ee||vt.morphTargetsCount!==Vt)&&(Wt=!0):(Wt=!0,vt.__version=B.version);let Be=vt.currentProgram;Wt===!0&&(Be=Gi(B,I,N));let Gn=!1,Pe=!1,ks=!1;const re=Be.getUniforms(),cn=vt.uniforms;if(xt.useProgram(Be.program)&&(Gn=!0,Pe=!0,ks=!0),B.id!==F&&(F=B.id,Pe=!0),Gn||T!==x){re.setValue(R,"projectionMatrix",x.projectionMatrix),re.setValue(R,"viewMatrix",x.matrixWorldInverse);const Ne=re.map.cameraPosition;Ne!==void 0&&Ne.setValue(R,ct.setFromMatrixPosition(x.matrixWorld)),$t.logarithmicDepthBuffer&&re.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),T!==x&&(T=x,Pe=!0,ks=!0)}if(N.isSkinnedMesh){re.setOptional(R,N,"bindMatrix"),re.setOptional(R,N,"bindMatrixInverse");const Ne=N.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),re.setValue(R,"boneTexture",Ne.boneTexture,Pt))}N.isBatchedMesh&&(re.setOptional(R,N,"batchingTexture"),re.setValue(R,"batchingTexture",N._matricesTexture,Pt),re.setOptional(R,N,"batchingIdTexture"),re.setValue(R,"batchingIdTexture",N._indirectTexture,Pt),re.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&re.setValue(R,"batchingColorTexture",N._colorsTexture,Pt));const zs=O.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&Bt.update(N,O,Be),(Pe||vt.receiveShadow!==N.receiveShadow)&&(vt.receiveShadow=N.receiveShadow,re.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(cn.envMap.value=pt,cn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(cn.envMapIntensity.value=I.environmentIntensity),Pe&&(re.setValue(R,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&ml(cn,ks),nt&&B.fog===!0&&St.refreshFogUniforms(cn,nt),St.refreshMaterialUniforms(cn,B,j,W,p.state.transmissionRenderTarget[x.id]),ys.upload(R,ba(vt),cn,Pt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ys.upload(R,ba(vt),cn,Pt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(R,"center",N.center),re.setValue(R,"modelViewMatrix",N.modelViewMatrix),re.setValue(R,"normalMatrix",N.normalMatrix),re.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ne=B.uniformsGroups;for(let Hs=0,_l=Ne.length;Hs<_l;Hs++){const wa=Ne[Hs];Jt.update(wa,Be),Jt.bind(wa,Be)}}return Be}function ml(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function gl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,I,O){At.get(x.texture).__webglTexture=I,At.get(x.depthTexture).__webglTexture=O;const B=At.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,I){const O=At.get(x);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,O=0){C=x,D=I,A=O;let B=!0,N=null,nt=!1,at=!1;if(x){const pt=At.get(x);if(pt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(pt.__webglFramebuffer===void 0)Pt.setupRenderTarget(x);else if(pt.__hasExternalTextures)Pt.rebindTextures(x,At.get(x.texture).__webglTexture,At.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const _t=x.depthTexture;if(pt.__boundDepthTexture!==_t){if(_t!==null&&At.has(_t)&&(x.width!==_t.image.width||x.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(x)}}const Et=x.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(at=!0);const Tt=At.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?N=Tt[I][O]:N=Tt[I],nt=!0):x.samples>0&&Pt.useMultisampledRTT(x)===!1?N=At.get(x).__webglMultisampledFramebuffer:Array.isArray(Tt)?N=Tt[O]:N=Tt,y.copy(x.viewport),P.copy(x.scissor),H=x.scissorTest}else y.copy(ut).multiplyScalar(j).floor(),P.copy(gt).multiplyScalar(j).floor(),H=Ot;if(xt.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&xt.drawBuffers(x,N),xt.viewport(y),xt.scissor(P),xt.setScissorTest(H),nt){const pt=At.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,O)}else if(at){const pt=At.get(x.texture),Et=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,pt.__webglTexture,O||0,Et)}F=-1},this.readRenderTargetPixels=function(x,I,O,B,N,nt,at){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=At.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){xt.bindFramebuffer(R.FRAMEBUFFER,ft);try{const pt=x.texture,Et=pt.format,Tt=pt.type;if(!$t.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&O>=0&&O<=x.height-N&&R.readPixels(I,O,B,N,Ct.convert(Et),Ct.convert(Tt),nt)}finally{const pt=C!==null?At.get(C).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(x,I,O,B,N,nt,at){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=At.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){xt.bindFramebuffer(R.FRAMEBUFFER,ft);try{const pt=x.texture,Et=pt.format,Tt=pt.type;if(!$t.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=x.width-B&&O>=0&&O<=x.height-N){const _t=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.bufferData(R.PIXEL_PACK_BUFFER,nt.byteLength,R.STREAM_READ),R.readPixels(I,O,B,N,Ct.convert(Et),Ct.convert(Tt),0),R.flush();const Gt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await yc(R,Gt,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,nt)}finally{R.deleteBuffer(_t),R.deleteSync(Gt)}return nt}}finally{const pt=C!==null?At.get(C).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(x,I=null,O=0){x.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(x.image.width*B),nt=Math.floor(x.image.height*B),at=I!==null?I.x:0,ft=I!==null?I.y:0;Pt.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,at,ft,N,nt),xt.unbindTexture()},this.copyTextureToTexture=function(x,I,O=null,B=null,N=0){x.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],I=arguments[2],N=arguments[3]||0,O=null);let nt,at,ft,pt,Et,Tt;O!==null?(nt=O.max.x-O.min.x,at=O.max.y-O.min.y,ft=O.min.x,pt=O.min.y):(nt=x.image.width,at=x.image.height,ft=0,pt=0),B!==null?(Et=B.x,Tt=B.y):(Et=0,Tt=0);const _t=Ct.convert(I.format),Gt=Ct.convert(I.type);Pt.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const te=R.getParameter(R.UNPACK_ROW_LENGTH),ee=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Re=R.getParameter(R.UNPACK_SKIP_PIXELS),Vt=R.getParameter(R.UNPACK_SKIP_ROWS),vt=R.getParameter(R.UNPACK_SKIP_IMAGES),me=x.isCompressedTexture?x.mipmaps[N]:x.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,pt),x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Et,Tt,nt,at,_t,Gt,me.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Et,Tt,me.width,me.height,_t,me.data):R.texSubImage2D(R.TEXTURE_2D,N,Et,Tt,nt,at,_t,Gt,me),R.pixelStorei(R.UNPACK_ROW_LENGTH,te),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,vt),N===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(x,I,O=null,B=null,N=0){x.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,x=arguments[2],I=arguments[3],N=arguments[4]||0);let nt,at,ft,pt,Et,Tt,_t,Gt,te;const ee=x.isCompressedTexture?x.mipmaps[N]:x.image;O!==null?(nt=O.max.x-O.min.x,at=O.max.y-O.min.y,ft=O.max.z-O.min.z,pt=O.min.x,Et=O.min.y,Tt=O.min.z):(nt=ee.width,at=ee.height,ft=ee.depth,pt=0,Et=0,Tt=0),B!==null?(_t=B.x,Gt=B.y,te=B.z):(_t=0,Gt=0,te=0);const Re=Ct.convert(I.format),Vt=Ct.convert(I.type);let vt;if(I.isData3DTexture)Pt.setTexture3D(I,0),vt=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Pt.setTexture2DArray(I,0),vt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const me=R.getParameter(R.UNPACK_ROW_LENGTH),Wt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Be=R.getParameter(R.UNPACK_SKIP_PIXELS),Gn=R.getParameter(R.UNPACK_SKIP_ROWS),Pe=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ee.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ee.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Et),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tt),x.isDataTexture||x.isData3DTexture?R.texSubImage3D(vt,N,_t,Gt,te,nt,at,ft,Re,Vt,ee.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(vt,N,_t,Gt,te,nt,at,ft,Re,ee.data):R.texSubImage3D(vt,N,_t,Gt,te,nt,at,ft,Re,Vt,ee),R.pixelStorei(R.UNPACK_ROW_LENGTH,me),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Wt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe),N===0&&I.generateMipmaps&&R.generateMipmap(vt),xt.unbindTexture()},this.initRenderTarget=function(x){At.get(x).__webglFramebuffer===void 0&&Pt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Pt.setTextureCube(x,0):x.isData3DTexture?Pt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Pt.setTexture2DArray(x,0):Pt.setTexture2D(x,0),xt.unbindTexture()},this.resetState=function(){D=0,A=0,C=null,xt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===fa?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===Ns?"display-p3":"srgb"}}class ga{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Np extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ps extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ds=new U,Ls=new U,bo=new oe,Ri=new pa,fs=new Us,gr=new U,To=new U;class sa extends Ee{constructor(t=new ye,e=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ds.fromBufferAttribute(e,i-1),Ls.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ds.distanceTo(Ls);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(i),fs.radius+=s,t.ray.intersectsSphere(fs)===!1)return;bo.copy(i).invert(),Ri.copy(t.ray).applyMatrix4(bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),M=h.getX(_+1),S=ps(this,t,Ri,l,m,M);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=ps(this,t,Ri,l,_,p);m&&e.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const m=ps(this,t,Ri,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=ps(this,t,Ri,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ps(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(Ds.fromBufferAttribute(a,i),Ls.fromBufferAttribute(a,s),e.distanceSqToSegment(Ds,Ls,gr,To)>n)return;gr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(gr);if(!(l<t.near||l>t.far))return{distance:l,point:To.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const wo=new U,Ao=new U;class Up extends sa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)wo.fromBufferAttribute(e,i),Ao.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wo.distanceTo(Ao);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _a extends ye{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,M=(i+1)*f+g;a.push(_,p,M),a.push(p,m,M)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fp extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Op extends Fp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Co{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bp extends Up{constructor(t=10,e=10,n=4473924,i=8947848){n=new zt(n),i=new zt(i);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new ye;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));const u=new Ps({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class kp extends Hn{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);const Ro={type:"change"},va={type:"start"},fl={type:"end"},ms=new pa,Po=new gn,zp=Math.cos(70*Sc.DEG2RAD),le=new U,Te=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_r=1e-6;class Hp extends kp{constructor(t,e=null){super(t,e),this.state=Zt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new zn,this._lastTargetPosition=new U,this._quat=new zn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Co,this._sphericalDelta=new Co,this._scale=1,this._panOffset=new U,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new U,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vp.bind(this),this._onPointerDown=Gp.bind(this),this._onPointerUp=Wp.bind(this),this._onContextMenu=jp.bind(this),this._onMouseWheel=Yp.bind(this),this._onKeyDown=Kp.bind(this),this._onTouchStart=$p.bind(this),this._onTouchMove=Zp.bind(this),this._onMouseDown=Xp.bind(this),this._onMouseMove=qp.bind(this),this._interceptControlDown=Jp.bind(this),this._interceptControlUp=Qp.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ro),this.update(),this.state=Zt.NONE}update(t=null){const e=this.object.position;le.copy(e).sub(this.target),le.applyQuaternion(this._quat),this._spherical.setFromVector3(le),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Te:n>Math.PI&&(n-=Te),i<-Math.PI?i+=Te:i>Math.PI&&(i-=Te),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(le.setFromSpherical(this._spherical),le.applyQuaternion(this._quatInverse),e.copy(this.target).add(le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=le.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ms.origin.copy(this.object.position),ms.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ms.direction))<zp?this.object.lookAt(this.target):(Po.setFromNormalAndCoplanarPoint(this.object.up,this.target),ms.intersectPlane(Po,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_r||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_r||this._lastTargetPosition.distanceToSquared(this.target)>_r?(this.dispatchEvent(Ro),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Te/60*this.autoRotateSpeed*t:Te/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){le.setFromMatrixColumn(e,0),le.multiplyScalar(-t),this._panOffset.add(le)}_panUp(t,e){this.screenSpacePanning===!0?le.setFromMatrixColumn(e,1):(le.setFromMatrixColumn(e,0),le.crossVectors(this.object.up,le)),le.multiplyScalar(t),this._panOffset.add(le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;le.copy(i).sub(this.target);let s=le.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Te*this._rotateDelta.x/e.clientHeight),this._rotateUp(Te*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Te*this._rotateDelta.x/e.clientHeight),this._rotateUp(Te*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Gp(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Vp(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Wp(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fl),this.state=Zt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Xp(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Zt.DOLLY;break;case ui.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Zt.ROTATE}break;case ui.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(va)}function qp(r){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Yp(r){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(r.preventDefault(),this.dispatchEvent(va),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(fl))}function Kp(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function $p(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Zt.TOUCH_ROTATE;break;case li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Zt.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(va)}function Zp(r){switch(this._trackPointer(r),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Zt.NONE}}function jp(r){this.enabled!==!1&&r.preventDefault()}function Jp(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qp(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xe={sub:(r,t)=>({re:r.re-t.re,im:r.im-t.im}),abs:r=>Math.sqrt(r.re*r.re+r.im*r.im),polar:(r,t)=>({re:r*Math.cos(t),im:r*Math.sin(t)})};function Do(r){let t=[{re:1,im:0}];for(const e of r){const n=Array(t.length+1).fill(null).map(()=>({re:0,im:0}));for(let i=0;i<t.length;i++)n[i].re+=t[i].re,n[i].im+=t[i].im,n[i+1].re-=t[i].re*e.re-t[i].im*e.im,n[i+1].im-=t[i].re*e.im+t[i].im*e.re;t=n}return t}function Pi(r){const t=Math.max(0,Math.min(1,r));if(t<.2){const n=t/.2;return[Math.round(n*40),0,Math.round(60+n*80)]}if(t<.4){const n=(t-.2)/.2;return[Math.round(40+n*110),Math.round(n*60),Math.round(140-n*40)]}if(t<.62){const n=(t-.4)/.22;return[Math.round(150-n*68),Math.round(60+n*147),Math.round(100+n*154)]}if(t<.82){const n=(t-.62)/.2;return[Math.round(82+n*173),Math.round(207+n*38),Math.round(254-n*200)]}const e=(t-.82)/.18;return[255,Math.round(245+e*10),Math.round(54+e*201)]}class tm{constructor(t){b(this,"container");b(this,"animId",null);b(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),modeSelector:Mt("modeSelector",!0),waveform:Mt("waveform",!0),zPlane:Mt("zPlane",!0),surface3d:Mt("surface3d",!0),response:Mt("response",!0),spectrum:Mt("spectrum",!0)});b(this,"poles",[]);b(this,"zeros",[]);b(this,"dragging",null);b(this,"planeCanvas");b(this,"leftPlanePanel");b(this,"surfaceCanvas");b(this,"responseCanvas");b(this,"spectrumCanvas");b(this,"threeRenderer",null);b(this,"threeScene",null);b(this,"threeCamera",null);b(this,"threeControls",null);b(this,"surfaceMesh",null);b(this,"unitCircleLine",null);b(this,"freqRibbon",null);b(this,"spectrumBars3D",null);b(this,"spectrumBars3DCount",96);b(this,"threeN",64);b(this,"threeRange",1.8);b(this,"useThreeJS",!1);b(this,"rotAngle2D",0);b(this,"sharedAudio",Sn.getInstance());b(this,"audioCtx",null);b(this,"originalBuffer",null);b(this,"sourceNode",null);b(this,"dspNode",null);b(this,"compressorNode",null);b(this,"gainNode",null);b(this,"analyserNode",null);b(this,"filterUpdateTimer",null);b(this,"playbackGain",.85);b(this,"maxNormBoost",12);b(this,"lastNormScale",1);b(this,"lastResponsePeak",1);b(this,"lastResponseRms",1);b(this,"outputMakeupGain",1);b(this,"timeDomainScratch",null);b(this,"isPlaying",!1);b(this,"isPaused",!1);b(this,"playMode","filtered");b(this,"playbackStartedAt",0);b(this,"pausedAt",0);b(this,"sampleRate",44100);b(this,"origSpectrumStatic",null);b(this,"analyserData",null);b(this,"transportBar");b(this,"statusEl");b(this,"filterInfoEl");b(this,"waveformTimeline");b(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.loadDefaults(),this.buildUI(),this.tryInitThreeJS(),this.startAnimation(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.loadDefaultAudioClip()}async loadDefaultAudioClip(){var e,n;const t=mi("audio");if(t){this.statusEl.textContent="Loading…";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext());const s=await(await fetch(Ni(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(s),this.sampleRate=this.originalBuffer.sampleRate;const a=this.originalBuffer.getChannelData(0),o=4096,l=Math.floor(a.length/2);this.origSpectrumStatic=this.computeFFT(a.slice(l,l+o),o),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0;const c=t.split("/").pop()??t;this.statusEl.textContent=`${c} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="✗ Error loading audio"}}}loadDefaults(){this.zeros=[xe.polar(1,Math.PI/2),xe.polar(1,-Math.PI/2)],this.poles=[xe.polar(.8,Math.PI/2),xe.polar(.8,-Math.PI/2)]}computeMag(t){let e=1,n=1;for(const i of this.zeros)e*=xe.abs(xe.sub(t,i));for(const i of this.poles)n*=xe.abs(xe.sub(t,i));return n<1e-12?1/0:!this.zeros.length&&!this.poles.length?1:e/n}getCoeffs(){const t=Do(this.zeros).map(n=>n.re),e=Do(this.poles).map(n=>n.re);return t.length||t.push(1),e.length||e.push(1),{b:t,a:e}}tryInitThreeJS(){try{const t=this.surfaceCanvas,e=Math.min(window.devicePixelRatio||1,2),n=t.width/e,i=t.height/e;this.threeRenderer=new Ip({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.threeRenderer.setSize(n,i),this.threeRenderer.setPixelRatio(e),this.threeRenderer.setClearColor(263431,1),this.threeScene=new Np,this.threeScene.fog=new ga(263431,8,22),this.threeCamera=new Fe(44,n/i,.1,100),this.threeCamera.position.set(2.8,3.2,4.4),this.threeControls=new Hp(this.threeCamera,t),this.threeControls.enableDamping=!0,this.threeControls.dampingFactor=.06,this.threeControls.minDistance=1.2,this.threeControls.maxDistance=16,this.threeControls.maxPolarAngle=Math.PI*.88,this.threeControls.target.set(0,.45,0),this.threeControls.update(),t.addEventListener("wheel",c=>c.preventDefault(),{passive:!1}),t.style.touchAction="none",this.threeScene.add(new Op(16777215,1));const s=new Bp(3.8,20,861504,861504);this.threeScene.add(s);const a=this.threeRange,o=(c,h,u=1)=>new sa(new ye().setFromPoints(c),new Ps({color:h,transparent:u<1,opacity:u}));this.threeScene.add(o([new U(-a-.15,0,0),new U(a+.15,0,0)],16737860,.85)),this.threeScene.add(o([new U(0,0,-a-.15),new U(0,0,a+.15)],4513160,.85)),this.threeScene.add(o([new U(0,0,0),new U(0,1.5,0)],16777215,.55));const l=new Ie(new _a(1,.022,8,128),new ci({color:5427198}));l.rotation.x=Math.PI/2,this.threeScene.add(l),this.createThreeSurface(),this.unitCircleLine=this.createUnitCircleLine(),this.threeScene.add(this.unitCircleLine),this.createFreqRibbon(),this.createSpectrumBars3D(),this.useThreeJS=!0}catch(t){console.warn("Three.js init failed, using Canvas2D fallback:",t),this.useThreeJS=!1}}createThreeSurface(){if(!this.threeScene)return;const t=this.threeN,e=this.threeRange,n=(t+1)*(t+1),i=new Float32Array(n*3),s=new Float32Array(n*3),a=[];for(let c=0;c<=t;c++)for(let h=0;h<=t;h++){const u=c*(t+1)+h;i[u*3]=-e+2*e*c/t,i[u*3+1]=0,i[u*3+2]=-e+2*e*h/t,s[u*3+2]=.15}for(let c=0;c<t;c++)for(let h=0;h<t;h++){const u=c*(t+1)+h,d=u+1,f=(c+1)*(t+1)+h,g=f+1;a.push(u,d,g,u,g,f)}const o=new ye;o.setAttribute("position",new ge(i,3)),o.setAttribute("color",new ge(s,3)),o.setIndex(a);const l=new ci({vertexColors:!0,side:an,transparent:!0,opacity:.82,depthWrite:!1});this.surfaceMesh=new Ie(o,l),this.threeScene.add(this.surfaceMesh)}createUnitCircleLine(){const e=new ye;return e.setAttribute("position",new ge(new Float32Array(301*3),3)),new sa(e,new Ps({color:16777215,linewidth:2}))}createFreqRibbon(){if(!this.threeScene)return;const t=300,e=new Float32Array((t+1)*2*3),n=new Float32Array((t+1)*2*3),i=[];for(let a=0;a<=t;a++){const o=2*Math.PI*a/t,l=Math.cos(o),c=Math.sin(o);if(e[a*2*3]=l,e[a*2*3+2]=c,e[a*2*3+1]=.01,e[(a*2+1)*3]=l,e[(a*2+1)*3+2]=c,e[(a*2+1)*3+1]=.01,a<t){const h=a*2,u=a*2+1,d=(a+1)*2,f=(a+1)*2+1;i.push(h,u,f,h,f,d)}}const s=new ye;s.setAttribute("position",new ge(e,3)),s.setAttribute("color",new ge(n,3)),s.setIndex(i),this.freqRibbon=new Ie(s,new ci({vertexColors:!0,side:Ge,transparent:!0,opacity:.3,depthWrite:!1})),this.threeScene.add(this.freqRibbon),this.updateThreeSurface()}createSpectrumBars3D(){if(!this.threeScene)return;const t=this.spectrumBars3DCount,e=new Float32Array(t*4*3),n=new Float32Array(t*4*3),i=[],s=1.35,a=.038;for(let l=0;l<t;l++){const c=2*Math.PI*l/t,h=Math.cos(c),u=Math.sin(c),d=-Math.sin(c)*a,f=Math.cos(c)*a,g=l*4;e[(g+0)*3]=h*s-d,e[(g+0)*3+1]=.005,e[(g+0)*3+2]=u*s-f,e[(g+1)*3]=h*s+d,e[(g+1)*3+1]=.005,e[(g+1)*3+2]=u*s+f,e[(g+2)*3]=h*s-d,e[(g+2)*3+1]=.005,e[(g+2)*3+2]=u*s-f,e[(g+3)*3]=h*s+d,e[(g+3)*3+1]=.005,e[(g+3)*3+2]=u*s+f,i.push(g,g+1,g+3,g,g+3,g+2)}const o=new ye;o.setAttribute("position",new ge(e,3)),o.setAttribute("color",new ge(n,3)),o.setIndex(i),this.spectrumBars3D=new Ie(o,new ci({vertexColors:!0,side:Ge,transparent:!0,opacity:.85,depthWrite:!1})),this.threeScene.add(this.spectrumBars3D)}updateSpectrumBars3D(){if(!this.spectrumBars3D||!this.analyserNode||!this.analyserData)return;this.analyserNode.getFloatFrequencyData(this.analyserData);const t=this.spectrumBars3DCount,e=1.35,n=.038,i=.9,s=-80,a=80,o=this.analyserData.length,l=this.spectrumBars3D.geometry.attributes.position,c=this.spectrumBars3D.geometry.attributes.color;for(let h=0;h<t;h++){const u=2*Math.PI*h/t,d=Math.cos(u),f=Math.sin(u),g=-Math.sin(u)*n,_=Math.cos(u)*n,p=h/t,m=Math.log10(1+p*9)/Math.log10(10),M=Math.max(1,Math.min(o-1,Math.floor(m*o))),S=this.analyserData[M],E=Math.max(0,Math.min(1,(S-s)/a)),D=E*i,[A,C,F]=Pi(E*.85+.1),T=A/255,y=C/255,P=F/255,H=h*4;l.setXYZ(H,d*e-g,.005,f*e-_),c.setXYZ(H,T*.3,y*.3,P*.3),l.setXYZ(H+1,d*e+g,.005,f*e+_),c.setXYZ(H+1,T*.3,y*.3,P*.3),l.setXYZ(H+2,d*e-g,D,f*e-_),c.setXYZ(H+2,T,y,P),l.setXYZ(H+3,d*e+g,D,f*e+_),c.setXYZ(H+3,T,y,P)}l.needsUpdate=!0,c.needsUpdate=!0}updateThreeSurface(){if(!this.surfaceMesh)return;const t=this.threeN,e=this.threeRange,n=3.8,i=.7,s=l=>Math.atan((isFinite(l)?l:100)/2)/(Math.PI/2)*n*i,a=this.surfaceMesh.geometry.attributes.position,o=this.surfaceMesh.geometry.attributes.color;for(let l=0;l<=t;l++)for(let c=0;c<=t;c++){const h=l*(t+1)+c,u=-e+2*e*l/t,d=-e+2*e*c/t,f=s(this.computeMag({re:u,im:d}));a.setY(h,f);const[g,_,p]=Pi(f/(n*i));o.setXYZ(h,g/255,_/255,p/255)}if(a.needsUpdate=!0,o.needsUpdate=!0,this.surfaceMesh.geometry.computeVertexNormals(),this.unitCircleLine){const c=this.unitCircleLine.geometry.attributes.position;for(let h=0;h<=300;h++){const u=2*Math.PI*h/300,d=s(this.computeMag({re:Math.cos(u),im:Math.sin(u)}));c.setXYZ(h,Math.cos(u),d+.03,Math.sin(u))}c.needsUpdate=!0}if(this.freqRibbon){const c=this.freqRibbon.geometry.attributes.position,h=this.freqRibbon.geometry.attributes.color;for(let u=0;u<=300;u++){const d=2*Math.PI*u/300,f=Math.cos(d),g=Math.sin(d),_=s(this.computeMag({re:f,im:g})),[p,m,M]=Pi(_/(n*i));c.setXYZ(u*2,f,.01,g),h.setXYZ(u*2,p/255,m/255,M/255),c.setXYZ(u*2+1,f,_+.02,g),h.setXYZ(u*2+1,p/255,m/255,M/255)}c.needsUpdate=!0,h.needsUpdate=!0}}buildUI(){var o;if(document.body.style.overflowY="auto",this.ui.transport){if(this.transportBar=new Ui({onPlay:()=>this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:l=>this.handleUpload(l),uploadLabel:"Upload Audio",showUpload:this.ui.upload}),this.ui.modeSelector){const l=document.createElement("div");l.style.cssText="display:flex;gap:4px;margin-left:8px;",["original","filtered"].forEach(c=>{const h=document.createElement("button");h.className="transport-mode-btn"+(c===this.playMode?" active":""),h.textContent=c==="original"?"Original":"Filtered",h.style.fontSize="9px",h.addEventListener("click",()=>{this.playMode=c,l.querySelectorAll(".transport-mode-btn").forEach(u=>u.classList.toggle("active",u===h)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(c))}),l.appendChild(h)}),this.transportBar.getElement().querySelector(".transport-left").appendChild(l)}this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.textContent="Upload audio to audition filter",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusEl),this.filterInfoEl=document.createElement("span"),this.filterInfoEl.style.cssText="font-size:9px;font-family:'JetBrains Mono',monospace;color:#52cffe;white-space:nowrap;margin-left:auto;padding-right:8px;",(o=this.transportBar.getElement().querySelector(".transport-right"))==null||o.prepend(this.filterInfoEl),this.container.appendChild(this.transportBar.getElement())}else this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.style.display="none",this.filterInfoEl=document.createElement("span"),this.filterInfoEl.style.display="none",this.container.append(this.statusEl,this.filterInfoEl);this.ui.waveform&&(this.waveformTimeline=new gi({width:900,height:64,title:"WAVEFORM"},l=>this.handlePlayheadSeek(l)),this.waveformTimeline.getElement().style.marginBottom="6px",this.container.appendChild(this.waveformTimeline.getElement()));const t=document.createElement("div");t.style.cssText="display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap;";const e=this.makePanel("Z-PLANE");e.style.flexShrink="0",this.ui.zPlane||(e.style.display="none"),this.leftPlanePanel=e,this.planeCanvas=this.makeCanvas2D(e,400,300),this.setupPlaneInteraction(),t.appendChild(e);const n=this.makePanel("|H(z)| 3D");n.style.flex="1",n.style.minWidth="300px",this.ui.surface3d||(n.style.display="none"),this.surfaceCanvas=this.makeCanvasWebGL(n,480,300),t.appendChild(n),(this.ui.zPlane||this.ui.surface3d)&&this.container.appendChild(t);const i=this.makePanel("FREQUENCY RESPONSE");this.responseCanvas=this.makeCanvas2D(i,900,96),i.style.marginBottom="6px",this.ui.response?this.container.appendChild(i):(i.style.display="none",this.container.appendChild(i));const s=this.makePanel("SPECTRUM · gray=orig · cyan=live · gold=|H(ω)|");this.spectrumCanvas=this.makeCanvas2D(s,900,100),this.ui.spectrum?this.container.appendChild(s):(s.style.display="none",this.container.appendChild(s));const a=this.computeNormalizationScale();this.lastNormScale=a.scale,this.lastResponsePeak=a.peakMag,this.lastResponseRms=a.rmsMag,this.updateFilterInfo()}makePanel(t){const e=document.createElement("div");e.style.cssText="background:#080b10;border:1px solid #1e2530;border-radius:6px;overflow:hidden;position:relative;";const n=document.createElement("div");return n.style.cssText="position:absolute;top:4px;left:8px;font-size:7px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,0.35);text-transform:uppercase;z-index:2;pointer-events:none;",n.textContent=t,e.appendChild(n),e}makeCanvas2D(t,e,n){const i=window.devicePixelRatio||1,s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=e+"px",s.style.height=n+"px",s.style.display="block",s.getContext("2d").scale(i,i),t.appendChild(s),s}makeCanvasWebGL(t,e,n){const i=Math.min(window.devicePixelRatio||1,2),s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=e+"px",s.style.height=n+"px",s.style.display="block",s.style.cursor="grab",t.appendChild(s),s}resizeCanvas2D(t,e,n){const i=window.devicePixelRatio||1,s=Math.max(120,Math.floor(e)),a=Math.max(80,Math.floor(n));t.width=s*i,t.height=a*i,t.style.width=`${s}px`,t.style.height=`${a}px`;const o=t.getContext("2d");o.setTransform(1,0,0,1,0,0),o.scale(i,i)}resizeCanvasWebGL(t,e,n){const i=Math.min(window.devicePixelRatio||1,2),s=Math.max(120,Math.floor(e)),a=Math.max(80,Math.floor(n));t.width=s*i,t.height=a*i,t.style.width=`${s}px`,t.style.height=`${a}px`}resizeLayout(){var i;const t=Math.max(640,this.container.clientWidth-2),e=Math.max(260,Math.floor(t*.42)),n=Math.max(300,t-e-6);if(this.leftPlanePanel.style.width=`${e}px`,this.resizeCanvas2D(this.planeCanvas,e,e),this.resizeCanvasWebGL(this.surfaceCanvas,n,e),this.resizeCanvas2D(this.responseCanvas,t,96),this.resizeCanvas2D(this.spectrumCanvas,t,100),(i=this.waveformTimeline)==null||i.resize(t,64),this.threeRenderer&&this.threeCamera){const s=Math.min(window.devicePixelRatio||1,2),a=this.surfaceCanvas.width/s,o=this.surfaceCanvas.height/s;this.threeRenderer.setSize(a,o,!1),this.threeRenderer.setPixelRatio(s),this.threeCamera.aspect=a/o,this.threeCamera.updateProjectionMatrix()}}setupPlaneInteraction(){const t=this.planeCanvas,e=(a,o)=>Math.max(40,Math.min(a,o)/2-24),n=a=>{const o=t.getBoundingClientRect(),l=window.devicePixelRatio||1,c=t.width/l,h=t.height/l,u=e(c,h);return{re:(a.clientX-o.left-c/2)/u,im:-(a.clientY-o.top-h/2)/u}},i=(a,o,l=.13)=>{let c=-1,h=l;return o.forEach((u,d)=>{const f=xe.abs(xe.sub(u,a));f<h&&(h=f,c=d)}),c},s=(a,o)=>{const l=a[o];return a.filter((c,h)=>h!==o&&!(Math.abs(c.re-l.re)<.02&&Math.abs(Math.abs(c.im)-Math.abs(l.im))<.02))};t.oncontextmenu=a=>a.preventDefault(),t.onmousedown=a=>{a.preventDefault();const o=n(a),l=i(o,this.poles),c=i(o,this.zeros);if(l>=0){const h=this.poles[l],u=Math.abs(h.im)>.04?this.poles.findIndex((d,f)=>f!==l&&Math.abs(d.re-h.re)<.03&&Math.abs(d.im+h.im)<.03):-1;this.dragging={type:"pole",idx:l,conjIdx:u,origIm:h.im};return}if(c>=0){const h=this.zeros[c],u=Math.abs(h.im)>.04?this.zeros.findIndex((d,f)=>f!==c&&Math.abs(d.re-h.re)<.03&&Math.abs(d.im+h.im)<.03):-1;this.dragging={type:"zero",idx:c,conjIdx:u,origIm:h.im};return}a.button===2?(this.poles.push({re:o.re,im:o.im}),Math.abs(o.im)>.04&&this.poles.push({re:o.re,im:-o.im})):(this.zeros.push({re:o.re,im:o.im}),Math.abs(o.im)>.04&&this.zeros.push({re:o.re,im:-o.im})),this.onFilterChanged(!1)},t.ondblclick=a=>{const o=n(a),l=.16,c=this.poles.findIndex(u=>xe.abs(xe.sub(u,o))<l);if(c>=0){this.poles=s(this.poles,c),this.onFilterChanged(!1);return}const h=this.zeros.findIndex(u=>xe.abs(xe.sub(u,o))<l);h>=0&&(this.zeros=s(this.zeros,h),this.onFilterChanged(!1))},t.onmousemove=a=>{if(!this.dragging)return;const o=n(a),{type:l,idx:c,conjIdx:h,origIm:u}=this.dragging,d=l==="pole"?this.poles:this.zeros;if(h>=0&&h<d.length){const _=(Math.sign(u)||1)>0?Math.max(o.im,.04):Math.min(o.im,-.04);d[c]={re:o.re,im:_},d[h]={re:o.re,im:-_}}else d[c]={re:o.re,im:o.im};this.onFilterChanged(!0)},t.onmouseup=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null},t.onmouseleave=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null}}onFilterChanged(t=!1){this.useThreeJS&&this.updateThreeSurface(),this.updateFilterInfo(),t&&this.isPlaying?this.scheduleLiveFilterUpdate():this.flushLiveFilterUpdate()}scheduleLiveFilterUpdate(){if(!this.dspNode){this.updateLiveFilter();return}this.filterUpdateTimer&&clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=setTimeout(()=>{this.filterUpdateTimer=null,this.updateLiveFilter()},150)}flushLiveFilterUpdate(){this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.updateLiveFilter()}updateFilterInfo(){const t=this.poles.every(i=>xe.abs(i)<1),e=this.computeMag({re:1,im:0}),n=Math.max(this.poles.length,this.zeros.length);this.filterInfoEl.textContent=`P${this.poles.length} Z${this.zeros.length} ord${n} · ${t?"stable":"UNSTABLE"} · DC ${isFinite(e)?e.toFixed(2):"∞"}`,this.filterInfoEl.style.color=t?"#52cffe":"#ff5555"}measureFilterResponse(){const t=new Set,e=768;for(let l=0;l<e;l++)t.add(Math.PI*l/(e-1));for(const l of[...this.poles,...this.zeros]){if(Math.abs(l.im)<1e-7){t.add(0),t.add(Math.PI);continue}let c=Math.atan2(l.im,l.re);c<0&&(c+=2*Math.PI),c>Math.PI&&(c=2*Math.PI-c),t.add(c);for(const h of[-.03,-.01,.01,.03])t.add(Math.max(0,Math.min(Math.PI,c+h)))}let n=1e-9,i=0,s=0;for(const l of t){const c=this.computeMag({re:Math.cos(l),im:Math.sin(l)});!isFinite(c)||c<=0||(n=Math.max(n,c),i+=c*c,s++)}const a=s>0?Math.sqrt(i/s):1e-9,o=Math.max(n,a,1e-9);return{peakScale:Math.min(this.maxNormBoost,1/o),peakMag:n,rmsMag:a}}computeNormalizationScale(){const{peakScale:t,peakMag:e,rmsMag:n}=this.measureFilterResponse();let i=1;const s=this.origSpectrumStatic;if(s&&s.length>=8){const a=s.length;let o=0,l=0;for(let c=0;c<a;c++){const h=a>1?Math.PI*c/(a-1):0,u=this.computeMag({re:Math.cos(h),im:Math.sin(h)});if(!isFinite(u)||u<=0)continue;const d=u*t,f=s[c]*s[c];o+=f,l+=f*d*d}l>1e-20&&o>1e-20?i=Math.sqrt(o/l):o>1e-20&&(i=this.maxNormBoost),i=Math.min(this.maxNormBoost,Math.max(1,i))}return{scale:Math.min(this.maxNormBoost*1.5,t*i),peakMag:e,rmsMag:n}}updateOutputMakeup(){if(!this.isPlaying||this.playMode!=="filtered"||!this.analyserNode||!this.gainNode||!this.timeDomainScratch||!this.audioCtx)return;this.analyserNode.getFloatTimeDomainData(this.timeDomainScratch);let t=0;for(let n=0;n<this.timeDomainScratch.length;n++){const i=this.timeDomainScratch[n];t+=i*i}const e=Math.sqrt(t/this.timeDomainScratch.length);if(e<.05){const n=Math.min(16,.14/Math.max(e,1e-5));this.outputMakeupGain=this.outputMakeupGain*.88+n*.01}else this.outputMakeupGain=this.outputMakeupGain*.94+1*.06;this.outputMakeupGain=Math.min(16,Math.max(.5,this.outputMakeupGain)),this.gainNode.gain.setTargetAtTime(this.playbackGain*this.outputMakeupGain,this.audioCtx.currentTime,.15)}updateLiveFilter(){var a;const{b:t,a:e}=this.getCoeffs(),{scale:n,peakMag:i,rmsMag:s}=this.computeNormalizationScale();this.lastNormScale=n,this.lastResponsePeak=i,this.lastResponseRms=s,(a=this.dspNode)==null||a.port.postMessage({type:"setIIR",b:t.map(o=>o*n),a:e})}async handleUpload(t){var e,n;this.statusEl.textContent="Decoding…";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate;const i=this.originalBuffer.getChannelData(0),s=4096,a=Math.floor(i.length/2);this.origSpectrumStatic=this.computeFFT(i.slice(a,a+s),s),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusEl.textContent=`${t.name} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="✗ Error loading audio"}}computeFFT(t,e){const n=new Float64Array(e),i=new Float64Array(e);for(let l=0;l<e&&l<t.length;l++){const c=.5*(1-Math.cos(2*Math.PI*l/(e-1)));n[l]=t[l]*c}const s=e;let a=0;for(let l=1;l<s;l++){let c=s>>1;for(;a&c;c>>=1)a^=c;a^=c,l<a&&([n[l],n[a]]=[n[a],n[l]],[i[l],i[a]]=[i[a],i[l]])}for(let l=2;l<=s;l<<=1){const c=Math.cos(-2*Math.PI/l),h=Math.sin(-2*Math.PI/l);for(let u=0;u<s;u+=l){let d=1,f=0;for(let g=0;g<l/2;g++){const _=n[u+g],p=i[u+g],m=n[u+g+l/2]*d-i[u+g+l/2]*f,M=n[u+g+l/2]*f+i[u+g+l/2]*d;n[u+g]=_+m,i[u+g]=p+M,n[u+g+l/2]=_-m,i[u+g+l/2]=p-M;const S=d*c-f*h;f=d*h+f*c,d=S}}}const o=new Float32Array(e/2);for(let l=0;l<e/2;l++)o[l]=Math.sqrt(n[l]*n[l]+i[l]*i[l])/e;return o}async startPlayback(t){var e;if(this.stopAudio(!1),!this.originalBuffer){this.statusEl.textContent="Upload audio first";return}this.audioCtx&&(this.playMode=t,this.updateLiveFilter(),this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserNode.smoothingTimeConstant=.72,this.analyserData=new Float32Array(this.analyserNode.frequencyBinCount),this.timeDomainScratch=new Float32Array(this.analyserNode.fftSize),this.outputMakeupGain=1,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=t==="original"?.85:1,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=!1,t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[Math.min(this.originalBuffer.numberOfChannels,2)]}),this.dspNode.port.postMessage({type:"setMode",mode:"iir"}),this.compressorNode=this.audioCtx.createDynamicsCompressor(),this.compressorNode.threshold.value=-3,this.compressorNode.knee.value=6,this.compressorNode.ratio.value=2,this.compressorNode.attack.value=.003,this.compressorNode.release.value=.08,this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.compressorNode),this.compressorNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.gain.value=this.playbackGain,this.gainNode.connect(this.audioCtx.destination),this.updateLiveFilter()),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.originalBuffer||!this.audioCtx||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.originalBuffer.duration-.03&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(e=this.transportBar)==null||e.setPlaying(!0),this.statusEl.textContent=t==="filtered"?"Playing filtered":"Playing original")}pauseAudio(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.audioCtx.currentTime-this.playbackStartedAt,this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusEl.textContent="Paused",(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,n;this._teardownNodes(),this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt),this.originalBuffer&&(this.statusEl.textContent="Stopped")}_teardownNodes(){var t,e,n,i,s,a;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.dspNode)==null||n.disconnect(),(i=this.compressorNode)==null||i.disconnect(),(s=this.gainNode)==null||s.disconnect(),(a=this.analyserNode)==null||a.disconnect(),this.sourceNode=null,this.dspNode=null,this.compressorNode=null,this.gainNode=null,this.analyserNode=null,this.timeDomainScratch=null,this.outputMakeupGain=1}handlePlayheadSeek(t){var e;!this.originalBuffer||!this.audioCtx||(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}drawZPlane(){const t=this.planeCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d"),a=n/2,o=i/2,l=Math.max(40,Math.min(n,i)/2-24);s.fillStyle="#06070b",s.fillRect(0,0,n,i),s.strokeStyle="rgba(255,255,255,0.03)",s.lineWidth=1;for(let h=-1.5;h<=1.5;h+=.5)s.beginPath(),s.moveTo(a+h*l,0),s.lineTo(a+h*l,i),s.stroke(),s.beginPath(),s.moveTo(0,o-h*l),s.lineTo(n,o-h*l),s.stroke();s.strokeStyle="rgba(255,255,255,0.08)",s.lineWidth=1,s.beginPath(),s.moveTo(0,o),s.lineTo(n,o),s.stroke(),s.beginPath(),s.moveTo(a,0),s.lineTo(a,i),s.stroke(),s.beginPath(),s.arc(a,o,l,0,2*Math.PI),s.fillStyle="rgba(82,207,254,0.03)",s.fill();for(let h=0;h<2;h++)s.beginPath(),s.arc(a,o,l,0,2*Math.PI),s.strokeStyle=h===0?"rgba(82,207,254,0.08)":"rgba(82,207,254,0.55)",s.lineWidth=h===0?10:1.5,s.stroke();s.font="8.5px JetBrains Mono",s.fillStyle="rgba(255,255,255,0.16)",s.textAlign="center",s.fillText("DC",a+l+20,o+4),s.fillText("π",a-l-15,o+4),s.fillText("π/2",a+3,o-l-8),s.textAlign="left",s.fillText("Re",n-14,o-4),s.textAlign="right",s.fillText("Im",a-4,10),this.zeros.forEach(h=>{const u=a+h.re*l,d=o-h.im*l;s.beginPath(),s.arc(u,d,7.5,0,2*Math.PI),s.strokeStyle="#52cffe",s.lineWidth=2.5,s.shadowColor="rgba(82,207,254,0.7)",s.shadowBlur=10,s.stroke(),s.shadowBlur=0}),this.poles.forEach(h=>{const u=a+h.re*l,d=o-h.im*l;xe.abs(h)>=1&&(s.beginPath(),s.arc(u,d,14,0,2*Math.PI),s.strokeStyle="rgba(255,85,85,0.4)",s.lineWidth=2,s.stroke());const f=8;s.strokeStyle="#ff869a",s.lineWidth=2.5,s.shadowColor="rgba(255,134,154,0.7)",s.shadowBlur=10,s.beginPath(),s.moveTo(u-f,d-f),s.lineTo(u+f,d+f),s.moveTo(u+f,d-f),s.lineTo(u-f,d+f),s.stroke(),s.shadowBlur=0}),s.fillStyle="rgba(0,0,0,0.6)",s.fillRect(0,0,n,22),s.font="8px JetBrains Mono",s.fillStyle="rgba(255,255,255,0.26)",s.textAlign="left",s.fillText(`Poles: ${this.poles.length}  Zeros: ${this.zeros.length}  |  dbl-click to remove`,8,14),s.textAlign="right",s.fillStyle="#52cffe";const c=this.computeMag({re:1,im:0});s.fillText(`DC gain: ${isFinite(c)?c.toFixed(3):"∞"}`,n-8,14)}drawResponse(){const t=this.responseCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d"),a=800,o={l:44,r:14,t:22,b:24},l=n-o.l-o.r,c=i-o.t-o.b;s.fillStyle="#04050a",s.fillRect(0,0,n,i);const h=new Float32Array(a);let u=.1;for(let f=0;f<a;f++){const g=Math.PI*f/(a-1),_=this.computeMag({re:Math.cos(g),im:Math.sin(g)});h[f]=isFinite(_)?Math.min(_,16):16,h[f]>u&&h[f]<16&&(u=h[f])}const d=Math.max(u*1.15,1.05);for(let f=0;f<a;f+=4){const g=o.l+f/(a-1)*l,_=o.t+c-h[f]/d*c,p=h[f]/d,[m,M,S]=Pi(p),E=s.createLinearGradient(0,_,0,o.t+c);E.addColorStop(0,`rgba(${m},${M},${S},0.55)`),E.addColorStop(1,`rgba(${m},${M},${S},0.0)`),s.fillStyle=E,s.fillRect(g-1.5,_,3,o.t+c-_)}s.strokeStyle="rgba(255,255,255,0.04)",s.lineWidth=1;for(let f=0;f<=4;f++){const g=o.t+c-f/4*c;s.beginPath(),s.moveTo(o.l,g),s.lineTo(o.l+l,g),s.stroke(),s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",s.textAlign="right",s.fillText((f/4*d).toFixed(1),o.l-4,g+3)}s.strokeStyle="rgba(255,255,255,0.08)",s.lineWidth=1,s.beginPath(),s.moveTo(o.l,o.t+c),s.lineTo(o.l+l,o.t+c),s.stroke(),s.beginPath();for(let f=0;f<a;f++){const g=o.l+f/(a-1)*l,_=o.t+c-h[f]/d*c;f===0?s.moveTo(g,_):s.lineTo(g,_)}s.strokeStyle="rgba(255,255,255,0.9)",s.lineWidth=2,s.shadowColor="rgba(255,255,255,0.6)",s.shadowBlur=8,s.stroke(),s.shadowBlur=0,s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",s.textAlign="center",["DC (0)","π/4","π/2","3π/4","Nyquist (π)"].forEach((f,g)=>s.fillText(f,o.l+g/4*l,i-6))}drawSpectrum(){const t=this.spectrumCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d"),a={l:38,r:14,t:18,b:18},o=n-a.l-a.r,l=i-a.t-a.b;s.fillStyle="#04050a",s.fillRect(0,0,n,i),!!(this.origSpectrumStatic||this.analyserNode)||(s.fillStyle="rgba(255,255,255,0.07)",s.font="10px JetBrains Mono",s.textAlign="center",s.fillText("Upload audio to see spectrum",n/2,i/2+4)),s.strokeStyle="rgba(255,255,255,0.04)",s.lineWidth=1,[-80,-60,-40,-20,0].forEach(d=>{const f=a.t+l-(d+80)/80*l;s.beginPath(),s.moveTo(a.l,f),s.lineTo(a.l+o,f),s.stroke(),s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",s.textAlign="right",s.fillText(`${d}`,a.l-4,f+3)});const h=(d,f,g,_,p)=>{s.beginPath(),s.moveTo(a.l,a.t+l);for(let S=1;S<f;S++){const E=g?d[S]:20*Math.log10(Math.max(d[S],1e-9)),D=Math.log10(1+S/f*9)/Math.log10(10),A=a.l+D*o,C=a.t+l-Math.max(0,Math.min(1,(E- -80)/80))*l;s.lineTo(A,C)}s.lineTo(a.l+o,a.t+l),s.closePath(),s.fillStyle=`rgba(${_},${p})`,s.fill()};this.origSpectrumStatic&&h(this.origSpectrumStatic,this.origSpectrumStatic.length,!1,"200,200,200",.22),this.analyserNode&&this.analyserData&&(this.analyserNode.getFloatFrequencyData(this.analyserData),h(this.analyserData,this.analyserData.length,!0,"82,207,254",.65)),s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",s.textAlign="center";const u=this.sampleRate/2;[.02,.1,.25,.5,1].forEach(d=>{const f=Math.log10(1+d*9)/Math.log10(10),g=d*u;s.fillText(g>=1e3?`${(g/1e3).toFixed(0)}k`:`${g.toFixed(0)}`,a.l+f*o,i-4)}),this.analyserNode&&(s.fillStyle="rgba(82,207,254,0.8)",s.font="bold 8px JetBrains Mono",s.textAlign="right",s.fillText("● LIVE",n-a.r-2,a.t+22));{s.beginPath();let _=!1;for(let p=1;p<512;p++){const m=p/512,M=m*Math.PI,S=this.computeMag({re:Math.cos(M),im:Math.sin(M)});if(!isFinite(S)){_=!1;continue}const E=20*Math.log10(Math.max(S*this.lastNormScale,1e-9)),D=Math.max(0,Math.min(1,(E- -80)/80)),A=Math.log10(1+m*9)/Math.log10(10),C=a.l+A*o,F=a.t+l-D*l;_?s.lineTo(C,F):(s.moveTo(C,F),_=!0)}s.strokeStyle="rgba(255,220,80,0.9)",s.lineWidth=1.5,s.shadowColor="rgba(255,200,60,0.6)",s.shadowBlur=6,s.stroke(),s.shadowBlur=0,s.fillStyle="rgba(255,220,80,0.85)",s.font="bold 8px JetBrains Mono",s.textAlign="right",s.fillText("— |H(ω)| normalized",n-a.r-2,a.t+12)}}draw3DFallback(){const t=this.surfaceCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d");if(!s)return;const a=44,o=1.75,l=this.rotAngle2D,c=.47,h=Math.cos(l),u=Math.sin(l),d=Math.cos(c),f=Math.sin(c),g=220,_=5.2,p=3.8;s.fillStyle="#04050a",s.fillRect(0,0,n,i);const m=[];for(let E=0;E<=a;E++){m[E]=[];for(let D=0;D<=a;D++){const A=-o+2*o*E/a,C=-o+2*o*D/a,F=this.computeMag({re:A,im:C}),T=Math.atan(isFinite(F)?F/2:50)/(Math.PI/2)*p*.32,y=A*h+C*u,P=-A*u+C*h,H=T*d-P*f,q=T*f+P*d+_;m[E][D]={sx:y/q*g+n/2,sy:-H/q*g+i*.6,depth:q,h:T}}}const M=[];for(let E=0;E<a;E++)for(let D=0;D<a;D++){const A=(m[E][D].depth+m[E+1][D].depth+m[E][D+1].depth+m[E+1][D+1].depth)/4,C=(m[E][D].h+m[E+1][D].h+m[E][D+1].h+m[E+1][D+1].h)/4;M.push({i:E,j:D,d:A,aH:C})}M.sort((E,D)=>D.d-E.d);const S=p*.32;for(const{i:E,j:D,aH:A}of M){s.beginPath(),s.moveTo(m[E][D].sx,m[E][D].sy),s.lineTo(m[E+1][D].sx,m[E+1][D].sy),s.lineTo(m[E+1][D+1].sx,m[E+1][D+1].sy),s.lineTo(m[E][D+1].sx,m[E][D+1].sy),s.closePath();const[C,F,T]=Pi(A/S);s.fillStyle=`rgb(${C},${F},${T})`,s.fill(),s.strokeStyle="rgba(0,0,0,0.2)",s.lineWidth=.3,s.stroke()}}startAnimation(){let t=0;const e=n=>{var s,a;const i=Math.min((n-t)/1e3,.05);t=n,this.rotAngle2D=(this.rotAngle2D+i*.2)%(2*Math.PI),this.useThreeJS&&this.threeRenderer&&this.threeScene&&this.threeCamera?(this.updateSpectrumBars3D(),(s=this.threeControls)==null||s.update(),this.threeRenderer.render(this.threeScene,this.threeCamera)):this.draw3DFallback(),this.isPlaying&&this.audioCtx&&this.originalBuffer&&(this.pausedAt=Math.min(this.audioCtx.currentTime-this.playbackStartedAt,this.originalBuffer.duration),(a=this.waveformTimeline)==null||a.setPlayhead(this.pausedAt)),this.updateOutputMakeup(),this.drawZPlane(),this.drawResponse(),this.drawSpectrum(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}destroy(){var t,e;this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),this.audioCtx=null,(t=this.threeControls)==null||t.dispose(),(e=this.threeRenderer)==null||e.dispose(),document.body.style.overflowY="",window.removeEventListener("resize",this.onResize)}}function em(r){let t=1;for(;t<r;)t<<=1;return t}function nm(r,t){const e=r.length;let n=0;for(let i=0;i<e-1;i++){if(i<n){let a=r[i];r[i]=r[n],r[n]=a,a=t[i],t[i]=t[n],t[n]=a}let s=e>>1;for(;s<=n;)n-=s,s>>=1;n+=s}for(let i=1;i<e;i<<=1){const s=i<<1,a=Math.PI/i;for(let o=0;o<i;o++){const l=-o*a,c=Math.cos(l),h=Math.sin(l);for(let u=o;u<e;u+=s){const d=u+i,f=c*r[d]-h*t[d],g=c*t[d]+h*r[d];r[d]=r[u]-f,t[d]=t[u]-g,r[u]+=f,t[u]+=g}}}}function ra(r,t,e=512){const n=em(Math.max(64,r.length)),i=new Float64Array(n),s=new Float64Array(n),a=Math.min(r.length,n);for(let u=0;u<a;u++){const d=.5*(1-Math.cos(2*Math.PI*u/Math.max(1,a-1)));i[u]=r[u]*d}nm(i,s);const o=n/2,l=new Float32Array(e),c=new Float32Array(e),h=t/2;for(let u=0;u<e;u++){const d=u/(e-1)*h;l[u]=d;const f=Math.round(d/h*(o-1)),g=Math.sqrt(i[f]*i[f]+s[f]*s[f])/n;c[u]=Math.max(-120,20*Math.log10(g+1e-12))}return{freqs:l,magnitudesDb:c}}function Lo(r,t,e=800){return ra(r,t,e)}let vr=null,im=0;function sm(){if(!vr){const r="/visualization/workers/convolve-worker.js";vr=new Worker(r,{type:"classic"})}return vr}function rm(r,t){return new Promise((e,n)=>{const i=sm(),s=++im,a=o=>{const l=o.data||{};l.id===s&&(i.removeEventListener("message",a),l.type==="result"?e(new Float32Array(l.result)):n(new Error(l.message||"Convolution worker failed")))};i.addEventListener("message",a),i.postMessage({type:"convolve",id:s,signal:r.slice(),kernel:t.slice()},[r.slice().buffer,t.slice().buffer])})}const xr=480,Sr=12,am=8192,om=1e3/30;class xa{constructor(t){b(this,"container");b(this,"sharedAudio",Sn.getInstance());b(this,"audioContext",null);b(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),signalWaveform:Mt("signalWaveform",!0),signalSpectrum:Mt("signalSpectrum",!0),kernelWaveform:Mt("kernelWaveform",!0),kernelSpectrum:Mt("kernelSpectrum",!0),resultWaveform:Mt("resultWaveform",!0),slidingView:Mt("slidingView",!0),animSpectrums:Mt("animSpectrums",!0)});b(this,"signalTrack");b(this,"kernelTrack");b(this,"totalSize",xr);b(this,"colWidth",xr);b(this,"signalCol");b(this,"kernelCol");b(this,"specRow");b(this,"resultWaveform");b(this,"resultCanvas");b(this,"resultCtx");b(this,"resultPanel");b(this,"lastAnimFrameTime",0);b(this,"signalSpectrumAnim");b(this,"kernelSpectrumAnim");b(this,"outputSpectrumAnim");b(this,"calcButton");b(this,"statusLabel");b(this,"convolved",null);b(this,"convolvedBuffer",null);b(this,"convSampleRate",44100);b(this,"cachedSignalRef",null);b(this,"cachedKernelRef",null);b(this,"isComputing",!1);b(this,"computeToken",0);b(this,"isAnimating",!1);b(this,"isPlaying",!1);b(this,"animationId",null);b(this,"sourceNode",null);b(this,"gainNode",null);b(this,"startTime",0);b(this,"pausedAt",0);b(this,"kernelPosition",0);b(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext(),await this.loadDefaults()}computeTotalSize(){return Math.max(xr,Math.floor(this.container.clientWidth)-4)}createUI(){this.container.style.width="100%",this.totalSize=this.computeTotalSize(),this.colWidth=Math.floor((this.totalSize-Sr-4)/2),this.signalTrack=this.createTrack("SIGNAL",this.colWidth,o=>this.loadTrack(this.signalTrack,o),this.ui.signalWaveform,this.ui.signalSpectrum),this.kernelTrack=this.createTrack("KERNEL",this.colWidth,o=>this.loadTrack(this.kernelTrack,o),this.ui.kernelWaveform,this.ui.kernelSpectrum);const t=document.createElement("div");t.style.display="flex",t.style.gap=`${Sr}px`,t.style.marginBottom="10px";const e=[];this.ui.transport&&e.push(this.signalTrack.transport.getElement()),this.signalTrack.waveform&&e.push(this.signalTrack.waveform.getElement()),this.signalTrack.spectrum&&e.push(this.signalTrack.spectrum.getElement());const n=this.wrapSection("1. SIGNAL",e);n.style.width=`${this.colWidth}px`,n.style.flex="0 0 auto",this.signalCol=n;const i=[];this.ui.transport&&i.push(this.kernelTrack.transport.getElement()),this.kernelTrack.waveform&&i.push(this.kernelTrack.waveform.getElement()),this.kernelTrack.spectrum&&i.push(this.kernelTrack.spectrum.getElement());const s=this.wrapSection("2. KERNEL",i);s.style.width=`${this.colWidth}px`,s.style.flex="0 0 auto",this.kernelCol=s,t.append(n,s),this.container.appendChild(t);const a=document.createElement("div");if(a.className="controls-container",a.style.justifyContent="center",a.style.display="flex",a.style.alignItems="center",a.style.marginBottom="8px",this.calcButton=new Io("Computing…",()=>this.onCalcPressed()),this.calcButton.setDisabled(!0),a.appendChild(this.calcButton.getElement()),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.style.marginLeft="16px",this.statusLabel.textContent="Load two clips to begin",a.appendChild(this.statusLabel),this.container.appendChild(a),this.resultPanel=this.wrapSection("3. CONVOLUTION RESULT",[]),this.ui.resultWaveform&&(this.resultWaveform=new gi({width:this.totalSize-4,height:70,title:"OUTPUT WAVEFORM (kernel slides · result in red)"},()=>{}),this.resultPanel.appendChild(this.resultWaveform.getElement())),this.ui.slidingView){const o=document.createElement("div");o.className="timeline-panel";const l=document.createElement("div");l.className="timeline-title",l.textContent="SLIDING KERNEL OVER SIGNAL",this.resultCanvas=document.createElement("canvas"),this.resultCanvas.className="timeline-canvas",this.resultCtx=this.resultCanvas.getContext("2d",{alpha:!0}),o.append(l,this.resultCanvas),this.resultPanel.appendChild(o),this.resizeResultCanvas()}if(this.ui.animSpectrums){const o=document.createElement("div");o.style.display="grid",o.style.gridTemplateColumns="1fr 1fr 1fr",o.style.gap="6px",this.specRow=o;const l=Math.floor((this.totalSize-12)/3);this.signalSpectrumAnim=new We({width:l,height:130,label:"SIGNAL (live region)",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),this.kernelSpectrumAnim=new We({width:l,height:130,label:"KERNEL",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),this.outputSpectrumAnim=new We({width:l,height:130,label:"OUTPUT (accumulating)",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),o.append(this.signalSpectrumAnim.getElement(),this.kernelSpectrumAnim.getElement(),this.outputSpectrumAnim.getElement()),this.resultPanel.appendChild(o)}this.container.appendChild(this.resultPanel),this.resizeDisplays()}wrapSection(t,e){const n=document.createElement("div");n.style.marginBottom="10px";const i=document.createElement("div");return i.className="timeline-title",i.textContent=t,i.style.marginBottom="6px",n.appendChild(i),e.forEach(s=>n.appendChild(s)),n}createTrack(t,e,n,i,s){const a=document.createElement("span");a.className="transport-status",a.textContent="No clip loaded";const o=new Ui({onPlay:()=>this.playTrack(t),onPause:()=>this.pauseTrack(),onStop:()=>this.stopTrack(),onUpload:n,uploadLabel:"Upload",showUpload:this.ui.upload});o.getElement().querySelector(".transport-left").appendChild(a);const l=i?new gi({width:e,height:60,title:`${t} WAVEFORM`},()=>{}):void 0,c=s?new We({width:e,height:130,label:`${t} — FULL DFT`,minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}):void 0;return{label:t,buffer:null,samples:null,sampleRate:44100,transport:o,waveform:l,spectrum:c,status:a}}async loadDefaults(){const t=mi("audio"),e=mi("kernel");t?await this.loadTrackFromUrl(this.signalTrack,t):await this.loadSynthetic(this.signalTrack,"signal"),e?await this.loadTrackFromUrl(this.kernelTrack,e):await this.loadSynthetic(this.kernelTrack,"kernel")}async loadSynthetic(t,e){if(!this.audioContext)return;const n=44100,i=e==="signal"?1.5:.25,s=Math.floor(n*i),a=this.audioContext.createBuffer(1,s,n),o=a.getChannelData(0);if(e==="signal")for(let l=0;l<s;l++){const c=l/n;o[l]=.6*Math.sin(2*Math.PI*440*c)*Math.exp(-c*2)}else for(let l=0;l<s;l++){const c=l/n-i/2;o[l]=Math.exp(-c*c*8e3)}this.setTrackBuffer(t,a,e==="signal"?"Default signal":"Default kernel")}async loadTrack(t,e){t.status.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const n=await e.arrayBuffer(),i=await this.sharedAudio.decodeAudioData(n);this.setTrackBuffer(t,i,e.name)}catch{t.status.textContent="Load error"}}async loadTrackFromUrl(t,e){t.status.textContent="Loading…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const i=await(await fetch(Ni(e))).arrayBuffer(),s=await this.sharedAudio.decodeAudioData(i);this.setTrackBuffer(t,s,e.split("/").pop()??e)}catch{t.status.textContent="Load error"}}setTrackBuffer(t,e,n){var i;t.buffer=e,t.samples=new Float32Array(e.getChannelData(0)),t.sampleRate=e.sampleRate,(i=t.waveform)==null||i.setWaveformFromBuffer(e),t.status.textContent=n,this.drawFullSpectrum(t),this.convolved=null,this.convolvedBuffer=null,this.stopTrack(),this.maybeAutoConvolve()}drawFullSpectrum(t){if(!t.samples||!t.spectrum)return;const{freqs:e,magnitudesDb:n}=Lo(t.samples,t.sampleRate,512);t.spectrum.clear(),t.spectrum.drawGrid(),t.spectrum.drawSpectrum(e,n,"#52cffe",2,1,!0)}maybeAutoConvolve(){if(!this.signalTrack.samples||!this.kernelTrack.samples){this.calcButton.setText("Calculate Convolution"),this.calcButton.setDisabled(!0),this.statusLabel.textContent="Load two clips to begin";return}this.runConvolution()}async runConvolution(){var s;const t=this.signalTrack.samples,e=this.kernelTrack.samples;if(!t||!e)return;if(this.convolved&&this.cachedSignalRef===t&&this.cachedKernelRef===e){this.calcButton.setText("Play Convolution"),this.calcButton.setDisabled(!1),this.statusLabel.textContent="Ready (cached) — press to play";return}this.isComputing=!0;const n=++this.computeToken;this.calcButton.setText("Computing…"),this.calcButton.setDisabled(!0),this.statusLabel.textContent="Computing convolution in background…",this.convSampleRate=this.signalTrack.sampleRate;let i;try{i=await rm(t,e)}catch{i=Un.convolve(t,e)}if(n===this.computeToken){if(this.convolved=Un.normalizePeak(i,.9),this.cachedSignalRef=t,this.cachedKernelRef=e,this.audioContext){const a=this.audioContext.createBuffer(1,this.convolved.length,this.convSampleRate);a.copyToChannel(new Float32Array(this.convolved),0),this.convolvedBuffer=a,(s=this.resultWaveform)==null||s.setWaveformFromBuffer(a)}this.isComputing=!1,this.calcButton.setText("Play Convolution"),this.calcButton.setDisabled(!1),this.statusLabel.textContent="Ready — press to play"}}onCalcPressed(){this.isComputing||(this.convolved&&this.convolvedBuffer?(this.kernelPosition=0,this.pausedAt=0,this.isAnimating=!0,this.stopTrack(!1),this.playConvolved()):this.statusLabel.textContent="Load both clips first")}async playConvolved(){!this.convolvedBuffer||!this.audioContext||(this.stopTrack(!1),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.convolvedBuffer,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=.85,this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&this.finishAnimation()},this.isPlaying=!0,this.isAnimating=!0,this.signalTrack.transport.setPlaying(!0),this.startAnimationLoop())}playTrack(t){if(this.isAnimating&&this.convolvedBuffer){this.playConvolved();return}const e=t==="SIGNAL"?this.signalTrack:this.kernelTrack;!e.buffer||!this.audioContext||(this.stopTrack(!1),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=e.buffer,this.gainNode=this.audioContext.createGain(),this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.sourceNode.start(),this.isPlaying=!0,e.transport.setPlaying(!0))}pauseTrack(){!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this.teardownAudio(),this.isPlaying=!1,this.signalTrack.transport.setPlaying(!1),this.kernelTrack.transport.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null))}stopTrack(t=!0){this.teardownAudio(),this.isPlaying=!1,this.signalTrack.transport.setPlaying(!1),this.kernelTrack.transport.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),t&&(this.pausedAt=0,this.kernelPosition=0,this.isAnimating=!1)}finishAnimation(){this.stopTrack(!1),this.kernelPosition=this.convolved?this.convolved.length-1:0,this.statusLabel.textContent="Convolution complete",this.updateAnimationFrame()}teardownAudio(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),this.sourceNode=null,this.gainNode=null}startAnimationLoop(){const t=()=>{var o;if(!this.isPlaying||!this.audioContext||!this.convolved)return;const e=this.audioContext.currentTime-this.startTime;this.pausedAt=e,(o=this.resultWaveform)==null||o.setPlayhead(e);const n=this.convolved.length,i=n/this.convSampleRate,s=Math.min(1,i>0?e/i:1);this.kernelPosition=Math.floor(s*(n-1));const a=performance.now();a-this.lastAnimFrameTime>=om&&(this.lastAnimFrameTime=a,this.updateAnimationFrame()),this.animationId=requestAnimationFrame(t)};t()}updateAnimationFrame(){const t=this.signalTrack.samples,e=this.kernelTrack.samples;if(!(!t||!e||!this.convolved)&&(this.ui.slidingView&&this.drawSlidingWaveform(t,e,this.convolved,this.kernelPosition),this.ui.animSpectrums)){const n=e.length,i=Math.max(0,this.kernelPosition-n+1),s=Math.min(t.length,this.kernelPosition+1),a=t.slice(i,Math.max(i+1,s));this.drawAnimSpectrum(this.signalSpectrumAnim,a,this.convSampleRate,"#52cffe"),this.drawAnimSpectrum(this.kernelSpectrumAnim,e,this.convSampleRate,"#ffd700");const o=Math.min(this.convolved.length,this.kernelPosition+1),l=this.convolved.subarray(0,Math.max(1,o));this.drawAnimSpectrum(this.outputSpectrumAnim,l,this.convSampleRate,"#ff4d6d",!1)}}drawDownsampledLine(t,e,n,i,s,a,o){const l=i-n;if(l<=0)return;const c=s(n),h=s(i),u=Math.max(1,Math.ceil(h-c)),d=Math.max(1,Math.floor(l/u));t.beginPath();let f=!0;for(let g=0;g<u;g++){const _=n+g*d,p=g===u-1?i:Math.min(i,_+d);let m=1/0,M=-1/0;for(let A=_;A<p;A++){const C=e(A);C<m&&(m=C),C>M&&(M=C)}if(m===1/0)continue;const S=c+g,E=a-m*o*.4,D=a-M*o*.4;f&&(t.moveTo(S,D),f=!1),t.lineTo(S,D),t.lineTo(S,E)}t.stroke()}drawSlidingWaveform(t,e,n,i){if(!this.resultCanvas||!this.resultCtx)return;const s=this.totalSize-4,a=100,o=this.resultCtx,l=a/2,c=14,h=a-2*c;o.clearRect(0,0,s,a),o.fillStyle="rgba(11, 16, 24, 0.92)",o.fillRect(0,0,s,a);const u=n.length,d=p=>p/u*s;o.strokeStyle="rgba(82, 207, 254, 0.45)",o.lineWidth=1,this.drawDownsampledLine(o,p=>p<t.length?t[p]:0,0,u,d,l,h);const f=Math.max(0,i-e.length+1),g=Math.min(u,f+e.length);o.strokeStyle="rgba(255, 215, 0, 0.85)",o.lineWidth=2,this.drawDownsampledLine(o,p=>e[e.length-1-(p-f)],f,g,d,l,h),o.fillStyle="rgba(255, 215, 0, 0.08)",o.fillRect(d(f),c,d(e.length),h);const _=Math.min(u,i+1);o.strokeStyle="#ff4d6d",o.lineWidth=2,this.drawDownsampledLine(o,p=>n[p],0,_,d,l,h)}static decimateForAnalysis(t,e,n){if(t.length<=n)return{samples:t,sampleRate:e};const i=Math.ceil(t.length/n),s=Math.ceil(t.length/i),a=new Float32Array(s);for(let o=0,l=0;o<t.length;o+=i,l++)a[l]=t[o];return{samples:a,sampleRate:e/i}}drawAnimSpectrum(t,e,n,i,s=!0){if(!t)return;const{samples:a,sampleRate:o}=s?xa.decimateForAnalysis(e,n,am):{samples:e,sampleRate:n},{freqs:l,magnitudesDb:c}=Lo(a,o,256);t.clear(),t.drawGrid(),t.drawSpectrum(l,c,i,2,1,!0)}resizeResultCanvas(){if(!this.resultCanvas||!this.resultCtx)return;const t=this.totalSize-4,e=100,n=window.devicePixelRatio||1;this.resultCanvas.width=t*n,this.resultCanvas.height=e*n,this.resultCanvas.style.width=`${t}px`,this.resultCanvas.style.height=`${e}px`,this.resultCtx.setTransform(n,0,0,n,0,0)}resizeDisplays(){var t,e,n,i,s,a,o,l;if(this.totalSize=this.computeTotalSize(),this.colWidth=Math.floor((this.totalSize-Sr-4)/2),this.signalCol&&(this.signalCol.style.width=`${this.colWidth}px`),this.kernelCol&&(this.kernelCol.style.width=`${this.colWidth}px`),(t=this.signalTrack.waveform)==null||t.resize(this.colWidth,60),(e=this.signalTrack.spectrum)==null||e.resize(this.colWidth,130),(n=this.kernelTrack.waveform)==null||n.resize(this.colWidth,60),(i=this.kernelTrack.spectrum)==null||i.resize(this.colWidth,130),(s=this.resultWaveform)==null||s.resize(this.totalSize-4,70),this.resizeResultCanvas(),this.specRow){const c=Math.floor((this.totalSize-12)/3);(a=this.signalSpectrumAnim)==null||a.resize(c,130),(o=this.kernelSpectrumAnim)==null||o.resize(c,130),(l=this.outputSpectrumAnim)==null||l.resize(c,130)}this.signalTrack.samples&&this.drawFullSpectrum(this.signalTrack),this.kernelTrack.samples&&this.drawFullSpectrum(this.kernelTrack),this.convolved&&this.updateAnimationFrame()}destroy(){this.stopTrack(),window.removeEventListener("resize",this.onResize)}}class lm{constructor(t){b(this,"container");b(this,"sharedAudio",Sn.getInstance());b(this,"audioContext",null);b(this,"ui",{transport:Mt("transport",!0),upload:Mt("upload",!0),waveform:Mt("waveform",!0),liveSpectrum:Mt("liveSpectrum",!0),cumulativeSpectrum:Mt("cumulativeSpectrum",!0)});b(this,"transportBar");b(this,"statusLabel");b(this,"waveformTimeline");b(this,"liveSpectrum");b(this,"cumulativeSpectrum");b(this,"rawBuffer",null);b(this,"samples",null);b(this,"sampleRate",44100);b(this,"accumulated",new Float32Array(0));b(this,"windowSize",2048);b(this,"sourceNode",null);b(this,"gainNode",null);b(this,"isPlaying",!1);b(this,"animationId",null);b(this,"startTime",0);b(this,"pausedAt",0);b(this,"lastAccumSample",0);b(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext(),await this.loadDefaultAudio()}getWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=this.getWidth();if(this.ui.transport?(this.transportBar=new Ui({onPlay:()=>this.play(),onPause:()=>this.pause(),onStop:()=>this.stop(!0),onUpload:e=>this.handleUpload(e),uploadLabel:"Upload Audio",showUpload:this.ui.upload}),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())):(this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading…",this.statusLabel.style.display="block",this.statusLabel.style.marginBottom="8px",this.container.appendChild(this.statusLabel)),this.ui.waveform&&(this.waveformTimeline=new gi({width:t,height:100,title:"WAVEFORM / PLAYHEAD"},e=>this.seek(e)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.liveSpectrum||this.ui.cumulativeSpectrum){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="8px",this.ui.liveSpectrum&&(this.liveSpectrum=new We({width:t,height:360,label:`LIVE WINDOW (${this.windowSize} samples)`,minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),e.appendChild(this.liveSpectrum.getElement())),this.ui.cumulativeSpectrum&&(this.cumulativeSpectrum=new We({width:t,height:360,label:"CUMULATIVE DFT (grows until clip ends = full DFT)",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),e.appendChild(this.cumulativeSpectrum.getElement())),this.container.appendChild(e)}this.resizeDisplays()}async loadDefaultAudio(){const t=mi("audio");if(t){await this.loadFromUrl(t);return}await this.loadBuiltInChirp()}async loadBuiltInChirp(){if(!this.audioContext)return;const t=44100,e=2,n=t*e,i=this.audioContext.createBuffer(1,n,t),s=i.getChannelData(0);for(let a=0;a<n;a++){const o=a/t,l=200+3800*(o/e);s[a]=.55*Math.sin(2*Math.PI*l*o)}this.setBuffer(i,"Default chirp")}async loadFromUrl(t){this.statusLabel.textContent="Loading…";try{const n=await(await fetch(Ni(t))).arrayBuffer(),i=await this.sharedAudio.decodeAudioData(n);this.setBuffer(i,t.split("/").pop()??t)}catch{this.statusLabel.textContent="Load error — using default",await this.loadBuiltInChirp()}}async handleUpload(t){this.statusLabel.textContent="Decoding…";try{const e=await t.arrayBuffer(),n=await this.sharedAudio.decodeAudioData(e);this.setBuffer(n,t.name)}catch{this.statusLabel.textContent="Upload error"}}setBuffer(t,e){var n;this.rawBuffer=t,this.samples=new Float32Array(t.getChannelData(0)),this.sampleRate=t.sampleRate,(n=this.waveformTimeline)==null||n.setWaveformFromBuffer(t),this.resetAccumulation(),this.statusLabel.textContent=e,this.drawSpectra(0)}resetAccumulation(){this.accumulated=new Float32Array(0),this.lastAccumSample=0,this.pausedAt=0}seek(t){var n;if(!this.samples)return;this.pausedAt=t;const e=Math.floor(t*this.sampleRate);this.accumulated=this.samples.slice(0,e),this.lastAccumSample=e,(n=this.waveformTimeline)==null||n.setPlayhead(t),this.drawSpectra(e),this.isPlaying&&(this.stop(!1),this.play())}async play(){var t;!this.rawBuffer||!this.audioContext||(this.pausedAt<=0&&this.resetAccumulation(),this.stop(!1),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.rawBuffer,this.gainNode=this.audioContext.createGain(),this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&this.stop(!0)},this.isPlaying=!0,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel.textContent="Playing — accumulating DFT",this.startAnimation())}pause(){var t;!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this.teardownAudio(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.statusLabel.textContent="Paused")}stop(t){var e,n;this.teardownAudio(),this.isPlaying=!1,(e=this.transportBar)==null||e.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),t&&(this.resetAccumulation(),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.drawSpectra(0),this.statusLabel.textContent="Stopped")}teardownAudio(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),this.sourceNode=null,this.gainNode=null}startAnimation(){const t=()=>{var i;if(!this.isPlaying||!this.audioContext||!this.samples)return;const e=this.audioContext.currentTime-this.startTime;this.pausedAt=e,(i=this.waveformTimeline)==null||i.setPlayhead(e);const n=Math.min(this.samples.length,Math.floor(e*this.sampleRate));if(n>this.lastAccumSample){const s=this.samples.slice(this.lastAccumSample,n),a=new Float32Array(this.accumulated.length+s.length);a.set(this.accumulated),a.set(s,this.accumulated.length),this.accumulated=a,this.lastAccumSample=n}this.drawSpectra(n),this.animationId=requestAnimationFrame(t)};t()}drawSpectra(t){if(this.samples){if(this.liveSpectrum){const e=Math.max(0,t-this.windowSize),n=this.samples.slice(e,t);if(n.length>=8){const i=ra(n,this.sampleRate,1024);this.liveSpectrum.clear(),this.liveSpectrum.drawGrid(),this.liveSpectrum.drawSpectrum(i.freqs,i.magnitudesDb,"#52cffe",2,1,!0),this.liveSpectrum.drawFreqAxis()}else this.liveSpectrum.clear(),this.liveSpectrum.drawGrid(),this.liveSpectrum.drawFreqAxis()}if(this.cumulativeSpectrum)if(this.accumulated.length>=8){const e=ra(this.accumulated,this.sampleRate,1024);this.cumulativeSpectrum.clear(),this.cumulativeSpectrum.drawGrid(),this.cumulativeSpectrum.drawSpectrum(e.freqs,e.magnitudesDb,"#ffd700",2.5,1,!0),this.cumulativeSpectrum.drawFreqAxis()}else this.cumulativeSpectrum.clear(),this.cumulativeSpectrum.drawGrid(),this.cumulativeSpectrum.drawFreqAxis()}}resizeDisplays(){var e,n,i;const t=this.getWidth();(e=this.waveformTimeline)==null||e.resize(t,100),(n=this.liveSpectrum)==null||n.resize(t,360),(i=this.cumulativeSpectrum)==null||i.resize(t,360),this.drawSpectra(this.lastAccumSample)}destroy(){this.stop(!0),window.removeEventListener("resize",this.onResize)}}class ai{constructor(t,e){b(this,"root");b(this,"content");this.root=document.createElement("div"),this.root.className="demo-shell";const n=document.createElement("div");n.className="demo-shell-toolbar";const i=document.createElement("button");i.className="back-button",i.textContent="← Back",i.onclick=e;const s=document.createElement("div");s.className="demo-shell-title",s.textContent=t,n.append(i,s),this.content=document.createElement("div"),this.content.className="demo-shell-content",this.root.append(n,this.content)}getElement(){return this.root}getContentElement(){return this.content}}function cm(r="app"){const t=document.getElementById(r);if(!t)return()=>{};t.style.transformOrigin="center center";let e=null;const n=()=>{e=null;const a=t.offsetWidth,o=t.offsetHeight;if(a===0||o===0)return;const l=window.innerWidth,c=window.innerHeight,h=16,u=(l-h)/a,d=(c-h)/o,f=Math.max(.1,Math.min(u,d));t.style.transform=`scale(${f})`},i=()=>{e!==null&&cancelAnimationFrame(e),e=requestAnimationFrame(n)};window.addEventListener("resize",i);const s=new ResizeObserver(i);return s.observe(t),i(),()=>{window.removeEventListener("resize",i),s.disconnect(),e!==null&&cancelAnimationFrame(e)}}let Xt=null;document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("app"),t=new Sl;t.register("/",()=>({mount:()=>{new Ml(r,t).mount()},unmount:()=>{r.innerHTML=""}})),t.register("/aliasing-sine",()=>({mount:()=>{r.innerHTML="";const e=new ai("Sine Wave Aliasing",()=>t.navigate("/")),n=document.createElement("div");n.id="sine-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),Xt=new yl("sine-container")},unmount:()=>{Xt&&"destroy"in Xt&&Xt.destroy(),Xt=null,r.innerHTML=""}})),t.register("/aliasing-audio",()=>({mount:()=>{r.innerHTML="";const e=new ai("Audio Aliasing",()=>t.navigate("/")),n=document.createElement("div");n.id="audio-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),Xt=new yr("audio-container")},unmount:()=>{Xt&&"destroy"in Xt&&Xt.destroy(),Xt=null,r.innerHTML=""}})),t.register("/z-transform",()=>({mount:()=>{r.innerHTML="";const e=new ai("Z-Transform Explorer",()=>t.navigate("/")),n=document.createElement("div");n.id="ztransform-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),Xt=new Er("ztransform-container")},unmount:()=>{Xt&&"destroy"in Xt&&Xt.destroy(),Xt=null,r.innerHTML=""}})),t.register("/pole-zero",()=>({mount:()=>{r.innerHTML="";const e=new ai("Pole-Zero Designer",()=>t.navigate("/")),n=document.createElement("div");n.id="polezero-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),Xt=new tm("polezero-container")},unmount:()=>{Xt&&"destroy"in Xt&&Xt.destroy(),Xt=null,r.innerHTML=""}})),t.register("/convolution",()=>({mount:()=>{r.innerHTML="";const e=new ai("Convolution / Cross-Correlation",()=>t.navigate("/")),n=document.createElement("div");n.id="convolution-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),Xt=new xa("convolution-container")},unmount:()=>{Xt&&"destroy"in Xt&&Xt.destroy(),Xt=null,r.innerHTML=""}})),t.register("/dft-demo",()=>({mount:()=>{r.innerHTML="";const e=new ai("DFT Accumulator",()=>t.navigate("/")),n=document.createElement("div");n.id="dft-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),Xt=new lm("dft-container")},unmount:()=>{Xt&&"destroy"in Xt&&Xt.destroy(),Xt=null,r.innerHTML=""}})),t.start(),cm("app")});
