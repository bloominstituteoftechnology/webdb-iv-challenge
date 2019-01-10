const express = require('express');
const knex = require('knex');
const db_config = require('./knexfile.js');

const server = express();
const db = knex(db_config.development);
const PORT = 5678;

server.use(express.json());

server.listen(PORT, () => {
 console.log(`listening on port ${PORT}`);
});