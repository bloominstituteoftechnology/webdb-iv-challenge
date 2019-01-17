const express = require('express');
const router = express.Router();

const recipesDb = require('../data/recipesModel');


router.get('/', (req, res) => {
    recipesDb.get()
      .then(recipes => {
        res.json(recipes)
      })
      .catch(err => {
        res.status(500).json({ message: "Could not fetch Recipes" })
      })
  });


  router.get('/:id', (req, res) => {
    const {id} = req.params;
    recipesDb.get(id)
      .then(recipe => {
        if(Object.keys(recipe).length === 0){
          res.status(404).json({ message: "Invalid Recipe ID" })
        } else {
          res.json(recipe)
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Could not find that Recipe" })
      })
  });

  router.post('/', (req, res) => {
      const recipe = req.body;
      if(recipe.recipe_name && recipe.dish_id){
          recipesDb.add(recipe)
            .then(newRecipe => {
                res.status(201).json(newRecipe)
            })
            .catch(err => {
                res.status(500).json({ message: "Unable to add this new recipe." })
            })
      } else if(recipe.recipe_name){
          res.status(400).json({ message: "New recipes require a dish ID"})
      }
      else if(recipe.dish_id) {
          res.status(400).json({ message: "New recipes require a name" })
      } else {
          res.status(400).json({ message: "New recipes need a name and Dish ID"})
      }
  })

  module.exports = router; 