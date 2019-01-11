
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {ingredient_name: 'Tortilla'},
        {ingredient_name: 'Chicken'},
        {ingredient_name: 'Steak'},
        {ingredient_name: 'Cheese'},
        {ingredient_name: 'Pico De Gallo'},
        {ingredient_name: 'Dough'},
        {ingredient_name: 'Marinara'},
        {ingredient_name: 'Pepperoni'},
        {ingredient_name: 'Ramen'},
        {ingredient_name: 'Broth'},
        {ingredient_name: 'Mushrooms'}
      ]);
    });
};
