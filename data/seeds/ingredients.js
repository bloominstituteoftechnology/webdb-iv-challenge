
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'eggs'},
        {id: 2, name: 'beef'},
        {id: 3, name: 'ham'},
        {id: 4, name: 'chicken'},
        {id: 5, name: 'rice'},
        {id: 6, name: 'cheese'},
        {id: 7, name: 'buns'},
        {id: 8, name: 'lettuce'},
        {id: 9, name: 'tomatoe'},
        {id: 10, name: 'chopped veggies'},
        {id: 11, name: 'oil'}
      ]);
    });
};
