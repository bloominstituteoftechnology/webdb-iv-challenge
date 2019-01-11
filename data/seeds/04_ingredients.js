
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Beans cups', qty: 2},
        {id: 2, ingredient: 'Cheese lbs', qty: 1},
        {id: 3, ingredient: 'Flour cups', qty: 3}
      ]);
    });
};
