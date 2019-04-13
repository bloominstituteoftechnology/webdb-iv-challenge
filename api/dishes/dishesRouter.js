const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../../knexfile.js');

//connection to the data base
const db = knex(knexConfig.development);

function findDishes() {
    return db('dishes');
}

function addDish(dish){
    return db('dishes')
    .insert(dish)
    .into('dishes');
}

function findDishById(id) {
    return db('dishes').where({id}).first();
}



// endpoints here for the dishes

//POST /api/dishes
router.post('/', async (req, res) => {
    try {
      const dish = req.body;
      if(dish.name.length > 0){
        const newDish = await addDish(dish);
        res.status(200).json(newDish);
      } else {
        res.status(404).json({message: "Please enter the name of the dish"});
      }
    }
    catch (err) {
      res.status(500).json({message: "There was an error while trying to save a dish to the data base"});
    }
  });
  
  
  //GET /api/dishes
  router.get('/', async (req, res) => {
    try {
      const dishesList  = await findDishes();
      res.status(200).json(dishesList);
    }
    catch (err) {
      res.status(500).json({message: "There was an error while trying to connect to the data base"});
    }
  });
  
  //GET /api/dishes/:id
  router.get('/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const dishById = await findDishById(id);
      if(dishById){
        res.status(200).json(dishById);
      } else {
        res.status(404).json({message: "Please provide the correct ID of the dish"})
      }
    }
    catch (err){
      res.status(500).json({message: "There was an error while trying to retrieve a dish from the data base"});
    }
  });



module.exports = router;