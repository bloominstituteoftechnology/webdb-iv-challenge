
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'blue cheese burger', dish_id: 1},
        {name: 'patty melt', dish_id: 1},
        {name: 'montery melt', dish_id: 1}
      ]);
    });
};
