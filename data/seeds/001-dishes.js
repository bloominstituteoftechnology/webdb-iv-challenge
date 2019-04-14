exports.seed = function(knex, Promise) {
  return knex("dishes")
    .truncate()
    .then(function() {
      return knex("dishes").insert([
        { name: "Red Snapper" },
        { name: "Pantagonian Toothfish" },
        { name: "Boston Mackerel" }
      ]);
    });
};
