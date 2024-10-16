// instalação
self.addEventListener('install', (event) => {
    console.log("Instalando o Service Worker... ", event)
    // Pré carregamento em cache
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                console.log("Pré carregamento dos arquivos estáticos do aplicativo")
                cache.add('/')
                cache.add('/index.html')
                cache.add('/style.css')
                cache.add('/app.js')
                cache.add('/img/flex.png')
                cache.add('/img/calcflex.png')
                cache.add('/img/etanol.png')
                cache.add('/img/gasolina.png')                
            })
    )
})

// ativação
self.addEventListener('activate', (event) => {
    console.log("Ativando o Service Worker... ", event)
    return self.clients.claim()
})

// buscar
self.addEventListener('fetch', (event) => {
    // console.log("Buscando algo... ", event)
    // event.respondWith(fetch(event.request))
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response
                } else {
                    return fetch(event.request)
                }
            })
    )
})