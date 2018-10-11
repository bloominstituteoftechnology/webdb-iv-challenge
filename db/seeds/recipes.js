
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'spaghetti', dish_id: 1},
        {name: 'tacos', dish_id: 2},
        {name: 'fried rice', dish_id: 3}
      ]);
    });
};
