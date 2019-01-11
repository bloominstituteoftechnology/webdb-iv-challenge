exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Cheesy Mashed Potatos",
          dish_id: 3,
          instructions: JSON.stringify([
            "Peel potatoes and cut into 1/2 inch cubes",
            "Place potatoes in large pot. Bring pot to boil, then reduce heat and cover for about 20 minutes or until tinder",
            "Drain water from pot and use mixer to partially mix potaotes until slightly chunky",
            "Add cheese, milk, and cream cheese mix to mashed potatoes and continue with mixer until well blended.",
            "add salt and pepper, serve to taste."
          ])
        }
      ]);
    });
};
