const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = dataAccess = {
    getDishes() {
        return db('dishes')
    },

    addDishes(dish) {
        return db('dishes').insert(dish)
    },

    getDish(id) {
        return db.select('name').from('dishes').where('id', id)
    },

    getRecipes() {
        return db('recipes')
    },

    addRecipe(recipe) {
        return db('recipes').insert(recipe)
    }
}