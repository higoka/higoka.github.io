const cacheName = 'v1.0.0'
const cacheFiles = [
  '/',
  '/manifest.json',
  '/index.html',
  '/css/app.css',
  '/js/app.js',
  '/img/icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
  'https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap',
  'https://fonts.gstatic.com/s/quicksand/v19/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
  // 'https://fonts.gstatic.com/s/quicksand/v19/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2',
  // 'https://fonts.gstatic.com/s/quicksand/v19/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2',
]

this.addEventListener('install', (e) => {
  console.log('install')
  e.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(cacheFiles))
  )
})

this.addEventListener('activate', (e) => {
  console.log('activate')
  e.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(cacheNames.filter((cache) => cache !== cacheName).map((cache) => caches.delete(cache))))
  )
})

this.addEventListener('fetch', (e) => {
  console.log('fetch')
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request)
    })
  )
})
