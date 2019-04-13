const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const knexConfig = require('./knexfile');
const db = require('./data/methods');

 const server = express();
 server.use(express.json());
 server.use(helmet());
 server.use(morgan('dev'));


//sanity check endpoint
server.get('/', (req, res) => {
  res.send('it lives!');
})

//dishes endpoints
server.get('/dishes', (req, res) => {
  db.getDishes()
  .then(dishes => res.status(200).json(dishes))
  .catch(err => res.status(500).json({ message: 'There was an error retrieving the dishes' }))
})

server.get('/dishes/:id', (req, res) => {
  db.getDish(req.params.id)
  .then(dish => res.status(200).json(dish))
  .catch(err => res.status(500).json({ message: err }))
})

//recipes endpoints
server.get('/recipes', (req, res) => {
  db.getRecipes()
  .then(recipes => res.status(200).json(recipes))
  .catch(err => res.status(500).json({ message: 'There was an error retrieving the recipes' }))
})

server.get('/recipes/:id', (req, res) => {
  db.getRecipe(req.params.id)
  .then(recipe => res.status(200).json(recipe))
  .catch(err => res.status(500).json({ message: 'There was an error retrieving the recipe' }))
})
//ingredients endpoints
server.get('/ingredients', (req, res) => {
  db.getIngredients()
  .then(ingredients => res.status(200).json(ingredients))
  .catch(err => res.status(500).json({ message: 'There was an error retrieving the ingredients' }))
})
 const port = 3300
 server.listen(port, function() {
   console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
 })
