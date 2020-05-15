/// Gerekli kütüphaneler
var express = require('express')

/// Multi router
var app = module.exports = express()

// Yönlendiricileri kullanmaya başlıyor.
app.use(require('./page'))
app.use(require('./api'))