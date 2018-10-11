
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'tex-mex', dish_id: 1},
        {name: 'fish tacos', dish_id: 1},
        {name: 'BLT', dish_id: 2}
      ]);
    });
};
