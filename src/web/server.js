// Required
var express = require('express')
var http = require('http')
var cors = require('cors')

/**
 * Web server
 */
class Server {

  /**
   * Web Server
   */
  constructor() {

    // Server
    var exp = express()
    this.server = http.createServer(exp)

    // Static File
    exp.use(express.static('./'))

    // Cros Origin Enable
    exp.use(cors())

    // Server
    return this.server

  }

}

/**
 * Application module export
 */
module.exports = Server
