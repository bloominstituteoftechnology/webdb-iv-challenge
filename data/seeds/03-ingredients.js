exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "tortillas", dish_id: 1 },
        { name: "chicken", dish_id: 1 },
        { name: "flour", dish_id: 2 },
        { name: "salsa", dish_id: 2 },
        { name: "mushrooms", dish_id: 3 },
        { name: "marinara sauce", dish_id: 3 },
        { name: "cheese", dish_id: 3 }
      ]);
    });
};
