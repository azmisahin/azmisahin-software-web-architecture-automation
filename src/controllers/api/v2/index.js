// Gerekli kütüphaneler.
var express = require('express')

// Yönlendiric örneği ayarlanıyor.
var api = express.Router()

// Giriş isteği ayarlanıyor.
api.get('/', function (req, res) {
  res.send('v2')
})

/**
 * Uygualma modülü.
 */
module.exports = api