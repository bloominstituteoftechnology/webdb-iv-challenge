const express = require('express')
const db = require('../data/dataAccess')
const router = express.Router()
router.get('/', async (req, res) => {
    try {
        const recipes = await db.getRecipes()
        res.status(200).json(recipes)
    } catch (e) {
        res.status(500).json({ error: 'An error occuried and the recipes could not be accessed from the database.' })
    }
})

router.post('/', async (req, res) => {
    if (!req.body.name) {
        res.status(404).json({ message: 'Please provide a name for the recipe you wish to add.' })
    }
    try {
        const recipe = await db.addRecipe(req.body)
        res.status(201).json(recipe)
    } catch (e) {
        res.status(500).json({ error: 'An error occuried while trying to access that recipe in the database.' })
    }
})

module.exports = router
