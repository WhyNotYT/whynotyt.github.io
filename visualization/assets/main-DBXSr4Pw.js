var Tl=Object.defineProperty;var Al=(a,t,e)=>t in a?Tl(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var x=(a,t,e)=>Al(a,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();class Cl{constructor(){x(this,"currentHandler",null);x(this,"handlers",new Map);x(this,"basePath");this.basePath="/visualization/",window.addEventListener("popstate",()=>this.handleRoute())}register(t,e){this.handlers.set(t,e)}navigate(t){const e=t==="/"?this.basePath:`${this.basePath}${t.slice(1)}.html`;window.location.href=e}handleRoute(){const t=window.location.pathname;let e="/";t.includes("aliasing-sine.html")?e="/aliasing-sine":t.includes("aliasing-audio.html")?e="/aliasing-audio":t.includes("z-transform.html")?e="/z-transform":t.includes("pole-zero.html")?e="/pole-zero":t.includes("convolution.html")?e="/convolution":t.includes("dft-demo.html")?e="/dft-demo":t.includes("difference-equations.html")?e="/difference-equations":t.includes("filter-design.html")&&(e="/filter-design"),this.currentHandler&&this.currentHandler.unmount();const n=this.handlers.get(e)||this.handlers.get("/");n&&(this.currentHandler=n(),this.currentHandler.mount())}start(){this.handleRoute()}}class Pl{constructor(t,e){x(this,"container");x(this,"router");this.container=t,this.router=e}mount(){this.container.innerHTML=`
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

          <div class="home-card" data-route="/difference-equations">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <text x="8" y="28" fill="var(--color-accent-primary)" font-size="11" font-family="monospace">y[n]</text>
                <text x="8" y="48" fill="#ffd700" font-size="10" font-family="monospace">H(z)</text>
                <rect x="28" y="18" width="24" height="16" stroke="var(--color-accent-secondary)" fill="none"/>
                <rect x="28" y="38" width="24" height="14" stroke="var(--color-accent-primary)" fill="none"/>
              </svg>
            </div>
            <h2 class="card-title">Difference Equations</h2>
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
            <h2 class="card-title">Filter Design</h2>
            <div class="card-arrow">→</div>
          </div>
        </div>
      </div>
    `,this.container.querySelectorAll(".home-card").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-route");n&&this.router.navigate(n)})})}unmount(){this.container.innerHTML=""}}class Ge{constructor(t,e){x(this,"container");x(this,"svg");x(this,"value");x(this,"config");x(this,"onChange");x(this,"isDragging",!1);x(this,"startX",0);x(this,"startY",0);x(this,"startValue",0);x(this,"indicator");this.config={...t,defaultValue:t.defaultValue??t.value},this.value=t.value,this.onChange=e,this.container=this.createKnob(),this.svg=this.container.querySelector("svg"),this.indicator=this.svg.querySelector(".knob-indicator"),this.updateVisuals(),this.attachEventListeners()}createKnob(){const t=document.createElement("div");t.className="knob-wrapper";const e=document.createElement("div");e.className="knob-container";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 100 100"),n.setAttribute("class","knob-svg");const i=document.createElementNS("http://www.w3.org/2000/svg","circle");i.setAttribute("cx","50"),i.setAttribute("cy","50"),i.setAttribute("r","48"),i.setAttribute("class","knob-outer");const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx","50"),s.setAttribute("cy","50"),s.setAttribute("r","42"),s.setAttribute("class","knob-body");const r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("cx","50"),r.setAttribute("cy","50"),r.setAttribute("r","38"),r.setAttribute("class","knob-inner");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("class","knob-arc-track"),o.setAttribute("d",this.describeArc(50,50,45,210,330)),o.setAttribute("fill","none");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("class","knob-arc-value"),l.setAttribute("fill","none");const c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("class","knob-indicator");const h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("x1","50"),h.setAttribute("y1","18"),h.setAttribute("x2","50"),h.setAttribute("y2","32"),h.setAttribute("stroke-linecap","round");const u=document.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("cx","50"),u.setAttribute("cy","25"),u.setAttribute("r","4"),c.appendChild(h),c.appendChild(u),n.appendChild(i),n.appendChild(s),n.appendChild(r),n.appendChild(o),n.appendChild(l),n.appendChild(c),e.appendChild(n);const d=document.createElement("div");d.className="knob-label",d.textContent=this.config.label;const f=document.createElement("div");return f.className="knob-value",f.textContent=`${this.value}${this.config.unit}`,t.appendChild(e),t.appendChild(f),t.appendChild(d),t}describeArc(t,e,n,i,s){const r=this.polarToCartesian(t,e,n,s),o=this.polarToCartesian(t,e,n,i),l=s-i<=180?"0":"1";return`M ${r.x} ${r.y} A ${n} ${n} 0 ${l} 0 ${o.x} ${o.y}`}polarToCartesian(t,e,n,i){const s=(i-90)*Math.PI/180;return{x:t+n*Math.cos(s),y:e+n*Math.sin(s)}}getAngle(){return 210+(this.value-this.config.min)/(this.config.max-this.config.min)*300}updateVisuals(){const t=this.getAngle();this.indicator.setAttribute("transform",`rotate(${t} 50 50)`);const e=this.svg.querySelector(".knob-arc-value");e&&e.setAttribute("d",this.describeArc(50,50,45,210,t));const n=this.container.querySelector(".knob-value");if(n){const i=this.config.unit==="Hz"&&this.value>=1e3?`${(this.value/1e3).toFixed(1)}k${this.config.unit}`:`${Math.round(this.value)}${this.config.unit}`;n.textContent=i}}attachEventListeners(){const t=this.svg;t.addEventListener("dblclick",s=>{s.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value)}),t.addEventListener("mousedown",s=>{if(s.button===1){s.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value);return}});const e=s=>{s.button===0&&(s.preventDefault(),this.isDragging=!0,this.startX=s.clientX,this.startY=s.clientY,this.startValue=this.value,document.body.style.cursor="grabbing")},n=s=>{if(!this.isDragging)return;const r=s.clientX-this.startX,l=this.startY-s.clientY+r,c=this.config.max-this.config.min,u=.45*(s.shiftKey?.25:1),d=l*u*c/220;let f=this.startValue+d;f=Math.max(this.config.min,Math.min(this.config.max,f)),f=Math.round(f/this.config.step)*this.config.step,f!==this.value&&(this.value=f,this.updateVisuals(),this.onChange(this.value))},i=()=>{this.isDragging=!1,document.body.style.cursor=""};t.addEventListener("mousedown",e),document.addEventListener("mousemove",n),document.addEventListener("mouseup",i),t.addEventListener("touchstart",s=>{s.preventDefault(),this.isDragging=!0,this.startX=s.touches[0].clientX,this.startY=s.touches[0].clientY,this.startValue=this.value}),document.addEventListener("touchmove",s=>{if(!this.isDragging)return;const r=s.touches[0].clientX-this.startX,l=this.startY-s.touches[0].clientY+r,c=this.config.max-this.config.min,h=l*.45*c/220;let u=this.startValue+h;u=Math.max(this.config.min,Math.min(this.config.max,u)),u=Math.round(u/this.config.step)*this.config.step,u!==this.value&&(this.value=u,this.updateVisuals(),this.onChange(this.value))}),document.addEventListener("touchend",()=>{this.isDragging=!1})}getValue(){return this.value}setValue(t){this.value=Math.max(this.config.min,Math.min(this.config.max,t)),this.value=Math.round(this.value/this.config.step)*this.config.step,this.updateVisuals()}setMax(t){this.config.max=t,this.value>t&&(this.value=t,this.onChange(this.value)),this.updateVisuals()}getElement(){return this.container}}class cr{constructor(t,e){x(this,"element");x(this,"onClick");this.onClick=e,this.element=this.createButton(t)}createButton(t){const e=document.createElement("button");return e.className="vst-button",e.textContent=t,e.addEventListener("click",()=>{this.onClick()}),e}setText(t){this.element.textContent=t}setActive(t){t?this.element.classList.add("active"):this.element.classList.remove("active")}setDisabled(t){this.element.disabled=t}getElement(){return this.element}}class kn{static quantize(t,e){const n=Math.pow(2,e);let i=Math.floor((t+1)*.5*n);return i=Math.max(0,Math.min(n-1,i)),i/(n-1)*2-1}static getSamples(t,e,n=.1){const i=Math.floor(e*n),s=new Float32Array(i),r=new Float32Array(i);for(let o=0;o<i;o++){const l=o/e;s[o]=Math.sin(2*Math.PI*t*l),r[o]=l}return{samples:s,sampleTimes:r,duration:n}}static getAliasedFrequency(t,e){const n=e/2;if(t<=n)return t;const i=Math.floor((t+n)/e);return Math.abs(t-i*e)}static getAliasingInfo(t,e){const n=e/2,i=t>n,s=this.getAliasedFrequency(t,e);return{nyquistFreq:n,isAliasing:i,aliasedFreq:s}}static generateAudioForPlayback(t,e,n,i=32){const r=Math.floor(44100*n),o=new Float32Array(r),l=Math.round(t/e),c=t-l*e,h=Math.abs(c);if(h===0)return o;const u=c===0?1:Math.sign(c);for(let d=0;d<r;d++){const f=d/44100,g=u*Math.sin(2*Math.PI*h*f);o[d]=this.quantize(g,i)}return o}static convolve(t,e){const n=t.length+e.length-1,i=new Float32Array(n);for(let s=0;s<n;s++){let r=0;for(let o=0;o<e.length;o++){const l=s-o;l>=0&&l<t.length&&(r+=t[l]*e[o])}i[s]=r}return i}static normalizePeak(t,e=.95){let n=0;for(let r=0;r<t.length;r++)n=Math.max(n,Math.abs(t[r]));if(n<1e-8)return t;const i=e/n,s=new Float32Array(t.length);for(let r=0;r<t.length;r++)s[r]=t[r]*i;return s}}class Ui{constructor(t){x(this,"canvas");x(this,"ctx");x(this,"container");x(this,"options");x(this,"dpr",1);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.1)",...t},this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas()}createContainer(){const t=document.createElement("div");t.className="wave-display";const e=document.createElement("canvas");return e.className="wave-canvas",t.appendChild(e),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.canvas.style.width=this.options.width+"px",this.canvas.style.height=this.options.height+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas()}clear(){this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t,height:e}=this.options,n=e/2;this.ctx.font="700 16px 'Segoe UI', sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.textAlign="center",this.ctx.fillText(this.options.label,460,15),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath();const i=8;for(let s=1;s<i;s++){const r=t/i*s;this.ctx.moveTo(r,0),this.ctx.lineTo(r,e)}this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255,255,255,0.05)",this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(t,e),this.ctx.stroke()}drawWave(t,e,n=.8,i,s=2,r,o=0){const{width:l,height:c}=this.options,h=c/2,d=c-2*20;this.ctx.shadowBlur=8,this.ctx.shadowColor=i,this.ctx.strokeStyle=i,this.ctx.lineWidth=s,this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.lineJoin="round";const f=l,g=.008;for(let _=0;_<=f;_++){const p=_/f*l,m=p/l*g,y=e-g+m,v=2*Math.PI*t*y+o;let S=Math.sin(v);r!==void 0&&(S=kn.quantize(S,r));const R=h-S*n*d/2;_===0?this.ctx.moveTo(p,R):this.ctx.lineTo(p,R)}this.ctx.stroke(),this.ctx.shadowBlur=0}drawSincReconstruction(t,e,n,i,s=.8,r,o=2){if(t.length===0)return;const{width:l,height:c}=this.options,h=c/2,d=c-2*20,f=g=>{if(Math.abs(g)<1e-10)return 1;const _=Math.PI*g;return Math.sin(_)/_};this.ctx.save(),this.ctx.shadowBlur=8,this.ctx.shadowColor=r,this.ctx.strokeStyle=r,this.ctx.lineWidth=o,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath();for(let g=0;g<=l;g++){const _=n+g/l*i;let p=0;for(const y of t){const v=(_-y.time)*e;p+=y.value*f(v)}p=Math.max(-1.15,Math.min(1.15,p));const m=h-p*s*d/2;g===0?this.ctx.moveTo(0,m):this.ctx.lineTo(g,m)}this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawQuantizationStaircase(t,e){if(t.length<2)return;this.ctx.save(),this.ctx.strokeStyle=e,this.ctx.lineWidth=2,this.ctx.shadowBlur=8,this.ctx.shadowColor=e,this.ctx.globalAlpha=.75,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let i=0;i<t.length-1;i++){const s=t[i],r=t[i+1];this.ctx.lineTo(r.x,s.y),this.ctx.lineTo(r.x,r.y)}const n=t[t.length-1];this.ctx.lineTo(this.options.width,n.y),this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawSmoothCurve(t,e,n=1.5,i=1){if(!(t.length<2)){this.ctx.save(),this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.strokeStyle=e,this.ctx.lineWidth=n,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.globalAlpha=i,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let s=1;s<t.length;s++)this.ctx.lineTo(t[s].x,t[s].y);this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.shadowBlur=0,this.ctx.restore()}}drawSamplePoints(t,e,n=!0){if(t.length===0)return;const i=this.options.height/2;n&&(this.ctx.strokeStyle=e,this.ctx.lineWidth=1.5,this.ctx.globalAlpha=.6,this.ctx.beginPath(),t.forEach((s,r)=>{r===0?this.ctx.moveTo(s.x,s.y):this.ctx.lineTo(s.x,s.y)}),this.ctx.stroke(),this.ctx.globalAlpha=1),t.forEach(s=>{this.ctx.strokeStyle=e,this.ctx.globalAlpha=.2,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(s.x,i),this.ctx.lineTo(s.x,s.y),this.ctx.stroke()}),t.forEach(s=>{this.ctx.globalAlpha=1,this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(s.x,s.y,3,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=0}getElement(){return this.container}}class hr{constructor(t){x(this,"container");x(this,"items",new Map);this.container=this.createPanel(t)}createPanel(t){const e=document.createElement("div");return e.className="info-panel",t.forEach(n=>{const i=this.createItem(n);this.items.set(n.label,i),e.appendChild(i)}),e}createItem(t){const e=document.createElement("div");e.className="info-item";const n=document.createElement("div");n.className="info-item-label",n.textContent=t.label;const i=document.createElement("div");return i.className="info-item-value",t.warning&&i.classList.add("warning"),i.textContent=t.value,e.appendChild(n),e.appendChild(i),e}updateItem(t,e,n=!1){const i=this.items.get(t);if(i){const s=i.querySelector(".info-item-value");s&&(s.textContent=e,n?s.classList.add("warning"):s.classList.remove("warning"))}}getElement(){return this.container}}const Bn=class Bn{constructor(){x(this,"context",null);x(this,"workletReady",!1)}static getInstance(){return Bn.instance||(Bn.instance=new Bn),Bn.instance}async getContext(t){return this.context||(this.context=new AudioContext(t?{sampleRate:t}:void 0)),this.context.state==="suspended"&&this.context.resume().catch(()=>{}),await this.ensureWorklet(),this.context}async ensureWorklet(){if(!this.context||this.workletReady)return;await this.context.audioWorklet.addModule("/visualization/worklets/dsp-processor.js"),this.workletReady=!0}async createDspNode(t){const e=await this.getContext();return new AudioWorkletNode(e,"shared-dsp-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCountMode:"explicit",channelInterpretation:"speakers",...t})}async decodeAudioData(t){return await(await this.getContext()).decodeAudioData(t)}async createBuffer(t,e,n){return(await this.getContext()).createBuffer(t,e,n)}async createBufferSource(){return(await this.getContext()).createBufferSource()}async createGain(){return(await this.getContext()).createGain()}async createAnalyser(){return(await this.getContext()).createAnalyser()}async createConvolver(){return(await this.getContext()).createConvolver()}getCurrentTime(){var t;return((t=this.context)==null?void 0:t.currentTime)??0}getState(){var t;return((t=this.context)==null?void 0:t.state)??"closed"}};x(Bn,"instance",null);let Ze=Bn;function xt(a,t=!0){const e=new URLSearchParams(window.location.search);if(!e.has(a))return t;const n=e.get(a).toLowerCase();return n!=="0"&&n!=="false"&&n!=="off"&&n!=="no"}function cn(a){return new URLSearchParams(window.location.search).get(a)}function Ai(a,t){const e=cn(a);if(e===null)return t;const n=Number(e);return Number.isFinite(n)?n:t}function qn(a){const t="/visualization/",e=new URL(t,window.location.origin);return new URL(a.replace(/^\//,""),e).href}class Rl{constructor(t){x(this,"ui",{frequencyKnob:xt("frequencyKnob",!0),sampleRateKnob:xt("sampleRateKnob",!0),bitDepthKnob:xt("bitDepthKnob",!0),phaseKnob:xt("phaseKnob",!0),playButton:xt("playButton",!0),infoPanel:xt("infoPanel",!0),originalDisplay:xt("originalDisplay",!0),sampledDisplay:xt("sampledDisplay",!0),quantizedDisplay:xt("quantizedDisplay",!0),reconstructedDisplay:xt("reconstructedDisplay",!0)});x(this,"frequency",1e3);x(this,"sampleRate",2e3);x(this,"bitDepth",16);x(this,"phaseDeg",0);x(this,"speed",.1);x(this,"audioEngine");x(this,"dspNode",null);x(this,"outputGain",null);x(this,"frequencyKnob");x(this,"sampleRateKnob");x(this,"bitDepthKnob");x(this,"phaseKnob");x(this,"playButton");x(this,"infoPanel");x(this,"originalDisplay");x(this,"sampledDisplay");x(this,"quantizedDisplay");x(this,"reconstructedDisplay");x(this,"container");x(this,"isPlaying",!1);x(this,"animationId",null);x(this,"time",0);x(this,"lastTimestamp",0);x(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.audioEngine=Ze.getInstance(),this.init()}init(){this.createUI(),window.addEventListener("resize",this.onResize),this.startAnimation()}getDisplayWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=document.createElement("div");t.className="displays-container";const i={width:this.getDisplayWidth(),height:220,backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)"};this.ui.originalDisplay&&(this.originalDisplay=new Ui({...i,label:"1. ORIGINAL ANALOG SIGNAL"}),t.appendChild(this.originalDisplay.getElement())),this.ui.sampledDisplay&&(this.sampledDisplay=new Ui({...i,label:"2. DISCRETE TIME (SAMPLING)"}),t.appendChild(this.sampledDisplay.getElement())),this.ui.quantizedDisplay&&(this.quantizedDisplay=new Ui({...i,label:"3. QUANTIZATION (AMPLITUDE)"}),t.appendChild(this.quantizedDisplay.getElement())),this.ui.reconstructedDisplay&&(this.reconstructedDisplay=new Ui({...i,label:"4. RECONSTRUCTED SIGNAL (SINC INTERPOLATION)"}),t.appendChild(this.reconstructedDisplay.getElement()));const s=document.createElement("div");s.className="controls-container",this.ui.infoPanel&&(this.infoPanel=new hr([{label:"NYQUIST",value:"1000 Hz"},{label:"ALIAS",value:"—"}]));const r=document.createElement("div");r.className="knobs-wrapper";const o={min:10,max:1e4,value:this.frequency,step:100,label:"INPUT FREQ",unit:"Hz"},l={min:100,max:2e3,value:this.sampleRate,step:100,label:"SAMPLE RATE",unit:"Hz"},c={min:1,max:16,value:this.bitDepth,step:1,label:"BIT DEPTH",unit:"bits"},h={min:0,max:360,value:this.phaseDeg,step:1,label:"PHASE",unit:"°"};this.ui.frequencyKnob&&(this.frequencyKnob=new Ge(o,u=>{this.frequency=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),r.appendChild(this.frequencyKnob.getElement())),this.ui.sampleRateKnob&&(this.sampleRateKnob=new Ge(l,u=>{this.sampleRate=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),r.appendChild(this.sampleRateKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new Ge(c,u=>{this.bitDepth=u,this.updateAudio()}),r.appendChild(this.bitDepthKnob.getElement())),this.ui.phaseKnob&&(this.phaseKnob=new Ge(h,u=>{this.phaseDeg=u,this.updateAudio()}),r.appendChild(this.phaseKnob.getElement())),this.ui.playButton&&(this.playButton=new cr("Play Audio",()=>this.toggleAudio())),this.infoPanel&&s.appendChild(this.infoPanel.getElement()),r.childElementCount>0&&s.appendChild(r),this.playButton&&s.appendChild(this.playButton.getElement()),this.container.appendChild(t),this.container.appendChild(s),this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){var n,i,s,r;const t=this.getDisplayWidth(),e=220;(n=this.originalDisplay)==null||n.resize(t,e),(i=this.sampledDisplay)==null||i.resize(t,e),(s=this.quantizedDisplay)==null||s.resize(t,e),(r=this.reconstructedDisplay)==null||r.resize(t,e)}startAnimation(){const t=e=>{this.lastTimestamp===0&&(this.lastTimestamp=e);const n=(e-this.lastTimestamp)/1e3;this.lastTimestamp=e,this.speed>0&&(this.time+=n*this.speed*.005),this.updateAnimation(),this.animationId=requestAnimationFrame(t)};this.animationId=requestAnimationFrame(t)}updateAnimation(){this.renderDisplays()}renderDisplays(){this.renderOriginalSignal(),this.renderSampledSignal(),this.renderQuantizedSignal(),this.renderReconstructedSignal()}renderOriginalSignal(){this.originalDisplay&&(this.originalDisplay.clear(),this.originalDisplay.drawGrid(),this.originalDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"#52cffe",2))}get phaseRad(){return this.phaseDeg*Math.PI/180}phaseTimeOffset(t){return t<=0?0:this.phaseRad/(2*Math.PI*t)}renderSampledSignal(){if(!this.sampledDisplay)return;this.sampledDisplay.clear(),this.sampledDisplay.drawGrid(),this.sampledDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(82, 208, 254, 0.2)",1);const t=this.canvasSamplePoints(this.frequency);this.sampledDisplay.drawSamplePoints(t,"#ff4d6d",!1)}renderQuantizedSignal(){if(!this.quantizedDisplay)return;this.quantizedDisplay.clear(),this.quantizedDisplay.drawGrid(),this.quantizedDisplay.drawWave(this.frequency,this.time+this.phaseTimeOffset(this.frequency),.8,"rgba(74, 222, 128, 0.15)",1);const t=this.quantizedDisplay.getElement().querySelector("canvas"),e=(t==null?void 0:t.getContext("2d"))??null,n=(t==null?void 0:t.offsetWidth)??this.getDisplayWidth(),i=(t==null?void 0:t.offsetHeight)??220,s=i/2,o=i-2*20;if(e){const c=Math.min(2**this.bitDepth,64);e.save(),e.strokeStyle="rgba(74, 222, 128, 0.15)",e.lineWidth=1;for(let h=0;h<=c;h++){const u=-1+2*h/c,d=kn.quantize(u,this.bitDepth),f=s-d*.8*o/2;e.beginPath(),e.moveTo(0,f),e.lineTo(n,f),e.stroke()}e.restore()}const l=this.canvasSamplePoints(this.frequency,this.bitDepth);if(e&&l.length>0){e.save(),e.strokeStyle="#4ade80",e.lineWidth=1.5,e.globalAlpha=.8;for(const c of l)e.beginPath(),e.moveTo(c.x,s),e.lineTo(c.x,c.y),e.stroke();e.restore()}this.quantizedDisplay.drawSamplePoints(l,"#4ade80",!1)}renderReconstructedSignal(){if(!this.reconstructedDisplay)return;this.reconstructedDisplay.clear(),this.reconstructedDisplay.drawGrid();const t=.008,e=this.time-t,n=this.rawSamples(this.frequency,this.bitDepth,30);this.reconstructedDisplay.drawSincReconstruction(n,this.sampleRate,e,t,.8,"#ffd700",2);const i=this.canvasSamplePoints(this.frequency,this.bitDepth);this.reconstructedDisplay.drawSamplePoints(i,"#ffd700",!1)}rawSamples(t,e,n=30){const s=this.time-.008,r=this.time,o=Math.ceil(s*this.sampleRate)-n,l=Math.floor(r*this.sampleRate)+n,c=[];for(let h=o;h<=l;h++){const u=h/this.sampleRate,d=2*Math.PI*t*u+this.phaseRad;let f=Math.sin(d);e!==void 0&&(f=kn.quantize(f,e)),c.push({time:u,value:f})}return c}canvasSamplePoints(t,e){const n=this.originalDisplay??this.sampledDisplay??this.reconstructedDisplay,i=(n==null?void 0:n.getElement().querySelector("canvas"))??null,s=(i==null?void 0:i.offsetWidth)??this.getDisplayWidth(),r=(i==null?void 0:i.offsetHeight)??220,o=r/2,c=r-2*20,h=.008,u=this.time-h,d=this.time,f=Math.ceil(u*this.sampleRate),g=[];let _=f;for(;;){const p=_/this.sampleRate;if(p>d)break;const y=(p-u)/h*s,v=2*Math.PI*t*p+this.phaseRad;let S=Math.sin(v);e!==void 0&&(S=kn.quantize(S,e));const R=o-S*.8*c/2;g.push({x:y,y:R}),_++}return g}updateInfoPanel(){if(!this.infoPanel)return;const t=kn.getAliasingInfo(this.frequency,this.sampleRate),e=t.nyquistFreq>=1e3?`${(t.nyquistFreq/1e3).toFixed(1)}kHz`:`${t.nyquistFreq.toFixed(0)}Hz`;if(this.infoPanel.updateItem("NYQUIST",e),t.isAliasing){const n=t.aliasedFreq>=1e3?`${(t.aliasedFreq/1e3).toFixed(1)}kHz`:`${t.aliasedFreq.toFixed(0)}Hz`;this.infoPanel.updateItem("ALIAS",n,!0)}else this.infoPanel.updateItem("ALIAS","CLEAN",!1)}toggleAudio(){this.isPlaying?this.stopAudio():this.playAudio()}async playAudio(){var t,e;await this.ensureAudioGraph(),this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:"tone"}),this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad}),this.isPlaying=!0,(t=this.playButton)==null||t.setText("STOP AUDIO"),(e=this.playButton)==null||e.setActive(!0))}updateAudio(){this.isPlaying&&this.dspNode&&this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.phaseRad})}stopAudio(){var t,e;this.dspNode&&this.dspNode.port.postMessage({type:"setMode",mode:"passthrough"}),this.isPlaying=!1,(t=this.playButton)==null||t.setText("Play Audio"),(e=this.playButton)==null||e.setActive(!1)}async ensureAudioGraph(){if(this.dspNode&&this.outputGain)return;const t=await this.audioEngine.getContext();this.dspNode=await this.audioEngine.createDspNode({numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.outputGain=await this.audioEngine.createGain(),this.outputGain.gain.value=.9,this.dspNode.connect(this.outputGain),this.outputGain.connect(t.destination)}destroy(){var t,e;this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onResize),this.stopAudio(),(t=this.dspNode)==null||t.disconnect(),(e=this.outputGain)==null||e.disconnect(),this.dspNode=null,this.outputGain=null}}class qe{constructor(t){x(this,"overlayCanvas");x(this,"ctx");x(this,"glCanvas");x(this,"gl",null);x(this,"container");x(this,"options");x(this,"glProgram",null);x(this,"glPosBuffer",null);x(this,"glResolutionLoc",null);x(this,"glColorLoc",null);x(this,"glPosAttribLoc",-1);x(this,"dpr",1);x(this,"minLogFreq",20);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)",minFreq:-24e3,maxFreq:24e3,minDb:-120,maxDb:20,logScale:!1,...t},this.container=this.createContainer(),this.glCanvas=this.container.querySelector(".spectrum-webgl"),this.overlayCanvas=this.container.querySelector(".spectrum-canvas"),this.ctx=this.overlayCanvas.getContext("2d",{alpha:!0}),this.gl=this.glCanvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0}),this.setupCanvas(),this.initGL()}createContainer(){const t=document.createElement("div");t.className="spectrum-display";const e=document.createElement("canvas");e.className="spectrum-webgl";const n=document.createElement("canvas");return n.className="spectrum-canvas",t.appendChild(e),t.appendChild(n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.overlayCanvas.width=this.options.width*this.dpr,this.overlayCanvas.height=this.options.height*this.dpr,this.overlayCanvas.style.width=this.options.width+"px",this.overlayCanvas.style.height=this.options.height+"px",this.glCanvas.width=this.options.width*this.dpr,this.glCanvas.height=this.options.height*this.dpr,this.glCanvas.style.width=this.options.width+"px",this.glCanvas.style.height=this.options.height+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.gl&&this.gl.viewport(0,0,this.glCanvas.width,this.glCanvas.height)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas(),this.clear()}initGL(){if(!this.gl)return;const t=`
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
    `,n=this.createShader(this.gl.VERTEX_SHADER,t),i=this.createShader(this.gl.FRAGMENT_SHADER,e);if(!n||!i)return;const s=this.gl.createProgram();s&&(this.gl.attachShader(s,n),this.gl.attachShader(s,i),this.gl.linkProgram(s),this.gl.getProgramParameter(s,this.gl.LINK_STATUS)&&(this.glProgram=s,this.glPosBuffer=this.gl.createBuffer(),this.glPosAttribLoc=this.gl.getAttribLocation(s,"a_position"),this.glResolutionLoc=this.gl.getUniformLocation(s,"u_resolution"),this.glColorLoc=this.gl.getUniformLocation(s,"u_color"),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)))}createShader(t,e){if(!this.gl)return null;const n=this.gl.createShader(t);return!n||(this.gl.shaderSource(n,e),this.gl.compileShader(n),!this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS))?null:n}clear(){this.gl&&(this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t}=this.options;this.ctx.font="700 14px 'Segoe UI', sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)",this.ctx.textAlign="left",this.ctx.fillText(this.options.label,10,20),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath(),[-100,-80,-60,-40,-20,0].forEach(n=>{if(n>=this.options.minDb&&n<=this.options.maxDb){const i=this.dbToY(n);this.ctx.moveTo(0,i),this.ctx.lineTo(t,i)}}),this.ctx.stroke()}drawFreqAxis(t=5){const{width:e,height:n,minFreq:i,maxFreq:s}=this.options;if(s<=i)return;const r=n-4;this.ctx.strokeStyle="rgba(255, 255, 255, 0.2)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,r),this.ctx.lineTo(e,r),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.4)",this.ctx.font="10px 'JetBrains Mono', monospace",this.ctx.textAlign="center";const o=this.options.logScale?this.logTickFreqs():Array.from({length:t+1},(l,c)=>i+c/t*(s-i));for(const l of o){const c=this.freqToX(l);this.ctx.beginPath(),this.ctx.moveTo(c,r-4),this.ctx.lineTo(c,r),this.ctx.stroke();const h=Math.abs(l)>=1e3?`${(l/1e3).toFixed(1)}k`:`${Math.round(l)}`;this.ctx.fillText(h,c,n-1)}}logTickFreqs(){const t=Math.max(this.minLogFreq,this.options.minFreq),e=this.options.maxFreq;return[20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4].filter(i=>i>=t&&i<=e)}drawSamplingGrid(t){const e=t/2,{height:n}=this.options,i=(s,r,o,l)=>{const c=this.freqToX(s);c<0||c>this.options.width||(this.ctx.strokeStyle=r,this.ctx.lineWidth=1.5,l?this.ctx.setLineDash([4,4]):this.ctx.setLineDash([]),this.ctx.globalAlpha=.6,this.ctx.beginPath(),this.ctx.moveTo(c,0),this.ctx.lineTo(c,n),this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=r,this.ctx.font="10px 'Segoe UI', sans-serif",this.ctx.textAlign="center",this.ctx.fillText(o,c,n-10))};i(0,"rgba(255,255,255,0.6)","DC (0 Hz)",!1),i(e,"#00ff00",`+Fn (${(e/1e3).toFixed(1)}k)`,!0),i(-e,"#00ff00","-Fn",!0),i(t,"rgba(255,255,255,0.3)","+Fs",!0),i(-t,"rgba(255,255,255,0.3)","-Fs",!0),i(t*2,"rgba(255,255,255,0.3)","+2Fs",!0),i(-t*2,"rgba(255,255,255,0.3)","-2Fs",!0)}drawLowPassOverlay(t,e=!1){const{width:n,height:i,maxFreq:s,minDb:r,maxDb:o}=this.options,l=Math.max(0,t),c=e?"#ff7b5c":"#ff9a4d",h=e?"rgba(255, 123, 92, 0.10)":"rgba(255, 154, 77, 0.07)",u=256,d=new Float32Array(u*2);for(let g=0;g<u;g++){const _=g/(u-1)*n,p=g/(u-1)*s,m=l>1?p/l:1e6,y=1/Math.sqrt(1+Math.pow(m,4)),v=Math.max(r,Math.min(o,20*Math.log10(y+1e-8))),S=this.dbToY(v);d[g*2]=_+n/2,d[g*2+1]=S}this.ctx.save(),this.ctx.fillStyle=h,this.ctx.beginPath(),this.ctx.rect(0,0,n,i),this.ctx.fill(),this.ctx.restore(),this.drawLineGPU(d,c,e?.95:.8);const f=new Float32Array(u*2);for(let g=0;g<u;g++)f[g*2]=n-d[g*2],f[g*2+1]=d[g*2+1];this.drawLineGPU(f,c,e?.95:.8),this.ctx.strokeStyle=c,this.ctx.lineWidth=e?1.8:1.2,this.ctx.globalAlpha=e?.85:.65,this.ctx.beginPath();for(let g=0;g<u;g++){const _=d[g*2],p=d[g*2+1];g===0?this.ctx.moveTo(_,p):this.ctx.lineTo(_,p)}this.ctx.stroke(),this.ctx.beginPath();for(let g=0;g<u;g++){const _=f[g*2],p=f[g*2+1];g===0?this.ctx.moveTo(_,p):this.ctx.lineTo(_,p)}this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=c,this.ctx.font="700 10px 'Segoe UI', sans-serif",this.ctx.textAlign="left",this.ctx.fillText(`LPF ${Math.round(l)} Hz`,Math.min(n-90,n/2+8),14)}drawSpectrum(t,e,n,i=2,s=1,r=!1){if(t.length===0||e.length===0)return;const o=new Float32Array(t.length*2);for(let l=0;l<t.length;l++){const c=t[l];let h=e[l];h<this.options.minDb&&(h=this.options.minDb),o[l*2]=this.freqToX(c),o[l*2+1]=this.dbToY(h)}this.drawLineGPU(o,n,s),r&&this.drawAreaGPU(o,n,Math.min(.35,s*.35))}drawLineGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const i=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,i[0],i[1],i[2],i[3]),this.gl.drawArrays(this.gl.LINE_STRIP,0,t.length/2)}drawAreaGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const i=this.dbToY(this.options.minDb),s=new Float32Array(t.length*2);for(let o=0;o<t.length/2;o++)s[o*4]=t[o*2],s[o*4+1]=i,s[o*4+2]=t[o*2],s[o*4+3]=t[o*2+1];const r=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,s,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,r[0],r[1],r[2],r[3]),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,s.length/2)}parseColor(t,e){if(t.startsWith("#")){const i=t.slice(1),s=i.length===3?i.split("").map(o=>o+o).join(""):i,r=parseInt(s,16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255,e]}const n=t.match(/rgba?\(([^)]+)\)/);if(n){const i=n[1].split(",").map(c=>c.trim()),s=Number(i[0])/255,r=Number(i[1])/255,o=Number(i[2])/255,l=i[3]!==void 0?Number(i[3])*e:e;return[s,r,o,l]}return[.32,.81,1,e]}freqToX(t){if(this.options.logScale){const n=Math.max(this.minLogFreq,this.options.minFreq),i=Math.max(n*1.001,this.options.maxFreq),s=Math.max(n,Math.abs(t));return(Math.log10(s)-Math.log10(n))/(Math.log10(i)-Math.log10(n))*this.options.width}const e=this.options.maxFreq-this.options.minFreq;return(t-this.options.minFreq)/e*this.options.width}dbToY(t){const e=this.options.maxDb-this.options.minDb;return(this.options.maxDb-t)/e*this.options.height}getElement(){return this.container}}class As{constructor(t,e){x(this,"container");x(this,"input");x(this,"valueDisplay");x(this,"onChange");x(this,"config");this.config=t,this.onChange=e,this.container=this.createContainer(),this.input=this.container.querySelector("input"),this.valueDisplay=this.container.querySelector(".slider-value"),this.setupEventListeners(),this.updateDisplay()}createContainer(){const t=document.createElement("div");return t.className="slider-container",t.innerHTML=`
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
    `,t}setupEventListeners(){this.input.addEventListener("input",()=>{const t=parseFloat(this.input.value);this.updateDisplay(),this.onChange(t)})}updateDisplay(){const t=parseFloat(this.input.value);let e;this.config.unit==="%"?e=t.toFixed(1):t>=1e3?e=`${(t/1e3).toFixed(1)}k`:e=t.toString(),this.valueDisplay.textContent=`${e} ${this.config.unit}`}getValue(){return parseFloat(this.input.value)}setValue(t){this.input.value=t.toString(),this.updateDisplay()}getElement(){return this.container}}class Xn{constructor(t,e){x(this,"container");x(this,"canvas");x(this,"ctx");x(this,"options");x(this,"onSeek");x(this,"waveformData",null);x(this,"sourceData",null);x(this,"duration",0);x(this,"playheadTime",0);x(this,"isDragging",!1);x(this,"dpr",1);this.options=t,this.onSeek=e,this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas(),this.attachListeners(),this.draw()}createContainer(){const t=document.createElement("div");t.className="timeline-panel";const e=document.createElement("div");e.className="timeline-title",e.textContent=this.options.title??"AUDIO TIMELINE";const n=document.createElement("canvas");return n.className="timeline-canvas",t.append(e,n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.canvas.style.width=`${this.options.width}px`,this.canvas.style.height=`${this.options.height}px`,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}attachListeners(){const t=n=>{if(this.duration<=0)return;const i=this.canvas.getBoundingClientRect(),s=Math.max(0,Math.min(i.width,n-i.left)),o=(i.width>0?s/i.width:0)*this.duration;this.setPlayhead(o),this.onSeek(o)};this.canvas.addEventListener("pointerdown",n=>{this.isDragging=!0,this.canvas.setPointerCapture(n.pointerId),t(n.clientX)}),this.canvas.addEventListener("pointermove",n=>{this.isDragging&&t(n.clientX)});const e=()=>{this.isDragging=!1};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e)}setWaveformFromBuffer(t){this.sourceData=new Float32Array(t.getChannelData(0)),this.rebuildWaveformPeaks(),this.duration=t.duration,this.playheadTime=0,this.draw()}setWaveformFromArray(t,e){this.sourceData=new Float32Array(t),this.rebuildWaveformPeaks(),this.duration=e>0?t.length/e:0,this.playheadTime=0,this.draw()}rebuildWaveformPeaks(){if(!this.sourceData){this.waveformData=null;return}const t=this.sourceData,e=Math.max(1,this.options.width),n=Math.max(1,Math.floor(t.length/e)),i=new Float32Array(e);for(let s=0;s<e;s++){const r=s*n,o=Math.min(r+n,t.length);let l=0;for(let c=r;c<o;c++){const h=Math.abs(t[c]);h>l&&(l=h)}i[s]=l}this.waveformData=i}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(60,Math.floor(e)),this.setupCanvas(),this.sourceData&&this.rebuildWaveformPeaks(),this.draw()}setPlayhead(t){this.playheadTime=Math.max(0,Math.min(this.duration,t)),this.draw()}draw(){const{width:t,height:e}=this.options,n=e/2;if(this.ctx.clearRect(0,0,t,e),this.ctx.fillStyle="rgba(11, 16, 24, 0.92)",this.ctx.fillRect(0,0,t,e),this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.waveformData){this.ctx.strokeStyle="rgba(82, 207, 254, 0.95)",this.ctx.lineWidth=1.1,this.ctx.beginPath();for(let i=0;i<this.waveformData.length;i++){const s=this.waveformData[i],r=n-s*(e*.44),o=n+s*(e*.44);this.ctx.moveTo(i,r),this.ctx.lineTo(i,o)}this.ctx.stroke()}if(this.duration>0){const i=this.playheadTime/this.duration*t;this.ctx.strokeStyle="#ff9a4d",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(i,0),this.ctx.lineTo(i,e),this.ctx.stroke(),this.ctx.fillStyle="#ff9a4d",this.ctx.beginPath(),this.ctx.moveTo(i-6,0),this.ctx.lineTo(i+6,0),this.ctx.lineTo(i,8),this.ctx.closePath(),this.ctx.fill()}}getElement(){return this.container}}class Yn{constructor(t){x(this,"root");x(this,"playPauseBtn");x(this,"stopBtn");x(this,"loopBtn",null);x(this,"fileInput",null);x(this,"isPlaying",!1);x(this,"isLooping",!1);this.opts=t,this.root=document.createElement("div"),this.root.className="transport-bar";const e=document.createElement("div");if(e.className="transport-left",this.playPauseBtn=this.makeIconBtn(this.svgPlay(),"Play","transport-play"),this.playPauseBtn.addEventListener("click",()=>this.handlePlayPause()),this.stopBtn=this.makeIconBtn(this.svgStop(),"Stop","transport-stop"),this.stopBtn.addEventListener("click",()=>this.opts.onStop()),e.appendChild(this.playPauseBtn),e.appendChild(this.stopBtn),t.showLoop!==!1&&(this.isLooping=t.initialLoop??!1,this.loopBtn=this.makeIconBtn(this.svgLoop(),this.isLooping?"Loop: On":"Loop: Off","transport-loop"),this.loopBtn.classList.toggle("active",this.isLooping),this.loopBtn.addEventListener("click",()=>{var n,i;this.isLooping=!this.isLooping,this.loopBtn.classList.toggle("active",this.isLooping),this.loopBtn.title=this.isLooping?"Loop: On":"Loop: Off",(i=(n=this.opts).onLoopToggle)==null||i.call(n,this.isLooping)}),e.appendChild(this.loopBtn)),t.extraLeft&&e.appendChild(t.extraLeft),this.root.appendChild(e),t.showUpload!==!1&&t.onUpload){const n=document.createElement("div");n.className="transport-right";const i=document.createElement("label");i.className="transport-upload",i.title="Upload Audio",this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept=t.accept??"audio/*",this.fileInput.style.display="none",this.fileInput.addEventListener("change",o=>{var c;const l=(c=o.target.files)==null?void 0:c[0];l&&t.onUpload(l),this.fileInput.value=""});const s=document.createElement("span");s.innerHTML=this.svgUpload();const r=document.createElement("span");r.className="transport-upload-text",r.textContent=t.uploadLabel??"Upload Audio",i.appendChild(this.fileInput),i.appendChild(s),i.appendChild(r),n.appendChild(i),this.root.appendChild(n)}}setPlaying(t){this.isPlaying=t,this.playPauseBtn.innerHTML=t?this.svgPause():this.svgPlay(),this.playPauseBtn.title=t?"Pause":"Play",this.playPauseBtn.classList.toggle("active",t)}getElement(){return this.root}getLooping(){return this.isLooping}setLooping(t){this.isLooping=t,this.loopBtn&&(this.loopBtn.classList.toggle("active",t),this.loopBtn.title=t?"Loop: On":"Loop: Off")}async handlePlayPause(){this.isPlaying?this.opts.onPause():await this.opts.onPlay()}makeIconBtn(t,e,n){const i=document.createElement("button");return i.className=`transport-btn ${n}`,i.title=e,i.innerHTML=t,i}svgPlay(){return`<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
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
    </svg>`}}const fe=class fe{constructor(t){x(this,"container");x(this,"sharedAudio",Ze.getInstance());x(this,"audioContext",null);x(this,"sourceNode",null);x(this,"dspNode",null);x(this,"outputLpFilters",[]);x(this,"gainNode",null);x(this,"isPlaying",!1);x(this,"loop",!1);x(this,"isPaused",!1);x(this,"animationId",null);x(this,"onResize",()=>this.resizeDisplays());x(this,"rawAudioBuffer",null);x(this,"filteredBuffer",null);x(this,"targetSampleRate",32e3);x(this,"targetBitDepth",16);x(this,"lpfCutoff",22050);x(this,"startTime",0);x(this,"pausedAt",0);x(this,"isProcessing",!1);x(this,"pendingUpdate",!1);x(this,"lpfEditHighlightUntil",0);x(this,"originalSpectrum");x(this,"sampleRateSlider");x(this,"bitDepthKnob");x(this,"lpfKnob");x(this,"waveformTimeline");x(this,"transportBar");x(this,"infoPanel");x(this,"statusLabel");x(this,"playMode","original");x(this,"ui",{transport:xt("transport",!0),upload:xt("upload",!0),modeSelector:xt("modeSelector",!0),waveform:xt("waveform",!0),spectrum:xt("spectrum",!0),lpfKnob:xt("lpfKnob",!0),bitDepthKnob:xt("bitDepthKnob",!0),sampleRateSlider:xt("sampleRateSlider",!0),infoPanel:xt("infoPanel",!0)});x(this,"_windowData",new Float32Array(fe.VIS_WINDOW_SIZE));x(this,"_fftReal",new Float64Array(fe.VIS_WINDOW_SIZE));x(this,"_fftImag",new Float64Array(fe.VIS_WINDOW_SIZE));x(this,"_fftMag",new Float32Array(fe.VIS_NUM_BINS));x(this,"_basebandDb",new Float32Array(fe.VIS_NUM_BINS));x(this,"_graphFreqs",new Float32Array(fe.VIS_NUM_POINTS));x(this,"_baseGraph",new Float32Array(fe.VIS_NUM_POINTS));x(this,"_copiesGraph",new Float32Array(fe.VIS_NUM_POINTS));x(this,"_aliasingGraph",new Float32Array(fe.VIS_NUM_POINTS));const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),await this.loadDefaultAudio()}createUI(){if(this.ui.transport){if(this.transportBar=new Yn({onPlay:()=>this.playAudio(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onLoopToggle:n=>{this.loop=n,this.sourceNode&&(this.sourceNode.loop=n)},onUpload:n=>this.handleFileUpload(n),uploadLabel:"Upload Audio",showUpload:this.ui.upload}),this.ui.modeSelector){const n=this.buildModeSelector();this.transportBar.getElement().querySelector(".transport-left").appendChild(n)}this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading default audio…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())}else this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading default audio…",this.statusLabel.style.display="block",this.statusLabel.style.marginBottom="8px",this.container.appendChild(this.statusLabel);const t=Math.max(620,this.container.clientWidth-2);if(this.ui.waveform&&(this.waveformTimeline=new Xn({width:t,height:100,title:"WAVEFORM / PLAYHEAD"},n=>this.handlePlayheadSeek(n)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.spectrum){const n=document.createElement("div");n.className="spectrum-row",this.originalSpectrum=new qe({width:t,height:280,label:"ORIGINAL — Baseband · Spectral Copies · Aliasing",minFreq:-48e3,maxFreq:48e3}),n.appendChild(this.originalSpectrum.getElement()),this.container.appendChild(n)}if(this.ui.lpfKnob||this.ui.bitDepthKnob||this.ui.sampleRateSlider||this.ui.infoPanel){const n=document.createElement("div");n.className="controls-container audio-controls",this.ui.infoPanel&&(this.infoPanel=new hr([{label:"NYQUIST",value:"5.5 kHz"},{label:"LPF CUTOFF",value:"22.0 kHz"}]));const i=document.createElement("div");i.className="knobs-wrapper",this.ui.lpfKnob&&(this.lpfKnob=new Ge({min:500,max:22050,value:this.lpfCutoff,step:100,label:"ANTI-ALIASING LPF",unit:"Hz"},o=>this.handleLPFChange(o)),i.appendChild(this.lpfKnob.getElement())),this.ui.bitDepthKnob&&(this.bitDepthKnob=new Ge({min:1,max:16,value:16,step:1,label:"BIT DEPTH",unit:"bits"},o=>this.handleBitDepthChange(o)),i.appendChild(this.bitDepthKnob.getElement()));const s=document.createElement("div");s.className="middle-row-wrapper",i.childElementCount>0&&s.appendChild(i),this.ui.infoPanel&&this.infoPanel&&s.appendChild(this.infoPanel.getElement());const r=document.createElement("div");r.className="right-controls control-column",this.ui.sampleRateSlider&&(this.sampleRateSlider=new As({min:1e3,max:48e3,value:this.targetSampleRate,step:100,label:"TARGET SAMPLE RATE",unit:"Hz"},o=>this.handleSampleRateChange(o)),r.appendChild(this.sampleRateSlider.getElement())),s.childElementCount>0&&n.appendChild(s),r.childElementCount>0&&n.appendChild(r),this.container.appendChild(n)}this.resizeDisplays(),this.updateInfoPanel()}buildModeSelector(){const t=document.createElement("div");return t.className="transport-mode-group",[{mode:"original",label:"Original"},{mode:"aliased",label:"Processed"},{mode:"alias_only",label:"Diff"}].forEach(({mode:n,label:i})=>{const s=document.createElement("button");s.className="transport-mode-btn"+(n===this.playMode?" active":""),s.textContent=i,s.addEventListener("click",()=>{this.playMode=n,t.querySelectorAll(".transport-mode-btn").forEach(r=>r.classList.toggle("active",r===s)),this.isPlaying&&(this.stopAudio(!1),this.playAudio(n))}),t.appendChild(s)}),t}resizeDisplays(){const t=Math.max(620,this.container.clientWidth-2);this.ui.spectrum&&this.originalSpectrum&&this.originalSpectrum.resize(t,280),this.ui.waveform&&this.waveformTimeline&&this.waveformTimeline.resize(t,100)}async loadDefaultAudio(){const t=cn("audio");if(console.log("[audio-app] location.search =",window.location.search,"| audioParam =",t),t){await this.loadAudioFromUrl(t);return}await this.loadBuiltInSweep()}async loadAudioFromUrl(t){this.statusLabel.textContent="Loading audio…";try{this.audioContext||(this.audioContext=await this.sharedAudio.getContext());const e=qn(t);console.log("[audio-app] fetching",e);const n=await fetch(e);if(!n.ok)throw new Error(`HTTP ${n.status}`);const i=await n.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(i),this.pausedAt=0,await this.processAudioUpdate();const s=t.split("/").pop()??t;this.statusLabel.textContent=s}catch(e){console.error("[audio-app] failed to load default audio:",e),this.statusLabel.textContent="Error loading audio URL",await this.loadBuiltInSweep()}}async loadBuiltInSweep(){this.audioContext=await this.sharedAudio.getContext(44100),this.rawAudioBuffer=this.audioContext.createBuffer(2,132300,44100);const s=this.rawAudioBuffer.getChannelData(0);for(let o=0;o<132300;o++){const l=o/44100,c=100*Math.pow(22e3/100,l/3);s[o]=Math.sin(2*Math.PI*c*l)*.5}const r=this.rawAudioBuffer.getChannelData(1);for(let o=0;o<132300;o++){const l=o/44100,c=22e3*Math.pow(100/22e3,l/3);r[o]=Math.sin(2*Math.PI*c*l)*.5}await this.processAudioUpdate(),this.statusLabel.textContent="Default: sine sweep"}async handleFileUpload(t){this.statusLabel.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const e=await t.arrayBuffer();this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(e),this.pausedAt=0,await this.processAudioUpdate(),this.statusLabel.textContent=t.name}catch{this.statusLabel.textContent="Error loading audio"}}handlePlayheadSeek(t){this.filteredBuffer&&(this.pausedAt=t,this.isPlaying?this.restartPlayback():this.updateVisualization())}handleLPFChange(t){this.lpfCutoff=t,this.lpfEditHighlightUntil=performance.now()+900,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.triggerProcessing()}handleSampleRateChange(t){this.targetSampleRate=t,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.syncOutputLpCutoff(),this.triggerProcessing()}handleBitDepthChange(t){this.targetBitDepth=t,this.syncRealtimeDspParams(),this.triggerProcessing()}triggerProcessing(){if(this.isPlaying||this.updateVisualization(),this.isProcessing){this.pendingUpdate=!0;return}this.processAudioUpdate()}async processAudioUpdate(){this.isProcessing=!0,this.pendingUpdate=!1,this.rawAudioBuffer&&(this.filteredBuffer=await this.createFilteredBuffer(this.rawAudioBuffer,this.lpfCutoff),this.pausedAt=Math.min(this.pausedAt,this.filteredBuffer.duration),this.waveformTimeline&&(this.waveformTimeline.setWaveformFromBuffer(this.filteredBuffer),this.waveformTimeline.setPlayhead(this.pausedAt))),this.isProcessing=!1,this.pendingUpdate&&this.processAudioUpdate(),this.isPlaying||this.updateVisualization()}updateInfoPanel(){if(!this.infoPanel)return;const t=this.targetSampleRate/2;this.infoPanel.updateItem("NYQUIST",t>=1e3?`${(t/1e3).toFixed(1)} kHz`:`${t.toFixed(0)} Hz`),this.infoPanel.updateItem("LPF CUTOFF",this.lpfCutoff>=1e3?`${(this.lpfCutoff/1e3).toFixed(1)} kHz`:`${this.lpfCutoff.toFixed(0)} Hz`)}async createFilteredBuffer(t,e){const n=t.numberOfChannels,i=new OfflineAudioContext(n,t.length,t.sampleRate),s=i.createBufferSource();s.buffer=t;const r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.707;const o=i.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.707,s.connect(r),r.connect(o),o.connect(i.destination),s.start(),await i.startRendering()}async playAudio(t){var n;if(!this.filteredBuffer||!this.audioContext)return;this.isPlaying&&this.stopAudio(!1),this.playMode=t;let e;t==="original"?e=this.filteredBuffer:e=this.rawAudioBuffer??this.filteredBuffer,this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=e,this.sourceNode.loop=this.loop,this.gainNode=this.audioContext.createGain(),t==="aliased"||t==="alias_only"?(this.dspNode=await this.sharedAudio.createDspNode(),this.configureRealtimeDsp(t),this.sourceNode.connect(this.dspNode),this.connectOutputLowpass(this.dspNode).connect(this.gainNode)):this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{var i;this.isPlaying&&((i=this.sourceNode)!=null&&i.buffer)&&this.audioContext.currentTime-this.startTime>=this.sourceNode.buffer.duration-.1&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(n=this.transportBar)==null||n.setPlaying(!0),this.statusLabel.textContent=t==="original"?"Playing original":t==="aliased"?"Playing processed":"Playing diff",this.startRealtimeVisualization()}pauseAudio(){var t,e;!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel.textContent="Paused",this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,n;this._teardownNodes(),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel.textContent="Stopped",this.filteredBuffer&&((n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt))}_teardownNodes(){var t,e,n,i;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),(i=this.dspNode)==null||i.disconnect();for(const s of this.outputLpFilters)s.disconnect();this.outputLpFilters=[],this.sourceNode=null,this.gainNode=null,this.dspNode=null}connectOutputLowpass(t){if(!this.audioContext)return t;const e=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);let n=t;this.outputLpFilters=[];for(let i=0;i<2;i++){const s=this.audioContext.createBiquadFilter();s.type="lowpass",s.frequency.value=e,s.Q.value=.707,n.connect(s),n=s,this.outputLpFilters.push(s)}return n}syncOutputLpCutoff(){if(!this.audioContext)return;const t=Math.min(this.targetSampleRate/2,this.audioContext.sampleRate*.49);for(const e of this.outputLpFilters)e.frequency.value=t}restartPlayback(){if(!this.isPlaying)return;const t=this.playMode;this.stopAudio(!1),this.playAudio(t)}configureRealtimeDsp(t){this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:t==="alias_only"?"alias-diff":"alias-processed"}),this.syncRealtimeDspParams())}syncRealtimeDspParams(){!this.dspNode||!this.audioContext||this.dspNode.port.postMessage({type:"setAliasingParams",lpfCutoff:this.lpfCutoff,targetSampleRate:this.targetSampleRate,bitDepth:this.targetBitDepth,sourceSampleRate:this.audioContext.sampleRate})}updateVisualization(){if(!this.filteredBuffer||!this.ui.spectrum||!this.originalSpectrum)return;const t=fe.VIS_WINDOW_SIZE,e=fe.VIS_NUM_BINS,n=fe.VIS_NUM_POINTS,i=this.filteredBuffer.sampleRate,s=Math.floor(this.pausedAt*i),o=Math.pow(2,this.targetBitDepth)/2,l=this.filteredBuffer.numberOfChannels;this._windowData.fill(0);for(let f=0;f<l;f++){const g=this.filteredBuffer.getChannelData(f);for(let _=0;_<t;_++){const p=s+_;if(p<g.length){const m=.5*(1-Math.cos(2*Math.PI*_/(t-1)));let y=g[p]*m;y=Math.round(y*o)/o,this._windowData[_]+=y}}}if(l>1){const f=1/l;for(let g=0;g<t;g++)this._windowData[g]*=f}this.computeFFT(this._windowData,this._fftMag);for(let f=0;f<e;f++)this._basebandDb[f]=20*Math.log10(this._fftMag[f]+1e-10);const c=f=>{const g=Math.abs(f);if(g>i/2)return-120;const _=Math.round(g/(i/2)*(e-1));return _>=e?-120:this._basebandDb[_]},h=-48e3,u=48e3,d=this.targetSampleRate;for(let f=0;f<n;f++){const g=h+f/(n-1)*(u-h);this._graphFreqs[f]=g,this._baseGraph[f]=c(g);let _=-120;const p=Math.ceil((g-i/2)/d),m=Math.floor((g+i/2)/d);for(let y=p;y<=m;y++){if(y===0)continue;const v=c(g-y*d);v>_&&(_=v)}this._copiesGraph[f]=_,this._aliasingGraph[f]=g>=-d/2&&g<=d/2?_:-120}this.originalSpectrum.clear(),this.originalSpectrum.drawGrid(),this.originalSpectrum.drawLowPassOverlay(this.lpfCutoff,performance.now()<this.lpfEditHighlightUntil),this.originalSpectrum.drawSamplingGrid(d),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._copiesGraph,"rgba(255,255,255,0.3)",1.5),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._aliasingGraph,"rgba(255,77,109,0.8)",2,1,!0),this.originalSpectrum.drawSpectrum(this._graphFreqs,this._baseGraph,"#52cffe",2.5)}computeFFT(t,e){const n=t.length,i=this._fftReal,s=this._fftImag;for(let l=0;l<n;l++)i[l]=t[l],s[l]=0;let r=0;for(let l=0;l<n-1;l++){if(l<r){let h=i[l];i[l]=i[r],i[r]=h,h=s[l],s[l]=s[r],s[r]=h}let c=n>>1;for(;c<=r;)r-=c,c>>=1;r+=c}for(let l=1;l<n;l<<=1){const c=l<<1,h=Math.PI/l;for(let u=0;u<l;u++){const d=-u*h,f=Math.cos(d),g=Math.sin(d);for(let _=u;_<n;_+=c){const p=_+l,m=f*i[p]-g*s[p],y=f*s[p]+g*i[p];i[p]=i[_]-m,s[p]=s[_]-y,i[_]+=m,s[_]+=y}}}const o=n/2;for(let l=0;l<o;l++)e[l]=Math.sqrt(i[l]*i[l]+s[l]*s[l])/n}startRealtimeVisualization(){const t=()=>{var n;if(!this.isPlaying||!this.audioContext)return;const e=this.audioContext.currentTime-this.startTime;this.filteredBuffer&&(this.pausedAt=Math.min(e,this.filteredBuffer.duration),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)),this.updateVisualization(),this.animationId=requestAnimationFrame(t)};t()}destroy(){this.stopAudio(!0),window.removeEventListener("resize",this.onResize),this.audioContext=null}};x(fe,"VIS_WINDOW_SIZE",512),x(fe,"VIS_NUM_POINTS",800),x(fe,"VIS_NUM_BINS",fe.VIS_WINDOW_SIZE/2);let Ta=fe;function Cs(a){const t=a.length,e=new Float32Array(t),n=new Float32Array(t);for(let s=0;s<t;s++)e[s]=a[s];let i=0;for(let s=1;s<t;s++){let r=t>>1;for(;i&r;r>>=1)i^=r;i^=r,s<i&&([e[s],e[i]]=[e[i],e[s]],[n[s],n[i]]=[n[i],n[s]])}for(let s=2;s<=t;s<<=1){const r=-2*Math.PI/s,o=Math.cos(r),l=Math.sin(r);for(let c=0;c<t;c+=s){let h=1,u=0;for(let d=0;d<s/2;d++){const f=e[c+d],g=n[c+d],_=e[c+d+s/2]*h-n[c+d+s/2]*u,p=e[c+d+s/2]*u+n[c+d+s/2]*h;e[c+d]=f+_,n[c+d]=g+p,e[c+d+s/2]=f-_,n[c+d+s/2]=g-p;const m=h*o-u*l;u=h*l+u*o,h=m}}}return{re:e,im:n}}function zo(a){let t=1;for(;t<a;)t<<=1;return t}function Dl(a,t=-80){const e=zo(a.length),n=new Float32Array(e);n.set(a.subarray(0,Math.min(a.length,e)));const{re:i,im:s}=Cs(n),r=e/2,o=new Float32Array(r);for(let l=0;l<r;l++){const c=Math.sqrt(i[l]*i[l]+s[l]*s[l])/e;o[l]=Math.max(t,20*Math.log10(c+1e-10))}return o}function Ys(a,t,e,n){const i=e/2,s=a/2,r=n/2,o=new Float32Array(n);for(let d=0;d<r;d++){const f=d/r*s,g=Math.exp(-.5*Math.pow((f-t)/i,2));o[d]=g,d>0&&d<r&&(o[n-d]=g)}const{re:l}=Cs(o),c=new Float32Array(n);for(let d=0;d<n;d++)c[d]=l[d]/n;const h=new Float32Array(n),u=n/2;for(let d=0;d<n;d++)h[d]=c[(d+u)%n];for(let d=0;d<n;d++)h[d]*=.5*(1-Math.cos(2*Math.PI*d/(n-1)));return h}const On=class On{constructor(t){x(this,"container");x(this,"animId",null);x(this,"animTime",0);x(this,"ui",{transport:xt("transport",!0),upload:xt("upload",!0),waveform:xt("waveform",!0),ir:xt("ir",!0),liveSpectrum:xt("liveSpectrum",!0),staticSpectrum:xt("staticSpectrum",!0),filterControls:xt("filterControls",!0),modeSelector:xt("modeSelector",!0)});x(this,"fCenter",1e3);x(this,"bandwidth",40);x(this,"nFft",4096);x(this,"sourceBuffer",null);x(this,"sourceSamples",null);x(this,"sourceSampleRate",44100);x(this,"sourceFullFftDb",null);x(this,"processedFullFftDb",null);x(this,"processedFftDirty",!0);x(this,"sharedAudio",Ze.getInstance());x(this,"audioCtx",null);x(this,"isPlaying",!1);x(this,"isPaused",!1);x(this,"pausedAt",0);x(this,"playbackStartedAt",0);x(this,"sourceNode",null);x(this,"convolver",null);x(this,"outputGain",null);x(this,"sourceAnalyser",null);x(this,"outputAnalyser",null);x(this,"dryGain",null);x(this,"playMode","filtered");x(this,"loop",!1);x(this,"convolverRebuildTimer",null);x(this,"transportBar");x(this,"statusLabel");x(this,"waveformTimeline");x(this,"sourceSpectrum");x(this,"processedSpectrum");x(this,"sourceStaticSpectrum");x(this,"processedStaticSpectrum");x(this,"irCanvas");x(this,"sourceFileLabel");x(this,"fCenterSlider");x(this,"bandwidthSlider");x(this,"liveSpecFreqs",new Float32Array(On.SPEC_POINTS));x(this,"liveSpecDb",new Float32Array(On.SPEC_POINTS));x(this,"analyserScratch",null);x(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),window.addEventListener("resize",this.onResize),this.startAnimation(),this.resizeLayout(),this.loadDefaultAudioClip()}async loadDefaultAudioClip(){var e,n;const t=cn("audio");if(t){this.statusLabel&&(this.statusLabel.textContent="Loading…");try{await this.initAudio();const s=await(await fetch(qn(t))).arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(s),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate;const r=t.split("/").pop()??t;this.sourceFileLabel&&(this.sourceFileLabel.textContent=r),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${r} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()}catch{this.statusLabel&&(this.statusLabel.textContent="✗ Error loading audio")}}}async initAudio(){this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.audioCtx.state==="suspended"&&await this.audioCtx.resume(),this.sourceAnalyser||(this.sourceAnalyser=this.audioCtx.createAnalyser(),this.sourceAnalyser.fftSize=2048,this.sourceAnalyser.smoothingTimeConstant=.7,this.analyserScratch=new Uint8Array(this.sourceAnalyser.frequencyBinCount)),this.outputAnalyser||(this.outputAnalyser=this.audioCtx.createAnalyser(),this.outputAnalyser.fftSize=2048,this.outputAnalyser.smoothingTimeConstant=.55,this.outputGain||(this.outputGain=this.audioCtx.createGain(),this.outputGain.gain.value=.8),this.outputAnalyser.connect(this.outputGain)),this.dryGain||(this.dryGain=this.audioCtx.createGain(),this.dryGain.gain.value=.8,this.sourceAnalyser.connect(this.dryGain)),this.updateAudioRouting()}updateAudioRouting(){if(!(!this.audioCtx||!this.outputGain||!this.dryGain)){try{this.outputGain.disconnect()}catch{}try{this.dryGain.disconnect()}catch{}this.playMode==="filtered"?this.outputGain.connect(this.audioCtx.destination):this.dryGain.connect(this.audioCtx.destination)}}buildFilterIR(){if(!this.audioCtx)return null;const t=this.audioCtx.sampleRate,e=Ys(t,this.fCenter,this.bandwidth,this.nFft),n=this.audioCtx.createBuffer(1,e.length,t);return n.getChannelData(0).set(e),n}rebuildConvolver(){var e;if(!this.audioCtx||!this.sourceAnalyser||!this.outputAnalyser)return;const t=this.buildFilterIR();if(t){try{(e=this.convolver)==null||e.disconnect()}catch{}this.convolver=this.audioCtx.createConvolver(),this.convolver.normalize=!1,this.convolver.buffer=t,this.sourceAnalyser.connect(this.convolver),this.convolver.connect(this.outputAnalyser),this.processedFftDirty=!0}}scheduleConvolverRebuild(){this.convolverRebuildTimer!==null&&clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=setTimeout(()=>{this.convolverRebuildTimer=null,this.isPlaying&&this.rebuildConvolver(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync()},250)}recomputeSourceFft(){if(!this.sourceSamples)return;const t=this.sourceSamples.subarray(0,Math.min(this.sourceSamples.length,65536));this.sourceFullFftDb=Dl(t)}recomputeProcessedFftAsync(){if(!this.sourceSamples||!this.audioCtx)return;this.processedFftDirty=!1;const t=this.audioCtx.sampleRate,e=this.sourceSamples,n=Ys(t,this.fCenter,this.bandwidth,this.nFft),i=Math.min(e.length,t*4),s=e.subarray(0,i),r=zo(s.length+n.length-1),o=new Float32Array(r);o.set(s);const l=new Float32Array(r);l.set(n);const c=Cs(o),h=Cs(l),u=new Float32Array(r),d=new Float32Array(r);for(let p=0;p<r;p++)u[p]=c.re[p]*h.re[p]-c.im[p]*h.im[p],d[p]=c.re[p]*h.im[p]+c.im[p]*h.re[p];const f=new Float32Array(r);for(let p=0;p<r;p++)f[p]=u[p];const g=r/2,_=new Float32Array(g);for(let p=0;p<g;p++)_[p]=Math.max(-80,20*Math.log10(Math.sqrt(u[p]*u[p]+d[p]*d[p])/r+1e-10));this.processedFullFftDb=_}async startPlayback(){var t;if(await this.initAudio(),!!this.audioCtx){if(!this.sourceBuffer){this.statusLabel&&(this.statusLabel.textContent="Upload source audio first");return}this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.sourceBuffer,this.sourceNode.loop=this.loop,this.sourceNode.connect(this.sourceAnalyser),this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.audioCtx||!this.sourceBuffer||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.sourceBuffer.duration-.05&&this.stopPlayback(!0)},this.rebuildConvolver(),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.isPlaying=!0,this.isPaused=!1,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel&&(this.statusLabel.textContent=this.playMode==="filtered"?"Playing filtered":"Playing original")}}pausePlayback(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.audioCtx.currentTime-this.playbackStartedAt,this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent="Paused"),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopPlayback(t=!1){var e,n;this._teardownNodes(),this.convolverRebuildTimer!==null&&(clearTimeout(this.convolverRebuildTimer),this.convolverRebuildTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),this.statusLabel&&(this.statusLabel.textContent=this.sourceBuffer?"Stopped":"Upload source audio"),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)}_teardownNodes(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect();try{(n=this.convolver)==null||n.disconnect()}catch{}this.sourceNode=null,this.convolver=null}async handleSourceClipUpload(t){var e,n;await this.initAudio(),this.statusLabel&&(this.statusLabel.textContent="Decoding…");try{const i=await t.arrayBuffer();this.sourceBuffer=await this.sharedAudio.decodeAudioData(i),this.sourceSamples=new Float32Array(this.sourceBuffer.getChannelData(0)),this.sourceSampleRate=this.sourceBuffer.sampleRate,this.sourceFileLabel&&(this.sourceFileLabel.textContent=t.name),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.sourceBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusLabel&&(this.statusLabel.textContent=`${t.name} · ${this.sourceBuffer.duration.toFixed(1)}s`),this.recomputeSourceFft(),this.processedFftDirty=!0,this.recomputeProcessedFftAsync(),this.isPlaying&&(this.stopPlayback(!1),await this.startPlayback())}catch{this.statusLabel&&(this.statusLabel.textContent="Error loading audio")}}buildUI(){var s;document.body.style.overflowY="auto";const t=document.createElement("div");t.style.cssText="font-size:11px;font-weight:700;letter-spacing:.12em;color:#52cffe;margin:4px 0 8px;",t.textContent="Z-TRANSFORM · GAUSSIAN BANDPASS FILTER",this.container.appendChild(t);const e=Math.max(600,this.container.clientWidth-2);if(this.ui.transport){if(this.transportBar=new Yn({onPlay:()=>this.startPlayback(),onPause:()=>this.pausePlayback(),onStop:()=>this.stopPlayback(!0),onUpload:r=>this.handleSourceClipUpload(r),uploadLabel:"Upload Source",showUpload:this.ui.upload,onLoopToggle:r=>{this.loop=r,this.sourceNode&&(this.sourceNode.loop=r)}}),this.ui.modeSelector){const r=document.createElement("div");r.style.cssText="display:flex;gap:4px;margin-left:8px;",["original","filtered"].forEach(o=>{const l=document.createElement("button");l.className="transport-mode-btn"+(o===this.playMode?" active":""),l.textContent=o==="original"?"Original":"Filtered",l.style.fontSize="9px",l.addEventListener("click",()=>{this.playMode=o,r.querySelectorAll(".transport-mode-btn").forEach(c=>c.classList.toggle("active",c===l)),this.updateAudioRouting(),this.statusLabel&&this.isPlaying&&(this.statusLabel.textContent=o==="filtered"?"Playing filtered":"Playing original")}),r.appendChild(l)}),this.transportBar.getElement().querySelector(".transport-left").appendChild(r)}this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Upload source audio",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.sourceFileLabel=document.createElement("span"),this.sourceFileLabel.style.cssText="font-size:9px;color:#6c7685;margin-left:4px;",this.sourceFileLabel.textContent="",(s=this.transportBar.getElement().querySelector(".transport-right"))==null||s.prepend(this.sourceFileLabel),this.container.appendChild(this.transportBar.getElement())}this.ui.waveform&&(this.waveformTimeline=new Xn({width:e,height:80,title:"SOURCE WAVEFORM"},r=>this.handlePlayheadSeek(r)),this.waveformTimeline.getElement().style.marginBottom="6px",this.container.appendChild(this.waveformTimeline.getElement()));let n=null;if(this.ui.filterControls){n=this.el("div",{style:"padding:8px 10px;background:rgba(82,207,254,0.04);border:1px solid rgba(82,207,254,0.12);border-radius:6px;margin-bottom:6px;"});const r=this.el("div",{style:"font-size:9px;font-weight:700;letter-spacing:.1em;color:rgba(82,207,254,0.7);margin-bottom:8px;"});r.textContent="GAUSSIAN BANDPASS FILTER  H(f) = exp(−½·((f − f₀)/σ)²)   σ = bandwidth/2",n.appendChild(r);const o=this.el("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:8px;"});this.fCenterSlider=new As({min:100,max:1e4,value:this.fCenter,step:50,label:"CENTER FREQ f₀",unit:"Hz"},l=>{this.fCenter=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),this.bandwidthSlider=new As({min:10,max:2e3,value:this.bandwidth,step:10,label:"BANDWIDTH",unit:"Hz"},l=>{this.bandwidth=l,this.processedFftDirty=!0,this.scheduleConvolverRebuild()}),o.appendChild(this.fCenterSlider.getElement()),o.appendChild(this.bandwidthSlider.getElement()),n.appendChild(o)}if(this.ui.ir){const r=this.makePanel("IMPULSE RESPONSE h[n]  (Gaussian BP kernel, fftshift-centered)");this.irCanvas=this.makeCanvas(r,e,80),r.style.marginBottom="6px",this.container.appendChild(r)}const i=Math.floor((e-6)/2);if(this.ui.liveSpectrum){const r=this.el("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;"});this.sourceSpectrum=new qe({width:i,height:200,label:"SOURCE SPECTRUM (LIVE)  |X(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.sourceSpectrum.getElement()),this.processedSpectrum=new qe({width:i,height:200,label:"PROCESSED SPECTRUM (LIVE)  |Y(f)| = |X(f)·H(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.processedSpectrum.getElement()),this.container.appendChild(r)}if(this.ui.staticSpectrum){const r=this.el("div",{style:"display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;"});this.sourceStaticSpectrum=new qe({width:i,height:200,label:"SOURCE SPECTRUM (FULL CLIP)  |X(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.sourceStaticSpectrum.getElement()),this.processedStaticSpectrum=new qe({width:i,height:200,label:"PROCESSED SPECTRUM (FULL CLIP)  |Y(f)|",minFreq:20,maxFreq:1e4,minDb:-80,maxDb:0}),r.appendChild(this.processedStaticSpectrum.getElement()),this.container.appendChild(r)}n&&this.container.appendChild(n)}handlePlayheadSeek(t){var e;this.sourceBuffer&&(this.pausedAt=Math.max(0,Math.min(this.sourceBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopPlayback(!1),this.startPlayback()))}startAnimation(){let t=0;const e=n=>{const i=Math.min((n-t)/1e3,.05);t=n,this.animTime+=i,this.drawAll(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}drawAll(){var t;this.drawIR(),this.updateSpectrumDisplays(),this.isPlaying&&this.audioCtx&&this.sourceBuffer&&(this.pausedAt=Math.min(this.audioCtx.currentTime-this.playbackStartedAt,this.sourceBuffer.duration),(t=this.waveformTimeline)==null||t.setPlayhead(this.pausedAt))}updateSpectrumDisplays(){var s,r,o,l,c,h,u,d,f,g,_,p,m;const t=this.sourceSampleRate/2,e=On.SPEC_POINTS,n=Math.log10(20),i=Math.log10(t);for(let y=0;y<e;y++)this.liveSpecFreqs[y]=Math.pow(10,n+y/(e-1)*(i-n));if((s=this.sourceSpectrum)==null||s.clear(),(r=this.sourceSpectrum)==null||r.drawGrid(),this.isPlaying&&this.sourceAnalyser&&this.analyserScratch){this.sourceAnalyser.getByteFrequencyData(this.analyserScratch);const y=this.analyserScratch;for(let v=0;v<e;v++){const S=this.liveSpecFreqs[v],R=Math.round(S/t*(y.length-1)),A=y[Math.min(R,y.length-1)]/255;this.liveSpecDb[v]=-80+A*80}(o=this.sourceSpectrum)==null||o.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ff869a",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceSpectrum,this.sourceBuffer?"Press play to see live spectrum":"Upload source audio");if(this.drawFilterOverlayOnSpectrum(this.sourceSpectrum,t),(l=this.processedSpectrum)==null||l.clear(),(c=this.processedSpectrum)==null||c.drawGrid(),this.isPlaying&&this.outputAnalyser&&this.analyserScratch){const y=new Uint8Array(this.outputAnalyser.frequencyBinCount);this.outputAnalyser.getByteFrequencyData(y);for(let v=0;v<e;v++){const S=this.liveSpecFreqs[v],R=Math.round(S/t*(y.length-1)),A=y[Math.min(R,y.length-1)]/255;this.liveSpecDb[v]=-80+A*80}(h=this.processedSpectrum)==null||h.drawSpectrum(this.liveSpecFreqs,this.liveSpecDb,"#ffc86b",2.5,1,!0)}else this.drawPlaceholderOnSpectrum(this.processedSpectrum,this.sourceBuffer?"Press play to see live spectrum":"Upload source audio");if(this.drawFilterOverlayOnSpectrum(this.processedSpectrum,t),(u=this.sourceStaticSpectrum)==null||u.clear(),(d=this.sourceStaticSpectrum)==null||d.drawGrid(),this.sourceFullFftDb){const y=this.sourceFullFftDb,v=new Float32Array(e);for(let S=0;S<e;S++){const R=this.liveSpecFreqs[S],A=Math.round(R/t*(y.length-1));v[S]=y[Math.min(A,y.length-1)]}(f=this.sourceStaticSpectrum)==null||f.drawSpectrum(this.liveSpecFreqs,v,"#ff869a",2,1,!0)}else this.drawPlaceholderOnSpectrum(this.sourceStaticSpectrum,"Upload source audio");if(this.drawFilterOverlayOnSpectrum(this.sourceStaticSpectrum,t),(g=this.processedStaticSpectrum)==null||g.clear(),(_=this.processedStaticSpectrum)==null||_.drawGrid(),this.processedFullFftDb){const y=this.processedFullFftDb,v=new Float32Array(e);for(let S=0;S<e;S++){const R=this.liveSpecFreqs[S],A=Math.round(R/t*(y.length-1));v[S]=y[Math.min(A,y.length-1)]}(p=this.processedStaticSpectrum)==null||p.drawSpectrum(this.liveSpecFreqs,v,"#ffc86b",2,.9,!0)}else if(this.sourceFullFftDb){const y=this.sourceFullFftDb,v=new Float32Array(e);for(let S=0;S<e;S++){const R=this.liveSpecFreqs[S],A=Math.round(R/t*(y.length-1));v[S]=y[Math.min(A,y.length-1)]}(m=this.processedStaticSpectrum)==null||m.drawSpectrum(this.liveSpecFreqs,v,"rgba(255,200,107,0.35)",1,.5)}else this.drawPlaceholderOnSpectrum(this.processedStaticSpectrum,"Upload source audio to see processed spectrum");this.drawFilterOverlayOnSpectrum(this.processedStaticSpectrum,t)}drawFilterOverlayOnSpectrum(t,e){if(!t)return;const n=On.SPEC_POINTS,i=this.liveSpecFreqs,s=new Float32Array(n),r=this.bandwidth/2;for(let o=0;o<n;o++){const l=i[o],c=Math.exp(-.5*Math.pow((l-this.fCenter)/r,2));s[o]=20*Math.log10(Math.max(c,1e-9))}t.drawSpectrum(i,s,"rgba(82,207,254,0.6)",1.5,.8)}drawPlaceholderOnSpectrum(t,e){if(!t)return;const i=t.getElement().querySelector("canvas.spectrum-canvas");if(!i)return;const s=window.devicePixelRatio||1,r=i.width/s,o=i.height/s,l=i.getContext("2d");l&&(l.fillStyle="rgba(255,255,255,0.12)",l.font="10px 'Segoe UI', sans-serif",l.textAlign="center",l.fillText(e,r/2,o/2+4))}drawIR(){var m;if(!this.irCanvas)return;const t=this.irCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d");s.clearRect(0,0,n,i);const r=((m=this.audioCtx)==null?void 0:m.sampleRate)??this.sourceSampleRate,o=Ys(r,this.fCenter,this.bandwidth,512),l={l:10,r:10,t:20,b:16},c=n-l.l-l.r,h=i-l.t-l.b,u=l.t+h/2,d="#52cffe";s.strokeStyle="rgba(255,255,255,0.04)",s.lineWidth=1;for(let y=1;y<8;y++)s.beginPath(),s.moveTo(l.l+c/8*y,l.t),s.lineTo(l.l+c/8*y,l.t+h),s.stroke();s.beginPath(),s.moveTo(l.l,u),s.lineTo(l.l+c,u),s.strokeStyle="rgba(255,255,255,0.1)",s.stroke();let f=0;for(let y=0;y<o.length;y++){const v=Math.abs(o[y]);v>f&&(f=v)}f<1e-12&&(f=1);const g=Math.min(o.length,Math.floor(c/2)),_=o.length/g;for(let y=0;y<g;y++){const v=Math.round(y*_),R=o[Math.min(v,o.length-1)]/f,A=l.l+y/g*c,C=R*(h/2-2);s.beginPath(),s.moveTo(A,u),s.lineTo(A,u-C),s.strokeStyle=R>=0?d:"#f472b6",s.globalAlpha=.3+.7*Math.abs(R),s.lineWidth=g>200?1:1.5,s.stroke()}s.globalAlpha=1;const p=(o.length/r*1e3).toFixed(1);s.fillStyle="rgba(82,207,254,0.6)",s.font="700 8px monospace",s.textAlign="left",s.fillText(`h[n]  Gaussian BP · f₀=${this.fCenter}Hz · BW=${this.bandwidth}Hz`,l.l+4,l.t+10),s.textAlign="right",s.fillText(`${o.length} smp · ${p}ms`,n-l.r,l.t+10),s.fillStyle="rgba(255,255,255,0.2)",s.font="8px monospace",s.textAlign="center",s.fillText("n →",l.l+c/2,i-2)}makePanel(t){const e=document.createElement("div");e.style.cssText="background:#080b10;border:1px solid #1e2530;border-radius:6px;overflow:hidden;position:relative;";const n=document.createElement("div");return n.style.cssText="position:absolute;top:5px;left:9px;font-size:8px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,0.35);text-transform:uppercase;z-index:2;pointer-events:none;",n.textContent=t,e.appendChild(n),e}makeCanvas(t,e,n){const i=window.devicePixelRatio||1,s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=e+"px",s.style.height=n+"px",s.style.display="block",s.getContext("2d").scale(i,i),t.appendChild(s),s}resizeCanvas(t,e,n){const i=window.devicePixelRatio||1;t.width=Math.max(100,e)*i,t.height=Math.max(60,n)*i,t.style.width=`${Math.max(100,e)}px`,t.style.height=`${Math.max(60,n)}px`;const s=t.getContext("2d");s.setTransform(1,0,0,1,0,0),s.scale(i,i)}resizeLayout(){var i,s,r,o,l;const t=Math.max(600,this.container.clientWidth-2),e=Math.floor((t-6)/2),n=200;(i=this.waveformTimeline)==null||i.resize(t,80),this.irCanvas&&this.resizeCanvas(this.irCanvas,t,80),(s=this.sourceSpectrum)==null||s.resize(e,n),(r=this.processedSpectrum)==null||r.resize(e,n),(o=this.sourceStaticSpectrum)==null||o.resize(e,n),(l=this.processedStaticSpectrum)==null||l.resize(e,n)}el(t,e={}){const n=document.createElement(t);for(const[i,s]of Object.entries(e))i==="style"?n.style.cssText=s:n[i]=s;return n}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopPlayback(!0),window.removeEventListener("resize",this.onResize)}};x(On,"SPEC_POINTS",512);let Aa=On;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ur="168",_i={ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,Lr=1,Il=2,Ho=1,Nl=2,an=3,hn=0,Te=1,Ve=2,bn=0,xi=1,Ir=2,Nr=3,Ur=4,Ul=5,Un=100,Fl=101,Bl=102,Ol=103,kl=104,zl=200,Hl=201,Gl=202,Vl=203,Ca=204,Pa=205,Wl=206,ql=207,Xl=208,Yl=209,$l=210,Kl=211,jl=212,Zl=213,Jl=214,Ql=0,tc=1,ec=2,Ps=3,nc=4,ic=5,sc=6,ac=7,Go=0,rc=1,oc=2,En=0,lc=1,cc=2,hc=3,uc=4,dc=5,fc=6,pc=7,Vo=300,Si=301,Mi=302,Ra=303,Da=304,Os=306,La=1e3,zn=1001,Ia=1002,Be=1003,mc=1004,Yi=1005,We=1006,$s=1007,Hn=1008,un=1009,Wo=1010,qo=1011,ki=1012,dr=1013,Gn=1014,on=1015,zi=1016,fr=1017,pr=1018,bi=1020,Xo=35902,Yo=1021,$o=1022,Xe=1023,Ko=1024,jo=1025,vi=1026,Ei=1027,Zo=1028,mr=1029,Jo=1030,gr=1031,_r=1033,ys=33776,Ss=33777,Ms=33778,bs=33779,Na=35840,Ua=35841,Fa=35842,Ba=35843,Oa=36196,ka=37492,za=37496,Ha=37808,Ga=37809,Va=37810,Wa=37811,qa=37812,Xa=37813,Ya=37814,$a=37815,Ka=37816,ja=37817,Za=37818,Ja=37819,Qa=37820,tr=37821,Es=36492,er=36494,nr=36495,Qo=36283,ir=36284,sr=36285,ar=36286,gc=3200,_c=3201,xc=0,vc=1,Mn="",$e="srgb",Tn="srgb-linear",xr="display-p3",ks="display-p3-linear",Rs="linear",Zt="srgb",Ds="rec709",Ls="p3",jn=7680,Fr=519,yc=512,Sc=513,Mc=514,tl=515,bc=516,Ec=517,wc=518,Tc=519,Br=35044,Or="300 es",ln=2e3,Is=2001;class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,rr=180/Math.PI;function Hi(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[a&255]+xe[a>>8&255]+xe[a>>16&255]+xe[a>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Se(a,t,e){return Math.max(t,Math.min(e,a))}function Ac(a,t){return(a%t+t)%t}function Ks(a,t,e){return(1-e)*a+e*t}function Ci(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ee(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Cc={DEG2RAD:ws};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,s,r,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,o,l,c)}set(t,e,n,i,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],S=i[7],R=i[2],A=i[5],C=i[8];return s[0]=r*_+o*y+l*R,s[3]=r*p+o*v+l*A,s[6]=r*m+o*S+l*C,s[1]=c*_+h*y+u*R,s[4]=c*p+h*v+u*A,s[7]=c*m+h*S+u*C,s[2]=d*_+f*y+g*R,s[5]=d*p+f*v+g*A,s[8]=d*m+f*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*s,f=c*s-r*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*r)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new Ut;function el(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Ns(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Pc(){const a=Ns("canvas");return a.style.display="block",a}const kr={};function Bi(a){a in kr||(kr[a]=!0,console.warn(a))}function Rc(a,t,e){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const zr=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hr=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pi={[Tn]:{transfer:Rs,primaries:Ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[$e]:{transfer:Zt,primaries:Ds,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ks]:{transfer:Rs,primaries:Ls,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(Hr),fromReference:a=>a.applyMatrix3(zr)},[xr]:{transfer:Zt,primaries:Ls,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(Hr),fromReference:a=>a.applyMatrix3(zr).convertLinearToSRGB()}},Dc=new Set([Tn,ks]),Xt={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Dc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=Pi[t].toReference,i=Pi[e].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return Pi[a].primaries},getTransfer:function(a){return a===Mn?Rs:Pi[a].transfer},getLuminanceCoefficients:function(a,t=this._workingColorSpace){return a.fromArray(Pi[t].luminanceCoefficients)}};function yi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Zs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Zn;class Lc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=Ns("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=yi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ic=0;class nl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Js(i[r].image)):s.push(Js(i[r]))}else s=Js(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Js(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Lc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Ae extends $n{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=zn,i=zn,s=We,r=Hn,o=Xe,l=un,c=Ae.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Hi(),this.name="",this.source=new nl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case La:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case La:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Vo;Ae.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(f+1)/2,R=(m+1)/2,A=(h+d)/4,C=(u+_)/4,B=(g+p)/4;return v>S&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=C/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=B/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=C/s,i=B/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class il extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-o;const m=l*d+c*f+h*g+u*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,m*y);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const S=o*y;if(l=l*p+d*S,c=c*p+f*S,h=h*p+g*S,u=u*p+_*S,p===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-s*i),u=2*(s*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new U,Gr=new Wn;class Gi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ke):ke.fromBufferAttribute(s,r),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(t.matrixWorld),this.union($i)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),Ki.subVectors(this.max,Ri),Jn.subVectors(t.a,Ri),Qn.subVectors(t.b,Ri),ti.subVectors(t.c,Ri),pn.subVectors(Qn,Jn),mn.subVectors(ti,Qn),Cn.subVectors(Jn,ti);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Cn.z,Cn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Cn.z,0,-Cn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Cn.y,Cn.x,0];return!ta(e,Jn,Qn,ti,Ki)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Jn,Qn,ti,Ki))?!1:(ji.crossVectors(pn,mn),e=[ji.x,ji.y,ji.z],ta(e,Jn,Qn,ti,Ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new U,new U,new U,new U,new U,new U,new U,new U],ke=new U,$i=new Gi,Jn=new U,Qn=new U,ti=new U,pn=new U,mn=new U,Cn=new U,Ri=new U,Ki=new U,ji=new U,Pn=new U;function ta(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Pn.fromArray(a,s);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bc=new Gi,Di=new U,ea=new U;class zs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);const e=Di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(ea)),this.expandByPoint(Di.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new U,na=new U,Zi=new U,gn=new U,ia=new U,Ji=new U,sa=new U;class vr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){na.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(na);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Zi),o=gn.dot(this.direction),l=-gn.dot(Zi),c=gn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-o,d=r*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(na).addScaledVector(Zi,d),f}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,i,s){ia.subVectors(e,t),Ji.subVectors(n,t),sa.crossVectors(ia,Ji);let r=this.direction.dot(sa),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;gn.subVectors(this.origin,t);const l=o*this.direction.dot(Ji.crossVectors(gn,Ji));if(l<0)return null;const c=o*this.direction.dot(ia.cross(gn));if(c<0||l+c>r)return null;const h=-o*gn.dot(sa);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,s,r,o,l,c,h,u,d,f,g,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,o,l,c,h,u,d,f,g,_,p)}set(t,e,n,i,s,r,o,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ei.setFromMatrixColumn(t,0).length(),s=1/ei.setFromMatrixColumn(t,1).length(),r=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=r*h,f=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-r*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=_-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,f=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oc,t,kc)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),_n.crossVectors(n,De),_n.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),_n.crossVectors(n,De)),_n.normalize(),Qi.crossVectors(De,_n),i[0]=_n.x,i[4]=Qi.x,i[8]=De.x,i[1]=_n.y,i[5]=Qi.y,i[9]=De.y,i[2]=_n.z,i[6]=Qi.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],S=n[11],R=n[15],A=i[0],C=i[4],B=i[8],w=i[12],E=i[1],D=i[5],H=i[9],z=i[13],X=i[2],K=i[6],W=i[10],Z=i[14],G=i[3],ot=i[7],ut=i[11],gt=i[15];return s[0]=r*A+o*E+l*X+c*G,s[4]=r*C+o*D+l*K+c*ot,s[8]=r*B+o*H+l*W+c*ut,s[12]=r*w+o*z+l*Z+c*gt,s[1]=h*A+u*E+d*X+f*G,s[5]=h*C+u*D+d*K+f*ot,s[9]=h*B+u*H+d*W+f*ut,s[13]=h*w+u*z+d*Z+f*gt,s[2]=g*A+_*E+p*X+m*G,s[6]=g*C+_*D+p*K+m*ot,s[10]=g*B+_*H+p*W+m*ut,s[14]=g*w+_*z+p*Z+m*gt,s[3]=y*A+v*E+S*X+R*G,s[7]=y*C+v*D+S*K+R*ot,s[11]=y*B+v*H+S*W+R*ut,s[15]=y*w+v*z+S*Z+R*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+p*(+e*c*u-e*o*f-s*r*u+n*r*f+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*d+i*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=u*p*c-_*d*c+_*l*f-o*p*f-u*l*m+o*d*m,v=g*d*c-h*p*c-g*l*f+r*p*f+h*l*m-r*d*m,S=h*_*c-g*u*c+g*o*f-r*_*f-h*o*m+r*u*m,R=g*u*l-h*_*l-g*o*d+r*_*d+h*o*p-r*u*p,A=e*y+n*v+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=y*C,t[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*C,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*C,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*C,t[4]=v*C,t[5]=(h*p*s-g*d*s+g*i*f-e*p*f-h*i*m+e*d*m)*C,t[6]=(g*l*s-r*p*s-g*i*c+e*p*c+r*i*m-e*l*m)*C,t[7]=(r*d*s-h*l*s+h*i*c-e*d*c-r*i*f+e*l*f)*C,t[8]=S*C,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*m-e*u*m)*C,t[10]=(r*_*s-g*o*s+g*n*c-e*_*c-r*n*m+e*o*m)*C,t[11]=(h*o*s-r*u*s-h*n*c+e*u*c+r*n*f-e*o*f)*C,t[12]=R*C,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*p+e*u*p)*C,t[14]=(g*o*i-r*_*i-g*n*l+e*_*l+r*n*p-e*o*p)*C,t[15]=(r*u*i-h*o*i+h*n*l-e*u*l-r*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,h=r+r,u=o+o,d=s*c,f=s*h,g=s*u,_=r*h,p=r*u,m=o*u,y=l*c,v=l*h,S=l*u,R=n.x,A=n.y,C=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+S)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(d+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+v)*C,i[9]=(p-y)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ei.set(i[0],i[1],i[2]).length();const r=ei.set(i[4],i[5],i[6]).length(),o=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const c=1/s,h=1/r,u=1/o;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,e.setFromRotationMatrix(ze),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r,o=ln){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===ln)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===Is)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,o=ln){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-s),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===ln)g=(r+s)*u,_=-2*u;else if(o===Is)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ei=new U,ze=new oe,Oc=new U(0,0,0),kc=new U(1,1,1),_n=new U,Qi=new U,De=new U,Vr=new oe,Wr=new Wn;class dn{constructor(t=0,e=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wr.setFromEuler(this),this.setFromQuaternion(Wr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zc=0;const qr=new U,ni=new Wn,en=new oe,ts=new U,Li=new U,Hc=new U,Gc=new Wn,Xr=new U(1,0,0),Yr=new U(0,1,0),$r=new U(0,0,1),Kr={type:"added"},Vc={type:"removed"},ii={type:"childadded",child:null},aa={type:"childremoved",child:null};class be extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new U,e=new dn,n=new Wn,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ut}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(Xr,t)}rotateY(t){return this.rotateOnAxis(Yr,t)}rotateZ(t){return this.rotateOnAxis($r,t)}translateOnAxis(t,e){return qr.copy(t).applyQuaternion(this.quaternion),this.position.add(qr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xr,t)}translateY(t){return this.translateOnAxis(Yr,t)}translateZ(t){return this.translateOnAxis($r,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Li,ts,this.up):en.lookAt(ts,Li,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(en),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kr),ii.child=t,this.dispatchEvent(ii),ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vc),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kr),ii.child=t,this.dispatchEvent(ii),ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new U(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new U,nn=new U,ra=new U,sn=new U,si=new U,ai=new U,jr=new U,oa=new U,la=new U,ca=new U;class je{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){He.subVectors(i,e),nn.subVectors(n,e),ra.subVectors(t,e);const r=He.dot(He),o=He.dot(nn),l=He.dot(ra),c=nn.dot(nn),h=nn.dot(ra),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(r*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sn.x),l.addScaledVector(r,sn.y),l.addScaledVector(o,sn.z),l)}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),nn.subVectors(t,e),He.cross(nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),He.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;si.subVectors(i,n),ai.subVectors(s,n),oa.subVectors(t,n);const l=si.dot(oa),c=ai.dot(oa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,i);const h=si.dot(la),u=ai.dot(la);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(si,r);ca.subVectors(t,s);const f=si.dot(ca),g=ai.dot(ca);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ai,o);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return jr.subVectors(s,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(jr,o);const m=1/(p+_+d);return r=_*m,o=d*m,e.copy(n).addScaledVector(si,r).addScaledVector(ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},es={h:0,s:0,l:0};function ha(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Ac(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ha(r,s,t+1/3),this.g=ha(r,s,t),this.b=ha(r,s,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=al[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Xt.fromWorkingColorSpace(ve.copy(this),t),Math.round(Se(ve.r*255,0,255))*65536+Math.round(Se(ve.g*255,0,255))*256+Math.round(Se(ve.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,i=ve.g,s=ve.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=$e){Xt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,i=ve.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(es);const n=Ks(xn.h,es.h,e),i=Ks(xn.s,es.s,e),s=Ks(xn.l,es.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Ht;Ht.NAMES=al;let Wc=0;class Vi extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=xi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pi extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new U,ns=new Dt;class _e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Br,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Bi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Br&&(t.usage=this.usage),t}}class rl extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ol extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qc=0;const Ue=new oe,ua=new be,ri=new U,Le=new Gi,Ii=new Gi,de=new U;class Me extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(el(t)?ol:rl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ut().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Le.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(de.addVectors(Le.min,Ii.min),Le.expandByPoint(de),de.addVectors(Le.max,Ii.max),Le.expandByPoint(de)):(Le.expandByPoint(Ii.min),Le.expandByPoint(Ii.max))}Le.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)de.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(de));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)de.fromBufferAttribute(o,c),l&&(ri.fromBufferAttribute(t,c),de.add(ri)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new U,l[B]=new U;const c=new U,h=new U,u=new U,d=new Dt,f=new Dt,g=new Dt,_=new U,p=new U;function m(B,w,E){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,E),d.fromBufferAttribute(s,B),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,E),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[B].add(_),o[w].add(_),o[E].add(_),l[B].add(p),l[w].add(p),l[E].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let B=0,w=y.length;B<w;++B){const E=y[B],D=E.start,H=E.count;for(let z=D,X=D+H;z<X;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new U,S=new U,R=new U,A=new U;function C(B){R.fromBufferAttribute(i,B),A.copy(R);const w=o[B];v.copy(w),v.sub(R.multiplyScalar(R.dot(w))).normalize(),S.crossVectors(A,w);const D=S.dot(l[B])<0?-1:1;r.setXYZW(B,v.x,v.y,v.z,D)}for(let B=0,w=y.length;B<w;++B){const E=y[B],D=E.start,H=E.count;for(let z=D,X=D+H;z<X;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,r=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zr=new oe,Rn=new vr,is=new zs,Jr=new U,oi=new U,li=new U,ci=new U,da=new U,ss=new U,as=new Dt,rs=new Dt,os=new Dt,Qr=new U,to=new U,eo=new U,ls=new U,cs=new U;class Ie extends be{constructor(t=new Me,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(da.fromBufferAttribute(u,t),r?ss.addScaledVector(da,h):ss.addScaledVector(da.sub(e),h))}e.add(ss)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),Rn.copy(t.ray).recast(t.near),!(is.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(is,Jr)===null||Rn.origin.distanceToSquared(Jr)>(t.far-t.near)**2))&&(Zr.copy(s).invert(),Rn.copy(t.ray).applyMatrix4(Zr),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,R=v;S<R;S+=3){const A=o.getX(S),C=o.getX(S+1),B=o.getX(S+2);i=hs(this,m,t,n,c,h,u,A,C,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);i=hs(this,r,t,n,c,h,u,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=y,R=v;S<R;S+=3){const A=S,C=S+1,B=S+2;i=hs(this,m,t,n,c,h,u,A,C,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,S=p+2;i=hs(this,r,t,n,c,h,u,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Xc(a,t,e,n,i,s,r,o){let l;if(t.side===Te?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===hn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:a}}function hs(a,t,e,n,i,s,r,o,l,c){a.getVertexPosition(o,oi),a.getVertexPosition(l,li),a.getVertexPosition(c,ci);const h=Xc(a,t,e,n,oi,li,ci,ls);if(h){i&&(as.fromBufferAttribute(i,o),rs.fromBufferAttribute(i,l),os.fromBufferAttribute(i,c),h.uv=je.getInterpolation(ls,oi,li,ci,as,rs,os,new Dt)),s&&(as.fromBufferAttribute(s,o),rs.fromBufferAttribute(s,l),os.fromBufferAttribute(s,c),h.uv1=je.getInterpolation(ls,oi,li,ci,as,rs,os,new Dt)),r&&(Qr.fromBufferAttribute(r,o),to.fromBufferAttribute(r,l),eo.fromBufferAttribute(r,c),h.normal=je.getInterpolation(ls,oi,li,ci,Qr,to,eo,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};je.getNormal(oi,li,ci,u.normal),h.face=u}return h}class Wi extends Me{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,p,m,y,v,S,R,A,C,B,w){const E=S/C,D=R/B,H=S/2,z=R/2,X=A/2,K=C+1,W=B+1;let Z=0,G=0;const ot=new U;for(let ut=0;ut<W;ut++){const gt=ut*D-z;for(let Ot=0;Ot<K;Ot++){const $t=Ot*E-H;ot[_]=$t*y,ot[p]=gt*v,ot[m]=X,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[p]=0,ot[m]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ot/C),u.push(1-ut/B),Z+=1}}for(let ut=0;ut<B;ut++)for(let gt=0;gt<C;gt++){const Ot=d+gt+K*ut,$t=d+gt+K*(ut+1),V=d+(gt+1)+K*(ut+1),Q=d+(gt+1)+K*ut;l.push(Ot,$t,Q),l.push($t,V,Q),G+=6}o.addGroup(f,G,w),f+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ye(a){const t={};for(let e=0;e<a.length;e++){const n=wi(a[e]);for(const i in n)t[i]=n[i]}return t}function Yc(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function ll(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const $c={clone:wi,merge:ye};var Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=Yc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cl extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new U,no=new Dt,io=new Dt;class Fe extends cl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,no,io),e.subVectors(io,no)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,ui=1;class Zc extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(hi,ui,t,e);i.layers=this.layers,this.add(i);const s=new Fe(hi,ui,t,e);s.layers=this.layers,this.add(s);const r=new Fe(hi,ui,t,e);r.layers=this.layers,this.add(r);const o=new Fe(hi,ui,t,e);o.layers=this.layers,this.add(o);const l=new Fe(hi,ui,t,e);l.layers=this.layers,this.add(l);const c=new Fe(hi,ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,o,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hl extends Ae{constructor(t,e,n,i,s,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jc extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:bn});s.uniforms.tEquirect.value=e;const r=new Ie(i,s),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=We),new Zc(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const fa=new U,Qc=new U,th=new Ut;class Sn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fa.subVectors(n,e).cross(Qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||th.getNormalMatrix(t),i=this.coplanarPoint(fa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new zs,us=new U;class ul{constructor(t=new Sn,e=new Sn,n=new Sn,i=new Sn,s=new Sn,r=new Sn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,p-f,S-m).normalize(),n[1].setComponents(l+s,d+c,p+f,S+m).normalize(),n[2].setComponents(l+r,d+h,p+g,S+y).normalize(),n[3].setComponents(l-r,d-h,p-g,S-y).normalize(),n[4].setComponents(l-o,d-u,p-_,S-v).normalize(),e===ln)n[5].setComponents(l+o,d+u,p+_,S+v).normalize();else if(e===Is)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dl(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function eh(a){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(a.bindBuffer(c,o),u.count===-1&&d.length===0&&a.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];a.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(a.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(a.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:r}}class Hs extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*d-r;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const v=y+c*m,S=y+c*(m+1),R=y+1+c*(m+1),A=y+1+c*m;f.push(v,S,A),f.push(S,R,A)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
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
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
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
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
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
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mh=`#ifdef USE_IRIDESCENCE
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
#endif`,gh=`#ifdef USE_BUMPMAP
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wh=`#define PI 3.141592653589793
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ah=`vec3 transformedNormal = objectNormal;
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
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`
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
}`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
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
#endif`,kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
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
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
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
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
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
#endif`,tu=`struct PhysicalMaterial {
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
}`,eu=`
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
#endif`,nu=`#if defined( RE_IndirectDiffuse )
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
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uu=`#if defined( USE_POINTS_UV )
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
#endif`,du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_u=`#ifdef USE_MORPHTARGETS
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
#endif`,xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eu=`#ifdef USE_NORMALMAP
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
#endif`,wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Au=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ru=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zu=`float getShadowMask() {
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
}`,Hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gu=`#ifdef USE_SKINNING
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
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$u=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
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
#endif`,ju=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
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
}`,ld=`#if DEPTH_PACKING == 3200
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
}`,cd=`#define DISTANCE
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
}`,hd=`#define DISTANCE
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#include <common>
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
}`,gd=`uniform vec3 diffuse;
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
}`,_d=`#define LAMBERT
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
}`,xd=`#define LAMBERT
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
}`,vd=`#define MATCAP
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
}`,yd=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,Md=`#define NORMAL
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
}`,bd=`#define PHONG
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
}`,Ed=`#define PHONG
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
}`,wd=`#define STANDARD
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
}`,Td=`#define STANDARD
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
}`,Ad=`#define TOON
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
}`,Cd=`#define TOON
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
}`,Pd=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Dd=`#include <common>
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
}`,Ld=`uniform vec3 color;
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
}`,Id=`uniform float rotation;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:sh,alphamap_pars_fragment:ah,alphatest_fragment:rh,alphatest_pars_fragment:oh,aomap_fragment:lh,aomap_pars_fragment:ch,batching_pars_vertex:hh,batching_vertex:uh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:vh,clipping_planes_vertex:yh,color_fragment:Sh,color_pars_fragment:Mh,color_pars_vertex:bh,color_vertex:Eh,common:wh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Ah,displacementmap_pars_vertex:Ch,displacementmap_vertex:Ph,emissivemap_fragment:Rh,emissivemap_pars_fragment:Dh,colorspace_fragment:Lh,colorspace_pars_fragment:Ih,envmap_fragment:Nh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Fh,envmap_pars_vertex:Bh,envmap_physical_pars_fragment:$h,envmap_vertex:Oh,fog_vertex:kh,fog_pars_vertex:zh,fog_fragment:Hh,fog_pars_fragment:Gh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Wh,lights_lambert_fragment:qh,lights_lambert_pars_fragment:Xh,lights_pars_begin:Yh,lights_toon_fragment:Kh,lights_toon_pars_fragment:jh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Jh,lights_physical_fragment:Qh,lights_physical_pars_fragment:tu,lights_fragment_begin:eu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:au,logdepthbuf_pars_vertex:ru,logdepthbuf_vertex:ou,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:hu,map_particle_pars_fragment:uu,metalnessmap_fragment:du,metalnessmap_pars_fragment:fu,morphinstance_vertex:pu,morphcolor_vertex:mu,morphnormal_vertex:gu,morphtarget_pars_vertex:_u,morphtarget_vertex:xu,normal_fragment_begin:vu,normal_fragment_maps:yu,normal_pars_fragment:Su,normal_pars_vertex:Mu,normal_vertex:bu,normalmap_pars_fragment:Eu,clearcoat_normal_fragment_begin:wu,clearcoat_normal_fragment_maps:Tu,clearcoat_pars_fragment:Au,iridescence_pars_fragment:Cu,opaque_fragment:Pu,packing:Ru,premultiplied_alpha_fragment:Du,project_vertex:Lu,dithering_fragment:Iu,dithering_pars_fragment:Nu,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Bu,shadowmap_pars_vertex:Ou,shadowmap_vertex:ku,shadowmask_pars_fragment:zu,skinbase_vertex:Hu,skinning_pars_vertex:Gu,skinning_vertex:Vu,skinnormal_vertex:Wu,specularmap_fragment:qu,specularmap_pars_fragment:Xu,tonemapping_fragment:Yu,tonemapping_pars_fragment:$u,transmission_fragment:Ku,transmission_pars_fragment:ju,uv_pars_fragment:Zu,uv_pars_vertex:Ju,uv_vertex:Qu,worldpos_vertex:td,background_vert:ed,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:sd,cube_vert:ad,cube_frag:rd,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:dd,linedashed_vert:fd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:gd,meshlambert_vert:_d,meshlambert_frag:xd,meshmatcap_vert:vd,meshmatcap_frag:yd,meshnormal_vert:Sd,meshnormal_frag:Md,meshphong_vert:bd,meshphong_frag:Ed,meshphysical_vert:wd,meshphysical_frag:Td,meshtoon_vert:Ad,meshtoon_frag:Cd,points_vert:Pd,points_frag:Rd,shadow_vert:Dd,shadow_frag:Ld,sprite_vert:Id,sprite_frag:Nd},st={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ke={basic:{uniforms:ye([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ye([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ye([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ye([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ye([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ye([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ye([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ye([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ye([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ye([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ye([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ye([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ye([st.lights,st.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Ke.physical={uniforms:ye([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const ds={r:0,b:0,g:0},Ln=new dn,Ud=new oe;function Fd(a,t,e,n,i,s,r){const o=new Ht(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const S=g(y);S===null?m(o,l):S&&S.isColor&&(m(S,1),v=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(a.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(y,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Os)?(h===void 0&&(h=new Ie(new Wi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:wi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ln.copy(v.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(Ln)),h.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Zt,(u!==S||d!==S.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ie(new Hs(2,2),new wn({name:"BackgroundMaterial",uniforms:wi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(S.colorSpace)!==Zt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(ds,ll(a)),n.buffers.color.setClear(ds.r,ds.g,ds.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:p}}function Bd(a,t){const e=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function o(E,D,H,z,X){let K=!1;const W=u(z,H,D);s!==W&&(s=W,c(s.object)),K=f(E,z,H,X),K&&g(E,z,H,X),X!==null&&t.update(X,a.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,S(E,D,H,z),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return a.createVertexArray()}function c(E){return a.bindVertexArray(E)}function h(E){return a.deleteVertexArray(E)}function u(E,D,H){const z=H.wireframe===!0;let X=n[E.id];X===void 0&&(X={},n[E.id]=X);let K=X[D.id];K===void 0&&(K={},X[D.id]=K);let W=K[z];return W===void 0&&(W=d(l()),K[z]=W),W}function d(E){const D=[],H=[],z=[];for(let X=0;X<e;X++)D[X]=0,H[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:z,object:E,attributes:{},index:null}}function f(E,D,H,z){const X=s.attributes,K=D.attributes;let W=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){const ut=X[G];let gt=K[G];if(gt===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(E,D,H,z){const X={},K=D.attributes;let W=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){let ut=K[G];ut===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor));const gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),X[G]=gt,W++}s.attributes=X,s.attributesNum=W,s.index=z}function _(){const E=s.newAttributes;for(let D=0,H=E.length;D<H;D++)E[D]=0}function p(E){m(E,0)}function m(E,D){const H=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;H[E]=1,z[E]===0&&(a.enableVertexAttribArray(E),z[E]=1),X[E]!==D&&(a.vertexAttribDivisor(E,D),X[E]=D)}function y(){const E=s.newAttributes,D=s.enabledAttributes;for(let H=0,z=D.length;H<z;H++)D[H]!==E[H]&&(a.disableVertexAttribArray(H),D[H]=0)}function v(E,D,H,z,X,K,W){W===!0?a.vertexAttribIPointer(E,D,H,X,K):a.vertexAttribPointer(E,D,H,z,X,K)}function S(E,D,H,z){_();const X=z.attributes,K=H.getAttributes(),W=D.defaultAttributeValues;for(const Z in K){const G=K[Z];if(G.location>=0){let ot=X[Z];if(ot===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(ot=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(ot=E.instanceColor)),ot!==void 0){const ut=ot.normalized,gt=ot.itemSize,Ot=t.get(ot);if(Ot===void 0)continue;const $t=Ot.buffer,V=Ot.type,Q=Ot.bytesPerElement,mt=V===a.INT||V===a.UNSIGNED_INT||ot.gpuType===dr;if(ot.isInterleavedBufferAttribute){const ct=ot.data,Et=ct.stride,Pt=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)m(G.location+Bt,ct.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)p(G.location+Bt);a.bindBuffer(a.ARRAY_BUFFER,$t);for(let Bt=0;Bt<G.locationSize;Bt++)v(G.location+Bt,gt/G.locationSize,V,ut,Et*Q,(Pt+gt/G.locationSize*Bt)*Q,mt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct,ot.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct);a.bindBuffer(a.ARRAY_BUFFER,$t);for(let ct=0;ct<G.locationSize;ct++)v(G.location+ct,gt/G.locationSize,V,ut,gt*Q,gt/G.locationSize*ct*Q,mt)}}else if(W!==void 0){const ut=W[Z];if(ut!==void 0)switch(ut.length){case 2:a.vertexAttrib2fv(G.location,ut);break;case 3:a.vertexAttrib3fv(G.location,ut);break;case 4:a.vertexAttrib4fv(G.location,ut);break;default:a.vertexAttrib1fv(G.location,ut)}}}}y()}function R(){B();for(const E in n){const D=n[E];for(const H in D){const z=D[H];for(const X in z)h(z[X].object),delete z[X];delete D[H]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const H in D){const z=D[H];for(const X in z)h(z[X].object),delete z[X];delete D[H]}delete n[E.id]}function C(E){for(const D in n){const H=n[D];if(H[E.id]===void 0)continue;const z=H[E.id];for(const X in z)h(z[X].object),delete z[X];delete H[E.id]}}function B(){w(),r=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:B,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Od(a,t,e){let n;function i(c){n=c}function s(c,h){a.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(a.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kd(a,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==Xe&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==un&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!C)}function l(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,R=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:R}}function zd(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Sn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=a.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,v=y*4;let S=m.clippingState||null;l.value=S,S=h(g,d,v,f);for(let R=0;R!==v;++R)S[R]=e[R];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=f;v!==_;++v,S+=4)r.copy(u[v]).applyMatrix4(y,o),r.normal.toArray(p,S),p[S+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Hd(a){let t=new WeakMap;function e(r,o){return o===Ra?r.mapping=Si:o===Da&&(r.mapping=Mi),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ra||o===Da)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Jc(l.height);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Gd extends cl{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,so=[.125,.215,.35,.446,.526,.582],Fn=20,pa=new Gd,ao=new Ht;let ma=null,ga=0,_a=0,xa=!1;const Nn=(1+Math.sqrt(5))/2,di=1/Nn,ro=[new U(-Nn,di,0),new U(Nn,di,0),new U(-di,0,Nn),new U(di,0,Nn),new U(0,Nn,-di),new U(0,Nn,di),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class oo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=co(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=xa,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:zi,format:Xe,colorSpace:Tn,depthBuffer:!1},i=lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(s)),this._blurMaterial=Wd(s,t,e)}return i}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ao),h.toneMapping=En,h.autoClear=!1;const f=new pi({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Ie(new Wi,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(ao),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;fs(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Si||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=co());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ie(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ro[(i-s-1)%ro.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ie(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fn-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Fn;p>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const m=[];let y=0;for(let C=0;C<Fn;++C){const B=C/_,w=Math.exp(-B*B/2);m.push(w),C===0?y+=w:C<p&&(y+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],R=3*S*(i>v-mi?i-v+mi:0),A=4*(this._cubeSize-S);fs(e,R,A,3*S,2*S),l.setRenderTarget(e),l.render(u,pa)}}function Vd(a){const t=[],e=[],n=[];let i=a;const s=a-mi+1+so.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-mi?l=so[r-a+mi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),v=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,B=A>2?0:-1,w=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];y.set(w,_*g*A),v.set(d,p*g*A);const E=[A,A,A,A,A,A];S.set(E,m*g*A)}const R=new Me;R.setAttribute("position",new _e(y,_)),R.setAttribute("uv",new _e(v,p)),R.setAttribute("faceIndex",new _e(S,m)),t.push(R),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lo(a,t,e){const n=new Vn(a,t,e);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function Wd(a,t,e){const n=new Float32Array(Fn),i=new U(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function co(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ho(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function yr(){return`

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
	`}function qd(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===Da,h=l===Si||l===Mi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new oo(a)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new oo(a)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Xd(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yd(a,t,e,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],a.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],a.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,S=y.length;v<S;v+=3){const R=y[v+0],A=y[v+1],C=y[v+2];d.push(R,A,A,C,C,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const R=v+0,A=v+1,C=v+2;d.push(R,A,A,C,C,R)}}else return;const p=new(el(d)?ol:rl)(d,1);p.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function $d(a,t,e){let n;function i(d){n=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,f){a.drawElements(n,f,s,d*r),e.update(f,n,1)}function c(d,f,g){g!==0&&(a.drawElementsInstanced(n,f,s,d*r,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/r,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kd(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jd(a,t,e){const n=new WeakMap,i=new pe;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){B.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let R=o.attributes.position.count*S,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*A*4*u),B=new il(C,R,A,u);B.type=on,B.needsUpdate=!0;const w=S*4;for(let D=0;D<u;D++){const H=m[D],z=y[D],X=v[D],K=R*A*4*D;for(let W=0;W<H.count;W++){const Z=W*w;g===!0&&(i.fromBufferAttribute(H,W),C[K+Z+0]=i.x,C[K+Z+1]=i.y,C[K+Z+2]=i.z,C[K+Z+3]=0),_===!0&&(i.fromBufferAttribute(z,W),C[K+Z+4]=i.x,C[K+Z+5]=i.y,C[K+Z+6]=i.z,C[K+Z+7]=0),p===!0&&(i.fromBufferAttribute(X,W),C[K+Z+8]=i.x,C[K+Z+9]=i.y,C[K+Z+10]=i.z,C[K+Z+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:B,size:new Dt(R,A)},n.set(o,d),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",_),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function Zd(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class fl extends Ae{constructor(t,e,n,i,s,r,o,l,c,h=vi){if(h!==vi&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=Gn),n===void 0&&h===Ei&&(n=bi),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pl=new Ae,uo=new fl(1,1),ml=new il,gl=new Fc,_l=new hl,fo=[],po=[],mo=new Float32Array(16),go=new Float32Array(9),_o=new Float32Array(4);function Ti(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=fo[i];if(s===void 0&&(s=new Float32Array(i),fo[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function he(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function ue(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Gs(a,t){let e=po[t];e===void 0&&(e=new Int32Array(t),po[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Jd(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Qd(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;a.uniform2fv(this.addr,t),ue(e,t)}}function tf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;a.uniform3fv(this.addr,t),ue(e,t)}}function ef(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;a.uniform4fv(this.addr,t),ue(e,t)}}function nf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;_o.set(n),a.uniformMatrix2fv(this.addr,!1,_o),ue(e,n)}}function sf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;go.set(n),a.uniformMatrix3fv(this.addr,!1,go),ue(e,n)}}function af(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;mo.set(n),a.uniformMatrix4fv(this.addr,!1,mo),ue(e,n)}}function rf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function of(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;a.uniform2iv(this.addr,t),ue(e,t)}}function lf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;a.uniform3iv(this.addr,t),ue(e,t)}}function cf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;a.uniform4iv(this.addr,t),ue(e,t)}}function hf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function uf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;a.uniform2uiv(this.addr,t),ue(e,t)}}function df(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;a.uniform3uiv(this.addr,t),ue(e,t)}}function ff(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;a.uniform4uiv(this.addr,t),ue(e,t)}}function pf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(uo.compareFunction=tl,s=uo):s=pl,e.setTexture2D(t||s,i)}function mf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gl,i)}function gf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_l,i)}function _f(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ml,i)}function xf(a){switch(a){case 5126:return Jd;case 35664:return Qd;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return rf;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return gf;case 36289:case 36303:case 36311:case 36292:return _f}}function vf(a,t){a.uniform1fv(this.addr,t)}function yf(a,t){const e=Ti(t,this.size,2);a.uniform2fv(this.addr,e)}function Sf(a,t){const e=Ti(t,this.size,3);a.uniform3fv(this.addr,e)}function Mf(a,t){const e=Ti(t,this.size,4);a.uniform4fv(this.addr,e)}function bf(a,t){const e=Ti(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Ef(a,t){const e=Ti(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function wf(a,t){const e=Ti(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Tf(a,t){a.uniform1iv(this.addr,t)}function Af(a,t){a.uniform2iv(this.addr,t)}function Cf(a,t){a.uniform3iv(this.addr,t)}function Pf(a,t){a.uniform4iv(this.addr,t)}function Rf(a,t){a.uniform1uiv(this.addr,t)}function Df(a,t){a.uniform2uiv(this.addr,t)}function Lf(a,t){a.uniform3uiv(this.addr,t)}function If(a,t){a.uniform4uiv(this.addr,t)}function Nf(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);he(n,s)||(a.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||pl,s[r])}function Uf(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);he(n,s)||(a.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||gl,s[r])}function Ff(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);he(n,s)||(a.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||_l,s[r])}function Bf(a,t,e){const n=this.cache,i=t.length,s=Gs(e,i);he(n,s)||(a.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||ml,s[r])}function Of(a){switch(a){case 5126:return vf;case 35664:return yf;case 35665:return Sf;case 35666:return Mf;case 35674:return bf;case 35675:return Ef;case 35676:return wf;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Pf;case 5125:return Rf;case 36294:return Df;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Bf}}class kf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xf(e.type)}}class zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Of(e.type)}}class Hf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function xo(a,t){a.seq.push(t),a.map[t.id]=t}function Gf(a,t,e){const n=a.name,i=n.length;for(va.lastIndex=0;;){const s=va.exec(n),r=va.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){xo(e,c===void 0?new kf(o,a,t):new zf(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new Hf(o),xo(e,u)),e=u}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);Gf(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function vo(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}const Vf=37297;let Wf=0;function qf(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Xf(a){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(a);let n;switch(t===e?n="":t===Ls&&e===Ds?n="LinearDisplayP3ToLinearSRGB":t===Ds&&e===Ls&&(n="LinearSRGBToLinearDisplayP3"),a){case Tn:case ks:return[n,"LinearTransferOETF"];case $e:case xr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function yo(a,t,e){const n=a.getShaderParameter(t,a.COMPILE_STATUS),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+qf(a.getShaderSource(t),r)}else return i}function Yf(a,t){const e=Xf(t);return`vec4 ${a}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $f(a,t){let e;switch(t){case lc:e="Linear";break;case cc:e="Reinhard";break;case hc:e="Cineon";break;case uc:e="ACESFilmic";break;case fc:e="AgX";break;case pc:e="Neutral";break;case dc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new U;function Kf(){Xt.getLuminanceCoefficients(ps);const a=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jf(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function Zf(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jf(a,t){const e={},n=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Fi(a){return a!==""}function So(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mo(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function or(a){return a.replace(Qf,ep)}const tp=new Map;function ep(a,t){let e=Nt[t];if(e===void 0){const n=tp.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return or(e)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(a){return a.replace(np,ip)}function ip(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Eo(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sp(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ho?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function ap(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Si:case Mi:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rp(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function op(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Go:t="ENVMAP_BLENDING_MULTIPLY";break;case rc:t="ENVMAP_BLENDING_MIX";break;case oc:t="ENVMAP_BLENDING_ADD";break}return t}function lp(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cp(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=sp(e),c=ap(e),h=rp(e),u=op(e),d=lp(e),f=jf(e),g=Zf(s),_=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),m.length>0&&(m+=`
`)):(p=[Eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),m=[Eo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Nt.tonemapping_pars_fragment:"",e.toneMapping!==En?$f("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Yf("linearToOutputTexel",e.outputColorSpace),Kf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fi).join(`
`)),r=or(r),r=So(r,e),r=Mo(r,e),o=or(o),o=So(o,e),o=Mo(o,e),r=bo(r),o=bo(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Or?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+r,S=y+m+o,R=vo(i,i.VERTEX_SHADER,v),A=vo(i,i.FRAGMENT_SHADER,S);i.attachShader(_,R),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(a.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(R).trim(),X=i.getShaderInfoLog(A).trim();let K=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,R,A);else{const Z=yo(i,R,"vertex"),G=yo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+Z+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||X==="")&&(W=!1);W&&(D.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(R),i.deleteShader(A),B=new Ts(i,_),w=Jf(i,_)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,Vf)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let hp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dp(t),e.set(t,n)),n}}class dp{constructor(t){this.id=hp++,this.code=t,this.usedTimes=0}}function fp(a,t,e,n,i,s,r){const o=new sl,l=new up,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,E,D,H,z){const X=H.fog,K=z.geometry,W=w.isMeshStandardMaterial?H.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),G=Z&&Z.mapping===Os?Z.image.height:null,ot=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=ut!==void 0?ut.length:0;let Ot=0;K.morphAttributes.position!==void 0&&(Ot=1),K.morphAttributes.normal!==void 0&&(Ot=2),K.morphAttributes.color!==void 0&&(Ot=3);let $t,V,Q,mt;if(ot){const Gt=Ke[ot];$t=Gt.vertexShader,V=Gt.fragmentShader}else $t=w.vertexShader,V=w.fragmentShader,l.update(w),Q=l.getVertexShaderID(w),mt=l.getFragmentShaderID(w);const ct=a.getRenderTarget(),Et=z.isInstancedMesh===!0,Pt=z.isBatchedMesh===!0,Bt=!!w.map,Qt=!!w.matcap,P=!!Z,ne=!!w.aoMap,Yt=!!w.lightMap,Kt=!!w.bumpMap,yt=!!w.normalMap,ie=!!w.displacementMap,At=!!w.emissiveMap,Rt=!!w.metalnessMap,T=!!w.roughnessMap,M=w.anisotropy>0,k=w.clearcoat>0,$=w.dispersion>0,J=w.iridescence>0,j=w.sheen>0,St=w.transmission>0,at=M&&!!w.anisotropyMap,ht=k&&!!w.clearcoatMap,Lt=k&&!!w.clearcoatNormalMap,tt=k&&!!w.clearcoatRoughnessMap,lt=J&&!!w.iridescenceMap,kt=J&&!!w.iridescenceThicknessMap,Tt=j&&!!w.sheenColorMap,dt=j&&!!w.sheenRoughnessMap,Ct=!!w.specularMap,Ft=!!w.specularColorMap,Jt=!!w.specularIntensityMap,L=St&&!!w.transmissionMap,et=St&&!!w.thicknessMap,q=!!w.gradientMap,Y=!!w.alphaMap,it=w.alphaTest>0,Mt=!!w.alphaHash,zt=!!w.extensions;let se=En;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(se=a.toneMapping);const me={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:$t,fragmentShader:V,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?a.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Tn,alphaToCoverage:!!w.alphaToCoverage,map:Bt,matcap:Qt,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:G,aoMap:ne,lightMap:Yt,bumpMap:Kt,normalMap:yt,displacementMap:d&&ie,emissiveMap:At,normalMapObjectSpace:yt&&w.normalMapType===vc,normalMapTangentSpace:yt&&w.normalMapType===xc,metalnessMap:Rt,roughnessMap:T,anisotropy:M,anisotropyMap:at,clearcoat:k,clearcoatMap:ht,clearcoatNormalMap:Lt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:J,iridescenceMap:lt,iridescenceThicknessMap:kt,sheen:j,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:Ct,specularColorMap:Ft,specularIntensityMap:Jt,transmission:St,transmissionMap:L,thicknessMap:et,gradientMap:q,opaque:w.transparent===!1&&w.blending===xi&&w.alphaToCoverage===!1,alphaMap:Y,alphaTest:it,alphaHash:Mt,combine:w.combine,mapUv:Bt&&_(w.map.channel),aoMapUv:ne&&_(w.aoMap.channel),lightMapUv:Yt&&_(w.lightMap.channel),bumpMapUv:Kt&&_(w.bumpMap.channel),normalMapUv:yt&&_(w.normalMap.channel),displacementMapUv:ie&&_(w.displacementMap.channel),emissiveMapUv:At&&_(w.emissiveMap.channel),metalnessMapUv:Rt&&_(w.metalnessMap.channel),roughnessMapUv:T&&_(w.roughnessMap.channel),anisotropyMapUv:at&&_(w.anisotropyMap.channel),clearcoatMapUv:ht&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ct&&_(w.specularMap.channel),specularColorMapUv:Ft&&_(w.specularColorMap.channel),specularIntensityMapUv:Jt&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:et&&_(w.thicknessMap.channel),alphaMapUv:Y&&_(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(yt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Bt||Y),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:se,decodeVideoTexture:Bt&&w.map.isVideoTexture===!0&&Xt.getTransfer(w.map.colorSpace)===Zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ve,flipSided:w.side===Te,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&w.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function m(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)E.push(D),E.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(y(E,w),v(E,w),E.push(a.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function y(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function v(w,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),w.push(o.mask)}function S(w){const E=g[w.type];let D;if(E){const H=Ke[E];D=$c.clone(H.uniforms)}else D=w.uniforms;return D}function R(w,E){let D;for(let H=0,z=h.length;H<z;H++){const X=h[H];if(X.cacheKey===E){D=X,++D.usedTimes;break}}return D===void 0&&(D=new cp(a,E,w,s),h.push(D)),D}function A(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:B}}function pp(){let a=new WeakMap;function t(r){return a.has(r)}function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function mp(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function wo(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function To(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,f,g,_,p){let m=a[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},a[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function o(u,d,f,g,_,p){const m=r(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=r(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||mp),n.length>1&&n.sort(d||wo),i.length>1&&i.sort(d||wo)}function h(){for(let u=t,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function gp(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new To,a.set(n,[r])):i>=s.length?(r=new To,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function _p(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return a[t.id]=e,e}}}function xp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let vp=0;function yp(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Sp(a){const t=new _p,e=xp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new oe,r=new oe;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,y=0,v=0,S=0,R=0,A=0,C=0;c.sort(yp);for(let w=0,E=c.length;w<E;w++){const D=c[w],H=D.color,z=D.intensity,X=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*z,u+=H.g*z,d+=H.b*z;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],z);C++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=W,f++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(H).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;const Z=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){const G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=K,S++}_++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(H).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=W,p++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Z=D.shadow,G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=D.shadow.matrix,v++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(z),W.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[m]=W,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const B=n.hash;(B.directionalLength!==f||B.pointLength!==g||B.spotLength!==_||B.rectAreaLength!==p||B.hemiLength!==m||B.numDirectionalShadows!==y||B.numPointShadows!==v||B.numSpotShadows!==S||B.numSpotMaps!==R||B.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,B.directionalLength=f,B.pointLength=g,B.spotLength=_,B.rectAreaLength=p,B.hemiLength=m,B.numDirectionalShadows=y,B.numPointShadows=v,B.numSpotShadows=S,B.numSpotMaps=R,B.numLightProbes=C,n.version=vp++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(v.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),r.identity(),s.copy(v.matrixWorld),s.premultiply(p),r.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Ao(a){const t=new Sp(a),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function Mp(a){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let o;return r===void 0?(o=new Ao(a),t.set(i,[o])):s>=r.length?(o=new Ao(a),r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class bp extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ep extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tp=`uniform sampler2D shadow_pass;
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
}`;function Ap(a,t,e){let n=new ul;const i=new Dt,s=new Dt,r=new pe,o=new bp({depthPacking:_c}),l=new Ep,c={},h=e.maxTextureSize,u={[hn]:Te,[Te]:hn,[Ve]:Ve},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:wp,fragmentShader:Tp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let m=this.type;this.render=function(A,C,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=a.getRenderTarget(),E=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),H=a.state;H.setBlending(bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=m!==an&&this.type===an,X=m===an&&this.type!==an;for(let K=0,W=A.length;K<W;K++){const Z=A[K],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ot=G.getFrameExtents();if(i.multiply(ot),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ot.x),i.x=s.x*ot.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ot.y),i.y=s.y*ot.y,G.mapSize.y=s.y)),G.map===null||z===!0||X===!0){const gt=this.type!==an?{minFilter:Be,magFilter:Be}:{};G.map!==null&&G.map.dispose(),G.map=new Vn(i.x,i.y,gt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}a.setRenderTarget(G.map),a.clear();const ut=G.getViewportCount();for(let gt=0;gt<ut;gt++){const Ot=G.getViewport(gt);r.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),H.viewport(r),G.updateMatrices(Z,gt),n=G.getFrustum(),S(C,B,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===an&&y(G,B),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(w,E,D)};function y(A,C){const B=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(C,null,B,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(C,null,B,f,_,null)}function v(A,C,B,w){let E=null;const D=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=B.isPointLight===!0?l:o,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=E.uuid,z=C.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let K=X[z];K===void 0&&(K=E.clone(),X[z]=K,C.addEventListener("dispose",R)),E=K}if(E.visible=C.visible,E.wireframe=C.wireframe,w===an?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=a.properties.get(E);H.light=B}return E}function S(A,C,B,w,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===an)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);const z=t.update(A),X=A.material;if(Array.isArray(X)){const K=z.groups;for(let W=0,Z=K.length;W<Z;W++){const G=K[W],ot=X[G.materialIndex];if(ot&&ot.visible){const ut=v(A,ot,w,E);A.onBeforeShadow(a,A,C,B,z,ut,G),a.renderBufferDirect(B,null,z,ut,A,G),A.onAfterShadow(a,A,C,B,z,ut,G)}}}else if(X.visible){const K=v(A,X,w,E);A.onBeforeShadow(a,A,C,B,z,K,null),a.renderBufferDirect(B,null,z,K,A,null),A.onAfterShadow(a,A,C,B,z,K,null)}}const H=A.children;for(let z=0,X=H.length;z<X;z++)S(H[z],C,B,w,E)}function R(A){A.target.removeEventListener("dispose",R);for(const B in c){const w=c[B],E=A.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function Cp(a){function t(){let L=!1;const et=new pe;let q=null;const Y=new pe(0,0,0,0);return{setMask:function(it){q!==it&&!L&&(a.colorMask(it,it,it,it),q=it)},setLocked:function(it){L=it},setClear:function(it,Mt,zt,se,me){me===!0&&(it*=se,Mt*=se,zt*=se),et.set(it,Mt,zt,se),Y.equals(et)===!1&&(a.clearColor(it,Mt,zt,se),Y.copy(et))},reset:function(){L=!1,q=null,Y.set(-1,0,0,0)}}}function e(){let L=!1,et=null,q=null,Y=null;return{setTest:function(it){it?mt(a.DEPTH_TEST):ct(a.DEPTH_TEST)},setMask:function(it){et!==it&&!L&&(a.depthMask(it),et=it)},setFunc:function(it){if(q!==it){switch(it){case Ql:a.depthFunc(a.NEVER);break;case tc:a.depthFunc(a.ALWAYS);break;case ec:a.depthFunc(a.LESS);break;case Ps:a.depthFunc(a.LEQUAL);break;case nc:a.depthFunc(a.EQUAL);break;case ic:a.depthFunc(a.GEQUAL);break;case sc:a.depthFunc(a.GREATER);break;case ac:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}q=it}},setLocked:function(it){L=it},setClear:function(it){Y!==it&&(a.clearDepth(it),Y=it)},reset:function(){L=!1,et=null,q=null,Y=null}}}function n(){let L=!1,et=null,q=null,Y=null,it=null,Mt=null,zt=null,se=null,me=null;return{setTest:function(Gt){L||(Gt?mt(a.STENCIL_TEST):ct(a.STENCIL_TEST))},setMask:function(Gt){et!==Gt&&!L&&(a.stencilMask(Gt),et=Gt)},setFunc:function(Gt,Je,Ye){(q!==Gt||Y!==Je||it!==Ye)&&(a.stencilFunc(Gt,Je,Ye),q=Gt,Y=Je,it=Ye)},setOp:function(Gt,Je,Ye){(Mt!==Gt||zt!==Je||se!==Ye)&&(a.stencilOp(Gt,Je,Ye),Mt=Gt,zt=Je,se=Ye)},setLocked:function(Gt){L=Gt},setClear:function(Gt){me!==Gt&&(a.clearStencil(Gt),me=Gt)},reset:function(){L=!1,et=null,q=null,Y=null,it=null,Mt=null,zt=null,se=null,me=null}}}const i=new t,s=new e,r=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,y=null,v=null,S=null,R=null,A=new Ht(0,0,0),C=0,B=!1,w=null,E=null,D=null,H=null,z=null;const X=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const Z=a.getParameter(a.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=W>=2);let G=null,ot={};const ut=a.getParameter(a.SCISSOR_BOX),gt=a.getParameter(a.VIEWPORT),Ot=new pe().fromArray(ut),$t=new pe().fromArray(gt);function V(L,et,q,Y){const it=new Uint8Array(4),Mt=a.createTexture();a.bindTexture(L,Mt),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let zt=0;zt<q;zt++)L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY?a.texImage3D(et,0,a.RGBA,1,1,Y,0,a.RGBA,a.UNSIGNED_BYTE,it):a.texImage2D(et+zt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,it);return Mt}const Q={};Q[a.TEXTURE_2D]=V(a.TEXTURE_2D,a.TEXTURE_2D,1),Q[a.TEXTURE_CUBE_MAP]=V(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[a.TEXTURE_2D_ARRAY]=V(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Q[a.TEXTURE_3D]=V(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),r.setClear(0),mt(a.DEPTH_TEST),s.setFunc(Ps),Kt(!1),yt(Lr),mt(a.CULL_FACE),ne(bn);function mt(L){c[L]!==!0&&(a.enable(L),c[L]=!0)}function ct(L){c[L]!==!1&&(a.disable(L),c[L]=!1)}function Et(L,et){return h[L]!==et?(a.bindFramebuffer(L,et),h[L]=et,L===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=et),L===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=et),!0):!1}function Pt(L,et){let q=d,Y=!1;if(L){q=u.get(et),q===void 0&&(q=[],u.set(et,q));const it=L.textures;if(q.length!==it.length||q[0]!==a.COLOR_ATTACHMENT0){for(let Mt=0,zt=it.length;Mt<zt;Mt++)q[Mt]=a.COLOR_ATTACHMENT0+Mt;q.length=it.length,Y=!0}}else q[0]!==a.BACK&&(q[0]=a.BACK,Y=!0);Y&&a.drawBuffers(q)}function Bt(L){return f!==L?(a.useProgram(L),f=L,!0):!1}const Qt={[Un]:a.FUNC_ADD,[Fl]:a.FUNC_SUBTRACT,[Bl]:a.FUNC_REVERSE_SUBTRACT};Qt[Ol]=a.MIN,Qt[kl]=a.MAX;const P={[zl]:a.ZERO,[Hl]:a.ONE,[Gl]:a.SRC_COLOR,[Ca]:a.SRC_ALPHA,[$l]:a.SRC_ALPHA_SATURATE,[Xl]:a.DST_COLOR,[Wl]:a.DST_ALPHA,[Vl]:a.ONE_MINUS_SRC_COLOR,[Pa]:a.ONE_MINUS_SRC_ALPHA,[Yl]:a.ONE_MINUS_DST_COLOR,[ql]:a.ONE_MINUS_DST_ALPHA,[Kl]:a.CONSTANT_COLOR,[jl]:a.ONE_MINUS_CONSTANT_COLOR,[Zl]:a.CONSTANT_ALPHA,[Jl]:a.ONE_MINUS_CONSTANT_ALPHA};function ne(L,et,q,Y,it,Mt,zt,se,me,Gt){if(L===bn){g===!0&&(ct(a.BLEND),g=!1);return}if(g===!1&&(mt(a.BLEND),g=!0),L!==Ul){if(L!==_||Gt!==B){if((p!==Un||v!==Un)&&(a.blendEquation(a.FUNC_ADD),p=Un,v=Un),Gt)switch(L){case xi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ir:a.blendFunc(a.ONE,a.ONE);break;case Nr:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ur:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ir:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Nr:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ur:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,y=null,S=null,R=null,A.set(0,0,0),C=0,_=L,B=Gt}return}it=it||et,Mt=Mt||q,zt=zt||Y,(et!==p||it!==v)&&(a.blendEquationSeparate(Qt[et],Qt[it]),p=et,v=it),(q!==m||Y!==y||Mt!==S||zt!==R)&&(a.blendFuncSeparate(P[q],P[Y],P[Mt],P[zt]),m=q,y=Y,S=Mt,R=zt),(se.equals(A)===!1||me!==C)&&(a.blendColor(se.r,se.g,se.b,me),A.copy(se),C=me),_=L,B=!1}function Yt(L,et){L.side===Ve?ct(a.CULL_FACE):mt(a.CULL_FACE);let q=L.side===Te;et&&(q=!q),Kt(q),L.blending===xi&&L.transparent===!1?ne(bn):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const Y=L.stencilWrite;r.setTest(Y),Y&&(r.setMask(L.stencilWriteMask),r.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),r.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),At(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(a.SAMPLE_ALPHA_TO_COVERAGE):ct(a.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(L){w!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),w=L)}function yt(L){L!==Ll?(mt(a.CULL_FACE),L!==E&&(L===Lr?a.cullFace(a.BACK):L===Il?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ct(a.CULL_FACE),E=L}function ie(L){L!==D&&(K&&a.lineWidth(L),D=L)}function At(L,et,q){L?(mt(a.POLYGON_OFFSET_FILL),(H!==et||z!==q)&&(a.polygonOffset(et,q),H=et,z=q)):ct(a.POLYGON_OFFSET_FILL)}function Rt(L){L?mt(a.SCISSOR_TEST):ct(a.SCISSOR_TEST)}function T(L){L===void 0&&(L=a.TEXTURE0+X-1),G!==L&&(a.activeTexture(L),G=L)}function M(L,et,q){q===void 0&&(G===null?q=a.TEXTURE0+X-1:q=G);let Y=ot[q];Y===void 0&&(Y={type:void 0,texture:void 0},ot[q]=Y),(Y.type!==L||Y.texture!==et)&&(G!==q&&(a.activeTexture(q),G=q),a.bindTexture(L,et||Q[L]),Y.type=L,Y.texture=et)}function k(){const L=ot[G];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(L){Ot.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),Ot.copy(L))}function dt(L){$t.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),$t.copy(L))}function Ct(L,et){let q=l.get(et);q===void 0&&(q=new WeakMap,l.set(et,q));let Y=q.get(L);Y===void 0&&(Y=a.getUniformBlockIndex(et,L.name),q.set(L,Y))}function Ft(L,et){const Y=l.get(et).get(L);o.get(et)!==Y&&(a.uniformBlockBinding(et,Y,L.__bindingPointIndex),o.set(et,Y))}function Jt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),c={},G=null,ot={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,y=null,v=null,S=null,R=null,A=new Ht(0,0,0),C=0,B=!1,w=null,E=null,D=null,H=null,z=null,Ot.set(0,0,a.canvas.width,a.canvas.height),$t.set(0,0,a.canvas.width,a.canvas.height),i.reset(),s.reset(),r.reset()}return{buffers:{color:i,depth:s,stencil:r},enable:mt,disable:ct,bindFramebuffer:Et,drawBuffers:Pt,useProgram:Bt,setBlending:ne,setMaterial:Yt,setFlipSided:Kt,setCullFace:yt,setLineWidth:ie,setPolygonOffset:At,setScissorTest:Rt,activeTexture:T,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:lt,texImage3D:kt,updateUBOMapping:Ct,uniformBlockBinding:Ft,texStorage2D:Lt,texStorage3D:tt,texSubImage2D:j,texSubImage3D:St,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:Tt,viewport:dt,reset:Jt}}function Co(a,t,e,n){const i=Pp(n);switch(e){case Yo:return a*t;case Ko:return a*t;case jo:return a*t*2;case Zo:return a*t/i.components*i.byteLength;case mr:return a*t/i.components*i.byteLength;case Jo:return a*t*2/i.components*i.byteLength;case gr:return a*t*2/i.components*i.byteLength;case $o:return a*t*3/i.components*i.byteLength;case Xe:return a*t*4/i.components*i.byteLength;case _r:return a*t*4/i.components*i.byteLength;case ys:case Ss:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case Ms:case bs:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Ba:return Math.max(a,16)*Math.max(t,8)/4;case Na:case Fa:return Math.max(a,8)*Math.max(t,8)/2;case Oa:case ka:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case za:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case tr:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Es:case er:case nr:return Math.ceil(a/4)*Math.ceil(t/4)*16;case Qo:case ir:return Math.ceil(a/4)*Math.ceil(t/4)*8;case sr:case ar:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pp(a){switch(a){case un:case Wo:return{byteLength:1,components:1};case ki:case qo:case zi:return{byteLength:2,components:1};case fr:case pr:return{byteLength:2,components:4};case Gn:case dr:case on:return{byteLength:4,components:1};case Xo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function Rp(a,t,e,n,i,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Ns("canvas")}function _(T,M,k){let $=1;const J=Rt(T);if((J.width>k||J.height>k)&&($=k/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor($*J.width),St=Math.floor($*J.height);u===void 0&&(u=g(j,St));const at=M?g(j,St):u;return at.width=j,at.height=St,at.getContext("2d").drawImage(T,0,0,j,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+St+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Be&&T.minFilter!==We}function m(T){a.generateMipmap(T)}function y(T,M,k,$,J=!1){if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=M;if(M===a.RED&&(k===a.FLOAT&&(j=a.R32F),k===a.HALF_FLOAT&&(j=a.R16F),k===a.UNSIGNED_BYTE&&(j=a.R8)),M===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&(j=a.R8UI),k===a.UNSIGNED_SHORT&&(j=a.R16UI),k===a.UNSIGNED_INT&&(j=a.R32UI),k===a.BYTE&&(j=a.R8I),k===a.SHORT&&(j=a.R16I),k===a.INT&&(j=a.R32I)),M===a.RG&&(k===a.FLOAT&&(j=a.RG32F),k===a.HALF_FLOAT&&(j=a.RG16F),k===a.UNSIGNED_BYTE&&(j=a.RG8)),M===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&(j=a.RG8UI),k===a.UNSIGNED_SHORT&&(j=a.RG16UI),k===a.UNSIGNED_INT&&(j=a.RG32UI),k===a.BYTE&&(j=a.RG8I),k===a.SHORT&&(j=a.RG16I),k===a.INT&&(j=a.RG32I)),M===a.RGB&&k===a.UNSIGNED_INT_5_9_9_9_REV&&(j=a.RGB9_E5),M===a.RGBA){const St=J?Rs:Xt.getTransfer($);k===a.FLOAT&&(j=a.RGBA32F),k===a.HALF_FLOAT&&(j=a.RGBA16F),k===a.UNSIGNED_BYTE&&(j=St===Zt?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT_4_4_4_4&&(j=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&(j=a.RGB5_A1)}return(j===a.R16F||j===a.R32F||j===a.RG16F||j===a.RG32F||j===a.RGBA16F||j===a.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(T,M){let k;return T?M===null||M===Gn||M===bi?k=a.DEPTH24_STENCIL8:M===on?k=a.DEPTH32F_STENCIL8:M===ki&&(k=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===bi?k=a.DEPTH_COMPONENT24:M===on?k=a.DEPTH_COMPONENT32F:M===ki&&(k=a.DEPTH_COMPONENT16),k}function S(T,M){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Be&&T.minFilter!==We?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){const M=T.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M)}function A(T){const M=T.target;M.removeEventListener("dispose",A),w(M)}function C(T){const M=n.get(T);if(M.__webglInit===void 0)return;const k=T.source,$=d.get(k);if($){const J=$[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&B(T),Object.keys($).length===0&&d.delete(k)}n.remove(T)}function B(T){const M=n.get(T);a.deleteTexture(M.__webglTexture);const k=T.source,$=d.get(k);delete $[M.__cacheKey],r.memory.textures--}function w(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let J=0;J<M.__webglFramebuffer[$].length;J++)a.deleteFramebuffer(M.__webglFramebuffer[$][J]);else a.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)a.deleteFramebuffer(M.__webglFramebuffer[$]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=T.textures;for(let $=0,J=k.length;$<J;$++){const j=n.get(k[$]);j.__webglTexture&&(a.deleteTexture(j.__webglTexture),r.memory.textures--),n.remove(k[$])}n.remove(T)}let E=0;function D(){E=0}function H(){const T=E;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),E+=1,T}function z(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function X(T,M){const k=n.get(T);if(T.isVideoTexture&&ie(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(k,T,M);return}}e.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+M)}function K(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){$t(k,T,M);return}e.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+M)}function W(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){$t(k,T,M);return}e.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+M)}function Z(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){V(k,T,M);return}e.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+M)}const G={[La]:a.REPEAT,[zn]:a.CLAMP_TO_EDGE,[Ia]:a.MIRRORED_REPEAT},ot={[Be]:a.NEAREST,[mc]:a.NEAREST_MIPMAP_NEAREST,[Yi]:a.NEAREST_MIPMAP_LINEAR,[We]:a.LINEAR,[$s]:a.LINEAR_MIPMAP_NEAREST,[Hn]:a.LINEAR_MIPMAP_LINEAR},ut={[yc]:a.NEVER,[Tc]:a.ALWAYS,[Sc]:a.LESS,[tl]:a.LEQUAL,[Mc]:a.EQUAL,[wc]:a.GEQUAL,[bc]:a.GREATER,[Ec]:a.NOTEQUAL};function gt(T,M){if(M.type===on&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===We||M.magFilter===$s||M.magFilter===Yi||M.magFilter===Hn||M.minFilter===We||M.minFilter===$s||M.minFilter===Yi||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(T,a.TEXTURE_WRAP_S,G[M.wrapS]),a.texParameteri(T,a.TEXTURE_WRAP_T,G[M.wrapT]),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,G[M.wrapR]),a.texParameteri(T,a.TEXTURE_MAG_FILTER,ot[M.magFilter]),a.texParameteri(T,a.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(a.texParameteri(T,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(T,a.TEXTURE_COMPARE_FUNC,ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Be||M.minFilter!==Yi&&M.minFilter!==Hn||M.type===on&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");a.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ot(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const $=M.source;let J=d.get($);J===void 0&&(J={},d.set($,J));const j=z(M);if(j!==T.__cacheKey){J[j]===void 0&&(J[j]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,k=!0),J[j].usedTimes++;const St=J[T.__cacheKey];St!==void 0&&(J[T.__cacheKey].usedTimes--,St.usedTimes===0&&B(M)),T.__cacheKey=j,T.__webglTexture=J[j].texture}return k}function $t(T,M,k){let $=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=a.TEXTURE_3D);const J=Ot(T,M),j=M.source;e.bindTexture($,T.__webglTexture,a.TEXTURE0+k);const St=n.get(j);if(j.version!==St.__version||J===!0){e.activeTexture(a.TEXTURE0+k);const at=Xt.getPrimaries(Xt.workingColorSpace),ht=M.colorSpace===Mn?null:Xt.getPrimaries(M.colorSpace),Lt=M.colorSpace===Mn||at===ht?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let tt=_(M.image,!1,i.maxTextureSize);tt=At(M,tt);const lt=s.convert(M.format,M.colorSpace),kt=s.convert(M.type);let Tt=y(M.internalFormat,lt,kt,M.colorSpace,M.isVideoTexture);gt($,M);let dt;const Ct=M.mipmaps,Ft=M.isVideoTexture!==!0,Jt=St.__version===void 0||J===!0,L=j.dataReady,et=S(M,tt);if(M.isDepthTexture)Tt=v(M.format===Ei,M.type),Jt&&(Ft?e.texStorage2D(a.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(a.TEXTURE_2D,0,Tt,tt.width,tt.height,0,lt,kt,null));else if(M.isDataTexture)if(Ct.length>0){Ft&&Jt&&e.texStorage2D(a.TEXTURE_2D,et,Tt,Ct[0].width,Ct[0].height);for(let q=0,Y=Ct.length;q<Y;q++)dt=Ct[q],Ft?L&&e.texSubImage2D(a.TEXTURE_2D,q,0,0,dt.width,dt.height,lt,kt,dt.data):e.texImage2D(a.TEXTURE_2D,q,Tt,dt.width,dt.height,0,lt,kt,dt.data);M.generateMipmaps=!1}else Ft?(Jt&&e.texStorage2D(a.TEXTURE_2D,et,Tt,tt.width,tt.height),L&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,tt.width,tt.height,lt,kt,tt.data)):e.texImage2D(a.TEXTURE_2D,0,Tt,tt.width,tt.height,0,lt,kt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ft&&Jt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,et,Tt,Ct[0].width,Ct[0].height,tt.depth);for(let q=0,Y=Ct.length;q<Y;q++)if(dt=Ct[q],M.format!==Xe)if(lt!==null)if(Ft){if(L)if(M.layerUpdates.size>0){const it=Co(dt.width,dt.height,M.format,M.type);for(const Mt of M.layerUpdates){const zt=dt.data.subarray(Mt*it/dt.data.BYTES_PER_ELEMENT,(Mt+1)*it/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,q,0,0,Mt,dt.width,dt.height,1,lt,zt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,tt.depth,lt,dt.data,0,0)}else e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,q,Tt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,tt.depth,lt,kt,dt.data):e.texImage3D(a.TEXTURE_2D_ARRAY,q,Tt,dt.width,dt.height,tt.depth,0,lt,kt,dt.data)}else{Ft&&Jt&&e.texStorage2D(a.TEXTURE_2D,et,Tt,Ct[0].width,Ct[0].height);for(let q=0,Y=Ct.length;q<Y;q++)dt=Ct[q],M.format!==Xe?lt!==null?Ft?L&&e.compressedTexSubImage2D(a.TEXTURE_2D,q,0,0,dt.width,dt.height,lt,dt.data):e.compressedTexImage2D(a.TEXTURE_2D,q,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(a.TEXTURE_2D,q,0,0,dt.width,dt.height,lt,kt,dt.data):e.texImage2D(a.TEXTURE_2D,q,Tt,dt.width,dt.height,0,lt,kt,dt.data)}else if(M.isDataArrayTexture)if(Ft){if(Jt&&e.texStorage3D(a.TEXTURE_2D_ARRAY,et,Tt,tt.width,tt.height,tt.depth),L)if(M.layerUpdates.size>0){const q=Co(tt.width,tt.height,M.format,M.type);for(const Y of M.layerUpdates){const it=tt.data.subarray(Y*q/tt.data.BYTES_PER_ELEMENT,(Y+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Y,tt.width,tt.height,1,lt,kt,it)}M.clearLayerUpdates()}else e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,kt,tt.data)}else e.texImage3D(a.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,lt,kt,tt.data);else if(M.isData3DTexture)Ft?(Jt&&e.texStorage3D(a.TEXTURE_3D,et,Tt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,kt,tt.data)):e.texImage3D(a.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,lt,kt,tt.data);else if(M.isFramebufferTexture){if(Jt)if(Ft)e.texStorage2D(a.TEXTURE_2D,et,Tt,tt.width,tt.height);else{let q=tt.width,Y=tt.height;for(let it=0;it<et;it++)e.texImage2D(a.TEXTURE_2D,it,Tt,q,Y,0,lt,kt,null),q>>=1,Y>>=1}}else if(Ct.length>0){if(Ft&&Jt){const q=Rt(Ct[0]);e.texStorage2D(a.TEXTURE_2D,et,Tt,q.width,q.height)}for(let q=0,Y=Ct.length;q<Y;q++)dt=Ct[q],Ft?L&&e.texSubImage2D(a.TEXTURE_2D,q,0,0,lt,kt,dt):e.texImage2D(a.TEXTURE_2D,q,Tt,lt,kt,dt);M.generateMipmaps=!1}else if(Ft){if(Jt){const q=Rt(tt);e.texStorage2D(a.TEXTURE_2D,et,Tt,q.width,q.height)}L&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,lt,kt,tt)}else e.texImage2D(a.TEXTURE_2D,0,Tt,lt,kt,tt);p(M)&&m($),St.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function V(T,M,k){if(M.image.length!==6)return;const $=Ot(T,M),J=M.source;e.bindTexture(a.TEXTURE_CUBE_MAP,T.__webglTexture,a.TEXTURE0+k);const j=n.get(J);if(J.version!==j.__version||$===!0){e.activeTexture(a.TEXTURE0+k);const St=Xt.getPrimaries(Xt.workingColorSpace),at=M.colorSpace===Mn?null:Xt.getPrimaries(M.colorSpace),ht=M.colorSpace===Mn||St===at?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,lt=[];for(let Y=0;Y<6;Y++)!Lt&&!tt?lt[Y]=_(M.image[Y],!0,i.maxCubemapSize):lt[Y]=tt?M.image[Y].image:M.image[Y],lt[Y]=At(M,lt[Y]);const kt=lt[0],Tt=s.convert(M.format,M.colorSpace),dt=s.convert(M.type),Ct=y(M.internalFormat,Tt,dt,M.colorSpace),Ft=M.isVideoTexture!==!0,Jt=j.__version===void 0||$===!0,L=J.dataReady;let et=S(M,kt);gt(a.TEXTURE_CUBE_MAP,M);let q;if(Lt){Ft&&Jt&&e.texStorage2D(a.TEXTURE_CUBE_MAP,et,Ct,kt.width,kt.height);for(let Y=0;Y<6;Y++){q=lt[Y].mipmaps;for(let it=0;it<q.length;it++){const Mt=q[it];M.format!==Xe?Tt!==null?Ft?L&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,Mt.width,Mt.height,Tt,Mt.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ct,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,Mt.width,Mt.height,Tt,dt,Mt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ct,Mt.width,Mt.height,0,Tt,dt,Mt.data)}}}else{if(q=M.mipmaps,Ft&&Jt){q.length>0&&et++;const Y=Rt(lt[0]);e.texStorage2D(a.TEXTURE_CUBE_MAP,et,Ct,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){Ft?L&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lt[Y].width,lt[Y].height,Tt,dt,lt[Y].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ct,lt[Y].width,lt[Y].height,0,Tt,dt,lt[Y].data);for(let it=0;it<q.length;it++){const zt=q[it].image[Y].image;Ft?L&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,zt.width,zt.height,Tt,dt,zt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ct,zt.width,zt.height,0,Tt,dt,zt.data)}}else{Ft?L&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Tt,dt,lt[Y]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ct,Tt,dt,lt[Y]);for(let it=0;it<q.length;it++){const Mt=q[it];Ft?L&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Tt,dt,Mt.image[Y]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ct,Tt,dt,Mt.image[Y])}}}p(M)&&m(a.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Q(T,M,k,$,J,j){const St=s.convert(k.format,k.colorSpace),at=s.convert(k.type),ht=y(k.internalFormat,St,at,k.colorSpace);if(!n.get(M).__hasExternalTextures){const tt=Math.max(1,M.width>>j),lt=Math.max(1,M.height>>j);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?e.texImage3D(J,j,ht,tt,lt,M.depth,0,St,at,null):e.texImage2D(J,j,ht,tt,lt,0,St,at,null)}e.bindFramebuffer(a.FRAMEBUFFER,T),yt(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,J,n.get(k).__webglTexture,0,Kt(M)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,J,n.get(k).__webglTexture,j),e.bindFramebuffer(a.FRAMEBUFFER,null)}function mt(T,M,k){if(a.bindRenderbuffer(a.RENDERBUFFER,T),M.depthBuffer){const $=M.depthTexture,J=$&&$.isDepthTexture?$.type:null,j=v(M.stencilBuffer,J),St=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,at=Kt(M);yt(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,at,j,M.width,M.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,at,j,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,j,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,St,a.RENDERBUFFER,T)}else{const $=M.textures;for(let J=0;J<$.length;J++){const j=$[J],St=s.convert(j.format,j.colorSpace),at=s.convert(j.type),ht=y(j.internalFormat,St,at,j.colorSpace),Lt=Kt(M);k&&yt(M)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt,ht,M.width,M.height):yt(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt,ht,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ht,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ct(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,J=Kt(M);if(M.depthTexture.format===vi)yt(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0);else if(M.depthTexture.format===Ei)yt(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Et(T){const M=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=$}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ct(M.__webglFramebuffer,T)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=a.createRenderbuffer(),mt(M.__webglDepthbuffer[$],T,!1);else{const J=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,j),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,j)}}else if(e.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),mt(M.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,J)}e.bindFramebuffer(a.FRAMEBUFFER,null)}function Pt(T,M,k){const $=n.get(T);M!==void 0&&Q($.__webglFramebuffer,T,T.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&Et(T)}function Bt(T){const M=T.texture,k=n.get(T),$=n.get(M);T.addEventListener("dispose",A);const J=T.textures,j=T.isWebGLCubeRenderTarget===!0,St=J.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=M.version,r.memory.textures++),j){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let ht=0;ht<M.mipmaps.length;ht++)k.__webglFramebuffer[at][ht]=a.createFramebuffer()}else k.__webglFramebuffer[at]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<M.mipmaps.length;at++)k.__webglFramebuffer[at]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(St)for(let at=0,ht=J.length;at<ht;at++){const Lt=n.get(J[at]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=a.createTexture(),r.memory.textures++)}if(T.samples>0&&yt(T)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ht=J[at];k.__webglColorRenderbuffer[at]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const Lt=s.convert(ht.format,ht.colorSpace),tt=s.convert(ht.type),lt=y(ht.internalFormat,Lt,tt,ht.colorSpace,T.isXRRenderTarget===!0),kt=Kt(T);a.renderbufferStorageMultisample(a.RENDERBUFFER,kt,lt,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+at,a.RENDERBUFFER,k.__webglColorRenderbuffer[at])}a.bindRenderbuffer(a.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),mt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(j){e.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),gt(a.TEXTURE_CUBE_MAP,M);for(let at=0;at<6;at++)if(M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)Q(k.__webglFramebuffer[at][ht],T,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else Q(k.__webglFramebuffer[at],T,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(M)&&m(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,ht=J.length;at<ht;at++){const Lt=J[at],tt=n.get(Lt);e.bindTexture(a.TEXTURE_2D,tt.__webglTexture),gt(a.TEXTURE_2D,Lt),Q(k.__webglFramebuffer,T,Lt,a.COLOR_ATTACHMENT0+at,a.TEXTURE_2D,0),p(Lt)&&m(a.TEXTURE_2D)}e.unbindTexture()}else{let at=a.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),gt(at,M),M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)Q(k.__webglFramebuffer[ht],T,M,a.COLOR_ATTACHMENT0,at,ht);else Q(k.__webglFramebuffer,T,M,a.COLOR_ATTACHMENT0,at,0);p(M)&&m(at),e.unbindTexture()}T.depthBuffer&&Et(T)}function Qt(T){const M=T.textures;for(let k=0,$=M.length;k<$;k++){const J=M[k];if(p(J)){const j=T.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,St=n.get(J).__webglTexture;e.bindTexture(j,St),m(j),e.unbindTexture()}}}const P=[],ne=[];function Yt(T){if(T.samples>0){if(yt(T)===!1){const M=T.textures,k=T.width,$=T.height;let J=a.COLOR_BUFFER_BIT;const j=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,St=n.get(T),at=M.length>1;if(at)for(let ht=0;ht<M.length;ht++)e.bindFramebuffer(a.FRAMEBUFFER,St.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,St.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ht=0;ht<M.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),at){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,St.__webglColorRenderbuffer[ht]);const Lt=n.get(M[ht]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Lt,0)}a.blitFramebuffer(0,0,k,$,0,0,k,$,J,a.NEAREST),l===!0&&(P.length=0,ne.length=0,P.push(a.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.resolveDepthBuffer===!1&&(P.push(j),ne.push(j),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ne)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),at)for(let ht=0;ht<M.length;ht++){e.bindFramebuffer(a.FRAMEBUFFER,St.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.RENDERBUFFER,St.__webglColorRenderbuffer[ht]);const Lt=n.get(M[ht]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,St.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ht,a.TEXTURE_2D,Lt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Kt(T){return Math.min(i.maxSamples,T.samples)}function yt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(T){const M=r.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function At(T,M){const k=T.colorSpace,$=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Tn&&k!==Mn&&(Xt.getTransfer(k)===Zt?($!==Xe||J!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Pt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=yt}function Dp(a,t){function e(n,i=Mn){let s;const r=Xt.getTransfer(i);if(n===un)return a.UNSIGNED_BYTE;if(n===fr)return a.UNSIGNED_SHORT_4_4_4_4;if(n===pr)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Xo)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Wo)return a.BYTE;if(n===qo)return a.SHORT;if(n===ki)return a.UNSIGNED_SHORT;if(n===dr)return a.INT;if(n===Gn)return a.UNSIGNED_INT;if(n===on)return a.FLOAT;if(n===zi)return a.HALF_FLOAT;if(n===Yo)return a.ALPHA;if(n===$o)return a.RGB;if(n===Xe)return a.RGBA;if(n===Ko)return a.LUMINANCE;if(n===jo)return a.LUMINANCE_ALPHA;if(n===vi)return a.DEPTH_COMPONENT;if(n===Ei)return a.DEPTH_STENCIL;if(n===Zo)return a.RED;if(n===mr)return a.RED_INTEGER;if(n===Jo)return a.RG;if(n===gr)return a.RG_INTEGER;if(n===_r)return a.RGBA_INTEGER;if(n===ys||n===Ss||n===Ms||n===bs)if(r===Zt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Ua||n===Fa||n===Ba)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===ka||n===za)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oa||n===ka)return r===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===za)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Ga||n===Va||n===Wa||n===qa||n===Xa||n===Ya||n===$a||n===Ka||n===ja||n===Za||n===Ja||n===Qa||n===tr)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ha)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tr)return r===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===er||n===nr)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Es)return r===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===er)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===ir||n===sr||n===ar)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Es)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ir)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ar)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:e}}class Lp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ms extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ip={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Np=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Up=`
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

}`;class Fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:Np,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bp extends $n{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Fp,p=e.getContextAttributes();let m=null,y=null;const v=[],S=[],R=new Dt;let A=null;const C=new Fe;C.layers.enable(1),C.viewport=new pe;const B=new Fe;B.layers.enable(2),B.viewport=new pe;const w=[C,B],E=new Lp;E.layers.enable(1),E.layers.enable(2);let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=v[V];return Q===void 0&&(Q=new ya,v[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=v[V];return Q===void 0&&(Q=new ya,v[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=v[V];return Q===void 0&&(Q=new ya,v[V]=Q),Q.getHandSpace()};function z(V){const Q=S.indexOf(V.inputSource);if(Q===-1)return;const mt=v[Q];mt!==void 0&&(mt.update(V.inputSource,V.frame,c||r),mt.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let V=0;V<v.length;V++){const Q=S[V];Q!==null&&(S[V]=null,v[V].disconnect(Q))}D=null,H=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:un,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,mt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Ei:vi,mt=p.stencil?bi:Gn);const Et={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Vn(d.textureWidth,d.textureHeight,{format:Xe,type:un,depthTexture:new fl(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(V){for(let Q=0;Q<V.removed.length;Q++){const mt=V.removed[Q],ct=S.indexOf(mt);ct>=0&&(S[ct]=null,v[ct].disconnect(mt))}for(let Q=0;Q<V.added.length;Q++){const mt=V.added[Q];let ct=S.indexOf(mt);if(ct===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=S.length){S.push(mt),ct=Pt;break}else if(S[Pt]===null){S[Pt]=mt,ct=Pt;break}if(ct===-1)break}const Et=v[ct];Et&&Et.connect(mt)}}const W=new U,Z=new U;function G(V,Q,mt){W.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(mt.matrixWorld);const ct=W.distanceTo(Z),Et=Q.projectionMatrix.elements,Pt=mt.projectionMatrix.elements,Bt=Et[14]/(Et[10]-1),Qt=Et[14]/(Et[10]+1),P=(Et[9]+1)/Et[5],ne=(Et[9]-1)/Et[5],Yt=(Et[8]-1)/Et[0],Kt=(Pt[8]+1)/Pt[0],yt=Bt*Yt,ie=Bt*Kt,At=ct/(-Yt+Kt),Rt=At*-Yt;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Rt),V.translateZ(At),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Et[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const T=Bt+At,M=Qt+At,k=yt-Rt,$=ie+(ct-Rt),J=P*Qt/M*T,j=ne*Qt/M*T;V.projectionMatrix.makePerspective(k,$,J,j,T,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ot(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let Q=V.near,mt=V.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),E.near=B.near=C.near=Q,E.far=B.far=C.far=mt,(D!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,H=E.far);const ct=V.parent,Et=E.cameras;ot(E,ct);for(let Pt=0;Pt<Et.length;Pt++)ot(Et[Pt],ct);Et.length===2?G(E,C,B):E.projectionMatrix.copy(C.projectionMatrix),ut(V,E,ct)};function ut(V,Q,mt){mt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=rr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let gt=null;function Ot(V,Q){if(h=Q.getViewerPose(c||r),g=Q,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;mt.length!==E.cameras.length&&(E.cameras.length=0,ct=!0);for(let Pt=0;Pt<mt.length;Pt++){const Bt=mt[Pt];let Qt=null;if(f!==null)Qt=f.getViewport(Bt);else{const ne=u.getViewSubImage(d,Bt);Qt=ne.viewport,Pt===0&&(t.setRenderTargetTextures(y,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(y))}let P=w[Pt];P===void 0&&(P=new Fe,P.layers.enable(Pt),P.viewport=new pe,w[Pt]=P),P.matrix.fromArray(Bt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Bt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Pt===0&&(E.matrix.copy(P.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ct===!0&&E.cameras.push(P)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Pt=u.getDepthInformation(mt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let mt=0;mt<v.length;mt++){const ct=S[mt],Et=v[mt];ct!==null&&Et!==void 0&&Et.update(ct,Q,c||r)}gt&&gt(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const $t=new dl;$t.setAnimationLoop(Ot),this.setAnimationLoop=function(V){gt=V},this.dispose=function(){}}}const In=new dn,Op=new oe;function kp(a,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ll(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Te&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Te&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,S=y.envMapRotation;v&&(p.envMap.value=v,In.copy(S),In.x*=-1,In.y*=-1,In.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),p.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(In)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Te&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zp(a,t,e,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(y,R);const A=t.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function h(y){const v=u();y.__bindingPointIndex=v;const S=a.createBuffer(),R=y.__size,A=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,R,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,S),S}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],S=y.uniforms,R=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let A=0,C=S.length;A<C;A++){const B=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,E=B.length;w<E;w++){const D=B[w];if(f(D,A,w,R)===!0){const H=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let K=0;K<z.length;K++){const W=z[K],Z=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,a.bufferSubData(a.UNIFORM_BUFFER,H+X,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,H,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(y,v,S,R){const A=y.value,C=v+"_"+S;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const B=R[C];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return R[C]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function g(y){const v=y.uniforms;let S=0;const R=16;for(let C=0,B=v.length;C<B;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,D=w.length;E<D;E++){const H=w[E],z=Array.isArray(H.value)?H.value:[H.value];for(let X=0,K=z.length;X<K;X++){const W=z[X],Z=_(W),G=S%R,ot=G%Z.boundary,ut=G+ot;S+=ot,ut!==0&&R-ut<Z.storage&&(S+=R-ut),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Z.storage}}}const A=S%R;return A>0&&(S+=R-A),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=r.indexOf(v.__bindingPointIndex);r.splice(S,1),a.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Hp{constructor(t={}){const{canvas:e=Pc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=En,this.toneMappingExposure=1;const v=this;let S=!1,R=0,A=0,C=null,B=-1,w=null;const E=new pe,D=new pe;let H=null;const z=new Ht(0);let X=0,K=e.width,W=e.height,Z=1,G=null,ot=null;const ut=new pe(0,0,K,W),gt=new pe(0,0,K,W);let Ot=!1;const $t=new ul;let V=!1,Q=!1;const mt=new oe,ct=new U,Et=new pe,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Qt(){return C===null?Z:1}let P=n;function ne(b,I){return e.getContext(b,I)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ur}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",it,!1),P===null){const I="webgl2";if(P=ne(I,b),P===null)throw ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Yt,Kt,yt,ie,At,Rt,T,M,k,$,J,j,St,at,ht,Lt,tt,lt,kt,Tt,dt,Ct,Ft,Jt;function L(){Yt=new Xd(P),Yt.init(),Ct=new Dp(P,Yt),Kt=new kd(P,Yt,t,Ct),yt=new Cp(P),ie=new Kd(P),At=new pp,Rt=new Rp(P,Yt,yt,At,Kt,Ct,ie),T=new Hd(v),M=new qd(v),k=new eh(P),Ft=new Bd(P,k),$=new Yd(P,k,ie,Ft),J=new Zd(P,$,k,ie),kt=new jd(P,Kt,Rt),Lt=new zd(At),j=new fp(v,T,M,Yt,Kt,Ft,Lt),St=new kp(v,At),at=new gp,ht=new Mp(Yt),lt=new Fd(v,T,M,yt,J,d,l),tt=new Ap(v,J,Kt),Jt=new zp(P,ie,Kt,yt),Tt=new Od(P,Yt,ie),dt=new $d(P,Yt,ie),ie.programs=j.programs,v.capabilities=Kt,v.extensions=Yt,v.properties=At,v.renderLists=at,v.shadowMap=tt,v.state=yt,v.info=ie}L();const et=new Bp(v,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(K,W,!1))},this.getSize=function(b){return b.set(K,W)},this.setSize=function(b,I,F=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,W=I,e.width=Math.floor(b*Z),e.height=Math.floor(I*Z),F===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(K*Z,W*Z).floor()},this.setDrawingBufferSize=function(b,I,F){K=b,W=I,Z=F,e.width=Math.floor(b*F),e.height=Math.floor(I*F),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,I,F,O){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,I,F,O),yt.viewport(E.copy(ut).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(gt)},this.setScissor=function(b,I,F,O){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,I,F,O),yt.scissor(D.copy(gt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(b){yt.setScissorTest(Ot=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(b=!0,I=!0,F=!0){let O=0;if(b){let N=!1;if(C!==null){const nt=C.texture.format;N=nt===_r||nt===gr||nt===mr}if(N){const nt=C.texture.type,rt=nt===un||nt===Gn||nt===ki||nt===bi||nt===fr||nt===pr,ft=lt.getClearColor(),pt=lt.getClearAlpha(),bt=ft.r,wt=ft.g,_t=ft.b;rt?(f[0]=bt,f[1]=wt,f[2]=_t,f[3]=pt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=bt,g[1]=wt,g[2]=_t,g[3]=pt,P.clearBufferiv(P.COLOR,0,g))}else O|=P.COLOR_BUFFER_BIT}I&&(O|=P.DEPTH_BUFFER_BIT),F&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",it,!1),at.dispose(),ht.dispose(),At.dispose(),T.dispose(),M.dispose(),J.dispose(),Ft.dispose(),Jt.dispose(),j.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ye),et.removeEventListener("sessionend",wr),An.stop()};function q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ie.autoReset,I=tt.enabled,F=tt.autoUpdate,O=tt.needsUpdate,N=tt.type;L(),ie.autoReset=b,tt.enabled=I,tt.autoUpdate=F,tt.needsUpdate=O,tt.type=N}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Mt(b){const I=b.target;I.removeEventListener("dispose",Mt),zt(I)}function zt(b){se(b),At.remove(b)}function se(b){const I=At.get(b).programs;I!==void 0&&(I.forEach(function(F){j.releaseProgram(F)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,F,O,N,nt){I===null&&(I=Pt);const rt=N.isMesh&&N.matrixWorld.determinant()<0,ft=Ml(b,I,F,O,N);yt.setMaterial(O,rt);let pt=F.index,bt=1;if(O.wireframe===!0){if(pt=$.getWireframeAttribute(F),pt===void 0)return;bt=2}const wt=F.drawRange,_t=F.attributes.position;let Vt=wt.start*bt,te=(wt.start+wt.count)*bt;nt!==null&&(Vt=Math.max(Vt,nt.start*bt),te=Math.min(te,(nt.start+nt.count)*bt)),pt!==null?(Vt=Math.max(Vt,0),te=Math.min(te,pt.count)):_t!=null&&(Vt=Math.max(Vt,0),te=Math.min(te,_t.count));const ee=te-Vt;if(ee<0||ee===1/0)return;Ft.setup(N,O,ft,F,pt);let Pe,Wt=Tt;if(pt!==null&&(Pe=k.get(pt),Wt=dt,Wt.setIndex(Pe)),N.isMesh)O.wireframe===!0?(yt.setLineWidth(O.wireframeLinewidth*Qt()),Wt.setMode(P.LINES)):Wt.setMode(P.TRIANGLES);else if(N.isLine){let vt=O.linewidth;vt===void 0&&(vt=1),yt.setLineWidth(vt*Qt()),N.isLineSegments?Wt.setMode(P.LINES):N.isLineLoop?Wt.setMode(P.LINE_LOOP):Wt.setMode(P.LINE_STRIP)}else N.isPoints?Wt.setMode(P.POINTS):N.isSprite&&Wt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Wt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const vt=N._multiDrawStarts,ge=N._multiDrawCounts,qt=N._multiDrawCount,Oe=pt?k.get(pt).bytesPerElement:1,Kn=At.get(O).currentProgram.getUniforms();for(let Re=0;Re<qt;Re++)Kn.setValue(P,"_gl_DrawID",Re),Wt.render(vt[Re]/Oe,ge[Re])}else if(N.isInstancedMesh)Wt.renderInstances(Vt,ee,N.count);else if(F.isInstancedBufferGeometry){const vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ge=Math.min(F.instanceCount,vt);Wt.renderInstances(Vt,ee,ge)}else Wt.render(Vt,ee)};function me(b,I,F){b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=Te,b.needsUpdate=!0,Xi(b,I,F),b.side=hn,b.needsUpdate=!0,Xi(b,I,F),b.side=Ve):Xi(b,I,F)}this.compile=function(b,I,F=null){F===null&&(F=b),p=ht.get(F),p.init(I),y.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==F&&b.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const O=new Set;return b.traverse(function(N){const nt=N.material;if(nt)if(Array.isArray(nt))for(let rt=0;rt<nt.length;rt++){const ft=nt[rt];me(ft,F,N),O.add(ft)}else me(nt,F,N),O.add(nt)}),y.pop(),p=null,O},this.compileAsync=function(b,I,F=null){const O=this.compile(b,I,F);return new Promise(N=>{function nt(){if(O.forEach(function(rt){At.get(rt).currentProgram.isReady()&&O.delete(rt)}),O.size===0){N(b);return}setTimeout(nt,10)}Yt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Gt=null;function Je(b){Gt&&Gt(b)}function Ye(){An.stop()}function wr(){An.start()}const An=new dl;An.setAnimationLoop(Je),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(b){Gt=b,et.setAnimationLoop(b),b===null?An.stop():An.start()},et.addEventListener("sessionstart",Ye),et.addEventListener("sessionend",wr),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,C),p=ht.get(b,y.length),p.init(I),y.push(p),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$t.setFromProjectionMatrix(mt),Q=this.localClippingEnabled,V=Lt.init(this.clippingPlanes,Q),_=at.get(b,m.length),_.init(),m.push(_),et.enabled===!0&&et.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Vs(nt,I,-1/0,v.sortObjects)}Vs(b,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,ot),Bt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Bt&&lt.addToRenderList(_,b),this.info.render.frame++,V===!0&&Lt.beginShadows();const F=p.state.shadowsArray;tt.render(F,b,I),V===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,N=_.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(N.length>0)for(let rt=0,ft=nt.length;rt<ft;rt++){const pt=nt[rt];Ar(O,N,b,pt)}Bt&&lt.render(b);for(let rt=0,ft=nt.length;rt<ft;rt++){const pt=nt[rt];Tr(_,b,pt,pt.viewport)}}else N.length>0&&Ar(O,N,b,I),Bt&&lt.render(b),Tr(_,b,I);C!==null&&(Rt.updateMultisampleRenderTarget(C),Rt.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,I),Ft.resetDefaultState(),B=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],V===!0&&Lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Vs(b,I,F,O){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$t.intersectsSprite(b)){O&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(mt);const rt=J.update(b),ft=b.material;ft.visible&&_.push(b,rt,ft,F,Et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$t.intersectsObject(b))){const rt=J.update(b),ft=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Et.copy(rt.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(mt)),Array.isArray(ft)){const pt=rt.groups;for(let bt=0,wt=pt.length;bt<wt;bt++){const _t=pt[bt],Vt=ft[_t.materialIndex];Vt&&Vt.visible&&_.push(b,rt,Vt,F,Et.z,_t)}}else ft.visible&&_.push(b,rt,ft,F,Et.z,null)}}const nt=b.children;for(let rt=0,ft=nt.length;rt<ft;rt++)Vs(nt[rt],I,F,O)}function Tr(b,I,F,O){const N=b.opaque,nt=b.transmissive,rt=b.transparent;p.setupLightsView(F),V===!0&&Lt.setGlobalState(v.clippingPlanes,F),O&&yt.viewport(E.copy(O)),N.length>0&&qi(N,I,F),nt.length>0&&qi(nt,I,F),rt.length>0&&qi(rt,I,F),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Ar(b,I,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new Vn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?zi:un,minFilter:Hn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[O.id],rt=O.viewport||E;nt.setSize(rt.z,rt.w);const ft=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(z),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&lt.render(F);const pt=v.toneMapping;v.toneMapping=En;const bt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),V===!0&&Lt.setGlobalState(v.clippingPlanes,O),qi(b,F,O),Rt.updateMultisampleRenderTarget(nt),Rt.updateRenderTargetMipmap(nt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let _t=0,Vt=I.length;_t<Vt;_t++){const te=I[_t],ee=te.object,Pe=te.geometry,Wt=te.material,vt=te.group;if(Wt.side===Ve&&ee.layers.test(O.layers)){const ge=Wt.side;Wt.side=Te,Wt.needsUpdate=!0,Cr(ee,F,O,Pe,Wt,vt),Wt.side=ge,Wt.needsUpdate=!0,wt=!0}}wt===!0&&(Rt.updateMultisampleRenderTarget(nt),Rt.updateRenderTargetMipmap(nt))}v.setRenderTarget(ft),v.setClearColor(z,X),bt!==void 0&&(O.viewport=bt),v.toneMapping=pt}function qi(b,I,F){const O=I.isScene===!0?I.overrideMaterial:null;for(let N=0,nt=b.length;N<nt;N++){const rt=b[N],ft=rt.object,pt=rt.geometry,bt=O===null?rt.material:O,wt=rt.group;ft.layers.test(F.layers)&&Cr(ft,I,F,pt,bt,wt)}}function Cr(b,I,F,O,N,nt){b.onBeforeRender(v,I,F,O,N,nt),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,I,F,O,b,nt),N.transparent===!0&&N.side===Ve&&N.forceSinglePass===!1?(N.side=Te,N.needsUpdate=!0,v.renderBufferDirect(F,I,O,N,b,nt),N.side=hn,N.needsUpdate=!0,v.renderBufferDirect(F,I,O,N,b,nt),N.side=Ve):v.renderBufferDirect(F,I,O,N,b,nt),b.onAfterRender(v,I,F,O,N,nt)}function Xi(b,I,F){I.isScene!==!0&&(I=Pt);const O=At.get(b),N=p.state.lights,nt=p.state.shadowsArray,rt=N.state.version,ft=j.getParameters(b,N.state,nt,I,F),pt=j.getProgramCacheKey(ft);let bt=O.programs;O.environment=b.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(b.isMeshStandardMaterial?M:T).get(b.envMap||O.environment),O.envMapRotation=O.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,bt===void 0&&(b.addEventListener("dispose",Mt),bt=new Map,O.programs=bt);let wt=bt.get(pt);if(wt!==void 0){if(O.currentProgram===wt&&O.lightsStateVersion===rt)return Rr(b,ft),wt}else ft.uniforms=j.getUniforms(b),b.onBeforeCompile(ft,v),wt=j.acquireProgram(ft,pt),bt.set(pt,wt),O.uniforms=ft.uniforms;const _t=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(_t.clippingPlanes=Lt.uniform),Rr(b,ft),O.needsLights=El(b),O.lightsStateVersion=rt,O.needsLights&&(_t.ambientLightColor.value=N.state.ambient,_t.lightProbe.value=N.state.probe,_t.directionalLights.value=N.state.directional,_t.directionalLightShadows.value=N.state.directionalShadow,_t.spotLights.value=N.state.spot,_t.spotLightShadows.value=N.state.spotShadow,_t.rectAreaLights.value=N.state.rectArea,_t.ltc_1.value=N.state.rectAreaLTC1,_t.ltc_2.value=N.state.rectAreaLTC2,_t.pointLights.value=N.state.point,_t.pointLightShadows.value=N.state.pointShadow,_t.hemisphereLights.value=N.state.hemi,_t.directionalShadowMap.value=N.state.directionalShadowMap,_t.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_t.spotShadowMap.value=N.state.spotShadowMap,_t.spotLightMatrix.value=N.state.spotLightMatrix,_t.spotLightMap.value=N.state.spotLightMap,_t.pointShadowMap.value=N.state.pointShadowMap,_t.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=wt,O.uniformsList=null,wt}function Pr(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Rr(b,I){const F=At.get(b);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Ml(b,I,F,O,N){I.isScene!==!0&&(I=Pt),Rt.resetTextureUnits();const nt=I.fog,rt=O.isMeshStandardMaterial?I.environment:null,ft=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Tn,pt=(O.isMeshStandardMaterial?M:T).get(O.envMap||rt),bt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,wt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),_t=!!F.morphAttributes.position,Vt=!!F.morphAttributes.normal,te=!!F.morphAttributes.color;let ee=En;O.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ee=v.toneMapping);const Pe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Wt=Pe!==void 0?Pe.length:0,vt=At.get(O),ge=p.state.lights;if(V===!0&&(Q===!0||b!==w)){const Ne=b===w&&O.id===B;Lt.setState(O,b,Ne)}let qt=!1;O.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==ge.state.version||vt.outputColorSpace!==ft||N.isBatchedMesh&&vt.batching===!1||!N.isBatchedMesh&&vt.batching===!0||N.isBatchedMesh&&vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&vt.instancing===!1||!N.isInstancedMesh&&vt.instancing===!0||N.isSkinnedMesh&&vt.skinning===!1||!N.isSkinnedMesh&&vt.skinning===!0||N.isInstancedMesh&&vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&vt.instancingMorph===!1&&N.morphTexture!==null||vt.envMap!==pt||O.fog===!0&&vt.fog!==nt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Lt.numPlanes||vt.numIntersection!==Lt.numIntersection)||vt.vertexAlphas!==bt||vt.vertexTangents!==wt||vt.morphTargets!==_t||vt.morphNormals!==Vt||vt.morphColors!==te||vt.toneMapping!==ee||vt.morphTargetsCount!==Wt)&&(qt=!0):(qt=!0,vt.__version=O.version);let Oe=vt.currentProgram;qt===!0&&(Oe=Xi(O,I,N));let Kn=!1,Re=!1,Ws=!1;const ae=Oe.getUniforms(),fn=vt.uniforms;if(yt.useProgram(Oe.program)&&(Kn=!0,Re=!0,Ws=!0),O.id!==B&&(B=O.id,Re=!0),Kn||w!==b){ae.setValue(P,"projectionMatrix",b.projectionMatrix),ae.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ne=ae.map.cameraPosition;Ne!==void 0&&Ne.setValue(P,ct.setFromMatrixPosition(b.matrixWorld)),Kt.logarithmicDepthBuffer&&ae.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ae.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Re=!0,Ws=!0)}if(N.isSkinnedMesh){ae.setOptional(P,N,"bindMatrix"),ae.setOptional(P,N,"bindMatrixInverse");const Ne=N.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),ae.setValue(P,"boneTexture",Ne.boneTexture,Rt))}N.isBatchedMesh&&(ae.setOptional(P,N,"batchingTexture"),ae.setValue(P,"batchingTexture",N._matricesTexture,Rt),ae.setOptional(P,N,"batchingIdTexture"),ae.setValue(P,"batchingIdTexture",N._indirectTexture,Rt),ae.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(P,"batchingColorTexture",N._colorsTexture,Rt));const qs=F.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&kt.update(N,F,Oe),(Re||vt.receiveShadow!==N.receiveShadow)&&(vt.receiveShadow=N.receiveShadow,ae.setValue(P,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(fn.envMap.value=pt,fn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&I.environment!==null&&(fn.envMapIntensity.value=I.environmentIntensity),Re&&(ae.setValue(P,"toneMappingExposure",v.toneMappingExposure),vt.needsLights&&bl(fn,Ws),nt&&O.fog===!0&&St.refreshFogUniforms(fn,nt),St.refreshMaterialUniforms(fn,O,Z,W,p.state.transmissionRenderTarget[b.id]),Ts.upload(P,Pr(vt),fn,Rt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ts.upload(P,Pr(vt),fn,Rt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ae.setValue(P,"center",N.center),ae.setValue(P,"modelViewMatrix",N.modelViewMatrix),ae.setValue(P,"normalMatrix",N.normalMatrix),ae.setValue(P,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ne=O.uniformsGroups;for(let Xs=0,wl=Ne.length;Xs<wl;Xs++){const Dr=Ne[Xs];Jt.update(Dr,Oe),Jt.bind(Dr,Oe)}}return Oe}function bl(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function El(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,I,F){At.get(b.texture).__webglTexture=I,At.get(b.depthTexture).__webglTexture=F;const O=At.get(b);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const F=At.get(b);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,F=0){C=b,R=I,A=F;let O=!0,N=null,nt=!1,rt=!1;if(b){const pt=At.get(b);if(pt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(P.FRAMEBUFFER,null),O=!1;else if(pt.__webglFramebuffer===void 0)Rt.setupRenderTarget(b);else if(pt.__hasExternalTextures)Rt.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const _t=b.depthTexture;if(pt.__boundDepthTexture!==_t){if(_t!==null&&At.has(_t)&&(b.width!==_t.image.width||b.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Rt.setupDepthRenderbuffer(b)}}const bt=b.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(rt=!0);const wt=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?N=wt[I][F]:N=wt[I],nt=!0):b.samples>0&&Rt.useMultisampledRTT(b)===!1?N=At.get(b).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[F]:N=wt,E.copy(b.viewport),D.copy(b.scissor),H=b.scissorTest}else E.copy(ut).multiplyScalar(Z).floor(),D.copy(gt).multiplyScalar(Z).floor(),H=Ot;if(yt.bindFramebuffer(P.FRAMEBUFFER,N)&&O&&yt.drawBuffers(b,N),yt.viewport(E),yt.scissor(D),yt.setScissorTest(H),nt){const pt=At.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,F)}else if(rt){const pt=At.get(b.texture),bt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,pt.__webglTexture,F||0,bt)}B=-1},this.readRenderTargetPixels=function(b,I,F,O,N,nt,rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&rt!==void 0&&(ft=ft[rt]),ft){yt.bindFramebuffer(P.FRAMEBUFFER,ft);try{const pt=b.texture,bt=pt.format,wt=pt.type;if(!Kt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-O&&F>=0&&F<=b.height-N&&P.readPixels(I,F,O,N,Ct.convert(bt),Ct.convert(wt),nt)}finally{const pt=C!==null?At.get(C).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(b,I,F,O,N,nt,rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&rt!==void 0&&(ft=ft[rt]),ft){yt.bindFramebuffer(P.FRAMEBUFFER,ft);try{const pt=b.texture,bt=pt.format,wt=pt.type;if(!Kt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-O&&F>=0&&F<=b.height-N){const _t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,_t),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(I,F,O,N,Ct.convert(bt),Ct.convert(wt),0),P.flush();const Vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Rc(P,Vt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,_t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt)}finally{P.deleteBuffer(_t),P.deleteSync(Vt)}return nt}}finally{const pt=C!==null?At.get(C).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(b,I=null,F=0){b.isTexture!==!0&&(Bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const O=Math.pow(2,-F),N=Math.floor(b.image.width*O),nt=Math.floor(b.image.height*O),rt=I!==null?I.x:0,ft=I!==null?I.y:0;Rt.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,rt,ft,N,nt),yt.unbindTexture()},this.copyTextureToTexture=function(b,I,F=null,O=null,N=0){b.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1],I=arguments[2],N=arguments[3]||0,F=null);let nt,rt,ft,pt,bt,wt;F!==null?(nt=F.max.x-F.min.x,rt=F.max.y-F.min.y,ft=F.min.x,pt=F.min.y):(nt=b.image.width,rt=b.image.height,ft=0,pt=0),O!==null?(bt=O.x,wt=O.y):(bt=0,wt=0);const _t=Ct.convert(I.format),Vt=Ct.convert(I.type);Rt.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const te=P.getParameter(P.UNPACK_ROW_LENGTH),ee=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Pe=P.getParameter(P.UNPACK_SKIP_PIXELS),Wt=P.getParameter(P.UNPACK_SKIP_ROWS),vt=P.getParameter(P.UNPACK_SKIP_IMAGES),ge=b.isCompressedTexture?b.mipmaps[N]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,pt),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,bt,wt,nt,rt,_t,Vt,ge.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,bt,wt,ge.width,ge.height,_t,ge.data):P.texSubImage2D(P.TEXTURE_2D,N,bt,wt,nt,rt,_t,Vt,ge),P.pixelStorei(P.UNPACK_ROW_LENGTH,te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vt),N===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(b,I,F=null,O=null,N=0){b.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,b=arguments[2],I=arguments[3],N=arguments[4]||0);let nt,rt,ft,pt,bt,wt,_t,Vt,te;const ee=b.isCompressedTexture?b.mipmaps[N]:b.image;F!==null?(nt=F.max.x-F.min.x,rt=F.max.y-F.min.y,ft=F.max.z-F.min.z,pt=F.min.x,bt=F.min.y,wt=F.min.z):(nt=ee.width,rt=ee.height,ft=ee.depth,pt=0,bt=0,wt=0),O!==null?(_t=O.x,Vt=O.y,te=O.z):(_t=0,Vt=0,te=0);const Pe=Ct.convert(I.format),Wt=Ct.convert(I.type);let vt;if(I.isData3DTexture)Rt.setTexture3D(I,0),vt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Rt.setTexture2DArray(I,0),vt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ge=P.getParameter(P.UNPACK_ROW_LENGTH),qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Oe=P.getParameter(P.UNPACK_SKIP_PIXELS),Kn=P.getParameter(P.UNPACK_SKIP_ROWS),Re=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(vt,N,_t,Vt,te,nt,rt,ft,Pe,Wt,ee.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,N,_t,Vt,te,nt,rt,ft,Pe,ee.data):P.texSubImage3D(vt,N,_t,Vt,te,nt,rt,ft,Pe,Wt,ee),P.pixelStorei(P.UNPACK_ROW_LENGTH,ge),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re),N===0&&I.generateMipmaps&&P.generateMipmap(vt),yt.unbindTexture()},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&Rt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Rt.setTextureCube(b,0):b.isData3DTexture?Rt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Rt.setTexture2DArray(b,0):Rt.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,yt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xr?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===ks?"display-p3":"srgb"}}class Sr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new Sr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gp extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Us extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fs=new U,Bs=new U,Po=new oe,Ni=new vr,gs=new zs,Sa=new U,Ro=new U;class lr extends be{constructor(t=new Me,e=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Fs.fromBufferAttribute(e,i-1),Bs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fs.distanceTo(Bs);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=s,t.ray.intersectsSphere(gs)===!1)return;Po.copy(i).invert(),Ni.copy(t.ray).applyMatrix4(Po);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),y=h.getX(_+1),v=_s(this,t,Ni,l,m,y);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=_s(this,t,Ni,l,_,p);m&&e.push(m)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,p=g-1;_<p;_+=c){const m=_s(this,t,Ni,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=_s(this,t,Ni,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _s(a,t,e,n,i,s){const r=a.geometry.attributes.position;if(Fs.fromBufferAttribute(r,i),Bs.fromBufferAttribute(r,s),e.distanceSqToSegment(Fs,Bs,Sa,Ro)>n)return;Sa.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Sa);if(!(l<t.near||l>t.far))return{distance:l,point:Ro.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,object:a}}const Do=new U,Lo=new U;class Vp extends lr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Do.fromBufferAttribute(e,i),Lo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Do.distanceTo(Lo);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mr extends Me{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const r=[],o=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,y=(i+1)*f+g;r.push(_,p,y),r.push(p,m,y)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wp extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qp extends Wp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Io{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xp extends Vp{constructor(t=10,e=10,n=4473924,i=8947848){n=new Ht(n),i=new Ht(i);const s=e/2,r=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=e;d++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===s?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Me;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));const u=new Us({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yp extends $n{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ur);const No={type:"change"},br={type:"start"},xl={type:"end"},xs=new vr,Uo=new Sn,$p=Math.cos(70*Cc.DEG2RAD),le=new U,we=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class Kp extends Yp{constructor(t,e=null){super(t,e),this.state=jt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Wn,this._lastTargetPosition=new U,this._quat=new Wn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Io,this._sphericalDelta=new Io,this._scale=1,this._panOffset=new U,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new U,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zp.bind(this),this._onPointerDown=jp.bind(this),this._onPointerUp=Jp.bind(this),this._onContextMenu=am.bind(this),this._onMouseWheel=em.bind(this),this._onKeyDown=nm.bind(this),this._onTouchStart=im.bind(this),this._onTouchMove=sm.bind(this),this._onMouseDown=Qp.bind(this),this._onMouseMove=tm.bind(this),this._interceptControlDown=rm.bind(this),this._interceptControlUp=om.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(No),this.update(),this.state=jt.NONE}update(t=null){const e=this.object.position;le.copy(e).sub(this.target),le.applyQuaternion(this._quat),this._spherical.setFromVector3(le),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=we:n>Math.PI&&(n-=we),i<-Math.PI?i+=we:i>Math.PI&&(i-=we),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(le.setFromSpherical(this._spherical),le.applyQuaternion(this._quatInverse),e.copy(this.target).add(le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=le.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(xs.origin.copy(this.object.position),xs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xs.direction))<$p?this.object.lookAt(this.target):(Uo.setFromNormalAndCoplanarPoint(this.object.up,this.target),xs.intersectPlane(Uo,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(No),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?we/60*this.autoRotateSpeed*t:we/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){le.setFromMatrixColumn(e,0),le.multiplyScalar(-t),this._panOffset.add(le)}_panUp(t,e){this.screenSpacePanning===!0?le.setFromMatrixColumn(e,1):(le.setFromMatrixColumn(e,0),le.crossVectors(this.object.up,le)),le.multiplyScalar(t),this._panOffset.add(le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;le.copy(i).sub(this.target);let s=le.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,r=n.width,o=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(we*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-we*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jp(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function Zp(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function Jp(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xl),this.state=jt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Qp(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=jt.DOLLY;break;case _i.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=jt.ROTATE}break;case _i.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(br)}function tm(a){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function em(a){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(a.preventDefault(),this.dispatchEvent(br),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(xl))}function nm(a){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(a)}function im(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=jt.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=jt.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(br)}function sm(a){switch(this._trackPointer(a),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=jt.NONE}}function am(a){this.enabled!==!1&&a.preventDefault()}function rm(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function om(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ce={sub:(a,t)=>({re:a.re-t.re,im:a.im-t.im}),abs:a=>Math.sqrt(a.re*a.re+a.im*a.im),polar:(a,t)=>({re:a*Math.cos(t),im:a*Math.sin(t)})};function Fo(a){const t=a.re.toFixed(2),e=Math.abs(a.im).toFixed(2),n=a.im<0?"-":"+";return`${t}${n}${e}j`}function Bo(a){let t=[{re:1,im:0}];for(const e of a){const n=Array(t.length+1).fill(null).map(()=>({re:0,im:0}));for(let i=0;i<t.length;i++)n[i].re+=t[i].re,n[i].im+=t[i].im,n[i+1].re-=t[i].re*e.re-t[i].im*e.im,n[i+1].im-=t[i].re*e.im+t[i].im*e.re;t=n}return t}function vs(a){const t=Math.max(0,Math.min(1,a));if(t<.2){const n=t/.2;return[Math.round(n*40),0,Math.round(60+n*80)]}if(t<.4){const n=(t-.2)/.2;return[Math.round(40+n*110),Math.round(n*60),Math.round(140-n*40)]}if(t<.62){const n=(t-.4)/.22;return[Math.round(150-n*68),Math.round(60+n*147),Math.round(100+n*154)]}if(t<.82){const n=(t-.62)/.2;return[Math.round(82+n*173),Math.round(207+n*38),Math.round(254-n*200)]}const e=(t-.82)/.18;return[255,Math.round(245+e*10),Math.round(54+e*201)]}class lm{constructor(t){x(this,"container");x(this,"animId",null);x(this,"ui",{transport:xt("transport",!0),upload:xt("upload",!0),modeSelector:xt("modeSelector",!0),waveform:xt("waveform",!0),zPlane:xt("zPlane",!0),surface3d:xt("surface3d",!0),response:xt("response",!0),spectrum:xt("spectrum",!0)});x(this,"poles",[]);x(this,"zeros",[]);x(this,"dragging",null);x(this,"planeCanvas");x(this,"leftPlanePanel");x(this,"planeSize",400);x(this,"planeHeight",240);x(this,"surfaceCanvas");x(this,"responseCanvas");x(this,"spectrumCanvas");x(this,"threeRenderer",null);x(this,"threeScene",null);x(this,"threeCamera",null);x(this,"threeControls",null);x(this,"surfaceMesh",null);x(this,"unitCircleLine",null);x(this,"freqRibbon",null);x(this,"spectrumBars3D",null);x(this,"spectrumBars3DCount",96);x(this,"threeN",64);x(this,"threeRange",1.8);x(this,"useThreeJS",!1);x(this,"rotAngle2D",0);x(this,"sharedAudio",Ze.getInstance());x(this,"audioCtx",null);x(this,"originalBuffer",null);x(this,"sourceNode",null);x(this,"dspNode",null);x(this,"compressorNode",null);x(this,"gainNode",null);x(this,"analyserNode",null);x(this,"filterUpdateTimer",null);x(this,"playbackGain",.85);x(this,"maxNormBoost",12);x(this,"lastNormScale",1);x(this,"lastResponsePeak",1);x(this,"lastResponseRms",1);x(this,"outputMakeupGain",1);x(this,"timeDomainScratch",null);x(this,"isPlaying",!1);x(this,"isPaused",!1);x(this,"loop",!1);x(this,"playMode","filtered");x(this,"playbackStartedAt",0);x(this,"pausedAt",0);x(this,"sampleRate",44100);x(this,"origSpectrumStatic",null);x(this,"analyserData",null);x(this,"transportBar");x(this,"statusEl");x(this,"filterInfoEl");x(this,"waveformTimeline");x(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.loadDefaults(),this.buildUI(),this.tryInitThreeJS(),this.startAnimation(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.loadDefaultAudioClip()}async loadDefaultAudioClip(){var e,n;const t=cn("audio");if(t){this.statusEl.textContent="Loading…";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext());const s=await(await fetch(qn(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(s),this.sampleRate=this.originalBuffer.sampleRate;const r=this.originalBuffer.getChannelData(0),o=4096,l=Math.floor(r.length/2);this.origSpectrumStatic=this.computeFFT(r.slice(l,l+o),o),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0;const c=t.split("/").pop()??t;this.statusEl.textContent=`${c} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="✗ Error loading audio"}}}loadDefaults(){this.zeros=[ce.polar(1,Math.PI/2),ce.polar(1,-Math.PI/2)],this.poles=[ce.polar(.8,Math.PI/2),ce.polar(.8,-Math.PI/2)]}computeMag(t){let e=1,n=1;for(const i of this.zeros)e*=ce.abs(ce.sub(t,i));for(const i of this.poles)n*=ce.abs(ce.sub(t,i));return n<1e-12?1/0:!this.zeros.length&&!this.poles.length?1:e/n}computePhase(t){let e=0;for(const n of this.zeros){const i=ce.sub(t,n);e+=Math.atan2(i.im,i.re)}for(const n of this.poles){const i=ce.sub(t,n);e-=Math.atan2(i.im,i.re)}return e}getCoeffs(){const t=Bo(this.zeros).map(n=>n.re),e=Bo(this.poles).map(n=>n.re);return t.length||t.push(1),e.length||e.push(1),{b:t,a:e}}tryInitThreeJS(){try{const t=this.surfaceCanvas,e=Math.min(window.devicePixelRatio||1,2),n=t.width/e,i=t.height/e;this.threeRenderer=new Hp({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.threeRenderer.setSize(n,i),this.threeRenderer.setPixelRatio(e),this.threeRenderer.setClearColor(263431,1),this.threeScene=new Gp,this.threeScene.fog=new Sr(263431,8,22),this.threeCamera=new Fe(44,n/i,.1,100),this.threeCamera.position.set(2.8,3.2,4.4),this.threeControls=new Kp(this.threeCamera,t),this.threeControls.enableDamping=!0,this.threeControls.dampingFactor=.06,this.threeControls.minDistance=1.2,this.threeControls.maxDistance=16,this.threeControls.maxPolarAngle=Math.PI*.88,this.threeControls.target.set(0,.45,0),this.threeControls.update(),t.addEventListener("wheel",c=>c.preventDefault(),{passive:!1}),t.style.touchAction="none",this.threeScene.add(new qp(16777215,1));const s=new Xp(3.8,20,861504,861504);this.threeScene.add(s);const r=this.threeRange,o=(c,h,u=1)=>new lr(new Me().setFromPoints(c),new Us({color:h,transparent:u<1,opacity:u}));this.threeScene.add(o([new U(-r-.15,0,0),new U(r+.15,0,0)],16737860,.85)),this.threeScene.add(o([new U(0,0,-r-.15),new U(0,0,r+.15)],4513160,.85)),this.threeScene.add(o([new U(0,0,0),new U(0,1.5,0)],16777215,.55));const l=new Ie(new Mr(1,.022,8,128),new pi({color:5427198}));l.rotation.x=Math.PI/2,this.threeScene.add(l),this.createThreeSurface(),this.unitCircleLine=this.createUnitCircleLine(),this.threeScene.add(this.unitCircleLine),this.createFreqRibbon(),this.createSpectrumBars3D(),this.useThreeJS=!0}catch(t){console.warn("Three.js init failed, using Canvas2D fallback:",t),this.useThreeJS=!1}}createThreeSurface(){if(!this.threeScene)return;const t=this.threeN,e=this.threeRange,n=(t+1)*(t+1),i=new Float32Array(n*3),s=new Float32Array(n*3),r=[];for(let c=0;c<=t;c++)for(let h=0;h<=t;h++){const u=c*(t+1)+h;i[u*3]=-e+2*e*c/t,i[u*3+1]=0,i[u*3+2]=-e+2*e*h/t,s[u*3+2]=.15}for(let c=0;c<t;c++)for(let h=0;h<t;h++){const u=c*(t+1)+h,d=u+1,f=(c+1)*(t+1)+h,g=f+1;r.push(u,d,g,u,g,f)}const o=new Me;o.setAttribute("position",new _e(i,3)),o.setAttribute("color",new _e(s,3)),o.setIndex(r);const l=new pi({vertexColors:!0,side:hn,transparent:!0,opacity:.82,depthWrite:!1});this.surfaceMesh=new Ie(o,l),this.threeScene.add(this.surfaceMesh)}createUnitCircleLine(){const e=new Me;return e.setAttribute("position",new _e(new Float32Array(301*3),3)),new lr(e,new Us({color:16777215,linewidth:2}))}createFreqRibbon(){if(!this.threeScene)return;const t=300,e=new Float32Array((t+1)*2*3),n=new Float32Array((t+1)*2*3),i=[];for(let r=0;r<=t;r++){const o=2*Math.PI*r/t,l=Math.cos(o),c=Math.sin(o);if(e[r*2*3]=l,e[r*2*3+2]=c,e[r*2*3+1]=.01,e[(r*2+1)*3]=l,e[(r*2+1)*3+2]=c,e[(r*2+1)*3+1]=.01,r<t){const h=r*2,u=r*2+1,d=(r+1)*2,f=(r+1)*2+1;i.push(h,u,f,h,f,d)}}const s=new Me;s.setAttribute("position",new _e(e,3)),s.setAttribute("color",new _e(n,3)),s.setIndex(i),this.freqRibbon=new Ie(s,new pi({vertexColors:!0,side:Ve,transparent:!0,opacity:.3,depthWrite:!1})),this.threeScene.add(this.freqRibbon),this.updateThreeSurface()}createSpectrumBars3D(){if(!this.threeScene)return;const t=this.spectrumBars3DCount,e=new Float32Array(t*4*3),n=new Float32Array(t*4*3),i=[],s=1.35,r=.038;for(let l=0;l<t;l++){const c=2*Math.PI*l/t,h=Math.cos(c),u=Math.sin(c),d=-Math.sin(c)*r,f=Math.cos(c)*r,g=l*4;e[(g+0)*3]=h*s-d,e[(g+0)*3+1]=.005,e[(g+0)*3+2]=u*s-f,e[(g+1)*3]=h*s+d,e[(g+1)*3+1]=.005,e[(g+1)*3+2]=u*s+f,e[(g+2)*3]=h*s-d,e[(g+2)*3+1]=.005,e[(g+2)*3+2]=u*s-f,e[(g+3)*3]=h*s+d,e[(g+3)*3+1]=.005,e[(g+3)*3+2]=u*s+f,i.push(g,g+1,g+3,g,g+3,g+2)}const o=new Me;o.setAttribute("position",new _e(e,3)),o.setAttribute("color",new _e(n,3)),o.setIndex(i),this.spectrumBars3D=new Ie(o,new pi({vertexColors:!0,side:Ve,transparent:!0,opacity:.85,depthWrite:!1})),this.threeScene.add(this.spectrumBars3D)}updateSpectrumBars3D(){if(!this.spectrumBars3D||!this.analyserNode||!this.analyserData)return;this.analyserNode.getFloatFrequencyData(this.analyserData);const t=this.spectrumBars3DCount,e=1.35,n=.038,i=.9,s=-80,r=80,o=this.analyserData.length,l=this.spectrumBars3D.geometry.attributes.position,c=this.spectrumBars3D.geometry.attributes.color;for(let h=0;h<t;h++){const u=2*Math.PI*h/t,d=Math.cos(u),f=Math.sin(u),g=-Math.sin(u)*n,_=Math.cos(u)*n,p=h/t,m=Math.log10(1+p*9)/Math.log10(10),y=Math.max(1,Math.min(o-1,Math.floor(m*o))),v=this.analyserData[y],S=Math.max(0,Math.min(1,(v-s)/r)),R=S*i,[A,C,B]=vs(S*.85+.1),w=A/255,E=C/255,D=B/255,H=h*4;l.setXYZ(H,d*e-g,.005,f*e-_),c.setXYZ(H,w*.3,E*.3,D*.3),l.setXYZ(H+1,d*e+g,.005,f*e+_),c.setXYZ(H+1,w*.3,E*.3,D*.3),l.setXYZ(H+2,d*e-g,R,f*e-_),c.setXYZ(H+2,w,E,D),l.setXYZ(H+3,d*e+g,R,f*e+_),c.setXYZ(H+3,w,E,D)}l.needsUpdate=!0,c.needsUpdate=!0}updateThreeSurface(){if(!this.surfaceMesh)return;const t=this.threeN,e=this.threeRange,n=3.8,i=.7,s=l=>Math.atan((isFinite(l)?l:100)/2)/(Math.PI/2)*n*i,r=this.surfaceMesh.geometry.attributes.position,o=this.surfaceMesh.geometry.attributes.color;for(let l=0;l<=t;l++)for(let c=0;c<=t;c++){const h=l*(t+1)+c,u=-e+2*e*l/t,d=-e+2*e*c/t,f=s(this.computeMag({re:u,im:d}));r.setY(h,f);const[g,_,p]=vs(f/(n*i));o.setXYZ(h,g/255,_/255,p/255)}if(r.needsUpdate=!0,o.needsUpdate=!0,this.surfaceMesh.geometry.computeVertexNormals(),this.unitCircleLine){const c=this.unitCircleLine.geometry.attributes.position;for(let h=0;h<=300;h++){const u=2*Math.PI*h/300,d=s(this.computeMag({re:Math.cos(u),im:Math.sin(u)}));c.setXYZ(h,Math.cos(u),d+.03,Math.sin(u))}c.needsUpdate=!0}if(this.freqRibbon){const c=this.freqRibbon.geometry.attributes.position,h=this.freqRibbon.geometry.attributes.color;for(let u=0;u<=300;u++){const d=2*Math.PI*u/300,f=Math.cos(d),g=Math.sin(d),_=s(this.computeMag({re:f,im:g})),[p,m,y]=vs(_/(n*i));c.setXYZ(u*2,f,.01,g),h.setXYZ(u*2,p/255,m/255,y/255),c.setXYZ(u*2+1,f,_+.02,g),h.setXYZ(u*2+1,p/255,m/255,y/255)}c.needsUpdate=!0,h.needsUpdate=!0}}buildUI(){var o;if(document.body.style.overflowY="auto",this.ui.transport){if(this.transportBar=new Yn({onPlay:()=>this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:l=>this.handleUpload(l),uploadLabel:"Upload Audio",showUpload:this.ui.upload,onLoopToggle:l=>{this.loop=l,this.sourceNode&&(this.sourceNode.loop=l)}}),this.ui.modeSelector){const l=document.createElement("div");l.style.cssText="display:flex;gap:4px;margin-left:8px;",["original","filtered"].forEach(c=>{const h=document.createElement("button");h.className="transport-mode-btn"+(c===this.playMode?" active":""),h.textContent=c==="original"?"Original":"Filtered",h.style.fontSize="9px",h.addEventListener("click",()=>{this.playMode=c,l.querySelectorAll(".transport-mode-btn").forEach(u=>u.classList.toggle("active",u===h)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(c))}),l.appendChild(h)}),this.transportBar.getElement().querySelector(".transport-left").appendChild(l)}this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.textContent="Upload audio to audition filter",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusEl),this.filterInfoEl=document.createElement("span"),this.filterInfoEl.style.cssText="font-size:9px;font-family:'JetBrains Mono',monospace;color:#52cffe;white-space:nowrap;margin-left:auto;padding-right:8px;",(o=this.transportBar.getElement().querySelector(".transport-right"))==null||o.prepend(this.filterInfoEl),this.container.appendChild(this.transportBar.getElement())}else this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.style.display="none",this.filterInfoEl=document.createElement("span"),this.filterInfoEl.style.display="none",this.container.append(this.statusEl,this.filterInfoEl);this.ui.waveform&&(this.waveformTimeline=new Xn({width:900,height:64,title:"WAVEFORM"},l=>this.handlePlayheadSeek(l)),this.waveformTimeline.getElement().style.marginBottom="6px",this.container.appendChild(this.waveformTimeline.getElement()));const t=document.createElement("div");t.style.cssText="display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap;";const e=this.makePanel("Z-PLANE");e.style.flexShrink="0",this.ui.zPlane||(e.style.display="none"),this.leftPlanePanel=e,this.planeCanvas=this.makeCanvas2D(e,400,240),this.setupPlaneInteraction(),t.appendChild(e);const n=this.makePanel("|H(z)| 3D");n.style.flex="1",n.style.minWidth="300px",this.ui.surface3d||(n.style.display="none"),this.surfaceCanvas=this.makeCanvasWebGL(n,480,240),t.appendChild(n),(this.ui.zPlane||this.ui.surface3d)&&this.container.appendChild(t);const i=this.makePanel("SPECTRUM (dB) · gray=orig · cyan=live · gold=|H(ω)|");this.spectrumCanvas=this.makeCanvas2D(i,900,160),i.style.marginBottom="6px",this.ui.spectrum?this.container.appendChild(i):(i.style.display="none",this.container.appendChild(i));const s=this.makePanel("PHASE RESPONSE");this.responseCanvas=this.makeCanvas2D(s,900,150),this.ui.response?this.container.appendChild(s):(s.style.display="none",this.container.appendChild(s));const r=this.computeNormalizationScale();this.lastNormScale=r.scale,this.lastResponsePeak=r.peakMag,this.lastResponseRms=r.rmsMag,this.updateFilterInfo()}makePanel(t){const e=document.createElement("div");e.style.cssText="background:#080b10;border:1px solid #1e2530;border-radius:6px;overflow:hidden;position:relative;";const n=document.createElement("div");return n.style.cssText="position:absolute;top:4px;left:8px;font-size:7px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,0.35);text-transform:uppercase;z-index:2;pointer-events:none;",n.textContent=t,e.appendChild(n),e}makeCanvas2D(t,e,n){const i=window.devicePixelRatio||1,s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=e+"px",s.style.height=n+"px",s.style.display="block",s.getContext("2d").scale(i,i),t.appendChild(s),s}makeCanvasWebGL(t,e,n){const i=Math.min(window.devicePixelRatio||1,2),s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=e+"px",s.style.height=n+"px",s.style.display="block",s.style.cursor="grab",t.appendChild(s),s}resizeCanvas2D(t,e,n){const i=window.devicePixelRatio||1,s=Math.max(120,Math.floor(e)),r=Math.max(80,Math.floor(n));t.width=s*i,t.height=r*i,t.style.width=`${s}px`,t.style.height=`${r}px`;const o=t.getContext("2d");o.setTransform(1,0,0,1,0,0),o.scale(i,i)}resizeCanvasWebGL(t,e,n){const i=Math.min(window.devicePixelRatio||1,2),s=Math.max(120,Math.floor(e)),r=Math.max(80,Math.floor(n));t.width=s*i,t.height=r*i,t.style.width=`${s}px`,t.style.height=`${r}px`}resizeLayout(){var o;const t=Math.max(640,this.container.clientWidth-2),e=Math.max(260,Math.floor(t*.42)),n=Math.max(300,t-e-6),i=Math.max(200,Math.floor(e*.58)),s=160,r=150;if(this.leftPlanePanel.style.width=`${e}px`,this.planeSize=e,this.planeHeight=i,this.resizeCanvas2D(this.planeCanvas,e,i),this.resizeCanvasWebGL(this.surfaceCanvas,n,i),this.resizeCanvas2D(this.responseCanvas,t,r),this.resizeCanvas2D(this.spectrumCanvas,t,s),(o=this.waveformTimeline)==null||o.resize(t,64),this.threeRenderer&&this.threeCamera){const l=Math.min(window.devicePixelRatio||1,2),c=this.surfaceCanvas.width/l,h=this.surfaceCanvas.height/l;this.threeRenderer.setSize(c,h,!1),this.threeRenderer.setPixelRatio(l),this.threeCamera.aspect=c/h,this.threeCamera.updateProjectionMatrix()}}setupPlaneInteraction(){const t=this.planeCanvas,e=(l,c)=>Math.max(40,Math.min(l,c)/2-24),n=l=>{const c=t.getBoundingClientRect(),h=c.width>0?(l.clientX-c.left)/c.width:.5,u=c.height>0?(l.clientY-c.top)/c.height:.5,d=this.planeSize,f=this.planeHeight,g=h*d,_=u*f,p=e(d,f);return{re:(g-d/2)/p,im:-(_-f/2)/p}},i=(l,c,h=.13)=>{let u=-1,d=h;return c.forEach((f,g)=>{const _=ce.abs(ce.sub(f,l));_<d&&(d=_,u=g)}),u},s=(l,c)=>{const h=l[c];return l.filter((u,d)=>d!==c&&!(Math.abs(u.re-h.re)<.02&&Math.abs(Math.abs(u.im)-Math.abs(h.im))<.02))};t.oncontextmenu=l=>l.preventDefault(),t.onmousedown=l=>{l.preventDefault();const c=n(l),h=i(c,this.poles),u=i(c,this.zeros);if(h>=0){const d=this.poles[h],f=this.poles.findIndex((g,_)=>_!==h&&Math.abs(g.re-d.re)<.03&&Math.abs(g.im+d.im)<.03);this.dragging={type:"pole",idx:h,conjIdx:f,origIm:d.im};return}if(u>=0){const d=this.zeros[u],f=this.zeros.findIndex((g,_)=>_!==u&&Math.abs(g.re-d.re)<.03&&Math.abs(g.im+d.im)<.03);this.dragging={type:"zero",idx:u,conjIdx:f,origIm:d.im};return}l.button===2?(this.poles.push({re:c.re,im:c.im}),Math.abs(c.im)>.04&&this.poles.push({re:c.re,im:-c.im})):(this.zeros.push({re:c.re,im:c.im}),Math.abs(c.im)>.04&&this.zeros.push({re:c.re,im:-c.im})),this.onFilterChanged(!1)},t.ondblclick=l=>{const c=n(l),h=.16,u=this.poles.findIndex(f=>ce.abs(ce.sub(f,c))<h);if(u>=0){this.poles=s(this.poles,u),this.onFilterChanged(!1);return}const d=this.zeros.findIndex(f=>ce.abs(ce.sub(f,c))<h);d>=0&&(this.zeros=s(this.zeros,d),this.onFilterChanged(!1))};const r=.06,o=l=>{const c=ce.abs(l);return c>1e-6&&Math.abs(c-1)<r?{re:l.re/c,im:l.im/c}:l};t.onmousemove=l=>{if(!this.dragging)return;const c=n(l),{type:h,idx:u,conjIdx:d}=this.dragging,f=h==="pole"?this.poles:this.zeros;if(d>=0&&d<f.length){const _=o({re:c.re,im:c.im});f[u]=_,f[d]={re:_.re,im:-_.im}}else f[u]=o({re:c.re,im:c.im});this.onFilterChanged(!0)},t.onmouseup=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null},t.onmouseleave=()=>{this.dragging&&this.flushLiveFilterUpdate(),this.dragging=null}}onFilterChanged(t=!1){this.useThreeJS&&this.updateThreeSurface(),this.updateFilterInfo(),t&&this.isPlaying?this.scheduleLiveFilterUpdate():this.flushLiveFilterUpdate()}scheduleLiveFilterUpdate(){if(!this.dspNode){this.updateLiveFilter();return}this.filterUpdateTimer&&clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=setTimeout(()=>{this.filterUpdateTimer=null,this.updateLiveFilter()},150)}flushLiveFilterUpdate(){this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.updateLiveFilter()}updateFilterInfo(){const t=this.poles.every(i=>ce.abs(i)<1),e=this.computeMag({re:1,im:0}),n=Math.max(this.poles.length,this.zeros.length);this.filterInfoEl.textContent=`P${this.poles.length} Z${this.zeros.length} ord${n} · ${t?"stable":"UNSTABLE"} · DC ${isFinite(e)?e.toFixed(2):"∞"}`,this.filterInfoEl.style.color=t?"#52cffe":"#ff5555"}measureFilterResponse(){const t=new Set,e=768;for(let l=0;l<e;l++)t.add(Math.PI*l/(e-1));for(const l of[...this.poles,...this.zeros]){if(Math.abs(l.im)<1e-7){t.add(0),t.add(Math.PI);continue}let c=Math.atan2(l.im,l.re);c<0&&(c+=2*Math.PI),c>Math.PI&&(c=2*Math.PI-c),t.add(c);for(const h of[-.03,-.01,.01,.03])t.add(Math.max(0,Math.min(Math.PI,c+h)))}let n=1e-9,i=0,s=0;for(const l of t){const c=this.computeMag({re:Math.cos(l),im:Math.sin(l)});!isFinite(c)||c<=0||(n=Math.max(n,c),i+=c*c,s++)}const r=s>0?Math.sqrt(i/s):1e-9,o=Math.max(n,r,1e-9);return{peakScale:Math.min(this.maxNormBoost,1/o),peakMag:n,rmsMag:r}}computeNormalizationScale(){const{peakScale:t,peakMag:e,rmsMag:n}=this.measureFilterResponse();let i=1;const s=this.origSpectrumStatic;if(s&&s.length>=8){const r=s.length;let o=0,l=0;for(let c=0;c<r;c++){const h=r>1?Math.PI*c/(r-1):0,u=this.computeMag({re:Math.cos(h),im:Math.sin(h)});if(!isFinite(u)||u<=0)continue;const d=u*t,f=s[c]*s[c];o+=f,l+=f*d*d}l>1e-20&&o>1e-20?i=Math.sqrt(o/l):o>1e-20&&(i=this.maxNormBoost),i=Math.min(this.maxNormBoost,Math.max(1,i))}return{scale:Math.min(this.maxNormBoost*1.5,t*i),peakMag:e,rmsMag:n}}updateOutputMakeup(){if(!this.isPlaying||this.playMode!=="filtered"||!this.analyserNode||!this.gainNode||!this.timeDomainScratch||!this.audioCtx)return;this.analyserNode.getFloatTimeDomainData(this.timeDomainScratch);let t=0;for(let n=0;n<this.timeDomainScratch.length;n++){const i=this.timeDomainScratch[n];t+=i*i}const e=Math.sqrt(t/this.timeDomainScratch.length);if(e<.05){const n=Math.min(16,.14/Math.max(e,1e-5));this.outputMakeupGain=this.outputMakeupGain*.88+n*.01}else this.outputMakeupGain=this.outputMakeupGain*.94+1*.06;this.outputMakeupGain=Math.min(16,Math.max(.5,this.outputMakeupGain)),this.gainNode.gain.setTargetAtTime(this.playbackGain*this.outputMakeupGain,this.audioCtx.currentTime,.15)}updateLiveFilter(){var r;const{b:t,a:e}=this.getCoeffs(),{scale:n,peakMag:i,rmsMag:s}=this.computeNormalizationScale();this.lastNormScale=n,this.lastResponsePeak=i,this.lastResponseRms=s,(r=this.dspNode)==null||r.port.postMessage({type:"setIIR",b:t.map(o=>o*n),a:e})}async handleUpload(t){var e,n;this.statusEl.textContent="Decoding…";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate;const i=this.originalBuffer.getChannelData(0),s=4096,r=Math.floor(i.length/2);this.origSpectrumStatic=this.computeFFT(i.slice(r,r+s),s),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),(n=this.waveformTimeline)==null||n.setPlayhead(0),this.pausedAt=0,this.statusEl.textContent=`${t.name} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="✗ Error loading audio"}}computeFFT(t,e){const n=new Float64Array(e),i=new Float64Array(e);for(let l=0;l<e&&l<t.length;l++){const c=.5*(1-Math.cos(2*Math.PI*l/(e-1)));n[l]=t[l]*c}const s=e;let r=0;for(let l=1;l<s;l++){let c=s>>1;for(;r&c;c>>=1)r^=c;r^=c,l<r&&([n[l],n[r]]=[n[r],n[l]],[i[l],i[r]]=[i[r],i[l]])}for(let l=2;l<=s;l<<=1){const c=Math.cos(-2*Math.PI/l),h=Math.sin(-2*Math.PI/l);for(let u=0;u<s;u+=l){let d=1,f=0;for(let g=0;g<l/2;g++){const _=n[u+g],p=i[u+g],m=n[u+g+l/2]*d-i[u+g+l/2]*f,y=n[u+g+l/2]*f+i[u+g+l/2]*d;n[u+g]=_+m,i[u+g]=p+y,n[u+g+l/2]=_-m,i[u+g+l/2]=p-y;const v=d*c-f*h;f=d*h+f*c,d=v}}}const o=new Float32Array(e/2);for(let l=0;l<e/2;l++)o[l]=Math.sqrt(n[l]*n[l]+i[l]*i[l])/e;return o}async startPlayback(t){var e;if(this.stopAudio(!1),!this.originalBuffer){this.statusEl.textContent="Upload audio first";return}this.audioCtx&&(this.playMode=t,this.updateLiveFilter(),this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserNode.smoothingTimeConstant=.72,this.analyserData=new Float32Array(this.analyserNode.frequencyBinCount),this.timeDomainScratch=new Float32Array(this.analyserNode.fftSize),this.outputMakeupGain=1,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=t==="original"?.85:1,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=this.loop,t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[Math.min(this.originalBuffer.numberOfChannels,2)]}),this.dspNode.port.postMessage({type:"setMode",mode:"iir"}),this.compressorNode=this.audioCtx.createDynamicsCompressor(),this.compressorNode.threshold.value=-3,this.compressorNode.knee.value=6,this.compressorNode.ratio.value=2,this.compressorNode.attack.value=.003,this.compressorNode.release.value=.08,this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.compressorNode),this.compressorNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.gain.value=this.playbackGain,this.gainNode.connect(this.audioCtx.destination),this.updateLiveFilter()),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.originalBuffer||!this.audioCtx||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.originalBuffer.duration-.03&&this.stopAudio(!0)},this.isPlaying=!0,this.isPaused=!1,(e=this.transportBar)==null||e.setPlaying(!0),this.statusEl.textContent=t==="filtered"?"Playing filtered":"Playing original")}pauseAudio(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.audioCtx.currentTime-this.playbackStartedAt,this._teardownNodes(),this.isPlaying=!1,this.isPaused=!0,(t=this.transportBar)==null||t.setPlaying(!1),this.statusEl.textContent="Paused",(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t=!1){var e,n;this._teardownNodes(),this.filterUpdateTimer&&(clearTimeout(this.filterUpdateTimer),this.filterUpdateTimer=null),this.isPlaying=!1,this.isPaused=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt),this.originalBuffer&&(this.statusEl.textContent="Stopped")}_teardownNodes(){var t,e,n,i,s,r;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.dspNode)==null||n.disconnect(),(i=this.compressorNode)==null||i.disconnect(),(s=this.gainNode)==null||s.disconnect(),(r=this.analyserNode)==null||r.disconnect(),this.sourceNode=null,this.dspNode=null,this.compressorNode=null,this.gainNode=null,this.analyserNode=null,this.timeDomainScratch=null,this.outputMakeupGain=1}handlePlayheadSeek(t){var e;!this.originalBuffer||!this.audioCtx||(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}drawPointLabel(t,e,n,i,s,r,o,l){const h=t.measureText(i).width+4,u=11,d=9,f=6,g=2,_=e+d,p=e-d-h;let m=_+h>r-g&&p>=g?p:_;m=Math.max(g,Math.min(m,r-h-g));const y=n+f,v=n-f-u;let S;l?S=y+u>o-g&&v>=g?v:y:S=v<g&&y+u<=o-g?y:v,S=Math.max(g,Math.min(S,o-u-g)),t.textAlign="left",t.fillStyle="rgba(0,0,0,0.55)",t.fillRect(m,S,h,u),t.fillStyle=s,t.fillText(i,m+2,S+9)}drawZPlane(){const e=this.planeCanvas.getContext("2d"),n=this.planeSize,i=this.planeHeight,s=n/2,r=i/2,o=Math.max(40,Math.min(n,i)/2-24);e.fillStyle="#06070b",e.fillRect(0,0,n,i),e.strokeStyle="rgba(255,255,255,0.03)",e.lineWidth=1;for(let c=-1.5;c<=1.5;c+=.5)e.beginPath(),e.moveTo(s+c*o,0),e.lineTo(s+c*o,i),e.stroke(),e.beginPath(),e.moveTo(0,r-c*o),e.lineTo(n,r-c*o),e.stroke();e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1,e.beginPath(),e.moveTo(0,r),e.lineTo(n,r),e.stroke(),e.beginPath(),e.moveTo(s,0),e.lineTo(s,i),e.stroke(),e.beginPath(),e.arc(s,r,o,0,2*Math.PI),e.fillStyle="rgba(82,207,254,0.03)",e.fill();for(let c=0;c<2;c++)e.beginPath(),e.arc(s,r,o,0,2*Math.PI),e.strokeStyle=c===0?"rgba(82,207,254,0.08)":"rgba(82,207,254,0.55)",e.lineWidth=c===0?10:1.5,e.stroke();e.font="8.5px JetBrains Mono",e.fillStyle="rgba(255,255,255,0.16)",e.textAlign="center",e.fillText("DC",s+o+20,r+4),e.fillText("π",s-o-15,r+4),e.fillText("π/2",s+3,r-o-8),e.textAlign="left",e.fillText("Re",n-14,r-4),e.textAlign="right",e.fillText("Im",s-4,10),e.font="700 9px 'JetBrains Mono', monospace",this.zeros.forEach(c=>{const h=s+c.re*o,u=r-c.im*o;e.beginPath(),e.arc(h,u,7.5,0,2*Math.PI),e.strokeStyle="#52cffe",e.lineWidth=2.5,e.shadowColor="rgba(82,207,254,0.7)",e.shadowBlur=10,e.stroke(),e.shadowBlur=0,this.drawPointLabel(e,h,u,Fo(c),"#52cffe",n,i,!1)}),this.poles.forEach(c=>{const h=s+c.re*o,u=r-c.im*o;ce.abs(c)>=1&&(e.beginPath(),e.arc(h,u,14,0,2*Math.PI),e.strokeStyle="rgba(255,85,85,0.4)",e.lineWidth=2,e.stroke());const d=8;e.strokeStyle="#ff869a",e.lineWidth=2.5,e.shadowColor="rgba(255,134,154,0.7)",e.shadowBlur=10,e.beginPath(),e.moveTo(h-d,u-d),e.lineTo(h+d,u+d),e.moveTo(h+d,u-d),e.lineTo(h-d,u+d),e.stroke(),e.shadowBlur=0,this.drawPointLabel(e,h,u,Fo(c),"#ff869a",n,i,!0)}),e.fillStyle="rgba(0,0,0,0.6)",e.fillRect(0,0,n,22),e.font="8px JetBrains Mono",e.fillStyle="rgba(255,255,255,0.26)",e.textAlign="left",e.fillText(`Poles: ${this.poles.length}  Zeros: ${this.zeros.length}  |  dbl-click to remove`,8,14),e.textAlign="right",e.fillStyle="#52cffe";const l=this.computeMag({re:1,im:0});e.fillText(`DC gain: ${isFinite(l)?l.toFixed(3):"∞"}`,n-8,14)}computeUnwrappedPhase(t){const e=new Float32Array(t),n=new Array(t).fill(!1);let i=this.computePhase({re:1,im:0});e[0]=i;for(let s=1;s<t;s++){const r=Math.PI*s/(t-1);let o=this.computePhase({re:Math.cos(r),im:Math.sin(r)}),l=0;for(;o-i>Math.PI;)o-=2*Math.PI,l++;for(;o-i<-Math.PI;)o+=2*Math.PI,l++;l>1&&(n[s]=!0),e[s]=o,i=o}return{phase:e,breaks:n}}drawResponse(){const t=this.responseCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d");let r=1;for(const v of[...this.poles,...this.zeros]){const S=Math.hypot(v.re,v.im);r=Math.min(r,Math.abs(1-S))}const o=Math.min(4e3,Math.max(800,Math.round(24/Math.max(r,.006)))),l={l:48,r:14,t:22,b:24},c=n-l.l-l.r,h=i-l.t-l.b;s.fillStyle="#04050a",s.fillRect(0,0,n,i);const{phase:u,breaks:d}=this.computeUnwrappedPhase(o);let f=u[0],g=u[0];for(let v=1;v<o;v++)f=Math.min(f,u[v]),g=Math.max(g,u[v]);const p=Math.max(g-f,.25)*.1;f-=p,g+=p;const m=v=>l.t+h-(v-f)/(g-f)*h;s.strokeStyle="rgba(255,255,255,0.04)",s.lineWidth=1;for(let v=0;v<=4;v++){const S=l.t+h-v/4*h;s.beginPath(),s.moveTo(l.l,S),s.lineTo(l.l+c,S),s.stroke();const R=f+v/4*(g-f);s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",s.textAlign="right",s.fillText(`${R.toFixed(2)}`,l.l-4,S+3)}s.beginPath();let y=!1;for(let v=0;v<o;v++){const S=l.l+v/(o-1)*c,R=m(u[v]);!y||d[v]?(s.moveTo(S,R),y=!0):s.lineTo(S,R)}s.strokeStyle="rgba(255,255,255,0.9)",s.lineWidth=2,s.stroke(),s.textAlign="center",s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",["DC (0)","π/4","π/2","3π/4","Nyquist (π)"].forEach((v,S)=>s.fillText(v,l.l+S/4*c,i-6))}drawSpectrum(){const t=this.spectrumCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d"),r={l:44,r:14,t:22,b:18},o=n-r.l-r.r,l=i-r.t-r.b;s.fillStyle="#04050a",s.fillRect(0,0,n,i),!!(this.origSpectrumStatic||this.analyserNode)||(s.fillStyle="rgba(255,255,255,0.07)",s.font="10px JetBrains Mono",s.textAlign="center",s.fillText("Upload audio to see spectrum",n/2,i/2+4));const h=512,u=new Float32Array(h);for(let S=0;S<h;S++){const R=Math.PI*S/(h-1),A=this.computeMag({re:Math.cos(R),im:Math.sin(R)});u[S]=isFinite(A)?A*this.lastNormScale:0}const d=-90,f=S=>S>0?20*Math.log10(S):d;let g=0;for(let S=0;S<h;S++)g=Math.max(g,f(u[S]));if(this.origSpectrumStatic)for(let S=0;S<this.origSpectrumStatic.length;S++)g=Math.max(g,f(this.origSpectrumStatic[S]));g=Math.ceil((g+3)/6)*6;const _=g-d,p=S=>r.t+l-(Math.max(d,S)-d)/_*l;s.strokeStyle="rgba(255,255,255,0.04)",s.lineWidth=1;for(let S=0;S<=4;S++){const R=r.t+l-S/4*l;s.beginPath(),s.moveTo(r.l,R),s.lineTo(r.l+o,R),s.stroke(),s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",s.textAlign="right";const A=d+S/4*_;s.fillText(`${A.toFixed(0)}dB`,r.l-4,R+3)}const m=(S,R,A,C,B)=>{s.beginPath(),s.moveTo(r.l,r.t+l);for(let w=1;w<R;w++){const E=A?S[w]:f(S[w]),D=r.l+w/R*o,H=p(E);s.lineTo(D,H)}s.lineTo(r.l+o,r.t+l),s.closePath(),s.fillStyle=`rgba(${C},${B})`,s.fill()};this.origSpectrumStatic&&m(this.origSpectrumStatic,this.origSpectrumStatic.length,!1,"200,200,200",.22),this.analyserNode&&this.analyserData&&(this.analyserNode.getFloatFrequencyData(this.analyserData),m(this.analyserData,this.analyserData.length,!0,"82,207,254",.65)),s.beginPath();let y=!1;for(let S=1;S<h;S++){const R=r.l+S/(h-1)*o,A=p(f(u[S]));y?s.lineTo(R,A):(s.moveTo(R,A),y=!0)}s.strokeStyle="rgba(255,220,80,0.9)",s.lineWidth=1.5,s.shadowColor="rgba(255,200,60,0.6)",s.shadowBlur=6,s.stroke(),s.shadowBlur=0,s.fillStyle="rgba(255,255,255,0.18)",s.font="8px JetBrains Mono",s.textAlign="center";const v=this.sampleRate/2;[0,.25,.5,.75,1].forEach(S=>{const R=S*v;s.fillText(R>=1e3?`${(R/1e3).toFixed(0)}k`:`${R.toFixed(0)}`,r.l+S*o,i-4)}),this.analyserNode&&(s.fillStyle="rgba(82,207,254,0.8)",s.font="bold 8px JetBrains Mono",s.textAlign="right",s.fillText("● LIVE",n-r.r-2,r.t+22)),s.fillStyle="rgba(255,220,80,0.85)",s.font="bold 8px JetBrains Mono",s.textAlign="right",s.fillText("— |H(ω)| normalized",n-r.r-2,r.t+12)}draw3DFallback(){const t=this.surfaceCanvas,e=window.devicePixelRatio||1,n=t.width/e,i=t.height/e,s=t.getContext("2d");if(!s)return;const r=44,o=1.75,l=this.rotAngle2D,c=.47,h=Math.cos(l),u=Math.sin(l),d=Math.cos(c),f=Math.sin(c),g=220,_=5.2,p=3.8;s.fillStyle="#04050a",s.fillRect(0,0,n,i);const m=[];for(let S=0;S<=r;S++){m[S]=[];for(let R=0;R<=r;R++){const A=-o+2*o*S/r,C=-o+2*o*R/r,B=this.computeMag({re:A,im:C}),w=Math.atan(isFinite(B)?B/2:50)/(Math.PI/2)*p*.32,E=A*h+C*u,D=-A*u+C*h,H=w*d-D*f,X=w*f+D*d+_;m[S][R]={sx:E/X*g+n/2,sy:-H/X*g+i*.6,depth:X,h:w}}}const y=[];for(let S=0;S<r;S++)for(let R=0;R<r;R++){const A=(m[S][R].depth+m[S+1][R].depth+m[S][R+1].depth+m[S+1][R+1].depth)/4,C=(m[S][R].h+m[S+1][R].h+m[S][R+1].h+m[S+1][R+1].h)/4;y.push({i:S,j:R,d:A,aH:C})}y.sort((S,R)=>R.d-S.d);const v=p*.32;for(const{i:S,j:R,aH:A}of y){s.beginPath(),s.moveTo(m[S][R].sx,m[S][R].sy),s.lineTo(m[S+1][R].sx,m[S+1][R].sy),s.lineTo(m[S+1][R+1].sx,m[S+1][R+1].sy),s.lineTo(m[S][R+1].sx,m[S][R+1].sy),s.closePath();const[C,B,w]=vs(A/v);s.fillStyle=`rgb(${C},${B},${w})`,s.fill(),s.strokeStyle="rgba(0,0,0,0.2)",s.lineWidth=.3,s.stroke()}}startAnimation(){let t=0;const e=n=>{var s,r;const i=Math.min((n-t)/1e3,.05);t=n,this.rotAngle2D=(this.rotAngle2D+i*.2)%(2*Math.PI),this.useThreeJS&&this.threeRenderer&&this.threeScene&&this.threeCamera?(this.updateSpectrumBars3D(),(s=this.threeControls)==null||s.update(),this.threeRenderer.render(this.threeScene,this.threeCamera)):this.draw3DFallback(),this.isPlaying&&this.audioCtx&&this.originalBuffer&&(this.pausedAt=Math.min(this.audioCtx.currentTime-this.playbackStartedAt,this.originalBuffer.duration),(r=this.waveformTimeline)==null||r.setPlayhead(this.pausedAt)),this.updateOutputMakeup(),this.drawZPlane(),this.drawResponse(),this.drawSpectrum(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}destroy(){var t,e;this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),this.audioCtx=null,(t=this.threeControls)==null||t.dispose(),(e=this.threeRenderer)==null||e.dispose(),document.body.style.overflowY="",window.removeEventListener("resize",this.onResize)}}function cm(a){let t=1;for(;t<a;)t<<=1;return t}function hm(a,t){const e=a.length;let n=0;for(let i=0;i<e-1;i++){if(i<n){let r=a[i];a[i]=a[n],a[n]=r,r=t[i],t[i]=t[n],t[n]=r}let s=e>>1;for(;s<=n;)n-=s,s>>=1;n+=s}for(let i=1;i<e;i<<=1){const s=i<<1,r=Math.PI/i;for(let o=0;o<i;o++){const l=-o*r,c=Math.cos(l),h=Math.sin(l);for(let u=o;u<e;u+=s){const d=u+i,f=c*a[d]-h*t[d],g=c*t[d]+h*a[d];a[d]=a[u]-f,t[d]=t[u]-g,a[u]+=f,t[u]+=g}}}}function vl(a,t,e=512){const n=cm(Math.max(64,a.length)),i=new Float64Array(n),s=new Float64Array(n),r=Math.min(a.length,n);for(let u=0;u<r;u++){const d=.5*(1-Math.cos(2*Math.PI*u/Math.max(1,r-1)));i[u]=a[u]*d}hm(i,s);const o=n/2,l=new Float32Array(e),c=new Float32Array(e),h=t/2;for(let u=0;u<e;u++){const d=u/(e-1)*h;l[u]=d;const f=Math.round(d/h*(o-1)),g=Math.sqrt(i[f]*i[f]+s[f]*s[f])/n;c[u]=Math.max(-120,20*Math.log10(g+1e-12))}return{freqs:l,magnitudesDb:c}}function Oo(a,t,e=800){return vl(a,t,e)}let ba=null,um=0;function dm(){if(!ba){const a="/visualization/workers/convolve-worker.js";ba=new Worker(a,{type:"classic"})}return ba}function fm(a,t){return new Promise((e,n)=>{const i=dm(),s=++um,r=o=>{const l=o.data||{};l.id===s&&(i.removeEventListener("message",r),l.type==="result"?e(new Float32Array(l.result)):n(new Error(l.message||"Convolution worker failed")))};i.addEventListener("message",r),i.postMessage({type:"convolve",id:s,signal:a.slice(),kernel:t.slice()},[a.slice().buffer,t.slice().buffer])})}const Ea=480,wa=12,pm=8192,mm=1e3/30;class Er{constructor(t){x(this,"container");x(this,"sharedAudio",Ze.getInstance());x(this,"audioContext",null);x(this,"ui",{transport:xt("transport",!0),upload:xt("upload",!0),signalWaveform:xt("signalWaveform",!0),signalSpectrum:xt("signalSpectrum",!0),kernelWaveform:xt("kernelWaveform",!0),kernelSpectrum:xt("kernelSpectrum",!0),resultWaveform:xt("resultWaveform",!0),slidingView:xt("slidingView",!0),animSpectrums:xt("animSpectrums",!0)});x(this,"signalTrack");x(this,"kernelTrack");x(this,"totalSize",Ea);x(this,"colWidth",Ea);x(this,"signalCol");x(this,"kernelCol");x(this,"specRow");x(this,"resultCanvas");x(this,"resultCtx");x(this,"resultPanel");x(this,"lastAnimFrameTime",0);x(this,"signalSpectrumAnim");x(this,"kernelSpectrumAnim");x(this,"outputSpectrumAnim");x(this,"calcButton");x(this,"statusLabel");x(this,"convolved",null);x(this,"convolvedBuffer",null);x(this,"convSampleRate",44100);x(this,"cachedSignalRef",null);x(this,"cachedKernelRef",null);x(this,"isComputing",!1);x(this,"computeToken",0);x(this,"isAnimating",!1);x(this,"isPlaying",!1);x(this,"loop",!1);x(this,"animationId",null);x(this,"sourceNode",null);x(this,"gainNode",null);x(this,"startTime",0);x(this,"pausedAt",0);x(this,"activeSource",null);x(this,"trackAnimationId",null);x(this,"kernelPosition",0);x(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext(),await this.loadDefaults()}computeTotalSize(){return Math.max(Ea,Math.floor(this.container.clientWidth)-4)}createUI(){this.container.style.width="100%",this.totalSize=this.computeTotalSize(),this.colWidth=Math.floor((this.totalSize-wa-4)/2),this.signalTrack=this.createTrack("SIGNAL",this.colWidth,o=>this.loadTrack(this.signalTrack,o),this.ui.signalWaveform,this.ui.signalSpectrum),this.kernelTrack=this.createTrack("KERNEL",this.colWidth,o=>this.loadTrack(this.kernelTrack,o),this.ui.kernelWaveform,this.ui.kernelSpectrum);const t=document.createElement("div");t.style.display="flex",t.style.gap=`${wa}px`,t.style.marginBottom="10px";const e=[];this.ui.transport&&e.push(this.signalTrack.transport.getElement()),this.signalTrack.waveform&&e.push(this.signalTrack.waveform.getElement()),this.signalTrack.spectrum&&e.push(this.signalTrack.spectrum.getElement());const n=this.wrapSection("1. SIGNAL",e);n.style.width=`${this.colWidth}px`,n.style.flex="0 0 auto",this.signalCol=n;const i=[];this.ui.transport&&i.push(this.kernelTrack.transport.getElement()),this.kernelTrack.waveform&&i.push(this.kernelTrack.waveform.getElement()),this.kernelTrack.spectrum&&i.push(this.kernelTrack.spectrum.getElement());const s=this.wrapSection("2. KERNEL",i);s.style.width=`${this.colWidth}px`,s.style.flex="0 0 auto",this.kernelCol=s,t.append(n,s),this.container.appendChild(t);const r=document.createElement("div");if(r.className="controls-container",r.style.justifyContent="center",r.style.display="flex",r.style.alignItems="center",r.style.marginBottom="8px",this.calcButton=new cr("Computing…",()=>this.onCalcPressed()),this.calcButton.setDisabled(!0),r.appendChild(this.calcButton.getElement()),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.style.marginLeft="16px",this.statusLabel.textContent="Load two clips to begin",r.appendChild(this.statusLabel),this.container.appendChild(r),this.resultPanel=this.wrapSection("3. CONVOLUTION RESULT",[]),this.ui.resultWaveform||this.ui.slidingView){const o=document.createElement("div");o.className="timeline-panel";const l=document.createElement("div");l.className="timeline-title",l.textContent="OUTPUT WAVEFORM (kernel slides · result in red)",this.resultCanvas=document.createElement("canvas"),this.resultCanvas.className="timeline-canvas",this.resultCtx=this.resultCanvas.getContext("2d",{alpha:!0}),o.append(l,this.resultCanvas),this.resultPanel.appendChild(o),this.resizeResultCanvas()}if(this.ui.animSpectrums){const o=document.createElement("div");o.style.display="grid",o.style.gridTemplateColumns="1fr 1fr 1fr",o.style.gap="6px",this.specRow=o;const l=Math.floor((this.totalSize-12)/3);this.signalSpectrumAnim=new qe({width:l,height:130,label:"SIGNAL (live region)",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),this.kernelSpectrumAnim=new qe({width:l,height:130,label:"KERNEL",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),this.outputSpectrumAnim=new qe({width:l,height:130,label:"OUTPUT (accumulating)",minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}),o.append(this.signalSpectrumAnim.getElement(),this.kernelSpectrumAnim.getElement(),this.outputSpectrumAnim.getElement()),this.resultPanel.appendChild(o)}this.container.appendChild(this.resultPanel),this.resizeDisplays()}wrapSection(t,e){const n=document.createElement("div");n.style.marginBottom="10px";const i=document.createElement("div");return i.className="timeline-title",i.textContent=t,i.style.marginBottom="6px",n.appendChild(i),e.forEach(s=>n.appendChild(s)),n}createTrack(t,e,n,i,s){const r=document.createElement("span");r.className="transport-status",r.textContent="No clip loaded";const o=new Yn({onPlay:()=>this.playTrack(t),onPause:()=>this.pauseTrack(),onStop:()=>this.stopTrack(),onUpload:n,uploadLabel:"Upload",showUpload:this.ui.upload,onLoopToggle:h=>{var u,d;this.loop=h,this.sourceNode&&(this.sourceNode.loop=h),(u=this.signalTrack)==null||u.transport.setLooping(h),(d=this.kernelTrack)==null||d.transport.setLooping(h)}});o.getElement().querySelector(".transport-left").appendChild(r);const l=i?new Xn({width:e,height:60,title:`${t} WAVEFORM`},()=>{}):void 0,c=s?new qe({width:e,height:130,label:`${t} — FULL DFT`,minFreq:0,maxFreq:22050,minDb:-100,maxDb:0}):void 0;return{label:t,buffer:null,samples:null,sampleRate:44100,transport:o,waveform:l,spectrum:c,status:r}}async loadDefaults(){const t=cn("audio"),e=cn("kernel");t?await this.loadTrackFromUrl(this.signalTrack,t):await this.loadSynthetic(this.signalTrack,"signal"),e?await this.loadTrackFromUrl(this.kernelTrack,e):await this.loadSynthetic(this.kernelTrack,"kernel")}async loadSynthetic(t,e){if(!this.audioContext)return;const n=44100,i=e==="signal"?1.5:.25,s=Math.floor(n*i),r=this.audioContext.createBuffer(1,s,n),o=r.getChannelData(0);if(e==="signal")for(let l=0;l<s;l++){const c=l/n;o[l]=.6*Math.sin(2*Math.PI*440*c)*Math.exp(-c*2)}else for(let l=0;l<s;l++){const c=l/n-i/2;o[l]=Math.exp(-c*c*8e3)}this.setTrackBuffer(t,r,e==="signal"?"Default signal":"Default kernel")}async loadTrack(t,e){t.status.textContent="Decoding…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const n=await e.arrayBuffer(),i=await this.sharedAudio.decodeAudioData(n);this.setTrackBuffer(t,i,e.name)}catch{t.status.textContent="Load error"}}async loadTrackFromUrl(t,e){t.status.textContent="Loading…",this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{const i=await(await fetch(qn(e))).arrayBuffer(),s=await this.sharedAudio.decodeAudioData(i);this.setTrackBuffer(t,s,e.split("/").pop()??e)}catch{t.status.textContent="Load error"}}setTrackBuffer(t,e,n){var i;t.buffer=e,t.samples=new Float32Array(e.getChannelData(0)),t.sampleRate=e.sampleRate,(i=t.waveform)==null||i.setWaveformFromBuffer(e),t.status.textContent=n,this.drawFullSpectrum(t),this.convolved=null,this.convolvedBuffer=null,this.stopTrack(),this.maybeAutoConvolve()}drawFullSpectrum(t){if(!t.samples||!t.spectrum)return;const{freqs:e,magnitudesDb:n}=Oo(t.samples,t.sampleRate,512);t.spectrum.clear(),t.spectrum.drawGrid(),t.spectrum.drawSpectrum(e,n,"#52cffe",2,1,!0)}maybeAutoConvolve(){if(!this.signalTrack.samples||!this.kernelTrack.samples){this.calcButton.setText("Calculate Convolution"),this.calcButton.setDisabled(!0),this.statusLabel.textContent="Load two clips to begin";return}this.runConvolution()}async runConvolution(){const t=this.signalTrack.samples,e=this.kernelTrack.samples;if(!t||!e)return;if(this.convolved&&this.cachedSignalRef===t&&this.cachedKernelRef===e){this.calcButton.setText("Play Convolution"),this.calcButton.setDisabled(!1),this.statusLabel.textContent="Ready (cached) — press to play";return}this.isComputing=!0;const n=++this.computeToken;this.calcButton.setText("Computing…"),this.calcButton.setDisabled(!0),this.statusLabel.textContent="Computing convolution in background…",this.convSampleRate=this.signalTrack.sampleRate;let i;try{i=await fm(t,e)}catch{i=kn.convolve(t,e)}if(n===this.computeToken){if(this.convolved=kn.normalizePeak(i,.9),this.cachedSignalRef=t,this.cachedKernelRef=e,this.audioContext){const s=this.audioContext.createBuffer(1,this.convolved.length,this.convSampleRate);s.copyToChannel(new Float32Array(this.convolved),0),this.convolvedBuffer=s}this.kernelPosition=0,this.updateAnimationFrame(),this.isComputing=!1,this.calcButton.setText("Play Convolution"),this.calcButton.setDisabled(!1),this.statusLabel.textContent="Ready — press to play"}}onCalcPressed(){this.isComputing||(this.convolved&&this.convolvedBuffer?(this.kernelPosition=0,this.pausedAt=0,this.isAnimating=!0,this.stopTrack(!1),this.playConvolved()):this.statusLabel.textContent="Load both clips first")}async playConvolved(){!this.convolvedBuffer||!this.audioContext||(this.activeSource!=="output"&&(this.pausedAt=0),this.stopTrack(!1),this.activeSource="output",this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.convolvedBuffer,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=.85,this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&this.activeSource==="output"&&this.finishAnimation()},this.isPlaying=!0,this.isAnimating=!0,this.signalTrack.transport.setPlaying(!0),this.startAnimationLoop())}playTrack(t){const e=t==="SIGNAL",n=e?"signal":"kernel",i=e?this.signalTrack:this.kernelTrack;!i.buffer||!this.audioContext||(this.activeSource!==n&&(this.pausedAt=0),this.stopTrack(!1),this.activeSource=n,this.isAnimating=!1,this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=i.buffer,this.sourceNode.loop=this.loop,this.gainNode=this.audioContext.createGain(),this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&this.activeSource===n&&!this.loop&&this.stopTrack(!0)},this.isPlaying=!0,i.transport.setPlaying(!0),this.startTrackAnimationLoop(i))}startTrackAnimationLoop(t){const e=()=>{var i;if(!this.isPlaying||!this.audioContext)return;const n=this.audioContext.currentTime-this.startTime;(i=t.waveform)==null||i.setPlayhead(n),this.trackAnimationId=requestAnimationFrame(e)};e()}stopTrackAnimationLoop(){this.trackAnimationId!==null&&(cancelAnimationFrame(this.trackAnimationId),this.trackAnimationId=null)}pauseTrack(){!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this.teardownAudio(),this.isPlaying=!1,this.signalTrack.transport.setPlaying(!1),this.kernelTrack.transport.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.stopTrackAnimationLoop())}stopTrack(t=!0){var e,n;this.teardownAudio(),this.isPlaying=!1,this.signalTrack.transport.setPlaying(!1),this.kernelTrack.transport.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.stopTrackAnimationLoop(),t&&(this.pausedAt=0,this.kernelPosition=0,this.isAnimating=!1,this.activeSource=null,(e=this.signalTrack.waveform)==null||e.setPlayhead(0),(n=this.kernelTrack.waveform)==null||n.setPlayhead(0))}finishAnimation(){this.stopTrack(!1),this.kernelPosition=this.convolved?this.convolved.length-1:0,this.statusLabel.textContent="Convolution complete",this.updateAnimationFrame()}teardownAudio(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),this.sourceNode=null,this.gainNode=null}startAnimationLoop(){const t=()=>{if(!this.isPlaying||!this.audioContext||!this.convolved)return;const e=this.audioContext.currentTime-this.startTime;this.pausedAt=e;const n=this.convolved.length,i=n/this.convSampleRate,s=Math.min(1,i>0?e/i:1);this.kernelPosition=Math.floor(s*(n-1));const r=performance.now();r-this.lastAnimFrameTime>=mm&&(this.lastAnimFrameTime=r,this.updateAnimationFrame()),this.animationId=requestAnimationFrame(t)};t()}updateAnimationFrame(){const t=this.signalTrack.samples,e=this.kernelTrack.samples;if(!(!t||!e||!this.convolved)&&(this.ui.slidingView&&this.drawSlidingWaveform(t,e,this.convolved,this.kernelPosition),this.ui.animSpectrums)){const n=e.length,i=Math.max(0,this.kernelPosition-n+1),s=Math.min(t.length,this.kernelPosition+1),r=t.slice(i,Math.max(i+1,s));this.drawAnimSpectrum(this.signalSpectrumAnim,r,this.convSampleRate,"#52cffe"),this.drawAnimSpectrum(this.kernelSpectrumAnim,e,this.convSampleRate,"#ffd700");const o=Math.min(this.convolved.length,this.kernelPosition+1),l=this.convolved.subarray(0,Math.max(1,o));this.drawAnimSpectrum(this.outputSpectrumAnim,l,this.convSampleRate,"#ff4d6d",!1)}}drawDownsampledLine(t,e,n,i,s,r,o){const l=i-n;if(l<=0)return;const c=s(n),h=s(i),u=Math.max(1,Math.ceil(h-c)),d=Math.max(1,Math.floor(l/u));t.beginPath();let f=!0;for(let g=0;g<u;g++){const _=n+g*d,p=g===u-1?i:Math.min(i,_+d);let m=1/0,y=-1/0;for(let A=_;A<p;A++){const C=e(A);C<m&&(m=C),C>y&&(y=C)}if(m===1/0)continue;const v=c+g,S=r-m*o*.4,R=r-y*o*.4;f&&(t.moveTo(v,R),f=!1),t.lineTo(v,R),t.lineTo(v,S)}t.stroke()}drawSlidingWaveform(t,e,n,i){if(!this.resultCanvas||!this.resultCtx)return;const s=this.totalSize-4,r=100,o=this.resultCtx,l=r/2,c=14,h=r-2*c;o.clearRect(0,0,s,r),o.fillStyle="rgba(11, 16, 24, 0.92)",o.fillRect(0,0,s,r);const u=n.length,d=p=>p/u*s;o.strokeStyle="rgba(82, 207, 254, 0.45)",o.lineWidth=1,this.drawDownsampledLine(o,p=>p<t.length?t[p]:0,0,u,d,l,h);const f=Math.max(0,i-e.length+1),g=Math.min(u,f+e.length);o.strokeStyle="rgba(255, 215, 0, 0.85)",o.lineWidth=2,this.drawDownsampledLine(o,p=>e[e.length-1-(p-f)],f,g,d,l,h),o.fillStyle="rgba(255, 215, 0, 0.08)",o.fillRect(d(f),c,d(e.length),h);const _=Math.min(u,i+1);if(o.strokeStyle="#ff4d6d",o.lineWidth=2,this.drawDownsampledLine(o,p=>n[p],0,_,d,l,h),this.isPlaying||this.isAnimating){const p=d(Math.min(u,i));o.strokeStyle="#ff9a4d",o.lineWidth=2,o.beginPath(),o.moveTo(p,0),o.lineTo(p,r),o.stroke(),o.fillStyle="#ff9a4d",o.beginPath(),o.moveTo(p-6,0),o.lineTo(p+6,0),o.lineTo(p,8),o.closePath(),o.fill()}}static decimateForAnalysis(t,e,n){if(t.length<=n)return{samples:t,sampleRate:e};const i=Math.ceil(t.length/n),s=Math.ceil(t.length/i),r=new Float32Array(s);for(let o=0,l=0;o<t.length;o+=i,l++)r[l]=t[o];return{samples:r,sampleRate:e/i}}drawAnimSpectrum(t,e,n,i,s=!0){if(!t)return;const{samples:r,sampleRate:o}=s?Er.decimateForAnalysis(e,n,pm):{samples:e,sampleRate:n},{freqs:l,magnitudesDb:c}=Oo(r,o,256);t.clear(),t.drawGrid(),t.drawSpectrum(l,c,i,2,1,!0)}resizeResultCanvas(){if(!this.resultCanvas||!this.resultCtx)return;const t=this.totalSize-4,e=100,n=window.devicePixelRatio||1;this.resultCanvas.width=t*n,this.resultCanvas.height=e*n,this.resultCanvas.style.width=`${t}px`,this.resultCanvas.style.height=`${e}px`,this.resultCtx.setTransform(n,0,0,n,0,0)}resizeDisplays(){var t,e,n,i,s,r,o;if(this.totalSize=this.computeTotalSize(),this.colWidth=Math.floor((this.totalSize-wa-4)/2),this.signalCol&&(this.signalCol.style.width=`${this.colWidth}px`),this.kernelCol&&(this.kernelCol.style.width=`${this.colWidth}px`),(t=this.signalTrack.waveform)==null||t.resize(this.colWidth,60),(e=this.signalTrack.spectrum)==null||e.resize(this.colWidth,130),(n=this.kernelTrack.waveform)==null||n.resize(this.colWidth,60),(i=this.kernelTrack.spectrum)==null||i.resize(this.colWidth,130),this.resizeResultCanvas(),this.specRow){const l=Math.floor((this.totalSize-12)/3);(s=this.signalSpectrumAnim)==null||s.resize(l,130),(r=this.kernelSpectrumAnim)==null||r.resize(l,130),(o=this.outputSpectrumAnim)==null||o.resize(l,130)}this.signalTrack.samples&&this.drawFullSpectrum(this.signalTrack),this.kernelTrack.samples&&this.drawFullSpectrum(this.kernelTrack),this.convolved&&this.updateAnimationFrame()}destroy(){this.stopTrack(),window.removeEventListener("resize",this.onResize)}}let rn=null,Oi=null,gm=0;const gi=new Map,_m=`
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
`;function xm(){if(!rn){const a=new Blob([_m],{type:"application/javascript"});Oi=URL.createObjectURL(a),rn=new Worker(Oi),rn.addEventListener("message",t=>{const e=t.data||{},n=gi.get(e.id);n&&(gi.delete(e.id),e.type==="result"?n.resolve({freqs:new Float32Array(e.freqs),magnitudesDb:new Float32Array(e.magnitudesDb)}):n.reject(new Error(e.message||"FFT worker failed")))}),rn.addEventListener("error",t=>{for(const[e,n]of gi)n.reject(new Error(t.message||"FFT worker crashed")),gi.delete(e)})}return rn}function vm(a,t,e){return new Promise((n,i)=>{const s=xm(),r=++gm;gi.set(r,{resolve:n,reject:i});const o=a.slice();s.postMessage({type:"compute",id:r,samples:o.buffer,sampleRate:t,numPoints:e},[o.buffer])})}function ym(){rn==null||rn.terminate(),rn=null,Oi&&(URL.revokeObjectURL(Oi),Oi=null),gi.clear()}class Sm{constructor(t){x(this,"container");x(this,"sharedAudio",Ze.getInstance());x(this,"audioContext",null);x(this,"ui",{transport:xt("transport",!0),upload:xt("upload",!0),waveform:xt("waveform",!0),scope:xt("scope",!0),liveSpectrum:xt("liveSpectrum",!0),cumulativeSpectrum:xt("cumulativeSpectrum",!0)});x(this,"transportBar");x(this,"statusLabel");x(this,"waveformTimeline");x(this,"scopeDisplay");x(this,"liveSpectrum");x(this,"fullSpectrum");x(this,"rawBuffer",null);x(this,"samples",null);x(this,"sampleRate",44100);x(this,"windowSize",8192*2);x(this,"liveSpectrumPoints",2048*4);x(this,"fullSpectrumPoints",4096*32);x(this,"fullSpectrumData",null);x(this,"fullSpectrumComputing",!1);x(this,"fullSpectrumRequestId",0);x(this,"scopeWindowSamples",2048);x(this,"scopeStemCount",180);x(this,"scopeSincA",3);x(this,"scopeWidth",620);x(this,"scopeHeight",160);x(this,"sourceNode",null);x(this,"gainNode",null);x(this,"isPlaying",!1);x(this,"loop",!1);x(this,"animationId",null);x(this,"startTime",0);x(this,"pausedAt",0);x(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),this.audioContext=await this.sharedAudio.getContext(),await this.loadDefaultAudio()}getWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=this.getWidth();if(this.ui.transport?(this.transportBar=new Yn({onPlay:()=>this.play(),onPause:()=>this.pause(),onStop:()=>this.stop(!0),onUpload:e=>this.handleUpload(e),uploadLabel:"Upload Audio",showUpload:this.ui.upload,onLoopToggle:e=>{this.loop=e}}),this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusLabel),this.container.appendChild(this.transportBar.getElement())):(this.statusLabel=document.createElement("span"),this.statusLabel.className="transport-status",this.statusLabel.textContent="Loading…",this.statusLabel.style.display="block",this.statusLabel.style.marginBottom="8px",this.container.appendChild(this.statusLabel)),this.ui.waveform&&(this.waveformTimeline=new Xn({width:t,height:100,title:"WAVEFORM / PLAYHEAD"},e=>this.seek(e)),this.container.appendChild(this.waveformTimeline.getElement())),this.ui.scope&&(this.scopeWidth=t,this.scopeHeight=160,this.scopeDisplay=new Ui({width:this.scopeWidth,height:this.scopeHeight,label:"TIME DOMAIN SCOPE"}),this.scopeDisplay.getElement().style.marginBottom="8px",this.container.appendChild(this.scopeDisplay.getElement())),this.ui.liveSpectrum||this.ui.cumulativeSpectrum){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="8px",this.ui.liveSpectrum&&(this.liveSpectrum=new qe({width:t,height:360,label:`LIVE WINDOW (${this.windowSize} samples, ${this.liveSpectrumPoints}-pt)`,minFreq:0,maxFreq:22050,minDb:-100,maxDb:0,logScale:!0}),e.appendChild(this.liveSpectrum.getElement())),this.ui.cumulativeSpectrum&&(this.fullSpectrum=new qe({width:t,height:360,label:`FULL CLIP DFT (static, ${this.fullSpectrumPoints}-pt)`,minFreq:0,maxFreq:22050,minDb:-100,maxDb:0,logScale:!0}),e.appendChild(this.fullSpectrum.getElement())),this.container.appendChild(e)}this.resizeDisplays()}async loadDefaultAudio(){const t=cn("audio");if(t){await this.loadFromUrl(t);return}await this.loadBuiltInChirp()}async loadBuiltInChirp(){if(!this.audioContext)return;const t=44100,e=2,n=t*e,i=this.audioContext.createBuffer(1,n,t),s=i.getChannelData(0);for(let r=0;r<n;r++){const o=r/t,l=200+3800*(o/e);s[r]=.55*Math.sin(2*Math.PI*l*o)}this.setBuffer(i,"Default chirp")}async loadFromUrl(t){this.statusLabel.textContent="Loading…";try{const n=await(await fetch(qn(t))).arrayBuffer(),i=await this.sharedAudio.decodeAudioData(n);this.setBuffer(i,t.split("/").pop()??t)}catch{this.statusLabel.textContent="Load error — using default",await this.loadBuiltInChirp()}}async handleUpload(t){this.statusLabel.textContent="Decoding…";try{const e=await t.arrayBuffer(),n=await this.sharedAudio.decodeAudioData(e);this.setBuffer(n,t.name)}catch{this.statusLabel.textContent="Upload error"}}setBuffer(t,e){var n;this.rawBuffer=t,this.samples=new Float32Array(t.getChannelData(0)),this.sampleRate=t.sampleRate,(n=this.waveformTimeline)==null||n.setWaveformFromBuffer(t),this.pausedAt=0,this.statusLabel.textContent=e,this.computeFullSpectrum(),this.drawSpectra(0),this.drawScope(0)}computeFullSpectrum(){if(this.fullSpectrumData=null,!this.samples){this.fullSpectrumComputing=!1,this.drawFullSpectrum();return}const t=++this.fullSpectrumRequestId;this.fullSpectrumComputing=!0,this.drawFullSpectrum(),vm(this.samples,this.sampleRate,this.fullSpectrumPoints).then(e=>{t===this.fullSpectrumRequestId&&(this.fullSpectrumData=e,this.fullSpectrumComputing=!1,this.drawFullSpectrum())}).catch(()=>{t===this.fullSpectrumRequestId&&(this.fullSpectrumComputing=!1,this.drawFullSpectrum())})}seek(t){var n;if(!this.samples)return;this.pausedAt=t;const e=Math.floor(t*this.sampleRate);(n=this.waveformTimeline)==null||n.setPlayhead(t),this.drawSpectra(e),this.drawScope(e),this.isPlaying&&(this.stop(!1),this.play())}async play(){var t;!this.rawBuffer||!this.audioContext||(this.stop(!1),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.rawBuffer,this.gainNode=this.audioContext.createGain(),this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&(this.loop?(this.pausedAt=0,this.play()):this.stop(!0))},this.isPlaying=!0,(t=this.transportBar)==null||t.setPlaying(!0),this.statusLabel.textContent="Playing",this.startAnimation())}pause(){var t;!this.isPlaying||!this.audioContext||(this.pausedAt=this.audioContext.currentTime-this.startTime,this.teardownAudio(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.statusLabel.textContent="Paused")}stop(t){var e,n;this.teardownAudio(),this.isPlaying=!1,(e=this.transportBar)==null||e.setPlaying(!1),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),t&&(this.pausedAt=0,(n=this.waveformTimeline)==null||n.setPlayhead(0),this.drawSpectra(0),this.drawScope(0),this.statusLabel.textContent="Stopped")}teardownAudio(){var t,e,n;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.gainNode)==null||n.disconnect(),this.sourceNode=null,this.gainNode=null}startAnimation(){const t=()=>{var i;if(!this.isPlaying||!this.audioContext||!this.samples)return;const e=this.audioContext.currentTime-this.startTime;this.pausedAt=e,(i=this.waveformTimeline)==null||i.setPlayhead(e);const n=Math.min(this.samples.length,Math.floor(e*this.sampleRate));this.drawSpectra(n),this.drawScope(n),this.animationId=requestAnimationFrame(t)};t()}drawSpectra(t){if(this.samples){if(this.liveSpectrum){const e=Math.max(0,t-this.windowSize),n=this.samples.slice(e,t);if(this.liveSpectrum.clear(),this.liveSpectrum.drawGrid(),n.length>=8){const i=vl(n,this.sampleRate,this.liveSpectrumPoints);this.liveSpectrum.drawSpectrum(i.freqs,i.magnitudesDb,"#52cffe",2,1,!0)}this.liveSpectrum.drawFreqAxis()}this.drawFullSpectrum()}}drawFullSpectrum(){this.fullSpectrum&&(this.fullSpectrum.clear(),this.fullSpectrum.drawGrid(),this.fullSpectrumData?this.fullSpectrum.drawSpectrum(this.fullSpectrumData.freqs,this.fullSpectrumData.magnitudesDb,"#ffd700",2.5,1,!0):this.fullSpectrumComputing&&this.drawFullSpectrumComputingLabel(),this.fullSpectrum.drawFreqAxis())}drawFullSpectrumComputingLabel(){var i;const t=(i=this.fullSpectrum)==null?void 0:i.getElement(),e=t==null?void 0:t.querySelector(".spectrum-canvas"),n=e==null?void 0:e.getContext("2d");!n||!e||(n.save(),n.font="600 12px 'Segoe UI', sans-serif",n.fillStyle="rgba(255, 215, 0, 0.55)",n.textAlign="center",n.fillText(`Computing ${this.fullSpectrumPoints}-pt DFT in background…`,e.clientWidth/2,e.clientHeight/2),n.restore())}drawScope(t){if(!this.scopeDisplay||(this.scopeDisplay.clear(),this.scopeDisplay.drawGrid(),!this.samples||this.samples.length===0))return;const e=Math.floor(this.scopeWindowSamples/2),n=Math.max(0,t-e),i=Math.min(this.samples.length,n+this.scopeWindowSamples),s=this.samples.slice(n,i);if(s.length===0)return;const r=this.scopeWidth,o=this.scopeHeight,l=o/2,h=o-2*14,u=Math.max(2,Math.round(r)),d=new Array(u);for(let _=0;_<u;_++){const p=_/(u-1)*(s.length-1),m=this.lanczosInterpolate(s,p,this.scopeSincA),y=_/(u-1)*r,v=l-m*h/2;d[_]={x:y,y:v}}this.scopeDisplay.drawSmoothCurve(d,"#52cffe",1.6);const f=Math.min(this.scopeStemCount,s.length),g=[];for(let _=0;_<f;_++){const p=_/(f-1)*(s.length-1),m=this.lanczosInterpolate(s,p,this.scopeSincA),y=_/(f-1)*r,v=l-m*h/2;g.push({x:y,y:v})}this.scopeDisplay.drawSamplePoints(g,"#52cffe",!1)}lanczosInterpolate(t,e,n){const i=Math.floor(e);let s=0;for(let r=i-n+1;r<=i+n;r++)r<0||r>=t.length||(s+=t[r]*this.lanczosKernel(e-r,n));return s}lanczosKernel(t,e){if(t===0)return 1;if(t<=-e||t>=e)return 0;const n=Math.PI*t;return e*Math.sin(n)*Math.sin(n/e)/(n*n)}resizeDisplays(){var e,n,i,s;const t=this.getWidth();(e=this.waveformTimeline)==null||e.resize(t,100),this.scopeWidth=t,this.scopeHeight=160,(n=this.scopeDisplay)==null||n.resize(this.scopeWidth,this.scopeHeight),(i=this.liveSpectrum)==null||i.resize(t,360),(s=this.fullSpectrum)==null||s.resize(t,360),this.drawSpectra(Math.floor(this.pausedAt*this.sampleRate)),this.drawScope(Math.floor(this.pausedAt*this.sampleRate))}destroy(){this.stop(!0),window.removeEventListener("resize",this.onResize),ym()}}class Mm{constructor(t){x(this,"container");x(this,"animId",null);x(this,"sharedAudio",Ze.getInstance());x(this,"audioCtx",null);x(this,"originalBuffer",null);x(this,"sourceNode",null);x(this,"preset","tremolo");x(this,"tremoloRateHz",10);x(this,"lowpassCutoffHz",1200);x(this,"highpassCutoffHz",800);x(this,"delayTimeMs",300);x(this,"delayFeedback",.35);x(this,"delayWetMix",.55);x(this,"dspNode",null);x(this,"biquadNode",null);x(this,"delayNode",null);x(this,"delayFeedbackGain",null);x(this,"delayWetGain",null);x(this,"delayDryGain",null);x(this,"gainNode",null);x(this,"analyserNode",null);x(this,"analyserFreqData",null);x(this,"postTimeData",null);x(this,"preAnalyserNode",null);x(this,"preSilentGain",null);x(this,"preTimeData",null);x(this,"origSpectrumStatic",null);x(this,"sampleRate",44100);x(this,"synthLastFrameMs",null);x(this,"synthSampleRate",2e4);x(this,"synthN",0);x(this,"synthState",{x1:0,x2:0,y1:0,y2:0});x(this,"synthTrail",[]);x(this,"synthTrailMax",500);x(this,"synthDelayBuffer",new Float32Array(20001));x(this,"synthDelayWriteIdx",0);x(this,"isPlaying",!1);x(this,"playMode","filtered");x(this,"playbackStartedAt",0);x(this,"pausedAt",0);x(this,"loop",!1);x(this,"transportBar");x(this,"waveformTimeline");x(this,"statusEl");x(this,"eqLabelEl");x(this,"presetButtons");x(this,"knobWraps");x(this,"tremoloKnob");x(this,"lowpassKnob");x(this,"highpassKnob");x(this,"delayTimeKnob");x(this,"delayFeedbackKnob");x(this,"xyCanvas");x(this,"scopeCanvas");x(this,"spectrumCanvas");x(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),this.updateEquationLabel(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.startAnimation(),this.loadDefaultAudio()}buildUI(){if(document.body.style.overflowY="auto",xt("transport",!0)){this.transportBar=new Yn({onPlay:()=>void this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:p=>void this.handleUpload(p),uploadLabel:"Upload Audio",showUpload:xt("upload",!0),onLoopToggle:p=>{this.loop=p,this.sourceNode&&(this.sourceNode.loop=p)}}),this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.textContent="Upload audio to audition",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusEl);const _=document.createElement("div");_.style.cssText="display:flex;gap:4px;margin-left:8px;",["original","filtered"].forEach(p=>{const m=document.createElement("button");m.className="transport-mode-btn"+(p===this.playMode?" active":""),m.textContent=p==="original"?"Original":"Filtered",m.style.fontSize="9px",m.addEventListener("click",()=>{this.playMode=p,_.querySelectorAll(".transport-mode-btn").forEach(y=>y.classList.toggle("active",y===m)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(p))}),_.appendChild(m)}),this.transportBar.getElement().querySelector(".transport-left").appendChild(_),this.container.appendChild(this.transportBar.getElement())}else this.statusEl=document.createElement("span"),this.statusEl.style.display="none";xt("waveform",!0)&&(this.waveformTimeline=new Xn({width:900,height:64,title:"WAVEFORM"},_=>this.seek(_)),this.container.appendChild(this.waveformTimeline.getElement()));const t=this.makePanel("PRESET");t.style.margin="6px 0";const e=document.createElement("div");e.style.cssText="padding:26px 10px 14px;display:flex;flex-direction:column;gap:12px;";const n=document.createElement("div");n.style.cssText="display:flex;gap:6px;flex-wrap:wrap;";const i=[{key:"tremolo",label:"Tremolo"},{key:"lowpass",label:"Lowpass"},{key:"highpass",label:"Highpass"},{key:"delay",label:"Delay"}];this.presetButtons={},i.forEach(({key:_,label:p})=>{const m=new cr(p,()=>this.applyPreset(_));m.setActive(_===this.preset),this.presetButtons[_]=m,n.appendChild(m.getElement())}),e.appendChild(n),this.eqLabelEl=document.createElement("div"),this.eqLabelEl.style.cssText="font:11px JetBrains Mono,monospace;color:#52cffe;line-height:1.45;white-space:pre-line;",e.appendChild(this.eqLabelEl);const s=document.createElement("div");s.style.cssText="display:flex;gap:20px;align-items:flex-start;",this.knobWraps={};const r=document.createElement("div");this.tremoloKnob=new Ge({label:"RATE",unit:"Hz",min:.5,max:500,value:this.tremoloRateHz,step:.5,defaultValue:10},_=>{this.tremoloRateHz=_,this.updateEquationLabel(),this.preset==="tremolo"&&this.applyLiveParams()}),r.appendChild(this.tremoloKnob.getElement()),this.knobWraps.tremolo=r,s.appendChild(r);const o=document.createElement("div");o.style.display="none",this.lowpassKnob=new Ge({label:"CUTOFF",unit:"Hz",min:100,max:8e3,value:this.lowpassCutoffHz,step:10,defaultValue:1200},_=>{this.lowpassCutoffHz=_,this.updateEquationLabel(),this.preset==="lowpass"&&this.applyLiveParams()}),o.appendChild(this.lowpassKnob.getElement()),this.knobWraps.lowpass=o,s.appendChild(o);const l=document.createElement("div");l.style.display="none",this.highpassKnob=new Ge({label:"CUTOFF",unit:"Hz",min:100,max:8e3,value:this.highpassCutoffHz,step:10,defaultValue:800},_=>{this.highpassCutoffHz=_,this.updateEquationLabel(),this.preset==="highpass"&&this.applyLiveParams()}),l.appendChild(this.highpassKnob.getElement()),this.knobWraps.highpass=l,s.appendChild(l);const c=document.createElement("div");c.style.display="none";const h=document.createElement("div");h.style.cssText="display:flex;gap:20px;align-items:flex-start;",c.appendChild(h),this.delayTimeKnob=new Ge({label:"TIME",unit:"ms",min:10,max:1e3,value:this.delayTimeMs,step:5,defaultValue:300},_=>{this.delayTimeMs=_,this.updateEquationLabel(),this.preset==="delay"&&this.applyLiveParams()}),this.delayFeedbackKnob=new Ge({label:"FEEDBACK",unit:"",min:0,max:.9,value:this.delayFeedback,step:.01,defaultValue:.35},_=>{this.delayFeedback=_,this.updateEquationLabel(),this.preset==="delay"&&this.applyLiveParams()}),h.appendChild(this.delayTimeKnob.getElement()),h.appendChild(this.delayFeedbackKnob.getElement()),this.knobWraps.delay=c,s.appendChild(c),e.appendChild(s),t.appendChild(e),this.container.appendChild(t);const u=document.createElement("div");u.style.cssText="display:flex;gap:8px;flex-wrap:wrap;margin:0 0 6px;";const d=this.makePanel("X/Y PLOT · x[n] vs y[n] · live test signal");d.style.width="260px",this.xyCanvas=this.makeCanvas2D(d,240,240),u.appendChild(d);const f=this.makePanel("SCOPE · gray=before · cyan=after");f.style.flex="1",f.style.minWidth="300px",this.scopeCanvas=this.makeCanvas2D(f,620,240),u.appendChild(f),this.container.appendChild(u);const g=this.makePanel("SPECTRUM (linear) · gray=original · cyan=live");this.spectrumCanvas=this.makeCanvas2D(g,900,110),this.container.appendChild(g)}makePanel(t){const e=document.createElement("div");e.style.cssText="background:#080b10;border:1px solid #1e2530;border-radius:6px;overflow:hidden;position:relative;";const n=document.createElement("div");return n.style.cssText="position:absolute;top:4px;left:8px;font-size:7px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,0.35);text-transform:uppercase;z-index:2;",n.textContent=t,e.appendChild(n),e}makeCanvas2D(t,e,n){const i=window.devicePixelRatio||1,s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=`${e}px`,s.style.height=`${n}px`,s.style.display="block",s.getContext("2d").scale(i,i),t.appendChild(s),s}resizeCanvas(t,e,n){const i=window.devicePixelRatio||1;t.width=e*i,t.height=n*i,t.style.width=`${e}px`,t.style.height=`${n}px`;const s=t.getContext("2d");s.setTransform(1,0,0,1,0,0),s.scale(i,i)}resizeLayout(){var n;const t=Math.max(640,this.container.clientWidth-2);(n=this.waveformTimeline)==null||n.resize(t,64),this.resizeCanvas(this.xyCanvas,240,240);const e=Math.max(300,t-280);this.resizeCanvas(this.scopeCanvas,e,240),this.resizeCanvas(this.spectrumCanvas,t,110)}applyPreset(t){this.preset!==t&&(this.preset=t,Object.keys(this.presetButtons).forEach(e=>this.presetButtons[e].setActive(e===t)),Object.keys(this.knobWraps).forEach(e=>{this.knobWraps[e].style.display=e===t?"":"none"}),this.updateEquationLabel(),this.isPlaying&&this.playMode==="filtered"&&(this.stopAudio(!1),this.startPlayback("filtered")))}updateEquationLabel(){if(this.eqLabelEl.style.color="#52cffe",this.preset==="tremolo")this.eqLabelEl.textContent=`y[n] = x[n] · cos(2π · ${this.tremoloRateHz.toFixed(1)} · n / Fs) — time-varying gain, not LTI`;else if(this.preset==="delay"){const t=this.sampleRate||44100,e=Math.max(1,Math.round(this.delayTimeMs/1e3*t));this.eqLabelEl.textContent=`Feedback delay (comb filter) · D = ${this.delayTimeMs.toFixed(0)} ms = ${e} samples @ Fs
s[n] = x[n] + ${this.delayFeedback.toFixed(2)} · s[n − D],   y[n] = x[n] + ${this.delayWetMix.toFixed(2)} · s[n − D]`}else{const t=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz,e=this.sampleRate||44100,n=this.biquadCoeffs(this.preset,Math.min(t,e*.45),e),i=this.preset==="lowpass"?"Lowpass":"Highpass";this.eqLabelEl.textContent=`2nd-order Butterworth ${i.toLowerCase()} · fc = ${t.toFixed(0)} Hz (Fs = ${e} Hz)
y[n] = ${n.b0.toFixed(3)}x[n] + ${n.b1.toFixed(3)}x[n−1] + ${n.b2.toFixed(3)}x[n−2] − (${n.a1.toFixed(3)})y[n−1] − (${n.a2.toFixed(3)})y[n−2]`}}biquadCoeffs(t,e,n){const i=2*Math.PI*e/n,s=Math.sin(i)/(2*Math.SQRT1_2),r=Math.cos(i);let o,l,c;t==="lowpass"?(o=(1-r)/2,l=1-r,c=(1-r)/2):(o=(1+r)/2,l=-(1+r),c=(1+r)/2);const h=1+s,u=-2*r,d=1-s;return{b0:o/h,b1:l/h,b2:c/h,a1:u/h,a2:d/h}}synthTestSignal(t){const e=t/this.synthSampleRate,n=Math.sin(2*Math.PI*220*e),i=Math.sin(2*Math.PI*2200*e);return .5*n+.35*i}stepSynthSample(){const t=this.synthN++,e=this.synthTestSignal(t);let n;if(this.preset==="tremolo")n=e*Math.cos(2*Math.PI*this.tremoloRateHz*t/this.synthSampleRate);else if(this.preset==="delay"){const i=Math.min(this.synthDelayBuffer.length-1,Math.max(1,Math.round(this.delayTimeMs/1e3*this.synthSampleRate))),s=this.synthDelayBuffer,r=(this.synthDelayWriteIdx-i+s.length)%s.length,o=s[r],l=e+this.delayFeedback*o;s[this.synthDelayWriteIdx]=l,this.synthDelayWriteIdx=(this.synthDelayWriteIdx+1)%s.length,n=e+this.delayWetMix*o}else{const i=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz,s=Math.min(i,this.synthSampleRate*.45),r=this.biquadCoeffs(this.preset,s,this.synthSampleRate),o=this.synthState;n=r.b0*e+r.b1*o.x1+r.b2*o.x2-r.a1*o.y1-r.a2*o.y2,o.x2=o.x1,o.x1=e,o.y2=o.y1,o.y1=n}this.synthTrail.push({x:e,y:n}),this.synthTrail.length>this.synthTrailMax&&this.synthTrail.shift()}async loadDefaultAudio(){var e;const t=cn("audio")??"audio/Linux.wav";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext());const i=await(await fetch(qn(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(i),this.sampleRate=this.originalBuffer.sampleRate,this.cacheStaticSpectrum(),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),this.statusEl.textContent=`${t.split("/").pop()} · ${this.originalBuffer.duration.toFixed(1)}s`}catch{this.statusEl.textContent="Upload audio to audition"}}async handleUpload(t){var e;this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate,this.cacheStaticSpectrum(),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),this.statusEl.textContent=`${t.name} · ${this.originalBuffer.duration.toFixed(1)}s`}cacheStaticSpectrum(){if(!this.originalBuffer)return;const t=this.originalBuffer.getChannelData(0),e=4096,n=Math.floor(t.length/2);this.origSpectrumStatic=this.fftMag(t.slice(n,n+e),e)}applyLiveParams(){var t,e;if(this.preset==="tremolo"){(t=this.dspNode)==null||t.port.postMessage({type:"setMode",mode:"amplitude-mod"}),(e=this.dspNode)==null||e.port.postMessage({type:"setModulation",frequency:this.tremoloRateHz});return}if(this.preset==="delay"){this.delayNode&&this.audioCtx&&this.delayNode.delayTime.setTargetAtTime(this.delayTimeMs/1e3,this.audioCtx.currentTime,.01),this.delayFeedbackGain&&(this.delayFeedbackGain.gain.value=this.delayFeedback);return}if(this.biquadNode&&this.audioCtx){this.biquadNode.type=this.preset==="lowpass"?"lowpass":"highpass";const n=this.preset==="lowpass"?this.lowpassCutoffHz:this.highpassCutoffHz;this.biquadNode.frequency.setValueAtTime(n,this.audioCtx.currentTime),this.biquadNode.Q.value=Math.SQRT1_2}}async startPlayback(t){var e;if(this.stopAudio(!1),!this.originalBuffer||!this.audioCtx){this.statusEl.textContent="Upload audio first";return}this.playMode=t,this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserFreqData=new Float32Array(this.analyserNode.frequencyBinCount),this.postTimeData=new Float32Array(this.analyserNode.fftSize),this.preAnalyserNode=this.audioCtx.createAnalyser(),this.preAnalyserNode.fftSize=4096,this.preTimeData=new Float32Array(this.preAnalyserNode.fftSize),this.preSilentGain=this.audioCtx.createGain(),this.preSilentGain.gain.value=0,this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=.85,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=this.loop,this.sourceNode.connect(this.preAnalyserNode),this.preAnalyserNode.connect(this.preSilentGain),this.preSilentGain.connect(this.audioCtx.destination),t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.preset==="tremolo"?(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[1]}),this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.analyserNode)):this.preset==="delay"?(this.delayNode=this.audioCtx.createDelay(2),this.delayFeedbackGain=this.audioCtx.createGain(),this.delayWetGain=this.audioCtx.createGain(),this.delayWetGain.gain.value=this.delayWetMix,this.delayDryGain=this.audioCtx.createGain(),this.delayDryGain.gain.value=1,this.sourceNode.connect(this.delayDryGain),this.delayDryGain.connect(this.analyserNode),this.sourceNode.connect(this.delayNode),this.delayNode.connect(this.delayWetGain),this.delayWetGain.connect(this.analyserNode),this.delayNode.connect(this.delayFeedbackGain),this.delayFeedbackGain.connect(this.delayNode)):(this.biquadNode=this.audioCtx.createBiquadFilter(),this.sourceNode.connect(this.biquadNode),this.biquadNode.connect(this.analyserNode)),this.applyLiveParams(),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.isPlaying=!0,(e=this.transportBar)==null||e.setPlaying(!0)}pauseAudio(){var t,e;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.audioCtx.currentTime-this.playbackStartedAt,this.teardownNodes(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt))}stopAudio(t){var e,n;this.teardownNodes(),this.isPlaying=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)}teardownNodes(){var t,e,n,i,s,r,o,l,c,h,u,d;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.dspNode)==null||n.disconnect(),(i=this.biquadNode)==null||i.disconnect(),(s=this.delayNode)==null||s.disconnect(),(r=this.delayFeedbackGain)==null||r.disconnect(),(o=this.delayWetGain)==null||o.disconnect(),(l=this.delayDryGain)==null||l.disconnect(),(c=this.analyserNode)==null||c.disconnect(),(h=this.gainNode)==null||h.disconnect(),(u=this.preAnalyserNode)==null||u.disconnect(),(d=this.preSilentGain)==null||d.disconnect(),this.sourceNode=null,this.dspNode=null,this.biquadNode=null,this.delayNode=null,this.delayFeedbackGain=null,this.delayWetGain=null,this.delayDryGain=null,this.analyserNode=null,this.gainNode=null,this.preAnalyserNode=null,this.preSilentGain=null}seek(t){this.originalBuffer&&(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}drawXYPlot(){const t=this.xyCanvas,e=t.getContext("2d"),n=window.devicePixelRatio||1,i=t.width/n,s=t.height/n,r=24,o=i-r*2,l=s-r*2,c=r+o/2,h=r+l/2;e.fillStyle="rgba(4,5,10,0.16)",e.fillRect(0,0,i,s),e.strokeStyle="rgba(255,255,255,0.12)",e.lineWidth=1,e.strokeRect(r,r,o,l),e.beginPath(),e.moveTo(r,h),e.lineTo(r+o,h),e.moveTo(c,r),e.lineTo(c,r+l),e.strokeStyle="rgba(255,255,255,0.08)",e.stroke();const u=this.synthTrail,d=u.length;for(let f=0;f<d;f++){const{x:g,y:_}=u[f],p=c+Math.max(-1,Math.min(1,g))*(o/2),m=h-Math.max(-1,Math.min(1,_))*(l/2),y=f/d;e.fillStyle=`rgba(82,207,254,${(.12+y*.75).toFixed(2)})`,e.fillRect(p-1,m-1,2,2)}e.fillStyle="rgba(255,255,255,0.3)",e.font="8px JetBrains Mono",e.textAlign="center",e.fillText("x[n]",r+o/2,s-6),e.save(),e.translate(9,r+l/2),e.rotate(-Math.PI/2),e.fillText("y[n]",0,0),e.restore(),e.textAlign="right",e.fillStyle="rgba(120,220,140,0.75)",e.fillText(`t = ${(this.synthN/this.synthSampleRate).toFixed(1)}s`,i-6,10)}drawScope(){const t=this.scopeCanvas,e=t.getContext("2d"),n=window.devicePixelRatio||1,i=t.width/n,s=t.height/n;e.fillStyle="#04050a",e.fillRect(0,0,i,s);const r=s/2;if(e.strokeStyle="rgba(255,255,255,0.08)",e.beginPath(),e.moveTo(0,r),e.lineTo(i,r),e.stroke(),!this.preAnalyserNode||!this.analyserNode||!this.preTimeData||!this.postTimeData){e.fillStyle="rgba(255,255,255,0.3)",e.font="10px JetBrains Mono",e.textAlign="center",e.fillText("Play audio to see the scope",i/2,r);return}this.preAnalyserNode.getFloatTimeDomainData(this.preTimeData),this.analyserNode.getFloatTimeDomainData(this.postTimeData);const o=(l,c,h,u)=>{const d=l.length,f=Math.max(1,Math.floor(d/i));e.beginPath(),e.lineWidth=u,e.strokeStyle=`rgba(${c},${h})`;let g=!0;for(let _=0;_<d;_+=f){const p=_/d*i,m=r-l[_]*(s*.42);g?(e.moveTo(p,m),g=!1):e.lineTo(p,m)}e.stroke()};o(this.preTimeData,"170,180,195",.55,1.25),o(this.postTimeData,"82,207,254",.9,1.5),e.font="8px JetBrains Mono",e.textAlign="left",e.fillStyle="rgba(220,224,232,0.85)",e.fillText("before",8,12),e.fillStyle="rgba(82,207,254,0.9)",e.fillText("after",8,24)}drawSpectrumLinear(){const t=this.spectrumCanvas,e=t.getContext("2d"),n=window.devicePixelRatio||1,i=t.width/n,s=t.height/n,r={l:40,r:12,t:20,b:18},o=i-r.l-r.r,l=s-r.t-r.b;e.fillStyle="#04050a",e.fillRect(0,0,i,s);const c=(u,d,f,g)=>{let _=1e-9;const p=u.length;for(let m=0;m<p;m++){const y=d?Math.pow(10,u[m]/20):u[m];_=Math.max(_,y)}e.beginPath(),e.moveTo(r.l,r.t+l);for(let m=1;m<p;m++){const y=d?Math.pow(10,u[m]/20):u[m],v=r.l+m/(p-1)*o,S=r.t+l-y/_*l;e.lineTo(v,S)}e.lineTo(r.l+o,r.t+l),e.closePath(),e.fillStyle=`rgba(${f},${g})`,e.fill()};this.origSpectrumStatic&&c(this.origSpectrumStatic,!1,"180,180,180",.25),this.analyserNode&&this.analyserFreqData&&(this.analyserNode.getFloatFrequencyData(this.analyserFreqData),c(this.analyserFreqData,!0,"82,207,254",.65)),e.fillStyle="rgba(255,255,255,0.25)",e.font="8px JetBrains Mono",e.textAlign="center";const h=this.sampleRate/2;[0,.25,.5,.75,1].forEach(u=>{const d=u*h;e.fillText(d>=1e3?`${(d/1e3).toFixed(1)}k`:`${d.toFixed(0)}`,r.l+u*o,s-4)})}fftMag(t,e){const n=new Float64Array(e),i=new Float64Array(e);for(let l=0;l<e&&l<t.length;l++){const c=.5*(1-Math.cos(2*Math.PI*l/(e-1)));n[l]=t[l]*c}const s=e;let r=0;for(let l=1;l<s;l++){let c=s>>1;for(;r&c;c>>=1)r^=c;r^=c,l<r&&([n[l],n[r]]=[n[r],n[l]],[i[l],i[r]]=[i[r],i[l]])}for(let l=2;l<=s;l<<=1){const c=Math.cos(-2*Math.PI/l),h=Math.sin(-2*Math.PI/l);for(let u=0;u<s;u+=l){let d=1,f=0;for(let g=0;g<l/2;g++){const _=n[u+g],p=i[u+g],m=n[u+g+l/2]*d-i[u+g+l/2]*f,y=n[u+g+l/2]*f+i[u+g+l/2]*d;n[u+g]=_+m,i[u+g]=p+y,n[u+g+l/2]=_-m,i[u+g+l/2]=p-y;const v=d*c-f*h;f=d*h+f*c,d=v}}}const o=new Float32Array(e/2);for(let l=0;l<e/2;l++)o[l]=Math.sqrt(n[l]*n[l]+i[l]*i[l])/e;return o}startAnimation(){const t=e=>{var s;this.synthLastFrameMs===null&&(this.synthLastFrameMs=e);const n=Math.min(250,e-this.synthLastFrameMs);this.synthLastFrameMs=e;const i=Math.max(1,Math.round(n/1e3*this.synthSampleRate));for(let r=0;r<i;r++)this.stepSynthSample();this.isPlaying&&this.audioCtx&&this.originalBuffer&&(this.pausedAt=Math.min(this.audioCtx.currentTime-this.playbackStartedAt,this.originalBuffer.duration),(s=this.waveformTimeline)==null||s.setPlayhead(this.pausedAt)),this.drawXYPlot(),this.drawScope(),this.drawSpectrumLinear(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),window.removeEventListener("resize",this.onResize),document.body.style.overflowY=""}}function bm(a,t,e=5){const n=new Float64Array(t),i=t-1;for(let s=0;s<t;s++)if(a==="rectangular")n[s]=1;else if(a==="hann")n[s]=.5*(1-Math.cos(2*Math.PI*s/i));else if(a==="hamming")n[s]=.54-.46*Math.cos(2*Math.PI*s/i);else if(a==="blackman")n[s]=.42-.5*Math.cos(2*Math.PI*s/i)+.08*Math.cos(4*Math.PI*s/i);else{const r=2*s/i-1;n[s]=ko(e*Math.sqrt(Math.max(0,1-r*r)))/ko(e)}return n}function ko(a){let t=1,e=1;for(let n=1;n<24&&(e*=a*a/(4*n*n),t+=e,!(e<1e-12));n++);return t}function yl(a){return a>50?.1102*(a-8.7):a>=21?.5842*Math.pow(a-21,.4)+.07886*(a-21):0}function Sl(a){const t=Math.max(1,a.fstop-a.fp),e=Math.ceil((a.asDb-7.95)/(2.285*(2*Math.PI*t/a.fs))),n=Math.ceil(a.asDb*a.fs/(22*t)),i=Math.max(e,n,15);return i%2===0?i+1:i}function Em(a,t,e){let n=e??Sl(a);n=Math.max(3,n%2===0?n+1:n);const i=(a.fp+a.fstop)/2,s=t==="kaiser"?yl(a.asDb):5,r=bm(t,n,s),o=new Array(n),l=(n-1)/2,c=2*Math.PI*i/a.fs;for(let u=0;u<n;u++){const d=u-l,f=d===0?c/Math.PI:Math.sin(c*d)/(Math.PI*d);o[u]=f*r[u]}const h=o.reduce((u,d)=>u+d,0);if(Math.abs(h)>1e-12)for(let u=0;u<o.length;u++)o[u]/=h;return{b:o,a:[1],order:n-1,methodLabel:`FIR · window ${t}`,window:t}}function wm(a,t,e,n){const i=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),o=n/2;for(let l=0;l<e;l++){const c=l/(e-1)*o;i[l]=c;const h=2*Math.PI*c/n,{re:u,im:d}=Tm(h,a,t),f=Math.sqrt(u*u+d*d);s[l]=20*Math.log10(Math.max(f,1e-12)),r[l]=Math.atan2(d,u)}return{freqs:i,magDb:s,phase:r}}function Tm(a,t,e){const n=o=>{let l=0,c=0;for(let h=0;h<o.length;h++){const u=-a*h;l+=o[h]*Math.cos(u),c+=o[h]*Math.sin(u)}return{re:l,im:c}},i=n(t),s=n(e),r=s.re*s.re+s.im*s.im;return r<1e-20?{re:1,im:0}:{re:(i.re*s.re+i.im*s.im)/r,im:(i.im*s.re-i.re*s.im)/r}}const Am=[{value:"rectangular",label:"Rectangular"},{value:"hann",label:"Hann"},{value:"hamming",label:"Hamming"},{value:"blackman",label:"Blackman"},{value:"kaiser",label:"Kaiser"}];class Cm{constructor(t){x(this,"container");x(this,"animId",null);x(this,"sharedAudio",Ze.getInstance());x(this,"audioCtx",null);x(this,"originalBuffer",null);x(this,"sourceNode",null);x(this,"dspNode",null);x(this,"gainNode",null);x(this,"analyserNode",null);x(this,"analyserData",null);x(this,"origSpectrumStatic",null);x(this,"isPlaying",!1);x(this,"playMode","filtered");x(this,"playbackStartedAt",0);x(this,"pausedAt",0);x(this,"loop",!1);x(this,"specs",{fs:Ai("Fs",1e4),fp:Ai("fp",1250),fstop:Ai("fs",3500),asDb:Ai("As",45),apDb:Ai("Ap",.077)});x(this,"windowType","hamming");x(this,"autoTaps",!0);x(this,"manualTaps",51);x(this,"designed",null);x(this,"magDb",new Float32Array(512));x(this,"measuredAs",0);x(this,"measuredAp",0);x(this,"transportBar");x(this,"waveformTimeline");x(this,"statusEl");x(this,"responseCanvas");x(this,"spectrumCanvas");x(this,"badgeEl");x(this,"info");x(this,"tapsSlider");x(this,"tapsRow");x(this,"autoTapsCheckbox");x(this,"betaEl");x(this,"windowButtons",new Map);x(this,"dragging",null);x(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.buildUI(),this.redesign(),window.addEventListener("resize",this.onResize),this.resizeLayout(),this.startAnimation(),this.loadDefaultAudio()}buildUI(){document.body.style.overflowY="auto",this.container.innerHTML="",this.container.style.cssText="display:flex;flex-direction:column;gap:6px;max-width:960px;margin:0 auto;";const t=document.createElement("div");if(t.style.cssText="padding:2px 2px 4px;color:rgba(255,255,255,0.55);font:12px/1.5 'JetBrains Mono',monospace;",t.innerHTML='<b style="color:#e8eef8;">ECG Denoising · FIR Lowpass (Window Method)</b><br/>Drag the <span style="color:#7adc8c">green</span> / <span style="color:#ff869a">red</span> guides on the plot below to set fp / fstop / As. Keep the gold response curve out of the red keep-out zones, then hit play.',this.container.appendChild(t),xt("transport",!0)){this.transportBar=new Yn({onPlay:()=>void this.startPlayback(this.playMode),onPause:()=>this.pauseAudio(),onStop:()=>this.stopAudio(!0),onUpload:u=>void this.handleUpload(u),uploadLabel:"Upload ECG.wav",showUpload:xt("upload",!0),onLoopToggle:u=>{this.loop=u,this.sourceNode&&(this.sourceNode.loop=u)}}),this.statusEl=document.createElement("span"),this.statusEl.className="transport-status",this.statusEl.textContent="Generating synthetic ECG + 5 kHz noise…",this.transportBar.getElement().querySelector(".transport-left").appendChild(this.statusEl);const h=document.createElement("div");h.style.cssText="display:flex;gap:4px;margin-left:8px;",["original","filtered"].forEach(u=>{const d=document.createElement("button");d.className="transport-mode-btn"+(u===this.playMode?" active":""),d.textContent=u==="original"?"Noisy":"Filtered",d.addEventListener("click",()=>{this.playMode=u,h.querySelectorAll(".transport-mode-btn").forEach(f=>f.classList.toggle("active",f===d)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(u))}),h.appendChild(d)}),this.transportBar.getElement().querySelector(".transport-left").appendChild(h),this.container.appendChild(this.transportBar.getElement())}xt("waveform",!0)&&(this.waveformTimeline=new Xn({width:900,height:56,title:"ECG · TIME DOMAIN"},h=>this.seek(h)),this.container.appendChild(this.waveformTimeline.getElement())),this.badgeEl=document.createElement("div"),this.badgeEl.style.cssText="padding:8px 12px;border-radius:6px;font:700 12px 'JetBrains Mono',monospace;letter-spacing:.03em;text-align:center;transition:background .15s,color .15s;",this.container.appendChild(this.badgeEl);const e=this.makePanel("MAGNITUDE RESPONSE · dB — drag the guides");this.responseCanvas=this.makeCanvas2D(e,900,220),this.attachDragHandlers(),this.container.appendChild(e);const n=this.makePanel("DESIGN CONTROLS"),i=document.createElement("div");i.style.cssText="padding:24px 12px 12px;",n.appendChild(i);const s=document.createElement("div");s.style.cssText="display:flex;gap:4px;align-items:center;flex-wrap:wrap;margin-bottom:10px;";const r=document.createElement("span");r.textContent="Window:",r.style.cssText="font:9px 'JetBrains Mono',monospace;color:rgba(255,255,255,0.45);margin-right:4px;",s.appendChild(r),Am.forEach(({value:h,label:u})=>{const d=document.createElement("button");d.className="vst-button transport-mode-btn",d.textContent=u,d.style.fontSize="10px",h===this.windowType&&d.classList.add("active"),d.addEventListener("click",()=>{this.windowType=h,this.windowButtons.forEach((f,g)=>f.classList.toggle("active",g===h)),this.betaEl.style.display=h==="kaiser"?"inline":"none",this.redesign()}),this.windowButtons.set(h,d),s.appendChild(d)}),this.betaEl=document.createElement("span"),this.betaEl.style.cssText="font:10px 'JetBrains Mono',monospace;color:#52cffe;margin-left:8px;display:none;",s.appendChild(this.betaEl),i.appendChild(s);const o=document.createElement("label");o.style.cssText="display:flex;align-items:center;gap:6px;font:10px 'JetBrains Mono',monospace;color:rgba(255,255,255,0.6);margin-bottom:4px;cursor:pointer;",this.autoTapsCheckbox=document.createElement("input"),this.autoTapsCheckbox.type="checkbox",this.autoTapsCheckbox.checked=this.autoTaps,this.autoTapsCheckbox.addEventListener("change",()=>{this.autoTaps=this.autoTapsCheckbox.checked,this.tapsRow.style.opacity=this.autoTaps?"0.4":"1",this.tapsRow.style.pointerEvents=this.autoTaps?"none":"auto",this.redesign()}),o.append(this.autoTapsCheckbox,document.createTextNode("Auto tap count (Kaiser formula) — uncheck to explore manually")),i.appendChild(o),this.tapsRow=document.createElement("div"),this.tapsRow.style.opacity="0.4",this.tapsRow.style.pointerEvents="none",this.tapsSlider=new As({min:3,max:400,value:this.manualTaps,step:2,label:"Filter length N (taps)",unit:"taps"},h=>{this.manualTaps=Math.round(h)%2===0?Math.round(h)+1:Math.round(h),this.redesign()}),this.tapsRow.appendChild(this.tapsSlider.getElement()),i.appendChild(this.tapsRow),this.container.appendChild(n);const l=[{label:"Taps (N)",value:"—"},{label:"Order",value:"—"},{label:"Group delay",value:"—"},{label:"Transition width",value:"—"},{label:"Stopband atten. (achieved)",value:"—"},{label:"Passband ripple (achieved)",value:"—"}];this.info=new hr(l),this.container.appendChild(this.info.getElement());const c=this.makePanel("SPECTRUM · gray = noisy ECG · cyan = live filtered output");this.spectrumCanvas=this.makeCanvas2D(c,900,120),this.container.appendChild(c)}makePanel(t){const e=document.createElement("div");e.style.cssText="background:#080b10;border:1px solid #1e2530;border-radius:6px;overflow:hidden;position:relative;margin-bottom:6px;";const n=document.createElement("div");return n.style.cssText="position:absolute;top:4px;left:8px;font-size:7px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,0.35);text-transform:uppercase;z-index:2;",n.textContent=t,e.appendChild(n),e}makeCanvas2D(t,e,n){const i=window.devicePixelRatio||1,s=document.createElement("canvas");return s.width=e*i,s.height=n*i,s.style.width=`${e}px`,s.style.height=`${n}px`,s.style.display="block",s.getContext("2d").scale(i,i),t.appendChild(s),s}resizeCanvas(t,e,n){const i=window.devicePixelRatio||1;t.width=e*i,t.height=n*i,t.style.width=`${e}px`,t.style.height=`${n}px`;const s=t.getContext("2d");s.setTransform(1,0,0,1,0,0),s.scale(i,i)}resizeLayout(){var e;const t=Math.max(640,this.container.clientWidth-2);(e=this.waveformTimeline)==null||e.resize(t,56),this.resizeCanvas(this.responseCanvas,t,220),this.resizeCanvas(this.spectrumCanvas,t,120)}plotGeometry(){const t=window.devicePixelRatio||1,e=this.responseCanvas.width/t,n=this.responseCanvas.height/t,i={l:46,r:14,t:22,b:24};return{W:e,H:n,pad:i,pW:e-i.l-i.r,pH:n-i.t-i.b}}freqToX(t){const{pad:e,pW:n}=this.plotGeometry();return e.l+t/(this.specs.fs/2)*n}xToFreq(t){const{pad:e,pW:n}=this.plotGeometry(),i=this.specs.fs/2;return Math.max(0,Math.min(i,(t-e.l)/n*i))}dbRange(){let t=-90;const e=5;for(let n=0;n<this.magDb.length;n++)t=Math.min(t,this.magDb[n]);return{minDb:t,maxDb:e}}dbToY(t){const{pad:e,pH:n}=this.plotGeometry(),{minDb:i,maxDb:s}=this.dbRange();return e.t+n-(t-i)/(s-i)*n}yToDb(t){const{pad:e,pH:n}=this.plotGeometry(),{minDb:i,maxDb:s}=this.dbRange();return s-(t-e.t)/n*(s-i)}attachDragHandlers(){const t=this.responseCanvas,e=10,n=(r,o)=>{const l=this.freqToX(this.specs.fp),c=this.freqToX(this.specs.fstop),h=this.dbToY(-this.specs.asDb),{pad:u,pH:d}=this.plotGeometry();return Math.abs(r-l)<e?{kind:"fp"}:Math.abs(r-c)<e?{kind:"fstop"}:Math.abs(o-h)<e&&r>u.l&&r<u.l+this.plotGeometry().pW?{kind:"as"}:null},i=r=>{const o=t.getBoundingClientRect();return{x:r.clientX-o.left,y:r.clientY-o.top}};t.addEventListener("pointerdown",r=>{const{x:o,y:l}=i(r),c=n(o,l);c&&(this.dragging=c,t.setPointerCapture(r.pointerId),t.style.cursor=c.kind==="as"?"ns-resize":"ew-resize")}),t.addEventListener("pointermove",r=>{const{x:o,y:l}=i(r);if(!this.dragging){const h=n(o,l);t.style.cursor=h?h.kind==="as"?"ns-resize":"ew-resize":"default";return}const c=this.specs.fs/2;this.dragging.kind==="fp"?this.specs.fp=Math.max(10,Math.min(this.specs.fstop-20,this.xToFreq(o))):this.dragging.kind==="fstop"?this.specs.fstop=Math.max(this.specs.fp+20,Math.min(c-5,this.xToFreq(o))):this.dragging.kind==="as"&&(this.specs.asDb=Math.max(6,Math.min(100,-this.yToDb(l)))),this.redesign()});const s=r=>{this.dragging&&(this.dragging=null,t.releasePointerCapture(r.pointerId)),t.style.cursor="default"};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s)}redesign(){const t=this.specs,e=Sl(t),n=this.autoTaps?e:this.manualTaps;this.designed=Em(t,this.windowType,n),this.windowType==="kaiser"&&(this.betaEl.textContent=`β = ${yl(t.asDb).toFixed(2)}`);const i=wm(this.designed.b,this.designed.a,512,t.fs);this.magDb=new Float32Array(i.magDb);let s=-1/0,r=-1/0,o=1/0;for(let f=0;f<i.freqs.length;f++){const g=i.freqs[f];g>=t.fstop&&(s=Math.max(s,i.magDb[f])),g<=t.fp&&(r=Math.max(r,i.magDb[f]),o=Math.min(o,i.magDb[f]))}this.measuredAs=-s,this.measuredAp=Math.max(0,r)-Math.min(0,o);const l=this.designed.b.length,c=(l-1)/2,h=c/t.fs*1e3,u=t.fstop-t.fp,d=this.measuredAs>=t.asDb&&this.measuredAp<=t.apDb;this.info.updateItem("Taps (N)",`${l}${this.autoTaps?" (auto)":" (manual)"}`),this.info.updateItem("Order",`${this.designed.order}`),this.info.updateItem("Group delay",`${c} samples · ${h.toFixed(2)} ms`),this.info.updateItem("Transition width",`${u.toFixed(0)} Hz`),this.info.updateItem("Stopband atten. (achieved)",`${this.measuredAs.toFixed(1)} dB (need ≥ ${t.asDb} dB)`,this.measuredAs<t.asDb),this.info.updateItem("Passband ripple (achieved)",`${this.measuredAp.toFixed(3)} dB (need ≤ ${t.apDb} dB)`,this.measuredAp>t.apDb),this.tapsSlider.setValue(this.manualTaps),this.badgeEl.textContent=d?`✓ SPEC MET — ${l}-tap ${this.windowType} filter clears both keep-out zones`:"✗ SPEC NOT MET — widen the filter (more taps) or relax the guides",this.badgeEl.style.background=d?"rgba(120,220,140,0.14)":"rgba(255,100,80,0.14)",this.badgeEl.style.color=d?"#7adc8c":"#ff6450",this.badgeEl.style.border=`1px solid ${d?"rgba(122,220,140,0.4)":"rgba(255,100,80,0.4)"}`,this.dspNode&&this.dspNode.port.postMessage({type:"setIIR",b:this.designed.b,a:this.designed.a})}async loadDefaultAudio(){const t=cn("audio");if(this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),t)try{const n=await(await fetch(qn(t))).arrayBuffer();this.originalBuffer=await this.sharedAudio.decodeAudioData(n),this.finishLoad(t.split("/").pop()??"audio");return}catch{}this.originalBuffer=await this.generateSyntheticEcg(),this.finishLoad("synthetic ECG + 5 kHz noise")}finishLoad(t){var e;this.originalBuffer&&(this.cacheStaticSpectrum(),(e=this.waveformTimeline)==null||e.setWaveformFromBuffer(this.originalBuffer),this.statusEl.textContent=`${t} · ${this.originalBuffer.duration.toFixed(1)}s @ ${this.originalBuffer.sampleRate}Hz`)}async generateSyntheticEcg(){const t=this.specs.fs,n=Math.floor(t*4),i=await this.sharedAudio.createBuffer(1,n,t),s=i.getChannelData(0),o=60/72,l=(h,u,d,f)=>f*Math.exp(-((h-u)*(h-u))/(2*d*d));for(let h=0;h<n;h++){const u=h/t,d=u%o;let f=0;f+=l(d,.09,.012,.12),f+=l(d,.16,.006,-.18),f+=l(d,.18,.006,1),f+=l(d,.2,.008,-.28),f+=l(d,.32,.03,.28),f+=.02*Math.sin(2*Math.PI*.3*u),f+=.18*Math.sin(2*Math.PI*5e3*u),s[h]=f}let c=1e-6;for(let h=0;h<n;h++)c=Math.max(c,Math.abs(s[h]));for(let h=0;h<n;h++)s[h]/=c*1.05;return i}async handleUpload(t){this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await t.arrayBuffer()),this.specs.fs=this.originalBuffer.sampleRate,this.redesign(),this.finishLoad(t.name)}cacheStaticSpectrum(){if(!this.originalBuffer)return;const t=this.originalBuffer.getChannelData(0),e=4096,n=Math.floor(t.length/2);this.origSpectrumStatic=this.fftMag(t.slice(n,n+e),e)}async startPlayback(t){var e;this.stopAudio(!1),!(!this.originalBuffer||!this.audioCtx||!this.designed)&&(this.playMode=t,this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserData=new Float32Array(this.analyserNode.frequencyBinCount),this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=.85,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=this.loop,t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[1]}),this.dspNode.port.postMessage({type:"setMode",mode:"iir"}),this.dspNode.port.postMessage({type:"setIIR",b:this.designed.b,a:this.designed.a}),this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.isPlaying=!0,(e=this.transportBar)==null||e.setPlaying(!0))}pauseAudio(){var t;!this.isPlaying||!this.audioCtx||(this.pausedAt=this.audioCtx.currentTime-this.playbackStartedAt,this.teardownNodes(),this.isPlaying=!1,(t=this.transportBar)==null||t.setPlaying(!1))}stopAudio(t){var e,n;this.teardownNodes(),this.isPlaying=!1,t&&(this.pausedAt=0),(e=this.transportBar)==null||e.setPlaying(!1),(n=this.waveformTimeline)==null||n.setPlayhead(this.pausedAt)}teardownNodes(){var t,e,n,i,s;try{(t=this.sourceNode)==null||t.stop()}catch{}(e=this.sourceNode)==null||e.disconnect(),(n=this.dspNode)==null||n.disconnect(),(i=this.analyserNode)==null||i.disconnect(),(s=this.gainNode)==null||s.disconnect(),this.sourceNode=null,this.dspNode=null,this.analyserNode=null,this.gainNode=null}seek(t){this.originalBuffer&&(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}drawResponse(){const e=this.responseCanvas.getContext("2d"),{W:n,H:i,pad:s,pW:r,pH:o}=this.plotGeometry(),l=this.specs;e.fillStyle="#04050a",e.fillRect(0,0,n,i);const{minDb:c,maxDb:h}=this.dbRange();e.strokeStyle="rgba(255,255,255,0.05)",e.fillStyle="rgba(255,255,255,0.25)",e.font="8px JetBrains Mono",e.textAlign="right";for(let y=Math.ceil(c/20)*20;y<=h;y+=20){const v=this.dbToY(y);e.beginPath(),e.moveTo(s.l,v),e.lineTo(s.l+r,v),e.stroke(),e.fillText(`${y}`,s.l-5,v+3)}const u=this.freqToX(l.fp),d=this.freqToX(l.fstop),f=this.dbToY(-l.apDb),g=this.dbToY(-l.asDb),_=s.t;e.fillStyle="rgba(255,100,80,0.10)",e.fillRect(s.l,f,u-s.l,s.t+o-f),e.fillRect(d,_,s.l+r-d,g-_);const p=(y,v,S)=>{e.strokeStyle=v,e.lineWidth=2,e.setLineDash([]),e.beginPath(),e.moveTo(y,s.t),e.lineTo(y,s.t+o),e.stroke(),e.fillStyle=v,e.font="700 9px JetBrains Mono",e.textAlign="center",e.fillText(S,y,s.t-8)};p(u,"#7adc8c",`fp ${Math.round(l.fp)}Hz`),p(d,"#ff869a",`fstop ${Math.round(l.fstop)}Hz`),e.strokeStyle="#ff869a",e.lineWidth=2,e.setLineDash([5,4]),e.beginPath(),e.moveTo(s.l,g),e.lineTo(s.l+r,g),e.stroke(),e.setLineDash([]),e.fillStyle="#ff869a",e.textAlign="left",e.fillText(`-${l.asDb.toFixed(0)}dB (As)`,s.l+r-90,g-5),e.strokeStyle="rgba(122,220,140,0.5)",e.setLineDash([2,3]),e.beginPath(),e.moveTo(s.l,f),e.lineTo(u,f),e.stroke(),e.setLineDash([]),e.beginPath();for(let y=0;y<this.magDb.length;y++){const v=s.l+y/(this.magDb.length-1)*r,S=this.dbToY(this.magDb[y]);y===0?e.moveTo(v,S):e.lineTo(v,S)}e.strokeStyle="#ffd700",e.lineWidth=2,e.shadowColor="#ffd700",e.shadowBlur=4,e.stroke(),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.3)",e.textAlign="center";const m=l.fs/2;[0,.25,.5,.75,1].forEach(y=>{const v=y*m;e.fillText(v>=1e3?`${(v/1e3).toFixed(1)}k`:`${v.toFixed(0)}`,s.l+y*r,i-6)})}drawSpectrum(){const t=this.spectrumCanvas,e=t.getContext("2d"),n=window.devicePixelRatio||1,i=t.width/n,s=t.height/n,r={l:40,r:12,t:18,b:18},o=i-r.l-r.r,l=s-r.t-r.b;e.fillStyle="#04050a",e.fillRect(0,0,i,s);const c=(d,f,g,_)=>{let p=1e-9;for(let m=0;m<d.length;m++){const y=f?Math.pow(10,d[m]/20):d[m];p=Math.max(p,y)}e.beginPath(),e.moveTo(r.l,r.t+l);for(let m=1;m<d.length;m++){const y=f?Math.pow(10,d[m]/20):d[m],v=r.l+m/(d.length-1)*o,S=r.t+l-y/p*l;e.lineTo(v,S)}e.closePath(),e.fillStyle=`rgba(${g},${_})`,e.fill()};this.origSpectrumStatic&&c(this.origSpectrumStatic,!1,"180,180,180",.25),this.analyserNode&&this.analyserData&&(this.analyserNode.getFloatFrequencyData(this.analyserData),c(this.analyserData,!0,"82,207,254",.65));const h=this.specs.fs/2,u=r.l+Math.min(1,5e3/h)*o;5e3<=h&&(e.strokeStyle="rgba(255,100,80,0.4)",e.setLineDash([3,3]),e.beginPath(),e.moveTo(u,r.t),e.lineTo(u,r.t+l),e.stroke(),e.setLineDash([]),e.fillStyle="rgba(255,100,80,0.6)",e.font="8px JetBrains Mono",e.textAlign="center",e.fillText("5kHz noise",u,r.t-4)),e.fillStyle="rgba(255,255,255,0.25)",e.font="8px JetBrains Mono",e.textAlign="center",[0,.25,.5,.75,1].forEach(d=>{const f=d*h;e.fillText(f>=1e3?`${(f/1e3).toFixed(1)}k`:`${f.toFixed(0)}`,r.l+d*o,s-4)})}fftMag(t,e){const n=new Float64Array(e),i=new Float64Array(e);for(let l=0;l<e&&l<t.length;l++)n[l]=t[l];const s=e;let r=0;for(let l=1;l<s;l++){let c=s>>1;for(;r&c;c>>=1)r^=c;r^=c,l<r&&([n[l],n[r]]=[n[r],n[l]],[i[l],i[r]]=[i[r],i[l]])}for(let l=2;l<=s;l<<=1){const c=Math.cos(-2*Math.PI/l),h=Math.sin(-2*Math.PI/l);for(let u=0;u<s;u+=l){let d=1,f=0;for(let g=0;g<l/2;g++){const _=n[u+g],p=i[u+g],m=n[u+g+l/2]*d-i[u+g+l/2]*f,y=n[u+g+l/2]*f+i[u+g+l/2]*d;n[u+g]=_+m,i[u+g]=p+y,n[u+g+l/2]=_-m,i[u+g+l/2]=p-y;const v=d*c-f*h;f=d*h+f*c,d=v}}}const o=new Float32Array(e/2);for(let l=0;l<e/2;l++)o[l]=Math.sqrt(n[l]*n[l]+i[l]*i[l])/e;return o}startAnimation(){const t=()=>{var e;this.isPlaying&&this.audioCtx&&this.originalBuffer&&(this.pausedAt=Math.min(this.audioCtx.currentTime-this.playbackStartedAt,this.originalBuffer.duration),(e=this.waveformTimeline)==null||e.setPlayhead(this.pausedAt)),this.drawResponse(),this.drawSpectrum(),this.animId=requestAnimationFrame(t)};this.animId=requestAnimationFrame(t)}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(!0),window.removeEventListener("resize",this.onResize),document.body.style.overflowY=""}}class yn{constructor(t,e){x(this,"root");x(this,"content");this.root=document.createElement("div"),this.root.className="demo-shell";const n=document.createElement("div");n.className="demo-shell-toolbar";const i=document.createElement("button");i.className="back-button",i.textContent="← Back",i.onclick=e;const s=document.createElement("div");s.className="demo-shell-title",s.textContent=t,n.append(i,s),this.content=document.createElement("div"),this.content.className="demo-shell-content",this.root.append(n,this.content)}getElement(){return this.root}getContentElement(){return this.content}}function Pm(a="app"){const t=document.getElementById(a);if(!t)return()=>{};t.style.transformOrigin="center center";let e=null;const n=()=>{e=null;const r=t.offsetWidth,o=t.offsetHeight;if(r===0||o===0)return;const l=window.innerWidth,c=window.innerHeight,h=16,u=(l-h)/r,d=(c-h)/o,f=Math.max(.1,Math.min(u,d));t.style.transform=`scale(${f})`},i=()=>{e!==null&&cancelAnimationFrame(e),e=requestAnimationFrame(n)};window.addEventListener("resize",i);const s=new ResizeObserver(i);return s.observe(t),i(),()=>{window.removeEventListener("resize",i),s.disconnect(),e!==null&&cancelAnimationFrame(e)}}let It=null;document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("app"),t=new Cl;t.register("/",()=>({mount:()=>{new Pl(a,t).mount()},unmount:()=>{a.innerHTML=""}})),t.register("/aliasing-sine",()=>({mount:()=>{a.innerHTML="";const e=new yn("Sine Wave Aliasing",()=>t.navigate("/")),n=document.createElement("div");n.id="sine-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new Rl("sine-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.register("/aliasing-audio",()=>({mount:()=>{a.innerHTML="";const e=new yn("Audio Aliasing",()=>t.navigate("/")),n=document.createElement("div");n.id="audio-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new Ta("audio-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.register("/z-transform",()=>({mount:()=>{a.innerHTML="";const e=new yn("Z-Transform Explorer",()=>t.navigate("/")),n=document.createElement("div");n.id="ztransform-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new Aa("ztransform-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.register("/pole-zero",()=>({mount:()=>{a.innerHTML="";const e=new yn("Pole-Zero Designer",()=>t.navigate("/")),n=document.createElement("div");n.id="polezero-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new lm("polezero-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.register("/convolution",()=>({mount:()=>{a.innerHTML="";const e=new yn("Convolution / Cross-Correlation",()=>t.navigate("/")),n=document.createElement("div");n.id="convolution-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new Er("convolution-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.register("/dft-demo",()=>({mount:()=>{a.innerHTML="";const e=new yn("DFT Accumulator",()=>t.navigate("/")),n=document.createElement("div");n.id="dft-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new Sm("dft-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.register("/difference-equations",()=>({mount:()=>{a.innerHTML="";const e=new yn("Difference Equations",()=>t.navigate("/")),n=document.createElement("div");n.id="diff-eq-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new Mm("diff-eq-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.register("/filter-design",()=>({mount:()=>{a.innerHTML="";const e=new yn("Filter Specification & Design",()=>t.navigate("/")),n=document.createElement("div");n.id="filter-design-container",e.getContentElement().appendChild(n),a.appendChild(e.getElement()),It=new Cm("filter-design-container")},unmount:()=>{It&&"destroy"in It&&It.destroy(),It=null,a.innerHTML=""}})),t.start(),Pm("app")});
