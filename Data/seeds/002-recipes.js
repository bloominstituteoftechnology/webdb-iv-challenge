
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "mom's soft tacos"},
        {name: "grilled chicken tacos"},
        {name: "steak tacos"},
        {name: "carnitas tacos"},
        {name: "pasta carbonara"},
        {name: "spaghetti and meatballs"},
        {name: "fettucine alfredo"},
        {name: "pasta salad"},
      ]);
    });
};
