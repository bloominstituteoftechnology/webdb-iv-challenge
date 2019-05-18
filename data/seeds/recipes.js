exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Carne Asada Burrito", dish_id: 1 },
        { name: "Bean Burrito", dish_id: 1 },
        { name: "Cheese Pizza", dish_id: 2 },
        { name: "Pepperoni Pizza", dish_id: 2 },
        { name: "Chocolate Chip Cookies", dish_id: 3 }
      ]);
    });
};
