const cacheName = 'v1.5.0'
const cacheFiles = [
  '/app/',
  '/app/favicon.ico',
  '/app/manifest.json',
  '/app/index.html',
  '/app/css/app.css',
  '/app/js/app.js',
  '/app/img/icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
  'https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap',
  'https://fonts.gstatic.com/s/quicksand/v19/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
  // 'https://fonts.gstatic.com/s/quicksand/v19/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2',
  // 'https://fonts.gstatic.com/s/quicksand/v19/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2',
]

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(cacheFiles))
  )
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(cacheNames.filter((cache) => cache !== cacheName).map((cache) => caches.delete(cache))))
  )
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request)
    })
  )
})

self.addEventListener('message', (e) => {
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting()
  }
})
