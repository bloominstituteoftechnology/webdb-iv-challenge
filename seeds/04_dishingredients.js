
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishingredients').insert([
        { dishId: 1, ingredientId: 2 },
        { dishId: 2, ingredientId: 1 },

      ]);
    });
};
