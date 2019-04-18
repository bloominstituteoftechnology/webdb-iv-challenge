
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {name: 'a cup of flour'},
    {name: 'a tablespoon of vanilla'},
    {name: 'a gram of melted butter'},
    {name: 'half a cup of brown sugar'},
    {name: 'a teaspoon of cinnamon'},
    {name: 'three large eggs'},
    {name: 'a pinch of salt'},
    {name: 'a stick of butter'},
    {name: 'a tablespoon of honey'},
    {name: 'a teaspoon of garlic powder'},
    {name: 'a dash of cayenne pepper'},
    {name: 'three corn on the cobs'}, 
    {name: 'three cherry tomatoes'},
    {name: 'half an onion diced'},
    {name: 'one large red bell peppers diced'},
    {name: 'a bunch of mushrooms'},
    {name: 'bag of shredded cheese'},
    {name: 'a stem of cilantro'},
    {name: 'a bunch of spinach'}
  ]);
};

