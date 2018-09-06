
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'carne asada', dish_id: 1},
        {name: 'beef', dish_id: 1},
        {name: 'pork', dish_id: 1}
      ]);
    });
};
