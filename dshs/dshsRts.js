const express = require('express');
const dshs = require('./dshsMdl');
const router = express.Router();

router.get('/', (req, res) => {
    dshs
        .findDshs()
        .then(dshs => {
            res.status(200).json(dshs);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    dshs
        .findDshsById(id)
        .then(dshs => {
            res.status(200).json(dshs);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const dshsidv = req.body;

    dshs
        .addDshs(dshsidv)
        .then(ids => {
            if (!dshsidv.dshs_nme) {
                res.status(400).send({ error: "Please provide a name for the dish" })
            }
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;