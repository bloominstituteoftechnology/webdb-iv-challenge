
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, name: 'Pizza'},
        {id: 2, name: 'Hamburger'},
        {id: 3, name: 'Pasta'}
      ]);
    });
};
