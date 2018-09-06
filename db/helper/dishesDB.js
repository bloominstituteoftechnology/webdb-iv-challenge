const db = require('../dbConfig'); 

module.exports={
    getDishes: () => {
        return db('dishes');
      },
       addDish: (dish) => {
        return db('dishes').insert(dish);
      },
       getDish: (id) => {
        return db('dishes').where({ id });
      },
       getRecipes: () => {
        return db('recipes');
      },
       addRecipe: (recipe) => {
        return db('recipes').insert(recipe);
      },
    }