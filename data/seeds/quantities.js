
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {quantity: 'rowValue1'},
        {quantity: 'rowValue2'},
        {quantity: 'rowValue3'}
      ]);
    });
};
