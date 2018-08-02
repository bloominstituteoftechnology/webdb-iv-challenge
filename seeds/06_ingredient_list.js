
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredientList').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientList').insert([
        {ingredientId: 'rowValue1', recipeId: 1},
        {ingredientId: 'rowValue2', recipeId: 1},
        {ingredientId: 'rowValue3', recipeId: 1}
      ]);
    });
};
