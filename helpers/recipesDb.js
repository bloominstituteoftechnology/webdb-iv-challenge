const db = require('../data/db');

module.exports = {
    getRecipes: function()  {
        let query = db('recipes');
       return query; 
    },

    // getRecipe: function(id) {
    //     let query = db('recipes as r');

    //     if (id) {
    //         query.join('dishes as d', 'r.dish_id', 'd.id')
    //         .select('d.name', 'r.name')
    //         .where('r.id', id)            

    //     }
    // },
    addRecipe: function(recipe) {
        return db('recipes')
        .insert(recipe)
        .then(ids => ({ id:ids[0] }))
    }
}