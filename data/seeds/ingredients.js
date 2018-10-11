exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cheese'},
        {id: 2, name: 'lettuce'},
        {id: 3, name: 'turkey'},
        {id: 4, name: 'rice'},
        {id: 5, name: 'chicken'},
        {id: 6, name: 'buns'},
        {id: 7, name: 'ketchup'},
        {id: 8, name: 'oil'},
        {id: 9, name: 'tomatoe'}
      ]);
    });
};
