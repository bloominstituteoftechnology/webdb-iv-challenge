
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Omelette'},
        {id: 2, name: 'Fried Rice'},
        {id: 3, name: 'Hamburger'}
      ]);
    });
};
