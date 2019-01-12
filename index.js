const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile')

const PORT = 5123;

const db = require('./helpers')

server.use(express.json());

server.get('/api/dishes', (req, res) => {
    db.getDishes()
    .then(dishes => {
        res.json(dishes)
    })
})

server.post('/api/dishes', (req, res) => {
    const dish = req.body;

    db.addDish(dish)
    .then(id => {
        res.json(id)
    })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

db.shoppingList('Fuzzys');