
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_table').insert([
          {ingredient_name: 'cup of flour', quantity: 1, recipe_id: 1},
          {ingredient_name: 'pound of cheese', quantity: 1, recipe_id: 1},
          {ingredient_name: 'quart of bbq sauce', quantity: 2, recipe_id: 1},
          {ingredient_name: 'pound of chicken', quantity: 3, recipe_id: 1},
          {ingredient_name: 'cup of flour', quantity: 1, recipe_id: 2},
          {ingredient_name: 'pound of cheese', quantity: 1, recipe_id: 2},
          {ingredient_name: 'quart of tomato sauce', quantity: 2, recipe_id: 2},
          {ingredient_name: 'basil leaves', quantity: 6, recipe_id: 2},
      ]);
    });
};
