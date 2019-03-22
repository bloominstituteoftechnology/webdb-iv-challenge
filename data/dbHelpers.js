const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

module.exports = {
  getDishes: () => {
    return db('dishes');
  },

  getRecipes: () => {
    return db('recipes');
  },

  getDish: (id) => {
    return db('dishes')
            .innerJoin('recipes', 'dish_id', 'dishes.id')
            .where('dish_id', id);
  },

  addDish: (newDish) => {
    return db('dishes').insert(newDish);
  },

  addRecipe: (newRecipe) => {
    return db('recipes').insert(newRecipe);
  }
}
