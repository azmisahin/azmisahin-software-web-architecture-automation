/**
 * Mimari proje
 *
 * Başlangıç projesi
 *
 * https://github.com/azmisahin/azmisahin-software-web-architecture-automation
 *
 * @author Azmi SAHIN
 * @since 2020
 * */
module.exports = class Architecture {
  /**
   * Mimari Uygualama
   *
   * @example
   *
   * /// Referanslar yüklendi.
   * const Architecture = require('./architecture')
   *
   * ///  Örnek oluşturuldu.
   * var arc = new Architecture()
   *
   * @returns <Architecture>
   */
  constructor() {
    /**
     * Uygulama adı.
     */
    this.name = require(process.cwd() + '/package.json').name

    /**
     * Uygulama versiyon numarası.
     */
    this.version = require(process.cwd() + '/package.json').version

    /**
     * Uygulama konfigurasyon bilgisi.
     */
    this.configuration = require('config').get('configuration')

    /**
     * Uygulama sunucu adı.
     */
    this.host = require('os').hostname()

    /**
     * Uygulama portu
     * Sunucu çıkış portu yada belirli bir konteynır portu
     */
    this.port = process.env.PORT || this.configuration.web.port

    /**
     * Uygulama adresi
     */
    this.link = `http://${this.host}:${this.port}`

    /**
     * Çoklu Dil Desteği
     */
    this.lang = require('./lang')

    /**
     * Karşılama mesajı.
     */
    this.message = `
    ${this.lang.Val('app.name.label')}\t\t: ${this.name}
    ${this.lang.Val('app.version.label')}\t\t: ${this.version}
    ${this.lang.Val('app.port.label')}\t\t: ${this.port}
    ${this.lang.Val('app.mode.label')}\t\t: ${this.configuration.name}
    ${this.lang.Val('app.link.label')}\t\t: ${this.link}
    `
  }
}
