
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { quantity: 2, name: 'pork spareribs', recipe_id: 1 },
        { quantity: 1.5, name: 'tablespoons fish sauce', recipe_id: 1 },
        { quantity: 1, name: 'bok choy', recipe_id: 2 },
        { quantity: 0.3, name: 'white vinegar', recipe_id: 3 },
        { quantity: 1, name: 'chicken', recipe_id: 3 },
        { quantity: 2.3, name: 'soy sauce', recipe_id: 4 },
        { quantity: 2, name: 'beef marrow bones', recipe_id: 5 },
        { quantity: 1, name: 'onion', recipe_id: 5 },
        { quantity: 2, name: 'patis', recipe_id: 6 },
      ]);
    });
};
