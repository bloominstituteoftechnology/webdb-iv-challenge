const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const router = express.Router();


/* ----  GET ALL DISHES  ---- */
router.get('/', (req, res) => {
  db('dishes')
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err))
})

/* ----  GET DISHES BY ID  ---- */
router.get('/:id', (req, res) => {
  const { id } = req.params
  db('dishes')
    .where({ id: id })
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err))
})

/* ----  GET DISHES BY RECIPE  ---- */
router.get('/:id/recipes', (req, res) => {
  const { id } = req.params
  db('recipes')

    .select()
    .where('dish_id', id)
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err))
})


/* ----  ADD DISH  ---- */
router.post('/', (req, res) => {
  const newDish = req.body
  db('dishes')
    .insert(newDish)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})

/* ----  EDIT DISH  ---- */
router.put('/:id', (req, res) => {
  const { id } = req.params
  const editedDish = req.body
  db('dishes')
    .where({ id: id })
    .update(editedDish)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})

/* ----  DELETE DISH  ---- */
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const editedDish = req.body
  db('dishes')
    .where({ id: id })
    .del()
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})



module.exports = router;