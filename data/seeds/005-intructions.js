exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { recipe_id: 1, order: 1, step_description: "Find meat" },
        { recipe_id: 1, order: 2, step_description: "Cook meat" },
        {
          recipe_id: 1,
          order: 3,
          step_description: "Throw meat into taco shells with rest of ingredients"
        },
        { recipe_id: 2, order: 3, step_description: "Throw raccoons into the tacos" },
        {
          recipe_id: 2,
          order: 2,
          step_description: "Find tacos somebody else already made"
        },
        { recipe_id: 2, order: 1, step_description: "Find racoons" },
        { recipe_id: 3, order: 1, step_description: "get ribs" },
        {
          recipe_id: 3,
          order: 2,
          step_description: "slow cook ribs over course of 2 weeks"
        },
        {
          recipe_id: 3,
          order: 3,
          step_description: "starve to death before you get to eat ribs"
        },
        { recipe_id: 4, order: 1, step_description: "find somebody else's pork ribs" },
        { recipe_id: 4, order: 2, step_description: "eat dem ribs" },
        { recipe_id: 5, order: 1, step_description: "get all ingredients for pizza" },
        {
          recipe_id: 5,
          order: 2,
          step_description: "frantically smash them into a rough oval shape"
        },
        {
          recipe_id: 5,
          order: 3,
          step_description:
            "throw the gooey mess into an oven at 425 degress for 30 minutes"
        },
        {
          recipe_id: 5,
          order: 4,
          step_description: "triumphantly eat what you think is pizza"
        }
      ]);
    });
};
