// Gerekli kütüphaneler.
var Architecture = require('../../src/architecture')

/**
 * Uygulama örneği başarılı bir şekilde yüklenmesi.
 */
it('Uygulama oluşturulabiliyor mu?', () => {

  // Uygulama örneği oluşturuldu.
  var arc = new Architecture()

  // Örnek tanımlandı mı?
  expect(arc).toBeDefined()

})
