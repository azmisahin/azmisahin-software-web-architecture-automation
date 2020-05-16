/// Gerekli kütüphaneler
var express = require('express')
var cors = require('cors')

/**
 * Express sunucu
 */
var app = module.exports = express()

// Static Dosyalar
app.use(express.static('./public'))

// Cros Origin Aktif
app.use(cors())