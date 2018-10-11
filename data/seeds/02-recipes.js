exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Meatball", dish_id: 2 },
        { name: "Cheese", dish_id: 2 },
        { name: "Pepperoni", dish_id: 2 }
      ]);
    });
};
