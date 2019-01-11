exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipeName: 'Lazy Lasagne', dish_id: 1},
        {recipeName: 'Spicy Chicken Tacos', dish_id: 2},
        {recipeName: 'Rigatoni all Genovese', dish_id: 3},
        {recipeName: 'Pumpkin Custard Pie', dish_id: 4},
        {recipeName: 'Baked Ziti Casserole', dish_id: 3},
        {recipeName: 'Wisconsin Five-Cheese Bake', dish_id: 3},
        {recipeName: 'Baked Homemade Macaroni and Cheese', dish_id: 3},
        {recipeName: 'Daves Pepperoni Pizza', dish_id: 5},
      ]);
    });
};