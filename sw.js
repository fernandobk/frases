console.info('Hola. Esto es el Service Worker');

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open('fbkar-v1')
        .then(function (cache) {
            return cache.addAll([
                '/',
                '/functions.js',
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

self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(new URL(event.request.url))
        .then(function(response) {
            // Cache hit - return response
            console.info('event.request: ',event.request);
            console.info('response: ',response);
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});