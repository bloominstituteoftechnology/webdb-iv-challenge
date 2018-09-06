exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "ChicagoStyle", dish_id: "1" },
        { name: "OverEasy", dish_id: "2" },
        { name: "SunnySideUp", dish_id: "2" },
        { name: "Scrambled", dish_id: "2" },
        { name: "Smotherd", dish_id: "3" },
        { name: "Dirty", dish_id: "3" },
        { name: "ThinCrust", dish_id: "1" },
        { name: "StLouis", dish_id: "1" },
      ]);
    });
};
