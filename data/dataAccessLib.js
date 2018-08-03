const db = require('./db');

const getDishes = () =>{
  db('dish')
    .then( d => {
      console.log('\n =======  GET DISHES  =======')
      console.table(d)  
      console.log('\n')
    })
    .catch(err => console.log(err))
}

const getRecipes = () =>{
  db('recipe')
    .then( r => {
      console.log('\n =======  GET RECIPES  =======')
      console.table(r)  
      console.log('\n')
    })
    .catch(err => console.log(err))
}

const getRecipe = (food_id, dish_id) =>{
  db('food as f')
    .select('d.name AS Dish', 'f.name as Category', 'a.name as Action', 'r.ingdnt_qty as Qty', 'i.name as Ingredient', 'a.temp as Temp', 'a.time as Time')
    .join('dish as d', 'f.id', 'd.food_id')
    .join('recipe as r', 'd.id', 'r.dish_id')
    .join('action as a', 'r.action_id', 'a.id')
    .join('ingdnt as i', 'r.ingdnt_id', 'i.id')
    .then( rById => {
      console.log('\n =======  GET RECIPE BY ID  =======')
      console.table(rById)  
      console.log('\n')
    })
    .catch(err => console.log(err))
}


module.exports = {
  getDishes,
  getRecipes,
  getRecipe
}
