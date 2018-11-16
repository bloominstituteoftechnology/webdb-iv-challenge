const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const router = express.Router();


/* ----  GET ALL recipes  ---- */
router.get('/', (req, res) => {
  db('recipes')
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

/* ----  GET recipes BY ID  ---- */
router.get('/:id', (req, res) => {
  const { id } = req.params
  db('recipes')
    .where({ id: id })
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

/* ----  ADD DISH  ---- */
router.post('/', (req, res) => {
  const newRecipe = req.body
  db('recipes')
    .insert(newRecipe)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})

/* ----  EDIT DISH  ---- */
router.put('/:id', (req, res) => {
  const { id } = req.params
  const editedRecipe = req.body
  db('recipes')
    .where({ id: id })
    .update(editedRecipe)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})

/* ----  DELETE DISH  ---- */
router.delete('/:id', (req, res) => {
  const { id } = req.params
  db('recipes')
    .where({ id: id })
    .del()
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json(err))
})


module.exports = router;