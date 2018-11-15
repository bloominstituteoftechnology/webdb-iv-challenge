
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'beef', recipeId: 1, quantity: 2, unit: 'lb'},
        {id: 2, name: 'bun', recipeId: 1, quantity: 2, unit: 'lb'},
        {id: 3, name: 'broth', recipeId: 2, quantity: 3, unit: 'oz'},
        {id: 4, name: 'cheese', recipeId: 3, quantity: 2, unit: 'lb'},
        {id: 5, name: 'sauce', recipeId: 3, quantity: 2, unit: 'L'},
      ]);
    });
};
