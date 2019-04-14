exports.seed = function(knex, Promise) {
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        { dishes_id: 1, name: "Snapper Sandwich" },
        { dishes_id: 1, name: "Snapper Pancakes" },
        { dishes_id: 2, name: "Chilean Ceral" },
        { dishes_id: 2, name: "Sea Bass Sundae" },
        { dishes_id: 2, name: "Pantagonian Lemonade" },
        { dishes_id: 3, name: "Mackerel Grilled Cheese" },
        { dishes_id: 3, name: "Mackerel ala Carte" },
        { dishes_id: 3, name: "The Boston Surprise" }
      ]);
    });
};
