
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {amount: 'rowValue1', ingredientId: 1, measurementId: 1},
        {amount: 'rowValue2', ingredientId: 1, measurementId: 1},
        {amount: 'rowValue3', ingredientId: 1, measurementId: 1}
      ]);
    });
};
