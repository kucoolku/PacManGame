// 我改了版本號 v3，確保手機會抓新的
const CACHE_NAME = 'pacman-v3-absolute'; 

const GH_PATH = '/PacManGame'; // <-- 這裡填入你的倉庫名稱，例如 /pacman-game

const ASSETS = [
  `${GH_PATH}/`,
  `${GH_PATH}/index.html`,
  `${GH_PATH}/manifest.json`,
  `${GH_PATH}/icon.png`
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(err => console.log('Cache error', err));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
