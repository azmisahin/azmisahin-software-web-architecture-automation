var LanguageManager = require('language-manager')
/**
 * Çoklu Dil Yönetimi
 */

module.exports = new LanguageManager()
  .setType(LanguageManager.ResourceType.Json)
  .setPath('config/lang')
  .setLang('en-us')
