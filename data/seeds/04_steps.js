
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step: "Get a Tortilla",
          order: 1,
          recipe_ID: 1
        },
        {
          step: "Cook taco meat",
          order: 2,
          recipe_ID: 1
        },
        {
          step: "Gather Ingredients",
          order: 3,
          recipe_ID: 1
        },
        {
          step: "Assemble Taco",
          order: 4,
          recipe_ID: 1
        },
        {
          step: "Flatten the dough",
          order: 1,
          recipe_ID: 2
        },
        {
          step: "Apply the sauce",
          order: 2,
          recipe_ID: 2
        },
        {
          step: "Apply the cheese",
          order: 3,
          recipe_ID: 2
        },
        {
          step: "Apply the Pepperoni",
          order: 4,
          recipe_ID: 2
        },
        {
          step: "Put in 500degree oven for 5-7mins",
          order: 5,
          recipe_ID: 2
        },
      ]);
    });
};
