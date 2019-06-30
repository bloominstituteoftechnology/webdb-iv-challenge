const express = require('express');
const recipes = require('../models/dishesModel');
const router = express.Router();

router.get('/', (req, res)=>{
    recipes.getRecipes()
        .then(recipes=>{
            if(recipes.length>0){
                res.status(200).json(recipes);
            }else{
                res.status(400).json('No recipes found.');
            }
        })
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res)=>{
    const {dish_id, name} = req.body;
    const recipe = {dish_id, name}
    recipes.addRecipe(recipe)
        .then(id=>{
            if(id>0){
                res.status(200).json(id)
            }else{
                res.status(400).json('Could not add for some reason. Report bug to kevinn858@gmail.com');
            }
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;