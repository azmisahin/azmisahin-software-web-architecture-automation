/**
 * Jest'in yapılandırması package.json
 * projenizin jest.config.js dosyasında
 * veya bir dosya aracılığıyla
 * veya --config <path/to/file.js|cjs|mjs|json>
 * seçenek aracılığıyla tanımlanabilir.
 * @see https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  /**
   * Her test arasındaki sahte çağrıları ve örnekleri otomatik olarak temizler.
   */
  clearMocks: true,

  /**
   * Jest'in kapsama dosyalarını vermesi gereken dizin.
   */
  coverageDirectory: 'coverage',

  /**
   * Test için kullanılacak test ortamı.
   */
  testEnvironment: 'node',

  /**
   * Jest'in test dosyalarını tespit etmek için kullandığı global kalıpları.
   */
  testMatch: ['<rootDir>/**/tests/unit/**/*.test.js'],

  /**
   * Bir dosya belirtilen glob paterniyle eşleşirse,
   * bu dosya için test mevcut olmasa
   * ve test paketinde asla gerekli olmamasına rağmen kapsama bilgileri toplanır.
   */
  collectCoverageFrom: ['src/**/*.{ts,js}'],
}
