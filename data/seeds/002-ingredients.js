exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'tortillas'},
        {name: 'steak'},
        {name: 'cilantro'},
        {name: 'onion'},
        {name: 'lime'},
        {name: 'macaroni'},
        {name: 'cheese'},
      ]);
    });
};
