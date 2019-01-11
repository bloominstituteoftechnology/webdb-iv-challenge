
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('amount').del()
    .then(function () {
      // Inserts seed entries
      return knex('amount').insert([
        { quantity: '4 cups', ingredient_id: 1, steps_id: 2 },
        { quantity: '1.5 cups', ingredient_id: 2, steps_id: 2 },
        { quantity: '1 tbs', ingredient_id: 3, steps_id: 2 },
        { quantity: '1 pack', ingredient_id: 4, steps_id: 2 },
      ]);
    });
};
