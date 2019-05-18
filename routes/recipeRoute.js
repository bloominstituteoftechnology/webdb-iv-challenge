const express = require('express')
const db = require('../data/dataFunctions')
const router = express.Router()
router.get('/', async (req, res) => {
    try {
        const recipes = await db.getRecipes()
        res.status(200).json(recipes)
    } catch (err) {
        res.status(500).json({ error: 'An error occuried and the recipes could not be accessed from the database.' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dish = await db.getRecipes(req.params.id)
        dish.length !== 0
            ? res.status(200).json(recipes)
            : res.status(404).json({ message: 'That recipe does not seem to be here... our bad' })
    } catch (err) {
        res.status(500).json({ error: 'We could not get that specific recipe, ask your waiter for a different one' })
    }
})

router.post('/', async (req, res) => {
    if (!req.body.name) {
        res.status(404).json({ message: 'Your recipe needs a name... try again.' })
    }
    try {
        const recipe = await db.addRecipe(req.body)
        res.status(201).json(recipe)
    } catch (err) {
        res.status(500).json({ error: 'We could not get that specific recipe, ask your waiter for a different one' })
    }
})
module.exports = router