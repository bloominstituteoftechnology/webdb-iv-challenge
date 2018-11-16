const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)



const controllersRecipe = {
  addRecipe (req, res, next) {
    if (!req.body.name || req.body.length <= 0) {
      next(new Error('EMPTY BODY'))
    }
    const RecipeName = req.body
    db('recipes')
      .insert(RecipeName)
      .then((id) => res.status(201).json(id))
      .catch(next)
  },
  
  getAllRecipe (req, res, next) {
    db('recipes').then((Recipe) => res.status(200).json(Recipe)).catch(next)
  },
  getSingleRecipe (req, res, next) {
    db('recipes')
      .where('id', req.params.id)
      .then((Recipe) => {
        if (!Recipe.length) {
          next(new Error('ID NOT FOUND'))
        }
        res.status(200).json(Recipe)
      })
      .catch(next)
  },
}
module.exports = controllersRecipe
