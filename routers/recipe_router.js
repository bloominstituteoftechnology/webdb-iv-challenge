const express = require('express');
const recipeDB = require('../data/helpers/recipeDB');
const router = express.Router();
// const knex = require('knex');
// const dbConfig = require('../knexfile');
// const db = knex(dbConfig.development);

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    recipeDB.getRecipes()

    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find recipes"});
    })
});

router.post('/', (req, res) => {
    const recipe = req.body;

    if (recipe.recipe_name && recipe.dish_id) {
        recipeDB.addRecipe(recipe)
        .then((id) => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ err: "Failed to insert recipe"});
        });
    } else {
        res.status(400).json({message: "Provide recipe.recipe_name and recipe.dish_id."})
    }
});
// *This works the first time, but won't second or if it's duplicate.
// *This is because the recipe_name is .unique()!

module.exports = router;