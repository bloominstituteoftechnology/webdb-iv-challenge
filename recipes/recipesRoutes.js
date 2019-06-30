const express = require('express');

const recipes = require('./recipesModel.js');

const router = express.Router();

// get a list of recipes
router.get('/', (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => res.status(500).json(err));
});

// get a dish by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const course = await recipes.getRecipe(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// create recipes
router.post('/', (req, res) => {
  const course = req.body;

  recipes
    .addRecipe(course)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// update recipes
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  recipes
    .update(id, changes)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to update' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json(err));
});

// delete recipes
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  recipes
    .remove(id)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to delete' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;