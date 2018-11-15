
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipeID: 1, ingredientsID: 1, quantity: 4.5},
        {recipeID: 1, ingredientsID: 3, quantity: 1},
        {recipeID: 1, ingredientsID: 6, quantity: 3},
        {recipeID: 1, ingredientsID: 8, quantity: 7.5},
        {recipeID: 2, ingredientsID: 7, quantity: 2},
        {recipeID: 2, ingredientsID: 9, quantity: 0.5},
        {recipeID: 3, ingredientsID: 3, quantity: 5},
        {recipeID: 3, ingredientsID: 6, quantity: 3},
        {recipeID: 4, ingredientsID: 2, quantity: 8},
        {recipeID: 4, ingredientsID: 8, quantity: 4},
        {recipeID: 5, ingredientsID: 6, quantity: 2.5},
        {recipeID: 5, ingredientsID: 3, quantity: 1},
        {recipeID: 6, ingredientsID: 1, quantity: 3.5},
        {recipeID: 6, ingredientsID: 7, quantity: 2},
        {recipeID: 7, ingredientsID: 3, quantity: 6.5},
        {recipeID: 7, ingredientsID: 4, quantity: 1},
      ]);
    });
};
