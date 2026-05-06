import { enableFirebase, firebaseConfig, enquiriesCollection } from './firebase-config.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const parts = [
  {id:'blades', cat:'Cutting', name:'Cutter Blades', text:'Slices crop cleanly at the header for smooth feeding.', repair:'Stop machine, lock header, remove blade guards, replace damaged sections, tighten bolts and test movement manually.', pos:[-3.4,-.55,1.05]},
  {id:'fingers', cat:'Feeding', name:'Reel Fingers', text:'Guides standing crop into the cutter and feeding system.', repair:'Secure reel, remove clip/bolt, replace bent finger, align with nearby fingers and rotate slowly to check clearance.', pos:[-3.7,.18,1.1]},
  {id:'shaft', cat:'Drive', name:'Main Shaft', text:'Transfers drive power to important rotating assemblies.', repair:'Remove guards, mark coupler position, loosen bearings, inspect runout, replace worn coupler/bearing and align.', pos:[-.8,.2,.1]},
  {id:'drum', cat:'Threshing', name:'Thresher Drum', text:'Separates grain from crop using drum and concave action.', repair:'Open inspection cover, lock drum, clean material, inspect bars/concave and replace worn elements in matched sets.', pos:[-.1,.35,.25]},
  {id:'belt', cat:'Drive', name:'Belt & Pulley', text:'Transfers rotation to key machine functions.', repair:'Remove guard, release tensioner, inspect pulley grooves, fit correct belt, align pulleys and set tension.', pos:[1.05,.25,1.0]},
  {id:'sieves', cat:'Cleaning', name:'Sieves', text:'Clean grain from chaff using airflow and shaking motion.', repair:'Clean sieve openings, inspect linkage, check fan setting and adjust openings according to crop.', pos:[.2,-.55,-.85]},
  {id:'auger', cat:'Unloading', name:'Unloading Auger', text:'Moves grain from tank to trolley or transport vehicle.', repair:'Empty tank, open access, clear blockage, inspect bearing and flighting, test slowly after replacement.', pos:[2.5,.95,-.25]},
  {id:'tyres', cat:'Movement', name:'Tyres & Wheels', text:'Carry load and provide field movement and traction.', repair:'Park level, chock machine, check pressure, inspect sidewall/rim bolts and replace with load-rated tyre.', pos:[-1.2,-1.05,1.1]},
  {id:'filters', cat:'Service', name:'Filters', text:'Protect engine and hydraulic systems from dust and contamination.', repair:'Clean area, remove old filter, oil seal where required, fit correct part and check leaks after start.', pos:[1.25,.55,-.9]},
  {id:'bearings', cat:'Service', name:'Bearings', text:'Support rotating parts with lower friction and stable movement.', repair:'Check heat/noise, remove bearing housing, replace worn bearing, grease properly and verify rotation.', pos:[.75,-.2,1.05]}
];

let db=null, auth=null, firebase=null, selected='blades';
let scene, camera, renderer, controls, partMeshes = new Map(), originalMats = new Map();

function closeIntro(){ const intro=$('#intro'); if(intro){ intro.classList.add('hidden'); intro.style.pointerEvents='none'; } }
$('#enterSite')?.addEventListener('click', closeIntro);
setTimeout(closeIntro, 2600);

$('#menu')?.addEventListener('click',()=>$('#nav')?.classList.toggle('open'));
$$('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav')?.classList.remove('open')));

function shareSite(){
  const data={title:'New Hira', text:'Premium New Hira combine harvester advertisement website.', url:location.href};
  if(navigator.share) navigator.share(data).catch(()=>{});
  else navigator.clipboard?.writeText(location.href).then(()=>alert('Website link copied.'));
}
$('#shareTop')?.addEventListener('click', shareSite);
$('#shareFloat')?.addEventListener('click', shareSite);

function sideRail(){
  const links=$$('.side-rail a');
  const sections=links.map(a=>document.getElementById(a.dataset.section)).filter(Boolean);
  const onScroll=()=>{
    let active=sections[0]?.id;
    sections.forEach(sec=>{ if(sec.getBoundingClientRect().top < innerHeight*.45) active=sec.id; });
    links.forEach(a=>a.classList.toggle('active',a.dataset.section===active));
  };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
}
sideRail();

function renderParts(){
  const grid=$('#partsGrid');
  grid.innerHTML = parts.map(p=>`<article><span>${p.cat}</span><h3>${p.name}</h3><p>${p.text}</p></article>`).join('');
  renderPartList();
}
function renderPartList(filter=''){
  const q=filter.toLowerCase().trim();
  const list=$('#partList');
  const found=parts.filter(p=>!q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
  list.innerHTML=found.map(p=>`<button class="${p.id===selected?'active':''}" data-id="${p.id}" type="button"><strong>${p.name}</strong><br><small>${p.cat}</small></button>`).join('');
  $$('#partList button').forEach(b=>b.addEventListener('click',()=>selectPart(b.dataset.id)));
}
$('#partSearch')?.addEventListener('input', e=>renderPartList(e.target.value));
function selectPart(id){
  const part=parts.find(p=>p.id===id) || parts[0]; selected=part.id;
  $('#partTitle').textContent=part.name; $('#partText').textContent=part.text; $('#repairText').textContent=part.repair;
  renderPartList($('#partSearch')?.value || '');
  if(partMeshes.size){
    partMeshes.forEach((m,pid)=>m.material=originalMats.get(pid));
    const mesh=partMeshes.get(id);
    if(mesh){
      mesh.material = new window.THREE.MeshStandardMaterial({color:0xd8b16a, emissive:0x3c2b10, metalness:.22, roughness:.36});
      const v=new window.THREE.Vector3(...part.pos);
      controls.target.lerp(v,.75);
      camera.position.lerp(new window.THREE.Vector3(v.x+4.2,v.y+2.2,v.z+4.1),.6);
    }
  }
}
renderParts(); selectPart('blades');

async function setup3D(){
  const THREE = await import('three'); window.THREE = THREE;
  const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
  const el=$('#viewer');
  scene=new THREE.Scene(); scene.fog=new THREE.Fog(0x0b0b0a,8,24);
  camera=new THREE.PerspectiveCamera(38, el.clientWidth/el.clientHeight, .1, 100); camera.position.set(5.8,3.4,6.6);
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true}); renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)); renderer.setSize(el.clientWidth,el.clientHeight); renderer.outputColorSpace=THREE.SRGBColorSpace; el.prepend(renderer.domElement);
  controls=new OrbitControls(camera, renderer.domElement); controls.enableDamping=true; controls.dampingFactor=.06; controls.target.set(0,0,0);
  scene.add(new THREE.HemisphereLight(0xfff3dc,0x111111,1.4));
  const key=new THREE.DirectionalLight(0xffd89a,2.2); key.position.set(4,7,4); scene.add(key);
  const rim=new THREE.DirectionalLight(0x9fc6ff,.8); rim.position.set(-5,3,-5); scene.add(rim);
  const ground=new THREE.Mesh(new THREE.CircleGeometry(7.5,96), new THREE.MeshStandardMaterial({color:0x15120d, roughness:.9})); ground.rotation.x=-Math.PI/2; ground.position.y=-1.42; scene.add(ground);
  buildModel(THREE);
  el.querySelector('.viewer-fallback')?.remove();
  addEventListener('resize',()=>{renderer.setSize(el.clientWidth,el.clientHeight);camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();});
  function animate(){controls.update();renderer.render(scene,camera);requestAnimationFrame(animate)} animate();
  selectPart('blades');
}
function mat(THREE,c,m=.12,r=.58){return new THREE.MeshStandardMaterial({color:c,metalness:m,roughness:r})}
function box(THREE,size,pos,color,id){const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size),mat(THREE,color));mesh.position.set(...pos);scene.add(mesh);if(id){mesh.userData.id=id;partMeshes.set(id,mesh);originalMats.set(id,mesh.material)}return mesh}
function cyl(THREE,r,d,pos,rot,color,id){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d,48),mat(THREE,color));mesh.position.set(...pos);mesh.rotation.set(...rot);scene.add(mesh);if(id){partMeshes.set(id,mesh);originalMats.set(id,mesh.material)}return mesh}
function buildModel(THREE){
  box(THREE,[3.7,1.28,1.85],[.05,0,0],0x83b928);
  box(THREE,[1.45,1.05,1.12],[-1.35,.62,.2],0xd9dfd7);
  box(THREE,[.95,.64,1.16],[-1.38,.68,.22],0x182129);
  box(THREE,[1.55,.78,1.35],[.85,.9,-.05],0x6ea41f,'filters');
  box(THREE,[1.1,.65,.88],[1.18,.36,-.92],0x4b535a);
  box(THREE,[1.6,.3,2.45],[-3.45,-.72,.48],0xa8c83e,'blades');
  cyl(THREE,.2,2.5,[-3.65,-.18,.78],[Math.PI/2,0,0],0xcfd27a,'fingers');
  cyl(THREE,.11,2.25,[-.8,.2,.1],[Math.PI/2,0,0],0xaeb2b4,'shaft');
  cyl(THREE,.48,1.45,[-.1,.35,.25],[Math.PI/2,0,0],0x6e7274,'drum');
  cyl(THREE,.36,.18,[1.05,.25,1.0],[Math.PI/2,0,0],0x20252a,'belt');
  box(THREE,[1.45,.18,.82],[.2,-.55,-.85],0x7c858a,'sieves');
  cyl(THREE,.12,2.5,[2.5,.95,-.25],[.65,0,1.1],0xb9b9ad,'auger');
  cyl(THREE,.68,.54,[-1.2,-1.05,1.1],[Math.PI/2,0,0],0x08090a,'tyres');
  cyl(THREE,.33,.57,[-1.2,-1.05,1.1],[Math.PI/2,0,0],0x5e6468);
  cyl(THREE,.44,.38,[1.72,-1.05,1.02],[Math.PI/2,0,0],0x08090a);
  cyl(THREE,.22,.4,[1.72,-1.05,1.02],[Math.PI/2,0,0],0x5e6468);
  cyl(THREE,.18,.35,[.75,-.2,1.05],[Math.PI/2,0,0],0xa4a4a0,'bearings');
}
setup3D().catch(err=>{console.warn(err); $('#viewer .viewer-fallback').textContent='3D viewer unavailable. Parts list remains active.'});

async function initFirebase(){
  if(!enableFirebase) return;
  try{
    const [{initializeApp}, authMod, dbMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
    ]);
    const app=initializeApp(firebaseConfig); auth=authMod.getAuth(app); db=dbMod.getFirestore(app); firebase={...authMod,...dbMod};
  }catch(e){console.warn(e)}
}
initFirebase();
const dialog=$('#authDialog');
$('#authOpen')?.addEventListener('click',()=>dialog?.showModal());
$('#closeAuth')?.addEventListener('click',()=>dialog?.close());
async function doAuth(mode){
  const msg=$('#authMsg'); msg.textContent='Working...';
  try{
    if(!firebase) throw new Error('Firebase is not ready. Enable Auth in Firebase console.');
    const email=$('#authEmail').value.trim(), pass=$('#authPassword').value;
    if(mode==='login') await firebase.signInWithEmailAndPassword(auth,email,pass);
    else await firebase.createUserWithEmailAndPassword(auth,email,pass);
    msg.textContent=mode==='login'?'Logged in.':'Account created.'; setTimeout(()=>dialog.close(),650);
  }catch(e){msg.textContent=e.message.replace('Firebase: ','')}
}
$('#loginBtn')?.addEventListener('click',()=>doAuth('login'));
$('#signupBtn')?.addEventListener('click',()=>doAuth('signup'));
$('#enquiryForm')?.addEventListener('submit', async e=>{
  e.preventDefault(); const status=$('#formStatus'); status.textContent='Submitting enquiry...';
  const data=Object.fromEntries(new FormData(e.currentTarget).entries()); data.createdAtClient=new Date().toISOString();
  try{
    if(firebase && db) await firebase.addDoc(firebase.collection(db,enquiriesCollection), {...data, createdAt:firebase.serverTimestamp()});
    else { const arr=JSON.parse(localStorage.getItem('newHiraEnquiries')||'[]'); arr.push(data); localStorage.setItem('newHiraEnquiries',JSON.stringify(arr)); }
    status.textContent='Enquiry saved. New Hira team can follow up.'; e.currentTarget.reset();
  }catch(err){status.textContent=err.message}
});
