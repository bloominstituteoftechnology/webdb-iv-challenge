const express = require('express');
const db = ('../helpers/helpfunction');
const router = express.Router()

router.get('/', (req, res) => {
    db.getDishes().then(dish => {
        res.status(200).json(dish)
    })
})

module.exports = router;