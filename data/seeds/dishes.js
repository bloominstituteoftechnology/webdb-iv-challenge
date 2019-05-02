
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'rowValue1', recipies_id: 1},
        {name: 'rowValue2', recipies_id: 2},
        {name: 'rowValue3', recipies_id: 3}
      ]);
    });
};
