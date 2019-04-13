const logErrorStack = require('./logErrorStack')
const clientErrorHandler = require('./clientErrorHandler')
module.exports = (server) => {
  server.use(logErrorStack)
  server.use(clientErrorHandler)
}
