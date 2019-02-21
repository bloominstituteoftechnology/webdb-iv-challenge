const express = require('express');
const router = express();
const db = require('../data/helpers/dishesModel');

router.get('/', async (req, res) => {
    try { 
        const dishes = await db.find();
        if(dishes.length > 0) {
            res.status(200).json(dishes)
        } else {
            res.status(404).json({message: "It looks like there are no dishes"})
        }
    }
    catch(error) {
        res.status(500).json({message: 'Looks like theres an error on our side!'});
    }
})

module.exports = router;
