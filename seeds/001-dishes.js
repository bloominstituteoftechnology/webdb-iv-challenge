exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { Name: "pizza" },
        { Name: "taco" },
        { Name: "pasta" },
        { Name: "burger" },
        { Name: "hotdog" }
      ]);
    });
};
