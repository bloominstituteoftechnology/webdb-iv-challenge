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

module.exports = router;