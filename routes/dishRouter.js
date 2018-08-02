const express = require("express");
const dishes = require("../data/db.js");

const router = express.Router();

router.get('/', (req, res) => {
    dishes
        .get()
        .then( user => res.status(200).json(user) )
        .catch( err => res.status(500).json(err) )
})

module.exports = router;