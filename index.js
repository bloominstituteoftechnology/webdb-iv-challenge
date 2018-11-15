const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());


//endpoint beginings

server.get('/', (req, res) => {
    res.json({ api: 'up' });
  });



server.listen(8000, () => console.log('\n== Running on port 8000 ==\n'));