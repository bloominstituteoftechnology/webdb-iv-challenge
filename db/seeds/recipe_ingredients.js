
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 2, ingredient_id: 1 , quantity: 2.5 , unit_of_measure: "cups"},
        {recipe_id: 2, ingredient_id: 2, quantity: 2 , unit_of_measure:"cups"},
        {recipe_id: 1, ingredient_id: 3 , quantity:1 , unit_of_measure:"tablespoon"},
        {recipe_id: 2, ingredient_id: 4, quantity: 1, unit_of_measure:"teaspoon"},
        {recipe_id: 2, ingredient_id:5 , quantity: .5, unit_of_measure:"teaspoon"},
        {recipe_id: 2, ingredient_id:6 , quantity:2 , unit_of_measure:"lightly beaten"},
        {recipe_id: 2, ingredient_id:7 , quantity:1 , unit_of_measure:"cup"},
        {recipe_id: 2, ingredient_id:8 , quantity:.5 , unit_of_measure:"cup"},
        {recipe_id: 2, ingredient_id:9 , quantity:2 , unit_of_measure:"cup"},
        {recipe_id: 2, ingredient_id:1 , quantity:2 , unit_of_measure:"tablespoon"},
        {recipe_id: 2, ingredient_id:2 , quantity:.25 , unit_of_measure:"cup"},
        {recipe_id: 2, ingredient_id:10 , quantity:.5 , unit_of_measure: "teaspoon" },
        {recipe_id: 2, ingredient_id: 11, quantity:4 , unit_of_measure:"teaspoon"},

        {recipe_id: 1, ingredient_id: 11, quantity:.5 , unit_of_measure:"cup"},
        {recipe_id: 1, ingredient_id: 12, quantity:.5, unit_of_measure:"cup"},
        {recipe_id: 1, ingredient_id: 13, quantity:3, unit_of_measure:"cloves"},
        {recipe_id: 1, ingredient_id: 14, quantity:1, unit_of_measure:"zested"},
        {recipe_id: 1, ingredient_id:15 , quantity:.25, unit_of_measure:"cup"},
        {recipe_id: 1, ingredient_id:16 , quantity: 6, unit_of_measure:"6 ounce"},
        {recipe_id: 1, ingredient_id:5 , quantity:null, unit_of_measure:"to taste"},
        {recipe_id: 1, ingredient_id:17 , quantity:null, unit_of_measure:"to taste"}

      ]);
    });
};
