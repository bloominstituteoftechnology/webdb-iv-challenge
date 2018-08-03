
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Step_Ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('Step_Ingredient').insert([
        {recipe_id: 1, step_number: 1, ingredient_id: 1, ingredient_quantity: '3'},
        {recipe_id: 1, step_number: 2, ingredient_id: 9, ingredient_quantity: '1 tbsp'},
        {recipe_id: 1, step_number: 4, ingredient_id: 2, ingredient_quantity: '.5 tsp'},
        {recipe_id: 1, step_number: 4, ingredient_id: 3, ingredient_quantity: '.5 tsp'},
        {recipe_id: 4, step_number: 1, ingredient_id: 4, ingredient_quantity: '3'},
        {recipe_id: 4, step_number: 2, ingredient_id: 5, ingredient_quantity: '5'},
        {recipe_id: 4, step_number: 3, ingredient_id: 6, ingredient_quantity: '6 oz'},
        {recipe_id: 4, step_number: 6, ingredient_id: 2, ingredient_quantity: '.5 tsp'},
        {recipe_id: 4, step_number: 6, ingredient_id: 3, ingredient_quantity: '.5 tsp'}
      ]);
    });
};
