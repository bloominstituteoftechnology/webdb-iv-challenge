exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'ingredient 1', measurement: 'tablespoon', amount: 2, recipe_id: 1 }, 
        { ingredient: 'ingredient 2', measurement: 'tablespoon', amount: 2, recipe_id: 1 },

        { ingredient: 'ingredient 1', measurement: 'tablespoon', amount: 3, recipe_id: 2 },
        { ingredient: 'ingredient 2', measurement: 'tablespoon', amount: 3, recipe_id: 2 }
      ]);
    });
};