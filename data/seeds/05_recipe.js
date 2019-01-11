
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { name: 'bread', amount_id: 1, amount_id: 2, amount_id: 3, amount_id: 4, steps_id: 1, steps_id: 2, steps_id: 3 },
        { name: 'tortilla', amount_id: 1, amount_id: 2, amount_id: 3, steps_id: 2, steps_id: 3 },
      ]);
    });
};
