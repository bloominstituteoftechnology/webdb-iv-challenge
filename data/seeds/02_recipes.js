
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_table').insert([
        {recipe_name: 'bbq chicken pizza', dish_id: 1},
        {recipe_name: 'margherita pizza', dish_id: 1}
      ]);
    });
};
