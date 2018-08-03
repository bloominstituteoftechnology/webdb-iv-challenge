
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoping_list').insert([
        {list_name: "my 1st list", ingredients_id: 1, total_quantity:2, recipe_id: 1, dish_likes:12},
        {list_name: "my 1st list", ingredients_id: 2, total_quantity:1, recipe_id: 1, dish_likes:12},
        {list_name: "my 1st list", ingredients_id: 3, total_quantity:3, recipe_id: 1, dish_likes:12},
        {list_name: "my 1st list", ingredients_id: 4, total_quantity:1, recipe_id: 1, dish_likes:12}
      ]);
    });
};
