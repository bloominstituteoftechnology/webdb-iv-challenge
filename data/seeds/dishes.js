
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {Dish: 'Pepperoni Pizza'},
        {Dish: 'Sweet Potatoes with Apple Butter'},
        {Dish: 'Apple Pie'},
        {Dish: 'Chicken Alfredo'},
        {Dish: 'Beef Stew in Red Wine Sauce'},
        {Dish: 'Butternut Squash Soup'},
        {Dish: 'Hot Mulled Cider'},
      ]);
    });
};
