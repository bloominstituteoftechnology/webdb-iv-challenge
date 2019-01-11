const express = require('express');
const router = express.Router();

const dishesDb = require('../data/dishesModel');


router.get('/', (req, res) => {
    dishesDb.get()
      .then(dishes => {
        res.json(dishes)
      })
      .catch(err => {
        res.status(500).json({ message: "Could not fetch Dishes" })
      })
  });
  
  
  router.get('/:id', (req, res) => {
    const {id} = req.params;
    dishesDb.get(id)
      .then(dish => {
        if(Object.keys(dish).length === 0){
          res.status(404).json({ message: "Invalid Dish ID" })
        } else {
          res.json(dish)
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Could not find that Dish" })
      })
  });

  router.post('/', (req, res) => {
      const dish = req.body;
      if(dish.dish_name){
          dishesDb.add(dish)
            .then(newDish => {
                res.status(201).json(newDish)
            })
            .catch(err => {
                res.status(500).json({ message: "Unable to add this new dish." })
            })
      } else{
          res.status(400).json({ message: "New dishes require a name" })
      }
  })

  module.exports = router;