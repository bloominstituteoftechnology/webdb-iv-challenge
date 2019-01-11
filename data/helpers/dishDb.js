const db = require("../dbConfig.js");

module.exports = {
  getDishes: function() {
    return db("dishes");
  },
  addDish: function(dish) {
    return db("dishes")
      .insert(dish)
      .then(ids => ({
        id: ids[0]
      }));
  },
  getDish: function(dishId) {
    return db("dishes")
      .leftJoin("recipes", "recipes.dish_id", "dishes.id")
      .select("dishes.dish_name", "recipes.recipe_name")
      .where("dishes.id", dishId);
  }
};
