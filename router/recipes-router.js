const router = require('express').Router()

const Recipes = require('./recipes-model')


router.get('/recipe/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({message: 'we ran into error retrieving the recipe'})
    })
})

router.get('/recipe/:id', async (req, res) => {
    try {
      const recipes = await Recipes.findById(req.params.id);
      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: 'We could not find the recipe' });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the recipe' });
    }
  });
  
  router.post('/recipe/', async (req, res) => {
    const recipe = req.body;
    if (recipe.name) {
      try {
        const inserted = await Recipes.add(recipe);
        res.status(201).json(inserted);
      } catch (error) {
        res
          .status(500)
          .json({ message: 'We ran into an error creating the recipe' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of the recipe' });
    }
  });
  
  router.put('/recipe/:id', async (req, res) => {
    const changes = req.body;
  
    if (changes.name) {
      try {
        const updated = await Recipes.update(req.params.id, changes);
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({
            message: 'That recipe does not exist',
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: 'We ran into an error updating the recipe' });
      }
    } else {
      res.status(400).json({
        message: 'Please provide the name of the recipe',
      });
    }
  });
  
  router.delete('/recipe/:id', async (req, res) => {
    try {
      const dishes = await Recipes.remove(req.params.id);
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({
          message: 'That recipe does not exist, perhaps it was deleted already',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error removing the recipe' });
    }
  });
  
  module.exports = router;