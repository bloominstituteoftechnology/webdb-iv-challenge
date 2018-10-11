
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 3, unit_of_measure: 'egg'},
        {recipe_id: 1, ingredient_id: 3, quantity: 0.5, unit_of_measure: 'pound'},
        {recipe_id: 1, ingredient_id: 10, quantity: 0.5, unit_of_measure: 'pound'},
        {recipe_id: 2, ingredient_id: 1, quantity: 3, unit_of_measure: 'egg'},
        {recipe_id: 2, ingredient_id: 6, quantity: 1, unit_of_measure: 'pinch'},
        {recipe_id: 3, ingredient_id: 1, quantity: 2, unit_of_measure: 'egg'},
        {recipe_id: 3, ingredient_id: 2, quantity: 0.5, unit_of_measure: 'pound'},
        {recipe_id: 3, ingredient_id: 5, quantity: 2, unit_of_measure: 'cup'},
        {recipe_id: 3, ingredient_id: 10, quantity: 1, unit_of_measure: 'cup'},
        {recipe_id: 3, ingredient_id: 11, quantity: 1, unit_of_measure: 'tablespoon'},
        {recipe_id: 4, ingredient_id: 1, quantity: 2, unit_of_measure: 'egg'},
        {recipe_id: 4, ingredient_id: 4, quantity: 0.5, unit_of_measure: 'pound'},
        {recipe_id: 4, ingredient_id: 5, quantity: 2, unit_of_measure: 'cup'},
        {recipe_id: 4, ingredient_id: 10, quantity: 1, unit_of_measure: 'cup'},
        {recipe_id: 4, ingredient_id: 11, quantity: 1, unit_of_measure: 'tablespoon'},
        {recipe_id: 5, ingredient_id: 2, quantity: 1, unit_of_measure: 'patty'},
        {recipe_id: 5, ingredient_id: 7, quantity: 2, unit_of_measure: 'bun'},
        {recipe_id: 5, ingredient_id: 8, quantity: 2, unit_of_measure: 'leaf'},
        {recipe_id: 5, ingredient_id: 9, quantity: 2, unit_of_measure: 'slice'},
        {recipe_id: 5, ingredient_id: 6, quantity: 1, unit_of_measure: 'slice'},
        {recipe_id: 6, ingredient_id: 4, quantity: 1, unit_of_measure: 'breast'},
        {recipe_id: 6, ingredient_id: 7, quantity: 2, unit_of_measure: 'bun'},
        {recipe_id: 6, ingredient_id: 8, quantity: 2, unit_of_measure: 'leaf'},
        {recipe_id: 6, ingredient_id: 9, quantity: 2, unit_of_measure: 'slice'}
      ]);
    });
};
