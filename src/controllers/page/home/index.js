// Gerekli kütüphaneler.
var express = require('express')

// Yönlendiric örneği ayarlanıyor.
var page = express.Router()

// Giriş isteği ayarlanıyor.
page.get('/', function (req, res) {
  res.send('home')
})

/**
 * Uygualma modülü.
 */
module.exports = page