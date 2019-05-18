
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: '1 tsp of curry'},
        {name: '1 carrot'},
        {name: '1 cup of diced potatoes'},
      ]);
    });
};
