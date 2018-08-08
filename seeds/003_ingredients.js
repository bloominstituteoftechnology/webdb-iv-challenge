exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Pepperoni", quantity: 1, dish_id: 1, recipe_id: 1 },
        {
          ingredient_name: "Tomato Sauce",
          quantity: 1,
          dish_id: 1,
          recipe_id: 2
        },
        { ingredient_name: "Bread", quantity: 1, dish_id: 1, recipe_id: 1 }
      ]);
    });
};
