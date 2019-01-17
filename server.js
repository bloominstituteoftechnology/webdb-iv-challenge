const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());
server.use(morgan('shot'));


server.get('*', (req, res) => {
    res.send('server connected');
});

module.exports = server;