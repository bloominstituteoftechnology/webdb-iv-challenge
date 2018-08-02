const express = require('express');
const recipes = require('../../data/helpers/recipeDb');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const { name, dish_id } = req.body;
    if (!name || !dish_id) return next({ code: 400, errorMessage: 'Please provide name / dish_id' });
    try {
        const response = await recipes.addRecipe({ name, dish_id });
        return res.status(201).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The recipe could not be saved to the database' });
    }
})

router.get('/', async (req, res, next) => {
    try {
        const response = await recipes.getRecipes();
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The recipes information could not be retrieved.' });
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const response = await recipes.getRecipe(req.params.id);
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The recipe information could not be retrieved.' });
    }
})

module.exports = router;