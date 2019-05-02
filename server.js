const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

// Hello World test route
server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

module.exports = server;
