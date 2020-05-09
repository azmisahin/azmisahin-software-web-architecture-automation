/**
 * Döküman sayfası uçtan uca testi.
 */
describe('Github', function () {

  /**
   * Önce döküman ana sayfasına bağlan.
   */
  before(browser => browser.url('https://azmisahin.github.io/azmisahin-software-web-architecture-automation/'))
  test('Github döküman sayfası', function (browser) {
    browser
    /**
     * Sayfada body tagını bekle.
     */
      .waitForElementVisible('body')
      /**
       * h1 tagındaki içerik uyuşuyor mu?
       */
      .assert.containsText('h1', 'azmisahin-software-web-architecture-automation')
  })
  after(browser => browser.end())
})
