/// Gerekli kütüphaneler.
var express = require('express')

/**
 * Yönlendirici örneği ayarlanıyor.
 * Ve export ediliyor
 */
var page = module.exports = express.Router()

// Giriş isteği ayarlanıyor.
page.get('/', function (req, res) {

  // Geri dönüş değeri yapılandırılıyor. 
  // 
  var result = 'home'

  // Başarılı cevabı iletiliyor ve veri gönderiliyor.
  res.status(200).send(result)
})