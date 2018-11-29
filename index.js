const express = require('express');

const server = express();

const db = require('./data/datafile.js');

server.use(express.json());

// ENDPOINTS

//getDishes(): should return a list of all dishes in the database.
server.get('/api/dishes', (req, res) => {
  db.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err));
});

//addDish(dish): should add the dish to the database and return the id of the new dish.
server.get('/api/cohorts/:cohortid', (req, res) => {
  const { cohortid } = req.params;
  
  db('cohorts')
  .where({id: cohortid})
  .then(cohorts => res.status(200).json(cohorts))
  .catch(err => res.status(500).json(err));
});

//getDish(id): should return the dish with the provided id and include a list of the related recipes.
//getRecipes(): should return a list of all recipes in the database including the dish they belong to.
//addRecipe(recipe): should add a recipe to the database and return the id of the new recipe

//server running endpoint
server.get('/', (req, res) => {
  res.json({ api: 'this server is up and running!' });
});

server.listen(8888, () => console.log('\n== Port 8888 ==\n'));