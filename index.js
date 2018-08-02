const express = require('express');
const server = express();
const db = require('./db/db_library.js');

server.use(express.json());


server.get('/api/dishes', (req, res) => {
    db.getDishes()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The dishes could not be retrieved.'})
    })
})

server.get('/api/dishes/:id', (req, res) => {
    const id = req.params.id;
    db.getDish(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The dish could not be retrieved.'})
    })
})

server.get('/api/recipes', (req, res) => {
    db.getRecipes()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The recipes could not be retrieved.'})
    })
})

server.get('/api/recipes/:id', (req, res) => {
    const id = req.params.id;
    db.getRecipe(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The recipe could not be retrieved.'})
    })
})

server.post('/api/dishes', (req, res) => {
    const dish = req.body;
    db.addDish(dish)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'There was an error saving dish to the database.'})
    })
})

const port = 8000;
server.listen(port, () => console.log('API running'));