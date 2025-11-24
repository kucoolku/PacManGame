// 強制立即更新 Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting(); // 跳過等待，直接接管
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // 立即控制所有頁面
});

// 攔截請求，但不做快取，直接去網路抓
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // 只有真的斷網時，才會這裡報錯，但不會造成 404 死循環
            return new Response("請連接網路遊玩");
        })
    );
});
