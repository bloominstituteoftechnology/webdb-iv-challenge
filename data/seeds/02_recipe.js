exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'cheese pizza', dish_id: 1},
        {recipe_name: 'pepperoni pizza', dish_id: 1},
        {recipe_name: 'cheeseburger', dish_id: 2},
        {recipe_name: 'baconburger', dish_id: 2}
      ]);
    });
};