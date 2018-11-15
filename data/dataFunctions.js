const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = dataFunctions = {

    getDishes() {
        //getDishes()`: should return a list of all dishes in the database.
        return db('dishes')
    },

    addDish(dish) {
        //addDish(dish)`: should add the `dish` to the database and return the `id` of the new `dish`.
        return db('dishes').insert(dish)
    },

    getDish(id) {
        //getDish(id)`: should return the `dish` with the provided `id` and include a list of the related recipes.
        return db.select('name').from('dishes').where('id', id)
    },

    getRecipes() {
        //getRecipes()`: should return a list of all recipes in the database including the `dish` they belong to.
        return db('recipes')
    },

    addRecipe(recipe) {
        //addRecipe(recipe)`: should add a `recipe` to the database and return the `id` of the new `recipe`.

        return db('recipes').insert(recipe)
    },
}