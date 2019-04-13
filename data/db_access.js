const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

const getDishes = () => {
  return db('dishes');
}

const addDish = (dish) => {
  return db('dishes').insert(dish);
}

const getDish = (id) => {
  return db('dishes').join('recipes', 'dishes.id', 'recipes.dish_id')
    .select('dishes.dish_name', 'recipes.recipe_name')
    .where('dishes.id', id);
} 

const getRecipes = () => {
  return db('recipes');
}

const addRecipe = (id) => {
  return db('recipes').insert(recipe);
}