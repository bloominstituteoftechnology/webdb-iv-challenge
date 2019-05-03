const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./dishes/dishes-router');
const recipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

// Hello World test route
server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

module.exports = server;
