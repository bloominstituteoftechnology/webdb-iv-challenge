
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'ground beef'},
        {id: 2, name: 'bread crumbs'},
        {id: 3, name: 'eggs'},
        {id: 4, name: 'spaghetti noodles'},
        {id: 5, name: 'meatballs'},
        {id: 6, name: 'spaghetti sauce'},
        {id: 7, name: 'bread'},
        {id: 8, name: 'butter'},
        {id: 9, name: 'cheese'}
      ]);
    });
};
