const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

const port = 4234;
server.listen(port, console.log(`====== API ${port} ======`));
