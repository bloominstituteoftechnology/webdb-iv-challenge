
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredientsMap').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredientsMap').insert([
        {recipeId: 3, ingredientId: 1, quantity: 1},
        {recipeId: 5, ingredientId: 1, quantity: 1},
        {recipeId: 1, ingredientId: 2, quantity: 1},
        {recipeId: 4, ingredientId: 2, quantity: 1},
        {recipeId: 5, ingredientId: 3, quantity: 1},
        {recipeId: 5, ingredientId: 4, quantity: 1},
        {recipeId: 2, ingredientId: 6, quantity: 1},
      ]);
    });
};
