const knex=require('knex');
const dbConfig=require('../knexfile.js');
const db= knex(dbConfig.development);

module.exports = {

getDishes:(function(){
return db.select('name').from('dishes')
}),
addDish:(function(dish){
return db('dishes').insert(dish).then(id=>id)
}),
getDish:(function(input){

return db('dishes').where({id:`${input}`}).then(rows=>rows.join('recipes', 'rows.id', '=', 'recipes.dish_id'))

}),
getRecipes:(function(){
return 
}),
addRecipe:(function(recipe){
return
}),
getShoppingList:(function(recipe){
return
}),




}