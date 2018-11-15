
exports.seed = function(knex, Promise) {
  return knex("recipes")
    .truncate()
    .then(function () {
      return knex("recipes").insert([
        { dish_id: 1, name: 'aglio e olio'},
        { dish_id: 1, name: 'alfredo'},
        { dish_id: 1, name: 'alla vodka'},
        { dish_id: 2, name: 'chickpea taco'},
        { dish_id: 2, name: 'jackfruit taco'},
        { dish_id: 3, name: 'pineapple updsidedown cake'},
        { dish_id: 3, name: 'carrot cake'},
        { dish_id: 3, name: 'rum cake'}
      ]);
    });
};
