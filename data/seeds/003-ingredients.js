exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {name: "cebolla"},
        {name: "cilantro"},
        {name: "cheese"},
        {name: "red sauce"},
        {name: "green sauce"},
        {name: "crema"},
        {name: "rice"},
        {name: "black beans"},
        {name: "pinto beans"}
      ]);
    });
};
