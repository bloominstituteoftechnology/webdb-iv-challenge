
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoppingList').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingList').insert([
        {ingredientId: 1},
        {ingredientId: 2},
        {ingredientId: 3}
      ]);
    });
};
