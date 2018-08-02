const express = require('express');
const dishes = require('../../data/helpers/dishesDb');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const response = await dishes.get();
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The dishes information could not be retrieved.' });
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const response = await dishes.get(req.params.id);
        return res.status(200).json(response);
    } catch (err) {
        return next({ code: 500, error: 'The dish information could not be retrieved.' });
    }
})

module.exports = router;