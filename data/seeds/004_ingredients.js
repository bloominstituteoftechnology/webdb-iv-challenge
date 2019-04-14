
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'beef'},
        {name: 'sugar'},
        {name: 'butter'},
        {name: 'onion'},
        {name: 'soy sauce'},
        {name: 'salt'},
        {name: 'vineger'},
        {name: 'veg oil'},
        {name: 'powder'},
        {name: 'flour'},
        {name: 'water'}
      ]);
    });
};
