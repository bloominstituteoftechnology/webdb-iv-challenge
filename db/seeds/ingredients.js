exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Beef" },
        { name: "Chicken" },
        { name: "Bacon" },
        { name: "Tomato" },
        { name: "Egg" },
        { name: "Bread" },
        { name: "Lettuce" },
      ]);
    });
};