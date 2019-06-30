
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, amount: 1, unit: 'bundle'},
        {recipe_id: 1, ingredient_id: 2, amount: 100, unit: 'g'},
        {recipe_id: 1, ingredient_id: 3, amount: 400, unit: 'ml'},
        {recipe_id: 2, ingredient_id: 3, amount: 500, unit: 'ml'},
        {recipe_id: 2, ingredient_id: 4, amount: 200, unit: 'g'},
        {recipe_id: 2, ingredient_id: 1, amount: 1, unit: 'bundle'},
        {recipe_id: 3, ingredient_id: 5, amount: 100, unit: 'g'},
        {recipe_id: 3, ingredient_id: 6, amount: 250, unit: 'g'},
        {recipe_id: 3, ingredient_id: 7, amount: 100, unit: 'g'},
        {recipe_id: 4, ingredient_id: 6, amount: 250, unit: 'g'},
        {recipe_id: 5, ingredient_id: 8, amount: 300, unit: 'g'},
        {recipe_id: 5, ingredient_id: 9, amount: 3, unit: 'eggs'},
        {recipe_id: 5, ingredient_id: 10, amount: 100, unit: 'g'},
        {recipe_id: 6, ingredient_id: 9, amount: 3, unit: 'eggs'},
        {recipe_id: 6, ingredient_id: 11, amount: 150, unit: 'g'},
        {recipe_id: 6, ingredient_id: 12, amount: 50, unit: 'g'},
      ]);
    });
};
