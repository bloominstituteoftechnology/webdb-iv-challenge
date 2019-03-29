exports.seed = function(knex, Promise) {
    return knex("dishes").insert([
      { name: "Calzone" }, // 1
      { name: "Burrito" }, // 2
      { name: "Cake" }, // 3
      { name: "Salad" } // 4
    ]);
  };