const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipies,
  addRecipe,
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .into('dishes')
    .then(ids => ({ id: ids[0]}));
    
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first()
    .join('recipies', 'dishes.id', '=', 'recipies.dish_id');
}

// select d.dishName, r.recipeName
// from dishes as d
//   join recipies as r
//   on d.id = r.dish_id

function getRecipies() {
  return db('recipies')
    .join('dishes', 'recipies.dish_id', '=', 'dishes.id')
    .select('recipies.recipeName', 'dishes.dishName');
}

function addRecipe(recipe) {
  return db('recipies')
    .insert(recipe)
    .into('recipies')
    .then(ids => ({ id: ids[0]}));
}

// repository pattern for data access