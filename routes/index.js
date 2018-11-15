const dishRouter = require('./dishRouter')


module.exports = server => {
  server.use('/api/dish', dishRouter)
  // server.use('/api/students', studentRouter)
}
