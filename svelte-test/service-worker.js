const e=["/svelte-test/foo/start-d09403dc.js","/svelte-test/foo/assets/start-a8cd1609.css","/svelte-test/foo/pages/__layout.svelte-24fb14b1.js","/svelte-test/foo/assets/pages/__layout.svelte-962580a9.css","/svelte-test/foo/error.svelte-2beaf441.js","/svelte-test/foo/pages/index.svelte-66cfb987.js","/svelte-test/foo/pages/offline.svelte-042f4dcd.js","/svelte-test/foo/pages/about.svelte-eb0946c7.js","/svelte-test/foo/chunks/vendor-4e0cc74e.js"],t=["/svelte-test/favicon.png","/svelte-test/manifest.json"],s="cache-1623513305546";self.addEventListener("install",(n=>{n.waitUntil(caches.open(s).then((s=>s.addAll([...e,...t,"/offline"]))).then((()=>self.skipWaiting())))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==s&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(e=>e.respondWith(async function(){const t=await caches.open(s),[n,a]=await async function(e){try{return[await fetch(e.request),null]}catch(t){return[null,t]}}(e);if(n)return t.put(e.request,n.clone()),n;const[c,l]=await async function(e){try{const t=await caches.open(s);return[await t.match(e.request),null]}catch(t){return[null,t]}}(e);if(c)return c;const[o,r]=await async function(e){try{const e=await caches.open(s);return[await e.match("/offline"),null]}catch(t){return[null,t]}}();return o||new Response("error")}())));
