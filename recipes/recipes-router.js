const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
    const message500 = { message: 'Unable to get recipes' };

    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => { res.status(500).json(message500); });
});

router.post('/', (req, res) => {
    const { recipe_name, dish_id, instructions } = req.body;
    const message400 = { error: "Please provide recipe_name, dish_id and instructions for the recipe" }
    const message500 = { error: "There was an error while saving the recipe to the database" };

    if (recipe_name, dish_id, instructions) {
        Recipes.addRecipe(req.body)
            .then(recipe => { res.status(201).json(recipe) })
            .catch(err => { res.status(500).json(message500) })
    }
    else {
        res.status(400).json(message400);
    }
});

module.exports = router;