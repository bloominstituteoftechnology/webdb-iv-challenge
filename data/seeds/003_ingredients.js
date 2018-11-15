
exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .truncate()
    .then(function () {
      return knex("ingredients").insert([
        { name: 'pasta'},
        { name: 'garlic'},
        { name: 'alfredo'},
        { name: 'vodka sauce'},
        { name: 'chickpea'},
        { name: 'tortilla'},
        { name: 'jackfruit'},
        { name: 'butter'},
        { name: 'flour'},
        { name: 'pineapple'},
        { name: 'carrot'},
        { name: 'rum'},
      ]);
    });
};
