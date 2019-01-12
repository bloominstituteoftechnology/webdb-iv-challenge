const express = require('express');
const knex = require('knex');
const helmet = require('helmet');

const server = express();
const dishes = require('./routes/dishes');
const recipes = require('./routes/recipe')

server.use(express.json());
server.use(helmet());

server.use('/api/dish', dishes);
server.use('/api/recipe', recipes);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});