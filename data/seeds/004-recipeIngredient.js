
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredient').insert([
        {recipe_id: 1 , ingredient_id :1 ,quantity : 1},
        {recipe_id: 1 , ingredient_id :2 ,quantity : 1},
        {recipe_id: 1 , ingredient_id : 3,quantity : 1},

        {recipe_id: 2, ingredient_id :1 ,quantity : 2},
        {recipe_id: 2, ingredient_id : 2,quantity : 2},
        {recipe_id: 2, ingredient_id : 3,quantity :2 },

        {recipe_id: 3 , ingredient_id :1 ,quantity : 3},
        {recipe_id: 3 , ingredient_id :3 ,quantity : 3},
        {recipe_id: 3 , ingredient_id :4 ,quantity : 3},

        {recipe_id: 4, ingredient_id : 1,quantity : 4},
        {recipe_id: 4, ingredient_id : 2,quantity : 4},
        {recipe_id: 4, ingredient_id : 4,quantity : 4},

        {recipe_id:5 , ingredient_id :2 ,quantity :5 },
        {recipe_id:5 , ingredient_id :3 ,quantity : 5},
        {recipe_id:5 , ingredient_id : 4,quantity :5 },
      ]);
    });
};