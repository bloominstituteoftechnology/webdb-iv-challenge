
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1 , quantity: 2.5 , unit_of_measure: "cups"},
        {recipe_id: 1, ingredient_id: 2, quantity: 2 , unit_of_measure:"cups"},
        {recipe_id: 1, ingredient_id: 3 , quantity:1 , unit_of_measure:"tablespoon"},
        {recipe_id: 1, ingredient_id: 4, quantity: 1, unit_of_measure:"teaspoon"},
        {recipe_id: 1, ingredient_id:5 , quantity: .5, unit_of_measure:"teaspoon"},
        {recipe_id: 1, ingredient_id:6 , quantity:2 , unit_of_measure:"lightly beaten"},
        {recipe_id: 1, ingredient_id:7 , quantity:1 , unit_of_measure:"cup"},
        {recipe_id: 1, ingredient_id:8 , quantity:.5 , unit_of_measure:"cup"},
        {recipe_id: 1, ingredient_id:9 , quantity:2 , unit_of_measure:"cup"},
        {recipe_id: 1, ingredient_id:1 , quantity:2 , unit_of_measure:"tablespoon"},
        {recipe_id: 1, ingredient_id:2 , quantity:.25 , unit_of_measure:"cup"},
        {recipe_id: 1, ingredient_id:10 , quantity:.5 , unit_of_measure: "teaspoon" },
        {recipe_id: 1, ingredient_id: 11, quantity:4 , unit_of_measure:"teaspoon"},
        
      ]);
    });
};
