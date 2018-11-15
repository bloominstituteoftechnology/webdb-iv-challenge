const express = require('express');
const server = express();

const db = require('./data/db')

server.use(express.json());

const port = 3300;

server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
    
  });

server.get('/api/dishes', (req, res) => {
    db.getDishes()
    .then(dishes => {
        res.status(200).json(dishes)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.post('/api/dishes', (req,res) => {
    const newDish = req.body;
    db.addDish(newDish)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.get('/api/dishes/:id', (req,res) => {
    const {id} = req.params;
    db.getDish(id)
    .then(dish => {
        res.status(200).json(dish)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/api/recipes', (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.post('/api/recipes', (req,res) => {
    const newRecipe = req.body;
    db.addRecipe(newRecipe)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
