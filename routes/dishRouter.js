const express = require('express')

const router = express.Router()

const db = require('../utilities/db-helper')

router.get('/', (req, res) => {
  // db('dishes')
  //   .select('name as dish')
  db.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getDish(id)
    .then(recipeList => res.status(200).json(recipeList))
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  const dish = req.body
  console.log('DISH ', dish)

  db.addDish(dish)
    .then(id => {
      res.status(200).json(...id)
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router
