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

router.get('/:id', (req, res) => {
    const message404 = { error: "The dish with the specified ID does not exist." }
    const message500 = { error: "The dish information could not be retrieved." }

    Dishes
        .getDish(req.params.id)
        .then(dish => {
            dish
                ? res.status(200).json(dish)
                : res.status(404).json(message404);
        })
        .catch(err => {
            res.status(500).json(message500)
        })
});

router.post('/', (req, res) => {
    const { dish_name } = req.body;
    const message400 = { error: "Please provide dish_name for the dish" }
    const message500 = { error: "There was an error while saving the dish to the database" };

    if (dish_name) {
        Dishes.addDish(req.body)
            .then(dish => { res.status(201).json(dish) })
            .catch(err => { res.status(500).json(message500) })
    }
    else {
        res.status(400).json(message400);
    }
});



module.exports = router;