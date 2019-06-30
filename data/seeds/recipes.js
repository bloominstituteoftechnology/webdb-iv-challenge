
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Po Boy\'s Rigatoni Bolognese', dish_id: 1},
        {name: 'Grandma\'s Rigatoni Bolognese', dish_id: 1},
        {name: 'Chicken Burrito Bowl', dish_id: 2},
        {name: 'Spicy Steak Burrito Bowl', dish_id: 2},
        {name: 'Salmon and Spinach', dish_id: 3},
        {name: 'Salmon and Potatoes', dish_id: 3},
      ]);
    });
};
