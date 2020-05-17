/// Gerekli kütüphaneler
var { arc } = require('@arc/core')

var serviceUrl = '/api/v1/time'

/**
 * Time api uçtan uca test
 */
describe(serviceUrl, function () {

  // Önce api sayfasına bağlan
  before(browser => browser.url(`${arc.link}${serviceUrl}`))

  // Hizmet adımları
  test('Tarayıcı üzerinde görüntüle', function (browser) {
    browser
      // içerik uyuşuyor mu?
      .assert.containsText('body', 'dateTime', `${serviceUrl} içeriğine erişildi.`)
  })

  //  Görev tamamlandı.
  after(browser => browser.end())
})