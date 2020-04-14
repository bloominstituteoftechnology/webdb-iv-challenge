
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name:'flank steak', recipeId: 1, quantity: 3, unit: 'lb(s)'},
        {name:'spices', recipeId: 1, quantity: 1, unit: 'teaspoon'},
        
        {name:'pork shoulder', recipeId: 2, quantity: 10, unit: 'lb(s)'},
        {name:'yogurt', recipeId: 2, quantity: 1, unit: 'cup'},        
        {name:'achiote spices', recipeId: 2, quantity: 5, unit: 'tablespoons'},

        {name:'portobello mushrooms', recipeId:3, quantity: 40, unit: 'grams'},
        {name:'balsamic vinegar', recipeId:3, quantity: 2, unit: 'fluid ounces'},
        {name:'queso fresco', recipeId:3, quantity: 2, unit: 'tablespoon'},

      ]);
    });
};
