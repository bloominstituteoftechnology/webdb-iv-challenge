
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {Recipe_Id: 1, Step_Number: 1, Ingredient_Id: 1, quantity: 1, instructions: 'Get a tortilla' },
        {Recipe_Id: 1, Step_Number: 2, Ingredient_Id: 2, quantity: 4, instructions: 'put chicken in tortilla'},
        {Recipe_Id: 1, Step_Number: 3, Ingredient_Id: 4, quantity: 3, instructions: 'add cheese'},
        {Recipe_Id: 1, Step_Number: 4, Ingredient_Id: 5, quantity: 10, instructions: 'add pico'},
        {Recipe_Id: 2, Step_Number: 1, Ingredient_Id: 1, quantity: 1, instructions: 'get a tortilla' },
        {Recipe_Id: 2, Step_Number: 2, Ingredient_Id: 3, quantity: 4, instructions: 'add steak'},
        {Recipe_Id: 2, Step_Number: 3, Ingredient_Id: 4, quantity: 4, instructions: 'add cheese'},
        {Recipe_Id: 3, Step_Number: 1, Ingredient_Id: 6, quantity: 1, instructions: 'stretch dough flat'},
        {Recipe_Id: 3, Step_Number: 2, Ingredient_Id: 7, quantity: 2, instructions: 'spread marinara'},
        {Recipe_Id: 3, Step_Number: 3, Ingredient_Id: 4, quantity: 10, instructions: 'add lots of cheese'},
        {Recipe_Id: 3, Step_Number: 4, Ingredient_Id: 8, quantity: 30, instructions: 'add pepperoni'},
        {Recipe_Id: 4, Step_Number: 1, Ingredient_Id: 6, quantity: 1, instructions: 'get dough, thats it, Pizza hut sucks' },
        {Recipe_Id: 5, Step_Number: 1, Ingredient_Id: 10, quantity: 1, instructions: 'get 1 broth' },
        {Recipe_Id: 5, Step_Number: 2, Ingredient_Id: 9, quantity: 5, instructions: 'cook noodles, add to broth'},
        {Recipe_Id: 5, Step_Number: 3, Ingredient_Id: 11, quantity: 5, instructions: 'add mushrooms'},
      ]);
    });
};
