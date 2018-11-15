const express = require('express');
const knex = require('knex');

const server = express();
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
server.use(express.json());
const port = 8200;
server.listen(port, () => console.log(`\n==^_^== Listening on http://localhost:${port} ==^_^==\n`))
