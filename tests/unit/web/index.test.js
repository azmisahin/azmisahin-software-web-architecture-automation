/// Gerekli kütüphaneler


/**
 * Web uygulama sunucu yapılandırma testleri
 */
describe('Web uygualama sunucusu', function () {

  var app

  beforeEach(function () {
    app = require('@arc/web')
  })

  /**
   * Çağrılabilirlik kontrolleri.
   */
  it('Yapılandırma çağrılabilir durumunda mı?', function () {

    // Başarılı cevabı alınması gerekli.
    expect(app).toBeInstanceOf(Function)

  })
})
