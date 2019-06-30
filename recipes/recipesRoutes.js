const express = require('express');

const recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
  recipes
    .find()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const { name, dish_id } = req.body;
  const recipe = { name, dish_id };
  if (!name || !dish_id) {
    return res.status(400).send({
      errorMessage: 'Please provide a name and dish id for the recipe.',
    });
  }
  recipes
    .add(recipe)
    .then((ids) => {
      res.status(201).json(ids);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, dish_id } = req.body;
  const newrecipe = { name, dish_id };
  if (!name || !dish_id) {
    return res.status(400).send({
      errorMessage: 'Please provide a name and dish id for the recipe.',
    });
  }
  recipes.update(id, newrecipe).then((count) => {
    if (!count) {
      return res.status(404).json({
        message: 'No recipe found to update',
      });
    }
    res.status(200).json({ message: `${count} record updated` });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  recipes
    .remove(id)
    .then((remove) => {
      if (!remove) {
        return res.status(404).send({
          message: `The recipe with the specified ID ${id} does not exist.`,
        });
      }
      res.status(200).send({ message: `recipe with ID ${id} was removed.` });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
