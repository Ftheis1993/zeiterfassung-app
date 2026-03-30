// WICHTIG: Wir setzen es auf v3, um den alten Cache zu löschen
const CACHE_NAME = 'zeiten-pro-v512';

// Diese Dateien werden für die Offline-Nutzung gespeichert
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  
  // ---> HIER WAR DAS PROBLEM: Die Icons müssen gecacht werden! <---
  './icon-192.png',
  './icon-512.png',
  './icon.svg',
  
  // Die externe PDF-Bibliothek und Schriftart auch cachen, 
  // falls sie offline benötigt werden
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'
];

// 1. Installation: Dateien in den Cache laden
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// 2. Aktivierung: Alte Caches aufräumen, falls du CACHE_NAME änderst
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch: Anfragen abfangen (Strategie: "Network First, fallback to Cache")
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
