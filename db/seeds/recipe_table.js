
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        // { dish_id: '1' },
        // { ingredient_id: '1' },
        // { instruction_id: '1' },
        { name: 'Beef Taco' }
      ]);
    });
};
