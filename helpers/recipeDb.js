const db = require('../data/dbConfig.js');

module.exports = {

  getRecipes: function() {
    return db('recipes as r')
      .join('dishes as d', 'd.id', 'r.dishId')
      .select('r.id', 'r.name', 'd.name as dishName', 'r.created_at')
  },
  getRecipe: function(id) {
      return db('recipes as r')
      .join('dishes as d', 'd.id', 'r.dishId')
      .join('recipeingredients as ri', 'ri.recipeId', 'r.id')
      .join('ingredients as i', 'i.id', 'ri.ingredientId')
      .join('steps as s', 's.recipeId', 'r.id')
      .select('r.name as recipeName', 'd.name as dishName', 'i.name as ingredientName', 'ri.amount as amount', 's.text as instructions')
      .where('r.id', id);
  }
};