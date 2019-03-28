exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipeToIngredientMap")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipeToIngredientMap").insert([
        // Recipe 1 - Italian pizza
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 2, quantity: 10 },
        { recipeId: 1, ingredientId: 3, quantity: 2 },

        // Recipe 2 - New York pizza
        { recipeId: 2, ingredientId: 1, quantity: 1 },
        { recipeId: 2, ingredientId: 3, quantity: 2 },
        { recipeId: 2, ingredientId: 5, quantity: 15 },

        // Recipe 3 - Italian spaghetti
        { recipeId: 3, ingredientId: 4, quantity: 3 },
        { recipeId: 3, ingredientId: 5, quantity: 15 },

        // Recipe 4 - Vegetarian spaghetti
        { recipeId: 4, ingredientId: 4, quantity: 3 },
        { recipeId: 4, ingredientId: 6, quantity: 1 },

        // Recipe 5 - Minestrone soup`
        { recipeId: 5, ingredientId: 4, quantity: 3 },
        { recipeId: 5, ingredientId: 7, quantity: 2 },

        // Recipe 6 - Corn chowder
        { recipeId: 6, ingredientId: 8, quantity: 3 },
        { recipeId: 6, ingredientId: 9, quantity: 1 },

        // Recipe 7 - Chicken burger
        { recipeId: 7, ingredientId: 9, quantity: 1 },
        { recipeId: 7, ingredientId: 11, quantity: 2 },

        // Recipe 8 - Turkey burger
        { recipeId: 8, ingredientId: 10, quantity: 1 },
        { recipeId: 8, ingredientId: 11, quantity: 2 }
      ]);
    });
};
