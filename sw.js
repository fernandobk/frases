console.info('Hola. Esto es el Service Worker');

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(location.host)
        .then(function (cache) {
            return cache.addAll([
                '/estructura.json',
                '/favicon-16x16.png',
                '/favicon-180x180.png',
                '/favicon-192x192.png',
                '/favicon-32x32.png',
                '/favicon-512x512.png',
                '/functions.js',
                '/index.html',
                '/manifest.json',
                '/sw.js',
                '/css/fontawesome-all.min.css',
                '/css/main.css',
                '/css/noscript.css',
                '/css/images/bg.jpg',
                '/css/images/overlay-pattern.png',
                '/css/images/overlay.svg',
                '/css/images/ie/footer.png',
                '/css/images/ie/footer.svg',
                '/webfonts/fa-brands-400.eot',
                '/webfonts/fa-brands-400.ttf',
                '/webfonts/fa-brands-400.woff2',
                '/webfonts/fa-regular-400.svg',
                '/webfonts/fa-regular-400.woff',
                '/webfonts/fa-solid-900.eot',
                '/webfonts/fa-solid-900.ttf',
                '/webfonts/fa-solid-900.woff2',
                '/webfonts/fa-brands-400.svg',
                '/webfonts/fa-brands-400.woff',
                '/webfonts/fa-regular-400.eot',
                '/webfonts/fa-regular-400.ttf',
                '/webfonts/fa-regular-400.woff2',
                '/webfonts/fa-solid-900.svg',
                '/webfonts/fa-solid-900.woff'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});