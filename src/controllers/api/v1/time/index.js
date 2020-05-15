// Gerekli kütüphaneler.
var express = require('express')

// Yönlendiric örneği ayarlanıyor.
var api = express.Router()

// Giriş isteği ayarlanıyor.
api.get('/', function (req, res) {

  // Tarih ve saat ISO formatı ile hazırlanıyor.
  var isoDate = new Date().toISOString()

  res.send(isoDate)
})

/**
 * Uygualma modülü.
 */
module.exports = api