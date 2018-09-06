
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'soba ramen', dish_id: 2},
        {recipe_name: 'shio ramen', dish_id: 2},
        {recipe_name: 'veg bowl', dish_id: 1},
        {recipe_name: 'teriyaki bowl', dish_id: 1},
        {recipe_name: 'spinach n blue cheese salad', dish_id: 3},
        {recipe_name: 'lame romaine salad', dish_id: 3},
      ]);
    });
};
