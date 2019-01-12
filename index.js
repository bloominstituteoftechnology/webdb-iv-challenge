const db = require('./data/db.js')
const express = require('express');

const PORT = 4001;
const server = express();

server.use(express.json());

server.listen(PORT, err => {
    console.log(`Server is running on ${PORT}`);
});