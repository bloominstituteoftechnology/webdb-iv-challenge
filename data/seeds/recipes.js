
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name : 'Cheese', dish_id : 1},
        {name : 'All purpose', dish_id : 1},
        {name : 'Khoya', dish_id : 2},
        {name : 'Sugar', dish_id : 2},

      ]);
    });
};
