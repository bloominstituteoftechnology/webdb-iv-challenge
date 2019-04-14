const dishRouter = require('./dishRouter')
const recipeRouter = require('./recipeRouter')

module.exports = server => {
  server.use('/api/dish', dishRouter);
  server.use('/api/dish', recipeRouter);
  // server.use('/api/students', studentRouter)
}
