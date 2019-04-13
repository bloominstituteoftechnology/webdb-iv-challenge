const db = require("../dbConfig.js");

module.exports = {
  getRecipes: function() {
    //return all recipes with their dish name
    return db("recipes")
      .join("dishes", "dishes.id", "recipes.dish_id")
      .select("recipes.recipe_name", "dishes.dish_name", "recipes.id");
  },
  addRecipe: function(recipe) {
    //add a recipe and return the id of the new recipe
    return db("recipes")
      .insert(recipe)
      .then(ids => ({
        id: ids[0]
      }));
  },

  getList: function(id) {
    return db("recipes")
      .join("ingredients", "ingredients.recipe_id", "recipes.id")
      .select(
        "recipes.recipe_name",
        "ingredients.ingredient_name",
        "ingredients.amount"
      )
      .where("recipes.id", id);
  }
};
