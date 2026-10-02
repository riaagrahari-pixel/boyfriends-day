(()=>{
const C=SITE_CONFIG,D=document,$=(s,r=D)=>r.querySelector(s),$$=(s,r=D)=>[...r.querySelectorAll(s)];
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const T=s=>String(s??"").replace(/\[BOYFRIEND_NAME\]/g,C.boyfriendName).replace(/\[MY_NAME\]/g,C.myName);
const E=s=>T(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const M=s=>E(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\*(.+?)\*/g,"<i>$1</i>").replace(/\n/g,"<br>");
const has=a=>Array.isArray(a)&&a.length;
/* theme + fonts */
const TH={romantic:{bg:"#fff1f4",ac:"#d6366b",ac2:"#ffc4d4",tx:"#4a1d2c",btn:"#e0507c",card:"rgba(255,255,255,.72)",hl:"#ffd9e3"},
softred:{bg:"#fdf0ee",ac:"#c0392b",ac2:"#f5b7b1",tx:"#3d1814",btn:"#c9473a",card:"rgba(255,255,255,.72)",hl:"#fadbd8"},
babyblue:{bg:"#eef6ff",ac:"#3b82c4",ac2:"#bfdcf7",tx:"#1e3350",btn:"#4a90d9",card:"rgba(255,255,255,.75)",hl:"#d6e9fb"},
lavender:{bg:"#f5f0ff",ac:"#7c5cc4",ac2:"#d4c4f5",tx:"#2f2448",btn:"#8b6bd6",card:"rgba(255,255,255,.75)",hl:"#e4d9fa"},
cream:{bg:"#fbf5ea",ac:"#a0674b",ac2:"#e9d3b8",tx:"#3e2e24",btn:"#b5785a",card:"rgba(255,255,255,.6)",hl:"#f1e1c9"},
blackred:{bg:"#120a0c",ac:"#ff4d6d",ac2:"#5a1626",tx:"#f6e7ea",btn:"#d7263d",card:"rgba(255,255,255,.08)",hl:"#3a1019"},
pastel:{bg:"#fff8fb",ac:"#e07aa8",ac2:"#c9e4ff",tx:"#44364a",btn:"#b69cf0",card:"rgba(255,255,255,.75)",hl:"#ffe9c9"}};
TH.custom={...TH.romantic,...C.customColors};
const FN={elegant:["Playfair Display","Inter","serif"],cute:["Patrick Hand","Poppins","sans"],script:["Great Vibes","Lora","serif"],minimal:["Inter","Inter","sans"]};
const f=FN[C.fonts]||FN.elegant,RS=D.documentElement.style;
Object.entries(TH[C.theme]||TH.romantic).forEach(([k,v])=>RS.setProperty("--"+k,v));
RS.setProperty("--h",`'${f[0]}',${f[2]=="serif"?"Georgia,serif":"system-ui,sans-serif"}`);
RS.setProperty("--b",`'${f[1]}',system-ui,sans-serif`);
RS.setProperty("--hand","'Caveat','Segoe Script',cursive");
const lk=D.createElement("link");lk.rel="stylesheet";lk.href="https://fonts.googleapis.com/css2?"+[...new Set([f[0],f[1],"Caveat"])].map(n=>"family="+n.replace(/ /g,"+")).join("&")+"&display=swap";D.head.append(lk);
D.title=T(C.pageTitle||"For You ❤️");
/* floating decor + confetti */
const DC=C.decor||{},CH={hearts:["❤","🩷","💗"],stars:["✦","★"],sparkles:["✨"],flowers:["🌸","🌷"],doodles:["✿","☁","~"],bubbles:["○","◯"]};
const pool=Object.keys(CH).filter(k=>DC[k]).flatMap(k=>CH[k]);
if(pool.length)for(let i=0;i<16;i++){const s=D.createElement("span");s.textContent=pool[i%pool.length];s.style.cssText=`left:${Math.random()*100}%;font-size:${12+Math.random()*16}px;animation-duration:${9+Math.random()*10}s;animation-delay:${-Math.random()*14}s`;$("#fx").append(s)}
const burst=(n=36,ch=["❤️","💖","✨","🎉","💕"])=>{if(DC.confetti===false)return;if(RM)n=Math.min(n,6);for(let i=0;i<n;i++){const s=D.createElement("span");s.className="cf";s.textContent=ch[i%ch.length];s.style.cssText=`left:${Math.random()*100}%;--dx:${(Math.random()-.5)*40}vw;--d:${2.2+Math.random()*2}s;font-size:${14+Math.random()*16}px;animation-delay:${Math.random()*.5}s`;D.body.append(s);setTimeout(()=>s.remove(),5200)}};
const modal=(h,cls="")=>{const m=D.createElement("div");m.className="md "+cls;m.innerHTML=`<div class="mc">${h}<button class="btn x2">Close</button></div>`;m.onclick=e=>{if(e.target===m||e.target.classList.contains("x2"))m.remove()};D.body.append(m)};
/* builders */
const ph=(p,cls,ratio)=>`<div class="ph ${cls}"${ratio?` style="aspect-ratio:${ratio}"`:""}><img src="${E(p.image)}" alt="${E(p.caption||"")}" loading="lazy" style="object-position:${E(p.position||"center")}" onerror="this.style.display='none'"></div>`;
const cap=p=>{const sm=[p.date,p.location].filter(Boolean).map(E).join(" · ");return p.caption||sm?`<figcaption>${p.caption?`<span>${M(p.caption)}</span>`:""}${sm?`<small>${sm}</small>`:""}</figcaption>`:""};
const fig=(p,i)=>{let sh=p.shape||"polaroid";if(sh==="polaroid"&&DC.polaroid===false)sh="rounded";return `<figure class="fig sh-${sh} fr-${p.frame||"none"} sz-${p.size||"medium"} rv" style="--r:${p.rotation??0}deg" data-i="${i}" tabindex="0" role="button" aria-label="Open photo ${i+1}">${ph(p,"s-"+(sh==="polaroid"?"rect":sh))}${cap(p)}</figure>`};
const TI=C.titles||{},H=C.hero||{},P=C.photos||[];
const S=(id,h)=>`<section id="${id}" data-label="${E((C.navLabels||{})[id]||id)}"><div class="wrap">${h}</div></section>`;
const hd=k=>`<h2 class="rv">${M(TI[k])}</h2>${TI[k+"Sub"]?`<p class="sub rv">${M(TI[k+"Sub"])}</p>`:""}`;
const B={
hero:()=>S("hero",`<p class="sub rv">${M(H.eyebrow)}</p><h1 class="rv">${M(H.greeting)}</h1><p class="sub rv">${M(H.madeFor)}</p><div id="nm" class="big" aria-label="${E(C.boyfriendName)}"></div><p class="sub rv">${M(H.subtitle)}</p><button class="btn rv" data-go>${E(H.button)}</button><br><button class="egg" id="egg" aria-label="A tiny secret">♡</button>`),
story:()=>has(C.story)&&S("story",hd("story")+`<div class="tl">${C.story.map(s=>`<div class="tli rv"><span class="dot"></span><small>${[s.date,s.location].filter(Boolean).map(E).join(" · ")}</small><h3>${M(s.title)}</h3>${s.image?ph(s,"s-rounded","16/10"):""}<p>${M(s.text)}</p></div>`).join("")}</div>`),
photos:()=>has(P)&&S("photos",hd("photos")+`<div class="wall ${C.galleryLayout==="masonry"?"masonry":""}">${P.map(fig).join("")}</div>`),
reasons:()=>has(C.reasons)&&S("reasons",hd("reasons")+`<div class="rcard card anim-${E(C.reasonAnim||"flip")}" id="rc" aria-live="polite"></div><p class="prog" id="rp"></p><button class="btn" id="rn">Next reason →</button>`),
meter:()=>S("meter",hd("meter")+`<div class="mv" id="mv" aria-live="polite">0%</div><div class="bar"><i id="mb"></i></div><p class="sub" id="mt2x"></p><p class="sub" id="mt"></p><button class="btn" id="mg">${E((C.meter||{}).button)}</button>`),
music:()=>C.music&&S("music",hd("music")+`<div class="cover">${ph({image:C.music.cover,caption:C.music.title},"s-rounded","1/1")}</div><h3>${M(C.music.title)}</h3><p class="sub">${M(C.music.artist)}</p><div class="seek"><i></i></div><button class="btn" id="pl">Play our song 🎵</button><p class="sub" id="merr"></p>`),
openWhen:()=>has(C.openWhen)&&S("openWhen",hd("openWhen")+`<div class="envs">${C.openWhen.map(o=>`<div class="env rv" role="button" tabindex="0" aria-expanded="false"><div class="front"><span>${E(o.emoji||"💌")}</span><b>${M(o.title)}</b></div><div class="note"><b>${M(o.title)}</b><p>${M(o.message)}</p></div></div>`).join("")}</div>`),
jokes:()=>has(C.insideJokes)&&S("jokes",hd("jokes")+`<div class="jks">${C.insideJokes.map(j=>`<div class="jk card rv" role="button" tabindex="0"><small>${E(j.label||"")}</small><h3>${M(j.title)}</h3><span class="tap">tap to reveal 👀</span><div class="rev">${j.image?ph(j,"s-rounded"):""}${j.reveal?`<p>${M(j.reveal)}</p>`:""}</div></div>`).join("")}</div>`),
quiz:()=>C.quiz&&has(C.quiz.questions)&&S("quiz",hd("quiz")+`<div class="card" id="qz"></div>`),
letter:()=>C.letter&&C.letter.text&&S("letter",`<p class="sub rv">${M(C.letter.preface)}</p><article class="paper card">${String(C.letter.text).trim().split(/\n\s*\n/).map(p=>`<p class="rv">${M(p)}</p>`).join("")}<p class="rv sg">${M(C.letter.signature)}</p></article>`),
bucket:()=>has(C.bucketList)&&S("bucket",hd("bucket")+`<div class="bks">${C.bucketList.map(b=>`<label class="bk rv"><input type="checkbox"><span class="bx"></span><span>${M(b)}</span></label>`).join("")}</div>`),
ending:()=>{const e=C.ending||{};return S("ending",(e.lines||[]).map((l,i)=>`<p class="el rv" style="transition-delay:${RM?0:i*.25}s">${M(l)}</p>`).join("")+`<p class="sig rv">${M(e.signoff)}</p><button class="btn rv" id="last">${E(e.button||"One last thing...")}</button>`)}
};
const main=$("#main");
main.innerHTML=`<svg width="0" height="0" style="position:absolute"><clipPath id="hc" clipPathUnits="objectBoundingBox"><path d="M.5 .95C-.2 .5 .05 .02 .3 .08c.1.02.17.12.2.2.03-.08.1-.18.2-.2.25-.06.5.42-.2.87z"/></clipPath></svg>`+(C.sections||[]).map(k=>B[k]?B[k]()||"":"").join("");
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
$$(".rv").forEach(el=>io.observe(el));
D.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[role=button]")){e.preventDefault();e.target.click()}});
$$("[data-go]").forEach(b=>b.onclick=()=>b.closest("section").nextElementSibling?.scrollIntoView({behavior:RM?"auto":"smooth"}));
/* gate */
const I=C.intro||{},gate=$("#gate");
gate.innerHTML=`<div><h1>${M(I.title)}</h1><p>${M(I.text)}</p><button class="btn" id="open">${E(I.button)}</button></div>`;
const typeName=()=>{const el=$("#nm");if(!el)return;const t=T(C.boyfriendName);if(RM){el.textContent=t+" ❤️";return}let i=0;const id=setInterval(()=>{el.textContent=t.slice(0,++i);if(i>=t.length){clearInterval(id);el.textContent=t+" ❤️"}},110)};
$("#open").onclick=()=>{burst(24,["❤️","✨","💖"]);gate.classList.add("out");D.body.classList.remove("lock");setTimeout(()=>{gate.remove();typeName()},RM?0:700)};
/* reasons */
if($("#rc")){const R=C.reasons,c=$("#rc");let i=0;const show=()=>{c.classList.remove("go");void c.offsetWidth;c.classList.add("go");c.innerHTML=`<small>Reason #${String(i+1).padStart(2,"0")}</small><p>${M(R[i])}</p>`;$("#rp").textContent=`♡ ${i+1} / ${R.length} ♡`;$("#rn").textContent=i===R.length-1?"Start over ↺":"Next reason →"};$("#rn").onclick=()=>{if(i===R.length-1){burst(30);i=0}else i++;show()};show()}
/* love meter */
if($("#mg")){const g=$("#mg"),v=$("#mv"),b=$("#mb"),t=$("#mt"),MT=C.meter||{};g.onclick=()=>{g.disabled=true;const st=[12,37,58,69,85,99,100];let i=0;const id=setInterval(()=>{const x=st[i++];v.textContent=x+"%";b.style.width=x+"%";if(i>=st.length){clearInterval(id);setTimeout(()=>{v.textContent=T(MT.error||"ERROR...");v.classList.add("glitch");setTimeout(()=>{v.classList.remove("glitch");v.textContent="∞%";b.classList.add("inf");t.innerHTML=M(MT.overflow);burst(40)},1300)},500)}},RM?60:320)}}
/* music */
const MU=C.music||{};
if($("#pl")){const a=new Audio(MU.audio),pl=$("#pl");D.body.insertAdjacentHTML("beforeend",`<div id="mini" hidden><button id="mt2" aria-label="Play or pause">▶</button><span>♪ ${M(MU.title)}</span><div class="seek"><i></i></div></div>`);let on=false;
const sync=()=>{pl.textContent=on?"Pause ⏸":"Play our song 🎵";$("#mt2").textContent=on?"⏸":"▶"};
const tog=async()=>{try{if(a.paused){await a.play();on=true;$("#mini").hidden=false}else{a.pause();on=false}}catch(e){$("#merr").textContent="Add your song file in content.js 🎵"}sync()};
pl.onclick=tog;$("#mt2").onclick=tog;a.ontimeupdate=()=>$$(".seek i").forEach(b=>b.style.width=(a.currentTime/a.duration*100||0)+"%");a.onended=()=>{on=false;sync()};
$$(".seek").forEach(s=>s.onclick=e=>{const r=s.getBoundingClientRect();if(a.duration)a.currentTime=a.duration*(e.clientX-r.left)/r.width})}
/* open when / jokes / bucket */
$$(".env").forEach(e=>e.onclick=()=>{const o=e.classList.toggle("open");e.setAttribute("aria-expanded",o);if(o)burst(8,["💌","💖"])});
$$(".jk").forEach(e=>e.onclick=()=>{e.classList.toggle("on");if(e.classList.contains("on"))burst(6,["😂","✨"])});
$$(".bk input").forEach((cb,i)=>{try{cb.checked=localStorage.getItem("bk"+i)==="1"}catch(e){}cb.onchange=()=>{try{localStorage.setItem("bk"+i,cb.checked?"1":"0")}catch(e){}if(cb.checked)burst(10,["✨","💖"])}});
/* quiz */
if($("#qz")){const Q=C.quiz,qs=Q.questions,box=$("#qz");let i=0,sc=0;
const show=()=>{if(i>=qs.length){const r=sc/qs.length,res=[...(Q.results||[])].sort((a,b)=>b.min-a.min).find(x=>r>=x.min);box.innerHTML=`<p class="sub">${M(Q.finish)}</p><h3>${sc} / ${qs.length}</h3><p>${M(res?res.text:"")}</p>`;burst(30);return}
const q=qs[i];box.innerHTML=`<p class="prog">${i+1} / ${qs.length}</p><h3>${M(q.q)}</h3>`+q.options.map((o,j)=>`<button class="opt" data-j="${j}">${M(o)}</button>`).join("")+`<p class="fb" id="fb"></p>`;
$$(".opt",box).forEach(b=>b.onclick=()=>{const ok=+b.dataset.j===q.answer;$$(".opt",box).forEach(x=>x.disabled=true);b.classList.add(ok?"ok":"no");$$(".opt",box)[q.answer].classList.add("ok");if(ok){sc++;burst(14)}
$("#fb").innerHTML=M(ok?(q.right||"Yesss! 🎉"):(q.wrong||"Hehe, not quite 😉"))+`<br><button class="btn" id="qn">${i+1<qs.length?"Next →":"See result 👀"}</button>`;$("#qn").onclick=()=>{i++;show()}})};show()}
/* gallery + lightbox */
if($(".wall")){const lb=D.createElement("div");lb.id="lb";lb.hidden=true;lb.innerHTML=`<button class="x" aria-label="Close">×</button><button class="pv" aria-label="Previous">‹</button><button class="nx" aria-label="Next">›</button><div class="lbc"></div>`;D.body.append(lb);let k=0;
const go=d=>{k=(k+d+P.length)%P.length;const p=P[k],sm=[p.date,p.location].filter(Boolean).map(E).join(" · ");$(".lbc",lb).innerHTML=`<div class="ph"><img src="${E(p.image)}" alt="${E(p.caption||"")}" onerror="this.style.display='none'"></div>${p.caption?`<h3>${M(p.caption)}</h3>`:""}${sm?`<small>${sm}</small>`:""}${p.description?`<p>${M(p.description)}</p>`:""}`};
const cl=()=>{lb.hidden=true;D.body.classList.remove("lock")};
$$(".fig").forEach(el=>el.onclick=()=>{k=+el.dataset.i;go(0);lb.hidden=false;D.body.classList.add("lock")});
lb.onclick=e=>{if(e.target===lb||e.target.classList.contains("x"))cl()};$(".pv",lb).onclick=()=>go(-1);$(".nx",lb).onclick=()=>go(1);
D.addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")cl();if(e.key==="ArrowLeft")go(-1);if(e.key==="ArrowRight")go(1)})}
/* ending + easter egg */
if($("#last"))$("#last").onclick=()=>{const F=C.final||{};burst(50,["✨","⭐","❤️","💫"]);modal(`${F.image?ph(F,"s-"+(F.shape||"heart")):""}<h3>${M(F.message)}</h3>`,"dark")};
if($("#egg")){const EG=C.easter||{},eg=$("#egg");let n=0;eg.onclick=()=>{n++;eg.style.transform=`scale(${1+n*.3})`;if(n>=(EG.taps||5)){n=0;eg.style.transform="";burst(30);modal(`<h3>${M(EG.title)}</h3>${EG.image?ph(EG,"s-rounded","4/5"):""}<p>${M(EG.message)}</p>`)}}}
/* nav + progress + parallax */
const secs=$$("main section"),nv=D.createElement("div");nv.id="nv";
nv.innerHTML=`<button aria-label="Menu" aria-expanded="false">♡</button><nav hidden>${secs.map(s=>`<a href="#${s.id}">♡ ${s.dataset.label}</a>`).join("")}</nav><i id="pg"></i>`;D.body.append(nv);
const nb=$("button",nv),nn=$("nav",nv);nb.onclick=()=>{nn.hidden=!nn.hidden;nb.setAttribute("aria-expanded",!nn.hidden)};nn.onclick=()=>nn.hidden=true;
let tk=0;addEventListener("scroll",()=>{if(tk)return;tk=requestAnimationFrame(()=>{tk=0;const h=D.documentElement.scrollHeight-innerHeight;$("#pg").style.width=(h>0?scrollY/h*100:0)+"%";if(!RM)RS.setProperty("--sy",Math.min(scrollY,600))})},{passive:true});
})();
