const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const knex = require('knex');
const knexConfig = require('./knexfile');
const server = express();
const db = knex(knexConfig.development);

server.use(helmet());
server.use(logger());


module.exports = server;