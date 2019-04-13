const dishRouter = require('./dishRoutes')
module.exports = (server) => {
  server.use('/dishes', dishRouter)
}
