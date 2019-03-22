
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'Meatlovers Pizza', dish_id: 1},
        {recipe: 'Three Cheese Pizza', dish_id: 1},
        {recipe: 'Crunchy Beef Tacos', dish_id: 2},
        {recipe: 'Street Tacos', dish_id: 2}
      ]);
    });
};
