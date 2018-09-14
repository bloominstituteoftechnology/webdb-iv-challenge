
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {id: 1, name: 'hamburger meat'},
        {id: 2, name: 'cheese'},
        {id: 3, name: 'pasta'}
      ]);
    });
};
