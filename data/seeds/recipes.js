
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Special Pizza', dish_id: 1},
        {id: 2, name: 'PBJ Sandwich', dish_id: 2},
        {id: 3, name: 'Lasagna', dish_id: 3}
      ]);
    });
};
