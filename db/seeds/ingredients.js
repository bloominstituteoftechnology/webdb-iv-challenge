
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'spaghetti noodles'},
        {name: 'tomato sauce'},
        {name: 'salt'},
        {name: 'pepper'},
        {name: 'meatballs'},
        {name: 'water'},
        {name: 'olive oil'},
        {name: 'taco shells'},
        {name: 'hamburger meat'},
        {name: 'taco seasoning'},
        {name: 'diced tomatoes'},
        {name: 'shredded cheese'},
        {name: 'diced onion'},
        {name: 'sour cream'},
        {name: 'guacamole'},
        {name: 'salsa'},
        {name: 'shredded lettuce'}
      ]);
    });
};
