const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const helper = require('./helpers');
const server = express();
const knexConfig = require ('./knexfile.js');

const db = knex(knexConfig.development);


// get all the dishes

server.get('/api/dishes', (req, res) => {
    helper.getDishes()
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// add a dish

server.post('/api/dishes', (req, res) => {
    const body = req.body
    helper.addDish(body).then(dish => {
            res.status(201).json(dish);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// get a dish by id

server.get ('/api/dishes/:id', (req, res) => {
    const id = req.params.id;
  helper.getDish (id)
    .then (dish => {
      res.status (200).json (dish);
    })
    .catch (err => {
      res.status (500).json (err);
    });
});

// get recipes

server.get ('/api/recipes', (req, res) => {
  helper.getRecipes ()
    .then (dishes => {
      res.status (200).json (dishes);
    })
    .catch (err => {
      res.status (500).json (err);
    });
});

// add recipes

server.post ('/api/recipes', (req, res) => {
  const body = req.body;
  addRecipe (body).then (dish => {
      res.status (201).json (dish);
    })
    .catch (err => {
      res.status (500).json (err);
    });
});



const port = 5000;
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
