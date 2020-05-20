/// Gerekli kütüphaneler
var { arc } = require(process.cwd() + '/src/core')

var serviceUrl = '/api/v2'

/**
 * Time api uçtan uca test
 */
describe(serviceUrl, function () {
  // Test adresi tam yolu
  var testUrl = `${arc.link}${serviceUrl}`

  // Önce api sayfasına bağlan
  before((browser) => browser.url(testUrl))

  // Hizmet adımları
  // Bu alanda \ karakterini kullanmayınız.
  test('Tarayıcı üzerinde görüntüleniyor.', function (browser) {
    browser.assert // içerik uyuşuyor mu?
      .containsText('body', 'v2', `${serviceUrl} içeriğine erişildi.`)
  })

  //  Görev tamamlandı.
  after((browser) => browser.end())
})
