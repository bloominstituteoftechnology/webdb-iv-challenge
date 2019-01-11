const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = 1234;

server.use(express.json());

server.get('/', (req, res) => {
  res.json({message: "Up and Running!"});
})


// Endpoints here


// Keep last
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})