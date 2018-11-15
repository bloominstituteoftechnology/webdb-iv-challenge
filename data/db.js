const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .returning('id');
}

function getDish(id) {
  return db.select('dishes.Dish as Dish', 'recipe.Recipe as Recipe')
    .from('dishes')
    .join('recipe', 'dishes.id', '=', 'recipe.dishID')
    .where('dishes.id', '=', id)
    
}

function getRecipes() {
  return db.select('recipe.Recipe as Recipe' , 'dishes.Dish as Associated_Dish')
    .from('recipe')
    .join('dishes', 'recipe.dishID', '=', 'dishes.id')
}

function addRecipe(recipe) {
    return db('recipe')
    .insert(recipe)
    .returning('id');
}
