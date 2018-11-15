const express = require('express')
const db = require('../data/dataAccess')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const dishes = await db.getDishes()
        res.status(200).json(dishes)
    } catch (e) {
        res.status(500).json({ error: 'An error occuried while trying to access the dishes from the database.' })
    }
})

router.post('/', async (req, res) => {
    if (!req.body.name) {
        res.status(404).json({ message: 'Please provide a name for the dish you wish to add.' })
    }
    try {
        const dish = await db.addDish(req.body)
        res.status(201).json(dish)
    } catch (e) {
        res.status(500).json({ error: 'An error occuried while trying to access that dish in the database.' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dish = await db.getDish(req.params.id)
        dish.length !== 0
            ? res.status(200).json(dish)
            : res.status(404).json({ message: 'The ID for this dish does not exist.' })
    } catch (e) {
        res.status(500).json({ error: 'An error occuried while trying to access that dish in the database.' })
    }
})

module.exports = router
