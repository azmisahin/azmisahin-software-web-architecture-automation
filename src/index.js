/// Referance Load
const Application = require('./app')
const Server = require('./web/server')

/// Application Instance Create
var app = new Application

// Start Application
var start = function (app) {

  // Web Server initalize
  var server = new Server()

  // Define
  var port = process.env.PORT || 3000

  // Server message
  var message = `
  Application : ${app.name}
  Version     : ${app.version}
  Port        : ${port}
  `
  // Server Listener
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(message)
  })

  return message
}

start(app)
