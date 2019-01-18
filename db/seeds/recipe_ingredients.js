exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 2, unit_of_measure: 'lbs' },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 1,
          unit_of_measure: 'package',
        },
        { recipe_id: 1, ingredient_id: 3, quantity: 1, unit_of_measure: 'lbs' },
        { recipe_id: 2, ingredient_id: 3, quantity: 2, unit_of_measure: 'lbs' },
        {
          recipe_id: 2,
          ingredient_id: 4,
          quantity: 3,
          unit_of_measure: 'cups',
        },
        { recipe_id: 2, ingredient_id: 5, quantity: 2, unit_of_measure: 'lbs' },
      ]);
    });
};
