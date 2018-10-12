const express = require('express');
const dishes = require('../models/dishesModel.js');
const router = express.Router();

router.get('/', (req, res)=>{
    dishes.getDishes()
        .then(dishes=>{
            if(dishes.length>0){
                res.status(200).json(dishes);
            }else{
                res.status(404).json('No dishes found.');
            }
        })
        .catch(err => res.status(500).json(err));
});

router.post('/', (req, res)=>{
    const {name} = req.body;
    dishes.addDish({name})
        .then(id =>{
            res.status(200).json(id);
        })
        .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    dishes.getDish(id)
        .then(dish=>{
            if(dish){
                res.status(200).json(dish);
            }else{
                res.status(404).json("Could not find that ID");
            }
        })
        .catch(err => res.status(500).json(err));
});



module.exports = router;