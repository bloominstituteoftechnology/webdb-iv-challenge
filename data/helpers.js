const db = require("./db");

module.exports = {
  getRecipe: function(recipeId) {
    return db("recipes")
      .join("dishes", { "dishes.id": "recipes.dish_id" })
      .select("dishes.id", "recipes.recipe_name")
      .where({ "recipes.id": recipeId });
  }
};
