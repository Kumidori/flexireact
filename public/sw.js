importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {

    e.waitUntil(

        caches.open('airhorner').then(function(cache) {

            return cache.addAll([

                '/',

                '/index.html',

                '/index.html?homescreen=1',

                '/?homescreen=1',

               // '/styles/main.css',

                '/src/App.css',
                '/src/App.js',
                '/src/index.css',
                '/src/index.js',
                '/src/logo.svg',
                '/src/views/Files.js',
                '/src/views/Forum.js',
                '/src/views/Forums.js',
                '/src/views/Home.js',
                '/src/views/Katalog.js',
                '/src/views/Kurs.js',
                '/src/views/SubFiles.js',
                '/src/views/Courses.js',
                '/src/views/News.js',
                '/src/components/Coursebar.js',
                '/src/components/Navbar.js',
                '/src/components/Titlebar.js',
                '/src/components/Topbar.js',



            ]);

        })

    );

});
self.addEventListener('fetch', function(event) {

    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function(response) {

            return response || fetch(event.request);

        })

    );

});