const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello FSW12');
});

server.listen(8000);