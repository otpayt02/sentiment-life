// Sentiment Life — continuity morph / memory aperture v0.3
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const categories = document.getElementById('categories');
  const atlas = document.getElementById('atlas');
  if (!categories || !atlas || document.querySelector('.story-bridge')) return;

  const bridge = document.createElement('section');
  bridge.className = 'story-bridge';
  bridge.setAttribute('aria-label','Memory transition');
  bridge.innerHTML = `
    <div class="story-bridge__sticky">
      <div class="story-bridge__veil"></div>
      <div class="story-bridge__threads" aria-hidden="true"></div>
      <div class="memory-aperture" aria-hidden="true">
        <div class="memory-aperture__core"></div>
        <div class="memory-figure">
          <svg viewBox="0 0 400 520" role="presentation" aria-hidden="true">
            <path class="portrait-fill" d="M217 43c-55 0-104 35-126 86-17 39-14 84-5 124 8 38 15 67-2 105-7 16-17 32-18 51 23 5 46 1 67-9 10 34 35 65 72 76 38 12 84 2 111-27 28-30 37-74 27-113-7-27-24-49-30-76-5-23 1-48-3-71-10-84-54-146-93-146Z"/>
            <path class="portrait-detail" d="M126 212c28-31 71-45 112-38 26 5 48 18 67 36M143 254c21 8 45 9 66 1M231 254c18-4 35-2 52 5M209 284c-4 28-5 53 12 72M182 383c30 15 66 14 94-4"/>
            <path class="portrait-detail" d="M95 168c23-60 75-98 137-99 35 0 67 10 91 35M116 415c49 31 126 37 180-6"/>
            <circle class="memory-node" cx="128" cy="212" r="3"/><circle class="memory-node" cx="276" cy="212" r="3"/><circle class="memory-node" cx="214" cy="356" r="3"/><circle class="memory-node" cx="298" cy="402" r="3"/><circle class="memory-node" cx="118" cy="401" r="3"/>
          </svg>
        </div>
      </div>
      <div class="memory-aperture__swallow" aria-hidden="true"></div>
      <div class="story-bridge__copy">
        <p class="bridge-line" data-scene="0"><small>Pattern becomes evidence</small>Your questions became a <em>map.</em></p>
        <p class="bridge-line" data-scene="1"><small>Evidence becomes continuity</small>The map became <em>memory.</em></p>
        <p class="bridge-line" data-scene="2"><small>Memory becomes identity</small>Then the record started looking <em>back.</em></p>
        <p class="bridge-line" data-scene="3"><small>The archive opens</small>Nothing disappears. It becomes <em>context.</em></p>
      </div>
      <div class="atlas-portal-label">CHAT<br>ATLAS<span>enter the evidence</span></div>
      <div class="bridge-index">Continuity study · 01</div>
      <div class="bridge-kicker">Scroll · bars → threads → memory → archive</div>
    </div>`;
  atlas.parentNode.insertBefore(bridge, atlas);

  const threadsHost = bridge.querySelector('.story-bridge__threads');
  const barSpans = [...document.querySelectorAll('#categoryBars .bar > span')];
  const barRows = [...document.querySelectorAll('#categoryBars .bar-row')];
  const count = Math.max(9, Math.min(18, barSpans.length || 12));
  for (let i=0;i<count;i++) {
    const t=document.createElement('i'); t.className='story-thread';
    const angle=(-165 + (330/(Math.max(1,count-1)))*i);
    const width=18 + ((i*37)%21);
    t.style.setProperty('--thread-angle', angle+'deg');
    t.style.setProperty('--thread-w', width+'vw');
    t.dataset.angle=angle;
    t.dataset.index=i;
    threadsHost.appendChild(t);
  }
  const threads=[...threadsHost.children];
  const lines=[...bridge.querySelectorAll('.bridge-line')];
  const aperture=bridge.querySelector('.memory-aperture');
  const swallow=bridge.querySelector('.memory-aperture__swallow');
  const atlasLabel=bridge.querySelector('.atlas-portal-label');
  const atlasShell=atlas.querySelector('.shell');
  const sticky=bridge.querySelector('.story-bridge__sticky');

  const clamp=(n,a=0,b=1)=>Math.max(a,Math.min(b,n));
  const smoother=t=>{t=clamp(t);return t*t*t*(t*(t*6-15)+10)};
  const range=(p,a,b)=>clamp((p-a)/(b-a));

  sticky.addEventListener('pointermove',e=>{
    const r=sticky.getBoundingClientRect();
    sticky.style.setProperty('--pointer-nx',(((e.clientX-r.left)/r.width)-.5).toFixed(3));
    sticky.style.setProperty('--pointer-ny',(((e.clientY-r.top)/r.height)-.5).toFixed(3));
  },{passive:true});

  let visual=0,lastRaw=0,velocity=0;
  function render(){
    const cr=categories.getBoundingClientRect();
    const catTravel=Math.max(1,cr.height-innerHeight);
    const catRaw=clamp(-cr.top/catTravel);
    const collapse=smoother(range(catRaw,.48,.98));
    categories.style.setProperty('--morph-energy',collapse.toFixed(3));

    barRows.forEach((row,i)=>{
      const track=row.querySelector('.bar');
      const label=row.children[0], value=row.children[row.children.length-1];
      if(!track)return;
      const rr=track.getBoundingClientRect();
      const targetY=innerHeight*.50 + (i-(barRows.length-1)/2)*4;
      const dx=(innerWidth*.50)-(rr.left+rr.width*.5);
      const dy=targetY-(rr.top+rr.height*.5);
      const twist=((i%2?1:-1)*(i+1)*1.15)*collapse;
      track.style.transform=`translate3d(${dx*collapse}px,${dy*collapse}px,0) rotate(${twist}deg) scaleX(${1-collapse*.52})`;
      track.style.filter=`blur(${collapse*.25}px)`;
      if(label){label.style.opacity=String(1-collapse*1.15);label.style.transform=`translate3d(${-collapse*18}px,0,0)`}
      if(value){value.style.opacity=String(1-collapse*1.15);value.style.transform=`translate3d(${collapse*18}px,0,0)`}
    });

    const br=bridge.getBoundingClientRect();
    const travel=Math.max(1,br.height-innerHeight);
    const raw=clamp(-br.top/travel);
    visual += (raw-visual)*(reduce?1:.085);
    velocity += ((raw-lastRaw)-velocity)*.13; lastRaw=raw;
    const p=visual;
    bridge.style.setProperty('--bridge-p',p.toFixed(5));
    bridge.style.setProperty('--bridge-v',velocity.toFixed(5));

    const dive=smoother(range(p,.02,.43));
    const release=smoother(range(p,.62,.93));
    threads.forEach((t,i)=>{
      const base=Number(t.dataset.angle)||0;
      const wobble=Math.sin(p*8+i*.77)*5*(1-dive);
      const rot=base*(1-dive) + (i%2?1:-1)*16*dive + wobble;
      const out=release*(18+(i%5)*9);
      const tx=Math.cos((base*Math.PI)/180)*out;
      const ty=Math.sin((base*Math.PI)/180)*out;
      const scale=(1-dive) + dive*.28 + release*.9;
      t.style.transform=`translate3d(${tx}vw,${ty}vh,0) rotate(${rot}deg) scaleX(${scale})`;
      t.style.opacity=String(clamp((1-release*.92)*(.42+.58*Math.sin((i+1)*.9)**2)));
      t.style.filter=`blur(${dive*.4+release*.8}px)`;
    });

    const apIn=smoother(range(p,.03,.34));
    const apOut=smoother(range(p,.58,.88));
    aperture.style.setProperty('--ap-scale',(.62 + apIn*.38 + apOut*1.65).toFixed(3));
    aperture.style.setProperty('--ap-rot',`${(p*18 + velocity*240).toFixed(2)}deg`);
    aperture.style.opacity=String(clamp(.22+apIn*.78-apOut*.42));

    const swallowP=smoother(range(p,.40,.62));
    const reopen=smoother(range(p,.62,.78));
    swallow.style.setProperty('--swallow-scale',Math.max(.01,.01 + swallowP*16 - reopen*14.2).toFixed(3));

    const sceneWindows=[[.02,.24],[.22,.43],[.44,.64],[.63,.82]];
    lines.forEach((line,i)=>{
      const [a,b]=sceneWindows[i];
      const enter=smoother(range(p,a,a+.07));
      const exit=smoother(range(p,b-.07,b));
      const vis=clamp(enter-exit);
      const suck=smoother(range(p,b-.09,b));
      line.style.opacity=String(vis);
      line.style.transform=`translate3d(${(i%2?1:-1)*(1-enter)*26}px,${(1-enter)*54-suck*18}px,0) scale(${.92+enter*.08-suck*.28})`;
      line.style.filter=`blur(${(1-enter)*10+suck*5}px)`;
      line.style.clipPath=`circle(${Math.max(0,120-suck*118)}% at 50% 50%)`;
    });

    const atlasIn=smoother(range(p,.73,.95));
    atlasLabel.style.setProperty('--atlas-opacity',atlasIn.toFixed(3));
    atlasLabel.style.setProperty('--atlas-scale',(.45+atlasIn*.55).toFixed(3));

    if(atlasShell){
      const ar=atlas.getBoundingClientRect();
      const a=clamp((innerHeight*.88-ar.top)/(innerHeight*.72));
      atlasShell.style.transform=`translate3d(0,${(1-a)*92}px,0) scale(${.96+a*.04})`;
      atlasShell.style.opacity=String(.18+a*.82);
      atlasShell.style.filter=`blur(${(1-a)*5}px)`;
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();
