
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Deep Dish', dish_id: '1'},
        {recipe_name: 'Club Sandwich', dish_id: '2'}
      ]);
    });
};
