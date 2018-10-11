exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del() //delete records from table
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { name: "burgers"},
        { name: "pizza"},
        { name: "tacos"}
      ]);
    });
};


