
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cheese'},
        {id: 2, name: 'meat'},
        {id: 3, name: 'pasta'}
      ]);
    });
};
