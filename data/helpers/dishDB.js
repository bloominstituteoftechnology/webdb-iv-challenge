const db = require('../dbConfig.js');

module.exports = {
  
  // getDishes(): should return a list of all dishes in the database.
  getDishes: function() {
    return db('dish');
  },

  // addDish(dish): should add the dish to the database and return the id of the new dish.
  addDish: function(dish) {
    return db('dish').insert(dish);
  },

  // getDish(id): should return the dish with the provided id and include a list of the related recipes.
  getDish: function(id) {
    return db('recipe').join('dish','dish.id','recipe.dish_id')
    .select('dish.dish_name', 'recipe.recipe_name')
    .where('recipe.dish_id', id);
  },

}