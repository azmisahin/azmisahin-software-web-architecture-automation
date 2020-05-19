/// Gerekli kütüphaneler
var request = require('supertest')
var page = require(process.cwd() + '/src/controllers/page')

/// Mock
var express = require('express')
var app = express()

app.use(page)

/**
 * Sayfa testleri
 */
describe('Sayfalar', function () {

  // Hedeflenen sürüm.
  var url = '/'

  /**
     * Hedeflenen sürüm için, global test.
     */
  it(url, function (done) {

    // SuperTest talep ediliyor.
    request(app)

    // YÖnlendiricilerin testi
      .get(url)

    // Başarılı cevabı alınması gerekli.
      .expect(200, 'home')
      .end(done)
  })
})
