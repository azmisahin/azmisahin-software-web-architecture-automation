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
    this.name = require('../package.json').name

    /**
		 * Uygulama versiyon numarası.
		 */
    this.version = require('../package.json').version

    /**
		 * Uygulama konfigurasyon bilgisi.
		 */
    this.configuration = require('config').get('configuration')

    /**
		 * Uygulama sunucu adı.
		 */
    this.host = require('os').hostname()

    /**
		 * Uygulama adresi 
		 */
    this.link = `http://${this.host}:${this.configuration.web.port}`

    /**
		 * Karşılama mesajı.
		 */
    this.message = `
		Application	:	${this.name}
		Version		:	${this.version}
		Port		:	${this.configuration.web.port}
		Mode		:	${this.configuration.name}
		Link		:	${this.link}`
  }
}