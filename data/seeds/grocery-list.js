
exports.seed = function(knex, Promise) {
  return knex('shoppingList').del()
    .then(function () {
      return knex('shoppingList').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 4, unit: 'TBSP' },
        { recipe_id: 1, ingredient_id: 2, quantity: 1.5, unit: 'cups' },
        { recipe_id: 2, ingredient_id: 4, quantity: 2, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 1, quantity: 4, unit: 'TBSP' },
        { recipe_id: 3, ingredient_id: 4, quantity: 2, unit: 'cups' },
        { recipe_id: 2, ingredient_id: 5, quantity: 4, unit: 'cups' },
        { recipe_id: 1, ingredient_id: 7, quantity: 2, unit: 'lbs' },
      ]);
    });
};
