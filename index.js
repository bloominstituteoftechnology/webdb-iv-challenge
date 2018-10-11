// server endpoints go here!

const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());





server.get('/', (req, res) => {
  res.send('WELCOME TO COOOOOOKING MAMAAAAAAA');
})


server.get('/cooking/dishes', (req, res) => {
  db('dishes')
    .then(dishes => {

      if (!dishes || dishes.length < 1) {
        res.status(404).json({ missingError: 'Hmm... It Seems All the Dishes are on Vacation! Come back soon or try again!' });
      } else {
        res.status(200).json(dishes);
      }
  
    })
    .catch(err => res.status(500).json(err));    
});


server.get('/cooking/recipes', (req, res) => {
  db('recipes')
    .then(recipes => {

      if (!recipes || recipes.length < 1) {
        res.status(404).json({ missingError: 'Hmm... It Seems All the Recipes are on Vacation! Come back soon or try again!' });
      } else {
        res.status(200).json(recipes);
      }
    })
    .catch(err => res.status(500).json(err));
});


server.get('/cooking/dishes/:id', (req, res) => {
  const { id } = req.params;

  db('dishes').where({ id }).first()
    .then(dish => {

      if (!dish) {
        res.status(404).json({ missingError: 'Hmm... It Seems the dish is on Vacation! Come back soon or try again!' });
      } else {
        res.status(200).json(dish);
      }
    })
    .catch(err => res.status(500).json(err));
});


server.post('/cooking/dishes', (req, res) => {
  const { name } = req.body;

  db.insert({ name })
  .into('dishes')
  .then(dish => {

    if (!req.body.name) {
      res.status(400).json({ fillError: 'Please create a dish name' });
    } else {
      res.status(201).json(dish);
    }

  })
  .catch(err => {
    res.status(500).json(err);
  });
});




server.post('/cooking/recipes', (req, res) => {
  const { name, dish_id } = req.body;  

  db.insert({ name, dish_id })
    .into('recipes')
    .then(recipe => {

      if (!req.body.name || !req.body.dish_id) {
        res.status(400).json({ fillError: 'Please create a recipe name, or reference to the dish_id' });
      } else {
        res.status(201).json(recipe);
      }

    })
    .catch(err => res.status(500).json(err));
});







const port = 4403;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
})