exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {name: 'Cup'},
        {name: 'Tablespoon'},
        {name: 'Teaspoon'},
        {name: 'Pinch'},
      ]);
    });
};
