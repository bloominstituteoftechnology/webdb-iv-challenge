const express = require('express');
const knex = require('knex');

const db_config = require('./knexfile.js')

const server = express();
const db = knex(db_config.development)
const PORT = 8080;

server.use(express.json());

// new file, helpers.js

server.get('/api/dishes/', (req, res) => {
    db('dishes')
    .then(dishesInfo => {
        res.send(dishesInfo)
    })
})

server.get('/api/recipes/', (req, res) => {
    db('recipes')
    .then(recipesInfo => {
        res.send(recipesInfo)
    })
})

server.get('/api/recipes/:id', (req, res) => {
    const {id} = req.params; 
    db('recipes').get(id)
    .then(action => {
        res.json(action)
    })
    .catch(error => {
        res.status(404)
        res.json(`Error 404 action not found`)
    })
})

server.post('/api/recipes', (req, res) => {
    const recipe = req.body;
    db('recipes').insert(recipe)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        res.status(500).json({Err: 'Failed to insert this recipe'})
    })
})

server.listen(PORT, () => {
    console.log(`I'm alive, I'm alive, I am so alive.`)
})