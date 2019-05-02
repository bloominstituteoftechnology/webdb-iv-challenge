const router = require('express').Router();
const Dishes = require('./dishes-model');

router.get('/', (req, res) => {
    const message500 = { message: 'Unable to get dishes' };

    Dishes.getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(error => {
            res
                .status(500)
                .json(message500);
        });
});

module.exports = router;