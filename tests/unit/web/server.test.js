// Gerekli kütüphaneler.
var Server = require('../../../src/web/server')

/**
 * Web sunucu örneği çalışıyor mu?
 */
it('Web server teset', () => {

  // Uygulama örneği oluşturuldu.
  var app = new Server()

  // Örnek tanımlı mı?
  expect(app).toBeDefined()
})
