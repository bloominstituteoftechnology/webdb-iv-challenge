const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const server = express();

const db = require('./data/dbHelpers.js');;
const PORT = 9090;

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.send('<h2>API</h2>'));

// GET DISHES
db.getDishes()
  .then(dishes => console.log('dishes', dishes))
  .catch(err => console.log('error', err));

// GET DISH BY ID
db.getDish(1)
  .then(dish => console.log('dish', dish))
  .catch(err => console.log('error', err));

// GET RECIPES
db.getRecipes()
  .then(recipes => console.log(recipes))
  .catch(err => console.log('error', err));

server.listen(PORT, _ => console.log('Listening on port ' + PORT));