const express = require('express');
const helmet = require('helmet');
const knex= require('knex');
const morgan=require('morgan');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development); 

const server = express();

server.use(helmet());
server.use(morgan('tiny'));
server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's Alive!");
})

getDishes = server.get('/api/dishes', (req,res) => {
  db('dishes')
  .then(dishes => {
    res.status(200).json(dishes)
  })
  .catch(err => res.status(500).json({ error: "The dishes information could not be retrieved. "}))
})

getRecipes = server.get('/api/recipes', (req, res) => {
  db('recipes')
  .then(recipes => {
    res.status(200).json(recipes)
  })
  .catch(err => res.status(500).json({ error: "The recipes information could not be retrieved. "}))
})

getDish = server.get('/api/dishes/:id', (req, res) => {
  db('dishes')
    .where({ id: req.params.id })
    .first()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => 
    res.status(500).json(err));
});

getRecipe = server.get('/api/recipes/:id', (req, res) => {
  db('recipes')
    .where({ id: req.params.id })
    .first()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => 
    res.status(500).json(err));
});

server.listen(7200, () => console.log('\n Party at port 7200 '))