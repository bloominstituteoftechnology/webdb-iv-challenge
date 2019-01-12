const db = require('../dbConfig.js');

module.exports = {
  
  // getRecipes(): should return a list of all recipes in the database including the dish they belong to.
  getRecipes: function() {
    return db('recipe')
    .join('dish', 'dish.id', 'recipe.dish_id')
    .select('recipe.id', 'recipe.recipe_name', 'dish.dish_name');
  },

  // addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.
  addRecipe: function(recipe) {
    return db('recipe').insert(recipe);
  },


}