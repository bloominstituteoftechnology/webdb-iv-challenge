
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Mom\'s', dish_id: 1},
        {name: 'Mom\'s Classic', dish_id: 2},
        {name: 'Thai Drift\'s', dish_id: 1},
        {name: 'Greg\'s', dish_id: 3},
      ]);
    });
};
