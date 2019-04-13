
exports.seed = function(knex, Promise) {
  
  return knex('recipes').truncate()
    .then(function () {
      
      return knex('recipes').insert([
        {recipeName: "Martha Stewart Six Layer", dishid: 1},
        {recipeName: "Classic Benedict", dishid: 2},
        {recipeName: "Southwestern Benedict", dishid: 2},
        {recipeName: "Torchy's Traditional", dishid: 4},
        {recipeName: "Raspberry Thumbprints", dishid: 3},
        {recipeName: "Chocolate Drop", dishid: 3},
        {recipeName: "Pastor Street Taco", dishid: 4},
    ]);
    });
};
