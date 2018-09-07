
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: "Noodles"},
        {ingredient: "Frozen tortelli"},
        {ingredient: "Jar of pesto"}, 
        {ingredient: "Tomato pasta sauce"}, 
        {ingredient: "Frozen Meatballs"}, 
        {ingredient: "Hard Taco Shells"}, 
        {ingredient: "Mexican cheese blend"}
      ]);
    });
};
