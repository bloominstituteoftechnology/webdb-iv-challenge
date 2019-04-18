const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('../dishes/dishes-router.js');
const recipesRouter = require('../recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dish', dishesRouter);
server.use('/api/recipe', recipesRouter);

server.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = server;