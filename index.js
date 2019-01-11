const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();
const PORT = 4567;

 server.use(helmet());
 server.use(express.json());

 server.listen(PORT, () => {
     console.log(`API running on port ${PORT}`)
 })