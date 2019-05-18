
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: "tortillas"},
        {name: "chicken"},
        {name: "steak"},
        {name: "pork"},
        {name: "salsa"},
        {name: "sour cream"},
        {name: "cheese"},
        {name: "pasta"},
        {name: "eggs"},
        {name: "parsley"},
        {name: "pancetta"},
        {name: "ground beef"},
        {name: "pasta sauce"},
        {name: "onions"},
        {name: "breadcrumbs"},
        {name: "cream"},
        {name: "tomatoes"},
        {name: "spinach"},
        {name: "dressing"},
        {name: "basil"},
      ]);
    });
};
