import { enableFirebase, firebaseConfig, enquiriesCollection, usersCollection } from './firebase-config.js';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const els = {
  intro: $('#intro'),
  introCanvas: $('#introCanvas'),
  heroCanvas: $('#heroCanvas'),
  menuButton: $('#menuButton'),
  mainNav: $('#mainNav'),
  shareButton: $('#shareButton'),
  shareFloat: $('#shareFloat'),
  authOpen: $('#authOpen'),
  authOpen2: $('#authOpen2'),
  authDialog: $('#authDialog'),
  authEmail: $('#authEmail'),
  authPassword: $('#authPassword'),
  loginSubmit: $('#loginSubmit'),
  signupSubmit: $('#signupSubmit'),
  logoutButton: $('#logoutButton'),
  authMessage: $('#authMessage'),
  authStatus: $('#authStatus'),
  threeContainer: $('#threeContainer'),
  partLabels: $('#partLabels'),
  viewerLoading: $('#viewerLoading'),
  partSearch: $('#partSearch'),
  partList: $('#partList'),
  guideGrid: $('#guideGrid'),
  selectedPartTitle: $('#selectedPartTitle'),
  partFunction: $('#partFunction'),
  partIssue: $('#partIssue'),
  partRepair: $('#partRepair'),
  enquiryPart: $('#enquiryPart'),
  resetView: $('#resetView'),
  toggleLabels: $('#toggleLabels'),
  offerRange: $('#offerRange'),
  offerDisplay: $('#offerDisplay'),
  enquiryOffer: $('#enquiryOffer'),
  enquiryForm: $('#enquiryForm'),
  formStatus: $('#formStatus')
};

const appState = {
  firebaseReady: false,
  db: null,
  auth: null,
  user: null,
  labelsVisible: true,
  selectedPart: null,
  offer: 100000,
  three: null,
  controls: null,
  camera: null,
  scene: null,
  renderer: null,
  partObjects: new Map(),
  labelNodes: new Map(),
  originalMaterials: new Map()
};

const parts = [
  {
    id: 'cutter_blades',
    name: 'Cutter Blades',
    aliases: ['blade', 'knife', 'cutter', 'cutting section'],
    category: 'Cutting',
    position: [-4.5, -0.65, 1.15],
    functionText: 'Cutter blades slice the crop at the header so the reel can feed it into the machine smoothly.',
    issue: 'Dull, bent or broken blades cause uneven cutting, missed crop and extra load on the header.',
    repair: 'Stop engine, lock header safely, wear gloves, remove guard/bolts, replace damaged blade sections, tighten to correct torque, then rotate the cutter manually to check free movement.'
  },
  {
    id: 'reel_fingers',
    name: 'Reel Fingers',
    aliases: ['finger', 'reel tine', 'crop finger'],
    category: 'Feeding',
    position: [-4.2, 0.05, 1.3],
    functionText: 'Reel fingers guide standing crop into the cutter bar and feeding auger.',
    issue: 'Bent or missing fingers make crop feeding uneven and can create bunching near the header.',
    repair: 'Lower header, secure reel, remove retaining clip/bolt, replace damaged finger, align with nearby fingers and rotate reel slowly to confirm clearance.'
  },
  {
    id: 'main_shaft',
    name: 'Main Shaft',
    aliases: ['shaft', 'drive shaft', 'main drive'],
    category: 'Drive',
    position: [-1.2, 0.25, 0],
    functionText: 'The main shaft transfers drive power through the machine to important rotating assemblies.',
    issue: 'Vibration, noise, bearing heat or misalignment can indicate shaft wear or coupling issues.',
    repair: 'Disconnect power, remove guards, mark coupler position, loosen bearing blocks, inspect shaft runout, replace worn bearings/couplers and realign before tightening.'
  },
  {
    id: 'thresher_drum',
    name: 'Thresher / Ga-Drum',
    aliases: ['thresher', 'drum', 'ga drum', 'gadrum', 'threshing drum'],
    category: 'Threshing',
    position: [-0.35, 0.22, 0.2],
    functionText: 'The thresher drum separates grain from the crop by rubbing and beating crop against the concave.',
    issue: 'Poor threshing, cracked grain or excessive loss can come from wrong clearance, worn rasp bars or imbalance.',
    repair: 'Open inspection cover, lock drum, clean packed material, inspect rasp bars and concave, replace worn elements in matched sets and check clearance before running.'
  },
  {
    id: 'belt_pulley',
    name: 'Belt Pulley',
    aliases: ['belt', 'pulley', 'v belt', 'belt drive'],
    category: 'Drive',
    position: [1.15, 0.25, 1.05],
    functionText: 'Belt and pulley assemblies transfer rotation from the engine/drive system to machine functions.',
    issue: 'Slipping, squealing, cracks or heat show belt tension or pulley alignment problems.',
    repair: 'Stop engine, remove guard, loosen tensioner, remove belt, inspect pulley grooves, fit correct belt, align pulleys and adjust tension to specification.'
  },
  {
    id: 'engine',
    name: 'Engine',
    aliases: ['motor', 'diesel engine', 'power'],
    category: 'Power',
    position: [1.0, 0.45, -0.95],
    functionText: 'The engine provides power for travel, threshing, cleaning, hydraulics and unloading operations.',
    issue: 'Overheating, smoke, low power or hard starting can indicate filter, cooling, fuel or service issues.',
    repair: 'Check oil/coolant, clean radiator, replace air/fuel filters, inspect belts and wiring, then call service team if abnormal noise, smoke or overheating continues.'
  },
  {
    id: 'grain_tank',
    name: 'Grain Tank',
    aliases: ['tank', 'hopper', 'grain box'],
    category: 'Storage',
    position: [0.85, 1.05, 0.05],
    functionText: 'The grain tank stores cleaned grain before unloading into a trailer or trolley.',
    issue: 'Slow unloading, grain leakage or contamination may indicate auger, door or seal problems.',
    repair: 'Empty tank, clean dust, inspect tank floor and auger intake, check seals and panels, tighten fasteners and replace worn flighting if needed.'
  },
  {
    id: 'unloading_auger',
    name: 'Unloading Auger',
    aliases: ['auger', 'grain auger', 'unloader'],
    category: 'Unloading',
    position: [2.95, 0.95, -0.35],
    functionText: 'The unloading auger moves grain from the grain tank into a trolley or transport vehicle.',
    issue: 'Low unloading speed, rattling or blockage can happen due to worn flighting, bearing damage or wet grain blockage.',
    repair: 'Disengage drive, empty grain, open access cover, clear blockage, inspect bearing and flighting, replace damaged parts and test at low speed first.'
  },
  {
    id: 'straw_walkers',
    name: 'Straw Walkers',
    aliases: ['walker', 'straw walker', 'separation'],
    category: 'Separation',
    position: [0.65, -0.1, -1.15],
    functionText: 'Straw walkers shake crop residue to separate remaining grain before straw exits the machine.',
    issue: 'High grain loss from rear or broken straw can indicate walker damage, blockage or speed/setting issue.',
    repair: 'Open rear access, clean walkers, inspect bearings and keys, check for cracks, repair/replace damaged walker sections and verify smooth oscillation.'
  },
  {
    id: 'sieves',
    name: 'Cleaning Sieves',
    aliases: ['sieve', 'cleaning shoe', 'chaffer'],
    category: 'Cleaning',
    position: [0.1, -0.55, -0.85],
    functionText: 'Sieves clean grain by separating grain from chaff using airflow and shaking motion.',
    issue: 'Dirty grain or grain loss can come from blocked sieves, wrong opening or fan setting.',
    repair: 'Stop fan, remove access panel, clean sieve openings, check adjustment, inspect shaking linkage and set openings according to crop.'
  },
  {
    id: 'front_tyre',
    name: 'Front Tyre / Wheel',
    aliases: ['front tyre', 'front tire', 'wheel'],
    category: 'Movement',
    position: [-1.55, -1.2, 1.05],
    functionText: 'The front wheel carries major load and provides field movement and traction.',
    issue: 'Low pressure, cracks, wobble or uneven wear can affect steering and field traction.',
    repair: 'Park on level ground, chock machine, lift safely, check pressure and rim nuts, inspect tyre sidewall, replace only with correct load-rated tyre.'
  },
  {
    id: 'rear_tyre',
    name: 'Rear Tyre / Steering Wheel',
    aliases: ['rear tyre', 'rear tire', 'steering wheel'],
    category: 'Movement',
    position: [1.75, -1.12, 1.0],
    functionText: 'The rear wheel supports steering and rear stability while operating in the field.',
    issue: 'Loose steering, tyre wobble or linkage play can affect control during field movement.',
    repair: 'Inspect wheel nuts, steering linkages and bearings. Replace worn bearing or tie-rod part, grease points and test steering slowly.'
  }
];

function inr(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function safe(fn, label) {
  try { return fn(); } catch (err) { console.error('New Hira error:', label, err); }
}

function revealAll() {
  $$('.reveal').forEach((el) => el.classList.add('visible'));
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach((el) => observer.observe(el));
  setTimeout(revealAll, 900);
}

function setupMenu() {
  els.menuButton?.addEventListener('click', () => {
    const open = els.mainNav.classList.toggle('open');
    els.menuButton.setAttribute('aria-expanded', String(open));
  });
  $$('#mainNav a').forEach((a) => a.addEventListener('click', () => els.mainNav.classList.remove('open')));
}

function setupShare() {
  async function share() {
    const data = {
      title: 'New Hira Combine Harvester',
      text: 'Check New Hira 360° combine harvester parts finder.',
      url: location.href
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(location.href);
        alert('Website link copied.');
      }
    } catch {}
  }
  els.shareButton?.addEventListener('click', share);
  els.shareFloat?.addEventListener('click', share);
}

function setupOffer() {
  const update = () => {
    appState.offer = Number(els.offerRange.value);
    const amount = inr(appState.offer);
    els.offerDisplay.textContent = amount;
    els.enquiryOffer.value = amount;
  };
  els.offerRange?.addEventListener('input', update);
  update();
}

function setupIntroCanvas() {
  const canvas = els.introCanvas;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  function resize() {
    dpr = Math.max(1, devicePixelRatio || 1);
    w = canvas.clientWidth || innerWidth;
    h = canvas.clientHeight || innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  addEventListener('resize', resize);

  function machine(ctx, x, y, s, t) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    ctx.fillStyle = '#f6a13a';
    ctx.beginPath();
    ctx.moveTo(-160, 35); ctx.lineTo(-110, -55); ctx.lineTo(90, -58); ctx.lineTo(170, 20); ctx.lineTo(145, 55); ctx.lineTo(-130, 55); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#dfe4e0';
    ctx.beginPath(); ctx.moveTo(-105, -58); ctx.lineTo(-12, -58); ctx.lineTo(20, 0); ctx.lineTo(-130, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(5,8,12,.75)';
    ctx.fillRect(-82, -45, 78, 38);
    ctx.fillStyle = 'rgba(255,255,255,.18)';
    ctx.fillRect(30, -34, 70, 44);
    ctx.strokeStyle = 'rgba(255,255,255,.32)';
    ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(158, 0); ctx.quadraticCurveTo(230, -28, 285, 30); ctx.stroke();
    ctx.fillStyle = '#db7d24';
    ctx.beginPath(); ctx.moveTo(-205, 32); ctx.lineTo(-160, 0); ctx.lineTo(-128, 20); ctx.lineTo(-185, 55); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.22)';
    ctx.lineWidth = 4;
    for (let i=0;i<10;i++) { ctx.beginPath(); ctx.moveTo(-225+i*12, 42); ctx.lineTo(-205+i*12, 20 + Math.sin(t/300+i)*4); ctx.stroke(); }
    wheel(ctx, -72, 72, 43, t/240);
    wheel(ctx, 105, 72, 31, t/240);
    ctx.restore();
  }
  function wheel(ctx, x, y, r, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.fillStyle = '#0a0d11'; ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.24)'; ctx.lineWidth = 6; ctx.stroke();
    for (let i=0;i<8;i++){ ctx.rotate(Math.PI/4); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(r*.72,0); ctx.stroke(); }
    ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.beginPath(); ctx.arc(0,0,r*.32,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }
  function frame(t) {
    ctx.clearRect(0,0,w,h);
    const bg = ctx.createLinearGradient(0,0,0,h);
    bg.addColorStop(0,'#08090c'); bg.addColorStop(.55,'#11100e'); bg.addColorStop(1,'#2a190d');
    ctx.fillStyle = bg; ctx.fillRect(0,0,w,h);
    const sun = ctx.createRadialGradient(w*.72,h*.28,10,w*.72,h*.28,w*.34);
    sun.addColorStop(0,'rgba(255,199,116,.45)'); sun.addColorStop(.35,'rgba(255,122,28,.18)'); sun.addColorStop(1,'transparent');
    ctx.fillStyle = sun; ctx.fillRect(0,0,w,h);
    ctx.strokeStyle = 'rgba(255,255,255,.065)'; ctx.lineWidth = 1;
    for (let i=0;i<18;i++){ ctx.beginPath(); ctx.moveTo((i/18)*w, h*.76); ctx.lineTo(w*.5, h); ctx.stroke(); }
    const x = (t/8 % (w+620)) - 310;
    machine(ctx, x, h*.66, Math.min(1.1, Math.max(.72, w/900)), t);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function setupHeroCanvas() {
  const canvas = els.heroCanvas;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  function resize() {
    dpr = Math.max(1, devicePixelRatio || 1);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  addEventListener('resize', resize);
  function frame(t) {
    ctx.clearRect(0,0,w,h);
    const grad = ctx.createLinearGradient(0,0,0,h);
    grad.addColorStop(0,'#10161e'); grad.addColorStop(1,'#080a0f');
    ctx.fillStyle = grad; ctx.fillRect(0,0,w,h);
    const glow = ctx.createRadialGradient(w*.72,h*.18,20,w*.72,h*.18,w*.42);
    glow.addColorStop(0,'rgba(243,180,91,.36)'); glow.addColorStop(1,'transparent');
    ctx.fillStyle = glow; ctx.fillRect(0,0,w,h);
    ctx.fillStyle = 'rgba(243,180,91,.13)'; ctx.fillRect(0,h*.72,w,h*.28);
    ctx.strokeStyle = 'rgba(255,255,255,.05)';
    for(let i=0;i<18;i++){ctx.beginPath();ctx.moveTo(i*w/17,h*.72);ctx.lineTo(w*.5,h);ctx.stroke();}
    drawHarvester2D(ctx, w*.16, h*.47 + Math.sin(t*.002)*5, Math.min(1.2, w/600), t);
    ctx.fillStyle = 'rgba(255,255,255,.9)';
    ctx.font = '800 34px Manrope'; ctx.fillText('NEW HIRA', w*.08, h*.13);
    ctx.font = '600 13px Inter'; ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.fillText('360° PARTS FINDER', w*.08, h*.18);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function drawHarvester2D(ctx, x, y, s, t) {
  ctx.save(); ctx.translate(x,y); ctx.scale(s,s);
  const body = ctx.createLinearGradient(0,-60,310,70); body.addColorStop(0,'#f3b45b'); body.addColorStop(1,'#ff7a1c');
  ctx.fillStyle = body;
  ctx.beginPath(); ctx.moveTo(20,60); ctx.lineTo(75,-55); ctx.lineTo(250,-58); ctx.lineTo(340,35); ctx.lineTo(310,70); ctx.lineTo(35,70); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#dce2de'; ctx.beginPath(); ctx.moveTo(65,-54); ctx.lineTo(158,-54); ctx.lineTo(185,12); ctx.lineTo(30,12); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#17202a'; ctx.fillRect(88,-40,74,38);
  ctx.fillStyle = 'rgba(255,255,255,.15)'; ctx.fillRect(196,-33,74,42); ctx.fillRect(278,7,48,28);
  ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(332,18); ctx.quadraticCurveTo(420,-20,480,52); ctx.stroke();
  ctx.fillStyle = '#e68829'; ctx.beginPath(); ctx.moveTo(-65,40); ctx.lineTo(25,2); ctx.lineTo(66,22); ctx.lineTo(-30,75); ctx.closePath(); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.fillRect(-82,40,130,14);
  drawWheel2D(ctx,100,90,52,t*.004); drawWheel2D(ctx,280,88,36,t*.004);
  ctx.restore();
}
function drawWheel2D(ctx,x,y,r,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.fillStyle='#090b0f';ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(255,255,255,.25)';ctx.lineWidth=6;ctx.stroke();for(let i=0;i<8;i++){ctx.rotate(Math.PI/4);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(r*.72,0);ctx.stroke();}ctx.fillStyle='rgba(255,255,255,.17)';ctx.beginPath();ctx.arc(0,0,r*.35,0,Math.PI*2);ctx.fill();ctx.restore();}

function renderPartsList(filter = '') {
  const q = filter.trim().toLowerCase();
  const filtered = parts.filter((part) => {
    return !q || part.name.toLowerCase().includes(q) || part.aliases.some((a) => a.includes(q)) || part.category.toLowerCase().includes(q);
  });
  els.partList.innerHTML = filtered.map((part) => `
    <button class="partItem ${appState.selectedPart === part.id ? 'active' : ''}" type="button" data-part="${part.id}">
      <strong>${part.name}</strong>
      <span>${part.category} • ${part.aliases.slice(0, 3).join(', ')}</span>
    </button>
  `).join('');
  $$('.partItem').forEach((button) => button.addEventListener('click', () => selectPart(button.dataset.part)));
}

function renderGuide() {
  els.guideGrid.innerHTML = parts.map((part) => `
    <article class="guideCard reveal">
      <span class="tag">${part.category}</span>
      <h3>${part.name}</h3>
      <p>${part.functionText}</p>
      <ul>
        <li><strong>Problem:</strong> ${part.issue}</li>
        <li><strong>Repair:</strong> ${part.repair}</li>
      </ul>
    </article>
  `).join('');
  revealAll();
}

function updateDetails(part) {
  els.selectedPartTitle.textContent = part.name;
  els.partFunction.textContent = part.functionText;
  els.partIssue.textContent = part.issue;
  els.partRepair.textContent = part.repair;
  els.enquiryPart.value = part.name;
}

async function setup3D() {
  const THREE = await import('three');
  const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
  appState.three = THREE;
  const container = els.threeContainer;
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x080a0f, 9, 28);
  const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(6, 4.2, 7.2);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.prepend(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.target.set(0, 0, 0);
  controls.maxDistance = 14;
  controls.minDistance = 4.5;

  scene.add(new THREE.HemisphereLight(0xffedd2, 0x12151d, 1.3));
  const key = new THREE.DirectionalLight(0xffd39a, 2.6);
  key.position.set(4, 8, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fd6ff, 1.2);
  rim.position.set(-5, 3, -6);
  scene.add(rim);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(8, 96),
    new THREE.MeshStandardMaterial({ color: 0x161312, roughness: 0.88, metalness: 0.05 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.55;
  scene.add(ground);

  buildCombineModel(THREE, scene);
  appState.scene = scene;
  appState.camera = camera;
  appState.renderer = renderer;
  appState.controls = controls;
  els.viewerLoading.style.display = 'none';

  parts.forEach((part) => {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'partLabel';
    node.textContent = part.name;
    node.style.pointerEvents = 'auto';
    node.addEventListener('click', () => selectPart(part.id));
    els.partLabels.appendChild(node);
    appState.labelNodes.set(part.id, node);
  });

  function resize() {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  renderer.domElement.addEventListener('pointerdown', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([...appState.partObjects.values()], true);
    if (hits[0]?.object?.userData?.partId) selectPart(hits[0].object.userData.partId);
  });

  function animate() {
    controls.update();
    renderer.render(scene, camera);
    updateLabels(THREE);
    requestAnimationFrame(animate);
  }
  animate();
}

function material(THREE, color, metalness = 0.15, roughness = 0.55) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness });
}

function box(THREE, scene, name, size, pos, color, partId = null) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material(THREE, color));
  mesh.position.set(...pos);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  if (partId) {
    mesh.userData.partId = partId;
    appState.partObjects.set(partId, mesh);
    appState.originalMaterials.set(partId, mesh.material);
  }
  scene.add(mesh);
  return mesh;
}

function cyl(THREE, scene, partId, radiusTop, radiusBot, depth, pos, rot, color) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBot, depth, 48), material(THREE, color));
  mesh.position.set(...pos);
  mesh.rotation.set(...rot);
  if (partId) {
    mesh.userData.partId = partId;
    appState.partObjects.set(partId, mesh);
    appState.originalMaterials.set(partId, mesh.material);
  }
  scene.add(mesh);
  return mesh;
}

function buildCombineModel(THREE, scene) {
  const orange = 0xff8a24;
  const gold = 0xf3b45b;
  const steel = 0xabb1b7;
  const dark = 0x11151b;
  box(THREE, scene, 'body', [3.8, 1.4, 2.0], [0.1, 0, 0], orange);
  box(THREE, scene, 'grain_tank', [1.8, .9, 1.5], [.95, 1.05, .02], 0xd88127, 'grain_tank');
  box(THREE, scene, 'engine', [1.1, .75, .9], [1.0, .45, -0.95], 0x555e67, 'engine');
  const cabin = box(THREE, scene, 'cabin', [1.25, 1.25, 1.2], [-1.3, .65, .25], 0xdfe5e0);
  cabin.material = new THREE.MeshStandardMaterial({ color: 0xdfe5e0, metalness: .06, roughness: .4 });
  box(THREE, scene, 'window', [.9, .78, 1.24], [-1.34, .74, .28], 0x17202a);
  box(THREE, scene, 'header', [1.65, .38, 2.55], [-4.15, -.82, .38], gold, 'cutter_blades');
  cyl(THREE, scene, 'reel_fingers', .22, .22, 2.55, [-4.25, -.24, .75], [Math.PI/2, 0, 0], 0xffc06d);
  for (let i = -5; i <= 5; i++) {
    const tine = box(THREE, scene, 'finger', [.05, .55, .04], [-4.25, -.22, .75 + i*.22], 0xffe0a8);
    tine.rotation.x = Math.PI * .1;
    tine.userData.partId = 'reel_fingers';
  }
  cyl(THREE, scene, 'main_shaft', .11, .11, 2.45, [-1.2, .25, 0], [Math.PI/2, 0, 0], steel);
  cyl(THREE, scene, 'thresher_drum', .48, .48, 1.6, [-.35, .22, .2], [Math.PI/2, 0, 0], 0x8f969c);
  cyl(THREE, scene, 'belt_pulley', .38, .38, .18, [1.15, .25, 1.05], [Math.PI/2, 0, 0], 0x303943);
  cyl(THREE, scene, null, .24, .24, .18, [1.8, .58, 1.05], [Math.PI/2, 0, 0], 0x303943);
  box(THREE, scene, 'belt', [.08, .08, 1.2], [1.46, .42, 1.05], 0x0a0d10);
  box(THREE, scene, 'straw_walkers', [1.8, .25, .9], [.65, -.1, -1.15], 0xc9924b, 'straw_walkers');
  box(THREE, scene, 'sieves', [1.65, .18, .85], [.1, -.55, -.85], 0x7b858f, 'sieves');
  cyl(THREE, scene, 'unloading_auger', .13, .13, 2.55, [2.95, .95, -.35], [0.65, 0, 1.2], steel);
  cyl(THREE, scene, 'front_tyre', .72, .72, .55, [-1.55, -1.2, 1.05], [Math.PI/2, 0, 0], dark);
  cyl(THREE, scene, null, .36, .36, .58, [-1.55, -1.2, 1.05], [Math.PI/2, 0, 0], 0x626a72);
  cyl(THREE, scene, 'rear_tyre', .48, .48, .38, [1.75, -1.12, 1.0], [Math.PI/2, 0, 0], dark);
  cyl(THREE, scene, null, .23, .23, .40, [1.75, -1.12, 1.0], [Math.PI/2, 0, 0], 0x626a72);
}

function updateLabels(THREE) {
  if (!appState.camera || !appState.labelsVisible) {
    els.partLabels.style.display = appState.labelsVisible ? 'block' : 'none';
    return;
  }
  els.partLabels.style.display = 'block';
  const rect = els.threeContainer.getBoundingClientRect();
  parts.forEach((part) => {
    const node = appState.labelNodes.get(part.id);
    const vector = new THREE.Vector3(...part.position).project(appState.camera);
    const x = (vector.x * 0.5 + 0.5) * rect.width;
    const y = (-vector.y * 0.5 + 0.5) * rect.height;
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.opacity = vector.z < 1 ? '1' : '0';
    node.classList.toggle('active', appState.selectedPart === part.id);
  });
}

function selectPart(id) {
  const part = parts.find((p) => p.id === id);
  if (!part) return;
  appState.selectedPart = id;
  updateDetails(part);
  renderPartsList(els.partSearch.value || '');
  if (appState.three && appState.camera && appState.controls) {
    const THREE = appState.three;
    appState.partObjects.forEach((mesh, meshId) => {
      mesh.material = appState.originalMaterials.get(meshId) || mesh.material;
    });
    const mesh = appState.partObjects.get(id);
    if (mesh) {
      mesh.material = new THREE.MeshStandardMaterial({ color: 0x6be284, emissive: 0x1a6f34, metalness: .25, roughness: .3 });
    }
    const target = new THREE.Vector3(...part.position);
    appState.controls.target.copy(target);
    appState.camera.position.lerp(new THREE.Vector3(target.x + 4, target.y + 2.5, target.z + 4), .65);
    appState.controls.update();
  }
}

function setupParts() {
  renderPartsList();
  renderGuide();
  els.partSearch?.addEventListener('input', (e) => renderPartsList(e.target.value));
  els.resetView?.addEventListener('click', () => {
    if (!appState.camera || !appState.controls) return;
    appState.camera.position.set(6, 4.2, 7.2);
    appState.controls.target.set(0, 0, 0);
    appState.controls.update();
  });
  els.toggleLabels?.addEventListener('click', () => {
    appState.labelsVisible = !appState.labelsVisible;
    els.toggleLabels.textContent = appState.labelsVisible ? 'Labels on' : 'Labels off';
    els.partLabels.style.display = appState.labelsVisible ? 'block' : 'none';
  });
}

function setupFallback3D() {
  els.viewerLoading.textContent = '3D library could not load. Parts search still works.';
  els.threeContainer.style.minHeight = '320px';
}

async function setupFirebase() {
  if (!enableFirebase) return;
  try {
    const [{ initializeApp }, authMod, dbMod] = await Promise.all([
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js')
    ]);
    const app = initializeApp(firebaseConfig);
    appState.auth = authMod.getAuth(app);
    appState.db = dbMod.getFirestore(app);
    appState.firebase = { ...authMod, ...dbMod };
    appState.firebaseReady = true;
    authMod.onAuthStateChanged(appState.auth, (user) => {
      appState.user = user;
      els.authStatus.textContent = user ? `Logged in: ${user.email}` : 'Not logged in';
      els.authStatus.style.color = user ? 'var(--green)' : 'var(--muted)';
    });
  } catch (error) {
    console.error(error);
    els.authStatus.textContent = 'Firebase not available yet. Enable Auth and check connection.';
  }
}

function setupAuth() {
  function openAuth() {
    if (els.authDialog?.showModal) els.authDialog.showModal();
  }
  els.authOpen?.addEventListener('click', openAuth);
  els.authOpen2?.addEventListener('click', openAuth);

  async function doAuth(mode) {
    els.authMessage.className = 'authMessage';
    const email = els.authEmail.value.trim();
    const password = els.authPassword.value;
    if (!email || password.length < 6) {
      els.authMessage.classList.add('error');
      els.authMessage.textContent = 'Enter email and password with at least 6 characters.';
      return;
    }
    try {
      if (!appState.firebaseReady) throw new Error('Firebase not ready');
      if (mode === 'login') await appState.firebase.signInWithEmailAndPassword(appState.auth, email, password);
      else {
        const result = await appState.firebase.createUserWithEmailAndPassword(appState.auth, email, password);
        await appState.firebase.setDoc(appState.firebase.doc(appState.db, usersCollection, result.user.uid), {
          email,
          createdAt: appState.firebase.serverTimestamp()
        }, { merge: true });
      }
      els.authMessage.classList.add('success');
      els.authMessage.textContent = mode === 'login' ? 'Logged in successfully.' : 'Account created successfully.';
      setTimeout(() => els.authDialog.close(), 700);
    } catch (error) {
      els.authMessage.classList.add('error');
      els.authMessage.textContent = error.message.replace('Firebase: ', '');
    }
  }
  els.loginSubmit?.addEventListener('click', () => doAuth('login'));
  els.signupSubmit?.addEventListener('click', () => doAuth('signup'));
  els.logoutButton?.addEventListener('click', async () => {
    if (appState.auth && appState.firebase?.signOut) await appState.firebase.signOut(appState.auth);
  });
}

function setupEnquiry() {
  els.enquiryForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(els.enquiryForm).entries());
    data.createdAtClient = new Date().toISOString();
    data.userEmail = appState.user?.email || 'Guest';
    data.userId = appState.user?.uid || null;
    els.formStatus.className = 'formStatus';
    els.formStatus.textContent = 'Submitting enquiry...';

    try {
      if (appState.firebaseReady && appState.db) {
        await appState.firebase.addDoc(appState.firebase.collection(appState.db, enquiriesCollection), {
          ...data,
          createdAt: appState.firebase.serverTimestamp()
        });
        els.formStatus.classList.add('success');
        els.formStatus.textContent = 'Enquiry submitted. Check Firestore collection harvester_enquiries.';
      } else {
        const saved = JSON.parse(localStorage.getItem('newHiraEnquiries') || '[]');
        saved.push(data);
        localStorage.setItem('newHiraEnquiries', JSON.stringify(saved));
        els.formStatus.classList.add('success');
        els.formStatus.textContent = 'Firebase unavailable, enquiry saved locally for testing.';
      }
      els.enquiryForm.reset();
      els.enquiryOffer.value = inr(appState.offer);
    } catch (error) {
      els.formStatus.classList.add('error');
      els.formStatus.textContent = error.message;
    }
  });
}

async function init() {
  safe(setupReveal, 'reveal');
  safe(setupMenu, 'menu');
  safe(setupShare, 'share');
  safe(setupOffer, 'offer');
  safe(setupIntroCanvas, 'intro');
  safe(setupHeroCanvas, 'hero');
  safe(setupParts, 'parts');
  safe(setupAuth, 'auth ui');
  safe(setupEnquiry, 'enquiry');
  setupFirebase();
  setup3D().catch((error) => {
    console.error(error);
    setupFallback3D();
  });
  setTimeout(revealAll, 1200);
}

document.addEventListener('DOMContentLoaded', init);
