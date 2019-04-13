
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
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
