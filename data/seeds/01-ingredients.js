
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {quantity: 1, name: 'Salmon', ing_id:1},
        {quantity: 2, name: 'Chicken', ing_id:2},
        {quantity: 1, name: 'Garlic', ing_id:3},
        {quantity: 1, name: 'BBQ sauce', ing_id:4}
      ]);
    });
};
