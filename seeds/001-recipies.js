exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipies").insert([
        { Name: "tex-mex" },
        { Name: "grandma" },
        { Name: "mama" }
      ]);
    });
};
