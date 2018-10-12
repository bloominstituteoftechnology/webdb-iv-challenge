const express = require('express');
const rcps = require('./rcpsMdl');
const router = express.Router();

router.get('/', (req, res) => {
    rcps
        .findRcps()
        .then(rcps => {
            res.status(200).json(rcps);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const rcpsidv = req.body;

    rcps
        .addRcps(rcpsidv)
        .then(ids => {
            if (!rcpsidv.rcps_nme) {
                res.status(400).send({ error: "Please provide a name for the recipe" })
            }
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;