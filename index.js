

const express = require('express');
const knex = require('knex')

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());


//endpoint
server.get('/api/Dish', (req, res) => {

    db('Dish')
        .then(Dish => res.status(200).json(Dish))
        .catch(err => res.status(500).json(err))
})

server.get('/api/Recipes', (req, res) => {

    db('Recipes')
        .then(Recipes => res.status(200).json(Recipes))
        .catch(err => res.status(500).json(err))
})

server.get('/api/Ingrediants', (req, res) => {

    db('Ingrediants')
        .then(Recipes => res.status(200).json(Recipes))
        .catch(err => res.status(500).json(err))
})

const port = 6000
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})