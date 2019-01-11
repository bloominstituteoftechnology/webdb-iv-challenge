
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {order: 2, recipes_id: 1},
        {order: 3, recipes_id: 2},
        {order: 1, recipes_id: 2}
      ]);
    });
};
