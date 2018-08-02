
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: `엄마 Style`, dish_id: 1},
        {name: `Maangchi's Homestyle Recipe`, dish_id: 2},
        {name: 'Cuban', dish_id: 3},
        {name: 'Caesar', dish_id: 4},
        {name: 'Homewrecker', dish_id: 5},
        {name: 'Nabeyaki', dish_id: 6},
      ]);
    });
};
