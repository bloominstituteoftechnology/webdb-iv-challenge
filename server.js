const express = require('express');
const knex = require('knex')

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/recipeBook.db3',
  },
  useNullAsDefault: true, // needed for sqlite
};
const db = knex(knexConfig);

const server = express();

server.use(express.json());



const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
