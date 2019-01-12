// Building server
const express = require('express');
const server = express();

//Setting up access to database
const dbConfig = require('./knexfile');
const knex = require('knex');

const db = knex(dbConfig.development);

// Middleware
server.use(express.json());

//Endpoints
server.get('/', (req, res) => {
  res.send('Home');
});

server.get('/api/dishes', (req, res) => {
  db('dishes')
    .then(dishes => {
      res.json(dishes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Listener
const PORT = 5678;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
