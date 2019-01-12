
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Moms Meatloaf',prep_time: '1 hour',cook_time: '2 hours',dish_id: 6},
        {recipe_name: 'Pan Pizza',prep_time: '30 min',cook_time: '30 min',dish_id: 1},
        {recipe_name: 'Vito Spaghetti',prep_time: '1 hour',cook_time: '5 hours',dish_id: 2},
        {recipe_name: 'Grannies Fried Chicken',prep_time: '30 min',cook_time: '30 min',dish_id: 3},
        {recipe_name: 'Brazilian Pudim',prep_time: '30 min',cook_time: '1 hour',dish_id: 4},
        {recipe_name: 'Mexican Tacos',prep_time: '30 min',cook_time: '30 min',dish_id: 8},
        {recipe_name: 'Chicken Spaghetti',prep_time: '1 hour',cook_time: '2 hours',dish_id: 2},
        {recipe_name: 'Veggy Meatloaf',prep_time: '1 hour',cook_time: '1.5 hours',dish_id: 6}
      ]);
    });
};
