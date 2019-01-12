const express = require('express');
const router = express.Router();

const getDB = require('../data/helpers/getDB');
const postDB = require('../data/helpers/postDB');

router.get('/', (req, res) => {
    getDB.getRecipes()
        .then(rows => {
            res.json(rows);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to get recipes' });
        });
})

router.post('/', (req, res) => {
    const recipe = req.body;

    postDB.addRecipe(recipe)
        .then(dishId => {
            res.status(201).json(dishId);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert recipe' });
        });
});

module.exports = router;