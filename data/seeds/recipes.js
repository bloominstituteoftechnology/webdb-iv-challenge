exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Mom's Spagetti",
          dish_id: 1,
          instruction: "1) Be a mom. 2) Make spagetti. 3) Mom's spagetti."
        },
        {
          name: "Spaghetti Cacio e Pepe",
          dish_id: 1,
          instruction:
            "1) Make amazing food. 2) Post on SnapChat. 3) Mom's spagetti."
        }
      ]);
    });
};
