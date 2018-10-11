
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('receipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('receipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1, unit_of_measure: 'tlb'},
        {recipe_id: 2, ingredient_id: 2, quantity: 2, unit_of_measure: 'cup'},
        {recipe_id: 3, ingredient_id: 3, quantity: 1, unit_of_measure: 'ounces'}
      ]);
    });
};
