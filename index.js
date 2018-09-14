const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const server = express();

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('Your API is running.')
})

server.get('/dishes', (req, res) => {
  db('dishes')
      .then(dishes => res.status(200).json(dishes))
      .catch(err => res.status(500).json({ errorMsg: 'Could not retrieve dishes.' }))

})

server.get('/recipes', (req, res) => {
  db('recipes')
      .then(recipes => res.status(200).json(recipes))
      .catch(err => res.status(500).json({ errorMsg: 'Could not retrieve dishes.' }))

})

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
