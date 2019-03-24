
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
