/**
 * JavaScript kodunda bulunan sorunlu kalıpları
 * tanımlamak için statik kod analiz tanımları.
 */
module.exports = {
  /**
   * Önceden tanımlanmış global değişkenleri tanımlar
   * @see https://eslint.org/docs/user-guide/configuring#specifying-environments
   */
  "env": {
    /// Tarayıcı genel değişkenleri.
    "browser": true,
    /// Modüller hariç tüm ECMAScript 6 özelliklerini etkinleştirir.
    "es6": true,
    /// Node.js genel değişkenleri ve Node.js kapsamı.
    "node": true
  },
  /**
   * Her kuralı kapatabilir ve yalnızca temel sözdizimi doğrulamasıyla çalışabilir.
   *
   * @see https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
   */
  "extends": "eslint:recommended",
  /**
   * Ayrıştırıcı Seçeneklerini Belirleme.
   *
   * @see https://eslint.org/docs/user-guide/configuring#specifying-parser-options
   */
  "parserOptions": {
    "ecmaVersion": 6
  },
  /**
   * Amaçlarını anlamanıza yardımcı olmak için kategoriye göre gruplandırılmıştır.
   *
   * @see https://eslint.org/docs/rules
   */
  "rules": {
    /**
     * Tutarlı girinti uygula (girinti).
     *
     * @see https://eslint.org/docs/rules/indent
     */
    "indent": [
      "error",
      2
    ],
    /**
     * Tutarlı linebreak stilini uygula (linebreak stili).
     *
     * Çapraz platform rolü
     * @see https://eslint.org/docs/rules/linebreak-style
     */
    "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
    /**
     * Ters tırnak, çift veya tek tırnak (tırnak) tutarlı kullanımını zorunlu kılmak.
     *
     * @see https://eslint.org/docs/rules/quotes
     */
    "quotes": [
      "error",
      "single"
    ],
    /**
     * Noktalı virgül gerektirir veya izin vermez.
     *
     * @see https://eslint.org/docs/rules/semi
     */
    "semi": [
      "error",
      "never"
    ],
    /**
     * Kullanımına izin verme console(konsol yok).
     *
     * @see https://eslint.org/docs/rules/no-console
     */
    "no-console": "error"
  }
}
