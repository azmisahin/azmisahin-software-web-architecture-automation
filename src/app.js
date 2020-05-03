/**
 * Architecture Project
 *
 * Startup Project
 *
 * https://bitbucket.org/kiwi-scooter
 *
 * @author Azmi SAHIN
 * @since 2020
 * */
class Application {

  /**
	 * Architecture Application
	 *
	 * @example
	 *
	 * /// Referance Load
	 * const Application = require('./app')
	 *
	 * ///  Instance create
	 * var app = new Application()
	 *
	 * @returns <Application>
	 */
  constructor() {

    // Application Name
    this.name = require('../package.json').name

    /// Application Version
    this.version = require('../package.json').version
  }
}

/**
 * Application module export
 */
module.exports = Application
