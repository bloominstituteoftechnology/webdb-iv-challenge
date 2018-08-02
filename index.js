const express = require('express');
const db = require('./data/db');

const server = express();
server.use(express.json());

server.listen(8000, () => console.log('API is running on port 8000...'));