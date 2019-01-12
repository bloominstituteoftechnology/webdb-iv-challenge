
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'tacos', recipe_id: 3},
        {id: 2, name: 'pizza', recipe_id: 2},
        {id: 3, name: 'burger', recipe_id: 1}
      ]);
    });
};
