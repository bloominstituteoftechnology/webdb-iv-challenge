
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'supreme', dish_id: 1},
        {id: 2, recipe_name: 'al_pastor', dish_id: 2},
        {id: 3, recipe_name: 'cheeseburger', dish_id: 3},
        {id: 4, recipe_name: 'veggieburger', dish_id: 3},
        {id: 5, recipe_name: 'pepperoni', dish_id: 1},
        {id: 6, recipe_name: 'lengua', dish_id: 2},
      ]);
    });
};
