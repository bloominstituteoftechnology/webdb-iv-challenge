
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_lists').insert([
        {id: 1, dish_id: '1', recipe_id: 1, ingredient_name: 'handful of greens', ingredient_qty: 5},
        {id: 2, dish_id: '2', recipe_id: 4, ingredient_name: 'handful of pork', ingredient_qty: 5},
        {id: 3, dish_id: '3', recipe_id: 5, ingredient_name: 'handful of suet', ingredient_qty: 5}
      ]);
    });
};
