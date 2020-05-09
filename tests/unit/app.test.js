// Gerekli kütüphaneler.
var Application = require('../../src/app')

/**
   * Uygulama örneği başarılı bir şekilde yüklenmesi.
   */
it('Uygulama oluşturulabiliyor mu?', () => {

  // Uygulama örneği oluşturuldu.
  var app = new Application()

  // Örnek tanımlandı mı?
  expect(app).toBeDefined()

})
