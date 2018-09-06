exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "tex-mex", dish_id: 1 },
        { name: "abuela's", dish_id: 1 },
        { name: "ny-style", dish_id: 2 },
        { name: "chicago-style", dish_id: 2 },
        { name: "alfredo", dish_id: 3 },
        { name: "marinara", dish_id: 3 }
      ]);
    });
};
