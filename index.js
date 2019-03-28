const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.post('/recipes', (req, res) => {
  // we'll add our database code here shortly
});

server.listen(8000, () => console.log('Running on port 8000'));