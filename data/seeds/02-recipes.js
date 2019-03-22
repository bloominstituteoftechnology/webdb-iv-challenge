
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Meatlovers Pizza', dish_id: 1},
        {name: 'Three Cheese Pizza', dish_id: 1},
        {name: 'Crunchy Beef Tacos', dish_id: 2},
        {name: 'Street Tacos', dish_id: 2}
      ]);
    });
};
