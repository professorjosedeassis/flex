// instalação
self.addEventListener('install', (event) => {
    console.log("Instalando o Service Worker... ", event)
    // Pré carregamento em cache
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                console.log("Pré carregamento dos arquivos estáticos do aplicativo")
                cache.add('/flex/')
                cache.add('/flex/index.html')
                cache.add('/flex/style.css')
                cache.add('/flex/app.js')
                cache.add('/flex/img/flex.png')
                cache.add('/flex/img/calcflex.png')
                cache.add('/flex/img/etanol.png')
                cache.add('/flex/img/gasolina.png')                
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