const DB = require("../dbConfig");

module.exports = {
  getDishes: function() {
    return DB("dishes");
  },
  addDish: function(dish) {
    return DB("dishes").insert(dish);
  },
  getDish: function(id) {
    return DB("dishes")
      .where("id", id)
      .first();
  },
  getRecipes: function() {
    return DB("recipes");
  },
  addRecipe: function(recipe) {
    return DB("recipes").insert(recipe);
  },
  getRecipe: function(id) {
    return DB("recipes as r")
      .join("dishes as d", "d.id", "r.dish_id")
      .select("r.id", "r.name", "r.instructions", "d.name as dish")
      .where("r.id", id);
  },
  editDish: function(id, dish) {
    return DB("dishes")
      .where("id", id)
      .update(dish);
  }
};
