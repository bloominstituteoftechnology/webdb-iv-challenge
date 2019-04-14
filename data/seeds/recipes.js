exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "pepperoni pizza", dish_id: 1 },
        { name: "cheese pizza", dish_id: 1 },
        { name: "potato soup", dish_id: 2 }
      ]);
    });
};
