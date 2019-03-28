
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, name: 'rice'},
        {id: 2, name: 'chicken'},
        {id: 3, name: 'beans'}
      ]);
    });
};
