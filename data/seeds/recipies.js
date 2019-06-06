
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert([
        {id: 1, dish_id: 1, name: 'Traditional Spegetti', instructions:"cook noodles then shove it all into one pot"},
        {id: 2, dish_id: 1, name: 'Mexican Spegetti', instructions:"cook noodles then shove it all into one pot"}
      ]);
    });
};
