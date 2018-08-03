const express = require('express');
const db = require('../data/helpers/DishesDB');

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
        const response = await db.getDishes();
        res.status(200).json(response);
    } catch (error) {
        next(sendError(500, 'Failed to get dishes information.', error.message))
    }
})

router.get('/:id', async (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const response = await db.getDish(id);

        if (response[0].length === 0) {
            return next(sendError(404, 'Failed to retrieve dish information', 'The dish for this specific id does not exist.'))
        }
        const [dish, recipes] = response;

        const result = {
            ...dish[0],
            recipes: recipes.length === 0 ? [] : response[1].map(recipe => recipe.recipe_name)
        }
        res.status(200).json(result);
    } catch (error) {
        next({ success: false, code: 500, message: 'Users information could not be retrieved.', error: error.message })
    }
})

router.post('/', async (req, res, next) => {
    if (!req.body.dish_name) {
        return next(sendError(400, 'Failed to add dish to database.', 'Please provide dish name.'))
    }

    const newDish = req.body;

    try {
        const response = await db.addDish(newDish);
        const id = response[0];
        res.status(201).json({ id, ...newDish });
    } catch (error) {
        next(sendError(500, 'Failed to add dish to database.', error.message))
    }
})

router.delete('/:id', async (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const dish = await db.getDish(id);
        const response = await db.deleteDish(id);

        if (!response) {
            return next({ success: false, code: 404, message: "Failed to remove dish.", error: "The dish with this specific id does not exists." })
        }
        res.status(200).json(dish[0][0]);
    } catch (error) {
        next({ success: false, code: 500, message: "Failed to remove dish.", error: error.message })
    }
})

module.exports = router;

