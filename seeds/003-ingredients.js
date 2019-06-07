
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
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
      ]);
    });
};
