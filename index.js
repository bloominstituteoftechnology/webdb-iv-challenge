const express = require('express');
const helmet = require('helmet');

const Routes = require('./data/helpers/Routes');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/', Routes);

server.listen(9000, () => console.log('\nAPI running on 9k\n'));