const express = require('express');
const router = express.Router();
const dishDb = require('../data/helpers/dishModel');

// dishes
router.get('/', async (req, res) => {
    try {
        const dishes = await dishDb.getDishes();

        res.status(200).json(dishes);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const dish = await dishDb.getDishes(id);

        res.status(200).json(dish);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/:id/posts', async (req, res) => {
//     try {
//         const { id } = req.params;
//         let posts = await postDb.get();
//         posts = posts.filter(post => post.userId == id ? post : null);

//         res.status(200).json(posts);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post('/', async (req, res) => {
    try {
        const newDish = { ...req.body };
        const dish = await dishDb.addDish(newDish);

        res.status(200).json(newDish);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const changes = { ...req.body };
//         const user = await userDb.update(id, changes);

//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await userDb.remove(id);

//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
