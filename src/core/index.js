/// Gerekli kütüphaneler
var express = require('express')
var Architecture = require('./architecture')

/// Uygulama örneği oluşturuldu.
var arc = module.exports.arc = new Architecture

/// Express
var app = module.exports.app = express()

// Sunucu başlangıç yapılandırmaları
app.use(require('@arc/web'))
app.use(require('@arc/controllers'))

// Test modunda dinleme gerçekleşmeyecektir.
if (arc.configuration.name != 'test') {
  // Sunucu port üzerinden dinlemeye başladı.
  app.listen(process.env.PORT || arc.configuration.web.port, () => {
    // eslint-disable-next-line no-console
    console.log(arc.message)
  })
}

