import { enableFirebase, firebaseConfig, enquiriesCollection } from './firebase-config.js';

const parts = ["Guide Drum Shaft", "Bearing 6311", "Bearing 6208", "Bearing 6205", "Bearing UCF 207", "Bearing 206 UC", "Thresher Pulley Lock", "Rubber Seal 45-62-10", "Rubber Seal 40-80-10", "Rubber Bush Large", "Steering Jack Kit", "High Low Jack Kit", "Distributor / Control Valve Kit", "Hydraulic Pipe Steering Jack 24 inch", "Axle Couplings", "Small Axle", "Large Axle", "External Lock M-42", "Main Housing Puller", "Elevator Chain Lock", "Feeding Chain Lock", "Cutter Bar Fingers", "Blade Strip", "Blade Class", "Reel Tines", "Blade Head", "Blade Head Bush", "Reel Bush", "Fish Bush", "Blade Rivets", "D.E. Spanner Set", "Ring Spanner Set", "Socket Set", "W.P. Plier", "Allen Key Set", "Centre Punch", "Chisel", "Wheel Spanner Leyland", "Pipe Wrench 18 inch", "Bench Vice No.1", "Oil Can", "Circlip Plier Outer 7 inch", "Circlip Plier Inner 7 inch", "Hammer 2 lb", "Hammer 4 lb", "Three Legs Bearing Puller", "Round File 10 inch", "Flat File 12 inch", "Plier 10 inch", "Hexa Frame", "Hexa Blade", "Grease Gun 12 inch", "Grease Gun Nipple Kit", "Grease Pipe 8MM 12 inch", "Grease Pipe 6MM 12 inch", "Screw Driver", "Mechanical Jack", "Mechanical Jack Rod", "Nuts Bolts All Sizes", "Split Pins All Sizes", "Thrasher Spikes", "Thrasher Drum Paddy/Wheat", "Concave Assembly Paddy/Wheat", "Cutter Puller", "Water Cool Cage", "Tool Box", "Array Straw Walker Blade"];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const demoParts = [
  { name: 'Cutter Blades', x: 24, y: 62 },
  { name: 'Main Shaft', x: 45, y: 49 },
  { name: 'Belt Pulley', x: 65, y: 52 },
  { name: 'Thresher Drum', x: 53, y: 42 },
  { name: 'Unloading Auger', x: 80, y: 35 }
];

const state = { db:null, firebase:null, selected:0 };

function renderParts(filter='') {
  const q = filter.toLowerCase().trim();
  const list = $('#partsList');
  const shown = parts.filter(p => !q || p.toLowerCase().includes(q));
  list.innerHTML = shown.map((p, i) => `<button type="button"><strong>${p}</strong><small>New Hira spare part / toolkit item</small></button>`).join('');
}

function openParts() {
  renderParts();
  $('#partsDialog').showModal();
  setTimeout(() => $('#partsSearch').focus(), 100);
}

function setupPartsDialog() {
  $('#openParts')?.addEventListener('click', openParts);
  $('#openPartsHero')?.addEventListener('click', openParts);
  $('#closeParts')?.addEventListener('click', () => $('#partsDialog').close());
  $('#partsSearch')?.addEventListener('input', e => renderParts(e.target.value));
}

function setupMenu() {
  $('#menuBtn')?.addEventListener('click', () => $('#nav').classList.toggle('open'));
  $$('#nav a').forEach(a => a.addEventListener('click', () => $('#nav').classList.remove('open')));
}

function drawModel() {
  const canvas = $('#modelCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.clientWidth || 700;
  const h = canvas.clientHeight || 420;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,w,h);

  const grad = ctx.createRadialGradient(w*.72,h*.18,10,w*.72,h*.18,w*.48);
  grad.addColorStop(0,'rgba(231,201,121,.18)');
  grad.addColorStop(1,'transparent');
  ctx.fillStyle = '#10100d';
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,w,h);

  const s = Math.min(w/760, h/460);
  const ox = w*.5 - 260*s;
  const oy = h*.55 - 70*s;
  ctx.save();
  ctx.translate(ox, oy);
  ctx.scale(s,s);

  const body = ctx.createLinearGradient(0,-50,480,120);
  body.addColorStop(0,'#e7c979');
  body.addColorStop(1,'#977a34');
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.moveTo(40,96); ctx.lineTo(110,-45); ctx.lineTo(340,-48); ctx.lineTo(470,56); ctx.lineTo(430,112); ctx.lineTo(60,112); ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#d7d1bc';
  ctx.beginPath(); ctx.moveTo(92,-45); ctx.lineTo(205,-45); ctx.lineTo(245,30); ctx.lineTo(42,30); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(10,12,14,.82)'; ctx.fillRect(120,-30,82,42);
  ctx.fillStyle = 'rgba(255,255,255,.15)'; ctx.fillRect(260,-25,95,54);
  ctx.strokeStyle = 'rgba(245,239,227,.35)'; ctx.lineWidth=9;
  ctx.beginPath(); ctx.moveTo(455,38); ctx.quadraticCurveTo(560,-12,620,62); ctx.stroke();

  ctx.fillStyle = '#ae842d';
  ctx.beginPath(); ctx.moveTo(-95,78); ctx.lineTo(38,18); ctx.lineTo(92,42); ctx.lineTo(-45,128); ctx.closePath(); ctx.fill();

  wheel(ctx,150,140,60);
  wheel(ctx,385,138,42);

  const p = demoParts[state.selected];
  const px = (p.x/100)*650 - 90;
  const py = (p.y/100)*260 - 50;
  const glow = ctx.createRadialGradient(px,py,4,px,py,55);
  glow.addColorStop(0,'rgba(157,221,68,.95)');
  glow.addColorStop(.35,'rgba(157,221,68,.28)');
  glow.addColorStop(1,'transparent');
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.arc(px,py,55,0,Math.PI*2); ctx.fill();
  ctx.fillStyle = '#9ddd44';
  ctx.beginPath(); ctx.arc(px,py,7,0,Math.PI*2); ctx.fill();

  ctx.restore();
  $('#pin').textContent = p.name;
  $('#pin').style.left = p.x + '%';
  $('#pin').style.top = p.y + '%';
}

function wheel(ctx,x,y,r) {
  ctx.save();
  ctx.translate(x,y);
  ctx.fillStyle = '#080807';
  ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle = 'rgba(245,239,227,.25)';
  ctx.lineWidth = 7;
  ctx.stroke();
  for(let i=0;i<8;i++) {
    ctx.rotate(Math.PI/4);
    ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(r*.72,0); ctx.stroke();
  }
  ctx.restore();
}

function setupModel() {
  const wrap = $('#partButtons');
  wrap.innerHTML = demoParts.map((p,i) => `<button class="${i===0?'active':''}" type="button" data-i="${i}">${p.name}</button>`).join('');
  $$('#partButtons button').forEach(btn => btn.addEventListener('click', () => {
    state.selected = Number(btn.dataset.i);
    $$('#partButtons button').forEach(b => b.classList.toggle('active', b === btn));
    drawModel();
  }));
  window.addEventListener('resize', drawModel);
  drawModel();
}

async function setupFirebase() {
  if (!enableFirebase) return;
  try {
    const [appMod, dbMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
    ]);
    const app = appMod.initializeApp(firebaseConfig);
    state.db = dbMod.getFirestore(app);
    state.firebase = dbMod;
  } catch (e) {
    console.warn(e);
  }
}

function setupForm() {
  $('#enquiryForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    data.createdAtClient = new Date().toISOString();
    const status = $('#status');
    status.className = 'status';
    status.textContent = 'Submitting...';
    try {
      if (state.db && state.firebase) {
        await state.firebase.addDoc(state.firebase.collection(state.db, enquiriesCollection), {
          ...data,
          createdAt: state.firebase.serverTimestamp()
        });
      } else {
        const saved = JSON.parse(localStorage.getItem('newHiraEnquiries') || '[]');
        saved.push(data);
        localStorage.setItem('newHiraEnquiries', JSON.stringify(saved));
      }
      status.classList.add('success');
      status.textContent = 'Enquiry submitted. New Hira will contact you soon.';
      e.currentTarget.reset();
    } catch (err) {
      status.classList.add('error');
      status.textContent = err.message;
    }
  });
}

async function shareSite() {
  try {
    if (navigator.share) await navigator.share({ title:'New Hira', text:'New Hira combine harvester', url:location.href });
    else {
      await navigator.clipboard.writeText(location.href);
      alert('Website link copied');
    }
  } catch {}
}

function setupActions() {
  $('#shareBtn')?.addEventListener('click', shareSite);
  const top = $('#toTop');
  window.addEventListener('scroll', () => top.classList.toggle('show', window.scrollY > 600), { passive:true });
  top?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  setupPartsDialog();
  setupModel();
  setupForm();
  setupActions();
  setupFirebase();
});
