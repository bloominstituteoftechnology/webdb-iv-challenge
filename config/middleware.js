const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const dishesRouter = require('../routers/dishesRouter.js');

module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(morgan('dev'));

    server.use('/api/dishes', dishesRouter);
};