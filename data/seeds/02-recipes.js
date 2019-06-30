
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Moms Apple Pie', dish_id: 3},
        {name: 'Best Fish Tacos Ever', dish_id: 2},
        {name: 'Apple Pie with Homemade Vanilla Ice Cream', dish_id: 3},
        {name: 'Personal Pizzas', dish_id: 1}
      ]);
    });
};
