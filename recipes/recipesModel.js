const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipe,
};

function getRecipes(){
  return db('recipes')
  .join('dishes', 'dishes.id', 'recipes.dish_id')
  .select('recipe.id', 'recipe.name', 'dish.name as Dish')
  .where('recipe.dish_id', 'dish.id');
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .into('recipes');
}