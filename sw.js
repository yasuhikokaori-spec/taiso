const CACHE='taiso-v1';
const FILES=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "balance.jpg", "burpee.jpg", "climber.jpg", "cstest.jpg", "drawin.jpg", "heel.jpg", "hiplift.jpg", "jacks.jpg", "knee.jpg", "lunge.jpg", "march.jpg", "plank.jpg", "pushup.jpg", "sideplank.jpg", "squat.jpg", "squat2.jpg", "standtwist.jpg", "sutest.jpg", "twist.jpg", "wallpush.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))
});
