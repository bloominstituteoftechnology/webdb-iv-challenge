
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Sinigang ni Cheng', dish_id: 1 },
        { name: 'Sinigang ni Marita', dish_id: 1 },
        { name: 'Adobo ni Romy', dish_id: 2 },
        { name: 'Adobo ni Danny', dish_id: 2 },
        { name: 'Bulalo ni Edna', dish_id: 3 },
        { name: 'Bulalo ni Betty', dish_id: 3 },
      ]);
    });
};
