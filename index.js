const express = require('express');

const db = require('./data/models/models.js';

const server = express();
server.use(express.json());

// routing operations

// dish operations

// get dishes

server.get('/api/dishes', (req, res) => {
  db.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err));
});

// add to dishes

server.post('/api/dishes', (req, res) => {
  const dish = req.body;
  // console.log(dish);
  db.addDish(dish)
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});

// get a specific dish by id

server.get('/api/dishes/:id', (req, res) => {
  id = req.params.id;
  if(!id) {
    res status(400).json({ error: "Please provide an ID." });
  }
  db.getDish(id)
    .then(dish => res.status(200).json(dish))
    .catch(err => res.status(500).json(err));
});

// recipe operations

// get recipes

server.get('/api/recipes', (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

// add to recipes

server.post('/api/recipes', (req, res) => {
  const recipe = req.body;
  // console.log(recipe);
  db.addRecipe(recipe)
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});

// server instantiation

const port = 8000;

server.listen(port, console.log(`Server listening on port ${port}.`));
