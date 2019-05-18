const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();
server.use(express.json());
const port = 7000;
server.listen(port, () => console.log(`Listening on port ${port}`));