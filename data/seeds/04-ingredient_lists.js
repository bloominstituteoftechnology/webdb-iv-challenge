
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_lists').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_lists').insert([
        {ingredient_amount: '2.5', ingredient_id: '1', recipes_id: '1'},
        {ingredient_amount: '4.5', ingredient_id: '2', recipes_id: '2'}
      ]);
    });
};
