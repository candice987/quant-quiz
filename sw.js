// Offline support: keep the page and its images in a cache.
// The page itself is network-first (so updates show up when online), everything else cache-first.
var CACHE = 'cfa-quiz-v1';
var FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'img/icon-192.png', 'img/icon-512.png',
  'img/fi_41.png', 'img/fi_45.png', 'img/deriv_6.png', 'img/deriv_10.png', 'img/deriv_11.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function fromNetwork(req, timeoutMs) {
  return new Promise(function (resolve, reject) {
    var t = setTimeout(reject, timeoutMs);
    fetch(req).then(function (res) { clearTimeout(t); resolve(res); }, function (err) { clearTimeout(t); reject(err); });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return; // GitHub API sync etc. go straight to the network
  if (req.mode === 'navigate') {
    e.respondWith(
      fromNetwork(req, 4000).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put('index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('index.html').then(function (r) { return r || caches.match('./'); });
      })
    );
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  }));
});
