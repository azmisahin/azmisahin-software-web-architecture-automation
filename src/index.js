/// Gerekli kütüphaneler..
const Application = require('./app')
const Server = require('./web/server')

/// Uygualama örneği oluşturuldu.
var app = new Application

// Uygulamayı başlat.
var start = function (app) {

  //web suncusu örneği yapılandırılıyor.
  var server = new Server()

  // Ortam portu yada belirli bir port başlatılıyor.
  var port = process.env.PORT || app.configuration.web.port

  // Uygulama çalıştığında verilecek mesaj.
  var message = `
  Application : ${app.name}
  Version     : ${app.version}
  Port        : ${port}

  Link        : http://localhost:${port}
  `
  // Sunucu port üzerinden dinlemeye başladı.

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(message)
  })

  // Sunucu mesajı iletiliyor.
  return message
}

// Uygulamayı başlat.
start(app)
