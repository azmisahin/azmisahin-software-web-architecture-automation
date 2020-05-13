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
class Application {

  /**
	 * Mimari Uygualama
	 *
	 * @example
	 *
	 * /// Referanslar yüklendi.
	 * const Application = require('./app')
	 *
	 * ///  Örnek oluşturuldu.
	 * var app = new Application()
	 *
	 * @returns <Application>
	 */
  constructor() {

    // Uygulama adı.
    this.name = require('../package.json').name

    /// Uygulama version numarası.
    this.version = require('../package.json').version

    /// Uygulama konfigurasyon bilgisi
    this.configuration = require('../config/development.json').configuration
  }
}

/**
 * Uygulama modülü.
 */
module.exports = Application
