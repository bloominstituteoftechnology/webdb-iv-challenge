exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "lb of tomatoes" },
        { name: "lb of noodles" },
        { name: "lb of cheese" },
        { name: "lb of ground beef" }
      ]);
    });
};
