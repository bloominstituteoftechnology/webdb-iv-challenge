const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json());


// ==== DISH REQUESTS ====

server.get('/dishes', (req, res) => {
    db('dishes')
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.get('/dishes/:id', (req, res) => {
    const { id } = req.params;

    db('dishes')
        .where({ id })
        .first()
        .then(dish => {
            if (dish) {
                res.status(200).json(dish)
            } else {
                res.status(404).json({ message: 'the dish with the specified ID could not be found'})
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


// ==== RECIPE REQUESTS ====

server.get('/recipes', (req, res) => {
    db('recipes')
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// ==== INGREDIENTS REQUESTS ====

server.get('/ingredients', (req, res) => {
    db('ingredients')
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


server.listen(3300, () => console.log('\n==== API is running... ====\n'));