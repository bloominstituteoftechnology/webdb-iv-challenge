exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("quantity")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("quantity").insert([
        {
          number_required: 1, 
          unit_of_measure: "whole",
          recipe_id: "1",
          ingredient_id: "1", // beef
        },
        {
          number_required: 3, 
          unit_of_measure: "whole",
          recipe_id: "2",
          ingredient_id: "5", // egg
        },
      ]);
    });
};