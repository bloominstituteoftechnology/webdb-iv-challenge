
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'cup of lentils', quantity: 2},
        {name: '1/4 cup of cheese', quantity: 1},
        {name: '3/4 cup of bacon', quantity: 1}
      ]);
    });
};
