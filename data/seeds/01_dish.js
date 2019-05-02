
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, name: 'samosa'},
        {id: 2, name: 'pizza'},
        {id: 3, name: 'tacos'}
      ]);
    });
};
