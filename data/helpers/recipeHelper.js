const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = recipeHelper = {

    getRecipes() {
        return db('recipes')
    },

    addRecipes() {
        return db('recipes')
            .insert(recipe)
    }
};