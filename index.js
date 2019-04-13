// const express = require('express');
// const knex = require('knex');
// const dbConfig = require('./knexfile');

// const server = express();
// const db = knex(dbConfig.development);
// const PORT = 1234;

// server.use(express.json());

// server.get('/', (req, res) => {
//   res.json({message: "Up and Running!"});
// })


// Endpoints here


// Router setup here

const express = require('express');
const helmet = require('helmet');
const dishRouter = require('./routers/dish_router');
const recipeRouter = require('./routers/recipe_router');
const ingredientRouter = require('./routers/ingredient_router');
const recipeIngredientRouter = require('./routers/recipe_ingredient_router');
const stepsRouter = require('./routers/steps_router');
const server = express();

server.use(express.json());
server.use(helmet());
PORT = 1234;

// Test server to ensure it's running...
server.get('/', (req, res) => {
    res.json({message: "Server up and running!!"})
})

server.use('/api/dish', dishRouter);
server.use('/api/recipe', recipeRouter);
server.use('/api/ingredient', ingredientRouter);
server.use('/api/recipe/ingredient', recipeIngredientRouter);
server.use('/api/steps', stepsRouter);

// Keep last
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})