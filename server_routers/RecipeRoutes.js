const express = require('express');
const db = require('../data/helpers/RecipeDB');

const router = express.Router();

function sendError(code, message, error) {
    return {
        code: code,
        message: message,
        error: error
    }
}

router.get('/', async (req, res, next) => {
    try {
        const response = await db.getRecipes();
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, 'Failed to get recipes information.', error.message))
    }
})

router.post('/', async (req, res, next) => {
    if (!(req.body.recipe_name && req.body.dish_id)) {
        return next(sendError(400, 'Failed to add recipe to database.', 'Please provide recipe name and dish id.'))
    }

    const newRecipe = req.body;

    try {
        const response = await db.addRecipe(newRecipe);
        const id = response[0];
        res.status(201).json({ id, ...newRecipe });
    } catch (error) {
        next(sendError(500, 'Failed to add recipe to database.', error.message))
    }
})

router.get('/:id', async (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const response = await db.getRecipe(id);

        if (response[0].length === 0) {
            return next(sendError(404, 'Failed to retrieve recipe information', 'The recipe for this specific id does not exist.'))
        }

        const [ recipe, instruction ] = response;
        
        const result = {
            ...recipe[0],
            instruction: instruction
        }

        res.status(200).json(result);
    } catch (error) {
        next(sendError(500, 'Failed to retrieve recipe information.', error.message))
    }
})

router.delete('/:id', async (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const recipe = await db.getRecipe(id);
        const response = await db.deleteRecipe(id);

        if (!response) {
            return next(sendError(404, 'Failed to retrieve recipe information', 'The recipe for this specific id does not exist.'))
        }
        res.status(200).json(recipe[0][0]);
    } catch (error) {
        next(sendError(500, 'Failed to remove recipe.', error.message))
    }
})

module.exports = router;