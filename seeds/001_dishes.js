exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: 'ice cream' },
        { name: 'cupcake' },
        { name: 'creme brulee' }
      ]);
    });
};

// knex seed:make 001_dishes
// knex seed:run
