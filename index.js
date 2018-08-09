const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

const PORT = 3333;

server.listen(PORT, () => {
  console.log(`server up and running on ${PORT}`);
});
