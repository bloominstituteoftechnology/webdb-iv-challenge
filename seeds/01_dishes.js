exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { id: 1, name: "garlic chicken" },
        { id: 2, name: "bacon wrapped jalapeno poppers" },
        { id: 3, name: "adobo pork" }
      ]);
    });
};
