exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { step: "Warm tortillas" },
        { step: "Spread marinara sauce on dough" },
        { step: "Sprinkle cheese on sauce" },
        { step: "Cut up produce" },
        { step: "Bring a pot of water to a boil" },
        { step: "Cook meat" }
      ]);
    });
};
