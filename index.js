const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

// ENDPOINTS


//server running endpoint
server.get('/', (req, res) => {
  res.json({ api: 'this server is up and running!' });
});

server.listen(8888, () => console.log('\n== Port 8888 ==\n'));