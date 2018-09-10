
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Denver Omelette', dish_id: 1},
        {id: 2, name: 'Cheese Omelette', dish_id: 1},
        {id: 3, name: 'Beef Fried Rice', dish_id: 2},
        {id: 4, name: 'Chicken Friend Rice', dish_id: 2},
        {id: 5, name: 'Cheeseburger', dish_id: 3},
        {id: 6, name: 'Chickenburger', dish_id: 3}
      ]);
    });
};
