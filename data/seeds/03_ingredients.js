exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "medium eggs", quantity: 4, recipe_id: 5 },
        { ingredient_name: "cup chopped ham", quantity: 0.25, recipe_id: 5 },
        { ingredient_name: "cup chopped ham", quantity: 0.5, recipe_id: 4 },
        {
          ingredient_name: "cup mozarella cheese",
          quantity: 1.5,
          recipe_id: 4
        },
        {
          ingredient_name: "cup chopped pineapple",
          quantity: 0.5,
          recipe_id: 4
        },
        { ingredient_name: "8 oz jar pizza sauce", quantity: 1, recipe_id: 4 },
        {
          ingredient_name: "cup mozarella cheese",
          quantity: 0.25,
          recipe_id: 5
        },
        { ingredient_name: "cup brown rice", quantity: 1, recipe_id: 3 },
        {
          ingredient_name: "12 oz can pinto beans",
          quantity: 0.25,
          recipe_id: 3
        },
        { ingredient_name: "cup water", quantity: 2, recipe_id: 3 },
        {
          ingredient_name: "8 oz jar Hollandaise sauce",
          quantity: 0.25,
          recipe_id: 2
        },
        { ingredient_name: "medium eggs", quantity: 2, recipe_id: 2 },
        { ingredient_name: "cups water", quantity: 3, recipe_id: 2 },
        {
          ingredient_name: "cups mozarella cheese",
          quantity: 1.5,
          recipe_id: 1
        },
        {
          ingredient_name: "8 oz can chopped tomoatoes",
          quantity: 1,
          recipe_id: 1
        },
        {
          ingredient_name: "cups chopped spinach",
          quantity: 0.25,
          recipe_id: 1
        }
      ]);
    });
};
