
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Chicago Pizza', dish_id: 1},
        {name: 'New York Pizza', dish_id: 1},
        {name: 'Tex-Mex Tacos', dish_id: 2}
      ]);
    });
};
