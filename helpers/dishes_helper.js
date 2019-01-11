//houses the helper methods for dishes
const knex = require("knex");
const dbConfig = require("../knexfile.js");
const db = knex(dbConfig.development);

//functions to be exported
module.exports = {
   getDishes,
   addDish,
   getDish,
}

//get all dishes
function getDishes() {
   return db("dishes")
}

/*add a new dish
   return id of new dish
*/
function addDish(dish) {
   return db("dishes")
      .insert(dish)
      .then(ids => ({id: ids[0]}));
}

/*get dish by id
   grab the child (recipe)
   join child to parent (dishes)
   return the related recipes to said dish id
*/
function getDish(id) {
   return db("recipes as r")
      .join("dishes as d", "d.id", "r.dish_id")
      .select("d.dish_name", "r.recipe_name", "r.dish_id")
      .where("r.dish_id", id)
}