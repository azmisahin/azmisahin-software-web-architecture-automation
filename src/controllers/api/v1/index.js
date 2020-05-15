// Gerekli kütüphaneler.
var express = require('express')

// Yönlendiric örneği ayarlanıyor.
var api = express.Router()

// Yönlendirici adresleri
api.use('/time', require('./time'))

// Giriş isteği ayarlanıyor.
api.get('/', function (req, res) {
  res.send('v1')
})

/**
 * Uygualma modülü.
 */
module.exports = api