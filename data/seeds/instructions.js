exports.seed = knex =>
  knex("instructions")
    .truncate()
    .then(() =>
      knex("instructions").insert([
        { recipe_id: 1, step_number: 1, step: "make dough" },
        {
          recipe_id: 1,
          step_number: 2,
          step: "roll out dough into pizza shape"
        },
        { recipe_id: 1, step_number: 3, step: "put tomato sauce on dough" },
        { recipe_id: 1, step_number: 4, step: "put cheese on dough" },
        {
          recipe_id: 1,
          step_number: 5,
          step: "heat oven to the hottest temperature possible"
        },
        { recipe_id: 1, step_number: 6, step: "cook until desired doneness" }
      ])
    );
