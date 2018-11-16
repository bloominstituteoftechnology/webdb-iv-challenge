//dependencies
const express = require('express')
const db = require('../data/dataFunctions')
const router = express.Router()

//end points
router.get('/', async (req, res) => {
    try {
        const dishes = await db.getDishes()
        res.status(200).json(dishes)
    } catch (err) {
        res.status(500).json({ error: 'An error happened while trying to get your dishes, plese do not blow us up on Yelp' })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const dish = await db.getDish(req.params.id)
        dish.length !== 0
            ? res.status(200).json(dish)
            : res.status(404).json({ message: 'That dish does not seem to be here... our bad' })
    } catch (err) {
        res.status(500).json({ error: 'We could not get that specific dish, ask your waiter for a different one' })
    }
})

router.post('/', async (req, res) => {
    if (!req.body.name) {
        res.status(404).json({ message: 'Your dish needs a name... try again.' })
    }
    try {
        const dish = await db.addDish(req.body)
        res.status(201).json(dish)
    } catch (err) {
        res.status(500).json({ error: 'We could not get that specific dish, ask your waiter for a different one' })
    }
})

module.exports = router