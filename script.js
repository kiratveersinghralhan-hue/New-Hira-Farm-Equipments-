import { enableFirebase, firebaseConfig, enquiriesCollection, usersCollection } from './firebase-config.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const parts = [
  {name:'Cutter Blades', cat:'Cutting', text:'Sharp cutting sections for clean crop entry.', detail:'Cut crop at the header. Replace by securing header, removing blade bolts, fitting correct sections and checking free movement.', pos:[18,66]},
  {name:'Reel Fingers', cat:'Feeding', text:'Guides standing crop toward the cutter bar.', detail:'Guide crop into header. Replace bent fingers by locking reel, removing retainer and aligning new finger with nearby tine.', pos:[20,42]},
  {name:'Main Shaft', cat:'Drive', text:'Transfers power through the machine.', detail:'Main drive link. Inspect vibration, bearing heat and coupling alignment before replacement.', pos:[48,46]},
  {name:'Thresher Drum', cat:'Threshing', text:'Separates grain from crop through rotation.', detail:'Separates grain from crop. Check rasp bars, concave clearance and balance before running again.', pos:[53,38]},
  {name:'Belt Pulley', cat:'Drive', text:'Moves rotation across belt-driven systems.', detail:'Transfers rotation. Remove guard, loosen tensioner, inspect grooves, fit correct belt and align pulleys.', pos:[66,50]},
  {name:'Cleaning Sieves', cat:'Cleaning', text:'Separates grain from chaff.', detail:'Clean grain flow. Remove dust/blockage, check openings and set according to crop.', pos:[56,68]},
  {name:'Bearings', cat:'Service', text:'Supports rotating assemblies under load.', detail:'Check heat and play. Replace in pairs when needed and grease as recommended.', pos:[62,72]},
  {name:'Auger Parts', cat:'Unloading', text:'Moves grain from tank to trolley.', detail:'Unload grain from tank. Clear blockage, inspect flighting and bearings, then test at low speed.', pos:[80,33]},
  {name:'Filters', cat:'Engine', text:'Protects engine from dust and fuel contamination.', detail:'Replace air/fuel filters regularly, especially during dusty harvesting days.', pos:[64,33]},
  {name:'Tyres', cat:'Mobility', text:'Supports field movement and traction.', detail:'Maintain pressure and inspect sidewalls, rim nuts, bearing play and steering linkage.', pos:[42,76]}
];

const state = {
  heroIndex: 0,
  selectedPart: 0,
  firebaseReady: false,
  db: null,
  auth: null,
  user: null,
  firebase: null
};

const els = {
  preloader: $('#preloader'),
  enterSite: $('#enterSite'),
  menu: $('#menu'),
  nav: $('#nav'),
  images: $$('.heroImage'),
  sideLinks: $$('.sideRail a'),
  partCards: $('#partCards'),
  modelCanvas: $('#modelCanvas'),
  modelLabels: $('#modelLabels'),
  partSearch: $('#partSearch'),
  servicePartList: $('#servicePartList'),
  selectedPart: $('#selectedPart'),
  selectedPartInfo: $('#selectedPartInfo'),
  form: $('#enquiryForm'),
  formStatus: $('#formStatus'),
  shareBtn: $('#shareBtn'),
  toTop: $('#toTop'),
  loginOpen: $('#loginOpen'),
  loginDialog: $('#loginDialog'),
  authEmail: $('#authEmail'),
  authPassword: $('#authPassword'),
  loginSubmit: $('#loginSubmit'),
  signupSubmit: $('#signupSubmit'),
  authStatus: $('#authStatus')
};

function safe(fn, label){try{return fn()}catch(e){console.error('New Hira:',label,e)}}

function closePreloader(){
  els.preloader?.classList.add('is-hidden');
  els.preloader?.setAttribute('aria-hidden','true');
}
els.enterSite?.addEventListener('click', closePreloader);
setTimeout(closePreloader, 2600);

function setupMenu(){
  els.menu?.addEventListener('click', () => {
    const open = els.nav.classList.toggle('is-open');
    els.menu.setAttribute('aria-expanded', String(open));
  });
  $$('.nav a').forEach(a=>a.addEventListener('click',()=>els.nav.classList.remove('is-open')));
}

function setupReveal(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, {threshold:.12});
  $$('.reveal').forEach(el=>io.observe(el));
  setTimeout(()=>$$('.reveal').forEach(el=>el.classList.add('is-visible')), 700);
}

function setupHeroCarousel(){
  setInterval(()=>{
    state.heroIndex = (state.heroIndex + 1) % els.images.length;
    els.images.forEach((img,i)=>img.classList.toggle('is-active', i===state.heroIndex));
  }, 4500);
}

function setupTicker(){
  const track = $('.tickerTrack');
  if(!track) return;
  track.innerHTML += track.innerHTML;
}

function renderPartCards(){
  els.partCards.innerHTML = parts.map((p,i)=>`
    <button type="button" data-index="${i}">
      <strong>${p.name}</strong>
      <span>${p.cat} — ${p.text}</span>
    </button>
  `).join('');
  $$('#partCards button').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelector('#service3d').scrollIntoView({behavior:'smooth'});
    selectPart(Number(btn.dataset.index));
  }));
}

function renderServiceList(filter=''){
  const q = filter.toLowerCase().trim();
  const shown = parts.filter(p => !q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.text.toLowerCase().includes(q));
  els.servicePartList.innerHTML = shown.map(p=>{
    const i = parts.indexOf(p);
    return `<button type="button" class="${i===state.selectedPart?'active':''}" data-index="${i}"><strong>${p.name}</strong><br><span>${p.cat}</span></button>`;
  }).join('');
  $$('#servicePartList button').forEach(btn=>btn.addEventListener('click',()=>selectPart(Number(btn.dataset.index))));
}

function selectPart(i){
  state.selectedPart = i;
  const p = parts[i];
  els.selectedPart.textContent = p.name;
  els.selectedPartInfo.textContent = p.detail;
  renderServiceList(els.partSearch?.value || '');
  drawModel();
}

function setupServiceSearch(){
  els.partSearch?.addEventListener('input', e=>renderServiceList(e.target.value));
  renderServiceList();
  selectPart(0);
}

function setupModelCanvas(){
  const canvas = els.modelCanvas;
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let dpr = 1, w = 0, h = 0, t = 0;

  function resize(){
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = canvas.clientWidth || 800;
    h = canvas.clientHeight || 520;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    drawModel();
  }
  window.addEventListener('resize', resize);
  resize();

  function wheel(x,y,r,rot){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(rot);
    ctx.fillStyle='#0a0a09';
    ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(246,241,231,.25)';ctx.lineWidth=Math.max(3,r*.12);ctx.stroke();
    for(let i=0;i<8;i++){
      ctx.rotate(Math.PI/4);
      ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(r*.75,0);ctx.stroke();
    }
    ctx.fillStyle='rgba(246,241,231,.18)';
    ctx.beginPath();ctx.arc(0,0,r*.34,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }

  window.drawModel = function draw(){
    if(!ctx) return;
    t += 0.016;
    ctx.clearRect(0,0,w,h);
    const bg = ctx.createRadialGradient(w*.7,h*.16,20,w*.7,h*.16,w*.45);
    bg.addColorStop(0,'rgba(230,199,128,.18)');
    bg.addColorStop(1,'rgba(230,199,128,0)');
    ctx.fillStyle='#0d0d0b';ctx.fillRect(0,0,w,h);
    ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
    ctx.strokeStyle='rgba(246,241,231,.05)';
    for(let i=0;i<14;i++){ctx.beginPath();ctx.moveTo(i*w/13,h*.74);ctx.lineTo(w*.5,h);ctx.stroke();}

    const cx = w*.5, cy = h*.53;
    const s = Math.min(w/780, h/520);
    const pulse = parts[state.selectedPart].pos;

    ctx.save();
    ctx.translate(cx - 230*s, cy - 60*s);
    ctx.scale(s,s);

    const body = ctx.createLinearGradient(0,-70,420,90);
    body.addColorStop(0,'#e9c36a'); body.addColorStop(1,'#9f7c31');
    ctx.fillStyle=body;
    ctx.beginPath();
    ctx.moveTo(30,90);ctx.lineTo(110,-52);ctx.lineTo(330,-54);ctx.lineTo(450,54);ctx.lineTo(420,105);ctx.lineTo(55,105);ctx.closePath();ctx.fill();

    ctx.fillStyle='#d8d2bf';
    ctx.beginPath();ctx.moveTo(96,-54);ctx.lineTo(206,-54);ctx.lineTo(245,24);ctx.lineTo(48,24);ctx.closePath();ctx.fill();
    ctx.fillStyle='rgba(14,16,18,.78)';ctx.fillRect(126,-38,84,46);

    ctx.fillStyle='rgba(246,241,231,.16)';ctx.fillRect(258,-34,92,58);ctx.fillRect(360,10,60,36);
    ctx.strokeStyle='rgba(246,241,231,.38)';ctx.lineWidth=9;
    ctx.beginPath();ctx.moveTo(438,35);ctx.quadraticCurveTo(535,-14,608,62);ctx.stroke();

    ctx.fillStyle='#b8892d';
    ctx.beginPath();ctx.moveTo(-120,70);ctx.lineTo(40,10);ctx.lineTo(94,36);ctx.lineTo(-62,116);ctx.closePath();ctx.fill();
    ctx.fillStyle='rgba(246,241,231,.2)';ctx.fillRect(-132,66,190,16);

    wheel(142,132,64,t); wheel(372,128,44,t);

    // active glowing location
    const px = (pulse[0]/100)*620 - 130;
    const py = (pulse[1]/100)*230 - 55;
    const glow = ctx.createRadialGradient(px,py,4,px,py,52);
    glow.addColorStop(0,'rgba(163,219,79,.92)');
    glow.addColorStop(.35,'rgba(163,219,79,.28)');
    glow.addColorStop(1,'rgba(163,219,79,0)');
    ctx.fillStyle=glow;ctx.beginPath();ctx.arc(px,py,52,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#a3db4f';ctx.beginPath();ctx.arc(px,py,7,0,Math.PI*2);ctx.fill();

    ctx.restore();

    renderModelLabels();
  }

  function renderModelLabels(){
    if(!els.modelLabels) return;
    els.modelLabels.innerHTML = parts.slice(0,6).map((p,i)=>{
      const active = i === state.selectedPart ? 'active' : '';
      return `<span class="modelLabel ${active}" style="left:${p.pos[0]}%;top:${p.pos[1]}%">${p.name}</span>`;
    }).join('');
  }

  setInterval(drawModel, 66);
}

function setupSectionProgress(){
  const sections = $$('.panel-section');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.dataset.sectionId;
        els.sideLinks.forEach(a=>a.classList.toggle('is-active', a.dataset.section===id));
      }
    });
  }, {threshold:.42});
  sections.forEach(s=>io.observe(s));
}

function setupTopButton(){
  window.addEventListener('scroll', ()=>{
    els.toTop?.classList.toggle('is-visible', window.scrollY > 700);
  });
  els.toTop?.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

async function shareSite(){
  const data = {title:'New Hira', text:'New Hira premium agricultural machinery.', url:location.href};
  try{
    if(navigator.share) await navigator.share(data);
    else{
      await navigator.clipboard.writeText(location.href);
      alert('Website link copied.');
    }
  }catch{}
}
function setupShare(){
  els.shareBtn?.addEventListener('click', shareSite);
}

async function setupFirebase(){
  if(!enableFirebase) return;
  try{
    const [{ initializeApp }, authMod, dbMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
    ]);
    const app = initializeApp(firebaseConfig);
    state.auth = authMod.getAuth(app);
    state.db = dbMod.getFirestore(app);
    state.firebase = {...authMod, ...dbMod};
    state.firebaseReady = true;
    authMod.onAuthStateChanged(state.auth, user=>{
      state.user = user;
      if(els.authStatus) els.authStatus.textContent = user ? `Logged in: ${user.email}` : 'Not logged in.';
    });
  }catch(err){
    console.warn(err);
    if(els.authStatus) els.authStatus.textContent = 'Firebase not connected yet.';
  }
}

function setupLogin(){
  els.loginOpen?.addEventListener('click', ()=>els.loginDialog?.showModal?.());
  async function auth(mode){
    if(!state.firebaseReady){
      els.authStatus.textContent = 'Firebase not ready. Enable Authentication in Firebase.';
      return;
    }
    const email = $('#authEmail').value.trim();
    const password = $('#authPassword').value;
    try{
      if(mode==='login') await state.firebase.signInWithEmailAndPassword(state.auth,email,password);
      else{
        const res = await state.firebase.createUserWithEmailAndPassword(state.auth,email,password);
        await state.firebase.setDoc(state.firebase.doc(state.db, usersCollection, res.user.uid), {
          email, createdAt: state.firebase.serverTimestamp()
        }, {merge:true});
      }
      els.authStatus.textContent = mode === 'login' ? 'Logged in successfully.' : 'Account created successfully.';
      setTimeout(()=>els.loginDialog.close(),700);
    }catch(err){
      els.authStatus.textContent = err.message.replace('Firebase: ','');
    }
  }
  $('#loginSubmit')?.addEventListener('click',()=>auth('login'));
  $('#signupSubmit')?.addEventListener('click',()=>auth('signup'));
}

function setupEnquiry(){
  $('#enquiryForm')?.addEventListener('submit', async e=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    data.createdAtClient = new Date().toISOString();
    data.userEmail = state.user?.email || 'Guest';
    data.source = 'luxury advertising website';
    els.formStatus.className = 'formStatus';
    els.formStatus.textContent = 'Submitting enquiry...';
    try{
      if(state.firebaseReady){
        await state.firebase.addDoc(state.firebase.collection(state.db,enquiriesCollection), {
          ...data,
          createdAt: state.firebase.serverTimestamp()
        });
        els.formStatus.classList.add('success');
        els.formStatus.textContent = 'Enquiry submitted. We will contact you soon.';
      }else{
        const arr = JSON.parse(localStorage.getItem('newHiraEnquiries') || '[]');
        arr.push(data);
        localStorage.setItem('newHiraEnquiries', JSON.stringify(arr));
        els.formStatus.classList.add('success');
        els.formStatus.textContent = 'Saved locally for testing. Firebase can store it when connected.';
      }
      e.currentTarget.reset();
      $('#offerInput').value = 'Up to ₹1,00,000 paddy offer';
    }catch(err){
      els.formStatus.classList.add('error');
      els.formStatus.textContent = err.message;
    }
  });
}

function init(){
  safe(setupMenu,'menu');
  safe(setupReveal,'reveal');
  safe(setupHeroCarousel,'hero');
  safe(setupTicker,'ticker');
  safe(renderPartCards,'parts');
  safe(setupServiceSearch,'service search');
  safe(setupModelCanvas,'model canvas');
  safe(setupSectionProgress,'progress');
  safe(setupTopButton,'top');
  safe(setupShare,'share');
  safe(setupLogin,'login');
  safe(setupEnquiry,'enquiry');
  setupFirebase();
}
document.addEventListener('DOMContentLoaded', init);
