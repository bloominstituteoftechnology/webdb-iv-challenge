
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {amount: '1', ingredientId: 1, measurementId: 1},
        {amount: '2', ingredientId: 2, measurementId: 2},
        {amount: '1.5', ingredientId: 3, measurementId: 3},
        {amount: '3', ingredientId: 6, measurementId: 2},
        {amount: '2.5', ingredientId: 4, measurementId: 4},
        {amount: '1', ingredientId: 5, measurementId: 6}
      ]);
    });
};
