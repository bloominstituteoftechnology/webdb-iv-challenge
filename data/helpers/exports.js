const knex = require('knex');
const dbConfig = require('../../knexfile')
const db = knex(dbConfig.development);

module.exports = {
  // getDishes(): should return a list of all dishes in the database.
  getDishes: function() {
    return db('dishes');
  },

  // addDish(dish): should add the dish to the database and return the id of the new dish.
  addDish: function(dish) {
    return db('dishes').insert(dish)
      .then( ids => ({ id: ids[0] }));
  },

  // getDish(id): should return the dish with the provided id and include a list of the related recipes.
  getDish: function(id) {
    return db('recipes as r')
      .join('dishes as d', 'd.id', 'r.dish_id')
      .select('d.dish', 'r.name as recipe')
      .where('r.dish_id', id);
  },

  // getRecipes(): should return a list of all recipes in the database including the dish they belong to.
  getRecipes: function() {
    return db('recipes as r')
      .join('dishes as d', 'd.id', 'r.dish_id')
      .select('r.id', 'r.name', 'r.description', 'd.dish as type');  
  },

  // addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.
  addRecipe: function(rec) {
    return db('recipes').insert(rec)
      .then( (ids) => ({ id: ids[0] }));
  }
};