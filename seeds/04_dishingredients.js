
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishingredients').insert([
        { dishesId: 1, ingredientId: 2 },
        { dishesId: 2, ingredientId: 1 },

      ]);
    });
};
