const e=["/build/./build/start-f83b4057.js","/build/./build/assets/start-a8cd1609.css","/build/./build/pages/$layout.svelte-db804f96.js","/build/./build/assets/pages/$layout.svelte-c597a902.css","/build/./build/error.svelte-fa7a8c69.js","/build/./build/pages/index.svelte-c03b6031.js","/build/./build/assets/pages/index.svelte-62222681.css","/build/./build/pages/settings.svelte-c4e9dbe5.js","/build/./build/assets/pages/settings.svelte-e3ad9bb5.css","/build/./build/pages/network.svelte-fde1ce48.js","/build/./build/chunks/vendor-dfaef48c.js","/build/./build/chunks/currency-df4c89aa.js"];self.addEventListener("install",(s=>{s.waitUntil(caches.open(1620149759535).then((s=>s.addAll(e))))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(1620149759535!==e)return caches.delete(e)}))))))})),self.addEventListener("fetch",(s=>{s.respondWith(caches.match(s.request).then((t=>t||fetch(s.request).catch((()=>{const s=e.find((e=>e.includes("network.svelte")));return caches.match(s)})))))}));
