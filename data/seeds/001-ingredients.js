exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .del()
    .then(function() {
      return knex("ingredients").insert([
        { recipes_id: 1, name: "Red Snapper", quantity: 4.8 },
        { recipes_id: 1, name: "Bread", quantity: 2.0 },
        { recipes_id: 1, name: "Decorative Umbrella Toothpick", quantity: 1.0 },
        { recipes_id: 2, name: "Chilean Sea Bass", quantity: 1.0 },
        { recipes_id: 2, name: "Vanilla Ice Cream", quantity: 24.0 },
        { recipes_id: 2, name: "Valencia Lemon", quantity: 10.6 },
        { recipes_id: 3, name: "Heavy-Duty Ice Melt", quantity: 4.0 },
        { recipes_id: 3, name: "Gluten-Free Rainbow Sprinkles", quantity: 0.1 },
        { recipes_id: 3, name: "Chilean Flamingo Roe", quantity: 6.5 }
      ]);
    });
};
