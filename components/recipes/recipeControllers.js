const knex = require('knex');
const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)
const controllers = {
  getRecipes(req, res) {
    db('recipes')
      .then(recipes => res.status(200).json(recipes))
      .catch(err => res.status(500).json(err))
  }

}


module.exports = controllers;