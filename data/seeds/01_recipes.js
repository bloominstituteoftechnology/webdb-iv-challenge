exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "tex-mex", recipe_id: 1 },
        { name: "abuela's", recipe_id: 1 },
        { name: "ny-style", recipe_id: 2 },
        { name: "chicago-style", recipe_id: 2 },
        { name: "alfredo", recipe_id: 3 },
        { name: "marinara", recipe_id: 3 }
      ]);
    });
};
