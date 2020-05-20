/// Gerekli kütüphaneler.
var express = require('express')

/**
 * Yönlendirici örneği ayarlanıyor.
 * Ve export ediliyor
 */
var api = (module.exports = express.Router())

// Yönlendirici adresleri
api.use('/api/v1', require('./v1'))
api.use('/api/v2', require('./v2'))

// Giriş isteği ayarlanıyor.
api.get('/api', function (req, res) {
  // Geri dönüş değeri yapılandırılıyor.
  // api versiyon 1
  var result = 'api'

  // Başarılı cevabı iletiliyor ve veri gönderiliyor.
  res.status(200).send(result)
})
