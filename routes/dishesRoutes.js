const express = require('express');
const router = express();
const db = require('../data/helpers/dishesModel');

// READ in CRUD
router.get('/', async (req, res) => {
    try { 
        const dishes = await db.getDishes();
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

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try { 
        const dish = await db.getDishes(id);
        if(dish) {
            res.status(200).json(dish)
        } else {
            res.status(404).json({message: "We cannot find that dish"})
        }
    }
    catch(error) {
        res.status(500).json({message: 'Looks like theres an error on our side!'});
    }
})

module.exports = router;
