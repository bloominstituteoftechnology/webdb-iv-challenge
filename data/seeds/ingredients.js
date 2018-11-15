exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { recipe_id: 1, quantity: 1, name: "flour" },
        { recipe_id: 1, quantity: 3, name: "tomatoes" },
        { recipe_id: 1, quantity: 1, name: "pepperoni" },
        { recipe_id: 1, quantity: 1, name: "water" },
        { recipe_id: 1, quantity: 2, name: "cheese" }
      ]);
    });
};
