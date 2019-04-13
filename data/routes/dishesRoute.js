const express = require('express')
const router = express.Router()

const db = require('../helpers/db')

// endpoints
router.get('/', (req, res) => {
  db.getDishes()
    .then(dishes => {
      res
        .status(200)
        .json(dishes)
    })
    .catch(() => {
      res
        .status(500)
        .json({message: 'Failed to get dish'})
    })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  db.getDishes(id)
    .then(dish => {
      if(dish) {
        res
          .status(200)
          .json(dish)
      } else {
        res
          .status(404)
          .json({message: 'Dish not found under current id'})
      }
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({message: 'Failed to get dish'})
    })
})

router.post('/', (req, res) => {
  const dish = req.body;

  if(dish.dish_name) {
    db.addDish(dish)
      .then(newDish => {
        res
          .status(201)
          .json(newDish)
      })
      .catch(() => {
        res
          .status(500)
          .json({message: 'Failed to add dish'})
      })
  } else {
    res
      .status(400)
      .json({message: 'Missing dish_name'})
  }
})

module.exports = router;