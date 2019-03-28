const router = require('express').Router();
const db = require('../db/db');

router.get('/', (req, res) => {
  db.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  db.getDish(req.params.id)
    .then(id => res.status(200).json(id))
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  db.addDish(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  db.deleteDish(req.params.id)
    .then(count => res.status(202).json(count))
    .catch(err => res.status(500).json(err));
});

module.exports = router;