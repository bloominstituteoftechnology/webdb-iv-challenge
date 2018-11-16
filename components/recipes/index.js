const recipeRouter = require('./recipeRoutes')
module.exports = (server) => {
  server.use('/recipes', recipeRouter)
}
