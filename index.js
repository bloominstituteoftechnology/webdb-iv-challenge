const express = require('express');
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './recipes.sqlite3',
  },
  useNullAsDefault: true,
});

const server = express();

server.use(express.json());

server.post('/recipes', (req, res) => {
  // we'll add our database code here shortly
});

server.listen(8000, () => console.log('Running on port 8000'));