
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Pepperoni Pizza', instructions: 'Some instructions Here', dish_id: 1},
        {recipe_name: 'Burger', instructions: 'Some instructions here', dish_id: 3},
        {recipe_name: 'Street Tacos', instructions: 'Some instructions here', dish_id: 2}
      ]);
    });
};
