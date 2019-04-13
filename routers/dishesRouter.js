//Access helper functions
const dishesDb = require('../data/helpers/recipe_bookDb');

//Create Router
const express = require('express');
const router = express.Router();

//get all dishes
router.get('/', (req, res) =>{
    dishesDb.getDishes()
    .then(dishes =>{
        res.status(200)
        res.json(dishes)
    })
    .catch(err =>{
        res.status(500).json({error:"Unable to retrieve dishes"})
    })
})

//get specific dish
router.get('/:id', (req,res) =>{
    const dish_id = req.params.id;

    dishesDb.getDish(dish_id)
    .then(dish =>{
        res.status(200)
        res.json(dish[0])
    })
    .catch(err =>{
        res.status(500).json({error:"Unable to retrieve dish"})
    })
})

//Add a dish
router.post('/', (req, res) =>{
    const newDish = req.body;

    dishesDb.addDish(newDish)
    .then(id => {
        res.status(201)
        res.json(id)
    })
    .catch(err =>{
        res.status(500).json({error:"Unable to add dish"})
    })
})


//Export router
module.exports = router;