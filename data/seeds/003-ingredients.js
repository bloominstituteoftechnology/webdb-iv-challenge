
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {name: 'flour'},
    {name: 'vanilla'},
    {name: 'butter'},
    {name: 'brown sugar'},
    {name: 'cinnamon'},
    {name: 'eggs'},
    {name: 'salt'},
    {name: 'butter'},
    {name: 'honey'},
    {name: 'garlic powder'},
    {name: 'cayenne pepper'},
    {name: 'corn'}, 
    {name: 'tomatoes'},
    {name: 'onions'},
    {name: 'bell peppers'},
    {name: 'mushrooms'},
    {name: 'cheese'},
    {name: 'cilantro'},
    {name: 'spinach'}
  ]);
};

