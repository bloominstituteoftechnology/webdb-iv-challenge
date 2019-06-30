const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

const getDishes = () => {
    return db('dishes');
};

const addDish = (dish) => {
    return db('dishes')
        .insert(dish)
        .into('dishes');
};

const getDish = (id) => {
    return db('dishes')
        .where({id})
        .first();
};

const getRecipes = () => {
    return db('recipes');
};

const addRecipe = (recipe) => {
    return db('recipes')
        .insert(recipe)
        .into('recipes');
};

module.exports = {
    getDishes, 
    addDish, 
    getDish, 
    getRecipes, 
    addRecipe
};
