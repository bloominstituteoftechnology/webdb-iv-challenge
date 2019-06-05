
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'chicken', quantity: 1, recipe_id: 1 },
        { ingredient: 'chili powder', quantity: 1, recipe_id: 1 },
        { ingredient: 'peppers', quantity: 3, recipe_id: 1 },
        { ingredient: 'pizza dough', quantity: 1, recipe_id: 2 },
        { ingredient: 'cheese', quantity: 1, recipe_id: 2 },
        { ingredient: 'pasta', quantity: 2, recipe_id: 3 }
      ]);
    });
};
