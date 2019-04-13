
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, recipe_name: "Marty's 5-Alarm Chili"},
        {dish_id: 1, recipe_name: "Sweet Heat Turkey Chili"},
        {dish_id: 2, recipe_name: "Big Tex Burgers"},
        {dish_id: 2, recipe_name: "Sweet Chili Burgers"}
      ]);
    });
};
