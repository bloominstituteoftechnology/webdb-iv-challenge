const express = require('express')

const server = express()
server.use(express.json())

//Routes
const dishesRoute = require('./data/routes/dishesRoute')
const recipesRoute = require('./data/routes/recipesRoute')

server.use('/api/dishes', dishesRoute)
server.use('/api/recipes', recipesRoute)

//Listening
const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});