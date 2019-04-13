
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Cauliflower Pizza', dishId: 1},
        {name: 'Gluten Free Pizza Crust', dishId: 1},
        {name: 'Turkey Tacos', dishId: 2},
        {name: 'Vegetarian Tacos', dishId: 2},
        {name: 'Turkey Chili', dishId: 3},
        {name: 'Crock Pot Beef Chili', dishId: 3}
      ]);
    });
};
