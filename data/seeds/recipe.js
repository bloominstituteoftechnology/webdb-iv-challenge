exports.seed = knex =>
  knex("recipes")
    .truncate()
    .then(() =>
      knex("recipes").insert([
        { name: "cheese pizza", dish_id: 1 },
        { name: "pepperoni pizza", dish_id: 1 },
        { name: "tex-mex", dish_id: 2 },
        { name: "granny's", dish_id: 2 }
      ])
    );
