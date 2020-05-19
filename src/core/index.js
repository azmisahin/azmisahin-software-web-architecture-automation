/// Gerekli kütüphaneler
var express = require('express')
var Architecture = require('./architecture')

/// Uygulama örneği oluşturuldu.
var arc = module.exports.arc = new Architecture

/// Express
var app = module.exports.app = express()

// Sunucu başlangıç yapılandırmaları
app.use(require('../web'))
app.use(require('../controllers'))

// Test modunda dinleme gerçekleşmeyecektir.
if (arc.configuration.name != 'test') {
  // Sunucu port üzerinden dinlemeye başladı.
  app.listen(arc.configuration.web.port, () => {
    // eslint-disable-next-line no-console
    console.log(arc.message)
  })
}
