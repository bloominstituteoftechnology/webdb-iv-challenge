exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Asada Tacos', dish_id: 1},
        {name: 'Basic Mac & Cheese', dish_id: 2},
      ]);
    });
};
