/// Gerekli kütüphaneler.
var express = require('express')

/**
 * Yönlendirici örneği ayarlanıyor.
 * Ve export ediliyor
 */
var app = module.exports = express()

// Yönlendiricileri kullanmaya başlıyor.
app.use(require('./page'))
app.use(require('./api'))