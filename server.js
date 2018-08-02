const express = require('express');
const server = express();

server.use(express.json());

server.listen(8222, () => console.log('API Running on port 8222...'));