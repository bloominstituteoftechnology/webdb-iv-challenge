const db = require("../dbConfig");

module.exports = {
  getDishes: function() {
    return db("dishes");
  },
  addDish: function(dish) {
    db("dishes").insert(dish);
    return { id: id };
  },
  getDish: function(id) {
    return db("dishes as d")
      .join("recipes as r", "d.id", "=", "r.dish_id")
      .where("r.dish_id", id);
  },

  getRecipes: function() {
    return db("recipes as r").join("dishes as d", "r.dish_id", "=", "d.id");
  },
  addRecipe: function(recipe) {
    return db("recipes").insert(recipe);
  }
};
