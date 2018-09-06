const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/', (req, res) => {
    res.send('API Running')
})
  
server.get('/api/dishes', (req, res) => {
    db('dishes')
      .then(dishes => {
        res.status(200).json(dishes);
      })
      .catch(err => res.status(500).json(err));
  });
 
server.get('/api/recipes', (req, res) => {
    db('recipes')
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(err => res.status(500).json(err));
  });

server.get('/api/ingredients', (req, res) => {
    db('ingredients')
      .then(ingredients => {
        res.status(200).json(ingredients);
      })
      .catch(err => res.status(500).json(err));
  });

server.get('/api/instructions', (req, res) => {
    db('instructions')
      .then(instructions => {
        res.status(200).json(instructions);
      })
      .catch(err => res.status(500).json(err));
  });
    
  server.listen(8000, () => console.log("server running on 8k"));