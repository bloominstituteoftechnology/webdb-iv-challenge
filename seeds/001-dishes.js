exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { Name: "pizza", dishes_Id: 1 },
        { Name: "taco", dishes_Id: 2 },
        { Name: "pasta", dishes_Id: 3 }
      ]);
    });
};
