
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {text: 'rowValue1'},
        {text: 'rowValue2'},
        {text: 'rowValue3'}
      ]);
    });
};
