const db = require("./db");

// module.exports = {
//   getRecipe: function(recipeId) {
//     return db("dishes")
//       .select()
//       .where({ id: recipeId });
//   }
// };

module.exports = {
  getRecipe: function(recipeId) {
    return db("recipes")
      .join("dishes", { "dishes.id": "recipes.dish_id" })
      .select("recipes.recipe_name", "dishes.dish_name")
      .where({ "recipes.id": recipeId });
  }
};
