const allStaticAssets = 'allStaticAssets-v1';
const allDynamicAssets = 'allDynamicAssets-v1';
const assets = [
  '/',
  '/index.html',
  '/pages/offline.html',
  '/css/mdi/mdi.css',
  '/css/mdi/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  '/css/header-aside.css',
  '/css/position.css',
  '/css/semester-card.css',
  '/css/semester-form-card.css',
  '/css/semester-grade-table.css',
  '/css/style.css',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(allStaticAssets)
      .then(cache => {
        cache.addAll(assets)
      })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keyArray => keyArray
        .filter(key => key !== allStaticAssets && key !== allDynamicAssets)
        .map(retKeys => caches.delete(retKeys))
      )
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request)
        .then(fetRes => caches.open(allDynamicAssets)
          .then(cache => {
            cache.put(event.request.url, fetRes.clone())
            return fetRes;
          })
        )
      ).catch(() => caches.match('/pages/offline.html'))
    )
  }
)
