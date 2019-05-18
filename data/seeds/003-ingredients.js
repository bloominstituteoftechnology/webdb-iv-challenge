
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'beef', quantity: 1, recipeId: 1 },
        { ingredient: 'taco seasoning', quantity: 1, recipeId: 1 },
        { ingredient: 'tortilla', quantity: 1, recipeId: 1 },
        { ingredient: 'peppers', quantity: 3, recipeId: 1 },
        { ingredient: 'pizza dough', quantity: 1, recipeId: 2 },
        { ingredient: 'cheese', quantity: 1, recipeId: 2 },
      ]);
    });
};
