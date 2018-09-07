exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Cheese" },
        { name: "Flour" },
        { name: "TomatoSauce" },
        { name: "Egg" },
        { name: "Tortilla" },
        { name: "Pepporoni" },
        { name: "Salt" },
        { name: "Pepper" },
      ]);
    });
};
