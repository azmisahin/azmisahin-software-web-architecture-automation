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
		 * Karşılama mesajı.
		 */
    this.message = `
		Application	:	${this.name}
		Version		:	${this.version}
		Port		:	${this.port}
		Mode		:	${this.configuration.name}
		Link		:	${this.link}`
  }
}