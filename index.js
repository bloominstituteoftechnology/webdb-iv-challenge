const express = require('express');
const dishRoute = require('./Routes/dishRoute');
const recipeRoute = require('./Routes/recipeRoute');
const server = express();
const logger = require('morgan');
const helmet = require('helmet');
const PORT = 4000;
server.use(express.json());
server.use(helmet());
server.use(logger('dev'))
server.disable("etag");

server.use('/api/dishes', dishRoute);
server.use('/api/recipes', recipeRoute);
server.listen(PORT, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${PORT}`);
});