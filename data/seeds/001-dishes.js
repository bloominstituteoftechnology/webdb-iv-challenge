
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'mac and cheese'},
        {id: 2, name: 'hamburger'},
        {id: 3, name: 'pizza'}
      ]);
    });
};
