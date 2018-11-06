exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "corn tortilla" },
        { name: "cheese" },
        { name: "churizo" },

        { name: "dough" },
        { name: "sauce" },
        { name: "pepporoni" },

        { name: "broth" },
        { name: "chicken" },
        { name: "noodles" },
        { name: "vegetables" }
      ]);
    });
};
