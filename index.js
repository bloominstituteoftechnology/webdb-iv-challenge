const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello FSW12');
});

server.get('/api/recipes', (req, res) => {
    db('recipes')
        .select('name')
        .then(cohorts => {
            res.status(200).json(cohorts);
        })
        .catch(err => res.status(500).json(err));
} );
server.listen(8000);