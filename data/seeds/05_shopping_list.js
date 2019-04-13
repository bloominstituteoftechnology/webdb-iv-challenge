
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {id: 1, dish_id: 1, dish_name: 'cake', recipe_id: 1, recipe_name: 'Mommas cake', ingredient: 'butter', quantity_to_buy: 50, measurement: 'cups'},
      
      ]);
    });
};
