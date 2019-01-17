exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("unit_measurement")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("unit_measurement").insert([
        { name: "Grams" },
        { name: "Teaspoons" },
        { name: "Cups" },
        { name: "Liters" },
        { name: "Pints" }
      ]);
    });
};
