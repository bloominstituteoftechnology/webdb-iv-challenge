
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measures').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('measures').insert([
        {Unit: 'Cup'},
        {Unit: 'Slice'},
        {Unit: 'Ounce'},
        {Unit: 'Pound'},
      ]);
    });
};
