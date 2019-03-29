
exports.seed = function(knex, Promise) {
    return knex("recipes").insert([
      { name: "Veggie Calzone", dish_id: 1 }, // 1
      { name: "Cheese Calzone", dish_id: 1 }, // 2
      { name: "Meat Calzone", dish_id: 1 }, // 3
      { name: "Cheese Burrito", dish_id: 2 }, // 4
      { name: "Bean Burrito", dish_id: 2 }, // 5
      { name: "Steak Burrito", dish_id: 2 }, // 6
      { name: "Chocolate Cake", dish_id: 3 }, // 7
      { name: "Angel Cake", dish_id: 3 }, // 8
      { name: "3-Layer Cake", dish_id: 3 }, // 9
      { name: "Veggie Burger", dish_id: 4 }, // 10
      { name: "Caesar Salad", dish_id: 4 }, // 11
      { name: "Cobb Salad", dish_id: 4 } // 12
    ]);
  };