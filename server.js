
const express = require('express');

const dishes_router = require('./routes_models/dishes_router');
const recipes_router = require('./routes_models/recipes_router');

const server = express();

server.use(express.json());

server.use('/api/dishes_router', dishes_router);
server.use('/api/recipes_router', recipes_router);

module.exports = server;