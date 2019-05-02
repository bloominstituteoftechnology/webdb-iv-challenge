
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        {name: '1', ingredients_id: 1, recipie: 'rowValue1'},
        {name: '2', ingredients_id: 2, recipie: 'rowValue2'},
        {name: '3', ingredients_id: 3, recipie: 'rowValue3'}
      ]);
    });
};
