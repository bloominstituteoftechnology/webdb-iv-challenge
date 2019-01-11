const express = require('express');
const dishesDb = require('./data/helpers/dishesDb');
const recipesDb = require('./data/helpers/recipesDb');

const server = express();

server.use(express.json());

server.get('/dishes', (req, res) => {
  dishesDb
    .getDishes()
    .then(response => {
      res
        .status(200)
        .json(response)
        .end()
    })
    .catch(err => console.log(err))
})

server.get('/dishes/:id', (req, res) => {
  const { id } = req.params;
  dishesDb
    .getDish(id)
    .then(response => {
      res
        .status(200)
        .json(response)
        .end()
    })
    .catch(err => console.log(err))
})

server.post('/dishes', (req, res) => {
  const name = req.body.name;
  const dish = { name };
  if(!name) {
    res.send('Provide a name')
  } else {
    dishesDb
      .addDish(dish)
      .then(response => {
        res
          .status(200)
          .json(response)
          .end()
      })
      .catch(err => console.log(err))
  }
})

server.get('/recipes', (req, res) => {
  recipesDb
    .getRecipes()
    .then(response => {
      res
        .status(200)
        .json(response)
        .end()
    })
    .catch(err => console.log(err))
})

server.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  recipesDb
    .getRecipe(id)
    .then(response => {
      res
        .status(200)
        .json(response)
        .end()
    })
    .catch(err => console.log(err))
})

server.post('/recipes', (req, res) => {
  const name = req.body.name;
  const dish_id = req.body.dish_id;
  const recipe = { name, dish_id };
  recipesDb
    .addRecipe(recipe)
    .then(response => {
      res
        .status(200)
        .json(response)
        .end()
    })
    .catch(err => console.log(err))
})

server.listen(8000, () => console.log('API running on Port 8000'));