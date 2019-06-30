const express = require('express');

const dishes = require('./dishesModel.js');

const router = express.Router();


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

    const dish = await dishes.getDish(id);

    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// create dishes
router.post('/', (req, res) => {
  const dish = req.body;

  dishes
    .addDish(dish)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});



module.exports = router;
