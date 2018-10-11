
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'Cheese Pizza', dish_id: 1},
        {id: 2, name: 'Pepperoni Pizza', dish_id: 1},
        {id: 3, name: 'Cheeseburger', dish_id: 2},
        {id: 4, name: 'Hamburger', dish_id: 2},
        {id: 5, name: 'Spaghetti', dish_id: 3},
        {id: 6, name: 'Fettucini Alfredo', dish_id: 3},
      ]);
    });
};
