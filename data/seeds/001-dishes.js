
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Chocolate cake'},
        {name: 'Seasoned corn'},
        {name: 'Omelet'}
      ]);
};
