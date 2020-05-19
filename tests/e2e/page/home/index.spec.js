/// Gerekli kütüphaneler
var { arc } = require(process.cwd() + '/src/core')

var serviceUrl = '/'

/**
 * Time api uçtan uca test
 */
describe(serviceUrl, function () {

  // Test adresi tam yolu
  var testUrl = `${arc.link}${serviceUrl}`

  // Önce api sayfasına bağlan
  before(browser => browser.url(testUrl))

  // Hizmet adımları
  // Bu alanda \ karakterini kullanmayınız.
  test('Tarayıcı üzerinde görüntüleniyor.', function (browser) {
    browser
    // içerik uyuşuyor mu?
      .assert.containsText('body', 'home', `${serviceUrl} içeriğine erişildi.`)
  })

  //  Görev tamamlandı.
  after(browser => browser.end())
})