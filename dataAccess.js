const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes: function() {
    let query = db('dishes');

    return query;
  },
  addDish: function(dish) {
    return db('dishes').insert(dish);
  },
  getDish: function(id) {
    return db('dishes').where({id});
  },
  getRecipes: function() {
    let query = db('recipes');

    return query;
  },
  addRecipe: function(recipe) {
    return db('recipes').insert(recipe);
  },
};