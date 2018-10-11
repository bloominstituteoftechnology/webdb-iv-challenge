
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'carne asada'},
        { ingredient: 'corn tortillas'},
        { ingredient: 'avocado'},
        { ingredient: 'onions'},
        { ingredient: 'cilantro'},
        { ingredient: 'pork meat'},
        { ingredient: 'eggs'},
        { ingredient: 'ham'},
        { ingredient: 'mushrooms'},
        { ingredient: 'bell peppers'},
        { ingredient: 'chicken'},
        { ingredient: 'flour'},
        { ingredient: 'garlic salt'},
        { ingredient: 'black pepper'},
        { ingredient: 'seasoning'},
        { ingredient: 'sea salt'},
      ])
    });
};
