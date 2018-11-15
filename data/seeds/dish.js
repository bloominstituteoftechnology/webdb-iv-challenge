exports.seed = knex =>
  knex("dishes")
    .truncate()
    .then(() => knex("dishes").insert([{ name: "pizza" }, { name: "tacos" }]));
