
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeingredients').insert([
        {id: 0, amount: '1 lb', recipeId: 0, ingredientId: 0},
        {id: 1, amount: '10', recipeId: 0, ingredientId: 10},
        {id: 2, amount: '1 lb', recipeId: 1, ingredientId: 3},
        {id: 3, amount: '10', recipeId: 1, ingredientId: 10},
        {id: 4, amount: '1 lb', recipeId: 2, ingredientId: 0},
        {id: 5, amount: '10', recipeId: 2, ingredientId: 10},
        {id: 6, amount: '2 tbsp', recipeId: 3, ingredientId: 7},
        {id: 7, amount: '1 lb', recipeId: 3, ingredientId: 0},
        {id: 8, amount: '2 tbsp', recipeId: 4, ingredientId: 7},
        {id: 9, amount: '2 tbsp', recipeId: 5, ingredientId: 7},
        {id: 10, amount: '1 lb', recipeId: 5, ingredientId: 3},
        {id: 11, amount: '1 can', recipeId: 6, ingredientId: 1},
        {id: 12, amount: '1 lb', recipeId: 6, ingredientId: 0},
        {id: 13, amount: '1 box', recipeId: 6, ingredientId: 2},
        {id: 14, amount: '2 tbsp', recipeId: 7, ingredientId: 8},
        {id: 15, amount: '2', recipeId: 7, ingredientId: 4},
        {id: 16, amount: '1 box', recipeId: 7, ingredientId: 2},
        {id: 17, amount: '2 tbsp', recipeId: 8, ingredientId: 9},
        {id: 18, amount: '1 can', recipeId: 8, ingredientId: 1},
        {id: 19, amount: '1 box', recipeId: 8, ingredientId: 2},
        {id: 20, amount: '3', recipeId: 8, ingredientId: 5}
      ]);
    });
};
