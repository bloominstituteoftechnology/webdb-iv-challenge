const express = require('express');
const db = require('./recipesModel');
const router = express.Router();


//GET ALL DISHEs
router.get('/', (req, res)=> {
    db
    .getDishes()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {res.status(500).json(err)});
})

//GET ALL RECIPES
router.get('/recipes', (req, res)=> {
    db
    .getRecipes()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => res.status(500).json(err));
});

//ADD DISH
router.post('/', (req, res)=>{
    let dish = req.body

    db
    .addDish(dish)
    .then(response=> {
        res.status(200).json(response);
    })
    .catch(err => {res.status(500).json(err)});
})

module.exports = router;