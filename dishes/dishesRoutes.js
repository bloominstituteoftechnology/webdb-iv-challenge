const express = require('express');

const dishes = require('./dishesModel.js');

const router = express.Router();

// get a list of dishes
router.get('/', (req, res) => {
  dishes
    .getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json(err));
});

// get a dish by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const course = await dishes.getDish(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// create dishes
router.post('/', (req, res) => {
  const course = req.body;

  dishes
    .addDish(course)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// update dishes
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  dishes
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

// delete dishes
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  dishes
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