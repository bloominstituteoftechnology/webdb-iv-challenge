
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredient').insert([
        {ingredient_id: 1, recipe_id: 1},
        {ingredient_id: 2, recipe_id: 2},
        {ingredient_id: 3, recipe_id: 3}
      ]);
    });
};
