
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'vegetarian protein noodle soup', dish_id: '1'},
        {name: 'pho noodle soup', dish_id: '1'},
        {name: 'avocado and pineapple salsa tuna steak', dish_id: '2'},
        {name: 'grilled tuna steak', dish_id: '2'},
        {name: 'spinach, tomatoes, and leeks omelette', dish_id: '3'},
        {name: 'ham and cheese omelette', dish_id: '3'}
      ]);
    });
};
