
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {dish_id: 1, recipe_name: 'Italian Spaghetti'},
        {dish_id: 2, recipe_name: `Rice Soup`},
        {dish_id: 3, recipe_name: `Mom's Egg Salad`}
      ]);
    });
};
