const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
}

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes').insert(dish);
}

function getDish(id) {
  return db('dishes').where({ id: Number(id) }).first();
}

function getRecipes(dish_name) {
  return db('recipes as r')
    .join('dishes as d', 'd.id', 'r.dish_id')
    .select('r.id as recipeId', 'r.name as recipe', 'd.name as dish')
    .where('d.name', dish_name);
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}

// test cases
getDishes().then(dishes => console.log(dishes));
getDish(1).then(dish => console.log(dish));
addDish({ name: 'Asado' }).then(res => console.log(res));
getRecipes('Sinigang').then(recipes => console.log(recipes))
addRecipe({ name: 'Asado ni Mang Kepweng', dish_id: 4 }).then(res => console.log(res));
