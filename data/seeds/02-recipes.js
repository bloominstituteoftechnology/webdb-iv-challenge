
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Cheese Pizza', dish_id: 1},
        {id: 2, name: 'Pesto Pizza', dish_id: 1},
        {id: 3, name: 'Cheeseburger', dish_id: 2},
        {id: 4, name: 'Turkeyburger', dish_id: 2},
        {id: 5, name: 'Spaghetti', dish_id: 3},
        {id: 6, name: 'Pesto Linguini', dish_id: 3},
      ]);
    });
};
