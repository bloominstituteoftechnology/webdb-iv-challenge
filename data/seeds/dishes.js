
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Pasta Bolognese'},
        {name: 'Burrito Bowl'},
        {name: 'Seared Salmon'}
      ]);
    });
};
