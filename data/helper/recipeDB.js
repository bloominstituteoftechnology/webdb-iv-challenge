const db = require('../dbConfigure.js');
 module.exports = {
getRecipes: function() {
    return db('recipes as r')
        .join('dishes as d', 'd.id', 'r.dish_id')
        .select('r.id', 'r.name', 'd.name as Dish')
        .where('r.dish_id', 'd.id');
    },
  addRecipe: function(recipe) {
    return db('recipes')
      .insert(recipe)
      .then(ids => ({ id: ids[0] }));
  },
};