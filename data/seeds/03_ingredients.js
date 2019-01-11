
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          ingredient: "Tortilla",
          ingredient_amount: 1,
          recipe_ID: 1
        },
        {
          ingredient: "Taco Meat",
          ingredient_amount: 1,
          recipe_ID: 1
        },
        {
          ingredient: "Cheese",
          ingredient_amount: 8,
          recipe_ID: 1
        },
        {
          ingredient: "Salsa",
          ingredient_amount: 1.5,
          recipe_ID: 1
        },
        {
          ingredient: "Sour Cream",
          ingredient_amount: 1.5,
          recipe_ID: 1
        },
        {
          ingredient: "Dough",
          ingredient_amount: 1,
          recipe_ID: 2
        },
        {
          ingredient: "Pizza Sauce",
          ingredient_amount: 1,
          recipe_ID: 2
        },
        {
          ingredient: "Cheese",
          ingredient_amount: 1,
          recipe_ID: 2
        },
        {
          ingredient: "Pepperoni",
          ingredient_amount: 1,
          recipe_ID: 2
        },
      ]);
    });
};
