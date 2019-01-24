const express = require('express');
const knex = require('knex');

const server = express();
const PORT = 8080;

server.use(express.json());

server.listen(PORT, () => {
    console.log(`I'm alive, I'm alive, I am so alive.`)
})