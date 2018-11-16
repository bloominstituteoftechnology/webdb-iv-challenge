const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = recipeHelper = {

    getRecipes() {
        return db.select('recipes.id', 'recipes.receipe', 'dishes.dish')
            .from('recipes')
            .join('dishes', 'recipes.dish.id', '=', 'dishes.id')
    },

    addRecipes() {
        return db('recipes')
            .insert(recipe)
            .returning('recipes.id')
    }
};