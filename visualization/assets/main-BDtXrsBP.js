var el=Object.defineProperty;var nl=(r,t,e)=>t in r?el(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var D=(r,t,e)=>nl(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class il{constructor(){D(this,"currentHandler",null);D(this,"handlers",new Map);D(this,"basePath");this.basePath="/visualization/",window.addEventListener("popstate",()=>this.handleRoute())}register(t,e){this.handlers.set(t,e)}navigate(t){const e=t==="/"?this.basePath:`${this.basePath}${t.slice(1)}.html`;window.location.href=e}handleRoute(){const t=window.location.pathname;let e="/";t.includes("aliasing-sine.html")?e="/aliasing-sine":t.includes("aliasing-audio.html")?e="/aliasing-audio":t.includes("z-transform.html")?e="/z-transform":t.includes("pole-zero.html")&&(e="/pole-zero"),this.currentHandler&&this.currentHandler.unmount();const n=this.handlers.get(e)||this.handlers.get("/");n&&(this.currentHandler=n(),this.currentHandler.mount())}start(){this.handleRoute()}}class sl{constructor(t,e){D(this,"container");D(this,"router");this.container=t,this.router=e}mount(){this.container.innerHTML=`
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
        </div>
      </div>
    `,this.container.querySelectorAll(".home-card").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-route");n&&this.router.navigate(n)})})}unmount(){this.container.innerHTML=""}}class ii{constructor(t,e){D(this,"container");D(this,"svg");D(this,"value");D(this,"config");D(this,"onChange");D(this,"isDragging",!1);D(this,"startX",0);D(this,"startY",0);D(this,"startValue",0);D(this,"indicator");this.config={...t,defaultValue:t.defaultValue??t.value},this.value=t.value,this.onChange=e,this.container=this.createKnob(),this.svg=this.container.querySelector("svg"),this.indicator=this.svg.querySelector(".knob-indicator"),this.updateVisuals(),this.attachEventListeners()}createKnob(){const t=document.createElement("div");t.className="knob-wrapper";const e=document.createElement("div");e.className="knob-container";const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0 0 100 100"),n.setAttribute("class","knob-svg");const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx","50"),s.setAttribute("cy","50"),s.setAttribute("r","48"),s.setAttribute("class","knob-outer");const i=document.createElementNS("http://www.w3.org/2000/svg","circle");i.setAttribute("cx","50"),i.setAttribute("cy","50"),i.setAttribute("r","42"),i.setAttribute("class","knob-body");const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx","50"),a.setAttribute("cy","50"),a.setAttribute("r","38"),a.setAttribute("class","knob-inner");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("class","knob-arc-track"),o.setAttribute("d",this.describeArc(50,50,45,210,330)),o.setAttribute("fill","none");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("class","knob-arc-value"),l.setAttribute("fill","none");const c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("class","knob-indicator");const h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("x1","50"),h.setAttribute("y1","18"),h.setAttribute("x2","50"),h.setAttribute("y2","32"),h.setAttribute("stroke-linecap","round");const u=document.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("cx","50"),u.setAttribute("cy","25"),u.setAttribute("r","4"),c.appendChild(h),c.appendChild(u),n.appendChild(s),n.appendChild(i),n.appendChild(a),n.appendChild(o),n.appendChild(l),n.appendChild(c),e.appendChild(n);const f=document.createElement("div");f.className="knob-label",f.textContent=this.config.label;const d=document.createElement("div");return d.className="knob-value",d.textContent=`${this.value}${this.config.unit}`,t.appendChild(e),t.appendChild(d),t.appendChild(f),t}describeArc(t,e,n,s,i){const a=this.polarToCartesian(t,e,n,i),o=this.polarToCartesian(t,e,n,s),l=i-s<=180?"0":"1";return`M ${a.x} ${a.y} A ${n} ${n} 0 ${l} 0 ${o.x} ${o.y}`}polarToCartesian(t,e,n,s){const i=(s-90)*Math.PI/180;return{x:t+n*Math.cos(i),y:e+n*Math.sin(i)}}getAngle(){return 210+(this.value-this.config.min)/(this.config.max-this.config.min)*300}updateVisuals(){const t=this.getAngle();this.indicator.setAttribute("transform",`rotate(${t} 50 50)`);const e=this.svg.querySelector(".knob-arc-value");e&&e.setAttribute("d",this.describeArc(50,50,45,210,t));const n=this.container.querySelector(".knob-value");if(n){const s=this.config.unit==="Hz"&&this.value>=1e3?`${(this.value/1e3).toFixed(1)}k${this.config.unit}`:`${Math.round(this.value)}${this.config.unit}`;n.textContent=s}}attachEventListeners(){const t=this.svg;t.addEventListener("dblclick",i=>{i.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value)}),t.addEventListener("mousedown",i=>{if(i.button===1){i.preventDefault(),this.setValue(this.config.defaultValue??this.config.value),this.onChange(this.value);return}});const e=i=>{i.button===0&&(i.preventDefault(),this.isDragging=!0,this.startX=i.clientX,this.startY=i.clientY,this.startValue=this.value,document.body.style.cursor="grabbing")},n=i=>{if(!this.isDragging)return;const a=i.clientX-this.startX,l=this.startY-i.clientY+a,c=this.config.max-this.config.min,u=.45*(i.shiftKey?.25:1),f=l*u*c/220;let d=this.startValue+f;d=Math.max(this.config.min,Math.min(this.config.max,d)),d=Math.round(d/this.config.step)*this.config.step,d!==this.value&&(this.value=d,this.updateVisuals(),this.onChange(this.value))},s=()=>{this.isDragging=!1,document.body.style.cursor=""};t.addEventListener("mousedown",e),document.addEventListener("mousemove",n),document.addEventListener("mouseup",s),t.addEventListener("touchstart",i=>{i.preventDefault(),this.isDragging=!0,this.startX=i.touches[0].clientX,this.startY=i.touches[0].clientY,this.startValue=this.value}),document.addEventListener("touchmove",i=>{if(!this.isDragging)return;const a=i.touches[0].clientX-this.startX,l=this.startY-i.touches[0].clientY+a,c=this.config.max-this.config.min,h=l*.45*c/220;let u=this.startValue+h;u=Math.max(this.config.min,Math.min(this.config.max,u)),u=Math.round(u/this.config.step)*this.config.step,u!==this.value&&(this.value=u,this.updateVisuals(),this.onChange(this.value))}),document.addEventListener("touchend",()=>{this.isDragging=!1})}getValue(){return this.value}setValue(t){this.value=Math.max(this.config.min,Math.min(this.config.max,t)),this.value=Math.round(this.value/this.config.step)*this.config.step,this.updateVisuals()}getElement(){return this.container}}class cs{constructor(t,e){D(this,"element");D(this,"onClick");this.onClick=e,this.element=this.createButton(t)}createButton(t){const e=document.createElement("button");return e.className="vst-button",e.textContent=t,e.addEventListener("click",()=>{this.onClick()}),e}setText(t){this.element.textContent=t}setActive(t){t?this.element.classList.add("active"):this.element.classList.remove("active")}setDisabled(t){this.element.disabled=t}getElement(){return this.element}}class hs{static quantize(t,e){const n=Math.pow(2,e);let s=Math.floor((t+1)*.5*n);return s=Math.max(0,Math.min(n-1,s)),s/(n-1)*2-1}static getSamples(t,e,n=.1){const s=Math.floor(e*n),i=new Float32Array(s),a=new Float32Array(s);for(let o=0;o<s;o++){const l=o/e;i[o]=Math.sin(2*Math.PI*t*l),a[o]=l}return{samples:i,sampleTimes:a,duration:n}}static getAliasedFrequency(t,e){const n=e/2;if(t<=n)return t;const s=Math.floor((t+n)/e);return Math.abs(t-s*e)}static getAliasingInfo(t,e){const n=e/2,s=t>n,i=this.getAliasedFrequency(t,e);return{nyquistFreq:n,isAliasing:s,aliasedFreq:i}}static generateAudioForPlayback(t,e,n,s=32){const a=Math.floor(44100*n),o=new Float32Array(a),l=Math.round(t/e),c=t-l*e,h=Math.abs(c);if(h===0)return o;const u=c===0?1:Math.sign(c);for(let f=0;f<a;f++){const d=f/44100,g=u*Math.sin(2*Math.PI*h*d);o[f]=this.quantize(g,s)}return o}}class Us{constructor(t){D(this,"canvas");D(this,"ctx");D(this,"container");D(this,"options");D(this,"dpr",1);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.1)",...t},this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas()}createContainer(){const t=document.createElement("div");t.className="wave-display";const e=document.createElement("canvas");return e.className="wave-canvas",t.appendChild(e),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.canvas.style.width=this.options.width+"px",this.canvas.style.height=this.options.height+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas()}clear(){this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t,height:e}=this.options,n=e/2;this.ctx.font="700 16px 'Segoe UI', sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.textAlign="center",this.ctx.fillText(this.options.label,460,15),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath();const s=8;for(let i=1;i<s;i++){const a=t/s*i;this.ctx.moveTo(a,0),this.ctx.lineTo(a,e)}this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.ctx.strokeStyle="rgba(255,255,255,0.05)",this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(t,e),this.ctx.stroke()}drawWave(t,e,n=.8,s,i=2,a,o=0){const{width:l,height:c}=this.options,h=c/2,f=c-2*20;this.ctx.shadowBlur=8,this.ctx.shadowColor=s,this.ctx.strokeStyle=s,this.ctx.lineWidth=i,this.ctx.beginPath(),this.ctx.lineCap="round",this.ctx.lineJoin="round";const d=l,g=.008;for(let _=0;_<=d;_++){const m=_/d*l,p=m/l*g,S=e-g+p,y=2*Math.PI*t*S+o;let b=Math.sin(y);a!==void 0&&(b=hs.quantize(b,a));const C=h-b*n*f/2;_===0?this.ctx.moveTo(m,C):this.ctx.lineTo(m,C)}this.ctx.stroke(),this.ctx.shadowBlur=0}drawSincReconstruction(t,e,n,s,i=.8,a,o=2){if(t.length===0)return;const{width:l,height:c}=this.options,h=c/2,f=c-2*20,d=g=>{if(Math.abs(g)<1e-10)return 1;const _=Math.PI*g;return Math.sin(_)/_};this.ctx.save(),this.ctx.shadowBlur=8,this.ctx.shadowColor=a,this.ctx.strokeStyle=a,this.ctx.lineWidth=o,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath();for(let g=0;g<=l;g++){const _=n+g/l*s;let m=0;for(const S of t){const y=(_-S.time)*e;m+=S.value*d(y)}m=Math.max(-1.15,Math.min(1.15,m));const p=h-m*i*f/2;g===0?this.ctx.moveTo(0,p):this.ctx.lineTo(g,p)}this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawQuantizationStaircase(t,e){if(t.length<2)return;this.ctx.save(),this.ctx.strokeStyle=e,this.ctx.lineWidth=2,this.ctx.shadowBlur=8,this.ctx.shadowColor=e,this.ctx.globalAlpha=.75,this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(let s=0;s<t.length-1;s++){const i=t[s],a=t[s+1];this.ctx.lineTo(a.x,i.y),this.ctx.lineTo(a.x,a.y)}const n=t[t.length-1];this.ctx.lineTo(this.options.width,n.y),this.ctx.stroke(),this.ctx.shadowBlur=0,this.ctx.restore()}drawSamplePoints(t,e,n=!0){if(t.length===0)return;const s=this.options.height/2;n&&(this.ctx.strokeStyle=e,this.ctx.lineWidth=1.5,this.ctx.globalAlpha=.6,this.ctx.beginPath(),t.forEach((i,a)=>{a===0?this.ctx.moveTo(i.x,i.y):this.ctx.lineTo(i.x,i.y)}),this.ctx.stroke(),this.ctx.globalAlpha=1),t.forEach(i=>{this.ctx.strokeStyle=e,this.ctx.globalAlpha=.2,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(i.x,s),this.ctx.lineTo(i.x,i.y),this.ctx.stroke()}),t.forEach(i=>{this.ctx.globalAlpha=1,this.ctx.shadowBlur=6,this.ctx.shadowColor=e,this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,3,0,2*Math.PI),this.ctx.fill()}),this.ctx.shadowBlur=0}getElement(){return this.container}}class _o{constructor(t){D(this,"container");D(this,"items",new Map);this.container=this.createPanel(t)}createPanel(t){const e=document.createElement("div");return e.className="info-panel",t.forEach(n=>{const s=this.createItem(n);this.items.set(n.label,s),e.appendChild(s)}),e}createItem(t){const e=document.createElement("div");e.className="info-item";const n=document.createElement("div");n.className="info-item-label",n.textContent=t.label;const s=document.createElement("div");return s.className="info-item-value",t.warning&&s.classList.add("warning"),s.textContent=t.value,e.appendChild(n),e.appendChild(s),e}updateItem(t,e,n=!1){const s=this.items.get(t);if(s){const i=s.querySelector(".info-item-value");i&&(i.textContent=e,n?i.classList.add("warning"):i.classList.remove("warning"))}}getElement(){return this.container}}const Dn=class Dn{constructor(){D(this,"context",null);D(this,"workletReady",!1)}static getInstance(){return Dn.instance||(Dn.instance=new Dn),Dn.instance}async getContext(t){return this.context||(this.context=new AudioContext(t?{sampleRate:t}:void 0)),this.context.state==="suspended"&&await this.context.resume(),await this.ensureWorklet(),this.context}async ensureWorklet(){if(!this.context||this.workletReady)return;await this.context.audioWorklet.addModule("/visualization/worklets/dsp-processor.js"),this.workletReady=!0}async createDspNode(t){const e=await this.getContext();return new AudioWorkletNode(e,"shared-dsp-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],channelCountMode:"explicit",channelInterpretation:"speakers",...t})}async decodeAudioData(t){return await(await this.getContext()).decodeAudioData(t)}async createBuffer(t,e,n){return(await this.getContext()).createBuffer(t,e,n)}async createBufferSource(){return(await this.getContext()).createBufferSource()}async createGain(){return(await this.getContext()).createGain()}async createAnalyser(){return(await this.getContext()).createAnalyser()}async createConvolver(){return(await this.getContext()).createConvolver()}getCurrentTime(){var t;return((t=this.context)==null?void 0:t.currentTime)??0}getState(){var t;return((t=this.context)==null?void 0:t.state)??"closed"}};D(Dn,"instance",null);let hi=Dn;class rl{constructor(t){D(this,"frequency",1e3);D(this,"sampleRate",2e3);D(this,"bitDepth",16);D(this,"phaseDeg",0);D(this,"speed",.1);D(this,"audioEngine");D(this,"dspNode",null);D(this,"outputGain",null);D(this,"frequencyKnob");D(this,"sampleRateKnob");D(this,"bitDepthKnob");D(this,"phaseKnob");D(this,"playButton");D(this,"infoPanel");D(this,"originalDisplay");D(this,"sampledDisplay");D(this,"reconstructedDisplay");D(this,"container");D(this,"isPlaying",!1);D(this,"animationId",null);D(this,"time",0);D(this,"lastTimestamp",0);D(this,"onResize",()=>this.resizeDisplays());const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.audioEngine=hi.getInstance(),this.init()}init(){this.createUI(),window.addEventListener("resize",this.onResize),this.startAnimation()}getDisplayWidth(){return Math.max(620,this.container.clientWidth-2)}createUI(){const t=document.createElement("div");t.className="displays-container";const s={width:this.getDisplayWidth(),height:220,backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)"};this.originalDisplay=new Us({...s,label:"1. ORIGINAL ANALOG SIGNAL"}),this.sampledDisplay=new Us({...s,label:"2. DISCRETE TIME (SAMPLING)"}),this.reconstructedDisplay=new Us({...s,label:"3. RECONSTRUCTED SIGNAL (SINC INTERPOLATION)"}),t.appendChild(this.originalDisplay.getElement()),t.appendChild(this.sampledDisplay.getElement()),t.appendChild(this.reconstructedDisplay.getElement());const i=document.createElement("div");i.className="controls-container",this.infoPanel=new _o([{label:"NYQUIST",value:"1000 Hz"},{label:"ALIAS",value:"—"}]);const a=document.createElement("div");a.className="knobs-wrapper";const o={min:0,max:1e4,value:this.frequency,step:100,label:"INPUT FREQ",unit:"Hz"},l={min:500,max:2e4,value:this.sampleRate,step:100,label:"SAMPLE RATE",unit:"Hz"},c={min:1,max:16,value:this.bitDepth,step:1,label:"BIT DEPTH",unit:"bits"},h={min:-180,max:180,value:this.phaseDeg,step:1,label:"PHASE",unit:"deg"};this.frequencyKnob=new ii(o,u=>{this.frequency=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),this.sampleRateKnob=new ii(l,u=>{this.sampleRate=u,this.time=0,this.updateInfoPanel(),this.updateAudio()}),this.bitDepthKnob=new ii(c,u=>{this.bitDepth=u,this.updateAudio()}),this.phaseKnob=new ii(h,u=>{this.phaseDeg=u,this.updateAudio()}),a.appendChild(this.frequencyKnob.getElement()),a.appendChild(this.sampleRateKnob.getElement()),a.appendChild(this.bitDepthKnob.getElement()),a.appendChild(this.phaseKnob.getElement()),this.playButton=new cs("Play Audio",()=>this.toggleAudio()),i.appendChild(this.infoPanel.getElement()),i.appendChild(a),i.appendChild(this.playButton.getElement()),this.container.appendChild(t),this.container.appendChild(i),this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){const t=this.getDisplayWidth(),e=220;this.originalDisplay.resize(t,e),this.sampledDisplay.resize(t,e),this.reconstructedDisplay.resize(t,e)}startAnimation(){const t=e=>{this.lastTimestamp===0&&(this.lastTimestamp=e);const n=(e-this.lastTimestamp)/1e3;this.lastTimestamp=e,this.speed>0&&(this.time+=n*this.speed*.005),this.updateAnimation(),this.animationId=requestAnimationFrame(t)};this.animationId=requestAnimationFrame(t)}updateAnimation(){this.renderDisplays()}renderDisplays(){this.renderOriginalSignal(),this.renderSampledSignal(),this.renderReconstructedSignal()}renderOriginalSignal(){this.originalDisplay.clear(),this.originalDisplay.drawGrid(),this.originalDisplay.drawWave(this.frequency,this.time,.8,"#52cffe",2,void 0,this.getPhaseRad())}renderSampledSignal(){this.sampledDisplay.clear(),this.sampledDisplay.drawGrid(),this.sampledDisplay.drawWave(this.frequency,this.time,.8,"rgba(82, 208, 254, 0.2)",1,void 0,this.getPhaseRad());const t=this.canvasSamplePoints(this.frequency);this.sampledDisplay.drawSamplePoints(t,"#ff4d6d",!1)}renderReconstructedSignal(){this.reconstructedDisplay.clear(),this.reconstructedDisplay.drawGrid();const t=.008,e=this.time-t,n=this.rawSamples(this.frequency,this.bitDepth,30);this.reconstructedDisplay.drawSincReconstruction(n,this.sampleRate,e,t,.8,"#ffd700",2);const s=this.canvasSamplePoints(this.frequency,this.bitDepth);this.reconstructedDisplay.drawSamplePoints(s,"#ffd700",!1)}rawSamples(t,e,n=30){const i=this.time-.008,a=this.time,o=Math.ceil(i*this.sampleRate)-n,l=Math.floor(a*this.sampleRate)+n,c=[];for(let h=o;h<=l;h++){const u=h/this.sampleRate,f=2*Math.PI*t*u;let d=Math.sin(f+this.getPhaseRad());e!==void 0&&(d=hs.quantize(d,e)),c.push({time:u,value:d})}return c}canvasSamplePoints(t,e){const n=this.originalDisplay.getElement().querySelector("canvas"),s=n.offsetWidth,i=n.offsetHeight,a=i/2,l=i-2*20,c=.008,h=this.time-c,u=this.time,f=Math.ceil(h*this.sampleRate),d=[];let g=f;for(;;){const _=g/this.sampleRate;if(_>u)break;const p=(_-h)/c*s,S=2*Math.PI*t*_;let y=Math.sin(S+this.getPhaseRad());e!==void 0&&(y=hs.quantize(y,e));const b=a-y*.8*l/2;d.push({x:p,y:b}),g++}return d}updateInfoPanel(){const t=hs.getAliasingInfo(this.frequency,this.sampleRate),e=t.nyquistFreq>=1e3?`${(t.nyquistFreq/1e3).toFixed(1)}kHz`:`${t.nyquistFreq.toFixed(0)}Hz`;if(this.infoPanel.updateItem("NYQUIST",e),t.isAliasing){const n=t.aliasedFreq>=1e3?`${(t.aliasedFreq/1e3).toFixed(1)}kHz`:`${t.aliasedFreq.toFixed(0)}Hz`;this.infoPanel.updateItem("ALIAS",n,!0)}else this.infoPanel.updateItem("ALIAS","CLEAN",!1)}toggleAudio(){this.isPlaying?this.stopAudio():this.playAudio()}async playAudio(){await this.ensureAudioGraph(),this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:"tone"}),this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.getPhaseRad()}),this.isPlaying=!0,this.playButton.setText("STOP AUDIO"),this.playButton.setActive(!0))}updateAudio(){this.isPlaying&&this.dspNode&&this.dspNode.port.postMessage({type:"setTone",frequency:this.frequency,sampleRate:this.sampleRate,bitDepth:this.bitDepth,phaseRadians:this.getPhaseRad()})}getPhaseRad(){return this.phaseDeg*Math.PI/180}stopAudio(){this.dspNode&&this.dspNode.port.postMessage({type:"setMode",mode:"passthrough"}),this.isPlaying=!1,this.playButton.setText("Play Audio"),this.playButton.setActive(!1)}async ensureAudioGraph(){if(this.dspNode&&this.outputGain)return;const t=await this.audioEngine.getContext();this.dspNode=await this.audioEngine.createDspNode({numberOfInputs:0,numberOfOutputs:1,outputChannelCount:[2]}),this.outputGain=await this.audioEngine.createGain(),this.outputGain.gain.value=.9,this.dspNode.connect(this.outputGain),this.outputGain.connect(t.destination)}destroy(){var t,e;this.animationId!==null&&cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onResize),this.stopAudio(),(t=this.dspNode)==null||t.disconnect(),(e=this.outputGain)==null||e.disconnect(),this.dspNode=null,this.outputGain=null}}class al{constructor(t){D(this,"overlayCanvas");D(this,"ctx");D(this,"glCanvas");D(this,"gl",null);D(this,"container");D(this,"options");D(this,"glProgram",null);D(this,"glPosBuffer",null);D(this,"glResolutionLoc",null);D(this,"glColorLoc",null);D(this,"glPosAttribLoc",-1);D(this,"dpr",1);this.options={backgroundColor:"transparent",gridColor:"rgba(255, 255, 255, 0.05)",minFreq:-24e3,maxFreq:24e3,minDb:-120,maxDb:20,...t},this.container=this.createContainer(),this.glCanvas=this.container.querySelector(".spectrum-webgl"),this.overlayCanvas=this.container.querySelector(".spectrum-canvas"),this.ctx=this.overlayCanvas.getContext("2d",{alpha:!0}),this.gl=this.glCanvas.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0}),this.setupCanvas(),this.initGL()}createContainer(){const t=document.createElement("div");t.className="spectrum-display";const e=document.createElement("canvas");e.className="spectrum-webgl";const n=document.createElement("canvas");return n.className="spectrum-canvas",t.appendChild(e),t.appendChild(n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.overlayCanvas.width=this.options.width*this.dpr,this.overlayCanvas.height=this.options.height*this.dpr,this.overlayCanvas.style.width=this.options.width+"px",this.overlayCanvas.style.height=this.options.height+"px",this.glCanvas.width=this.options.width*this.dpr,this.glCanvas.height=this.options.height*this.dpr,this.glCanvas.style.width=this.options.width+"px",this.glCanvas.style.height=this.options.height+"px",this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.gl&&this.gl.viewport(0,0,this.glCanvas.width,this.glCanvas.height)}resize(t,e){this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(80,Math.floor(e)),this.setupCanvas(),this.clear()}initGL(){if(!this.gl)return;const t=`
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
    `,n=this.createShader(this.gl.VERTEX_SHADER,t),s=this.createShader(this.gl.FRAGMENT_SHADER,e);if(!n||!s)return;const i=this.gl.createProgram();i&&(this.gl.attachShader(i,n),this.gl.attachShader(i,s),this.gl.linkProgram(i),this.gl.getProgramParameter(i,this.gl.LINK_STATUS)&&(this.glProgram=i,this.glPosBuffer=this.gl.createBuffer(),this.glPosAttribLoc=this.gl.getAttribLocation(i,"a_position"),this.glResolutionLoc=this.gl.getUniformLocation(i,"u_resolution"),this.glColorLoc=this.gl.getUniformLocation(i,"u_color"),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)))}createShader(t,e){if(!this.gl)return null;const n=this.gl.createShader(t);return!n||(this.gl.shaderSource(n,e),this.gl.compileShader(n),!this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS))?null:n}clear(){this.gl&&(this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT)),this.ctx.clearRect(0,0,this.options.width,this.options.height)}drawGrid(){const{width:t}=this.options;this.ctx.font="700 14px 'Segoe UI', sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)",this.ctx.textAlign="left",this.ctx.fillText(this.options.label,10,20),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.options.gridColor,this.ctx.beginPath(),[-100,-80,-60,-40,-20,0].forEach(n=>{if(n>=this.options.minDb&&n<=this.options.maxDb){const s=this.dbToY(n);this.ctx.moveTo(0,s),this.ctx.lineTo(t,s)}}),this.ctx.stroke()}drawSamplingGrid(t){const e=t/2,{height:n}=this.options,s=(i,a,o,l)=>{const c=this.freqToX(i);c<0||c>this.options.width||(this.ctx.strokeStyle=a,this.ctx.lineWidth=1.5,l?this.ctx.setLineDash([4,4]):this.ctx.setLineDash([]),this.ctx.globalAlpha=.6,this.ctx.beginPath(),this.ctx.moveTo(c,0),this.ctx.lineTo(c,n),this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=a,this.ctx.font="10px 'Segoe UI', sans-serif",this.ctx.textAlign="center",this.ctx.fillText(o,c,n-10))};s(0,"rgba(255,255,255,0.6)","DC (0 Hz)",!1),s(e,"#00ff00",`+Fn (${(e/1e3).toFixed(1)}k)`,!0),s(-e,"#00ff00","-Fn",!0),s(t,"rgba(255,255,255,0.3)","+Fs",!0),s(-t,"rgba(255,255,255,0.3)","-Fs",!0),s(t*2,"rgba(255,255,255,0.3)","+2Fs",!0),s(-t*2,"rgba(255,255,255,0.3)","-2Fs",!0)}drawLowPassOverlay(t,e=!1){const{width:n,height:s,maxFreq:i,minDb:a,maxDb:o}=this.options,l=Math.max(0,t),c=e?"#ff7b5c":"#ff9a4d",h=e?"rgba(255, 123, 92, 0.10)":"rgba(255, 154, 77, 0.07)",u=256,f=new Float32Array(u*2);for(let g=0;g<u;g++){const _=g/(u-1)*n,m=g/(u-1)*i,p=l>1?m/l:1e6,S=1/Math.sqrt(1+Math.pow(p,4)),y=Math.max(a,Math.min(o,20*Math.log10(S+1e-8))),b=this.dbToY(y);f[g*2]=_+n/2,f[g*2+1]=b}this.ctx.save(),this.ctx.fillStyle=h,this.ctx.beginPath(),this.ctx.rect(0,0,n,s),this.ctx.fill(),this.ctx.restore(),this.drawLineGPU(f,c,e?.95:.8);const d=new Float32Array(u*2);for(let g=0;g<u;g++)d[g*2]=n-f[g*2],d[g*2+1]=f[g*2+1];this.drawLineGPU(d,c,e?.95:.8),this.ctx.strokeStyle=c,this.ctx.lineWidth=e?1.8:1.2,this.ctx.globalAlpha=e?.85:.65,this.ctx.beginPath();for(let g=0;g<u;g++){const _=f[g*2],m=f[g*2+1];g===0?this.ctx.moveTo(_,m):this.ctx.lineTo(_,m)}this.ctx.stroke(),this.ctx.beginPath();for(let g=0;g<u;g++){const _=d[g*2],m=d[g*2+1];g===0?this.ctx.moveTo(_,m):this.ctx.lineTo(_,m)}this.ctx.stroke(),this.ctx.globalAlpha=1,this.ctx.fillStyle=c,this.ctx.font="700 10px 'Segoe UI', sans-serif",this.ctx.textAlign="left",this.ctx.fillText(`LPF ${Math.round(l)} Hz`,Math.min(n-90,n/2+8),14)}drawSpectrum(t,e,n,s=2,i=1,a=!1){if(t.length===0||e.length===0)return;const o=new Float32Array(t.length*2);for(let l=0;l<t.length;l++){const c=t[l];let h=e[l];h<this.options.minDb&&(h=this.options.minDb),o[l*2]=this.freqToX(c),o[l*2+1]=this.dbToY(h)}this.drawLineGPU(o,n,i),a&&this.drawAreaGPU(o,n,Math.min(.35,i*.35))}drawLineGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const s=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,s[0],s[1],s[2],s[3]),this.gl.drawArrays(this.gl.LINE_STRIP,0,t.length/2)}drawAreaGPU(t,e,n){if(!this.gl||!this.glProgram||!this.glPosBuffer||!this.glResolutionLoc||!this.glColorLoc||this.glPosAttribLoc<0)return;const s=this.dbToY(this.options.minDb),i=new Float32Array(t.length*2);for(let o=0;o<t.length/2;o++)i[o*4]=t[o*2],i[o*4+1]=s,i[o*4+2]=t[o*2],i[o*4+3]=t[o*2+1];const a=this.parseColor(e,n);this.gl.useProgram(this.glProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glPosBuffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,i,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(this.glPosAttribLoc),this.gl.vertexAttribPointer(this.glPosAttribLoc,2,this.gl.FLOAT,!1,0,0),this.gl.uniform2f(this.glResolutionLoc,this.options.width,this.options.height),this.gl.uniform4f(this.glColorLoc,a[0],a[1],a[2],a[3]),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,i.length/2)}parseColor(t,e){if(t.startsWith("#")){const s=t.slice(1),i=s.length===3?s.split("").map(o=>o+o).join(""):s,a=parseInt(i,16);return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255,e]}const n=t.match(/rgba?\(([^)]+)\)/);if(n){const s=n[1].split(",").map(c=>c.trim()),i=Number(s[0])/255,a=Number(s[1])/255,o=Number(s[2])/255,l=s[3]!==void 0?Number(s[3])*e:e;return[i,a,o,l]}return[.32,.81,1,e]}freqToX(t){const e=this.options.maxFreq-this.options.minFreq;return(t-this.options.minFreq)/e*this.options.width}dbToY(t){const e=this.options.maxDb-this.options.minDb;return(this.options.maxDb-t)/e*this.options.height}getElement(){return this.container}}class ol{constructor(t,e){D(this,"container");D(this,"input");D(this,"valueDisplay");D(this,"onChange");D(this,"config");this.config=t,this.onChange=e,this.container=this.createContainer(),this.input=this.container.querySelector("input"),this.valueDisplay=this.container.querySelector(".slider-value"),this.setupEventListeners(),this.updateDisplay()}createContainer(){const t=document.createElement("div");return t.className="slider-container",t.innerHTML=`
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
    `,t}setupEventListeners(){this.input.addEventListener("input",()=>{const t=parseFloat(this.input.value);this.updateDisplay(),this.onChange(t)})}updateDisplay(){const t=parseFloat(this.input.value);let e;this.config.unit==="%"?e=t.toFixed(1):t>=1e3?e=`${(t/1e3).toFixed(1)}k`:e=t.toString(),this.valueDisplay.textContent=`${e} ${this.config.unit}`}getValue(){return parseFloat(this.input.value)}setValue(t){this.input.value=t.toString(),this.updateDisplay()}getElement(){return this.container}}class xo{constructor(t,e){D(this,"container");D(this,"canvas");D(this,"ctx");D(this,"options");D(this,"onSeek");D(this,"waveformData",null);D(this,"sourceData",null);D(this,"duration",0);D(this,"playheadTime",0);D(this,"isDragging",!1);D(this,"dpr",1);this.options=t,this.onSeek=e,this.container=this.createContainer(),this.canvas=this.container.querySelector("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!0}),this.setupCanvas(),this.attachListeners(),this.draw()}createContainer(){const t=document.createElement("div");t.className="timeline-panel";const e=document.createElement("div");e.className="timeline-title",e.textContent=this.options.title??"AUDIO TIMELINE";const n=document.createElement("canvas");return n.className="timeline-canvas",t.append(e,n),t}setupCanvas(){this.dpr=window.devicePixelRatio||1,this.canvas.width=this.options.width*this.dpr,this.canvas.height=this.options.height*this.dpr,this.canvas.style.width=`${this.options.width}px`,this.canvas.style.height=`${this.options.height}px`,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr)}attachListeners(){const t=n=>{if(this.duration<=0)return;const s=this.canvas.getBoundingClientRect(),i=Math.max(0,Math.min(s.width,n-s.left)),o=(s.width>0?i/s.width:0)*this.duration;this.setPlayhead(o),this.onSeek(o)};this.canvas.addEventListener("pointerdown",n=>{this.isDragging=!0,this.canvas.setPointerCapture(n.pointerId),t(n.clientX)}),this.canvas.addEventListener("pointermove",n=>{this.isDragging&&t(n.clientX)});const e=()=>{this.isDragging=!1};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e)}setWaveformFromBuffer(t){this.sourceData=new Float32Array(t.getChannelData(0));const e=this.sourceData,n=Math.max(1,this.options.width),s=Math.max(1,Math.floor(e.length/n)),i=new Float32Array(n);for(let a=0;a<n;a++){const o=a*s,l=Math.min(o+s,e.length);let c=0;for(let h=o;h<l;h++){const u=Math.abs(e[h]);u>c&&(c=u)}i[a]=c}this.waveformData=i,this.duration=t.duration,this.playheadTime=0,this.draw()}resize(t,e){if(this.options.width=Math.max(100,Math.floor(t)),this.options.height=Math.max(60,Math.floor(e)),this.setupCanvas(),this.sourceData){const n=this.sourceData,s=Math.max(1,Math.floor(n.length/this.options.width)),i=new Float32Array(this.options.width);for(let a=0;a<this.options.width;a++){const o=a*s,l=Math.min(o+s,n.length);let c=0;for(let h=o;h<l;h++){const u=Math.abs(n[h]);u>c&&(c=u)}i[a]=c}this.waveformData=i}this.draw()}setPlayhead(t){this.playheadTime=Math.max(0,Math.min(this.duration,t)),this.draw()}draw(){const{width:t,height:e}=this.options,n=e/2;if(this.ctx.clearRect(0,0,t,e),this.ctx.fillStyle="rgba(11, 16, 24, 0.92)",this.ctx.fillRect(0,0,t,e),this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,n),this.ctx.lineTo(t,n),this.ctx.stroke(),this.waveformData){this.ctx.strokeStyle="rgba(82, 207, 254, 0.95)",this.ctx.lineWidth=1.1,this.ctx.beginPath();for(let s=0;s<this.waveformData.length;s++){const i=this.waveformData[s],a=n-i*(e*.44),o=n+i*(e*.44);this.ctx.moveTo(s,a),this.ctx.lineTo(s,o)}this.ctx.stroke()}if(this.duration>0){const s=this.playheadTime/this.duration*t;this.ctx.strokeStyle="#ff9a4d",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(s,0),this.ctx.lineTo(s,e),this.ctx.stroke(),this.ctx.fillStyle="#ff9a4d",this.ctx.beginPath(),this.ctx.moveTo(s-6,0),this.ctx.lineTo(s+6,0),this.ctx.lineTo(s,8),this.ctx.closePath(),this.ctx.fill()}}getElement(){return this.container}}const de=class de{constructor(t){D(this,"container");D(this,"sharedAudio",hi.getInstance());D(this,"audioContext",null);D(this,"sourceNode",null);D(this,"dspNode",null);D(this,"gainNode",null);D(this,"isPlaying",!1);D(this,"animationId",null);D(this,"onResize",()=>this.resizeDisplays());D(this,"rawAudioBuffer",null);D(this,"filteredBuffer",null);D(this,"targetSampleRate",32e3);D(this,"targetBitDepth",16);D(this,"lpfCutoff",22050);D(this,"startTime",0);D(this,"pausedAt",0);D(this,"isProcessing",!1);D(this,"pendingUpdate",!1);D(this,"lpfEditHighlightUntil",0);D(this,"realtimeDisplay");D(this,"sampleRateSlider");D(this,"bitDepthKnob");D(this,"lpfKnob");D(this,"waveformTimeline");D(this,"playOriginalButton");D(this,"playAliasedButton");D(this,"playAliasOnlyButton");D(this,"infoPanel");D(this,"uploadButton");D(this,"playMode","original");D(this,"playModeLabels",{original:"Play Original",aliased:"Play Processed",alias_only:"Play Difference"});D(this,"_windowData",new Float32Array(de.VIS_WINDOW_SIZE));D(this,"_fftReal",new Float64Array(de.VIS_WINDOW_SIZE));D(this,"_fftImag",new Float64Array(de.VIS_WINDOW_SIZE));D(this,"_fftMag",new Float32Array(de.VIS_NUM_BINS));D(this,"_basebandDb",new Float32Array(de.VIS_NUM_BINS));D(this,"_graphFreqs",new Float32Array(de.VIS_NUM_POINTS));D(this,"_baseGraph",new Float32Array(de.VIS_NUM_POINTS));D(this,"_copiesGraph",new Float32Array(de.VIS_NUM_POINTS));D(this,"_aliasingGraph",new Float32Array(de.VIS_NUM_POINTS));const e=document.getElementById(t);if(!e)throw new Error(`Container with id "${t}" not found`);this.container=e,this.init()}async init(){this.createUI(),window.addEventListener("resize",this.onResize),await this.loadDefaultAudio()}createUI(){const t=document.createElement("div");t.className="upload-section",t.innerHTML=`
      <div class="upload-label">AUDIO SOURCE</div>
      <input type="file" accept="audio/*" id="audio-upload" style="display: none;" />
      <label for="audio-upload" class="upload-button">Choose Audio File</label>
      <div class="upload-info">Or using default sine sweep</div>
    `,this.uploadButton=t.querySelector("#audio-upload"),this.uploadButton.addEventListener("change",h=>this.handleFileUpload(h));const e=document.createElement("div");e.className="displays-container";const n=Math.max(620,this.container.clientWidth-2),s=400;this.realtimeDisplay=new al({width:n,height:s,label:"BLUE: Filtered Baseband | GREY: Spectral Images | RED: Aliasing in Nyquist Band",minFreq:-48e3,maxFreq:48e3}),e.appendChild(this.realtimeDisplay.getElement()),this.waveformTimeline=new xo({width:n,height:120,title:"WAVEFORM / PLAYHEAD"},h=>this.handlePlayheadSeek(h)),e.appendChild(this.waveformTimeline.getElement());const i=document.createElement("div");i.className="controls-container audio-controls",this.infoPanel=new _o([{label:"NYQUIST",value:"5.5 kHz"},{label:"LPF CUTOFF",value:"22.0 kHz"},{label:"STATUS",value:"READY"}]),this.lpfKnob=new ii({min:500,max:22050,value:this.lpfCutoff,step:100,label:"ANTI-ALIASING LPF",unit:"Hz"},h=>this.handleLPFChange(h)),this.sampleRateSlider=new ol({min:1e3,max:48e3,value:this.targetSampleRate,step:100,label:"TARGET SAMPLE RATE",unit:"Hz"},h=>this.handleSampleRateChange(h)),this.bitDepthKnob=new ii({min:1,max:16,value:16,step:1,label:"BIT DEPTH",unit:"bits"},h=>this.handleBitDepthChange(h));const a=document.createElement("div");a.className="audio-buttons-wrapper",this.playOriginalButton=new cs(this.playModeLabels.original,()=>this.playAudio("original")),this.playAliasedButton=new cs(this.playModeLabels.aliased,()=>this.playAudio("aliased")),this.playAliasOnlyButton=new cs(this.playModeLabels.alias_only,()=>this.playAudio("alias_only"));const o=document.createElement("div");o.className="middle-row-wrapper";const l=document.createElement("div");l.className="knobs-wrapper",l.appendChild(this.lpfKnob.getElement()),l.appendChild(this.bitDepthKnob.getElement()),o.appendChild(l),o.appendChild(this.infoPanel.getElement());const c=document.createElement("div");c.className="right-controls control-column",c.appendChild(this.sampleRateSlider.getElement()),c.appendChild(a),i.innerHTML="",i.appendChild(o),i.appendChild(c),a.appendChild(this.playOriginalButton.getElement()),a.appendChild(this.playAliasedButton.getElement()),a.appendChild(this.playAliasOnlyButton.getElement()),this.container.appendChild(t),this.container.appendChild(e),this.container.appendChild(i),this.resizeDisplays(),this.updateInfoPanel()}resizeDisplays(){const t=Math.max(620,this.container.clientWidth-2);this.realtimeDisplay.resize(t,400),this.waveformTimeline.resize(t,120)}async loadDefaultAudio(){this.audioContext=await this.sharedAudio.getContext(44100),this.rawAudioBuffer=this.audioContext.createBuffer(2,132300,44100);const i=this.rawAudioBuffer.getChannelData(0);for(let o=0;o<132300;o++){const l=o/44100,c=100*Math.pow(22e3/100,l/3);i[o]=Math.sin(2*Math.PI*c*l)*.5}const a=this.rawAudioBuffer.getChannelData(1);for(let o=0;o<132300;o++){const l=o/44100,c=22e3*Math.pow(100/22e3,l/3);a[o]=Math.sin(2*Math.PI*c*l)*.5}await this.processAudioUpdate()}async handleFileUpload(t){const e=t.target;if(!e.files||e.files.length===0)return;const s=await e.files[0].arrayBuffer();this.audioContext||(this.audioContext=await this.sharedAudio.getContext());try{this.rawAudioBuffer=await this.sharedAudio.decodeAudioData(s),this.pausedAt=0,await this.processAudioUpdate(),this.infoPanel.updateItem("STATUS","LOADED",!1)}catch(i){console.error("Error decoding audio:",i),this.infoPanel.updateItem("STATUS","ERROR",!0)}}handlePlayheadSeek(t){this.filteredBuffer&&(this.pausedAt=t,this.isPlaying?this.restartPlayback():this.updateVisualization())}handleLPFChange(t){this.lpfCutoff=t,this.lpfEditHighlightUntil=performance.now()+900,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.triggerProcessing()}handleSampleRateChange(t){this.targetSampleRate=t,this.updateInfoPanel(),this.syncRealtimeDspParams(),this.triggerProcessing()}handleBitDepthChange(t){this.targetBitDepth=t,this.syncRealtimeDspParams(),this.triggerProcessing()}triggerProcessing(){if(this.isPlaying||this.updateVisualization(),this.isProcessing){this.pendingUpdate=!0;return}this.processAudioUpdate()}async processAudioUpdate(){this.isProcessing=!0,this.pendingUpdate=!1,this.rawAudioBuffer&&(this.filteredBuffer=await this.createFilteredBuffer(this.rawAudioBuffer,this.lpfCutoff),this.pausedAt=Math.min(this.pausedAt,this.filteredBuffer.duration),this.waveformTimeline.setWaveformFromBuffer(this.filteredBuffer),this.waveformTimeline.setPlayhead(this.pausedAt)),this.isProcessing=!1,this.pendingUpdate&&this.processAudioUpdate(),this.isPlaying||this.updateVisualization()}updateInfoPanel(){const t=this.targetSampleRate/2;this.infoPanel.updateItem("NYQUIST",t>=1e3?`${(t/1e3).toFixed(1)} kHz`:`${t.toFixed(0)} Hz`),this.infoPanel.updateItem("LPF CUTOFF",this.lpfCutoff>=1e3?`${(this.lpfCutoff/1e3).toFixed(1)} kHz`:`${this.lpfCutoff.toFixed(0)} Hz`)}async createFilteredBuffer(t,e){const n=t.numberOfChannels,s=new OfflineAudioContext(n,t.length,t.sampleRate),i=s.createBufferSource();i.buffer=t;const a=s.createBiquadFilter();a.type="lowpass",a.frequency.value=e,a.Q.value=.707;const o=s.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.707,i.connect(a),a.connect(o),o.connect(s.destination),i.start(),await s.startRendering()}async playAudio(t){if(!this.filteredBuffer||!this.audioContext||(t==="aliased"||t==="alias_only")&&!this.rawAudioBuffer)return;if(this.isPlaying&&this.playMode===t){this.stopAudio();return}this.stopAudio(),this.playMode=t,this.resetTransportButtons();let e;t==="original"?(e=this.filteredBuffer,this.playOriginalButton.setActive(!0),this.playOriginalButton.setText("STOP"),this.infoPanel.updateItem("STATUS","PLAYING",!1)):t==="aliased"?(e=this.rawAudioBuffer,this.playAliasedButton.setActive(!0),this.playAliasedButton.setText("STOP"),this.infoPanel.updateItem("STATUS","PROCESSED",!0)):(e=this.rawAudioBuffer,this.playAliasOnlyButton.setActive(!0),this.playAliasOnlyButton.setText("STOP"),this.infoPanel.updateItem("STATUS","DIFF ONLY",!0)),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=e,this.gainNode=this.audioContext.createGain(),t==="aliased"||t==="alias_only"?(this.dspNode=await this.sharedAudio.createDspNode(),this.configureRealtimeDsp(t),this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.gainNode)):this.sourceNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),this.startTime=this.audioContext.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{this.isPlaying&&this.sourceNode&&this.sourceNode.buffer&&this.audioContext.currentTime-this.startTime>=this.sourceNode.buffer.duration-.1&&this.stopAudio()},this.isPlaying=!0,this.startRealtimeVisualization()}restartPlayback(){if(!this.isPlaying)return;const t=this.playMode;this.stopAudio(),this.playAudio(t)}configureRealtimeDsp(t){this.dspNode&&(this.dspNode.port.postMessage({type:"setMode",mode:t==="alias_only"?"alias-diff":"alias-processed"}),this.syncRealtimeDspParams())}syncRealtimeDspParams(){!this.dspNode||!this.audioContext||this.dspNode.port.postMessage({type:"setAliasingParams",lpfCutoff:this.lpfCutoff,targetSampleRate:this.targetSampleRate,bitDepth:this.targetBitDepth,sourceSampleRate:this.audioContext.sampleRate})}updateVisualization(){if(!this.filteredBuffer)return;const t=de.VIS_WINDOW_SIZE,e=de.VIS_NUM_BINS,n=de.VIS_NUM_POINTS,s=this.filteredBuffer.sampleRate,i=Math.floor(this.pausedAt*s),o=Math.pow(2,this.targetBitDepth)/2,l=this.filteredBuffer.numberOfChannels;this._windowData.fill(0);for(let d=0;d<l;d++){const g=this.filteredBuffer.getChannelData(d);for(let _=0;_<t;_++){const m=i+_;if(m<g.length){const p=.5*(1-Math.cos(2*Math.PI*_/(t-1)));let S=g[m]*p;S=Math.round(S*o)/o,this._windowData[_]+=S}}}if(l>1){const d=1/l;for(let g=0;g<t;g++)this._windowData[g]*=d}this.computeFFT(this._windowData,this._fftMag);for(let d=0;d<e;d++)this._basebandDb[d]=20*Math.log10(this._fftMag[d]+1e-10);const c=d=>{const g=Math.abs(d);if(g>s/2)return-120;const _=Math.round(g/(s/2)*(e-1));return _>=e?-120:this._basebandDb[_]},h=-48e3,u=48e3,f=this.targetSampleRate;for(let d=0;d<n;d++){const g=h+d/(n-1)*(u-h);this._graphFreqs[d]=g,this._baseGraph[d]=c(g);let _=-120;const m=Math.ceil((g-s/2)/f),p=Math.floor((g+s/2)/f);for(let S=m;S<=p;S++){if(S===0)continue;const y=c(g-S*f);y>_&&(_=y)}this._copiesGraph[d]=_,this._aliasingGraph[d]=g>=-f/2&&g<=f/2?_:-120}this.realtimeDisplay.clear(),this.realtimeDisplay.drawGrid(),this.realtimeDisplay.drawLowPassOverlay(this.lpfCutoff,performance.now()<this.lpfEditHighlightUntil),this.realtimeDisplay.drawSamplingGrid(f),this.realtimeDisplay.drawSpectrum(this._graphFreqs,this._copiesGraph,"rgba(255, 255, 255, 0.3)",1.5),this.realtimeDisplay.drawSpectrum(this._graphFreqs,this._aliasingGraph,"rgba(255, 77, 109, 0.8)",2,1,!0),this.realtimeDisplay.drawSpectrum(this._graphFreqs,this._baseGraph,"#52cffe",2.5)}computeFFT(t,e){const n=t.length,s=this._fftReal,i=this._fftImag;for(let l=0;l<n;l++)s[l]=t[l],i[l]=0;let a=0;for(let l=0;l<n-1;l++){if(l<a){let h=s[l];s[l]=s[a],s[a]=h,h=i[l],i[l]=i[a],i[a]=h}let c=n>>1;for(;c<=a;)a-=c,c>>=1;a+=c}for(let l=1;l<n;l<<=1){const c=l<<1,h=Math.PI/l;for(let u=0;u<l;u++){const f=-u*h,d=Math.cos(f),g=Math.sin(f);for(let _=u;_<n;_+=c){const m=_+l,p=d*s[m]-g*i[m],S=d*i[m]+g*s[m];s[m]=s[_]-p,i[m]=i[_]-S,s[_]+=p,i[_]+=S}}}const o=n/2;for(let l=0;l<o;l++)e[l]=Math.sqrt(s[l]*s[l]+i[l]*i[l])/n}startRealtimeVisualization(){const t=()=>{if(!this.isPlaying||!this.audioContext)return;const e=this.audioContext.currentTime-this.startTime;this.filteredBuffer&&(this.pausedAt=Math.min(e,this.filteredBuffer.duration),this.waveformTimeline.setPlayhead(this.pausedAt)),this.updateVisualization(),this.animationId=requestAnimationFrame(t)};t()}stopAudio(){if(this.sourceNode){try{this.sourceNode.stop()}catch{}this.sourceNode.disconnect(),this.sourceNode=null}this.gainNode&&(this.gainNode.disconnect(),this.gainNode=null),this.dspNode&&(this.dspNode.disconnect(),this.dspNode=null),this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.isPlaying=!1,this.filteredBuffer&&this.waveformTimeline.setPlayhead(this.pausedAt),this.resetTransportButtons(),this.infoPanel.updateItem("STATUS","READY",!1)}resetTransportButtons(){this.playOriginalButton.setActive(!1),this.playOriginalButton.setText(this.playModeLabels.original),this.playAliasedButton.setActive(!1),this.playAliasedButton.setText(this.playModeLabels.aliased),this.playAliasOnlyButton.setActive(!1),this.playAliasOnlyButton.setText(this.playModeLabels.alias_only)}destroy(){this.stopAudio(),window.removeEventListener("resize",this.onResize),this.audioContext=null}};D(de,"VIS_WINDOW_SIZE",512),D(de,"VIS_NUM_POINTS",800),D(de,"VIS_NUM_BINS",de.VIS_WINDOW_SIZE/2);let ur=de;class ll{constructor(t){D(this,"container");D(this,"animId",null);D(this,"timeCanvas");D(this,"phasorCanvas");D(this,"responseCanvas");D(this,"N",16);D(this,"samples",new Array(16).fill(0));D(this,"isDragging",!1);D(this,"sharedAudio",hi.getInstance());D(this,"audioCtx",null);D(this,"isPlaying",!1);D(this,"audioMode","sweep");D(this,"oscNode",null);D(this,"oscGainNode",null);D(this,"fileSourceNode",null);D(this,"filterNode",null);D(this,"analyserNode",null);D(this,"uploadedBuffer",null);D(this,"playBtn");D(this,"fileInput");D(this,"onResize",()=>this.resizeLayout());D(this,"omega",0);D(this,"assumedSampleRate",44100);const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.applyPreset("lp"),this.buildUI(),window.addEventListener("resize",this.onResize),this.attachMouseEvents(),this.startAnimation(),this.resizeLayout()}applyPreset(t){const e=(this.N-1)/2,n=t==="hp"?3*Math.PI/4:Math.PI/4;for(let i=0;i<this.N;i++){const a=i-e;let o=a===0?n/Math.PI:Math.sin(n*a)/(Math.PI*a);const l=.54-.46*Math.cos(2*Math.PI*i/(this.N-1));if(o*=l,t==="hp")o*=Math.cos(Math.PI*i);else if(t==="bp")o*=Math.cos(Math.PI/2*i)*2;else if(t==="notch"){const c=o*Math.cos(Math.PI/2*i)*2;o=(a===0?1:Math.sin(Math.PI*a)/(Math.PI*a))*l-c}this.samples[i]=o}const s=Math.max(...this.samples.map(Math.abs));s>0&&(this.samples=this.samples.map(i=>i/s)),this.isPlaying&&this.audioMode==="file"&&this.updateFilterCoefficients()}changeN(t){const e=[...this.samples];this.N=t,this.samples=new Array(this.N).fill(0);for(let n=0;n<Math.min(e.length,this.N);n++)this.samples[n]=e[n];this.isPlaying&&this.audioMode==="file"&&this.updateFilterCoefficients()}computeMag(t){const e=this.computeComplex(t);return Math.sqrt(e.re*e.re+e.im*e.im)}computeComplex(t){let e=0,n=0;for(let s=0;s<this.N;s++){const i=-t*s;e+=this.samples[s]*Math.cos(i),n+=this.samples[s]*Math.sin(i)}return{re:e,im:n}}async toggleAudio(){this.isPlaying?this.stopAudio():await this.startAudio()}async initAudioContext(){this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext(),this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=2048,this.analyserNode.smoothingTimeConstant=.8,this.analyserNode.connect(this.audioCtx.destination)),this.audioCtx.state==="suspended"&&await this.audioCtx.resume()}async startAudio(){try{if(await this.initAudioContext(),this.audioMode==="file"&&!this.uploadedBuffer){this.audioMode="sweep";const t=document.getElementById("audio-mode-select");t&&(t.value="sweep")}this.audioMode==="sweep"?this.startSweepAudio():this.audioMode==="file"&&this.startFileAudio(),this.isPlaying=!0,this.playBtn.textContent="⏸ Stop Audio",this.playBtn.style.background="var(--color-accent-secondary)",this.playBtn.style.color="#000"}catch(t){console.error("Audio playback failed:",t)}}stopAudio(){this.oscNode&&(this.oscNode.stop(),this.oscNode.disconnect(),this.oscNode=null),this.oscGainNode&&(this.oscGainNode.disconnect(),this.oscGainNode=null),this.fileSourceNode&&(this.fileSourceNode.stop(),this.fileSourceNode.disconnect(),this.fileSourceNode=null),this.filterNode&&(this.filterNode.disconnect(),this.filterNode=null),this.isPlaying=!1,this.playBtn.textContent="▶ Play Audio",this.playBtn.style.background="transparent",this.playBtn.style.color="var(--color-text-primary)"}startSweepAudio(){!this.audioCtx||!this.analyserNode||(this.oscNode=this.audioCtx.createOscillator(),this.oscGainNode=this.audioCtx.createGain(),this.oscNode.type="sine",this.oscGainNode.gain.value=0,this.oscNode.connect(this.oscGainNode),this.oscGainNode.connect(this.analyserNode),this.oscNode.start())}startFileAudio(){!this.audioCtx||!this.uploadedBuffer||!this.analyserNode||(this.fileSourceNode=this.audioCtx.createBufferSource(),this.fileSourceNode.buffer=this.uploadedBuffer,this.fileSourceNode.loop=!0,this.updateFilterCoefficients(!0),this.fileSourceNode.start())}updateFilterCoefficients(t=!1){if(!this.audioCtx||!this.fileSourceNode||!this.analyserNode)return;const e=this.samples.slice();let n=e.reduce((l,c)=>l+Math.abs(c),0);n<.001&&(e[0]=.001,n=.001);const s=n*.5,i=e.map(l=>l/s),a=this.audioCtx.createConvolver();a.normalize=!1;const o=this.audioCtx.createBuffer(1,i.length,this.audioCtx.sampleRate);o.getChannelData(0).set(i),a.buffer=o,t||(this.fileSourceNode.disconnect(),this.filterNode&&this.filterNode.disconnect()),this.filterNode=a,this.fileSourceNode.connect(this.filterNode),this.filterNode.connect(this.analyserNode)}updateLiveAudioSweep(){if(!this.audioCtx||!this.isPlaying||this.audioMode!=="sweep"||!this.oscNode||!this.oscGainNode)return;let t=this.omega;t>Math.PI&&(t=2*Math.PI-t);const e=100*Math.pow(this.assumedSampleRate/200,t/Math.PI),n=this.computeMag(this.omega);let s=this.samples.reduce((o,l)=>o+Math.abs(l),.001);const i=Math.min(1,n/s)*.4,a=this.audioCtx.currentTime;this.oscNode.frequency.setTargetAtTime(e,a,.05),this.oscGainNode.gain.setTargetAtTime(i,a,.05)}async handleFileUpload(t){await this.initAudioContext();const e=new FileReader;e.onload=async n=>{var i;const s=(i=n.target)==null?void 0:i.result;try{this.uploadedBuffer=await this.sharedAudio.decodeAudioData(s);const a=document.getElementById("audio-mode-select");a&&(a.value="file"),this.audioMode="file",this.isPlaying?(this.stopAudio(),this.startAudio()):await this.toggleAudio()}catch(a){alert("Error decoding audio file."),console.error(a)}},e.readAsArrayBuffer(t)}buildUI(){document.body.style.overflowY="auto",document.body.style.color="#d0d6e0";const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;justify-content:center;padding:6px 0 12px;",t.innerHTML='<div style="font-size:12px;font-weight:700;letter-spacing:.15em;color:var(--color-accent-primary);">Z-TRANSFORM: HEARING THE FILTER</div>',this.container.appendChild(t);const e=document.createElement("div");e.style.cssText="display:flex; flex-wrap: wrap; gap: 12px; align-items:center; justify-content:flex-start; margin-bottom:12px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;";const n=document.createElement("div");n.innerHTML='<label style="font-size: 11px; margin-right: 6px;">Samples (N):</label>';const s=document.createElement("select");s.innerHTML='<option value="8">8</option><option value="16" selected>16</option><option value="32">32</option><option value="64">64</option>',s.style.cssText="background: #1a1a24; color: #fff; border: 1px solid #333; padding: 4px; border-radius: 4px;",s.onchange=g=>this.changeN(parseInt(g.target.value)),n.appendChild(s),e.appendChild(n);const i=document.createElement("div");i.innerHTML='<label style="font-size: 11px; margin-right: 6px;">Audio Source:</label>';const a=document.createElement("select");a.id="audio-mode-select",a.innerHTML='<option value="sweep">Sine Wave Sweep</option><option value="file">Uploaded Audio File</option>',a.style.cssText="background: #1a1a24; color: #fff; border: 1px solid #333; padding: 4px; border-radius: 4px;",a.onchange=g=>{this.audioMode=g.target.value,this.isPlaying&&(this.stopAudio(),this.startAudio())},i.appendChild(a),e.appendChild(i),this.playBtn=document.createElement("button"),this.playBtn.textContent="▶ Play Audio",this.playBtn.style.cssText="padding: 6px 16px; border-radius: 4px; border: 1px solid var(--color-accent-primary); background: transparent; color: #fff; cursor: pointer; font-weight: bold;",this.playBtn.onclick=()=>this.toggleAudio(),e.appendChild(this.playBtn);const o=document.createElement("label");o.textContent="📁 Upload MP3/WAV",o.style.cssText="padding: 6px 16px; border-radius: 4px; background: #333; color: #fff; cursor: pointer; font-size: 12px;",this.fileInput=document.createElement("input"),this.fileInput.type="file",this.fileInput.accept="audio/*",this.fileInput.style.display="none",this.fileInput.onchange=g=>{var m;const _=(m=g.target.files)==null?void 0:m[0];_&&this.handleFileUpload(_)},o.appendChild(this.fileInput),e.appendChild(o);const l=document.createElement("div");l.style.cssText="display:flex; gap: 8px; margin-left: auto;",[{id:"lp",label:"Low Pass"},{id:"hp",label:"High Pass"},{id:"bp",label:"Band Pass"},{id:"notch",label:"Notch"}].forEach(g=>{const _=document.createElement("button");_.textContent=g.label,_.style.cssText="background: #2a2a36; color: #fff; border: 1px solid #444; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 11px;",_.onclick=()=>this.applyPreset(g.id),l.appendChild(_)}),e.appendChild(l),this.container.appendChild(e);const h=this.makePanel("TIME DOMAIN x[n] · DRAG BARS TO DRAW FILTER IMPULSE RESPONSE");h.style.width="100%",this.timeCanvas=this.makeCanvas(h,900,160),this.timeCanvas.style.cursor="crosshair",this.container.appendChild(h);const u=document.createElement("div");u.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;";const f=this.makePanel("VECTOR CHAIN · TIP-TO-TAIL PHASOR ROTATION");this.phasorCanvas=this.makeCanvas(f,450,420),u.appendChild(f);const d=this.makePanel("MAGNITUDE RESPONSE |X(e^jω)| · FREQUENCY SPECTRUM");this.responseCanvas=this.makeCanvas(d,450,420),u.appendChild(d),this.container.appendChild(u)}makePanel(t){const e=document.createElement("div");e.style.cssText="background:#0a0a0f; border:1px solid #333; border-radius:6px; overflow:hidden; position:relative; background-image:linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size:20px 20px;";const n=document.createElement("div");return n.style.cssText="position:absolute;top:5px;left:9px;font-size:9px;font-weight:700;letter-spacing:.05em;color:#aaa;text-transform:uppercase;z-index:2;pointer-events:none;",n.textContent=t,e.appendChild(n),e}makeCanvas(t,e,n){const s=window.devicePixelRatio||1,i=document.createElement("canvas");return i.width=e*s,i.height=n*s,i.style.width=e+"px",i.style.height=n+"px",i.style.display="block",i.getContext("2d").scale(s,s),t.appendChild(i),i}resizeCanvas(t,e,n){const s=window.devicePixelRatio||1;t.width=Math.max(100,Math.floor(e))*s,t.height=Math.max(80,Math.floor(n))*s,t.style.width=`${Math.max(100,Math.floor(e))}px`,t.style.height=`${Math.max(80,Math.floor(n))}px`;const i=t.getContext("2d");i.setTransform(1,0,0,1,0,0),i.scale(s,s)}resizeLayout(){const t=Math.max(700,this.container.clientWidth-2),n=Math.floor((t-8)/2);this.resizeCanvas(this.timeCanvas,t,160),this.resizeCanvas(this.phasorCanvas,n,420),this.resizeCanvas(this.responseCanvas,n,420)}attachMouseEvents(){const t=e=>{if(!this.isDragging&&e.type!=="mousedown")return;const n=this.timeCanvas.getBoundingClientRect(),s=e.clientX-n.left,i=e.clientY-n.top,a=this.timeCanvas.clientWidth,o=this.timeCanvas.clientHeight,l=a/this.N;let c=Math.floor(s/l);c=Math.max(0,Math.min(this.N-1,c));const h=o/2,u=h*.8;let f=-(i-h)/u;f=Math.max(-1,Math.min(1,f)),this.samples[c]=f,this.isPlaying&&this.audioMode==="file"&&this.updateFilterCoefficients()};this.timeCanvas.addEventListener("mousedown",e=>{this.isDragging=!0,t(e)}),this.timeCanvas.addEventListener("mousemove",t),window.addEventListener("mouseup",()=>{this.isDragging=!1})}drawTimeDomain(){const t=this.timeCanvas,e=window.devicePixelRatio||1,n=t.width/e,s=t.height/e,i=t.getContext("2d"),a=s/2;i.clearRect(0,0,n,s),i.strokeStyle="rgba(255,255,255,0.15)",i.lineWidth=1,i.beginPath(),i.moveTo(0,a),i.lineTo(n,a),i.stroke();const o=a*.8,l=n/this.N;for(let c=0;c<this.N;c++){const h=this.samples[c],u=c*l+l/2,f=a-h*o;i.beginPath(),i.moveTo(u,a),i.lineTo(u,f),i.strokeStyle="rgba(82,207,254,0.6)",i.lineWidth=Math.max(2,16-this.N/8),i.stroke(),i.beginPath(),i.arc(u,f,Math.max(2,6-this.N/16),0,2*Math.PI),i.fillStyle=h>=0?"#52cffe":"#ff869a",i.fill()}}drawPhasorChain(){const t=this.phasorCanvas,e=window.devicePixelRatio||1,n=t.width/e,s=t.height/e,i=t.getContext("2d"),a=n/2,o=s/2;let l=this.samples.reduce((g,_)=>g+Math.abs(_),0);l<1&&(l=1);const c=Math.min(n,s)*.4/l;i.clearRect(0,0,n,s),i.strokeStyle="rgba(255,255,255,0.1)",i.beginPath(),i.moveTo(0,o),i.lineTo(n,o),i.stroke(),i.beginPath(),i.moveTo(a,0),i.lineTo(a,s),i.stroke(),i.beginPath();const h=256;for(let g=0;g<=h;g++){const _=2*Math.PI*g/h,m=this.computeComplex(_),p=a+m.re*c,S=o-m.im*c;g===0?i.moveTo(p,S):i.lineTo(p,S)}i.strokeStyle="rgba(82,207,254,0.3)",i.lineWidth=1.5,i.stroke();let u=a,f=o;for(let g=0;g<this.N;g++){const _=this.samples[g];if(Math.abs(_)<.01)continue;const m=-this.omega*g,p=_*Math.cos(m)*c,S=-_*Math.sin(m)*c,y=u+p,b=f+S;i.beginPath(),i.moveTo(u,f),i.lineTo(y,b);const C=g/this.N,T=Math.floor(82*(1-C)+255*C),w=Math.floor(207*(1-C)+134*C),F=Math.floor(254*(1-C)+154*C);i.strokeStyle=`rgb(${T},${w},${F})`,i.lineWidth=2,i.stroke(),u=y,f=b}i.beginPath(),i.moveTo(a,o),i.lineTo(u,f),i.strokeStyle="rgba(255,255,255,0.7)",i.lineWidth=1.5,i.setLineDash([4,4]),i.stroke(),i.setLineDash([]),i.beginPath(),i.arc(u,f,4,0,2*Math.PI),i.fillStyle="#fff",i.fill();const d=this.omega/(2*Math.PI)*this.assumedSampleRate;i.fillStyle="rgba(0,0,0,0.7)",i.fillRect(0,0,n,26),i.fillStyle="#fff",i.font="11px monospace",i.textAlign="left",i.fillText(`ω = ${this.omega.toFixed(2)} rad  |  Freq: ${Math.round(d)} Hz`,10,18)}drawResponse(){const t=this.responseCanvas,e=window.devicePixelRatio||1,n=t.width/e,s=t.height/e,i=t.getContext("2d"),a={l:40,r:20,t:30,b:30},o=n-a.l-a.r,l=s-a.t-a.b;i.clearRect(0,0,n,s);const c=256,h=new Float32Array(c);let u=.1;for(let C=0;C<c;C++){const T=2*Math.PI*C/(c-1);h[C]=this.computeMag(T),h[C]>u&&(u=h[C])}const f=u*1.1;i.fillStyle="rgba(255,255,255,0.018)",i.fillRect(a.l+o/2,a.t,o/2,l),i.strokeStyle="rgba(255,255,255,0.05)",i.lineWidth=1;for(let C=0;C<=4;C++){const T=a.t+l-C/4*l;i.beginPath(),i.moveTo(a.l,T),i.lineTo(a.l+o,T),i.stroke()}if(i.strokeStyle="rgba(255,255,255,0.22)",i.lineWidth=1,i.setLineDash([3,4]),i.beginPath(),i.moveTo(a.l+o/2,a.t),i.lineTo(a.l+o/2,a.t+l),i.stroke(),i.setLineDash([]),i.save(),i.fillStyle="rgba(180,180,180,0.28)",i.font="9px monospace",i.textAlign="center",i.fillText("← negative frequencies →",a.l+o*.75,a.t+14),i.restore(),this.analyserNode&&this.isPlaying){const C=this.analyserNode.frequencyBinCount,T=new Uint8Array(C);this.analyserNode.getByteFrequencyData(T),i.beginPath();for(let w=0;w<C;w++){const F=a.l+w/C*(o/2),E=T[w]/255,M=a.t+l-E*l;w===0?i.moveTo(F,M):i.lineTo(F,M)}i.strokeStyle="rgba(255, 134, 154, 0.75)",i.lineWidth=1.5,i.stroke(),i.beginPath();for(let w=0;w<C;w++){const F=C-1-w,E=a.l+o/2+w/C*(o/2),M=T[F]/255,P=a.t+l-M*l;w===0?i.moveTo(E,P):i.lineTo(E,P)}i.strokeStyle="rgba(180, 180, 180, 0.38)",i.lineWidth=1.5,i.stroke()}const d=Math.floor(c/2);i.beginPath();for(let C=0;C<=d;C++){const T=a.l+C/(c-1)*o,w=a.t+l-h[C]/f*l;C===0?i.moveTo(T,w):i.lineTo(T,w)}i.strokeStyle="#52cffe",i.lineWidth=2.5,i.stroke(),i.beginPath();for(let C=d;C<c;C++){const T=a.l+C/(c-1)*o,w=a.t+l-h[C]/f*l;C===d?i.moveTo(T,w):i.lineTo(T,w)}i.strokeStyle="rgba(160, 160, 160, 0.52)",i.lineWidth=2.5,i.stroke();const g=a.l+this.omega/(2*Math.PI)*o,_=this.computeMag(this.omega),m=a.t+l-_/f*l;i.beginPath(),i.moveTo(g,a.t),i.lineTo(g,a.t+l),i.strokeStyle="rgba(255,255,255,0.5)",i.setLineDash([4,4]),i.stroke(),i.setLineDash([]),i.beginPath(),i.arc(g,m,6,0,2*Math.PI),i.fillStyle="#fff",i.fill();const p=this.omega<=Math.PI?this.omega/Math.PI*(this.assumedSampleRate/2):(2*Math.PI-this.omega)/Math.PI*(this.assumedSampleRate/2),S=this.omega<=Math.PI?`${Math.round(p)} Hz`:`−${Math.round(p)} Hz`;i.fillStyle=this.omega<=Math.PI?"#fff":"rgba(200,200,200,0.8)",i.font="10px monospace",i.textAlign="center",i.fillText(S,g,m-12),i.fillStyle="rgba(255,255,255,0.5)",i.font="10px monospace",i.textAlign="center",[["0 Hz",0],["11 kHz",1/4],["Nyquist",1/2]].forEach(([C,T])=>{i.fillStyle="rgba(255,255,255,0.55)",i.fillText(C,a.l+T*o,s-10)}),[["−11 kHz",3/4],["DC (0 Hz)",1]].forEach(([C,T])=>{i.fillStyle="rgba(180,180,180,0.4)",i.fillText(C,a.l+T*o,s-10)})}startAnimation(){let t=0;const e=n=>{const s=Math.min((n-t)/1e3,.05);t=n,this.omega=(this.omega+s*.4)%(2*Math.PI),this.updateLiveAudioSweep(),this.drawTimeDomain(),this.drawPhasorChain(),this.drawResponse(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}destroy(){this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(),this.audioCtx=null,document.body.style.overflowY="",window.removeEventListener("resize",this.onResize)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="168",ai={ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cl=0,da=1,hl=2,vo=1,ul=2,en=3,Ke=0,Ae=1,Ie=2,_n=0,oi=1,fa=2,pa=3,ma=4,dl=5,Rn=100,fl=101,pl=102,ml=103,gl=104,_l=200,xl=201,vl=202,Ml=203,dr=204,fr=205,yl=206,Sl=207,El=208,bl=209,Tl=210,Al=211,wl=212,Cl=213,Rl=214,Pl=0,Dl=1,Ll=2,vs=3,Il=4,Nl=5,Ul=6,Fl=7,Mo=0,Ol=1,Bl=2,xn=0,zl=1,kl=2,Hl=3,Gl=4,Vl=5,Wl=6,Xl=7,yo=300,ui=301,di=302,pr=303,mr=304,ws=306,gr=1e3,Ln=1001,_r=1002,Oe=1003,ql=1004,Fi=1005,Ge=1006,Fs=1007,In=1008,an=1009,So=1010,Eo=1011,Ci=1012,Yr=1013,Un=1014,sn=1015,Ri=1016,Kr=1017,$r=1018,fi=1020,bo=35902,To=1021,Ao=1022,Ve=1023,wo=1024,Co=1025,li=1026,pi=1027,Ro=1028,Zr=1029,Po=1030,jr=1031,Jr=1033,us=33776,ds=33777,fs=33778,ps=33779,xr=35840,vr=35841,Mr=35842,yr=35843,Sr=36196,Er=37492,br=37496,Tr=37808,Ar=37809,wr=37810,Cr=37811,Rr=37812,Pr=37813,Dr=37814,Lr=37815,Ir=37816,Nr=37817,Ur=37818,Fr=37819,Or=37820,Br=37821,ms=36492,zr=36494,kr=36495,Do=36283,Hr=36284,Gr=36285,Vr=36286,Yl=3200,Kl=3201,$l=0,Zl=1,gn="",Xe="srgb",Mn="srgb-linear",Qr="display-p3",Cs="display-p3-linear",Ms="linear",Zt="srgb",ys="rec709",Ss="p3",kn=7680,ga=519,jl=512,Jl=513,Ql=514,Lo=515,tc=516,ec=517,nc=518,ic=519,_a=35044,xa="300 es",rn=2e3,Es=2001;class Bn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const i=s.indexOf(e);i!==-1&&s.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,Wr=180/Math.PI;function Pi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[r&255]+xe[r>>8&255]+xe[r>>16&255]+xe[r>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function _e(r,t,e){return Math.max(t,Math.min(e,r))}function sc(r,t){return(r%t+t)%t}function Os(r,t,e){return(1-e)*r+e*t}function _i(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function be(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rc={DEG2RAD:gs};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*n-a*s+t.x,this.y=i*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,i,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,o,l,c)}set(t,e,n,s,i,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=i,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],y=s[4],b=s[7],C=s[2],T=s[5],w=s[8];return i[0]=a*_+o*S+l*C,i[3]=a*m+o*y+l*T,i[6]=a*p+o*b+l*w,i[1]=c*_+h*S+u*C,i[4]=c*m+h*y+u*T,i[7]=c*p+h*b+u*w,i[2]=f*_+d*S+g*C,i[5]=f*m+d*y+g*T,i[8]=f*p+d*b+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*i*h+n*o*l+s*i*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*i,d=c*i-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*i-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*i)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new It;function Io(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ac(){const r=bs("canvas");return r.style.display="block",r}const va={};function Ai(r){r in va||(va[r]=!0,console.warn(r))}function oc(r,t,e){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}const Ma=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ya=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xi={[Mn]:{transfer:Ms,primaries:ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Xe]:{transfer:Zt,primaries:ys,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Cs]:{transfer:Ms,primaries:Ss,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(ya),fromReference:r=>r.applyMatrix3(Ma)},[Qr]:{transfer:Zt,primaries:Ss,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(ya),fromReference:r=>r.applyMatrix3(Ma).convertLinearToSRGB()}},lc=new Set([Mn,Cs]),Wt={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!lc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=xi[t].toReference,s=xi[e].fromReference;return s(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return xi[r].primaries},getTransfer:function(r){return r===gn?Ms:xi[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(xi[t].luminanceCoefficients)}};function ci(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hn;class cc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=bs("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=ci(i[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hc=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?i.push(ks(s[a].image)):i.push(ks(s[a]))}else i=ks(s);n.url=i}return e||(t.images[this.uuid]=n),n}}function ks(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uc=0;class we extends Bn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Ln,s=Ln,i=Ge,a=In,o=Ve,l=an,c=we.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Pi(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=yo;we.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*i,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,i;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(d+1)/2,C=(p+1)/2,T=(h+f)/4,w=(u+_)/4,F=(g+m)/4;return y>b&&y>C?y<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(y),s=T/n,i=w/n):b>C?b<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(b),n=T/s,i=F/s):C<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(C),n=w/i,s=F/i),this.set(n,s,i,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dc extends Bn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const i=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends dc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uo extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fc extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,i,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=i[a+0],d=i[a+1],g=i[a+2],_=i[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),T=Math.atan2(C,p*S);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const b=o*S;if(l=l*m+f*b,c=c*m+d*b,h=h*m+g*b,u=u*m+_*b,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,i,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=i[a],f=i[a+1],d=i[a+2],g=i[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,i=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(i/2),f=l(n/2),d=l(s/2),g=l(i/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],i=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(i-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(i+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(i-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(i+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,i=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-i*l,this._y=s*h+a*l+i*o-n*c,this._z=i*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-i*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,i=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+i*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*i+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*s,this.y=i[1]*e+i[4]*n+i[7]*s,this.z=i[2]*e+i[5]*n+i[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*e+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*e+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,i=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-i*s),u=2*(i*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-i*u,this.z=s+l*u+i*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*s,this.y=i[1]*e+i[5]*n+i[9]*s,this.z=i[2]*e+i[6]*n+i[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,i=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-i*o,this.y=i*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new N,Sa=new On;class Di{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ze):ze.fromBufferAttribute(i,a),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(t.matrixWorld),this.union(Oi)}const s=t.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),Bi.subVectors(this.max,vi),Gn.subVectors(t.a,vi),Vn.subVectors(t.b,vi),Wn.subVectors(t.c,vi),cn.subVectors(Vn,Gn),hn.subVectors(Wn,Vn),Sn.subVectors(Gn,Wn);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-Sn.z,Sn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,Sn.z,0,-Sn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-Sn.y,Sn.x,0];return!Gs(e,Gn,Vn,Wn,Bi)||(e=[1,0,0,0,1,0,0,0,1],!Gs(e,Gn,Vn,Wn,Bi))?!1:(zi.crossVectors(cn,hn),e=[zi.x,zi.y,zi.z],Gs(e,Gn,Vn,Wn,Bi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new N,new N,new N,new N,new N,new N,new N,new N],ze=new N,Oi=new Di,Gn=new N,Vn=new N,Wn=new N,cn=new N,hn=new N,Sn=new N,vi=new N,Bi=new N,zi=new N,En=new N;function Gs(r,t,e,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){En.fromArray(r,i);const o=s.x*Math.abs(En.x)+s.y*Math.abs(En.y)+s.z*Math.abs(En.z),l=t.dot(En),c=e.dot(En),h=n.dot(En);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pc=new Di,Mi=new N,Vs=new N;class Rs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pc.setFromPoints(t).getCenter(n);let s=0;for(let i=0,a=t.length;i<a;i++)s=Math.max(s,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Vs)),this.expandByPoint(Mi.copy(t.center).sub(Vs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new N,Ws=new N,ki=new N,un=new N,Xs=new N,Hi=new N,qs=new N;class ta{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ws.copy(t).add(e).multiplyScalar(.5),ki.copy(e).sub(t).normalize(),un.copy(this.origin).sub(Ws);const i=t.distanceTo(e)*.5,a=-this.direction.dot(ki),o=un.dot(this.direction),l=-un.dot(ki),c=un.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=i*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=i,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-i,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*i+o)),f=u>0?-i:Math.min(Math.max(-i,-l),i),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(u=Math.max(0,-(a*i+o)),f=u>0?i:Math.min(Math.max(-i,-l),i),d=-u*u+f*(f+2*l)+c);else f=a>0?-i:i,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ws).addScaledVector(ki,f),d}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),s=je.dot(je)-n*n,i=t.radius*t.radius;if(s>i)return null;const a=Math.sqrt(i-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,i,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(i=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(i=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,s,i){Xs.subVectors(e,t),Hi.subVectors(n,t),qs.crossVectors(Xs,Hi);let a=this.direction.dot(qs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);const l=o*this.direction.dot(Hi.crossVectors(un,Hi));if(l<0)return null;const c=o*this.direction.dot(Xs.cross(un));if(c<0||l+c>a)return null;const h=-o*un.dot(qs);return h<0?null:this.at(h/a,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,i,a,o,l,c,h,u,f,d,g,_,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,o,l,c,h,u,f,d,g,_,m)}set(t,e,n,s,i,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=i,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Xn.setFromMatrixColumn(t,0).length(),i=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,i=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(i),u=Math.sin(i);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mc,t,gc)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),dn.crossVectors(n,De),dn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),dn.crossVectors(n,De)),dn.normalize(),Gi.crossVectors(De,dn),s[0]=dn.x,s[4]=Gi.x,s[8]=De.x,s[1]=dn.y,s[5]=Gi.y,s[9]=De.y,s[2]=dn.z,s[6]=Gi.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],b=n[11],C=n[15],T=s[0],w=s[4],F=s[8],E=s[12],M=s[1],P=s[5],H=s[9],k=s[13],K=s[2],X=s[6],V=s[10],$=s[14],G=s[3],ot=s[7],ut=s[11],gt=s[15];return i[0]=a*T+o*M+l*K+c*G,i[4]=a*w+o*P+l*X+c*ot,i[8]=a*F+o*H+l*V+c*ut,i[12]=a*E+o*k+l*$+c*gt,i[1]=h*T+u*M+f*K+d*G,i[5]=h*w+u*P+f*X+d*ot,i[9]=h*F+u*H+f*V+d*ut,i[13]=h*E+u*k+f*$+d*gt,i[2]=g*T+_*M+m*K+p*G,i[6]=g*w+_*P+m*X+p*ot,i[10]=g*F+_*H+m*V+p*ut,i[14]=g*E+_*k+m*$+p*gt,i[3]=S*T+y*M+b*K+C*G,i[7]=S*w+y*P+b*X+C*ot,i[11]=S*F+y*H+b*V+C*ut,i[15]=S*E+y*k+b*$+C*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],i=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+i*l*u-s*c*u-i*o*f+n*c*f+s*o*d-n*l*d)+_*(+e*l*d-e*c*f+i*a*f-s*a*d+s*c*h-i*l*h)+m*(+e*c*u-e*o*d-i*a*u+n*a*d+i*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,y=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,b=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,T=e*S+n*y+s*b+i*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=S*w,t[1]=(_*f*i-u*m*i-_*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(o*m*i-_*l*i+_*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(u*l*i-o*f*i-u*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=y*w,t[5]=(h*m*i-g*f*i+g*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(g*l*i-a*m*i-g*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*i-h*l*i+h*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=b*w,t[9]=(g*u*i-h*_*i-g*n*d+e*_*d+h*n*p-e*u*p)*w,t[10]=(a*_*i-g*o*i+g*n*c-e*_*c-a*n*p+e*o*p)*w,t[11]=(h*o*i-a*u*i-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=C*w,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*w,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,i=t.z;return e[0]*=n,e[4]*=s,e[8]*=i,e[1]*=n,e[5]*=s,e[9]*=i,e[2]*=n,e[6]*=s,e[10]*=i,e[3]*=n,e[7]*=s,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),i=1-n,a=t.x,o=t.y,l=t.z,c=i*a,h=i*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,i*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,i,a){return this.set(1,n,i,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,i=e._x,a=e._y,o=e._z,l=e._w,c=i+i,h=a+a,u=o+o,f=i*c,d=i*h,g=i*u,_=a*h,m=a*u,p=o*u,S=l*c,y=l*h,b=l*u,C=n.x,T=n.y,w=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+b)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(d-b)*T,s[5]=(1-(f+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+y)*w,s[9]=(m-S)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let i=Xn.set(s[0],s[1],s[2]).length();const a=Xn.set(s[4],s[5],s[6]).length(),o=Xn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),t.x=s[12],t.y=s[13],t.z=s[14],ke.copy(this);const c=1/i,h=1/a,u=1/o;return ke.elements[0]*=c,ke.elements[1]*=c,ke.elements[2]*=c,ke.elements[4]*=h,ke.elements[5]*=h,ke.elements[6]*=h,ke.elements[8]*=u,ke.elements[9]*=u,ke.elements[10]*=u,e.setFromRotationMatrix(ke),n.x=i,n.y=a,n.z=o,this}makePerspective(t,e,n,s,i,a,o=rn){const l=this.elements,c=2*i/(e-t),h=2*i/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===rn)d=-(a+i)/(a-i),g=-2*a*i/(a-i);else if(o===Es)d=-a/(a-i),g=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,i,a,o=rn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-i),f=(e+t)*c,d=(n+s)*h;let g,_;if(o===rn)g=(a+i)*u,_=-2*u;else if(o===Es)g=i*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new N,ke=new ee,mc=new N(0,0,0),gc=new N(1,1,1),dn=new N,Gi=new N,De=new N,Ea=new ee,ba=new On;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,i=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ea.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ea,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ba.setFromEuler(this),this.setFromQuaternion(ba,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _c=0;const Ta=new N,qn=new On,Je=new ee,Vi=new N,yi=new N,xc=new N,vc=new On,Aa=new N(1,0,0),wa=new N(0,1,0),Ca=new N(0,0,1),Ra={type:"added"},Mc={type:"removed"},Yn={type:"childadded",child:null},Ys={type:"childremoved",child:null};class Ee extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new N,e=new on,n=new On,s=new N(1,1,1);function i(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new It}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(Aa,t)}rotateY(t){return this.rotateOnAxis(wa,t)}rotateZ(t){return this.rotateOnAxis(Ca,t)}translateOnAxis(t,e){return Ta.copy(t).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Aa,t)}translateY(t){return this.translateOnAxis(wa,t)}translateZ(t){return this.translateOnAxis(Ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vi.copy(t):Vi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(yi,Vi,this.up):Je.lookAt(Vi,yi,this.up),this.quaternion.setFromRotationMatrix(Je),s&&(Je.extractRotation(s.matrixWorld),qn.setFromRotationMatrix(Je),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ra),Yn.child=t,this.dispatchEvent(Yn),Yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mc),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ra),Yn.child=t,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,t,xc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,vc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];i(t.shapes,u)}else i(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(t.materials,this.material[l]));s.material=o}else s.material=i(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(i(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new N(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new N,Qe=new N,Ks=new N,tn=new N,Kn=new N,$n=new N,Pa=new N,$s=new N,Zs=new N,js=new N;class Ye{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),He.subVectors(t,e),s.cross(He);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(t,e,n,s,i){He.subVectors(s,e),Qe.subVectors(n,e),Ks.subVectors(t,e);const a=He.dot(He),o=He.dot(Qe),l=He.dot(Ks),c=Qe.dot(Qe),h=Qe.dot(Ks),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return i.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,s,i,a,o,l){return this.getBarycoord(t,e,n,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static isFrontFacing(t,e,n,s){return He.subVectors(n,e),Qe.subVectors(t,e),He.cross(Qe).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),He.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,i){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,i)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,i=this.c;let a,o;Kn.subVectors(s,n),$n.subVectors(i,n),$s.subVectors(t,n);const l=Kn.dot($s),c=$n.dot($s);if(l<=0&&c<=0)return e.copy(n);Zs.subVectors(t,s);const h=Kn.dot(Zs),u=$n.dot(Zs);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Kn,a);js.subVectors(t,i);const d=Kn.dot(js),g=$n.dot(js);if(g>=0&&d<=g)return e.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector($n,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Pa.subVectors(i,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Pa,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Kn,a).addScaledVector($n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Js(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=sc(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,a=2*n-i;this.r=Js(a,i,t+1/3),this.g=Js(a,i,t),this.b=Js(a,i,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Oo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Wt.fromWorkingColorSpace(ve.copy(this),t),Math.round(_e(ve.r*255,0,255))*65536+Math.round(_e(ve.g*255,0,255))*256+Math.round(_e(ve.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,s=ve.g,i=ve.b,a=Math.max(n,s,i),o=Math.min(n,s,i);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-i)/u+(s<i?6:0);break;case s:l=(i-n)/u+2;break;case i:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Xe){Wt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,s=ve.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Wi);const n=Os(fn.h,Wi.h,e),s=Os(fn.s,Wi.s,e),i=Os(fn.l,Wi.l,e);return this.setHSL(n,s,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*s,this.g=i[1]*e+i[4]*n+i[7]*s,this.b=i[2]*e+i[5]*n+i[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new zt;zt.NAMES=Oo;let yc=0;class Li extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=oi,this.side=Ke,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Ke&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ga&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(e){const i=s(t.textures),a=s(t.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nn extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new N,Xi=new Ct;class ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_a,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ai("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xi.fromBufferAttribute(this,e),Xi.applyMatrix3(t),this.setXY(e,Xi.x,Xi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_a&&(t.usage=this.usage),t}}class Bo extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zo extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sc=0;const Ue=new ee,Qs=new Ee,Zn=new N,Le=new Di,Si=new Di,ue=new N;class ye extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Io(t)?zo:Bo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new It().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const i=t[n];e.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const i=e[n];Le.setFromBufferAttribute(i),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(Le.min,Si.min),Le.expandByPoint(ue),ue.addVectors(Le.max,Si.max),Le.expandByPoint(ue)):(Le.expandByPoint(Si.min),Le.expandByPoint(Si.max))}Le.getCenter(n);let s=0;for(let i=0,a=t.count;i<a;i++)ue.fromBufferAttribute(t,i),s=Math.max(s,n.distanceToSquared(ue));if(e)for(let i=0,a=e.length;i<a;i++){const o=e[i],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ue.fromBufferAttribute(o,c),l&&(Zn.fromBufferAttribute(t,c),ue.add(Zn)),s=Math.max(s,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;const c=new N,h=new N,u=new N,f=new Ct,d=new Ct,g=new Ct,_=new N,m=new N;function p(F,E,M){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(i,F),d.fromBufferAttribute(i,E),g.fromBufferAttribute(i,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[F].add(_),o[E].add(_),o[M].add(_),l[F].add(m),l[E].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let F=0,E=S.length;F<E;++F){const M=S[F],P=M.start,H=M.count;for(let k=P,K=P+H;k<K;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new N,b=new N,C=new N,T=new N;function w(F){C.fromBufferAttribute(s,F),T.copy(C);const E=o[F];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),b.crossVectors(T,E);const P=b.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,P)}for(let F=0,E=S.length;F<E;++F){const M=S[F],P=M.start,H=M.count;for(let k=P,K=P+H;k<K;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,i=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),i.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,i),u.subVectors(s,i),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),i.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,i),u.subVectors(s,i),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,i=!0)}i&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const i=t.morphAttributes;for(const c in i){const h=[],u=i[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new ee,bn=new ta,qi=new Rs,La=new N,jn=new N,Jn=new N,Qn=new N,tr=new N,Yi=new N,Ki=new Ct,$i=new Ct,Zi=new Ct,Ia=new N,Na=new N,Ua=new N,ji=new N,Ji=new N;class Me extends Ee{constructor(t=new ye,e=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(i&&o){Yi.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const h=o[l],u=i[l];h!==0&&(tr.fromBufferAttribute(u,t),a?Yi.addScaledVector(tr,h):Yi.addScaledVector(tr.sub(e),h))}e.add(Yi)}return e}raycast(t,e){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(i),bn.copy(t.ray).recast(t.near),!(qi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(qi,La)===null||bn.origin.distanceToSquared(La)>(t.far-t.near)**2))&&(Da.copy(i).invert(),bn.copy(t.ray).applyMatrix4(Da),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let s;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv1,u=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,C=y;b<C;b+=3){const T=o.getX(b),w=o.getX(b+1),F=o.getX(b+2);s=Qi(this,p,t,n,c,h,u,T,w,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);s=Qi(this,a,t,n,c,h,u,S,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=S,C=y;b<C;b+=3){const T=b,w=b+1,F=b+2;s=Qi(this,p,t,n,c,h,u,T,w,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,b=m+2;s=Qi(this,a,t,n,c,h,u,S,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ec(r,t,e,n,s,i,a,o){let l;if(t.side===Ae?l=n.intersectTriangle(a,i,s,!0,o):l=n.intersectTriangle(s,i,a,t.side===Ke,o),l===null)return null;Ji.copy(o),Ji.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ji);return c<e.near||c>e.far?null:{distance:c,point:Ji.clone(),object:r}}function Qi(r,t,e,n,s,i,a,o,l,c){r.getVertexPosition(o,jn),r.getVertexPosition(l,Jn),r.getVertexPosition(c,Qn);const h=Ec(r,t,e,n,jn,Jn,Qn,ji);if(h){s&&(Ki.fromBufferAttribute(s,o),$i.fromBufferAttribute(s,l),Zi.fromBufferAttribute(s,c),h.uv=Ye.getInterpolation(ji,jn,Jn,Qn,Ki,$i,Zi,new Ct)),i&&(Ki.fromBufferAttribute(i,o),$i.fromBufferAttribute(i,l),Zi.fromBufferAttribute(i,c),h.uv1=Ye.getInterpolation(ji,jn,Jn,Qn,Ki,$i,Zi,new Ct)),a&&(Ia.fromBufferAttribute(a,o),Na.fromBufferAttribute(a,l),Ua.fromBufferAttribute(a,c),h.normal=Ye.getInterpolation(ji,jn,Jn,Qn,Ia,Na,Ua,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};Ye.getNormal(jn,Jn,Qn,u.normal),h.face=u}return h}class Ii extends ye{constructor(t=1,e=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const o=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,i,0),g("z","y","x",1,-1,n,e,-t,a,i,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,i,4),g("x","y","z",-1,-1,t,e,-n,s,i,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,m,p,S,y,b,C,T,w,F,E){const M=b/w,P=C/F,H=b/2,k=C/2,K=T/2,X=w+1,V=F+1;let $=0,G=0;const ot=new N;for(let ut=0;ut<V;ut++){const gt=ut*P-k;for(let Ft=0;Ft<X;Ft++){const Yt=Ft*M-H;ot[_]=Yt*S,ot[m]=gt*y,ot[p]=K,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ft/w),u.push(1-ut/F),$+=1}}for(let ut=0;ut<F;ut++)for(let gt=0;gt<w;gt++){const Ft=f+gt+X*ut,Yt=f+gt+X*(ut+1),W=f+(gt+1)+X*(ut+1),Q=f+(gt+1)+X*ut;l.push(Ft,Yt,Q),l.push(Yt,W,Q),G+=6}o.addGroup(d,G,E),d+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const s=r[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(r){const t={};for(let e=0;e<r.length;e++){const n=mi(r[e]);for(const s in n)t[s]=n[s]}return t}function bc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ko(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Tc={clone:mi,merge:Se};var Ac=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ac,this.fragmentShader=wc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=bc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ho extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new N,Fa=new Ct,Oa=new Ct;class Fe extends Ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,Fa,Oa),e.subVectors(Oa,Fa)}setViewOffset(t,e,n,s,i,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(i+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class Cc extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(ti,ei,t,e);s.layers=this.layers,this.add(s);const i=new Fe(ti,ei,t,e);i.layers=this.layers,this.add(i);const a=new Fe(ti,ei,t,e);a.layers=this.layers,this.add(a);const o=new Fe(ti,ei,t,e);o.layers=this.layers,this.add(o);const l=new Fe(ti,ei,t,e);l.layers=this.layers,this.add(l);const c=new Fe(ti,ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,i,a,o,l]=e;for(const c of e)this.remove(c);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,i),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Go extends we{constructor(t,e,n,s,i,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,s,i,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rc extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),i=new vn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:_n});i.uniforms.tEquirect.value=e;const a=new Me(s,i),o=e.minFilter;return e.minFilter===In&&(e.minFilter=Ge),new Cc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const i=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(i)}}const er=new N,Pc=new N,Dc=new It;class mn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=er.subVectors(n,e).cross(Pc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dc.getNormalMatrix(t),s=this.coplanarPoint(er).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new Rs,ts=new N;class Vo{constructor(t=new mn,e=new mn,n=new mn,s=new mn,i=new mn,a=new mn){this.planes=[t,e,n,s,i,a]}set(t,e,n,s,i,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(i),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){const n=this.planes,s=t.elements,i=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-i,f-c,m-d,b-p).normalize(),n[1].setComponents(l+i,f+c,m+d,b+p).normalize(),n[2].setComponents(l+a,f+h,m+g,b+S).normalize(),n[3].setComponents(l-a,f-h,m-g,b-S).normalize(),n[4].setComponents(l-o,f-u,m-_,b-y).normalize(),e===rn)n[5].setComponents(l+o,f+u,m+_,b+y).normalize();else if(e===Es)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(t){return Tn.center.set(0,0,0),Tn.radius=.7071067811865476,Tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ts.x=s.normal.x>0?t.max.x:t.min.x,ts.y=s.normal.y>0?t.max.y:t.min.y,ts.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wo(){let r=null,t=!1,e=null,n=null;function s(i,a){e(i,a),n=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){r=i}}}function Lc(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&f.length===0&&r.bufferSubData(c,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:i,update:a}}class Nn extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const i=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let y=0;y<c;y++){const b=y*u-i;g.push(b,-S,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,b=S+c*(p+1),C=S+1+c*(p+1),T=S+1+c*p;d.push(y,b,T),d.push(b,C,T)}this.setIndex(d),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ic=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nc=`#ifdef USE_ALPHAHASH
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
#endif`,Uc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zc=`#ifdef USE_AOMAP
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
#endif`,kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hc=`#ifdef USE_BATCHING
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
#endif`,Gc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qc=`#ifdef USE_IRIDESCENCE
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
#endif`,Yc=`#ifdef USE_BUMPMAP
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
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nh=`#define PI 3.141592653589793
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
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",hh=`
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
}`,uh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mh=`#ifdef USE_GRADIENTMAP
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
}`,yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bh=`uniform bool receiveShadow;
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
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ph=`PhysicalMaterial material;
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
#endif`,Dh=`struct PhysicalMaterial {
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
}`,Lh=`
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,$h=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eu=`#ifdef USE_NORMALMAP
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
#endif`,nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ou=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_u=`float getShadowMask() {
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
}`,xu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
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
#endif`,Mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yu=`#ifdef USE_SKINNING
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
#endif`,Su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Au=`#ifdef USE_TRANSMISSION
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
#endif`,wu=`#ifdef USE_TRANSMISSION
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
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iu=`uniform sampler2D t2D;
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
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ou=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`#include <common>
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
}`,zu=`#if DEPTH_PACKING == 3200
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
}`,ku=`#define DISTANCE
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
}`,Hu=`#define DISTANCE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`uniform float scale;
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
}`,Xu=`uniform vec3 diffuse;
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
}`,qu=`#include <common>
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
}`,Yu=`uniform vec3 diffuse;
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
}`,Ku=`#define LAMBERT
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
}`,$u=`#define LAMBERT
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
}`,Zu=`#define MATCAP
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
}`,ju=`#define MATCAP
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
}`,Ju=`#define NORMAL
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
}`,Qu=`#define NORMAL
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
}`,td=`#define PHONG
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
}`,ed=`#define PHONG
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
}`,nd=`#define STANDARD
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
}`,id=`#define STANDARD
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
}`,sd=`#define TOON
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
}`,rd=`#define TOON
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
}`,ad=`uniform float size;
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
}`,od=`uniform vec3 diffuse;
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
}`,ld=`#include <common>
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
}`,cd=`uniform vec3 color;
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
}`,hd=`uniform float rotation;
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
}`,ud=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:Ic,alphahash_pars_fragment:Nc,alphamap_fragment:Uc,alphamap_pars_fragment:Fc,alphatest_fragment:Oc,alphatest_pars_fragment:Bc,aomap_fragment:zc,aomap_pars_fragment:kc,batching_pars_vertex:Hc,batching_vertex:Gc,begin_vertex:Vc,beginnormal_vertex:Wc,bsdfs:Xc,iridescence_fragment:qc,bumpmap_pars_fragment:Yc,clipping_planes_fragment:Kc,clipping_planes_pars_fragment:$c,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:jc,color_fragment:Jc,color_pars_fragment:Qc,color_pars_vertex:th,color_vertex:eh,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:rh,displacementmap_vertex:ah,emissivemap_fragment:oh,emissivemap_pars_fragment:lh,colorspace_fragment:ch,colorspace_pars_fragment:hh,envmap_fragment:uh,envmap_common_pars_fragment:dh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:Th,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:xh,fog_pars_fragment:vh,gradientmap_pars_fragment:Mh,lightmap_pars_fragment:yh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Eh,lights_pars_begin:bh,lights_toon_fragment:Ah,lights_toon_pars_fragment:wh,lights_phong_fragment:Ch,lights_phong_pars_fragment:Rh,lights_physical_fragment:Ph,lights_physical_pars_fragment:Dh,lights_fragment_begin:Lh,lights_fragment_maps:Ih,lights_fragment_end:Nh,logdepthbuf_fragment:Uh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:kh,map_particle_fragment:Hh,map_particle_pars_fragment:Gh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphinstance_vertex:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:Kh,morphtarget_vertex:$h,normal_fragment_begin:Zh,normal_fragment_maps:jh,normal_pars_fragment:Jh,normal_pars_vertex:Qh,normal_vertex:tu,normalmap_pars_fragment:eu,clearcoat_normal_fragment_begin:nu,clearcoat_normal_fragment_maps:iu,clearcoat_pars_fragment:su,iridescence_pars_fragment:ru,opaque_fragment:au,packing:ou,premultiplied_alpha_fragment:lu,project_vertex:cu,dithering_fragment:hu,dithering_pars_fragment:uu,roughnessmap_fragment:du,roughnessmap_pars_fragment:fu,shadowmap_pars_fragment:pu,shadowmap_pars_vertex:mu,shadowmap_vertex:gu,shadowmask_pars_fragment:_u,skinbase_vertex:xu,skinning_pars_vertex:vu,skinning_vertex:Mu,skinnormal_vertex:yu,specularmap_fragment:Su,specularmap_pars_fragment:Eu,tonemapping_fragment:bu,tonemapping_pars_fragment:Tu,transmission_fragment:Au,transmission_pars_fragment:wu,uv_pars_fragment:Cu,uv_pars_vertex:Ru,uv_vertex:Pu,worldpos_vertex:Du,background_vert:Lu,background_frag:Iu,backgroundCube_vert:Nu,backgroundCube_frag:Uu,cube_vert:Fu,cube_frag:Ou,depth_vert:Bu,depth_frag:zu,distanceRGBA_vert:ku,distanceRGBA_frag:Hu,equirect_vert:Gu,equirect_frag:Vu,linedashed_vert:Wu,linedashed_frag:Xu,meshbasic_vert:qu,meshbasic_frag:Yu,meshlambert_vert:Ku,meshlambert_frag:$u,meshmatcap_vert:Zu,meshmatcap_frag:ju,meshnormal_vert:Ju,meshnormal_frag:Qu,meshphong_vert:td,meshphong_frag:ed,meshphysical_vert:nd,meshphysical_frag:id,meshtoon_vert:sd,meshtoon_frag:rd,points_vert:ad,points_frag:od,shadow_vert:ld,shadow_frag:cd,sprite_vert:hd,sprite_frag:ud},st={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},qe={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};qe.physical={uniforms:Se([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const es={r:0,b:0,g:0},An=new on,dd=new ee;function fd(r,t,e,n,s,i,a){const o=new zt(0);let l=i===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const b=g(S);b===null?p(o,l):b&&b.isColor&&(p(b,1),y=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===ws)?(h===void 0&&(h=new Me(new Ii(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:mi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),An.copy(y.backgroundRotation),An.x*=-1,An.y*=-1,An.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dd.makeRotationFromEuler(An)),h.material.toneMapped=Wt.getTransfer(b.colorSpace)!==Zt,(u!==b||f!==b.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Me(new Nn(2,2),new vn({name:"BackgroundMaterial",uniforms:mi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(b.colorSpace)!==Zt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(es,ko(r)),n.buffers.color.setClear(es.r,es.g,es.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m}}function pd(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=f(null);let i=s,a=!1;function o(M,P,H,k,K){let X=!1;const V=u(k,H,P);i!==V&&(i=V,c(i.object)),X=d(M,k,H,K),X&&g(M,k,H,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(M,P,H,k),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,H){const k=H.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let X=K[P.id];X===void 0&&(X={},K[P.id]=X);let V=X[k];return V===void 0&&(V=f(l()),X[k]=V),V}function f(M){const P=[],H=[],k=[];for(let K=0;K<e;K++)P[K]=0,H[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function d(M,P,H,k){const K=i.attributes,X=P.attributes;let V=0;const $=H.getAttributes();for(const G in $)if($[G].location>=0){const ut=K[G];let gt=X[G];if(gt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;V++}return i.attributesNum!==V||i.index!==k}function g(M,P,H,k){const K={},X=P.attributes;let V=0;const $=H.getAttributes();for(const G in $)if($[G].location>=0){let ut=X[G];ut===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),K[G]=gt,V++}i.attributes=K,i.attributesNum=V,i.index=k}function _(){const M=i.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const H=i.newAttributes,k=i.enabledAttributes,K=i.attributeDivisors;H[M]=1,k[M]===0&&(r.enableVertexAttribArray(M),k[M]=1),K[M]!==P&&(r.vertexAttribDivisor(M,P),K[M]=P)}function S(){const M=i.newAttributes,P=i.enabledAttributes;for(let H=0,k=P.length;H<k;H++)P[H]!==M[H]&&(r.disableVertexAttribArray(H),P[H]=0)}function y(M,P,H,k,K,X,V){V===!0?r.vertexAttribIPointer(M,P,H,K,X):r.vertexAttribPointer(M,P,H,k,K,X)}function b(M,P,H,k){_();const K=k.attributes,X=H.getAttributes(),V=P.defaultAttributeValues;for(const $ in X){const G=X[$];if(G.location>=0){let ot=K[$];if(ot===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const ut=ot.normalized,gt=ot.itemSize,Ft=t.get(ot);if(Ft===void 0)continue;const Yt=Ft.buffer,W=Ft.type,Q=Ft.bytesPerElement,mt=W===r.INT||W===r.UNSIGNED_INT||ot.gpuType===Yr;if(ot.isInterleavedBufferAttribute){const ct=ot.data,Et=ct.stride,Rt=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let Ut=0;Ut<G.locationSize;Ut++)p(G.location+Ut,ct.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ut=0;Ut<G.locationSize;Ut++)m(G.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Ut=0;Ut<G.locationSize;Ut++)y(G.location+Ut,gt/G.locationSize,W,ut,Et*Q,(Rt+gt/G.locationSize*Ut)*Q,mt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct,ot.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let ct=0;ct<G.locationSize;ct++)y(G.location+ct,gt/G.locationSize,W,ut,gt*Q,gt/G.locationSize*ct*Q,mt)}}else if(V!==void 0){const ut=V[$];if(ut!==void 0)switch(ut.length){case 2:r.vertexAttrib2fv(G.location,ut);break;case 3:r.vertexAttrib3fv(G.location,ut);break;case 4:r.vertexAttrib4fv(G.location,ut);break;default:r.vertexAttrib1fv(G.location,ut)}}}}S()}function C(){F();for(const M in n){const P=n[M];for(const H in P){const k=P[H];for(const K in k)h(k[K].object),delete k[K];delete P[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const H in P){const k=P[H];for(const K in k)h(k[K].object),delete k[K];delete P[H]}delete n[M.id]}function w(M){for(const P in n){const H=n[P];if(H[M.id]===void 0)continue;const k=H[M.id];for(const K in k)h(k[K].object),delete k[K];delete H[M.id]}}function F(){E(),a=!0,i!==s&&(i=s,c(i.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function md(r,t,e){let n;function s(c){n=c}function i(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gd(r,t,e,n){let s;function i(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ve&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const w=T===Ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==an&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==sn&&!w)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:b,maxSamples:C}}function _d(r){const t=this;let e=null,n=0,s=!1,i=!1;const a=new mn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!s||g===null||g.length===0||i&&!m)i?h(null):c();else{const S=i?0:n,y=S*4;let b=p.clippingState||null;l.value=b,b=h(g,f,y,d);for(let C=0;C!==y;++C)b[C]=e[C];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=d;y!==_;++y,b+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xd(r){let t=new WeakMap;function e(a,o){return o===pr?a.mapping=ui:o===mr&&(a.mapping=di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pr||o===mr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rc(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}class vd extends Ho{constructor(t=-1,e=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,Ba=[.125,.215,.35,.446,.526,.582],Pn=20,nr=new vd,za=new zt;let ir=null,sr=0,rr=0,ar=!1;const Cn=(1+Math.sqrt(5))/2,ni=1/Cn,ka=[new N(-Cn,ni,0),new N(Cn,ni,0),new N(-ni,0,Cn),new N(ni,0,Cn),new N(0,Cn,-ni),new N(0,Cn,ni),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(t,n,s,i),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),this._renderer.xr.enabled=ar,t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Ri,format:Ve,colorSpace:Mn,depthBuffer:!1},s=Ga(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Md(i)),this._blurMaterial=yd(i,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,s){const o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(za),h.toneMapping=xn,h.autoClear=!1;const d=new nn({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new Me(new Ii,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(za),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;ns(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ui||t.mapping===di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Va());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new Me(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=t;const l=this._cubeSize;ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ka[(s-i-1)%ka.length];this._blur(t,i-1,i,a,o)}e.autoClear=n}_blur(t,e,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",i),this._halfBlur(a,t,n,n,s,"longitudinal",i)}_halfBlur(t,e,n,s,i,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Me(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Pn-1),_=i/g,m=isFinite(i)?1+Math.floor(h*_):Pn;m>Pn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pn}`);const p=[];let S=0;for(let w=0;w<Pn;++w){const F=w/_,E=Math.exp(-F*F/2);p.push(E),w===0?S+=E:w<m&&(S+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[s],C=3*b*(s>y-ri?s-y+ri:0),T=4*(this._cubeSize-b);ns(e,C,T,3*b,2*b),l.setRenderTarget(e),l.render(u,nr)}}function Md(r){const t=[],e=[],n=[];let s=r;const i=r-ri+1+Ba.length;for(let a=0;a<i;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>r-ri?l=Ba[a-r+ri-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),y=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,F=T>2?0:-1,E=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];S.set(E,_*g*T),y.set(f,m*g*T);const M=[T,T,T,T,T,T];b.set(M,p*g*T)}const C=new ye;C.setAttribute("position",new ge(S,_)),C.setAttribute("uv",new ge(y,m)),C.setAttribute("faceIndex",new ge(b,p)),t.push(C),s>ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ga(r,t,e){const n=new Fn(r,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(r,t,e,n,s){r.viewport.set(t,e,n,s),r.scissor.set(t,e,n,s)}function yd(r,t,e){const n=new Float32Array(Pn),s=new N(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ea(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Va(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Wa(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function Sd(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pr||l===mr,h=l===ui||l===di;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ha(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ha(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",i),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ed(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bd(r,t,e,n){const s={},i=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=i.get(f);d&&(t.remove(d),i.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,b=S.length;y<b;y+=3){const C=S[y+0],T=S[y+1],w=S[y+2];f.push(C,T,T,w,w,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const C=y+0,T=y+1,w=y+2;f.push(C,T,T,w,w,C)}}else return;const m=new(Io(f)?zo:Bo)(f,1);m.version=_;const p=i.get(u);p&&t.remove(p),i.set(u,m)}function h(u){const f=i.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return i.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Td(r,t,e){let n;function s(f){n=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,i,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,i,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,i,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,i,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S];for(let S=0;S<_.length;S++)e.update(p,n,_[S])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ad(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(i/3);break;case r.LINES:e.lines+=o*(i/2);break;case r.LINE_STRIP:e.lines+=o*(i-1);break;case r.LINE_LOOP:e.lines+=o*i;break;case r.POINTS:e.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wd(r,t,e){const n=new WeakMap,s=new fe;function i(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*T*4*u),F=new Uo(w,C,T,u);F.type=sn,F.needsUpdate=!0;const E=b*4;for(let P=0;P<u;P++){const H=p[P],k=S[P],K=y[P],X=C*T*4*P;for(let V=0;V<H.count;V++){const $=V*E;g===!0&&(s.fromBufferAttribute(H,V),w[X+$+0]=s.x,w[X+$+1]=s.y,w[X+$+2]=s.z,w[X+$+3]=0),_===!0&&(s.fromBufferAttribute(k,V),w[X+$+4]=s.x,w[X+$+5]=s.y,w[X+$+6]=s.z,w[X+$+7]=0),m===!0&&(s.fromBufferAttribute(K,V),w[X+$+8]=s.x,w[X+$+9]=s.y,w[X+$+10]=s.z,w[X+$+11]=K.itemSize===4?s.w:1)}}f={count:u,texture:F,size:new Ct(C,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:i}}function Cd(r,t,e,n){let s=new WeakMap;function i(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:i,dispose:a}}class Xo extends we{constructor(t,e,n,s,i,a,o,l,c,h=li){if(h!==li&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=Un),n===void 0&&h===pi&&(n=fi),super(null,s,i,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qo=new we,Xa=new Xo(1,1),Yo=new Uo,Ko=new fc,$o=new Go,qa=[],Ya=[],Ka=new Float32Array(16),$a=new Float32Array(9),Za=new Float32Array(4);function gi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const s=t*e;let i=qa[s];if(i===void 0&&(i=new Float32Array(s),qa[s]=i),t!==0){n.toArray(i,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(i,o)}return i}function ce(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function he(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ps(r,t){let e=Ya[t];e===void 0&&(e=new Int32Array(t),Ya[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Rd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Pd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2fv(this.addr,t),he(e,t)}}function Dd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;r.uniform3fv(this.addr,t),he(e,t)}}function Ld(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4fv(this.addr,t),he(e,t)}}function Id(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Za.set(n),r.uniformMatrix2fv(this.addr,!1,Za),he(e,n)}}function Nd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;$a.set(n),r.uniformMatrix3fv(this.addr,!1,$a),he(e,n)}}function Ud(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ka.set(n),r.uniformMatrix4fv(this.addr,!1,Ka),he(e,n)}}function Fd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Od(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2iv(this.addr,t),he(e,t)}}function Bd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3iv(this.addr,t),he(e,t)}}function zd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4iv(this.addr,t),he(e,t)}}function kd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;r.uniform2uiv(this.addr,t),he(e,t)}}function Gd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;r.uniform3uiv(this.addr,t),he(e,t)}}function Vd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;r.uniform4uiv(this.addr,t),he(e,t)}}function Wd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(Xa.compareFunction=Lo,i=Xa):i=qo,e.setTexture2D(t||i,s)}function Xd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ko,s)}function qd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$o,s)}function Yd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yo,s)}function Kd(r){switch(r){case 5126:return Rd;case 35664:return Pd;case 35665:return Dd;case 35666:return Ld;case 35674:return Id;case 35675:return Nd;case 35676:return Ud;case 5124:case 35670:return Fd;case 35667:case 35671:return Od;case 35668:case 35672:return Bd;case 35669:case 35673:return zd;case 5125:return kd;case 36294:return Hd;case 36295:return Gd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Wd;case 35679:case 36299:case 36307:return Xd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}}function $d(r,t){r.uniform1fv(this.addr,t)}function Zd(r,t){const e=gi(t,this.size,2);r.uniform2fv(this.addr,e)}function jd(r,t){const e=gi(t,this.size,3);r.uniform3fv(this.addr,e)}function Jd(r,t){const e=gi(t,this.size,4);r.uniform4fv(this.addr,e)}function Qd(r,t){const e=gi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tf(r,t){const e=gi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ef(r,t){const e=gi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nf(r,t){r.uniform1iv(this.addr,t)}function sf(r,t){r.uniform2iv(this.addr,t)}function rf(r,t){r.uniform3iv(this.addr,t)}function af(r,t){r.uniform4iv(this.addr,t)}function of(r,t){r.uniform1uiv(this.addr,t)}function lf(r,t){r.uniform2uiv(this.addr,t)}function cf(r,t){r.uniform3uiv(this.addr,t)}function hf(r,t){r.uniform4uiv(this.addr,t)}function uf(r,t,e){const n=this.cache,s=t.length,i=Ps(e,s);ce(n,i)||(r.uniform1iv(this.addr,i),he(n,i));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qo,i[a])}function df(r,t,e){const n=this.cache,s=t.length,i=Ps(e,s);ce(n,i)||(r.uniform1iv(this.addr,i),he(n,i));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ko,i[a])}function ff(r,t,e){const n=this.cache,s=t.length,i=Ps(e,s);ce(n,i)||(r.uniform1iv(this.addr,i),he(n,i));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$o,i[a])}function pf(r,t,e){const n=this.cache,s=t.length,i=Ps(e,s);ce(n,i)||(r.uniform1iv(this.addr,i),he(n,i));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yo,i[a])}function mf(r){switch(r){case 5126:return $d;case 35664:return Zd;case 35665:return jd;case 35666:return Jd;case 35674:return Qd;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return af;case 5125:return of;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}class gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kd(e.type)}}class _f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mf(e.type)}}class xf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const o=s[i];o.setValue(t,e[o.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function ja(r,t){r.seq.push(t),r.map[t.id]=t}function vf(r,t,e){const n=r.name,s=n.length;for(or.lastIndex=0;;){const i=or.exec(n),a=or.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ja(e,c===void 0?new gf(o,r,t):new _f(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new xf(o),ja(e,u)),e=u}}}class _s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=t.getActiveUniform(e,s),a=t.getUniformLocation(e,i.name);vf(i,a,this)}}setValue(t,e,n,s){const i=this.map[e];i!==void 0&&i.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let i=0,a=e.length;i!==a;++i){const o=e[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,i=t.length;s!==i;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ja(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Mf=37297;let yf=0;function Sf(r,t){const e=r.split(`
`),n=[],s=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let a=s;a<i;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Ef(r){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(r);let n;switch(t===e?n="":t===Ss&&e===ys?n="LinearDisplayP3ToLinearSRGB":t===ys&&e===Ss&&(n="LinearSRGBToLinearDisplayP3"),r){case Mn:case Cs:return[n,"LinearTransferOETF"];case Xe:case Qr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Qa(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=r.getShaderInfoLog(t).trim();if(n&&s==="")return"";const i=/ERROR: 0:(\d+)/.exec(s);if(i){const a=parseInt(i[1]);return e.toUpperCase()+`

`+s+`

`+Sf(r.getShaderSource(t),a)}else return s}function bf(r,t){const e=Ef(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tf(r,t){let e;switch(t){case zl:e="Linear";break;case kl:e="Reinhard";break;case Hl:e="Cineon";break;case Gl:e="ACESFilmic";break;case Wl:e="AgX";break;case Xl:e="Neutral";break;case Vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const is=new N;function Af(){Wt.getLuminanceCoefficients(is);const r=is.x.toFixed(4),t=is.y.toFixed(4),e=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function Cf(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rf(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(t,s),a=i.name;let o=1;i.type===r.FLOAT_MAT2&&(o=2),i.type===r.FLOAT_MAT3&&(o=3),i.type===r.FLOAT_MAT4&&(o=4),e[a]={type:i.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ti(r){return r!==""}function to(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eo(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(r){return r.replace(Pf,Lf)}const Df=new Map;function Lf(r,t){let e=Lt[t];if(e===void 0){const n=Df.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xr(e)}const If=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(r){return r.replace(If,Nf)}function Nf(r,t,e,n){let s="";for(let i=parseInt(t);i<parseInt(e);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function io(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Uf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vo?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ul?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function Ff(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ui:case di:t="ENVMAP_TYPE_CUBE";break;case ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Of(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function Bf(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mo:t="ENVMAP_BLENDING_MULTIPLY";break;case Ol:t="ENVMAP_BLENDING_MIX";break;case Bl:t="ENVMAP_BLENDING_ADD";break}return t}function zf(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kf(r,t,e,n){const s=r.getContext(),i=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Uf(e),c=Ff(e),h=Of(e),u=Bf(e),f=zf(e),d=wf(e),g=Cf(i),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ti).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ti).join(`
`),p.length>0&&(p+=`
`)):(m=[io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),p=[io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==xn?Tf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,bf("linearToOutputTexel",e.outputColorSpace),Af(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),a=Xr(a),a=to(a,e),a=eo(a,e),o=Xr(o),o=to(o,e),o=eo(o,e),a=no(a),o=no(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,b=S+p+o,C=Ja(s,s.VERTEX_SHADER,y),T=Ja(s,s.FRAGMENT_SHADER,b);s.attachShader(_,C),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(C).trim(),K=s.getShaderInfoLog(T).trim();let X=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,_,C,T);else{const $=Qa(s,C,"vertex"),G=Qa(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+$+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||K==="")&&(V=!1);V&&(P.diagnostics={runnable:X,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(C),s.deleteShader(T),F=new _s(s,_),E=Rf(s,_)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Mf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let Hf=0;class Gf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vf(t),e.set(t,n)),n}}class Vf{constructor(t){this.id=Hf++,this.code=t,this.usedTimes=0}}function Wf(r,t,e,n,s,i,a){const o=new Fo,l=new Gf,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,H,k){const K=H.fog,X=k.geometry,V=E.isMeshStandardMaterial?H.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=$&&$.mapping===ws?$.image.height:null,ot=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=ut!==void 0?ut.length:0;let Ft=0;X.morphAttributes.position!==void 0&&(Ft=1),X.morphAttributes.normal!==void 0&&(Ft=2),X.morphAttributes.color!==void 0&&(Ft=3);let Yt,W,Q,mt;if(ot){const kt=qe[ot];Yt=kt.vertexShader,W=kt.fragmentShader}else Yt=E.vertexShader,W=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),mt=l.getFragmentShaderID(E);const ct=r.getRenderTarget(),Et=k.isInstancedMesh===!0,Rt=k.isBatchedMesh===!0,Ut=!!E.map,Jt=!!E.matcap,R=!!$,ne=!!E.aoMap,Xt=!!E.lightMap,Kt=!!E.bumpMap,vt=!!E.normalMap,ie=!!E.displacementMap,At=!!E.emissiveMap,Pt=!!E.metalnessMap,A=!!E.roughnessMap,x=E.anisotropy>0,z=E.clearcoat>0,Z=E.dispersion>0,J=E.iridescence>0,j=E.sheen>0,Mt=E.transmission>0,rt=x&&!!E.anisotropyMap,ht=z&&!!E.clearcoatMap,Dt=z&&!!E.clearcoatNormalMap,tt=z&&!!E.clearcoatRoughnessMap,lt=J&&!!E.iridescenceMap,Ot=J&&!!E.iridescenceThicknessMap,Tt=j&&!!E.sheenColorMap,dt=j&&!!E.sheenRoughnessMap,wt=!!E.specularMap,Nt=!!E.specularColorMap,jt=!!E.specularIntensityMap,L=Mt&&!!E.transmissionMap,et=Mt&&!!E.thicknessMap,q=!!E.gradientMap,Y=!!E.alphaMap,it=E.alphaTest>0,yt=!!E.alphaHash,Bt=!!E.extensions;let se=xn;E.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(se=r.toneMapping);const pe={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:W,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&k._colorsTexture!==null,instancing:Et,instancingColor:Et&&k.instanceColor!==null,instancingMorph:Et&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Mn,alphaToCoverage:!!E.alphaToCoverage,map:Ut,matcap:Jt,envMap:R,envMapMode:R&&$.mapping,envMapCubeUVHeight:G,aoMap:ne,lightMap:Xt,bumpMap:Kt,normalMap:vt,displacementMap:f&&ie,emissiveMap:At,normalMapObjectSpace:vt&&E.normalMapType===Zl,normalMapTangentSpace:vt&&E.normalMapType===$l,metalnessMap:Pt,roughnessMap:A,anisotropy:x,anisotropyMap:rt,clearcoat:z,clearcoatMap:ht,clearcoatNormalMap:Dt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:J,iridescenceMap:lt,iridescenceThicknessMap:Ot,sheen:j,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:wt,specularColorMap:Nt,specularIntensityMap:jt,transmission:Mt,transmissionMap:L,thicknessMap:et,gradientMap:q,opaque:E.transparent===!1&&E.blending===oi&&E.alphaToCoverage===!1,alphaMap:Y,alphaTest:it,alphaHash:yt,combine:E.combine,mapUv:Ut&&_(E.map.channel),aoMapUv:ne&&_(E.aoMap.channel),lightMapUv:Xt&&_(E.lightMap.channel),bumpMapUv:Kt&&_(E.bumpMap.channel),normalMapUv:vt&&_(E.normalMap.channel),displacementMapUv:ie&&_(E.displacementMap.channel),emissiveMapUv:At&&_(E.emissiveMap.channel),metalnessMapUv:Pt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:rt&&_(E.anisotropyMap.channel),clearcoatMapUv:ht&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(E.sheenRoughnessMap.channel),specularMapUv:wt&&_(E.specularMap.channel),specularColorMapUv:Nt&&_(E.specularColorMap.channel),specularIntensityMapUv:jt&&_(E.specularIntensityMap.channel),transmissionMapUv:L&&_(E.transmissionMap.channel),thicknessMapUv:et&&_(E.thicknessMap.channel),alphaMapUv:Y&&_(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(vt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Ut||Y),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:Ut&&E.map.isVideoTexture===!0&&Wt.getTransfer(E.map.colorSpace)===Zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===Ae,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Bt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&E.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(S(M,E),y(M,E),M.push(r.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),E.push(o.mask)}function b(E){const M=g[E.type];let P;if(M){const H=qe[M];P=Tc.clone(H.uniforms)}else P=E.uniforms;return P}function C(E,M){let P;for(let H=0,k=h.length;H<k;H++){const K=h[H];if(K.cacheKey===M){P=K,++P.usedTimes;break}}return P===void 0&&(P=new kf(r,M,E,i),h.push(P)),P}function T(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:F}}function Xf(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function s(a,o,l){r.get(a)[o]=l}function i(){r=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:i}}function qf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function so(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ro(){const r=[];let t=0;const e=[],n=[],s=[];function i(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||qf),n.length>1&&n.sort(f||so),s.length>1&&s.sort(f||so)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:i,push:o,unshift:l,finish:h,sort:c}}function Yf(){let r=new WeakMap;function t(n,s){const i=r.get(n);let a;return i===void 0?(a=new ro,r.set(n,[a])):s>=i.length?(a=new ro,i.push(a)):a=i[s],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Kf(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new zt};break;case"SpotLight":e={position:new N,direction:new N,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function $f(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Zf=0;function jf(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Jf(r){const t=new Kf,e=$f(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,i=new ee,a=new ee;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,y=0,b=0,C=0,T=0,w=0;c.sort(jf);for(let E=0,M=c.length;E<M;E++){const P=c[E],H=P.color,k=P.intensity,K=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*k,u+=H.g*k,f+=H.b*k;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],k);w++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(H).multiplyScalar(k),V.distance=K,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const $=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,$.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,b++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(H).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const $=P.shadow,G=e.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(k),V.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==S||F.numPointShadows!==y||F.numSpotShadows!==b||F.numSpotMaps!==C||F.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,F.directionalLength=d,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=S,F.numPointShadows=y,F.numSpotShadows=b,F.numSpotMaps=C,F.numLightProbes=w,n.version=Zf++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),i.copy(y.matrixWorld),i.premultiply(m),a.extractRotation(i),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ao(r){const t=new Jf(r),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function i(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:a}}function Qf(r){let t=new WeakMap;function e(s,i=0){const a=t.get(s);let o;return a===void 0?(o=new ao(r),t.set(s,[o])):i>=a.length?(o=new ao(r),a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class tp extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ep extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ip=`uniform sampler2D shadow_pass;
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
}`;function sp(r,t,e){let n=new Vo;const s=new Ct,i=new Ct,a=new fe,o=new tp({depthPacking:Kl}),l=new ep,c={},h=e.maxTextureSize,u={[Ke]:Ae,[Ae]:Ke,[Ie]:Ie},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:np,fragmentShader:ip}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let p=this.type;this.render=function(T,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),H=r.state;H.setBlending(_n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==en&&this.type===en,K=p===en&&this.type!==en;for(let X=0,V=T.length;X<V;X++){const $=T[X],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ot=G.getFrameExtents();if(s.multiply(ot),i.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/ot.x),s.x=i.x*ot.x,G.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/ot.y),s.y=i.y*ot.y,G.mapSize.y=i.y)),G.map===null||k===!0||K===!0){const gt=this.type!==en?{minFilter:Oe,magFilter:Oe}:{};G.map!==null&&G.map.dispose(),G.map=new Fn(s.x,s.y,gt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ut=G.getViewportCount();for(let gt=0;gt<ut;gt++){const Ft=G.getViewport(gt);a.set(i.x*Ft.x,i.y*Ft.y,i.x*Ft.z,i.y*Ft.w),H.viewport(a),G.updateMatrices($,gt),n=G.getFrustum(),b(w,F,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===en&&S(G,F),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,M,P)};function S(T,w){const F=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,F,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,F,d,_,null)}function y(T,w,F,E){let M=null;const P=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=F.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=M.uuid,k=w.uuid;let K=c[H];K===void 0&&(K={},c[H]=K);let X=K[k];X===void 0&&(X=M.clone(),K[k]=X,w.addEventListener("dispose",C)),M=X}if(M.visible=w.visible,M.wireframe=w.wireframe,E===en?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=r.properties.get(M);H.light=F}return M}function b(T,w,F,E,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===en)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const k=t.update(T),K=T.material;if(Array.isArray(K)){const X=k.groups;for(let V=0,$=X.length;V<$;V++){const G=X[V],ot=K[G.materialIndex];if(ot&&ot.visible){const ut=y(T,ot,E,M);T.onBeforeShadow(r,T,w,F,k,ut,G),r.renderBufferDirect(F,null,k,ut,T,G),T.onAfterShadow(r,T,w,F,k,ut,G)}}}else if(K.visible){const X=y(T,K,E,M);T.onBeforeShadow(r,T,w,F,k,X,null),r.renderBufferDirect(F,null,k,X,T,null),T.onAfterShadow(r,T,w,F,k,X,null)}}const H=T.children;for(let k=0,K=H.length;k<K;k++)b(H[k],w,F,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(const F in c){const E=c[F],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function rp(r){function t(){let L=!1;const et=new fe;let q=null;const Y=new fe(0,0,0,0);return{setMask:function(it){q!==it&&!L&&(r.colorMask(it,it,it,it),q=it)},setLocked:function(it){L=it},setClear:function(it,yt,Bt,se,pe){pe===!0&&(it*=se,yt*=se,Bt*=se),et.set(it,yt,Bt,se),Y.equals(et)===!1&&(r.clearColor(it,yt,Bt,se),Y.copy(et))},reset:function(){L=!1,q=null,Y.set(-1,0,0,0)}}}function e(){let L=!1,et=null,q=null,Y=null;return{setTest:function(it){it?mt(r.DEPTH_TEST):ct(r.DEPTH_TEST)},setMask:function(it){et!==it&&!L&&(r.depthMask(it),et=it)},setFunc:function(it){if(q!==it){switch(it){case Pl:r.depthFunc(r.NEVER);break;case Dl:r.depthFunc(r.ALWAYS);break;case Ll:r.depthFunc(r.LESS);break;case vs:r.depthFunc(r.LEQUAL);break;case Il:r.depthFunc(r.EQUAL);break;case Nl:r.depthFunc(r.GEQUAL);break;case Ul:r.depthFunc(r.GREATER);break;case Fl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=it}},setLocked:function(it){L=it},setClear:function(it){Y!==it&&(r.clearDepth(it),Y=it)},reset:function(){L=!1,et=null,q=null,Y=null}}}function n(){let L=!1,et=null,q=null,Y=null,it=null,yt=null,Bt=null,se=null,pe=null;return{setTest:function(kt){L||(kt?mt(r.STENCIL_TEST):ct(r.STENCIL_TEST))},setMask:function(kt){et!==kt&&!L&&(r.stencilMask(kt),et=kt)},setFunc:function(kt,$e,We){(q!==kt||Y!==$e||it!==We)&&(r.stencilFunc(kt,$e,We),q=kt,Y=$e,it=We)},setOp:function(kt,$e,We){(yt!==kt||Bt!==$e||se!==We)&&(r.stencilOp(kt,$e,We),yt=kt,Bt=$e,se=We)},setLocked:function(kt){L=kt},setClear:function(kt){pe!==kt&&(r.clearStencil(kt),pe=kt)},reset:function(){L=!1,et=null,q=null,Y=null,it=null,yt=null,Bt=null,se=null,pe=null}}}const s=new t,i=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,S=null,y=null,b=null,C=null,T=new zt(0,0,0),w=0,F=!1,E=null,M=null,P=null,H=null,k=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,V=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),X=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=V>=2);let G=null,ot={};const ut=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),Ft=new fe().fromArray(ut),Yt=new fe().fromArray(gt);function W(L,et,q,Y){const it=new Uint8Array(4),yt=r.createTexture();r.bindTexture(L,yt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<q;Bt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(et,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,it):r.texImage2D(et+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,it);return yt}const Q={};Q[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),i.setClear(1),a.setClear(0),mt(r.DEPTH_TEST),i.setFunc(vs),Kt(!1),vt(da),mt(r.CULL_FACE),ne(_n);function mt(L){c[L]!==!0&&(r.enable(L),c[L]=!0)}function ct(L){c[L]!==!1&&(r.disable(L),c[L]=!1)}function Et(L,et){return h[L]!==et?(r.bindFramebuffer(L,et),h[L]=et,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=et),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=et),!0):!1}function Rt(L,et){let q=f,Y=!1;if(L){q=u.get(et),q===void 0&&(q=[],u.set(et,q));const it=L.textures;if(q.length!==it.length||q[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Bt=it.length;yt<Bt;yt++)q[yt]=r.COLOR_ATTACHMENT0+yt;q.length=it.length,Y=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,Y=!0);Y&&r.drawBuffers(q)}function Ut(L){return d!==L?(r.useProgram(L),d=L,!0):!1}const Jt={[Rn]:r.FUNC_ADD,[fl]:r.FUNC_SUBTRACT,[pl]:r.FUNC_REVERSE_SUBTRACT};Jt[ml]=r.MIN,Jt[gl]=r.MAX;const R={[_l]:r.ZERO,[xl]:r.ONE,[vl]:r.SRC_COLOR,[dr]:r.SRC_ALPHA,[Tl]:r.SRC_ALPHA_SATURATE,[El]:r.DST_COLOR,[yl]:r.DST_ALPHA,[Ml]:r.ONE_MINUS_SRC_COLOR,[fr]:r.ONE_MINUS_SRC_ALPHA,[bl]:r.ONE_MINUS_DST_COLOR,[Sl]:r.ONE_MINUS_DST_ALPHA,[Al]:r.CONSTANT_COLOR,[wl]:r.ONE_MINUS_CONSTANT_COLOR,[Cl]:r.CONSTANT_ALPHA,[Rl]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(L,et,q,Y,it,yt,Bt,se,pe,kt){if(L===_n){g===!0&&(ct(r.BLEND),g=!1);return}if(g===!1&&(mt(r.BLEND),g=!0),L!==dl){if(L!==_||kt!==F){if((m!==Rn||y!==Rn)&&(r.blendEquation(r.FUNC_ADD),m=Rn,y=Rn),kt)switch(L){case oi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fa:r.blendFunc(r.ONE,r.ONE);break;case pa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ma:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ma:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,S=null,b=null,C=null,T.set(0,0,0),w=0,_=L,F=kt}return}it=it||et,yt=yt||q,Bt=Bt||Y,(et!==m||it!==y)&&(r.blendEquationSeparate(Jt[et],Jt[it]),m=et,y=it),(q!==p||Y!==S||yt!==b||Bt!==C)&&(r.blendFuncSeparate(R[q],R[Y],R[yt],R[Bt]),p=q,S=Y,b=yt,C=Bt),(se.equals(T)===!1||pe!==w)&&(r.blendColor(se.r,se.g,se.b,pe),T.copy(se),w=pe),_=L,F=!1}function Xt(L,et){L.side===Ie?ct(r.CULL_FACE):mt(r.CULL_FACE);let q=L.side===Ae;et&&(q=!q),Kt(q),L.blending===oi&&L.transparent===!1?ne(_n):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),i.setFunc(L.depthFunc),i.setTest(L.depthTest),i.setMask(L.depthWrite),s.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),At(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?mt(r.SAMPLE_ALPHA_TO_COVERAGE):ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(L){E!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),E=L)}function vt(L){L!==cl?(mt(r.CULL_FACE),L!==M&&(L===da?r.cullFace(r.BACK):L===hl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ct(r.CULL_FACE),M=L}function ie(L){L!==P&&(X&&r.lineWidth(L),P=L)}function At(L,et,q){L?(mt(r.POLYGON_OFFSET_FILL),(H!==et||k!==q)&&(r.polygonOffset(et,q),H=et,k=q)):ct(r.POLYGON_OFFSET_FILL)}function Pt(L){L?mt(r.SCISSOR_TEST):ct(r.SCISSOR_TEST)}function A(L){L===void 0&&(L=r.TEXTURE0+K-1),G!==L&&(r.activeTexture(L),G=L)}function x(L,et,q){q===void 0&&(G===null?q=r.TEXTURE0+K-1:q=G);let Y=ot[q];Y===void 0&&(Y={type:void 0,texture:void 0},ot[q]=Y),(Y.type!==L||Y.texture!==et)&&(G!==q&&(r.activeTexture(q),G=q),r.bindTexture(L,et||Q[L]),Y.type=L,Y.texture=et)}function z(){const L=ot[G];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(L){Ft.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ft.copy(L))}function dt(L){Yt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Yt.copy(L))}function wt(L,et){let q=l.get(et);q===void 0&&(q=new WeakMap,l.set(et,q));let Y=q.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(et,L.name),q.set(L,Y))}function Nt(L,et){const Y=l.get(et).get(L);o.get(et)!==Y&&(r.uniformBlockBinding(et,Y,L.__bindingPointIndex),o.set(et,Y))}function jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},G=null,ot={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,S=null,y=null,b=null,C=null,T=new zt(0,0,0),w=0,F=!1,E=null,M=null,P=null,H=null,k=null,Ft.set(0,0,r.canvas.width,r.canvas.height),Yt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),i.reset(),a.reset()}return{buffers:{color:s,depth:i,stencil:a},enable:mt,disable:ct,bindFramebuffer:Et,drawBuffers:Rt,useProgram:Ut,setBlending:ne,setMaterial:Xt,setFlipSided:Kt,setCullFace:vt,setLineWidth:ie,setPolygonOffset:At,setScissorTest:Pt,activeTexture:A,bindTexture:x,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:lt,texImage3D:Ot,updateUBOMapping:wt,uniformBlockBinding:Nt,texStorage2D:Dt,texStorage3D:tt,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Tt,viewport:dt,reset:jt}}function oo(r,t,e,n){const s=ap(n);switch(e){case To:return r*t;case wo:return r*t;case Co:return r*t*2;case Ro:return r*t/s.components*s.byteLength;case Zr:return r*t/s.components*s.byteLength;case Po:return r*t*2/s.components*s.byteLength;case jr:return r*t*2/s.components*s.byteLength;case Ao:return r*t*3/s.components*s.byteLength;case Ve:return r*t*4/s.components*s.byteLength;case Jr:return r*t*4/s.components*s.byteLength;case us:case ds:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fs:case ps:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vr:case yr:return Math.max(r,16)*Math.max(t,8)/4;case xr:case Mr:return Math.max(r,8)*Math.max(t,8)/2;case Sr:case Er:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case br:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Lr:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ir:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ur:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fr:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Or:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Br:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ms:case zr:case kr:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Do:case Hr:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gr:case Vr:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ap(r){switch(r){case an:case So:return{byteLength:1,components:1};case Ci:case Eo:case Ri:return{byteLength:2,components:1};case Kr:case $r:return{byteLength:2,components:4};case Un:case Yr:case sn:return{byteLength:4,components:1};case bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function op(r,t,e,n,s,i,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):bs("canvas")}function _(A,x,z){let Z=1;const J=Pt(A);if((J.width>z||J.height>z)&&(Z=z/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Z*J.width),Mt=Math.floor(Z*J.height);u===void 0&&(u=g(j,Mt));const rt=x?g(j,Mt):u;return rt.width=j,rt.height=Mt,rt.getContext("2d").drawImage(A,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Mt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Oe&&A.minFilter!==Ge}function p(A){r.generateMipmap(A)}function S(A,x,z,Z,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=x;if(x===r.RED&&(z===r.FLOAT&&(j=r.R32F),z===r.HALF_FLOAT&&(j=r.R16F),z===r.UNSIGNED_BYTE&&(j=r.R8)),x===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.R8UI),z===r.UNSIGNED_SHORT&&(j=r.R16UI),z===r.UNSIGNED_INT&&(j=r.R32UI),z===r.BYTE&&(j=r.R8I),z===r.SHORT&&(j=r.R16I),z===r.INT&&(j=r.R32I)),x===r.RG&&(z===r.FLOAT&&(j=r.RG32F),z===r.HALF_FLOAT&&(j=r.RG16F),z===r.UNSIGNED_BYTE&&(j=r.RG8)),x===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(j=r.RG8UI),z===r.UNSIGNED_SHORT&&(j=r.RG16UI),z===r.UNSIGNED_INT&&(j=r.RG32UI),z===r.BYTE&&(j=r.RG8I),z===r.SHORT&&(j=r.RG16I),z===r.INT&&(j=r.RG32I)),x===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),x===r.RGBA){const Mt=J?Ms:Wt.getTransfer(Z);z===r.FLOAT&&(j=r.RGBA32F),z===r.HALF_FLOAT&&(j=r.RGBA16F),z===r.UNSIGNED_BYTE&&(j=Mt===Zt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(A,x){let z;return A?x===null||x===Un||x===fi?z=r.DEPTH24_STENCIL8:x===sn?z=r.DEPTH32F_STENCIL8:x===Ci&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Un||x===fi?z=r.DEPTH_COMPONENT24:x===sn?z=r.DEPTH_COMPONENT32F:x===Ci&&(z=r.DEPTH_COMPONENT16),z}function b(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Oe&&A.minFilter!==Ge?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&h.delete(x)}function T(A){const x=A.target;x.removeEventListener("dispose",T),E(x)}function w(A){const x=n.get(A);if(x.__webglInit===void 0)return;const z=A.source,Z=f.get(z);if(Z){const J=Z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(A),Object.keys(Z).length===0&&f.delete(z)}n.remove(A)}function F(A){const x=n.get(A);r.deleteTexture(x.__webglTexture);const z=A.source,Z=f.get(z);delete Z[x.__cacheKey],a.memory.textures--}function E(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let J=0;J<x.__webglFramebuffer[Z].length;J++)r.deleteFramebuffer(x.__webglFramebuffer[Z][J]);else r.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[Z]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=A.textures;for(let Z=0,J=z.length;Z<J;Z++){const j=n.get(z[Z]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(A)}let M=0;function P(){M=0}function H(){const A=M;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),M+=1,A}function k(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){const z=n.get(A);if(A.isVideoTexture&&ie(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(z,A,x);return}}e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+x)}function X(A,x){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Yt(z,A,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+x)}function V(A,x){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Yt(z,A,x);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+x)}function $(A,x){const z=n.get(A);if(A.version>0&&z.__version!==A.version){W(z,A,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+x)}const G={[gr]:r.REPEAT,[Ln]:r.CLAMP_TO_EDGE,[_r]:r.MIRRORED_REPEAT},ot={[Oe]:r.NEAREST,[ql]:r.NEAREST_MIPMAP_NEAREST,[Fi]:r.NEAREST_MIPMAP_LINEAR,[Ge]:r.LINEAR,[Fs]:r.LINEAR_MIPMAP_NEAREST,[In]:r.LINEAR_MIPMAP_LINEAR},ut={[jl]:r.NEVER,[ic]:r.ALWAYS,[Jl]:r.LESS,[Lo]:r.LEQUAL,[Ql]:r.EQUAL,[nc]:r.GEQUAL,[tc]:r.GREATER,[ec]:r.NOTEQUAL};function gt(A,x){if(x.type===sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ge||x.magFilter===Fs||x.magFilter===Fi||x.magFilter===In||x.minFilter===Ge||x.minFilter===Fs||x.minFilter===Fi||x.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,G[x.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,G[x.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,G[x.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ot[x.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Oe||x.minFilter!==Fi&&x.minFilter!==In||x.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ft(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const Z=x.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const j=k(x);if(j!==A.__cacheKey){J[j]===void 0&&(J[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[j].usedTimes++;const Mt=J[A.__cacheKey];Mt!==void 0&&(J[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&F(x)),A.__cacheKey=j,A.__webglTexture=J[j].texture}return z}function Yt(A,x,z){let Z=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=r.TEXTURE_3D);const J=Ft(A,x),j=x.source;e.bindTexture(Z,A.__webglTexture,r.TEXTURE0+z);const Mt=n.get(j);if(j.version!==Mt.__version||J===!0){e.activeTexture(r.TEXTURE0+z);const rt=Wt.getPrimaries(Wt.workingColorSpace),ht=x.colorSpace===gn?null:Wt.getPrimaries(x.colorSpace),Dt=x.colorSpace===gn||rt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let tt=_(x.image,!1,s.maxTextureSize);tt=At(x,tt);const lt=i.convert(x.format,x.colorSpace),Ot=i.convert(x.type);let Tt=S(x.internalFormat,lt,Ot,x.colorSpace,x.isVideoTexture);gt(Z,x);let dt;const wt=x.mipmaps,Nt=x.isVideoTexture!==!0,jt=Mt.__version===void 0||J===!0,L=j.dataReady,et=b(x,tt);if(x.isDepthTexture)Tt=y(x.format===pi,x.type),jt&&(Nt?e.texStorage2D(r.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Tt,tt.width,tt.height,0,lt,Ot,null));else if(x.isDataTexture)if(wt.length>0){Nt&&jt&&e.texStorage2D(r.TEXTURE_2D,et,Tt,wt[0].width,wt[0].height);for(let q=0,Y=wt.length;q<Y;q++)dt=wt[q],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,dt.width,dt.height,lt,Ot,dt.data):e.texImage2D(r.TEXTURE_2D,q,Tt,dt.width,dt.height,0,lt,Ot,dt.data);x.generateMipmaps=!1}else Nt?(jt&&e.texStorage2D(r.TEXTURE_2D,et,Tt,tt.width,tt.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,lt,Ot,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,tt.width,tt.height,0,lt,Ot,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,Tt,wt[0].width,wt[0].height,tt.depth);for(let q=0,Y=wt.length;q<Y;q++)if(dt=wt[q],x.format!==Ve)if(lt!==null)if(Nt){if(L)if(x.layerUpdates.size>0){const it=oo(dt.width,dt.height,x.format,x.type);for(const yt of x.layerUpdates){const Bt=dt.data.subarray(yt*it/dt.data.BYTES_PER_ELEMENT,(yt+1)*it/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,yt,dt.width,dt.height,1,lt,Bt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,tt.depth,lt,dt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Tt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,tt.depth,lt,Ot,dt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Tt,dt.width,dt.height,tt.depth,0,lt,Ot,dt.data)}else{Nt&&jt&&e.texStorage2D(r.TEXTURE_2D,et,Tt,wt[0].width,wt[0].height);for(let q=0,Y=wt.length;q<Y;q++)dt=wt[q],x.format!==Ve?lt!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,dt.width,dt.height,lt,dt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,dt.width,dt.height,lt,Ot,dt.data):e.texImage2D(r.TEXTURE_2D,q,Tt,dt.width,dt.height,0,lt,Ot,dt.data)}else if(x.isDataArrayTexture)if(Nt){if(jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,Tt,tt.width,tt.height,tt.depth),L)if(x.layerUpdates.size>0){const q=oo(tt.width,tt.height,x.format,x.type);for(const Y of x.layerUpdates){const it=tt.data.subarray(Y*q/tt.data.BYTES_PER_ELEMENT,(Y+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,tt.width,tt.height,1,lt,Ot,it)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Ot,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,lt,Ot,tt.data);else if(x.isData3DTexture)Nt?(jt&&e.texStorage3D(r.TEXTURE_3D,et,Tt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Ot,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,lt,Ot,tt.data);else if(x.isFramebufferTexture){if(jt)if(Nt)e.texStorage2D(r.TEXTURE_2D,et,Tt,tt.width,tt.height);else{let q=tt.width,Y=tt.height;for(let it=0;it<et;it++)e.texImage2D(r.TEXTURE_2D,it,Tt,q,Y,0,lt,Ot,null),q>>=1,Y>>=1}}else if(wt.length>0){if(Nt&&jt){const q=Pt(wt[0]);e.texStorage2D(r.TEXTURE_2D,et,Tt,q.width,q.height)}for(let q=0,Y=wt.length;q<Y;q++)dt=wt[q],Nt?L&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,lt,Ot,dt):e.texImage2D(r.TEXTURE_2D,q,Tt,lt,Ot,dt);x.generateMipmaps=!1}else if(Nt){if(jt){const q=Pt(tt);e.texStorage2D(r.TEXTURE_2D,et,Tt,q.width,q.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,Ot,tt)}else e.texImage2D(r.TEXTURE_2D,0,Tt,lt,Ot,tt);m(x)&&p(Z),Mt.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function W(A,x,z){if(x.image.length!==6)return;const Z=Ft(A,x),J=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+z);const j=n.get(J);if(J.version!==j.__version||Z===!0){e.activeTexture(r.TEXTURE0+z);const Mt=Wt.getPrimaries(Wt.workingColorSpace),rt=x.colorSpace===gn?null:Wt.getPrimaries(x.colorSpace),ht=x.colorSpace===gn||Mt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Dt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,lt=[];for(let Y=0;Y<6;Y++)!Dt&&!tt?lt[Y]=_(x.image[Y],!0,s.maxCubemapSize):lt[Y]=tt?x.image[Y].image:x.image[Y],lt[Y]=At(x,lt[Y]);const Ot=lt[0],Tt=i.convert(x.format,x.colorSpace),dt=i.convert(x.type),wt=S(x.internalFormat,Tt,dt,x.colorSpace),Nt=x.isVideoTexture!==!0,jt=j.__version===void 0||Z===!0,L=J.dataReady;let et=b(x,Ot);gt(r.TEXTURE_CUBE_MAP,x);let q;if(Dt){Nt&&jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,et,wt,Ot.width,Ot.height);for(let Y=0;Y<6;Y++){q=lt[Y].mipmaps;for(let it=0;it<q.length;it++){const yt=q[it];x.format!==Ve?Tt!==null?Nt?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,yt.width,yt.height,Tt,yt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,wt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,yt.width,yt.height,Tt,dt,yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,wt,yt.width,yt.height,0,Tt,dt,yt.data)}}}else{if(q=x.mipmaps,Nt&&jt){q.length>0&&et++;const Y=Pt(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,et,wt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lt[Y].width,lt[Y].height,Tt,dt,lt[Y].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,wt,lt[Y].width,lt[Y].height,0,Tt,dt,lt[Y].data);for(let it=0;it<q.length;it++){const Bt=q[it].image[Y].image;Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Bt.width,Bt.height,Tt,dt,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,wt,Bt.width,Bt.height,0,Tt,dt,Bt.data)}}else{Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Tt,dt,lt[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,wt,Tt,dt,lt[Y]);for(let it=0;it<q.length;it++){const yt=q[it];Nt?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Tt,dt,yt.image[Y]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,wt,Tt,dt,yt.image[Y])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),j.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Q(A,x,z,Z,J,j){const Mt=i.convert(z.format,z.colorSpace),rt=i.convert(z.type),ht=S(z.internalFormat,Mt,rt,z.colorSpace);if(!n.get(x).__hasExternalTextures){const tt=Math.max(1,x.width>>j),lt=Math.max(1,x.height>>j);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,j,ht,tt,lt,x.depth,0,Mt,rt,null):e.texImage2D(J,j,ht,tt,lt,0,Mt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),vt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,J,n.get(z).__webglTexture,0,Kt(x)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,J,n.get(z).__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(A,x,z){if(r.bindRenderbuffer(r.RENDERBUFFER,A),x.depthBuffer){const Z=x.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,j=y(x.stencilBuffer,J),Mt=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=Kt(x);vt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,j,x.width,x.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,j,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,j,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,A)}else{const Z=x.textures;for(let J=0;J<Z.length;J++){const j=Z[J],Mt=i.convert(j.format,j.colorSpace),rt=i.convert(j.type),ht=S(j.internalFormat,Mt,rt,j.colorSpace),Dt=Kt(x);z&&vt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,ht,x.width,x.height):vt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,ht,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ht,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,J=Kt(x);if(x.depthTexture.format===li)vt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(x.depthTexture.format===pi)vt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Et(A){const x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ct(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=r.createRenderbuffer(),mt(x.__webglDepthbuffer[Z],A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,j)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),mt(x.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(A,x,z){const Z=n.get(A);x!==void 0&&Q(Z.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Et(A)}function Ut(A){const x=A.texture,z=n.get(A),Z=n.get(x);A.addEventListener("dispose",T);const J=A.textures,j=A.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=x.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)z.__webglFramebuffer[rt][ht]=r.createFramebuffer()}else z.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)z.__webglFramebuffer[rt]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let rt=0,ht=J.length;rt<ht;rt++){const Dt=n.get(J[rt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const ht=J[rt];z.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[rt]);const Dt=i.convert(ht.format,ht.colorSpace),tt=i.convert(ht.type),lt=S(ht.internalFormat,Dt,tt,ht.colorSpace,A.isXRRenderTarget===!0),Ot=Kt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,lt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,z.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),mt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(r.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)Q(z.__webglFramebuffer[rt][ht],A,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else Q(z.__webglFramebuffer[rt],A,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let rt=0,ht=J.length;rt<ht;rt++){const Dt=J[rt],tt=n.get(Dt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),gt(r.TEXTURE_2D,Dt),Q(z.__webglFramebuffer,A,Dt,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,0),m(Dt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,Z.__webglTexture),gt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)Q(z.__webglFramebuffer[ht],A,x,r.COLOR_ATTACHMENT0,rt,ht);else Q(z.__webglFramebuffer,A,x,r.COLOR_ATTACHMENT0,rt,0);m(x)&&p(rt),e.unbindTexture()}A.depthBuffer&&Et(A)}function Jt(A){const x=A.textures;for(let z=0,Z=x.length;z<Z;z++){const J=x[z];if(m(J)){const j=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Mt=n.get(J).__webglTexture;e.bindTexture(j,Mt),p(j),e.unbindTexture()}}}const R=[],ne=[];function Xt(A){if(A.samples>0){if(vt(A)===!1){const x=A.textures,z=A.width,Z=A.height;let J=r.COLOR_BUFFER_BIT;const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(A),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[ht]);const Dt=n.get(x[ht]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,z,Z,0,0,z,Z,J,r.NEAREST),l===!0&&(R.length=0,ne.length=0,R.push(r.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(R.push(j),ne.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,R))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[ht]);const Dt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,Dt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Kt(A){return Math.min(s.maxSamples,A.samples)}function vt(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ie(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function At(A,x){const z=A.colorSpace,Z=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Mn&&z!==gn&&(Wt.getTransfer(z)===Zt?(Z!==Ve||J!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Rt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=vt}function lp(r,t){function e(n,s=gn){let i;const a=Wt.getTransfer(s);if(n===an)return r.UNSIGNED_BYTE;if(n===Kr)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$r)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bo)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===So)return r.BYTE;if(n===Eo)return r.SHORT;if(n===Ci)return r.UNSIGNED_SHORT;if(n===Yr)return r.INT;if(n===Un)return r.UNSIGNED_INT;if(n===sn)return r.FLOAT;if(n===Ri)return r.HALF_FLOAT;if(n===To)return r.ALPHA;if(n===Ao)return r.RGB;if(n===Ve)return r.RGBA;if(n===wo)return r.LUMINANCE;if(n===Co)return r.LUMINANCE_ALPHA;if(n===li)return r.DEPTH_COMPONENT;if(n===pi)return r.DEPTH_STENCIL;if(n===Ro)return r.RED;if(n===Zr)return r.RED_INTEGER;if(n===Po)return r.RG;if(n===jr)return r.RG_INTEGER;if(n===Jr)return r.RGBA_INTEGER;if(n===us||n===ds||n===fs||n===ps)if(a===Zt)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===us)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===us)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xr||n===vr||n===Mr||n===yr)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===xr)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vr)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mr)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yr)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===Er||n===br)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Sr||n===Er)return a===Zt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===br)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tr||n===Ar||n===wr||n===Cr||n===Rr||n===Pr||n===Dr||n===Lr||n===Ir||n===Nr||n===Ur||n===Fr||n===Or||n===Br)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===Tr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ar)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ir)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ur)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fr)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Or)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Br)return a===Zt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ms||n===zr||n===kr)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===ms)return a===Zt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zr)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kr)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Hr||n===Gr||n===Vr)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===ms)return i.COMPRESSED_RED_RGTC1_EXT;if(n===Hr)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vr)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class cp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ss extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,i=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const up=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dp=`
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

}`;class fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,i=t.properties.get(s);i.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:up,fragmentShader:dp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pp extends Bn{constructor(t,e){super();const n=this;let s=null,i=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new fp,m=e.getContextAttributes();let p=null,S=null;const y=[],b=[],C=new Ct;let T=null;const w=new Fe;w.layers.enable(1),w.viewport=new fe;const F=new Fe;F.layers.enable(2),F.viewport=new fe;const E=[w,F],M=new cp;M.layers.enable(1),M.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=y[W];return Q===void 0&&(Q=new lr,y[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=y[W];return Q===void 0&&(Q=new lr,y[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=y[W];return Q===void 0&&(Q=new lr,y[W]=Q),Q.getHandSpace()};function k(W){const Q=b.indexOf(W.inputSource);if(Q===-1)return;const mt=y[Q];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||a),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function K(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",X);for(let W=0;W<y.length;W++){const Q=b[W];Q!==null&&(b[W]=null,y[W].disconnect(Q))}P=null,H=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){i=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",K),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Fn(d.framebufferWidth,d.framebufferHeight,{format:Ve,type:an,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,mt=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?pi:li,mt=m.stencil?fi:Un);const Et={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:i};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Fn(f.textureWidth,f.textureHeight,{format:Ve,type:an,depthTexture:new Xo(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(W){for(let Q=0;Q<W.removed.length;Q++){const mt=W.removed[Q],ct=b.indexOf(mt);ct>=0&&(b[ct]=null,y[ct].disconnect(mt))}for(let Q=0;Q<W.added.length;Q++){const mt=W.added[Q];let ct=b.indexOf(mt);if(ct===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=b.length){b.push(mt),ct=Rt;break}else if(b[Rt]===null){b[Rt]=mt,ct=Rt;break}if(ct===-1)break}const Et=y[ct];Et&&Et.connect(mt)}}const V=new N,$=new N;function G(W,Q,mt){V.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);const ct=V.distanceTo($),Et=Q.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Ut=Et[14]/(Et[10]-1),Jt=Et[14]/(Et[10]+1),R=(Et[9]+1)/Et[5],ne=(Et[9]-1)/Et[5],Xt=(Et[8]-1)/Et[0],Kt=(Rt[8]+1)/Rt[0],vt=Ut*Xt,ie=Ut*Kt,At=ct/(-Xt+Kt),Pt=At*-Xt;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pt),W.translateZ(At),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Et[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=Ut+At,x=Jt+At,z=vt-Pt,Z=ie+(ct-Pt),J=R*Jt/x*A,j=ne*Jt/x*A;W.projectionMatrix.makePerspective(z,Z,J,j,A,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ot(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Q=W.near,mt=W.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),M.near=F.near=w.near=Q,M.far=F.far=w.far=mt,(P!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far);const ct=W.parent,Et=M.cameras;ot(M,ct);for(let Rt=0;Rt<Et.length;Rt++)ot(Et[Rt],ct);Et.length===2?G(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),ut(W,M,ct)};function ut(W,Q,mt){mt===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let gt=null;function Ft(W,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ct=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let Rt=0;Rt<mt.length;Rt++){const Ut=mt[Rt];let Jt=null;if(d!==null)Jt=d.getViewport(Ut);else{const ne=u.getViewSubImage(f,Ut);Jt=ne.viewport,Rt===0&&(t.setRenderTargetTextures(S,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(S))}let R=E[Rt];R===void 0&&(R=new Fe,R.layers.enable(Rt),R.viewport=new fe,E[Rt]=R),R.matrix.fromArray(Ut.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ut.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Rt===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(R)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Rt=u.getDepthInformation(mt[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,s.renderState)}}for(let mt=0;mt<y.length;mt++){const ct=b[mt],Et=y[mt];ct!==null&&Et!==void 0&&Et.update(ct,Q,c||a)}gt&&gt(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Yt=new Wo;Yt.setAnimationLoop(Ft),this.setAnimationLoop=function(W){gt=W},this.dispose=function(){}}}const wn=new on,mp=new ee;function gp(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ko(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),h(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(i(m,p),g(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),_(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ae&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ae&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,b=S.envMapRotation;y&&(m.envMap.value=y,wn.copy(b),wn.x*=-1,wn.y*=-1,wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),m.envMapRotation.value.setFromMatrix4(mp.makeRotationFromEuler(wn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ae&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _p(r,t,e,n){let s={},i={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(S,C);const T=t.render.frame;i[S.id]!==T&&(f(S),i[S.id]=T)}function h(S){const y=u();S.__bindingPointIndex=y;const b=r.createBuffer(),C=S.__size,T=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],b=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,w=b.length;T<w;T++){const F=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,M=F.length;E<M;E++){const P=F[E];if(d(P,T,E,C)===!0){const H=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let X=0;X<k.length;X++){const V=k[X],$=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,H+K,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,y,b,C){const T=S.value,w=y+"_"+b;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const F=C[w];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return C[w]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(S){const y=S.uniforms;let b=0;const C=16;for(let w=0,F=y.length;w<F;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,P=E.length;M<P;M++){const H=E[M],k=Array.isArray(H.value)?H.value:[H.value];for(let K=0,X=k.length;K<X;K++){const V=k[K],$=_(V),G=b%C,ot=G%$.boundary,ut=G+ot;b+=ot,ut!==0&&C-ut<$.storage&&(b+=C-ut),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=$.storage}}}const T=b%C;return T>0&&(b+=C-T),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(s[y.id]),delete s[y.id],delete i[y.id]}function p(){for(const S in s)r.deleteBuffer(s[S]);a=[],s={},i={}}return{bind:l,update:c,dispose:p}}class xp{constructor(t={}){const{canvas:e=ac(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=xn,this.toneMappingExposure=1;const y=this;let b=!1,C=0,T=0,w=null,F=-1,E=null;const M=new fe,P=new fe;let H=null;const k=new zt(0);let K=0,X=e.width,V=e.height,$=1,G=null,ot=null;const ut=new fe(0,0,X,V),gt=new fe(0,0,X,V);let Ft=!1;const Yt=new Vo;let W=!1,Q=!1;const mt=new ee,ct=new N,Et=new fe,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Jt(){return w===null?$:1}let R=n;function ne(v,I){return e.getContext(v,I)}try{const v={alpha:!0,depth:s,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qr}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",it,!1),R===null){const I="webgl2";if(R=ne(I,v),R===null)throw ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Xt,Kt,vt,ie,At,Pt,A,x,z,Z,J,j,Mt,rt,ht,Dt,tt,lt,Ot,Tt,dt,wt,Nt,jt;function L(){Xt=new Ed(R),Xt.init(),wt=new lp(R,Xt),Kt=new gd(R,Xt,t,wt),vt=new rp(R),ie=new Ad(R),At=new Xf,Pt=new op(R,Xt,vt,At,Kt,wt,ie),A=new xd(y),x=new Sd(y),z=new Lc(R),Nt=new pd(R,z),Z=new bd(R,z,ie,Nt),J=new Cd(R,Z,z,ie),Ot=new wd(R,Kt,Pt),Dt=new _d(At),j=new Wf(y,A,x,Xt,Kt,Nt,Dt),Mt=new gp(y,At),rt=new Yf,ht=new Qf(Xt),lt=new fd(y,A,x,vt,J,f,l),tt=new sp(y,J,Kt),jt=new _p(R,ie,Kt,vt),Tt=new md(R,Xt,ie),dt=new Td(R,Xt,ie),ie.programs=j.programs,y.capabilities=Kt,y.extensions=Xt,y.properties=At,y.renderLists=rt,y.shadowMap=tt,y.state=vt,y.info=ie}L();const et=new pp(y,R);this.xr=et,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=Xt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Xt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(X,V,!1))},this.getSize=function(v){return v.set(X,V)},this.setSize=function(v,I,O=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,V=I,e.width=Math.floor(v*$),e.height=Math.floor(I*$),O===!0&&(e.style.width=v+"px",e.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(X*$,V*$).floor()},this.setDrawingBufferSize=function(v,I,O){X=v,V=I,$=O,e.width=Math.floor(v*O),e.height=Math.floor(I*O),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(M)},this.getViewport=function(v){return v.copy(ut)},this.setViewport=function(v,I,O,B){v.isVector4?ut.set(v.x,v.y,v.z,v.w):ut.set(v,I,O,B),vt.viewport(M.copy(ut).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(gt)},this.setScissor=function(v,I,O,B){v.isVector4?gt.set(v.x,v.y,v.z,v.w):gt.set(v,I,O,B),vt.scissor(P.copy(gt).multiplyScalar($).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(v){vt.setScissorTest(Ft=v)},this.setOpaqueSort=function(v){G=v},this.setTransparentSort=function(v){ot=v},this.getClearColor=function(v){return v.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(v=!0,I=!0,O=!0){let B=0;if(v){let U=!1;if(w!==null){const nt=w.texture.format;U=nt===Jr||nt===jr||nt===Zr}if(U){const nt=w.texture.type,at=nt===an||nt===Un||nt===Ci||nt===fi||nt===Kr||nt===$r,ft=lt.getClearColor(),pt=lt.getClearAlpha(),St=ft.r,bt=ft.g,_t=ft.b;at?(d[0]=St,d[1]=bt,d[2]=_t,d[3]=pt,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=St,g[1]=bt,g[2]=_t,g[3]=pt,R.clearBufferiv(R.COLOR,0,g))}else B|=R.COLOR_BUFFER_BIT}I&&(B|=R.DEPTH_BUFFER_BIT),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",it,!1),rt.dispose(),ht.dispose(),At.dispose(),A.dispose(),x.dispose(),J.dispose(),Nt.dispose(),jt.dispose(),j.dispose(),et.dispose(),et.removeEventListener("sessionstart",We),et.removeEventListener("sessionend",ra),yn.stop()};function q(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const v=ie.autoReset,I=tt.enabled,O=tt.autoUpdate,B=tt.needsUpdate,U=tt.type;L(),ie.autoReset=v,tt.enabled=I,tt.autoUpdate=O,tt.needsUpdate=B,tt.type=U}function it(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function yt(v){const I=v.target;I.removeEventListener("dispose",yt),Bt(I)}function Bt(v){se(v),At.remove(v)}function se(v){const I=At.get(v).programs;I!==void 0&&(I.forEach(function(O){j.releaseProgram(O)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,O,B,U,nt){I===null&&(I=Rt);const at=U.isMesh&&U.matrixWorld.determinant()<0,ft=jo(v,I,O,B,U);vt.setMaterial(B,at);let pt=O.index,St=1;if(B.wireframe===!0){if(pt=Z.getWireframeAttribute(O),pt===void 0)return;St=2}const bt=O.drawRange,_t=O.attributes.position;let Ht=bt.start*St,Qt=(bt.start+bt.count)*St;nt!==null&&(Ht=Math.max(Ht,nt.start*St),Qt=Math.min(Qt,(nt.start+nt.count)*St)),pt!==null?(Ht=Math.max(Ht,0),Qt=Math.min(Qt,pt.count)):_t!=null&&(Ht=Math.max(Ht,0),Qt=Math.min(Qt,_t.count));const te=Qt-Ht;if(te<0||te===1/0)return;Nt.setup(U,B,ft,O,pt);let Re,Gt=Tt;if(pt!==null&&(Re=z.get(pt),Gt=dt,Gt.setIndex(Re)),U.isMesh)B.wireframe===!0?(vt.setLineWidth(B.wireframeLinewidth*Jt()),Gt.setMode(R.LINES)):Gt.setMode(R.TRIANGLES);else if(U.isLine){let xt=B.linewidth;xt===void 0&&(xt=1),vt.setLineWidth(xt*Jt()),U.isLineSegments?Gt.setMode(R.LINES):U.isLineLoop?Gt.setMode(R.LINE_LOOP):Gt.setMode(R.LINE_STRIP)}else U.isPoints?Gt.setMode(R.POINTS):U.isSprite&&Gt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Gt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xt=U._multiDrawStarts,me=U._multiDrawCounts,Vt=U._multiDrawCount,Be=pt?z.get(pt).bytesPerElement:1,zn=At.get(B).currentProgram.getUniforms();for(let Pe=0;Pe<Vt;Pe++)zn.setValue(R,"_gl_DrawID",Pe),Gt.render(xt[Pe]/Be,me[Pe])}else if(U.isInstancedMesh)Gt.renderInstances(Ht,te,U.count);else if(O.isInstancedBufferGeometry){const xt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,me=Math.min(O.instanceCount,xt);Gt.renderInstances(Ht,te,me)}else Gt.render(Ht,te)};function pe(v,I,O){v.transparent===!0&&v.side===Ie&&v.forceSinglePass===!1?(v.side=Ae,v.needsUpdate=!0,Ui(v,I,O),v.side=Ke,v.needsUpdate=!0,Ui(v,I,O),v.side=Ie):Ui(v,I,O)}this.compile=function(v,I,O=null){O===null&&(O=v),m=ht.get(O),m.init(I),S.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),v!==O&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const B=new Set;return v.traverse(function(U){const nt=U.material;if(nt)if(Array.isArray(nt))for(let at=0;at<nt.length;at++){const ft=nt[at];pe(ft,O,U),B.add(ft)}else pe(nt,O,U),B.add(nt)}),S.pop(),m=null,B},this.compileAsync=function(v,I,O=null){const B=this.compile(v,I,O);return new Promise(U=>{function nt(){if(B.forEach(function(at){At.get(at).currentProgram.isReady()&&B.delete(at)}),B.size===0){U(v);return}setTimeout(nt,10)}Xt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let kt=null;function $e(v){kt&&kt(v)}function We(){yn.stop()}function ra(){yn.start()}const yn=new Wo;yn.setAnimationLoop($e),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(v){kt=v,et.setAnimationLoop(v),v===null?yn.stop():yn.start()},et.addEventListener("sessionstart",We),et.addEventListener("sessionend",ra),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,I,w),m=ht.get(v,S.length),m.init(I),S.push(m),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Yt.setFromProjectionMatrix(mt),Q=this.localClippingEnabled,W=Dt.init(this.clippingPlanes,Q),_=rt.get(v,p.length),_.init(),p.push(_),et.enabled===!0&&et.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&Ds(nt,I,-1/0,y.sortObjects)}Ds(v,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(G,ot),Ut=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ut&&lt.addToRenderList(_,v),this.info.render.frame++,W===!0&&Dt.beginShadows();const O=m.state.shadowsArray;tt.render(O,v,I),W===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,U=_.transmissive;if(m.setupLights(),I.isArrayCamera){const nt=I.cameras;if(U.length>0)for(let at=0,ft=nt.length;at<ft;at++){const pt=nt[at];oa(B,U,v,pt)}Ut&&lt.render(v);for(let at=0,ft=nt.length;at<ft;at++){const pt=nt[at];aa(_,v,pt,pt.viewport)}}else U.length>0&&oa(B,U,v,I),Ut&&lt.render(v),aa(_,v,I);w!==null&&(Pt.updateMultisampleRenderTarget(w),Pt.updateRenderTargetMipmap(w)),v.isScene===!0&&v.onAfterRender(y,v,I),Nt.resetDefaultState(),F=-1,E=null,S.pop(),S.length>0?(m=S[S.length-1],W===!0&&Dt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ds(v,I,O,B){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Yt.intersectsSprite(v)){B&&Et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(mt);const at=J.update(v),ft=v.material;ft.visible&&_.push(v,at,ft,O,Et.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Yt.intersectsObject(v))){const at=J.update(v),ft=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Et.copy(v.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Et.copy(at.boundingSphere.center)),Et.applyMatrix4(v.matrixWorld).applyMatrix4(mt)),Array.isArray(ft)){const pt=at.groups;for(let St=0,bt=pt.length;St<bt;St++){const _t=pt[St],Ht=ft[_t.materialIndex];Ht&&Ht.visible&&_.push(v,at,Ht,O,Et.z,_t)}}else ft.visible&&_.push(v,at,ft,O,Et.z,null)}}const nt=v.children;for(let at=0,ft=nt.length;at<ft;at++)Ds(nt[at],I,O,B)}function aa(v,I,O,B){const U=v.opaque,nt=v.transmissive,at=v.transparent;m.setupLightsView(O),W===!0&&Dt.setGlobalState(y.clippingPlanes,O),B&&vt.viewport(M.copy(B)),U.length>0&&Ni(U,I,O),nt.length>0&&Ni(nt,I,O),at.length>0&&Ni(at,I,O),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function oa(v,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Fn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Ri:an,minFilter:In,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const nt=m.state.transmissionRenderTarget[B.id],at=B.viewport||M;nt.setSize(at.z,at.w);const ft=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(k),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Ut&&lt.render(O);const pt=y.toneMapping;y.toneMapping=xn;const St=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),W===!0&&Dt.setGlobalState(y.clippingPlanes,B),Ni(v,O,B),Pt.updateMultisampleRenderTarget(nt),Pt.updateRenderTargetMipmap(nt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let _t=0,Ht=I.length;_t<Ht;_t++){const Qt=I[_t],te=Qt.object,Re=Qt.geometry,Gt=Qt.material,xt=Qt.group;if(Gt.side===Ie&&te.layers.test(B.layers)){const me=Gt.side;Gt.side=Ae,Gt.needsUpdate=!0,la(te,O,B,Re,Gt,xt),Gt.side=me,Gt.needsUpdate=!0,bt=!0}}bt===!0&&(Pt.updateMultisampleRenderTarget(nt),Pt.updateRenderTargetMipmap(nt))}y.setRenderTarget(ft),y.setClearColor(k,K),St!==void 0&&(B.viewport=St),y.toneMapping=pt}function Ni(v,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,nt=v.length;U<nt;U++){const at=v[U],ft=at.object,pt=at.geometry,St=B===null?at.material:B,bt=at.group;ft.layers.test(O.layers)&&la(ft,I,O,pt,St,bt)}}function la(v,I,O,B,U,nt){v.onBeforeRender(y,I,O,B,U,nt),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,I,O,B,v,nt),U.transparent===!0&&U.side===Ie&&U.forceSinglePass===!1?(U.side=Ae,U.needsUpdate=!0,y.renderBufferDirect(O,I,B,U,v,nt),U.side=Ke,U.needsUpdate=!0,y.renderBufferDirect(O,I,B,U,v,nt),U.side=Ie):y.renderBufferDirect(O,I,B,U,v,nt),v.onAfterRender(y,I,O,B,U,nt)}function Ui(v,I,O){I.isScene!==!0&&(I=Rt);const B=At.get(v),U=m.state.lights,nt=m.state.shadowsArray,at=U.state.version,ft=j.getParameters(v,U.state,nt,I,O),pt=j.getProgramCacheKey(ft);let St=B.programs;B.environment=v.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(v.isMeshStandardMaterial?x:A).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,St===void 0&&(v.addEventListener("dispose",yt),St=new Map,B.programs=St);let bt=St.get(pt);if(bt!==void 0){if(B.currentProgram===bt&&B.lightsStateVersion===at)return ha(v,ft),bt}else ft.uniforms=j.getUniforms(v),v.onBeforeCompile(ft,y),bt=j.acquireProgram(ft,pt),St.set(pt,bt),B.uniforms=ft.uniforms;const _t=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_t.clippingPlanes=Dt.uniform),ha(v,ft),B.needsLights=Qo(v),B.lightsStateVersion=at,B.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=bt,B.uniformsList=null,bt}function ca(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=_s.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function ha(v,I){const O=At.get(v);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function jo(v,I,O,B,U){I.isScene!==!0&&(I=Rt),Pt.resetTextureUnits();const nt=I.fog,at=B.isMeshStandardMaterial?I.environment:null,ft=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Mn,pt=(B.isMeshStandardMaterial?x:A).get(B.envMap||at),St=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,bt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_t=!!O.morphAttributes.position,Ht=!!O.morphAttributes.normal,Qt=!!O.morphAttributes.color;let te=xn;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(te=y.toneMapping);const Re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Gt=Re!==void 0?Re.length:0,xt=At.get(B),me=m.state.lights;if(W===!0&&(Q===!0||v!==E)){const Ne=v===E&&B.id===F;Dt.setState(B,v,Ne)}let Vt=!1;B.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==me.state.version||xt.outputColorSpace!==ft||U.isBatchedMesh&&xt.batching===!1||!U.isBatchedMesh&&xt.batching===!0||U.isBatchedMesh&&xt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xt.instancing===!1||!U.isInstancedMesh&&xt.instancing===!0||U.isSkinnedMesh&&xt.skinning===!1||!U.isSkinnedMesh&&xt.skinning===!0||U.isInstancedMesh&&xt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xt.instancingMorph===!1&&U.morphTexture!==null||xt.envMap!==pt||B.fog===!0&&xt.fog!==nt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Dt.numPlanes||xt.numIntersection!==Dt.numIntersection)||xt.vertexAlphas!==St||xt.vertexTangents!==bt||xt.morphTargets!==_t||xt.morphNormals!==Ht||xt.morphColors!==Qt||xt.toneMapping!==te||xt.morphTargetsCount!==Gt)&&(Vt=!0):(Vt=!0,xt.__version=B.version);let Be=xt.currentProgram;Vt===!0&&(Be=Ui(B,I,U));let zn=!1,Pe=!1,Ls=!1;const re=Be.getUniforms(),ln=xt.uniforms;if(vt.useProgram(Be.program)&&(zn=!0,Pe=!0,Ls=!0),B.id!==F&&(F=B.id,Pe=!0),zn||E!==v){re.setValue(R,"projectionMatrix",v.projectionMatrix),re.setValue(R,"viewMatrix",v.matrixWorldInverse);const Ne=re.map.cameraPosition;Ne!==void 0&&Ne.setValue(R,ct.setFromMatrixPosition(v.matrixWorld)),Kt.logarithmicDepthBuffer&&re.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Pe=!0,Ls=!0)}if(U.isSkinnedMesh){re.setOptional(R,U,"bindMatrix"),re.setOptional(R,U,"bindMatrixInverse");const Ne=U.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),re.setValue(R,"boneTexture",Ne.boneTexture,Pt))}U.isBatchedMesh&&(re.setOptional(R,U,"batchingTexture"),re.setValue(R,"batchingTexture",U._matricesTexture,Pt),re.setOptional(R,U,"batchingIdTexture"),re.setValue(R,"batchingIdTexture",U._indirectTexture,Pt),re.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(R,"batchingColorTexture",U._colorsTexture,Pt));const Is=O.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Ot.update(U,O,Be),(Pe||xt.receiveShadow!==U.receiveShadow)&&(xt.receiveShadow=U.receiveShadow,re.setValue(R,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ln.envMap.value=pt,ln.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(ln.envMapIntensity.value=I.environmentIntensity),Pe&&(re.setValue(R,"toneMappingExposure",y.toneMappingExposure),xt.needsLights&&Jo(ln,Ls),nt&&B.fog===!0&&Mt.refreshFogUniforms(ln,nt),Mt.refreshMaterialUniforms(ln,B,$,V,m.state.transmissionRenderTarget[v.id]),_s.upload(R,ca(xt),ln,Pt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(_s.upload(R,ca(xt),ln,Pt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(R,"center",U.center),re.setValue(R,"modelViewMatrix",U.modelViewMatrix),re.setValue(R,"normalMatrix",U.normalMatrix),re.setValue(R,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ne=B.uniformsGroups;for(let Ns=0,tl=Ne.length;Ns<tl;Ns++){const ua=Ne[Ns];jt.update(ua,Be),jt.bind(ua,Be)}}return Be}function Jo(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Qo(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(v,I,O){At.get(v.texture).__webglTexture=I,At.get(v.depthTexture).__webglTexture=O;const B=At.get(v);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){const O=At.get(v);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,O=0){w=v,C=I,T=O;let B=!0,U=null,nt=!1,at=!1;if(v){const pt=At.get(v);if(pt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(pt.__webglFramebuffer===void 0)Pt.setupRenderTarget(v);else if(pt.__hasExternalTextures)Pt.rebindTextures(v,At.get(v.texture).__webglTexture,At.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const _t=v.depthTexture;if(pt.__boundDepthTexture!==_t){if(_t!==null&&At.has(_t)&&(v.width!==_t.image.width||v.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(v)}}const St=v.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(at=!0);const bt=At.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[I])?U=bt[I][O]:U=bt[I],nt=!0):v.samples>0&&Pt.useMultisampledRTT(v)===!1?U=At.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?U=bt[O]:U=bt,M.copy(v.viewport),P.copy(v.scissor),H=v.scissorTest}else M.copy(ut).multiplyScalar($).floor(),P.copy(gt).multiplyScalar($).floor(),H=Ft;if(vt.bindFramebuffer(R.FRAMEBUFFER,U)&&B&&vt.drawBuffers(v,U),vt.viewport(M),vt.scissor(P),vt.setScissorTest(H),nt){const pt=At.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,O)}else if(at){const pt=At.get(v.texture),St=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,pt.__webglTexture,O||0,St)}F=-1},this.readRenderTargetPixels=function(v,I,O,B,U,nt,at){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=At.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){vt.bindFramebuffer(R.FRAMEBUFFER,ft);try{const pt=v.texture,St=pt.format,bt=pt.type;if(!Kt.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-B&&O>=0&&O<=v.height-U&&R.readPixels(I,O,B,U,wt.convert(St),wt.convert(bt),nt)}finally{const pt=w!==null?At.get(w).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(v,I,O,B,U,nt,at){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=At.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){vt.bindFramebuffer(R.FRAMEBUFFER,ft);try{const pt=v.texture,St=pt.format,bt=pt.type;if(!Kt.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-B&&O>=0&&O<=v.height-U){const _t=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.bufferData(R.PIXEL_PACK_BUFFER,nt.byteLength,R.STREAM_READ),R.readPixels(I,O,B,U,wt.convert(St),wt.convert(bt),0),R.flush();const Ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await oc(R,Ht,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,_t),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,nt)}finally{R.deleteBuffer(_t),R.deleteSync(Ht)}return nt}}finally{const pt=w!==null?At.get(w).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(v,I=null,O=0){v.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);const B=Math.pow(2,-O),U=Math.floor(v.image.width*B),nt=Math.floor(v.image.height*B),at=I!==null?I.x:0,ft=I!==null?I.y:0;Pt.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,at,ft,U,nt),vt.unbindTexture()},this.copyTextureToTexture=function(v,I,O=null,B=null,U=0){v.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,v=arguments[1],I=arguments[2],U=arguments[3]||0,O=null);let nt,at,ft,pt,St,bt;O!==null?(nt=O.max.x-O.min.x,at=O.max.y-O.min.y,ft=O.min.x,pt=O.min.y):(nt=v.image.width,at=v.image.height,ft=0,pt=0),B!==null?(St=B.x,bt=B.y):(St=0,bt=0);const _t=wt.convert(I.format),Ht=wt.convert(I.type);Pt.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Qt=R.getParameter(R.UNPACK_ROW_LENGTH),te=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Re=R.getParameter(R.UNPACK_SKIP_PIXELS),Gt=R.getParameter(R.UNPACK_SKIP_ROWS),xt=R.getParameter(R.UNPACK_SKIP_IMAGES),me=v.isCompressedTexture?v.mipmaps[U]:v.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,pt),v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,St,bt,nt,at,_t,Ht,me.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,St,bt,me.width,me.height,_t,me.data):R.texSubImage2D(R.TEXTURE_2D,U,St,bt,nt,at,_t,Ht,me),R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xt),U===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(v,I,O=null,B=null,U=0){v.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,v=arguments[2],I=arguments[3],U=arguments[4]||0);let nt,at,ft,pt,St,bt,_t,Ht,Qt;const te=v.isCompressedTexture?v.mipmaps[U]:v.image;O!==null?(nt=O.max.x-O.min.x,at=O.max.y-O.min.y,ft=O.max.z-O.min.z,pt=O.min.x,St=O.min.y,bt=O.min.z):(nt=te.width,at=te.height,ft=te.depth,pt=0,St=0,bt=0),B!==null?(_t=B.x,Ht=B.y,Qt=B.z):(_t=0,Ht=0,Qt=0);const Re=wt.convert(I.format),Gt=wt.convert(I.type);let xt;if(I.isData3DTexture)Pt.setTexture3D(I,0),xt=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Pt.setTexture2DArray(I,0),xt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const me=R.getParameter(R.UNPACK_ROW_LENGTH),Vt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Be=R.getParameter(R.UNPACK_SKIP_PIXELS),zn=R.getParameter(R.UNPACK_SKIP_ROWS),Pe=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,St),R.pixelStorei(R.UNPACK_SKIP_IMAGES,bt),v.isDataTexture||v.isData3DTexture?R.texSubImage3D(xt,U,_t,Ht,Qt,nt,at,ft,Re,Gt,te.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(xt,U,_t,Ht,Qt,nt,at,ft,Re,te.data):R.texSubImage3D(xt,U,_t,Ht,Qt,nt,at,ft,Re,Gt,te),R.pixelStorei(R.UNPACK_ROW_LENGTH,me),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Vt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,zn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe),U===0&&I.generateMipmaps&&R.generateMipmap(xt),vt.unbindTexture()},this.initRenderTarget=function(v){At.get(v).__webglFramebuffer===void 0&&Pt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Pt.setTextureCube(v,0):v.isData3DTexture?Pt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Pt.setTexture2DArray(v,0):Pt.setTexture2D(v,0),vt.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,vt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qr?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===Cs?"display-p3":"srgb"}}class na{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new na(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vp extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wi extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ts=new N,As=new N,lo=new ee,Ei=new ta,rs=new Rs,cr=new N,co=new N;class xs extends Ee{constructor(t=new ye,e=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,i=e.count;s<i;s++)Ts.fromBufferAttribute(e,s-1),As.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ts.distanceTo(As);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,i=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),rs.radius+=i,t.ray.intersectsSphere(rs)===!1)return;lo.copy(s).invert(),Ei.copy(t.ray).applyMatrix4(lo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),y=as(this,t,Ei,l,p,S);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=as(this,t,Ei,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=as(this,t,Ei,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=as(this,t,Ei,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function as(r,t,e,n,s,i){const a=r.geometry.attributes.position;if(Ts.fromBufferAttribute(a,s),As.fromBufferAttribute(a,i),e.distanceSqToSegment(Ts,As,cr,co)>n)return;cr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(cr);if(!(l<t.near||l>t.far))return{distance:l,point:co.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,object:r}}const ho=new N,uo=new N;class Mp extends xs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,i=e.count;s<i;s+=2)ho.fromBufferAttribute(e,s),uo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ho.distanceTo(uo);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yp{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),i=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),i+=n.distanceTo(s),e.push(i),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const i=n.length;let a;e?a=e:a=t*n[i-1];let o=0,l=i-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(i-1);const h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(i-1)}getTangent(t,e){let s=t-1e-4,i=t+1e-4;s<0&&(s=0),i>1&&(i=1);const a=this.getPoint(s),o=this.getPoint(i),l=e||(a.isVector2?new Ct:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],i=[],a=[],o=new N,l=new ee;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new N)}i[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),i[0].crossVectors(s[0],o),a[0].crossVectors(s[0],i[0]);for(let d=1;d<=t;d++){if(i[d]=i[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(_e(s[d-1].dot(s[d]),-1,1));i[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],i[d])}if(e===!0){let d=Math.acos(_e(i[0].dot(i[t]),-1,1));d/=t,s[0].dot(o.crossVectors(i[0],i[t]))>0&&(d=-d);for(let g=1;g<=t;g++)i[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],i[g])}return{tangents:s,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sp extends yp{constructor(t=0,e=0,n=1,s=1,i=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){const n=e,s=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=s;for(;i>s;)i-=s;i<Number.EPSILON&&(a?i=0:i=s),this.aClockwise===!0&&!a&&(i===s?i=-s:i=i-s);const o=this.aStartAngle+t*i;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ia extends ye{constructor(t=1,e=.4,n=12,s=48,i=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:i},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*i,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ep extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bp extends Ep{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tp extends Mp{constructor(t=10,e=10,n=4473924,s=8947848){n=new zt(n),s=new zt(s);const i=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=e;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=f===i?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new ye;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));const u=new wi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ap extends Bn{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);const po={type:"change"},sa={type:"start"},Zo={type:"end"},os=new ta,mo=new mn,wp=Math.cos(70*rc.DEG2RAD),le=new N,Te=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hr=1e-6;class Cp extends Ap{constructor(t,e=null){super(t,e),this.state=$t.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new On,this._lastTargetPosition=new N,this._quat=new On().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fo,this._sphericalDelta=new fo,this._scale=1,this._panOffset=new N,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new N,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Pp.bind(this),this._onPointerDown=Rp.bind(this),this._onPointerUp=Dp.bind(this),this._onContextMenu=Bp.bind(this),this._onMouseWheel=Np.bind(this),this._onKeyDown=Up.bind(this),this._onTouchStart=Fp.bind(this),this._onTouchMove=Op.bind(this),this._onMouseDown=Lp.bind(this),this._onMouseMove=Ip.bind(this),this._interceptControlDown=zp.bind(this),this._interceptControlUp=kp.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(po),this.update(),this.state=$t.NONE}update(t=null){const e=this.object.position;le.copy(e).sub(this.target),le.applyQuaternion(this._quat),this._spherical.setFromVector3(le),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Te:n>Math.PI&&(n-=Te),s<-Math.PI?s+=Te:s>Math.PI&&(s-=Te),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=a!=this._spherical.radius}if(le.setFromSpherical(this._spherical),le.applyQuaternion(this._quatInverse),e.copy(this.target).add(le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=le.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),i=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(os.origin.copy(this.object.position),os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(os.direction))<wp?this.object.lookAt(this.target):(mo.setFromNormalAndCoplanarPoint(this.object.up,this.target),os.intersectPlane(mo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>hr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hr||this._lastTargetPosition.distanceToSquared(this.target)>hr?(this.dispatchEvent(po),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Te/60*this.autoRotateSpeed*t:Te/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){le.setFromMatrixColumn(e,0),le.multiplyScalar(-t),this._panOffset.add(le)}_panUp(t,e){this.screenSpacePanning===!0?le.setFromMatrixColumn(e,1):(le.setFromMatrixColumn(e,0),le.crossVectors(this.object.up,le)),le.multiplyScalar(t),this._panOffset.add(le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;le.copy(s).sub(this.target);let i=le.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*i/n.clientHeight,this.object.matrix),this._panUp(2*e*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,i=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Te*this._rotateDelta.x/e.clientHeight),this._rotateUp(Te*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Te*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,i=Math.sqrt(n*n+s*s);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),i=.5*(t.pageY+n.y);this._rotateEnd.set(s,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Te*this._rotateDelta.x/e.clientHeight),this._rotateUp(Te*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,i=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Rp(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Pp(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Dp(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zo),this.state=$t.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Lp(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=$t.DOLLY;break;case ai.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=$t.ROTATE}break;case ai.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(sa)}function Ip(r){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Np(r){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(r.preventDefault(),this.dispatchEvent(sa),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Zo))}function Up(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function Fp(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=$t.TOUCH_ROTATE;break;case si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=$t.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(sa)}function Op(r){switch(this._trackPointer(r),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=$t.NONE}}function Bp(r){this.enabled!==!1&&r.preventDefault()}function zp(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kp(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qt={sub:(r,t)=>({re:r.re-t.re,im:r.im-t.im}),abs:r=>Math.sqrt(r.re*r.re+r.im*r.im),polar:(r,t)=>({re:r*Math.cos(t),im:r*Math.sin(t)})};function go(r){let t=[{re:1,im:0}];for(const e of r){const n=Array(t.length+1).fill(null).map(()=>({re:0,im:0}));for(let s=0;s<t.length;s++)n[s].re+=t[s].re,n[s].im+=t[s].im,n[s+1].re-=t[s].re*e.re-t[s].im*e.im,n[s+1].im-=t[s].re*e.im+t[s].im*e.re;t=n}return t}function bi(r){const t=Math.max(0,Math.min(1,r));if(t<.2){const n=t/.2;return[Math.round(n*40),0,Math.round(60+n*80)]}if(t<.4){const n=(t-.2)/.2;return[Math.round(40+n*110),Math.round(n*60),Math.round(140-n*40)]}if(t<.62){const n=(t-.4)/.22;return[Math.round(150-n*68),Math.round(60+n*147),Math.round(100+n*154)]}if(t<.82){const n=(t-.62)/.2;return[Math.round(82+n*173),Math.round(207+n*38),Math.round(254-n*200)]}const e=(t-.82)/.18;return[255,Math.round(245+e*10),Math.round(54+e*201)]}class Hp{constructor(t){D(this,"container");D(this,"animId",null);D(this,"poles",[]);D(this,"zeros",[]);D(this,"dragging",null);D(this,"planeCanvas");D(this,"surfaceCanvas");D(this,"responseCanvas");D(this,"spectrumCanvas");D(this,"threeRenderer",null);D(this,"threeScene",null);D(this,"threeCamera",null);D(this,"threeControls",null);D(this,"surfaceMesh",null);D(this,"unitCircleLine",null);D(this,"freqRibbon",null);D(this,"spectrumBars3D",null);D(this,"spectrumBars3DCount",96);D(this,"threeN",64);D(this,"threeRange",1.8);D(this,"useThreeJS",!1);D(this,"rotAngle2D",0);D(this,"sharedAudio",hi.getInstance());D(this,"audioCtx",null);D(this,"originalBuffer",null);D(this,"sourceNode",null);D(this,"dspNode",null);D(this,"gainNode",null);D(this,"analyserNode",null);D(this,"isPlaying",!1);D(this,"playMode","filtered");D(this,"playbackStartedAt",0);D(this,"pausedAt",0);D(this,"sampleRate",44100);D(this,"origSpectrumStatic",null);D(this,"analyserData",null);D(this,"statusEl");D(this,"playOrigBtn");D(this,"playFiltBtn");D(this,"stopBtn");D(this,"filterInfoEl");D(this,"waveformTimeline");D(this,"onResize",()=>this.resizeLayout());const e=document.getElementById(t);if(!e)throw new Error(`Container "${t}" not found`);this.container=e,this.loadDefaults(),this.buildUI(),this.tryInitThreeJS(),this.startAnimation(),window.addEventListener("resize",this.onResize),this.resizeLayout()}loadDefaults(){this.zeros=[qt.polar(1,Math.PI/2),qt.polar(1,-Math.PI/2)],this.poles=[qt.polar(.8,Math.PI/2),qt.polar(.8,-Math.PI/2)]}computeMag(t){let e=1,n=1;for(const s of this.zeros)e*=qt.abs(qt.sub(t,s));for(const s of this.poles)n*=qt.abs(qt.sub(t,s));return n<1e-12?1/0:!this.zeros.length&&!this.poles.length?1:e/n}getCoeffs(){const t=go(this.zeros).map(n=>n.re),e=go(this.poles).map(n=>n.re);return t.length||t.push(1),e.length||e.push(1),{b:t,a:e}}tryInitThreeJS(){try{const t=this.surfaceCanvas,e=Math.min(window.devicePixelRatio||1,2),n=t.width/e,s=t.height/e;this.threeRenderer=new xp({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.threeRenderer.setSize(n,s),this.threeRenderer.setPixelRatio(e),this.threeRenderer.setClearColor(263431,1),this.threeScene=new vp,this.threeScene.fog=new na(263431,8,22),this.threeCamera=new Fe(44,n/s,.1,100),this.threeCamera.position.set(2.8,3.2,4.4),this.threeControls=new Cp(this.threeCamera,t),this.threeControls.enableDamping=!0,this.threeControls.dampingFactor=.06,this.threeControls.minDistance=1.2,this.threeControls.maxDistance=16,this.threeControls.maxPolarAngle=Math.PI*.88,this.threeControls.target.set(0,.45,0),this.threeControls.update(),t.addEventListener("wheel",b=>b.preventDefault(),{passive:!1}),t.style.touchAction="none",this.threeScene.add(new bp(16777215,1));const i=new Tp(3.8,20,861504,861504);this.threeScene.add(i);const a=this.threeRange,o=new nn({color:205119,transparent:!0,opacity:.55,side:Ie}),l=new Me(new Nn(a*2,a),o);l.rotation.x=-Math.PI/2,l.position.set(0,-.005,a/2),this.threeScene.add(l);const c=new nn({color:1312550,transparent:!0,opacity:.55,side:Ie}),h=new Me(new Nn(a*2,a),c);h.rotation.x=-Math.PI/2,h.position.set(0,-.005,-a/2),this.threeScene.add(h);const u=(b,C,T=1)=>new xs(new ye().setFromPoints(b),new wi({color:C,transparent:T<1,opacity:T}));this.threeScene.add(u([new N(-a-.15,0,0),new N(a+.15,0,0)],16737860,.85)),this.threeScene.add(u([new N(0,0,-a-.15),new N(0,0,a+.15)],4513160,.85)),this.threeScene.add(u([new N(0,0,0),new N(0,1.5,0)],16777215,.55)),[-1,1].forEach(b=>{this.threeScene.add(u([new N(b,0,-.08),new N(b,0,.08)],16737860,.7))}),[-1,1].forEach(b=>{this.threeScene.add(u([new N(-.08,0,b),new N(.08,0,b)],4513160,.7))});const f=new Nn(a*2.1,1.55),d=new nn({color:3368618,transparent:!0,opacity:.025,side:Ie,depthWrite:!1}),g=new Me(f,d);g.position.set(0,.775,0),this.threeScene.add(g);const _=new Me(new ia(1,.022,8,128),new nn({color:5427198}));_.rotation.x=Math.PI/2,this.threeScene.add(_);const p=new Sp(0,0,1,1,0,Math.PI*2,!1,0).getPoints(200),S=new ye().setFromPoints(p.map(b=>new N(b.x,.01,b.y))),y=new wi({color:5427198,transparent:!0,opacity:.3});this.threeScene.add(new xs(S,y)),this.createThreeSurface(),this.unitCircleLine=this.createUnitCircleLine(),this.threeScene.add(this.unitCircleLine),this.createFreqRibbon(),this.createSpectrumBars3D(),this.useThreeJS=!0,console.log("Three.js WebGL initialized ✓")}catch(t){console.warn("Three.js WebGL init failed, using Canvas2D fallback:",t),this.useThreeJS=!1}}createThreeSurface(){if(!this.threeScene)return;const t=this.threeN,e=this.threeRange,n=(t+1)*(t+1),s=new Float32Array(n*3),i=new Float32Array(n*3),a=[];for(let c=0;c<=t;c++)for(let h=0;h<=t;h++){const u=c*(t+1)+h;s[u*3]=-e+2*e*c/t,s[u*3+1]=0,s[u*3+2]=-e+2*e*h/t,i[u*3]=0,i[u*3+1]=.05,i[u*3+2]=.15}for(let c=0;c<t;c++)for(let h=0;h<t;h++){const u=c*(t+1)+h,f=u+1,d=(c+1)*(t+1)+h,g=d+1;a.push(u,f,g,u,g,d)}const o=new ye;o.setAttribute("position",new ge(s,3)),o.setAttribute("color",new ge(i,3)),o.setIndex(a);const l=new nn({vertexColors:!0,side:Ke,transparent:!0,opacity:.82,depthWrite:!1});this.surfaceMesh=new Me(o,l),this.threeScene.add(this.surfaceMesh)}createUnitCircleLine(){const e=new ye;e.setAttribute("position",new ge(new Float32Array(301*3),3));const n=new wi({color:16777215,linewidth:2});return new xs(e,n)}createFreqRibbon(){if(!this.threeScene)return;const t=300,e=new Float32Array((t+1)*2*3),n=new Float32Array((t+1)*2*3),s=[];for(let o=0;o<=t;o++){const l=2*Math.PI*o/t,c=Math.cos(l),h=Math.sin(l);if(e[o*2*3]=c,e[o*2*3+1]=.01,e[o*2*3+2]=h,e[(o*2+1)*3]=c,e[(o*2+1)*3+1]=.01,e[(o*2+1)*3+2]=h,o<t){const u=o*2,f=o*2+1,d=(o+1)*2,g=(o+1)*2+1;s.push(u,f,g,u,g,d)}}const i=new ye;i.setAttribute("position",new ge(e,3)),i.setAttribute("color",new ge(n,3)),i.setIndex(s);const a=new nn({vertexColors:!0,side:Ke,transparent:!0,opacity:.42,depthWrite:!1});this.freqRibbon=new Me(i,a),this.threeScene.add(this.freqRibbon),this.updateThreeSurface()}createSpectrumBars3D(){if(!this.threeScene)return;const t=this.spectrumBars3DCount,e=new Float32Array(t*4*3),n=new Float32Array(t*4*3),s=[],i=1.35,a=.038;for(let c=0;c<t;c++){const h=2*Math.PI*c/t,u=Math.cos(h),f=Math.sin(h),d=-Math.sin(h)*a,g=Math.cos(h)*a,_=c*4;e[(_+0)*3+0]=u*i-d,e[(_+0)*3+1]=.005,e[(_+0)*3+2]=f*i-g,e[(_+1)*3+0]=u*i+d,e[(_+1)*3+1]=.005,e[(_+1)*3+2]=f*i+g,e[(_+2)*3+0]=u*i-d,e[(_+2)*3+1]=.005,e[(_+2)*3+2]=f*i-g,e[(_+3)*3+0]=u*i+d,e[(_+3)*3+1]=.005,e[(_+3)*3+2]=f*i+g,s.push(_+0,_+1,_+3,_+0,_+3,_+2)}const o=new ye;o.setAttribute("position",new ge(e,3)),o.setAttribute("color",new ge(n,3)),o.setIndex(s);const l=new nn({vertexColors:!0,side:Ie,transparent:!0,opacity:.85,depthWrite:!1});this.spectrumBars3D=new Me(o,l),this.threeScene.add(this.spectrumBars3D)}updateSpectrumBars3D(){if(!this.spectrumBars3D||!this.analyserNode||!this.analyserData)return;this.analyserNode.getFloatFrequencyData(this.analyserData);const t=this.spectrumBars3DCount,e=1.35,n=.038,s=.9,i=-80,a=80,o=this.analyserData.length,l=this.spectrumBars3D.geometry.attributes.position,c=this.spectrumBars3D.geometry.attributes.color;for(let h=0;h<t;h++){const u=2*Math.PI*h/t,f=Math.cos(u),d=Math.sin(u),g=-Math.sin(u)*n,_=Math.cos(u)*n,m=h/t,p=Math.log10(1+m*9)/Math.log10(10),S=Math.max(1,Math.min(o-1,Math.floor(p*o))),y=this.analyserData[S],b=Math.max(0,Math.min(1,(y-i)/a)),C=b*s,[T,w,F]=bi(b*.85+.1),E=T/255,M=w/255,P=F/255,H=h*4;l.setXYZ(H+0,f*e-g,.005,d*e-_),c.setXYZ(H+0,E*.3,M*.3,P*.3),l.setXYZ(H+1,f*e+g,.005,d*e+_),c.setXYZ(H+1,E*.3,M*.3,P*.3),l.setXYZ(H+2,f*e-g,C,d*e-_),c.setXYZ(H+2,E,M,P),l.setXYZ(H+3,f*e+g,C,d*e+_),c.setXYZ(H+3,E,M,P)}l.needsUpdate=!0,c.needsUpdate=!0}updateThreeSurface(){if(!this.surfaceMesh)return;const t=this.threeN,e=this.threeRange,n=3.8,s=.32,i=l=>{const c=isFinite(l)?l:100;return Math.atan(c/2)/(Math.PI/2)*n*s},a=this.surfaceMesh.geometry.attributes.position,o=this.surfaceMesh.geometry.attributes.color;for(let l=0;l<=t;l++)for(let c=0;c<=t;c++){const h=l*(t+1)+c,u=-e+2*e*l/t,f=-e+2*e*c/t,d=this.computeMag({re:u,im:f}),g=i(d);a.setY(h,g);const _=g/(n*s),[m,p,S]=bi(_);o.setXYZ(h,m/255,p/255,S/255)}if(a.needsUpdate=!0,o.needsUpdate=!0,this.surfaceMesh.geometry.computeVertexNormals(),this.unitCircleLine){const c=this.unitCircleLine.geometry.attributes.position;for(let h=0;h<=300;h++){const u=2*Math.PI*h/300,f=this.computeMag({re:Math.cos(u),im:Math.sin(u)}),d=i(f);c.setXYZ(h,Math.cos(u),d+.03,Math.sin(u))}c.needsUpdate=!0}if(this.freqRibbon){const c=this.freqRibbon.geometry.attributes.position,h=this.freqRibbon.geometry.attributes.color;for(let u=0;u<=300;u++){const f=2*Math.PI*u/300,d=Math.cos(f),g=Math.sin(f),_=this.computeMag({re:d,im:g}),m=i(_),p=m/(n*s),[S,y,b]=bi(p);c.setXYZ(u*2,d,.01,g),h.setXYZ(u*2,S/255,y/255,b/255),c.setXYZ(u*2+1,d,m+.02,g),h.setXYZ(u*2+1,S/255,y/255,b/255)}c.needsUpdate=!0,h.needsUpdate=!0}}buildUI(){document.body.style.overflowY="auto";const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:4px 0 5px;flex-wrap:wrap;gap:8px;",t.innerHTML=`
      <div style="font-size:11px;font-weight:700;letter-spacing:.15em;color:var(--color-text-dim);text-transform:uppercase;">POLE-ZERO FILTER DESIGNER</div>
      <div style="font-size:9px;color:var(--color-text-dim);background:rgba(0,0,0,0.3);padding:5px 12px;border-radius:4px;border:1px solid rgba(255,255,255,0.06);">
        <span style="color:#52cffe;font-weight:700;">LEFT CLICK</span> = Zero ○ &nbsp;|&nbsp;
        <span style="color:#ff869a;font-weight:700;">RIGHT CLICK</span> = Pole × &nbsp;|&nbsp;
        <span style="color:rgba(255,255,255,0.45);">DOUBLE-CLICK</span> = remove &nbsp;|&nbsp;
        <span style="color:rgba(255,255,255,0.45);">DRAG</span> = move &nbsp;|&nbsp;
        <span style="color:#52cffe;">3D: scroll=zoom · drag=orbit</span>
      </div>`,this.container.appendChild(t);const e=document.createElement("div");e.style.cssText="display:flex;gap:6px;align-items:center;padding:0 0 7px;flex-wrap:wrap;",e.innerHTML='<span style="font-size:8.5px;color:var(--color-text-dim);letter-spacing:.1em;font-weight:700;">PRESET:</span>',[{label:"Notch",poles:[qt.polar(.8,Math.PI/2),qt.polar(.8,-Math.PI/2)],zeros:[qt.polar(1,Math.PI/2),qt.polar(1,-Math.PI/2)]},{label:"Lowpass",poles:[qt.polar(.88,.28),qt.polar(.88,-.28)],zeros:[{re:-1,im:0}]},{label:"Highpass",poles:[qt.polar(.88,Math.PI-.28),qt.polar(.88,-(Math.PI-.28))],zeros:[{re:1,im:0}]},{label:"Bandpass",poles:[qt.polar(.9,Math.PI/3),qt.polar(.9,-Math.PI/3)],zeros:[{re:1,im:0},{re:-1,im:0}]},{label:"Resonator",poles:[qt.polar(.96,Math.PI/4),qt.polar(.96,-Math.PI/4)],zeros:[]},{label:"Comb",poles:[],zeros:[0,1,2,3,4,5].map(g=>qt.polar(1,g*Math.PI/3))},{label:"Clear",poles:[],zeros:[]}].forEach(g=>{const _=document.createElement("button");_.className="vst-button",_.style.cssText="font-size:9px;padding:0 10px;height:24px;",_.textContent=g.label,_.onclick=()=>{this.poles=g.poles.map(m=>({...m})),this.zeros=g.zeros.map(m=>({...m})),this.onFilterChanged()},e.appendChild(_)}),this.container.appendChild(e);const s=document.createElement("div");s.style.cssText="display:grid;grid-template-columns:minmax(300px,0.45fr) minmax(360px,1fr);gap:8px;margin-bottom:8px;";const i=this.makePanel("Z-PLANE  ·  L=Zero ○  R=Pole ×  ·  DOUBLE-CLICK=REMOVE  ·  DRAG=MOVE");this.planeCanvas=this.makeCanvas2D(i,420,370),this.setupPlaneInteraction(),s.appendChild(i);const a=this.makePanel("|H(z)| SURFACE  ·  SCROLL=ZOOM  ·  DRAG=ORBIT  ·  PEAKS=POLES  ·  VALLEYS=ZEROS");this.surfaceCanvas=this.makeCanvasWebGL(a,510,370),s.appendChild(a),this.container.appendChild(s);const o=this.makePanel("FREQUENCY RESPONSE  ·  THIS IS THE UNIT CIRCLE SLICING THROUGH THE 3D SURFACE  ·  LOOKING FROM THE SIDE");this.responseCanvas=this.makeCanvas2D(o,938,120),this.container.appendChild(o);const l=document.createElement("div");l.style.cssText="display:flex;gap:8px;align-items:stretch;margin:8px 0;";const c=document.createElement("div");c.style.cssText=`
      flex:1;background:rgba(0,0,0,0.28);border:1px solid rgba(255,255,255,0.05);
      border-radius:6px;padding:12px 16px;display:flex;flex-direction:column;gap:9px;`;const h=document.createElement("input");h.type="file",h.accept="audio/*",h.style.display="none",h.onchange=g=>this.handleUpload(g);const u=document.createElement("button");u.className="vst-button",u.textContent="⬆  Upload Audio File",u.style.cssText="width:100%;font-size:10px;",u.onclick=()=>h.click();const f=document.createElement("div");f.style.cssText="display:flex;gap:6px;",this.playOrigBtn=document.createElement("button"),this.playOrigBtn.className="vst-button",this.playOrigBtn.textContent="▶ Original",this.playOrigBtn.style.flex="1",this.playOrigBtn.disabled=!0,this.playOrigBtn.onclick=()=>void this.startPlayback("original"),this.playFiltBtn=document.createElement("button"),this.playFiltBtn.className="vst-button active",this.playFiltBtn.textContent="▶ Filtered (live)",this.playFiltBtn.style.flex="1",this.playFiltBtn.disabled=!0,this.playFiltBtn.onclick=()=>void this.startPlayback("filtered"),this.stopBtn=document.createElement("button"),this.stopBtn.className="vst-button",this.stopBtn.textContent="■ Stop",this.stopBtn.disabled=!0,this.stopBtn.onclick=()=>this.stopAudio(!0),f.append(this.playOrigBtn,this.playFiltBtn,this.stopBtn),this.statusEl=document.createElement("div"),this.statusEl.style.cssText="font-size:9px;color:var(--color-text-dim);letter-spacing:.05em;min-height:12px;",this.statusEl.textContent="Upload an audio file — filter changes apply in real-time while playing",this.filterInfoEl=document.createElement("div"),this.filterInfoEl.style.cssText=`
      font-size:9px;font-family:'JetBrains Mono',monospace;
      color:var(--color-accent-primary);line-height:1.9;
      background:rgba(0,0,0,0.3);border-radius:4px;padding:7px 10px;
      border:1px solid rgba(82,207,254,0.1);`,this.waveformTimeline=new xo({width:880,height:86,title:"WAVEFORM / PLAYHEAD"},g=>this.handlePlayheadSeek(g)),c.append(h,u,f,this.statusEl,this.waveformTimeline.getElement(),this.filterInfoEl),l.appendChild(c),this.container.appendChild(l);const d=this.makePanel("SPECTRUM  ·  GRAY=ORIGINAL  ·  CYAN=LIVE FILTERED  ·  REAL-TIME  ·  dB SCALE");this.spectrumCanvas=this.makeCanvas2D(d,938,130),this.container.appendChild(d),this.updateFilterInfo()}makePanel(t){const e=document.createElement("div");e.style.cssText=`
      background:var(--bg-screen);border:1px solid #000;border-radius:6px;
      overflow:hidden;position:relative;
      background-image:linear-gradient(rgba(18,16,16,0) 50%,rgba(0,0,0,0.22) 50%);
      background-size:100% 4px;`;const n=document.createElement("div");return n.style.cssText="position:absolute;top:5px;left:9px;font-size:7px;font-weight:700;letter-spacing:.1em;color:var(--color-text-dim);text-transform:uppercase;z-index:2;pointer-events:none;",n.textContent=t,e.appendChild(n),e}makeCanvas2D(t,e,n){const s=window.devicePixelRatio||1,i=document.createElement("canvas");return i.width=e*s,i.height=n*s,i.style.width=e+"px",i.style.height=n+"px",i.style.display="block",i.getContext("2d").scale(s,s),t.appendChild(i),i}resizeCanvas2D(t,e,n){const s=window.devicePixelRatio||1,i=Math.max(120,Math.floor(e)),a=Math.max(80,Math.floor(n));t.width=i*s,t.height=a*s,t.style.width=`${i}px`,t.style.height=`${a}px`;const o=t.getContext("2d");o.setTransform(1,0,0,1,0,0),o.scale(s,s)}resizeCanvasWebGL(t,e,n){const s=Math.min(window.devicePixelRatio||1,2),i=Math.max(120,Math.floor(e)),a=Math.max(80,Math.floor(n));t.width=i*s,t.height=a*s,t.style.width=`${i}px`,t.style.height=`${a}px`}resizeLayout(){var o,l;const t=Math.max(760,this.container.clientWidth-2),e=8,n=Math.max(320,Math.floor(t*.44)),s=Math.max(360,t-n-e),i=((o=this.planeCanvas.parentElement)==null?void 0:o.clientWidth)??n,a=((l=this.surfaceCanvas.parentElement)==null?void 0:l.clientWidth)??s;if(this.resizeCanvas2D(this.planeCanvas,i,370),this.resizeCanvasWebGL(this.surfaceCanvas,a,370),this.resizeCanvas2D(this.responseCanvas,t,120),this.resizeCanvas2D(this.spectrumCanvas,t,130),this.waveformTimeline.resize(Math.max(360,t-60),86),this.threeRenderer&&this.threeCamera){const c=Math.min(window.devicePixelRatio||1,2),h=this.surfaceCanvas.width/c,u=this.surfaceCanvas.height/c;this.threeRenderer.setSize(h,u,!1),this.threeRenderer.setPixelRatio(c),this.threeCamera.aspect=h/u,this.threeCamera.updateProjectionMatrix()}}makeCanvasWebGL(t,e,n){const s=Math.min(window.devicePixelRatio||1,2),i=document.createElement("canvas");return i.width=e*s,i.height=n*s,i.style.width=e+"px",i.style.height=n+"px",i.style.display="block",i.style.cursor="grab",t.appendChild(i),i}setupPlaneInteraction(){const t=this.planeCanvas,e=(a,o)=>Math.max(40,Math.min(a,o)/2-24),n=a=>{const o=t.getBoundingClientRect(),l=window.devicePixelRatio||1,c=t.width/l,h=t.height/l,u=e(c,h);return{re:(a.clientX-o.left-c/2)/u,im:-(a.clientY-o.top-h/2)/u}},s=(a,o,l=.13)=>{let c=-1,h=l;return o.forEach((u,f)=>{const d=qt.abs(qt.sub(u,a));d<h&&(h=d,c=f)}),c},i=(a,o)=>{const l=a[o];return a.filter((c,h)=>h!==o&&!(Math.abs(c.re-l.re)<.02&&Math.abs(Math.abs(c.im)-Math.abs(l.im))<.02))};t.oncontextmenu=a=>a.preventDefault(),t.onmousedown=a=>{a.preventDefault();const o=n(a),l=s(o,this.poles),c=s(o,this.zeros);if(l>=0){const h=this.poles[l],u=Math.abs(h.im)>.04?this.poles.findIndex((f,d)=>d!==l&&Math.abs(f.re-h.re)<.03&&Math.abs(f.im+h.im)<.03):-1;this.dragging={type:"pole",idx:l,conjIdx:u,origIm:h.im};return}if(c>=0){const h=this.zeros[c],u=Math.abs(h.im)>.04?this.zeros.findIndex((f,d)=>d!==c&&Math.abs(f.re-h.re)<.03&&Math.abs(f.im+h.im)<.03):-1;this.dragging={type:"zero",idx:c,conjIdx:u,origIm:h.im};return}a.button===2?(this.poles.push({re:o.re,im:o.im}),Math.abs(o.im)>.04&&this.poles.push({re:o.re,im:-o.im})):(this.zeros.push({re:o.re,im:o.im}),Math.abs(o.im)>.04&&this.zeros.push({re:o.re,im:-o.im})),this.onFilterChanged()},t.ondblclick=a=>{const o=n(a),l=.16,c=this.poles.findIndex(u=>qt.abs(qt.sub(u,o))<l);if(c>=0){this.poles=i(this.poles,c),this.onFilterChanged();return}const h=this.zeros.findIndex(u=>qt.abs(qt.sub(u,o))<l);h>=0&&(this.zeros=i(this.zeros,h),this.onFilterChanged())},t.onmousemove=a=>{if(!this.dragging)return;const o=n(a),{type:l,idx:c,conjIdx:h,origIm:u}=this.dragging,f=l==="pole"?this.poles:this.zeros;if(h>=0&&h<f.length){const _=(Math.sign(u)||1)>0?Math.max(o.im,.04):Math.min(o.im,-.04);f[c]={re:o.re,im:_},f[h]={re:o.re,im:-_}}else f[c]={re:o.re,im:o.im};this.onFilterChanged()},t.onmouseup=()=>{this.dragging=null},t.onmouseleave=()=>{this.dragging=null}}onFilterChanged(){this.useThreeJS&&this.updateThreeSurface(),this.updateFilterInfo(),this.updateLiveFilter()}updateFilterInfo(){const t=this.poles.every(s=>qt.abs(s)<1),e=this.computeMag({re:1,im:0}),n=this.computeMag({re:-1,im:0});this.filterInfoEl.innerHTML=`
      Poles: <span style="color:#ff869a">${this.poles.length}</span> &nbsp;|&nbsp;
      Zeros: <span style="color:#52cffe">${this.zeros.length}</span> &nbsp;|&nbsp;
      Order: ${Math.max(this.poles.length,this.zeros.length)}<br>
      Stability: <span style="color:${t?"#52cffe":"#ff5555"}">${t?"✓ STABLE":"✗ UNSTABLE — poles outside unit circle!"}</span><br>
      DC Gain: ${isFinite(e)?e.toFixed(4):"∞"} &nbsp;|&nbsp;
      Nyquist: ${isFinite(n)?n.toFixed(4):"∞"}`}updateLiveFilter(){var a;const{b:t,a:e}=this.getCoeffs();let n=1e-6;const s=512;for(let o=0;o<s;o++){const l=Math.PI*o/(s-1),c=this.computeMag({re:Math.cos(l),im:Math.sin(l)});isFinite(c)&&c>n&&(n=c)}const i=t.map(o=>o/n);(a=this.dspNode)==null||a.port.postMessage({type:"setIIR",b:i,a:e})}async handleUpload(t){var s;const e=t.target,n=(s=e.files)==null?void 0:s[0];if(n){this.statusEl.textContent="Decoding…";try{this.audioCtx||(this.audioCtx=await this.sharedAudio.getContext()),this.originalBuffer=await this.sharedAudio.decodeAudioData(await n.arrayBuffer()),this.sampleRate=this.originalBuffer.sampleRate;const i=this.originalBuffer.getChannelData(0),a=4096,o=Math.floor(i.length/2);this.origSpectrumStatic=this.computeFFT(i.slice(o,o+a),a),this.waveformTimeline.setWaveformFromBuffer(this.originalBuffer),this.waveformTimeline.setPlayhead(0),this.pausedAt=0,this.statusEl.textContent=`✓ ${n.name}  (${this.originalBuffer.duration.toFixed(1)}s)  —  drag poles/zeros to hear filter live`,this.playOrigBtn.disabled=!1,this.playFiltBtn.disabled=!1,this.stopBtn.disabled=!1}catch{this.statusEl.textContent="✗ Error loading audio"}e.value=""}}computeFFT(t,e){const n=new Float64Array(e),s=new Float64Array(e);for(let l=0;l<e&&l<t.length;l++){const c=.5*(1-Math.cos(2*Math.PI*l/(e-1)));n[l]=t[l]*c}const i=e;let a=0;for(let l=1;l<i;l++){let c=i>>1;for(;a&c;c>>=1)a^=c;a^=c,l<a&&([n[l],n[a]]=[n[a],n[l]],[s[l],s[a]]=[s[a],s[l]])}for(let l=2;l<=i;l<<=1){const c=Math.cos(-2*Math.PI/l),h=Math.sin(-2*Math.PI/l);for(let u=0;u<i;u+=l){let f=1,d=0;for(let g=0;g<l/2;g++){const _=n[u+g],m=s[u+g],p=n[u+g+l/2]*f-s[u+g+l/2]*d,S=n[u+g+l/2]*d+s[u+g+l/2]*f;n[u+g]=_+p,s[u+g]=m+S,n[u+g+l/2]=_-p,s[u+g+l/2]=m-S;const y=f*c-d*h;d=f*h+d*c,f=y}}}const o=new Float32Array(e/2);for(let l=0;l<e/2;l++)o[l]=Math.sqrt(n[l]*n[l]+s[l]*s[l])/e;return o}async startPlayback(t){this.stopAudio(),this.originalBuffer&&this.audioCtx&&(this.playMode=t,this.updateLiveFilter(),this.analyserNode=this.audioCtx.createAnalyser(),this.analyserNode.fftSize=4096,this.analyserNode.smoothingTimeConstant=.72,this.analyserData=new Float32Array(this.analyserNode.frequencyBinCount),this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=.85,this.sourceNode=this.audioCtx.createBufferSource(),this.sourceNode.buffer=this.originalBuffer,this.sourceNode.loop=!1,t==="original"?(this.sourceNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)):(this.dspNode=await this.sharedAudio.createDspNode({numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[Math.min(this.originalBuffer.numberOfChannels,2)]}),this.dspNode.port.postMessage({type:"setMode",mode:"iir"}),this.sourceNode.connect(this.dspNode),this.dspNode.connect(this.analyserNode),this.analyserNode.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination),this.updateLiveFilter()),this.playbackStartedAt=this.audioCtx.currentTime-this.pausedAt,this.sourceNode.start(0,this.pausedAt),this.sourceNode.onended=()=>{if(!this.originalBuffer||!this.audioCtx||!this.isPlaying)return;this.audioCtx.currentTime-this.playbackStartedAt>=this.originalBuffer.duration-.03&&this.stopAudio(!0)},this.isPlaying=!0,this.playOrigBtn.className="vst-button"+(t==="original"?" active":""),this.playFiltBtn.className="vst-button"+(t==="filtered"?" active":""),this.statusEl.textContent=t==="filtered"?"▶ Playing filtered — drag poles/zeros to hear changes live":"▶ Playing original (bypassing filter)")}stopAudio(t=!1){var e,n,s,i,a;try{(e=this.sourceNode)==null||e.stop()}catch{}(n=this.sourceNode)==null||n.disconnect(),(s=this.dspNode)==null||s.disconnect(),(i=this.gainNode)==null||i.disconnect(),(a=this.analyserNode)==null||a.disconnect(),this.sourceNode=null,this.dspNode=null,this.gainNode=null,this.analyserNode=null,this.isPlaying=!1,t&&(this.pausedAt=0),this.waveformTimeline.setPlayhead(this.pausedAt),this.playOrigBtn.className="vst-button",this.playFiltBtn.className="vst-button active",this.originalBuffer&&(this.statusEl.textContent="Stopped")}handlePlayheadSeek(t){!this.originalBuffer||!this.audioCtx||(this.pausedAt=Math.max(0,Math.min(this.originalBuffer.duration,t)),this.waveformTimeline.setPlayhead(this.pausedAt),this.isPlaying&&(this.stopAudio(!1),this.startPlayback(this.playMode)))}drawZPlane(){const t=this.planeCanvas,e=window.devicePixelRatio||1,n=t.width/e,s=t.height/e,i=t.getContext("2d"),a=n/2,o=s/2,l=Math.max(40,Math.min(n,s)/2-24);i.fillStyle="#06070b",i.fillRect(0,0,n,s),i.strokeStyle="rgba(255,255,255,0.03)",i.lineWidth=1;for(let h=-1.5;h<=1.5;h+=.5)i.beginPath(),i.moveTo(a+h*l,0),i.lineTo(a+h*l,s),i.stroke(),i.beginPath(),i.moveTo(0,o-h*l),i.lineTo(n,o-h*l),i.stroke();i.strokeStyle="rgba(255,255,255,0.08)",i.lineWidth=1,i.beginPath(),i.moveTo(0,o),i.lineTo(n,o),i.stroke(),i.beginPath(),i.moveTo(a,0),i.lineTo(a,s),i.stroke(),i.beginPath(),i.arc(a,o,l,0,2*Math.PI),i.fillStyle="rgba(82,207,254,0.03)",i.fill();for(let h=0;h<2;h++)i.beginPath(),i.arc(a,o,l,0,2*Math.PI),i.strokeStyle=h===0?"rgba(82,207,254,0.08)":"rgba(82,207,254,0.55)",i.lineWidth=h===0?10:1.5,i.stroke();i.font="8.5px JetBrains Mono",i.fillStyle="rgba(255,255,255,0.16)",i.textAlign="center",i.fillText("DC",a+l+20,o+4),i.fillText("π",a-l-15,o+4),i.fillText("π/2",a+3,o-l-8),i.textAlign="left",i.fillText("Re",n-14,o-4),i.textAlign="right",i.fillText("Im",a-4,10),this.zeros.forEach(h=>{const u=a+h.re*l,f=o-h.im*l;i.beginPath(),i.arc(u,f,7.5,0,2*Math.PI),i.strokeStyle="#52cffe",i.lineWidth=2.5,i.shadowColor="rgba(82,207,254,0.7)",i.shadowBlur=10,i.stroke(),i.shadowBlur=0}),this.poles.forEach(h=>{const u=a+h.re*l,f=o-h.im*l;qt.abs(h)>=1&&(i.beginPath(),i.arc(u,f,14,0,2*Math.PI),i.strokeStyle="rgba(255,85,85,0.4)",i.lineWidth=2,i.stroke());const d=8;i.strokeStyle="#ff869a",i.lineWidth=2.5,i.shadowColor="rgba(255,134,154,0.7)",i.shadowBlur=10,i.beginPath(),i.moveTo(u-d,f-d),i.lineTo(u+d,f+d),i.moveTo(u+d,f-d),i.lineTo(u-d,f+d),i.stroke(),i.shadowBlur=0}),i.fillStyle="rgba(0,0,0,0.6)",i.fillRect(0,0,n,22),i.font="8px JetBrains Mono",i.fillStyle="rgba(255,255,255,0.26)",i.textAlign="left",i.fillText(`Poles: ${this.poles.length}  Zeros: ${this.zeros.length}  |  dbl-click to remove`,8,14),i.textAlign="right",i.fillStyle="#52cffe";const c=this.computeMag({re:1,im:0});i.fillText(`DC gain: ${isFinite(c)?c.toFixed(3):"∞"}`,n-8,14)}drawResponse(){const t=this.responseCanvas,e=window.devicePixelRatio||1,n=t.width/e,s=t.height/e,i=t.getContext("2d"),a=800,o={l:44,r:14,t:22,b:24},l=n-o.l-o.r,c=s-o.t-o.b;i.fillStyle="#04050a",i.fillRect(0,0,n,s);const h=new Float32Array(a);let u=.1;for(let d=0;d<a;d++){const g=Math.PI*d/(a-1),_=this.computeMag({re:Math.cos(g),im:Math.sin(g)});h[d]=isFinite(_)?Math.min(_,16):16,h[d]>u&&h[d]<16&&(u=h[d])}const f=Math.max(u*1.15,1.05);for(let d=0;d<a;d+=4){const g=o.l+d/(a-1)*l,_=o.t+c-h[d]/f*c,m=h[d]/f,[p,S,y]=bi(m),b=i.createLinearGradient(0,_,0,o.t+c);b.addColorStop(0,`rgba(${p},${S},${y},0.55)`),b.addColorStop(1,`rgba(${p},${S},${y},0.0)`),i.fillStyle=b,i.fillRect(g-1.5,_,3,o.t+c-_)}i.strokeStyle="rgba(255,255,255,0.04)",i.lineWidth=1;for(let d=0;d<=4;d++){const g=o.t+c-d/4*c;i.beginPath(),i.moveTo(o.l,g),i.lineTo(o.l+l,g),i.stroke(),i.fillStyle="rgba(255,255,255,0.18)",i.font="8px JetBrains Mono",i.textAlign="right",i.fillText((d/4*f).toFixed(1),o.l-4,g+3)}i.strokeStyle="rgba(255,255,255,0.08)",i.lineWidth=1,i.beginPath(),i.moveTo(o.l,o.t+c),i.lineTo(o.l+l,o.t+c),i.stroke(),[...this.poles.map(d=>({angle:Math.atan2(d.im,d.re),type:"pole"})),...this.zeros.map(d=>({angle:Math.atan2(d.im,d.re),type:"zero"}))].forEach(({angle:d,type:g})=>{const _=(d%Math.PI+Math.PI)%Math.PI,m=o.l+_/Math.PI*l;i.strokeStyle=g==="pole"?"rgba(255,134,154,0.4)":"rgba(82,207,254,0.4)",i.lineWidth=1,i.setLineDash([3,4]),i.beginPath(),i.moveTo(m,o.t),i.lineTo(m,o.t+c),i.stroke(),i.setLineDash([]),i.font="7px JetBrains Mono",i.fillStyle=g==="pole"?"rgba(255,134,154,0.55)":"rgba(82,207,254,0.55)",i.textAlign="center",i.fillText(g==="pole"?"×":"○",m,o.t+c+11)}),i.beginPath();for(let d=0;d<a;d++){const g=o.l+d/(a-1)*l,_=o.t+c-h[d]/f*c;d===0?i.moveTo(g,_):i.lineTo(g,_)}i.strokeStyle="rgba(255,255,255,0.9)",i.lineWidth=2,i.shadowColor="rgba(255,255,255,0.6)",i.shadowBlur=8,i.stroke(),i.shadowBlur=0,i.fillStyle="rgba(255,255,255,0.18)",i.font="8px JetBrains Mono",i.textAlign="center",["DC (0)","π/4","π/2","3π/4","Nyquist (π)"].forEach((d,g)=>{i.fillText(d,o.l+g/4*l,s-6)}),i.save(),i.translate(11,o.t+c/2),i.rotate(-Math.PI/2),i.fillStyle="rgba(255,255,255,0.18)",i.font="8px JetBrains Mono",i.textAlign="center",i.fillText("|H|",0,0),i.restore()}drawSpectrum(){const t=this.spectrumCanvas,e=window.devicePixelRatio||1,n=t.width/e,s=t.height/e,i=t.getContext("2d"),a={l:38,r:14,t:18,b:18},o=n-a.l-a.r,l=s-a.t-a.b;i.fillStyle="#04050a",i.fillRect(0,0,n,s),!!(this.origSpectrumStatic||this.analyserNode)||(i.fillStyle="rgba(255,255,255,0.07)",i.font="10px JetBrains Mono",i.textAlign="center",i.fillText("Upload audio to see spectrum",n/2,s/2+4)),i.strokeStyle="rgba(255,255,255,0.04)",i.lineWidth=1,[-80,-60,-40,-20,0].forEach(f=>{const d=a.t+l-(f+80)/80*l;i.beginPath(),i.moveTo(a.l,d),i.lineTo(a.l+o,d),i.stroke(),i.fillStyle="rgba(255,255,255,0.18)",i.font="8px JetBrains Mono",i.textAlign="right",i.fillText(`${f}`,a.l-4,d+3)});const h=(f,d,g,_,m)=>{i.beginPath(),i.moveTo(a.l,a.t+l);for(let y=1;y<d;y++){const b=g?f[y]:20*Math.log10(Math.max(f[y],1e-9)),C=Math.log10(1+y/d*9)/Math.log10(10),T=a.l+C*o,w=a.t+l-Math.max(0,Math.min(1,(b- -80)/80))*l;i.lineTo(T,w)}i.lineTo(a.l+o,a.t+l),i.closePath(),i.fillStyle=`rgba(${_},${m})`,i.fill()};this.origSpectrumStatic&&h(this.origSpectrumStatic,this.origSpectrumStatic.length,!1,"200,200,200",.22),this.analyserNode&&this.analyserData&&(this.analyserNode.getFloatFrequencyData(this.analyserData),h(this.analyserData,this.analyserData.length,!0,"82,207,254",.65)),i.fillStyle="rgba(255,255,255,0.18)",i.font="8px JetBrains Mono",i.textAlign="center";const u=this.sampleRate/2;[.02,.1,.25,.5,1].forEach(f=>{const d=Math.log10(1+f*9)/Math.log10(10),g=f*u;i.fillText(g>=1e3?`${(g/1e3).toFixed(0)}k`:`${g.toFixed(0)}`,a.l+d*o,s-4)}),this.analyserNode&&(i.fillStyle="rgba(82,207,254,0.8)",i.font="bold 8px JetBrains Mono",i.textAlign="right",i.fillText("● LIVE",n-a.r-2,a.t+22));{let _=1e-6;for(let p=0;p<512;p++){const S=Math.PI*p/511,y=this.computeMag({re:Math.cos(S),im:Math.sin(S)});isFinite(y)&&y>_&&(_=y)}i.beginPath();let m=!1;for(let p=1;p<512;p++){const S=p/512,y=S*Math.PI,b=this.computeMag({re:Math.cos(y),im:Math.sin(y)});if(!isFinite(b)){m=!1;continue}const C=20*Math.log10(Math.max(b/_,1e-9)),T=Math.max(0,Math.min(1,(C- -80)/80)),w=Math.log10(1+S*9)/Math.log10(10),F=a.l+w*o,E=a.t+l-T*l;m?i.lineTo(F,E):(i.moveTo(F,E),m=!0)}i.strokeStyle="rgba(255,220,80,0.9)",i.lineWidth=1.5,i.shadowColor="rgba(255,200,60,0.6)",i.shadowBlur=6,i.stroke(),i.shadowBlur=0,i.fillStyle="rgba(255,220,80,0.85)",i.font="bold 8px JetBrains Mono",i.textAlign="right",i.fillText("— |H(ω)| normalized",n-a.r-2,a.t+12)}}draw3DFallback(){const t=this.surfaceCanvas,e=window.devicePixelRatio||1,n=t.width/e,s=t.height/e,i=t.getContext("webgl")||t.getContext("2d");if(!i||i.drawImage===void 0)return;const a=t.getContext("2d"),o=44,l=1.75,c=this.rotAngle2D,h=.47,u=Math.cos(c),f=Math.sin(c),d=Math.cos(h),g=Math.sin(h),_=220,m=5.2,p=3.8;a.fillStyle="#04050a",a.fillRect(0,0,n,s);const S=[];for(let C=0;C<=o;C++){S[C]=[];for(let T=0;T<=o;T++){const w=-l+2*l*C/o,F=-l+2*l*T/o,E=this.computeMag({re:w,im:F}),M=Math.atan(isFinite(E)?E/2:50)/(Math.PI/2)*p*.32,P=w*u+F*f,H=-w*f+F*u,k=M*d-H*g,X=M*g+H*d+m;S[C][T]={sx:P/X*_+n/2,sy:-k/X*_+s*.6,depth:X,h:M}}}const y=[];for(let C=0;C<o;C++)for(let T=0;T<o;T++){const w=(S[C][T].depth+S[C+1][T].depth+S[C][T+1].depth+S[C+1][T+1].depth)/4,F=(S[C][T].h+S[C+1][T].h+S[C][T+1].h+S[C+1][T+1].h)/4;y.push({i:C,j:T,d:w,aH:F})}y.sort((C,T)=>T.d-C.d);const b=p*.32;for(const{i:C,j:T,aH:w}of y){a.beginPath(),a.moveTo(S[C][T].sx,S[C][T].sy),a.lineTo(S[C+1][T].sx,S[C+1][T].sy),a.lineTo(S[C+1][T+1].sx,S[C+1][T+1].sy),a.lineTo(S[C][T+1].sx,S[C][T+1].sy),a.closePath();const[F,E,M]=bi(w/b);a.fillStyle=`rgb(${F},${E},${M})`,a.fill(),a.strokeStyle="rgba(0,0,0,0.2)",a.lineWidth=.3,a.stroke()}a.beginPath();for(let C=0;C<=200;C++){const T=2*Math.PI*C/200,w=Math.cos(T),F=Math.sin(T),E=this.computeMag({re:w,im:F}),M=Math.atan(isFinite(E)?E/2:50)/(Math.PI/2)*p*.32,P=w*u+F*f,H=-w*f+F*u,k=M*d-H*g,X=M*g+H*d+m,V=P/X*_+n/2,$=-k/X*_+s*.6;C===0?a.moveTo(V,$):a.lineTo(V,$)}a.strokeStyle="rgba(255,255,255,0.9)",a.lineWidth=2,a.shadowColor="rgba(255,255,255,1)",a.shadowBlur=12,a.stroke(),a.shadowBlur=0}startAnimation(){let t=0;const e=n=>{var i;const s=Math.min((n-t)/1e3,.05);t=n,this.rotAngle2D=(this.rotAngle2D+s*.2)%(2*Math.PI),this.useThreeJS&&this.threeRenderer&&this.threeScene&&this.threeCamera?(this.updateSpectrumBars3D(),(i=this.threeControls)==null||i.update(),this.threeRenderer.render(this.threeScene,this.threeCamera)):this.draw3DFallback(),this.isPlaying&&this.audioCtx&&this.originalBuffer&&(this.pausedAt=Math.min(this.audioCtx.currentTime-this.playbackStartedAt,this.originalBuffer.duration),this.waveformTimeline.setPlayhead(this.pausedAt)),this.drawZPlane(),this.drawResponse(),this.drawSpectrum(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}destroy(){var t,e;this.animId!==null&&cancelAnimationFrame(this.animId),this.stopAudio(),this.audioCtx=null,(t=this.threeControls)==null||t.dispose(),(e=this.threeRenderer)==null||e.dispose(),document.body.style.overflowY="",window.removeEventListener("resize",this.onResize)}}class ls{constructor(t,e){D(this,"root");D(this,"content");this.root=document.createElement("div"),this.root.className="demo-shell";const n=document.createElement("div");n.className="demo-shell-toolbar";const s=document.createElement("button");s.className="back-button",s.textContent="← Back",s.onclick=e;const i=document.createElement("div");i.className="demo-shell-title",i.textContent=t,n.append(s,i),this.content=document.createElement("div"),this.content.className="demo-shell-content",this.root.append(n,this.content)}getElement(){return this.root}getContentElement(){return this.content}}let oe=null;document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("app"),t=new il;t.register("/",()=>({mount:()=>{new sl(r,t).mount()},unmount:()=>{r.innerHTML=""}})),t.register("/aliasing-sine",()=>({mount:()=>{r.innerHTML="";const e=new ls("Sine Wave Aliasing",()=>t.navigate("/")),n=document.createElement("div");n.id="sine-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),oe=new rl("sine-container")},unmount:()=>{oe&&"destroy"in oe&&oe.destroy(),oe=null,r.innerHTML=""}})),t.register("/aliasing-audio",()=>({mount:()=>{r.innerHTML="";const e=new ls("Audio Aliasing",()=>t.navigate("/")),n=document.createElement("div");n.id="audio-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),oe=new ur("audio-container")},unmount:()=>{oe&&"destroy"in oe&&oe.destroy(),oe=null,r.innerHTML=""}})),t.register("/z-transform",()=>({mount:()=>{r.innerHTML="";const e=new ls("Z-Transform Explorer",()=>t.navigate("/")),n=document.createElement("div");n.id="ztransform-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),oe=new ll("ztransform-container")},unmount:()=>{oe&&"destroy"in oe&&oe.destroy(),oe=null,r.innerHTML=""}})),t.register("/pole-zero",()=>({mount:()=>{r.innerHTML="";const e=new ls("Pole-Zero Designer",()=>t.navigate("/")),n=document.createElement("div");n.id="polezero-container",e.getContentElement().appendChild(n),r.appendChild(e.getElement()),oe=new Hp("polezero-container")},unmount:()=>{oe&&"destroy"in oe&&oe.destroy(),oe=null,r.innerHTML=""}})),t.start()});
