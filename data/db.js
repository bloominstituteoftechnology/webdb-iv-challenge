const knex=require('knex');
const knexConfig = require('../knexfile');
const db= knex(knexConfig.development);

module.exports={
    getDishes,
    // addDish,
    getDish,
    // getRecipes,
    // addRecipe
};
function getDishes(){
    return db.select('name')
            .from('dishes')
}
function getDish(id){
    return db.select('name')
            .from('dishes')
            .where({id:id})
}