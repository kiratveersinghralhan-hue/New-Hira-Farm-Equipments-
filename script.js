import { enableFirebase, firebaseConfig, enquiriesCollection } from './firebase-config.js';

const parts = ["Guide Drum Shaft", "Bearing 6311", "Bearing 6208", "Bearing 6205", "Bearing UCF 207", "Bearing 206 UC", "Thresher Pulley Lock", "Rubber Seal 45-62-10", "Rubber Seal 40-80-10", "Rubber Bush Large", "Steering Jack Kit", "High Low Jack Kit", "Distributor / Control Valve Kit", "Hydraulic Pipe Steering Jack 24 inch", "Axle Couplings", "Small Axle", "Large Axle", "External Lock M-42", "Main Housing Puller", "Elevator Chain Lock", "Feeding Chain Lock", "Cutter Bar Fingers", "Blade Strip", "Blade Class", "Reel Tines", "Blade Head", "Blade Head Bush", "Reel Bush", "Fish Bush", "Blade Rivets", "D.E. Spanner Set", "Ring Spanner Set", "Socket Set", "W.P. Plier", "Allen Key Set", "Centre Punch", "Chisel", "Wheel Spanner Leyland", "Pipe Wrench 18 inch", "Bench Vice No.1", "Oil Can", "Circlip Plier Outer 7 inch", "Circlip Plier Inner 7 inch", "Hammer 2 lb", "Hammer 4 lb", "Three Legs Bearing Puller", "Round File 10 inch", "Flat File 12 inch", "Plier 10 inch", "Hexa Frame", "Hexa Blade", "Grease Gun 12 inch", "Grease Gun Nipple Kit", "Grease Pipe 8MM 12 inch", "Grease Pipe 6MM 12 inch", "Screw Driver", "Mechanical Jack", "Mechanical Jack Rod", "Nuts Bolts All Sizes", "Split Pins All Sizes", "Thrasher Spikes", "Thrasher Drum Paddy/Wheat", "Concave Assembly Paddy/Wheat", "Cutter Puller", "Water Cool Cage", "Tool Box", "Array Straw Walker Blade"];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const state = { db:null, firebase:null };

function renderParts(filter='') {
  const q = filter.toLowerCase().trim();
  const list = $('#partsList');
  if (!list) return;
  const shown = parts.filter(p => !q || p.toLowerCase().includes(q));
  list.innerHTML = shown.map((p) => `
    <button type="button">
      <strong>${p}</strong>
      <small>New Hira listed spare part / toolkit item</small>
    </button>
  `).join('');
}

function openParts() {
  renderParts();
  $('#partsDialog')?.showModal();
  setTimeout(() => $('#partsSearch')?.focus(), 120);
}

function setupPartsDialog() {
  $('#openParts')?.addEventListener('click', openParts);
  $('#openPartsHero')?.addEventListener('click', openParts);
  $('#closeParts')?.addEventListener('click', () => $('#partsDialog')?.close());
  $('#partsSearch')?.addEventListener('input', e => renderParts(e.target.value));
}

function setupMenu() {
  $('#menuBtn')?.addEventListener('click', () => $('#nav')?.classList.toggle('open'));
  $$('#nav a').forEach(a => a.addEventListener('click', () => $('#nav')?.classList.remove('open')));
}

function closeIntro() {
  const intro = $('#introOverlay');
  if (!intro || intro.classList.contains('hide')) return;
  intro.classList.add('hide');
  intro.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('intro-lock');
}

function setupIntro() {
  $('#introSkip')?.addEventListener('click', closeIntro);
  setTimeout(closeIntro, 2900);
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
    if (navigator.share) {
      await navigator.share({
        title:'New Hira',
        text:'New Hira combine harvester advertisement website',
        url:location.href
      });
    } else {
      await navigator.clipboard.writeText(location.href);
      alert('Website link copied');
    }
  } catch {}
}

function setupActions() {
  const top = $('#toTop');
  const onScroll = () => top?.classList.toggle('show', window.scrollY > 520);
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
  top?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  $('#shareBtn')?.addEventListener('click', shareSite);
}

document.addEventListener('DOMContentLoaded', () => {
  setupIntro();
  setupMenu();
  setupPartsDialog();
  setupForm();
  setupActions();
  setupFirebase();
});
