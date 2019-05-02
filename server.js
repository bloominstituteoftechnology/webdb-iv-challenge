const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./dishes/dishes-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishesRouter);

// Hello World test route
server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

module.exports = server;
