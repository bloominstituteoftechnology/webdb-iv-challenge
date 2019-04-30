exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping-list')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('shopping-list').insert([
        { id: 1, recipe_id: 1, dish_id: 1, name: 'Cheese Pizza Shopping list' },
        { id: 2, recipe_id: 2, dish_id: 1, name: 'Dinner Shopping List' },
        { id: 3, recipe_id: 4, dish_id: 2, name: 'Steak Tacos tonight!' }
      ]);
    });
};
