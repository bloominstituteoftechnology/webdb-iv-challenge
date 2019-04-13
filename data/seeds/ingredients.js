
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'candy', quantity: 1, measurement: "1 cup", recipes_id: 1},
        {name: 'sauce', quantity: 2, measurement: "1/2 gram", recipes_id: 2},
        {name: 'peppermint', quantity: 3, measurement: '3/4 cup', recipes_id: 3}
      ]);
    });
};
