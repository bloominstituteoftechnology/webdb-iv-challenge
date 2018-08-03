exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        { id: 1, name: 'eggs', recipe_id: 1 },
        { id: 2, name: 'milk', recipe_id: 1 },
        { id: 3, name: 'fruit', recipe_id: 2 },
        { id: 4, name: 'milk', recipe_id: 2 },
        { id: 5, name: 'ground beef', recipe_id: 3 },
        { id: 6, name: 'bun', recipe_id: 3 },
        { id: 7, name: 'potatoes', recipe_id: 4 },
        { id: 8, name: 'oil', recipe_id: 4 },
        { id: 9, name: 'raw steak', recipe_id: 5 },
        { id: 10, name: 'salt and pepper', recipe_id: 5 },
        { id: 11, name: 'potatoes', recipe_id: 6 },
        { id: 12, name: 'milk', recipe_id: 6 },
      ]);
    });
};
