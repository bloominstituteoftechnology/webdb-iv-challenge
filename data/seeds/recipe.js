
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'garlic butter rice', dish_id: 1, steps_id: 1},
        {id: 2, name: 'creamy garlic chiken', dish_id: 2, steps_id: 2},
        {id: 3, name: 'perfect pinto beans', dish_id: 3, steps_id: 3}
      ]);
    });
};
