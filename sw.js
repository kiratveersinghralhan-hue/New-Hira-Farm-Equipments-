const CACHE_NAME = 'new-hira-site-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './firebase-config.js',
  './logo.svg',
  './field-harvesting.jpg',
  './side-view.jpg',
  './service-view.jpg',
  './poster-english.jpg',
  './poster-hindi.jpg',
  './poster-punjabi.jpg',
  './poster-985.jpg',
  './custom-launch-poster.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
