const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const server = express();

const db = require('./data/dbHelpers.js');;
const PORT = 9090;

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.send('<h2>API</h2>'));

server.listen(PORT, _ => console.log('Listening on port ' + PORT));