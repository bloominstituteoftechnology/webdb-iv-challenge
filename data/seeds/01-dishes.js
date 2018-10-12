
exports.seed = function(knex, Promise) {
  
  return knex('dishes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Gumbo'},
        {name: 'Jambalaya'},
        {name: 'Etouffee'},
      ]);
    });
};
