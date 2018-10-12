const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

function getDishes() {
  return db('dishes')
}

// function addDish(dish) {
//   return db('dishes')
// }

// function getDish(id) {
//   return db('dishes')
// }

// function getRecipes() {
//   return db('recipes')
// }

// function addRecipe(recipe) {
//   return db('recipes')
// }

module.exports = {
  getDishes,
}
