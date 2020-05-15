// Gerekli kütüphaneler.
var app = require('../../../src/web')

/**
 * Web sunucu örneği çalışıyor mu?
 */
it('Web server test', () => {

  // Örnek tanımlı mı?
  expect(app).toBeDefined()
})
