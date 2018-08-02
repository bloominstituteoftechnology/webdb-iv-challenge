
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Cheese', recipes_id: 1, quantity: 1 },
        { name: 'Meat', recipes_id: 2, quantity: 1 },
        { name: 'Salt', recipes_id: 3, quantity: 1 },
      ]);
    });
};
