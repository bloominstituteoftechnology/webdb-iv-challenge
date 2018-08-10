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

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`server up and running on ${PORT}`);
});
