const db = require("../dbConfig.js");

module.exports = {
  getDishes: function() {
    return db("dishes");
  },

  addDish: function(dish) {
    return db("dishes")
      .insert(dish)
      .then(ids => ({ id: ids[0] }));
  },

  getDish: function(id) {},

  getRecipes: function() {},

  addRecipe: function(recipe) {}
};
