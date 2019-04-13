const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const dishRoutes = require('./routes/dishesRoutes');

server.use(helmet());
server.use(logger());
server.use(express.json())
server.use('/api/dishes', dishRoutes);


module.exports = server;