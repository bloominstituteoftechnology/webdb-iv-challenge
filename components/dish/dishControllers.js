const knex = require('knex');
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const controllers = {
  getDishes(req, res) {
    db('dishes')
      .then(dishes => res.status(200).json(dishes))
      .catch(err => res.status(500).json(err))
  },
  getDish(req, res) {
    const { id } = req.params
    db('dishes')
      .select('dishes.name as Dish Name', 'dishes.id', 'recipes.name as Recipe Name')
      .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
      .where('dish_id', '=', id)
      .then(dish => res.status(200).json(dish))

  }

}


module.exports = controllers;