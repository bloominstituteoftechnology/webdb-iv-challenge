exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("quantity")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("quantity").insert([
        {
          number_required: 3.5,
          unit_of_measure: "handfuls",
          recipe_id: "1",
          ingredient_id: "1",
        },
        {
          number_required: 5.1,
          unit_of_measure: "cups",
          recipe_id: "1",
          ingredient_id: "2",
        },
        {
          number_required: 1,
          unit_of_measure: "can",
          recipe_id: "1",
          ingredient_id: "3",
        },
        {
          number_required: 2,
          unit_of_measure: "entire",
          recipe_id: "2",
          ingredient_id: "4",
        },
        {
          number_required: 2,
          unit_of_measure: "dashes",
          recipe_id: "2",
          ingredient_id: "7",
        },
        {
          number_required: 1,
          unit_of_measure: "dashes",
          recipe_id: "2",
          ingredient_id: "8",
        },
      ]);
    });
};
