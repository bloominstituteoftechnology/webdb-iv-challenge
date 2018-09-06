const db = require('../dbConfig.js');

module.exports = {
  getRecipes: function() {
    return db('recipes as r')
      .leftJoin('dishes as d', 'd.id', 'r.dish_id')
      .select('r.name', 'd.name as dish');
  },

  addRecipe: function(recipe) {
    return db('recipes').insert(recipe);
  },
};
