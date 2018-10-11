
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {name: 'Original', dish_id: 1},
        {name: 'Maggi', dish_id: 2},
      ]);
    });
};
