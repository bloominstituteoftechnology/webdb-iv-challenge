const express = require('express');

const dishes = require('./dishesModel');

const router = express.Router();

router.get('/', (req, res) => {
  dishes
    .find()
    .then((dishes) => {
      res.status(200).json(dishes);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  dishes
    .findById(id)
    .then((dish) => {
      if (!dish) {
        return res.status(404).json({
          message: `dish with id ${id} could not be found.`,
        });
      }
      res.status(200).json(dish);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const dish = { name };
  if (!name) {
    return res.status(400).send({
      errorMessage: 'Please provide a name for the dish.',
    });
  }
  dishes
    .add(dish)
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
  const newdishe = { name, dish_id };
  if (!name || !dish_id) {
    return res.status(400).send({
      errorMessage: 'Please provide a name and dish id for the dishe.',
    });
  }
  dishes.update(id, newdishe).then((count) => {
    if (!count) {
      return res.status(404).json({
        message: 'No dishe found to update',
      });
    }
    res.status(200).json({ message: `${count} record updated` });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  dishes
    .remove(id)
    .then((remove) => {
      if (!remove) {
        return res.status(404).send({
          message: `The dishe with the specified ID ${id} does not exist.`,
        });
      }
      res.status(200).send({ message: `dishe with ID ${id} was removed.` });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
