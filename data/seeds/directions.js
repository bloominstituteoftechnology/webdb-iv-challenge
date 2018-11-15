exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('directions').insert([
        { recipes_id: 1, name: 'rowValue1', step: 1 },
        { recipes_id: 2, name: 'rowValue2', step: 1 },
        { recipes_id: 3, name: 'rowValue3', step: 1 }
      ]);
    });
};
