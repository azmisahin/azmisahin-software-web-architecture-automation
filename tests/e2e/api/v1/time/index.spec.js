/// Gerekli kütüphaneler
var { arc } = require('@arc/core')

var serviceUrl = '/api/v1/time'

/**
 * Time api uçtan uca test
 */
describe(serviceUrl, function () {

  // Test adresi tam yolu
  var testUrl = `${arc.link}${serviceUrl}`

  // Önce api sayfasına bağlan
  before(browser => browser.url(testUrl))

  // Hizmet adımları
  test(`${testUrl} Tarayıcı üzerinde görüntüleniyor.`, function (browser) {
    browser
      // içerik uyuşuyor mu?
      .assert.containsText('body', 'dateTime', `${serviceUrl} içeriğine erişildi.`)
  })

  //  Görev tamamlandı.
  after(browser => browser.end())
})