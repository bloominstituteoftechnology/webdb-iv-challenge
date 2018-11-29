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
server.get('/api/dishes/:dishid', (req, res) => {
  const { dishid } = req.params;
  
  db.getDish(dishid)
  .where({id: dishid})
  .then(dishes => res.status(200).json(dishes))
  .catch(err => res.status(500).json(err));
});

//getDish(id): should return the dish with the provided id and include a list of the related recipes.
server.post('/api/dishes', (req, res) => {
  const dish = req.body;
  
  db.addDish(dish)
    //.insert(dish)
    .then(dish => {
      res.status(201).json(dish);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error inserting dish', err });
    });
});

//getRecipes(): should return a list of all recipes in the database including the dish they belong to.
//addRecipe(recipe): should add a recipe to the database and return the id of the new recipe

//server running endpoint
server.get('/', (req, res) => {
  res.json({ api: 'this server is up and running!' });
});

server.listen(8888, () => console.log('\n== Port 8888 ==\n'));

        //.then(ids => ({ id: ids[0] }));