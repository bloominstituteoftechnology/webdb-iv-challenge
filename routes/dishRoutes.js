const express = require('express');
const dish = require('./recipeModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    dish.getDishes().then(dishes => {
        res.status(200).json(dishes);
      })
      .catch(err => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    dish.getDish(id).then(dish => {
        if(!dish) res.status(404).json({message: 'Dish not found'});
        res.status(200).json(dish);
    }).catch(err => res.status(500).json(err.message));
})

router.post('/', (req, res) => {
    // grab data from body
    const newDish = req.body;
    
    //save to database
    dish.addDish(newDish).then(ids => {
        res.status(201).json(ids);
    }).catch( err => {
        res.status(500).json(err.message);
    });
});


module.exports = router;