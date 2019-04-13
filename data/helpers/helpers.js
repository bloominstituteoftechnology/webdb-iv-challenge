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
  editDish: function(id, dish) {
    return DB("dishes")
      .where("id", id)
      .update(dish);
  },
  deleteDish: function(id) {
    return DB("dishes")
      .where("id", id)
      .del();
  },
  getRecipes: function() {
    return DB("recipes");
  },
  getRecipeIngredients: function(id) {
    return DB("ingredients as i")
      .select("i.name", "i.quantity", "i.measure")
      .where("recipe_id", id);
  },
  addRecipe: function(recipe) {
    return DB("recipes").insert(recipe);
  },
  getRecipe: function(id) {
    return DB("recipes as r")
      .join("dishes as d", "d.id", "r.dish_id")
      .select("r.id", "r.name", "r.instructions", "d.name as dish")
      .where("r.id", id);
  }
};
