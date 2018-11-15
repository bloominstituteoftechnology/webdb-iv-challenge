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
        });
});

// [GET] /recipes
server.get('/recipes', (req, res) => {
    db('recipes')
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving recipes' });
        });
});

// [GET] /ingredients
server.get('/ingredients', (req, res) => {
    db('ingredients')
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving ingredients' });
        });
});

// [GET] /recipe-ingredients
server.get('/recipe-ingredients', (req, res) => {
    db('recipe_ingredients')
        .then(ingredients => {
            res.status(200).json(ingredients);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving recipe ingredients' });
        });
});

// [STEPS] /steps
server.get('/steps', (req, res) => {
    db('steps')
        .then(steps => {
            res.status(200).json(steps);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving steps' });
        })
})

const port = 9000;
server.listen(port, () => {
    console.log(`\nListening on port ${port}\n`);
});