    
exports.seed = function(knex, Promise) {
    return knex("ingredients").insert([
      { name: "block of cheese" }, // 1
      { name: "one dozen eggs" }, // 2
      { name: "bag of vegetables" }, // 3
      { name: "bag of sugar" } // 4
    ]);
  };