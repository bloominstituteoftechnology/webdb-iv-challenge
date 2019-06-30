
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {quantity: '0.3'},
        {quantity: '1'},
        {quantity: '3'},
        {quantity: '6'},
        {quantity: '12'},
        {quantity: '16'}
      ]);
    });
};
