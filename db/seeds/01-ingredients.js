
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Rice'},
        {name: 'Fish'},
        {name: 'Tofu'},
        {name: 'Eggs'},
        {name: 'Seaweed'},
        {name: 'Crab'},
        {name: 'Bacon'},
        {name: 'Flour'},
        {name: 'Salt'},
        {name: 'Pepper'},
        {name: 'Soy Sauce'}
      ]);
    });
};
