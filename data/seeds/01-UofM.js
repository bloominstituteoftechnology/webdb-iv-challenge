
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('UofM').del()
    .then(function () {
      // Inserts seed entries
      return knex('UofM').insert([
        {Unit: 'Cup'},
        {Unit: 'Slice'},
        {Unit: 'Ounce'},
        {Unit: 'Pound'}
      ]);
    });
};
