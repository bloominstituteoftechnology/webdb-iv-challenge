const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dishDb = require('./data/helpers/dishesModel')

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());


server.get('/dishes', async (req, res) => {
    try {
        const dishes = await dishDb.get();
        res.status(200).json(dishes)
    } catch (error) {
        res.status(500).send(error)
    }
});

server.get('/dishes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const dishes = await dishDb.get(id);
        res.status(200).json(dishes)
    } catch (error) {
        res.status(500).send(error)
    }
});

const port = 3300;
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port}... *.* ===\n`);
});
