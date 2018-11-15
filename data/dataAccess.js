const knex = require('knex')

const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = dataAccessMethods = {
   
    getDishes() {
        return db('dishes')
    },

    addDish(dish) {
        return db('dishes').insert(dish)
    
    },
    
    //need help on how to show the related recipes
    getDish(id) {
        return db.select("dish").from('dishes').where('id', id)
    },

    getRecipes() {
        return db('recipes')
    },

    addRecipes(recipe) {
        return db('recipes').insert(recipe)
    }
}