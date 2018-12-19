exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Italian Pizza", dishId: 1 }, // 1
        { name: "New York Pizza", dishId: 1 }, // 2
        { name: "Italian spaghetti", dishId: 2 }, // 3
        { name: "Vegetarian spaghetti", dishId: 2 }, // 4
        { name: "Minestone soup", dishId: 3 }, // 5
        { name: "Corn chowder", dishId: 3 }, // 6
        { name: "Chicken burger", dishId: 4 }, // 7
        { name: "Turkey burger", dishId: 4 } // 8
      ]);
    });
};
