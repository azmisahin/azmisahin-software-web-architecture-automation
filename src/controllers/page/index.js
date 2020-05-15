// Gerekli kütüphaneler
var express = require('express')

// Multi router
var app = module.exports = express()

// Yönlendirici adresleri
app.use('/', require('./home'))
app.use('/home', require('./home'))
