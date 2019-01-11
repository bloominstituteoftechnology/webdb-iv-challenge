const knex = require('knex');
const dbConfig = require('../../knexfile')
const db = knex(dbConfig.development);

/*
    getDishes(): should return a list of all dishes in the database.
    addDish(dish): should add the dish to the database and return the id of the new dish.
    getDish(id): should return the dish with the provided id and include a list of the related recipes.
    getRecipes(): should return a list of all recipes in the database including the dish they belong to.
    addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.
*/

module.exports = {
  getDishes: function() {
    return db('dishes');
  },

  addDish: function(dish) {
    return db('dishes').insert(dish)
      .then( ids => ({ id: ids[0] }));
  }
};