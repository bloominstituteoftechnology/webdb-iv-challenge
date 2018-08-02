
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 0, name: 'meat'},
        {id: 1, name: 'tomato'},
        {id: 2, name: 'pasta'},
        {id: 3, name: 'pork'},
        {id: 4, name: 'eggs'},
        {id: 5, name: 'peppers'},
        {id: 6, name: 'salt'},
        {id: 7, name: 'curry spice'},
        {id: 8, name: 'butter'},
        {id: 9, name: 'olive oil'},
        {id: 10, name: 'tortillas'}
      ]);
    });
};
