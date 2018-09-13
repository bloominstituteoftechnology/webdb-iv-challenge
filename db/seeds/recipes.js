exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Porterhouse", dish_id: "1" },
        { name: "WayguFilet", dish_id: "1" },
        { name: "Ribeye", dish_id: "1" },
        { name: "OverEasy", dish_id: "2" },
        { name: "Scrambled", dish_id: "2" },
        { name: "Migas", dish_id: "2" },
        { name: "Blt", dish_id: "3" },
        { name: "SmokedChicken", dish_id: "3" },
      ]);
    });
};