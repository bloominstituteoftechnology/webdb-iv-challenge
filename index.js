const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');

const server = express();
server.use(express.json());
server.use(helmet());

//sanity check endpoint

server.get('/', (req, res) => {
    res.send('it lives!');
})

const port = 6000
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})