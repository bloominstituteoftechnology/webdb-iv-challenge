    
exports.seed = function(knex, Promise) {
    return knex("ingredients").insert([
      { name: "block of cheese" }, 
      { name: "one dozen eggs" }, 
      { name: "bag of vegetables" }, 
      { name: "bag of sugar" } 
    ]);
  };