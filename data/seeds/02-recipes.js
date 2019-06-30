exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "Meat Lasagna",
          instructions: "1. Start Oven at 400 degrees. 2.Get the Pasta",
          ingredients: "ground beef, pasta, red sauce"
        },
        {
          name: "Vegetable Lasagna",
          instructions: "1. Start Oven at 400 degrees. 2.Get the vegetables",
          ingredients: "vegetables, pasta, red sauce"
        },
        {
          name: "Tacos Al Pastor",
          instructions:
            "1. Cut meat from trompo 2. Catch in tortilla 3. Add pineapple",
          ingredients: "meat, tortilla, pinapple, salsa"
        }
      ]);
    });
};