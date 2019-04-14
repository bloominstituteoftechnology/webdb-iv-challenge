
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'shake of salt', qty: 10},
        {id: 2, ingredient_name: 'twist of pepper', qty: 10},
        {id: 3, ingredient_name: 'dusting of sugar', qty: 10}
      ]);
    });
};
