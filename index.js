const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json()); // don't forget this

server.get('/', (req, res) => {
  res.send('API Running...');
});

server.get('/dishes', (req, res) => {
  db('dishes')
   .then(dishes => res.status(200).json(dishes))
   .catch(err => res.status(500).json({ error: 'Dishes not retrieved'}));
});















const port = 8800;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});