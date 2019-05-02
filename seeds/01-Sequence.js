
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sqlite_sequence').del()
    .then(function () {
      // Inserts seed entries
      return knex('sqlite_sequence').insert([
        {name: 'dishes', seq: 0},
        {name: 'recipes', seq: 0},
        {name: 'process', seq: 0},
        {name: 'ingrediants', seq: 0}
      ]);
    });
};
