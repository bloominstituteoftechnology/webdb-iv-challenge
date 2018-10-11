
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {steps: 'rowValue1', recipes_id: 1, order:1},
        {steps: 'rowValue2', recipes_id: 1, order:3},
        {steps: 'rowValue3', recipes_id: 1, order:2}
      ]);
    });
};
