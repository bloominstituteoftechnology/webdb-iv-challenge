
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient_connections').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient_connections').insert([
        {quantity: 2.4, units: 'grams', recipe_id: 1, ingredient_id: 1},
        {quantity: 3.3, units: 'lbs', recipe_id: 2, ingredient_id: 2},
        {quantity: 2.1, units: 'grams', recipe_id: 3, ingredient_id: 3}
      ]);
    });
};
