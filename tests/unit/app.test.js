var Application = require('../../src/app')

// eslint-disable-next-line no-undef
it('Application constractor teset', () => {

  // Application instance create
  var app = new Application()

  // Instance defined?
  expect(app).toBeDefined()

})
