const CACHE_NAME = 'pacman-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png' // 如果你沒有放圖片，這行可能會報錯，但不影響遊戲運行
];

// 安裝 Service Worker 並快取檔案
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(err => console.log('Cache error', err));
    })
  );
});

// 攔截網路請求，如果有快取就用快取
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});