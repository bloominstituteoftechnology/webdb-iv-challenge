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