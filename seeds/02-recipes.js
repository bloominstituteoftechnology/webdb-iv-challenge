exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Carne Asada Tacos", dish_id: 1 }
        // { name: 1, dish_id: 2 },
        // { name: 1, dish_id: 3 }
      ]);
    });
};
