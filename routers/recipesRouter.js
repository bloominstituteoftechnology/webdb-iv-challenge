//get access to helper methods
const recipeDb = require('../data/helpers/recipe_bookDb')

//create router
const express = require('express');
const router = express.Router();

//*** */route handlers/ endpoints******
//get all recipes
router.get('/', (req, res) =>{
    recipeDb.getRecipes()
    .then(recipes =>{
        res.status(200)
        res.json(recipes)
    })
    .catch(err =>{
        res.status(500).json({error:"Unable to retrieve recipes"})
    })
})

//add a recipe
router.post('/', (req, res) =>{
    const newRecipe = req.body;

    recipeDb.addRecipe(newRecipe)
    .then(id =>{
        res.status(201)
        res.json(id)
    })
    .catch(err =>{
        res.status(500).json({error:"Unable to add recipe"})
    })
    
})

//export router
module.exports = router;