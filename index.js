const express = require('express');
const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', async(req, res) => {
    await res.send('Hello there.');
});