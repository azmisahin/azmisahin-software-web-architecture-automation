// Gerekli kütüphaneler.
var express = require('express')
var http = require('http')
var cors = require('cors')

/**
 * Web sunucu
 */
class Server {

  /**
   * Web Sunucu yapıcısı
   */
  constructor() {

    // web uygulama sunucu çatısı
    var exp = express()

    this.server = http.createServer(exp)

    // Static Dosyalar
    exp.use(express.static('./public'))

    // Cros Origin Aktif
    exp.use(cors())

    // Sunucu
    return this.server

  }

}

/**
 * Uygualma modülü.
 */
module.exports = Server
