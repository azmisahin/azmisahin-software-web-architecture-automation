/// Gerekli kütüphaneler.
var express = require('express')

/**
 * Yönlendirici örneği ayarlanıyor.
 * Ve export ediliyor
 */
var app = (module.exports = express.Router())

// Yönlendirici adresleri
app.use('/', require('./home'))
