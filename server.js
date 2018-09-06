const express = require('express');

const server = express();

const dishesRoutes = require('./router/dishesRouter')

server.use(express.json());

server.use('/dishes', dishesRoutes);

server.listen(8000, () => {
    console.log('====API====')
})