exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Filet", dish_id: "3" },
        { name: "Prime Rib", dish_id: "3" },
        { name: "Bacon Cheeseburger", dish_id: "2" }
      ]);
    });
};
