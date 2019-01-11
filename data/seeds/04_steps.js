exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          instruction: "do pizza-like stuff to this",
          order_no: 1,
          recipe_id: 1
        },
        {
          instruction: "put it in the oven at 350 degs",
          order_no: 2,
          recipe_id: 1
        },
        { instruction: "hardboil eggs in water", order_no: 1, recipe_id: 2 },
        { instruction: "peel and eat", order_no: 2, recipe_id: 2 },
        { instruction: "boil water and cook rice", order_no: 1, recipe_id: 3 },
        {
          instruction: "mix other ingredients into it",
          order_no: 2,
          recipe_id: 3
        },
        { instruction: "make a regular pizza", order_no: 1, recipe_id: 4 },
        {
          instruction: "add pineapple and ham to it",
          order_no: 2,
          recipe_id: 4
        },
        {
          instruction: "whisk eggs together in small bowl",
          order_no: 1,
          recipe_id: 5
        },
        {
          instruction: "do some other stuff and eat",
          order_no: 2,
          recipe_id: 5
        }
      ]);
    });
};
