

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, Name: "flour" }, 
        { id: 2, Name: "eggs" }, 
        { id: 3, Name: "noodles" },
        { id: 4, Name: "chocolate" }]);
    });
};
