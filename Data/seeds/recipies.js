exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Pepperoni Pizza", dishes_id: 1 },
        { name: "Chicken Tacos", dishes_id: 2 },
        { name: "Chocolate Brownies", dishes_id: 3 }
      ]);
    });
};