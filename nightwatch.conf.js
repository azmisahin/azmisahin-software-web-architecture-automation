/**
 * Tüm servisleri hazırlar.
 */
const Services = {}

loadServices()

/**
 * Uçtan uca test tanımları.
 */
module.exports = {
  /**
   * Testlerinizin bulunduğu bir dizi klasör (alt klasörler hariç);
   * Bu belirtilmezse, test kaynağının test çalıştırıcısına ikinci argüman olarak iletilmesi gerekir.
   */
  src_folders: ['tests/e2e/'],

  /**
   * Test raporları çıktısı
   */
  output_folder: 'reports/tests/e2e/',

  /**
   * Test Ayarları
   */
  test_settings: {
    /**
     * Varsayılan test ayarları
     */
    default: {
      /**
       * Testin yürütülmesi sırasında hataları görüntülemek istemiyorsanız bunu true olarak ayarlayın
       * */
      disable_error_log: false,

      /**
       * Bu özellik, testlerde kullanılan ana Nightwatch API'sine sunulacaktır.
       * Değeri, hangi ortamın kullanıldığına bağlıdır.
       */
      launch_url: 'https://nightwatchjs.org',

      /**
       * Screenshots
       */
      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: 'firefox',
      },

      webdriver: {
        start_process: true,
        server_path: Services.geckodriver ? Services.geckodriver.path : '',
      },
    },

    /**
     * Firefox
     */
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          'moz:firefoxOptions': {
            args: [],
          },
        },
      },
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: Services.geckodriver ? Services.geckodriver.path : '',
        cli_args: [],
      },
    },

    /**
     * Chrome
     */
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [],
        },
      },
      webdriver: {
        start_process: true,
        port: 9515,
        server_path: Services.chromedriver ? Services.chromedriver.path : '',
        cli_args: [],
      },
    },

    /**
     * Browserstack
     */
    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443,
      },
      desiredCapabilities: {
        'bstack:options': {
          local: 'false',
          userName: '${BROWSERSTACK_USER}',
          accessKey: '${BROWSERSTACK_KEY}',
        },
      },
      disable_error_log: true,
      webdriver: {
        keep_alive: true,
        start_process: false,
      },
    },

    /**
     * Browserstack Chrome
     */
    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
        },
      },
    },

    /**
     * Browserstack Firefox
     */
    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },

    /**
     * Browserstack Internet Explorer
     */
    'browserstack.ie': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'IE',
        browserVersion: '11.0',
        'bstack:options': {
          os: 'Windows',
          osVersion: '10',
          local: 'false',
          seleniumVersion: '3.5.2',
          resolution: '1366x768',
        },
      },
    },

    /**
     * Selenyum
     */
    selenium: {
      /**
       * Selenium Server yerel olarak çalışıyor ve Nightwatch tarafından yönetiliyor.
       */
      selenium: {
        start_process: true,
        port: 4444,
        server_path: Services.seleniumServer
          ? Services.seleniumServer.path
          : '',
        cli_args: {
          'webdriver.gecko.driver': Services.geckodriver
            ? Services.geckodriver.path
            : '',
          'webdriver.chrome.driver': Services.chromedriver
            ? Services.chromedriver.path
            : '',
        },
      },
    },

    /**
     * Selenyum Chrome
     */
    'selenium.chrome': {
      extends: 'selenium',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
        },
      },
    },

    /**
     * Selenyum Firefox
     */
    'selenium.firefox': {
      extends: 'selenium',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [],
        },
      },
    },
  },
}

/**
 * Tarayıcı servislerini hazırlar.
 */
function loadServices() {
  /**
   * Selenium Sunucususu talep ediliyor.
   */
  try {
    Services.seleniumServer = require('selenium-server')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Selenium Servisi Yüklenemedi.\n' + err)
  }

  /**
   * Chrome Sürücüsü talep ediliyor.
   */
  try {
    Services.chromedriver = require('chromedriver')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Chrome Servisi Yüklenemedi.\n' + err)
  }

  /**
   * Gecko Sürücüsü Talep Ediliyor.
   */
  try {
    Services.geckodriver = require('geckodriver')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Gecko Servisi Yüklenemedi.\n' + err)
  }
}
