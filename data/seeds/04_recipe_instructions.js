
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {id: 1, quantity: 4, recipe_id: 2, ingredients_id: 1},
        {id: 2, quantity: 8, recipe_id: 3, ingredients_id: 2},
        {id: 3, quantity: 12, recipe_id: 1, ingredients_id: 3}
      ]);
    });
};
