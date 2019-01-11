const dbConfig = require('./knexfile');
const knex = require('knex');
const db = knex(dbConfig.development);
module.exports  =   {
    getDishes:  function()  {
        db('dishes')
        .then(rows   =>  {
            console.log(rows)
        })
    },
    addDish:    function(dish)  {
        db('dishes')
        .insert(dish)
        .then(ids   =>  (console.log({ id: ids[0] })))
    },
    getDish:    function(id)    {
        db('dishes')
        .where('id', id)
        .then(dish  =>  (console.log(dish)))

    },
    getRecipes: function()  {
        db('recipes')
        .then(recipes   =>  {
            console.log(recipes)
        })
    },
    addRecipe:  function(recipe)  {
        db('recipes')
        .insert(recipe)
        .then(ids   =>  (console.log({ id: ids[0]})));
    },
    shoppingList:   function(recipe)    {
        db('recipes')
        .select('recipes.ingredient', 'recipes.quantity', 'recipes.unit')
        .where('recipes.name', recipe)
        .leftJoin('dishes', 'dishes.id', 'dish_id')
        .then(info  =>  {
            console.log(`${recipe}:`);
            info.forEach((obj)  =>  {
                console.log(`   ${obj.ingredient}: ${obj.quantity} ${obj.unit},`);
            });
        });
    }
}
