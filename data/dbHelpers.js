const knex = require('knex');
const dbConfig = require('../knexfile.js');
const db = knex(dbConfig.development);

module.exports = {

    // find dishes
    findDishes: () => {
        return db('dishes');
    },

    // find recipes
    findRecipes: () => {
        return db('recipes');
    },

    // find ingredients
    findIngredients: () => {
        return db('ingredients');
    },

    // find recipe ingredients
    findRecipeIngredients: () => {
        return db('recipe_ingredients');
    },

    // find recipe instructions
    findRecipeInstructions: () => {
        return db('recipe_instructions');
    }

};