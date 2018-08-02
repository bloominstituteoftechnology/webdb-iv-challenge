const express = require('express');
const dishes = require('../../data/helpers/dishesDb');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await dishes.get();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;