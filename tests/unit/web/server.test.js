var Server = require('../../../src/web/server')

// eslint-disable-next-line no-undef
it('Web server teset', () => {

  // Application instance create
  var app = new Server()

  // Instance defined?
  expect(app).toBeDefined()
})
