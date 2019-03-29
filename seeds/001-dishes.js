exports.seed = function(knex, Promise) {
    return knex("dishes").insert([
      { name: "Calzone" }, 
      { name: "Burrito" }, 
      { name: "Cake" }, 
      { name: "Salad" } 
    ]);
  };