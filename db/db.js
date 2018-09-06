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
    
}

function getDish(id) {
  return db('dishes')
    .where('id', Number(id))

    // should return list of related recepies
}

function getRecipes(id, post) {
  return db('posts')
    .where('id', Number(id))
    .update(post);
}

function addRecipe(id) {
  return db('posts')
    .where('id', Number(id))
    .del();
}
