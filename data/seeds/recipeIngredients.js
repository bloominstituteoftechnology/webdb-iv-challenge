
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredientsMap').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredientsMap').insert([
        //Veggie Pizza
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        //Meat Pizza
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        //Meat Sandwich
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        //Meat Spaghetti
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        //Veggie Spaghetti
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
        { recipeId: 1, ingredientId: 1, quantity: 1 },
      ]);
    });
};
