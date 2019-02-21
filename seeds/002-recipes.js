
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Cajun Chicken Thighs', dish_id: 1},
        {id: 2, recipe_name: 'Teriyaki Chicken Thighs', dish_id: 1},
        {id: 3, recipe_name: 'Honey BBQ Chicken Thighs', dish_id: 1},
        {id: 4, recipe_name: 'Tritip Steak', dish_id: 2},
        {id: 5, recipe_name: 'Tritip Stir Fry', dish_id: 2},
        {id: 6, recipe_name: 'Chocolate Chip Cookies', dish_id: 3},
      ]);
    });
};
