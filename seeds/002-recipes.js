
exports.seed = function(knex, Promise) {
    return knex("recipes").insert([
      { name: "Veggie Calzone", dish_id: 1 }, 
      { name: "Cheese Calzone", dish_id: 1 }, 
      { name: "Meat Calzone", dish_id: 1 }, 
      { name: "Cheese Burrito", dish_id: 2 }, 
      { name: "Bean Burrito", dish_id: 2 }, 
      { name: "Steak Burrito", dish_id: 2 }, 
      { name: "Chocolate Cake", dish_id: 3 }, 
      { name: "Angel Cake", dish_id: 3 }, 
      { name: "3-Layer Cake", dish_id: 3 }, 
      { name: "Veggie Burger", dish_id: 4 }, 
      { name: "Caesar Salad", dish_id: 4 }, 
      { name: "Cobb Salad", dish_id: 4 } 
    ]);
  };