exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { recipe_id: 1, quantity: 4, measure: "large", name: "Baking Potatos" },
        { recipe_id: 1, quantity: 2, measure: "cup(s)", name: "Cheese mix" },
        { recipe_id: 1, quantity: 1, measure: "cup(s)", name: "Milk" },
        { recipe_id: 1, quantity: 8, measure: "ounces", name: "Cream cheese" }
      ]);
    });
};
