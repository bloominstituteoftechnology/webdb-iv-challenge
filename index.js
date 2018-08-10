const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/dishes', (req, res) => {
  db('dishes')
    .then((dishes) => {
      res.status(200).json(dishes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get('/dishes/:id', (req, res) => {
  const { id } = req.params;
  db('dishes')
    .where({ id })
    .then((dish) => {
      res.status(200).json(dish);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.post('/dishes', (req, res) => {
  const dish = req.body;
  db('dishes')
    .insert(dish)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get('/recipes', (req, res) => {
  db('recipes')
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  db('recipes as r')
    .join()
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

server.post('/recipes', (req, res) => {
  const recipe = req.params;
  db('recipes')
    .insert((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`server up and running on ${PORT}`);
});
