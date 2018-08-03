exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipies").insert([
        { Name: "tex-mex_tacos", dishes_Id: 2 },
        { Name: "grandma_tacos", dishes_Id: 2 },
        { Name: "mama_pizza", dishes_Id: 1 },
        { Name: "papa_pasta", dishes_Id: 3 },
        { Name: "granda_pasta", dishes_Id: 3 },
        { Name: "auntie_burger", dishes_Id: 4 },
        { Name: "Chili_dog", dishes_Id: 5 },
        { Name: "Cali_dog", dishes_Id: 5 },
        { Name: "texas_dog", dishes_Id: 5 },
        { Name: "american_dog", dishes_Id: 5 }
      ]);
    });
};
