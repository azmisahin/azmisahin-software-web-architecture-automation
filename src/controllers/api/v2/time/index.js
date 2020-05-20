/// Gerekli kütüphaneler.
var express = require('express')

/**
 * Yönlendirici örneği ayarlanıyor.
 * Ve export ediliyor
 */
var api = (module.exports = express.Router())

// Giriş isteği ayarlanıyor.
api.get('/', function (req, res) {
  // Geri dönüş değeri yapılandırılıyor.
  // Tarih ve saat ISO formatı ile hazırlanıyor.
  var result = { dateTime: new Date().toISOString() }

  // Başarılı cevabı iletiliyor ve veri gönderiliyor.
  res.status(200).json(result)
})
