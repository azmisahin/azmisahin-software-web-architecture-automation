/// Gerekli kütüphaneler
var request = require('supertest')
var api = require('@arc/controllers/api/v1')

/// Mock
var express = require('express')
var app = express()

app.use(api)

/**
 * Time api testleri
 */
describe('v1 api tests', function () {

  // Hedeflenen sürüm.
  var url = '/api/v1'

  /**
     * Hedeflenen sürüm için, global test.
     */
  it(url, function (done) {

    // SuperTest talep ediliyor.
    request(app)

    // Global sürüm testi.
      .get('/')

    // Başarılı cevabı alınması gerekli.
      .expect(200, 'v1')
      .end(done)
  })
})
