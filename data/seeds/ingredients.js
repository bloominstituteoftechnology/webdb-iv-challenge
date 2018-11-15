
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'sauce'},
        {id: 2, name: 'cheese'},
        {id: 3, name: 'dough'},
        {id: 4, name: 'bread'},
        {id: 5, name: 'peanut butter'},
        {id: 6, name: 'jelly'},
        {id: 7, name: 'meat'},
        {id: 8, name: 'lasagna pasta'},
      ]);
    });
};
