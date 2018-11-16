const express = require('express');
const recipeDb = require('../data/helpers/recipeDb.js');

const router = express.Router();

// [GET] /api/recipes
router.get('/', (req, res) => {
    recipeDb.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving recipes' });
        });
});

// [POST] /api/recipes
// TO DO ------> return recipeDb.getRecipe(id) once that function is created
router.post('/', (req, res) => {
    recipeDb.addRecipe(req.body)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error adding dish' });
        });
});

module.exports = router;