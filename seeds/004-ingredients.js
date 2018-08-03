
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'tomatoes'},
        { name: 'whole grain pasta'},
        { name: 'alfredo sauce'},
        { name: 'chicken'},
        { name: 'fettuccine'},
        { name: 'frozen tacos'},
        { name: 'macaroni'},
        { name: 'cheese'}
      ]);
    });
};
