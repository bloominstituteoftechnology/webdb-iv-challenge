exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { ingredients: "milk", instructions: "Pour milk" },
        { ingredients: "corn", instructions: "pop corn" },
        { ingredients: "flour", instructions: "water flour" }
      ]);
    });
};
