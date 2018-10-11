const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);


const server = express();

server.use(helmet());
server.use(morgan('combined'));
server.use(express.json());

const port = 9000;

server.get('/api/dishes', (req, res)=> {
    db('dishes')
        .then(dishes=> {
            if (!dishes) {
                res.status(404).json({message: "No dishes"});
            }
            res.status(200).json(dishes);
        })
        .catch(err=> {
            res.status(500).json(err);
        })
});

server.listen(port, ()=> console.log(`API running on port ${port}`));