const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/dishes', (req, res) => {
  db('dishes')
    .then((dish) => {
      res.status(200).json(dish);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`server up and running on ${PORT}`);
});
