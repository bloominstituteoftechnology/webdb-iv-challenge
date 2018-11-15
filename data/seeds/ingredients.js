exports.seed = knex =>
  knex("ingredients")
    .truncate()
    .then(() =>
      knex("ingredients").insert([
        { name: "flour" },
        { name: "water" },
        { name: "mozarella cheese" },
        { name: "yeast" },
        { name: "tomato sauce" },
        { name: "pepperoni slices" },
        { name: "lettuce" },
        { name: "shredded cheese" },
        { name: "beans" },
        { name: "taco sauce" },
        { name: "beef" }
      ])
    );
