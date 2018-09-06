
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "Pesto Tortellini", dishId: 2 },
        {recipe_name: "Spaghetti and Meatballs", dishId: 2},
        {recipe_name: "Margerita Pizza", dishId: 1}, 
        {recipe_name: "Tex-Mex Tacos", dishId: 3}, 
        {recipe_name: "Alfredo Pasta with Chicken", dishId: 2}, 
        {recipe_name: "Fajita Seasoned Tacos", dishId: 3 },
        {recipe_name: "Sicilian Deep Dish Pizza", dishId: 1}
      ]);
    });
};
