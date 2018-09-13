
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { name: "Steak", dish_id: "1" },
        { name: "Eggs", dish_id: "2" },
        { name: "Burrito", dish_id: "3" },
      ]);
    });
};