
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, ingredient_id: '1', recipe_id: '1', quantity: 5, measurement: 'spoons'},
        {id: 2, ingredient_id: '2', recipe_id: '1', quantity: 2, measurement: 'cups'},
        {id: 3, ingredient_id: '3', recipe_id: '1', quantity: 2, measurement: 'package'},

        {id: 4, ingredient_id: '4', recipe_id: '2', quantity: 2, measurement: 'slices'},
        {id: 5, ingredient_id: '5', recipe_id: '2', quantity: 2, measurement: 'spoons'},
        {id: 6, ingredient_id: '6', recipe_id: '2', quantity: 2, measurement: 'spoons'},
        
        {id: 7, ingredient_id: '7', recipe_id: '3', quantity: 2, measurement: 'cups'},
        {id: 8, ingredient_id: '8', recipe_id: '3', quantity: 1, measurement: 'box'},
      ]);
    });
};
