const knex = require('knex');
const knexConfig = require('../../knexfile.js');

const db = knex(knexConfig.development);

// data operations

// dish functions

const getDishes = () => {
  return db('dishes');
};

const getDish = id => {
  return db('dishes')
    .where({id})
    .first();
};

const addDish = dish => {
  return db('dishes').insert(dish);
};

// recipe functions

const getRecipes = () => {
  return db('recipes');
};

const addRecipe = recipe => {
  return db('recipes').insert(recipe);
};

module.exports = { getDishes, getDish, addDish, getRecipes, addRecipes };
