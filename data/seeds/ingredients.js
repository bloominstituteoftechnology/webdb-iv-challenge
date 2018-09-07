
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'eggs'},
        {name: 'beef'},
        {name: 'rice'},
        {name: 'cheese'},
        {name: 'buns'},
        {name: 'lettuce'},
        {name: 'tomatoe'},
        {name: 'chopped veggies'},
        {name: 'oil'}
      ]);
    });
};
