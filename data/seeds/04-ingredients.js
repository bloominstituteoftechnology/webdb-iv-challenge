exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "chicken" }, //1
        { ingredient_name: "oil" }, //2
        { ingredient_name: "onions" }, //3
        { ingredient_name: "skinless tomato" }, //4
        { ingredient_name: "lamb loin" }, //5
        { ingredient_name: "plain flour" }, //6
        { ingredient_name: "water" } //7
      ]);
    });
};
