const express = require('express');
const recipes = require('../../data/helpers/recipeDb');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const response = await recipes.getRecipes();
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The recipes information could not be retrieved.' });
    }
})

module.exports = router;