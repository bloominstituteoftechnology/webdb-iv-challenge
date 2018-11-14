
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {quantity: 1, name: 'Milk', ing_id:1},
        {quantity: 2, name: 'Eggs', ing_id:2},
        {quantity: 1, name: 'Vanilla Stick', ing_id:3}
      ]);
    });
};
