const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const DishRoutes = require('./server_routers/DishRoutes');
const RecipeRoutes = require('./server_routers/RecipeRoutes');

const server = express();

//middleware
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('Welcome to Lambda Recipes');
})

// DISHES ENDPOINTS
server.use('/dishes', DishRoutes);
server.use('/recipes', RecipeRoutes);

// ERROR HANDLER
server.use((err, req, res, next) => {
    res.status(err.code).send({message: err.message, error: err.error})
})

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});