
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'rice noodles'},
        {name: 'tofu'},
        {name: 'beef broth'},
        {name: 'brisket'},
        {name: 'avocado'},
        {name: 'tuna'},
        {name: 'pineapple'},
        {name: 'tomatoes'},
        {name: 'eggs'},
        {name: 'leeks'},
        {name: 'ham'},
        {name: 'cheese'},
      ]);
    });
};
