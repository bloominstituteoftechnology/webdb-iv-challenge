exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("recipes", function(recipe) {
      // Add primary key ID
      recipe.increments().primary();
      recipe.text("name").notNullable();
      recipe.integer("dishId").references("dishes.id");
    })
    .createTable("dishes", function(dish) {
      // Add primary key ID
      dish.increments().primary();
      dish
        .text("name")
        .unique()
        .notNullable();
    })
    .createTable("ingredients", function(ingredient) {
      ingredient.increments().primary();
      ingredient.text("name").notNullable();
    })
    .createTable("instructions", function(instruction) {
      Promise.all([
        instruction.integer("step"),
        instruction.integer("recipeId").references("recipes.id")
      ]).then(() => {
        instruction.primary(["step, recipeId"]);
      });
      instruction.text("textDescription");
    })
    .createTable("recipeToIngredientMap", function(recipeToIngredientMap) {
      recipeToIngredientMap.integer("recipeId").references("recipes.id");
      recipeToIngredientMap
        .integer("ingredientId")
        .references("ingredients.id");
      recipeToIngredientMap.float("quantity", 2).notNullable();
    });
};

exports.down = function(knex, Promise) {
  // Rollback
  return Promise.all(
    [
      "recipes",
      "dishes",
      "ingredients",
      "instructions",
      "recipeToIngredientMap"
    ].map(table => knex.schema.dropTableIfExists(table))
  );
};
