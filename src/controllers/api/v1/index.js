/// Gerekli kütüphaneler.
var express = require('express')

/**
 * Yönlendirici örneği ayarlanıyor.
 * Ve export ediliyor
 */
var api = module.exports = express.Router()

// Yönlendirici adresleri
api.use('/time', require('./time'))

// Giriş isteği ayarlanıyor.
api.get('/', function (req, res) {

  // Geri dönüş değeri yapılandırılıyor.
  // api versiyon 1
  var result = 'v1'

  // Başarılı cevabı iletiliyor ve veri gönderiliyor.
  res.status(200).send(result)
})
