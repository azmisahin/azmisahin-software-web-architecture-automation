/// Gerekli kütüphaneler
var request = require('supertest')
var api = require(process.cwd() + '/src/controllers')

/// Mock
var express = require('express')
var app = express()

app.use(api)

/**
 * Time api testleri
 */
describe('Time api tests', function () {

  // Hedeflenen sürüm.
  var url = '/api/v2/time'

  /**
   * Hedeflenen sürüm için, global test.
   */
  it(url, function (done) {

    // SuperTest talep ediliyor.
    request(app)

      // Global sürüm testi.
      .get('/')

      // Başarılı cevabı alınması gerekli.
      .expect(200, done)
  })
})
