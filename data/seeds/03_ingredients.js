
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Flour tortilla'}, //1
        {ingredient_name: 'Steak'}, //2
        {ingredient_name: 'Onion'}, //3
        {ingredient_name: 'White cheese'}, //4
        {ingredient_name: 'Bend tostada'}, //5
        {ingredient_name: 'Ground beef'}, //6
        {ingredient_name: 'lettuce'}, //7
        {ingredient_name: 'Yellow cheese'}, //8
        {ingredient_name: 'Pizza dough base'}, //9
        {ingredient_name: 'Pepperoni'}, //10
        {ingredient_name: 'Bacon'}, //11
        {ingredient_name: 'Maruchan'}, //12
      ]);
    });
};
