exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantity')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('quantity').insert([
        { id: 1, amount: 1 },
        { id: 2, amount: 2 },
        { id: 3, amount: 3 },
        { id: 4, amount: '1/2 pound' },
        { id: 5, amount: '1 package' },
      ]);
    });
};
