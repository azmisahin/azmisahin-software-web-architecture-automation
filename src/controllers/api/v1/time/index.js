/// Gerekli kütüphaneler.
var express = require('express')

/**
 * Yönlendirici örneği ayarlanıyor.
 * Ve export ediliyor
 */
var api = module.exports = express.Router()

// Giriş isteği ayarlanıyor.
api.get('/', function (req, res) {

  // Tarih ve saat ISO formatı ile hazırlanıyor.
  var isoDate = new Date().toISOString()

  // Başarılı cevabı iletiliyor ve veri gönderiliyor.
  res.status(200).send(isoDate)
})
