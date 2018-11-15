const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();
server.use(express.json());

// [GET] /
server.get('/', (req, res) => {
    res.json({ api: 'running'});
});

// [GET] /dishes
server.get('/dishes', (req, res) => {
    db('dishes')
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving dishes' });
        })
})

// [GET] /recipes
server.get('/recipes', (req, res) => {
    db('recipes')
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving recipes' });
        })
})

const port = 9000;
server.listen(port, () => {
    console.log(`\nListening on port ${port}\n`);
});