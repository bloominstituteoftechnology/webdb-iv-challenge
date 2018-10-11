
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'rowValue1'},
        {name: 'rowValue2'},
        {name: 'rowValue3'}
      ]);
    });
};
