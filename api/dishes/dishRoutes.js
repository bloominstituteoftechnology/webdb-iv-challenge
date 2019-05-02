const express = require('express');
const dishes = require('../../data/helpers/dishesDb');

const router = express.Router();

router.post('/', async (req, res, next) => {
    const { name } = req.body;
    if (!name) return next({ code: 400, errorMessage: 'Please provide a name.' });
    try {
        const response = await dishes.addDish({ name });
        return res.status(201).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The dish could not be saved to the database' });
    }
})

router.get('/', async (req, res, next) => {
    try {
        const response = await dishes.getDishes();
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The dishes information could not be retrieved.' });
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const response = await dishes.getDish(req.params.id);
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The dish information could not be retrieved.' });
    }
})

module.exports = router;