/// Gerekli kütüphaneler
var request = require('supertest')

/**
 * Uygulama başlatme testleri.
 */
describe('Başlıyor', function () {

  // Hedeflenen sürüm.
  var url = '/'

  // Ana uygulama taşıyıcı
  var app

  /**
   * 
   */
  beforeEach(function () {
    app = require('@arc/core').app
  })

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
