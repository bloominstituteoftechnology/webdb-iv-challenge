
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'tomatoes', quantity: 'pc', recipe_id:1 },
        // { name: 'tomatoes', quantity: 'pc', recipe_id:2 }, // name must be unique
        { name: 'garlic', quantity: 'pc', recipe_id: 1 },
        { name: 'oregano', quantity: 'pc', recipe_id: 1 },
        { name: 'extra virgin olive oil', quantity: 'pc', recipe_id: 1 }
      ]);
    });
};
