const db = require('./data/dbHelpers');

db.getDishes()
  .then(dishes => {
    console.log('List of Dishes', dishes);
  }).catch(err => {
    console.log(err);
  });

db.getRecipes()
  .then(recipes => {
    console.log('List of Recipes', recipes);
  }).catch(err => {
    console.log(err);
  });

db.getDish(2)
  .then(dish => {
    console.log('List of selected dish w/ related recipes', dish);
  }).catch(err => {
    console.log(err);
  });
