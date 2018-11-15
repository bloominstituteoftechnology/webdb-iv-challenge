
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipeName: 'Pepperoni Pizza', dishName: 'pizza',dishId : 1},
        {recipeName: '3 Meat Pizza', dishName: 'pizza',dishId : 1},
        {recipeName: 'Cheese Pizza', dishName: 'pizza',dishId : 1},
        {recipeName: 'Big Taco', dishName: 'taco',dishId : 2},
        {recipeName: 'Small Taco', dishName: 'taco',dishId : 2},
      ]);
    });
};
