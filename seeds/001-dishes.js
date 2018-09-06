
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: 'Spaghetti' },
        { name: 'Tacos' },
        { name: 'Mac_n_cheese' }
      ]);
    });
};
