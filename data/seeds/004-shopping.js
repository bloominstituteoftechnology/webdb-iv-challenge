
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, quantity: 5, ingredient_id: 1, recipe_id: 1 },
        {id: 2, quantity: 4, ingredient_id: 1, recipe_id: 2 },
        {id: 3, quantity: 8, ingredient_id: 1, recipe_id: 3 },
        {id: 4, quantity: 6, ingredient_id: 2, recipe_id: 3 },
        {id: 5, quantity: 2, ingredient_id: 3, recipe_id: 2 },
        {id: 6, quantity: 1, ingredient_id: 4, recipe_id: 1 },
        {id: 7, quantity: 2, ingredient_id: 4, recipe_id: 2 },
        {id: 8, quantity: 1, ingredient_id: 5, recipe_id: 1 },
        {id: 9, quantity: 1, ingredient_id: 5, recipe_id: 2 },
        {id: 10, quantity: 1, ingredient_id: 5, recipe_id: 3 },
        {id: 11, quantity: 1, ingredient_id: 6, recipe_id: 3 }
      ]);
    });
};
