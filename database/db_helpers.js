const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

module.exports = {
    getDishes: () => {
        return db('dishes');
    },

    getDish: id => {
        return db('dishes').where({ id: id });
    },

    getRecipes:() => {
        return db('recipes');
    },

    addDish: dish => {
        return db('dishes').insert(dish);
    },

    addRecipe: recipe => {
        return db('recipes').insert(recipe);
    }
}