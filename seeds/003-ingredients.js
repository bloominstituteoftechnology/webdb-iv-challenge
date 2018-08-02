
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Pepperoni', quantity: '20 slices', recipe_id: 1 },
        { name: 'Tuna', quantity: '3 small cuts', recipe_id: 2 },
        { name: 'Mushroom', quantity: '5 slices', recipe_id: 3 }
      ]);
    });
};
