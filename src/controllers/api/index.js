// Gerekli kütüphaneler
var express = require('express')

// Çoklu yönlendirici
var api = module.exports = express()

// Yönlendirici adresleri
api.use('/api/v1', require('./v1'))
api.use('/api/v2', require('./v2'))

// Giriş isteği ayarlanıyor.
api.get('/api', function (req, res) {
  res.send('Web Api')
})