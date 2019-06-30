const express = require('express');
const dish = require('./recipeModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    dish.getRecipes().then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(err => res.status(500).json(err.message));
});

router.post('/', (req, res) => {
    // grab data from body
    const newRecipe = req.body;
    
    //save to database
    dish.addRecipe(newRecipe).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});


module.exports = router;