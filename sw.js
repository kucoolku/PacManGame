//這是一個空的 Service Worker
self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
});

self.addEventListener('fetch', (e) => {
  // 什麼都不做，直接讓瀏覽器去處理網路請求
  // 這樣就絕對不會有 404
});
