const express = require('express');
const helmet = require('helmet');

const dishesRoute = require('./dishes/dishesRoutes.js');

const server = express();

server.use(helmet());
server.use(express.json());

// sanity check
server.get('/', (req, res) => {
    res.send("It's working, buddy.")
});

server.use('/api/dishes', dishesRoute);

const port = 7777;
server.listen(port, () => console.log(`***API running on ${port}`));