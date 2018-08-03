exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { Name: "sauce" },
        { Name: "cheese" },
        { Name: "beef" },
        { Name: "flour" },
        { Name: "lettuce" },
        { Name: "tomato" },
        { Name: "onions" },
        { Name: "noodles" },
        { Name: "corn" },
        { Name: "avocados" },
        { Name: "sausage" },
        { Name: "pork" },
        { Name: "chicken" },
        { Name: "condiments" },
        { Name: "oil" }
      ]);
    });
};
