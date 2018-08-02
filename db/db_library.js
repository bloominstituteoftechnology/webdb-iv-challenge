const db = require('./db');

module.exports = {
    getDishes: function() {
        return db('dishes as d').select('d.dish');
    },

    getDish: function(id) {
        let query = db('dishes as d');
        if(id) {
            query.select('d.dish')
            .where('d.id', id)
        
       const promises = [query, this.getRelatedRecipes(id)]

        return Promise.all(promises).then(function(results) {
            let [dishes, recipes] = results;
            let dish = dishes[0];
            dish.recipes = recipes.map(r => r.recipe_name);
    
            return dish;
        })}
    },

    getRelatedRecipes: function(id) {
        return db('recipes as r')
        .join('dishes as d', 'd.id', 'r.dishId')
        .select('d.dish', 'r.recipe_name')
        .where('r.dishId', id)
    },

    addDish: function(dish) {
        return db('dishes')
        .insert(dish)
        .then(ids => ({id: ids[0]}));
    },

    getRecipes: function() {
        let query = db('recipes as r');
        let id = query.select('r.id');
        return  db('recipes as r')
        .join('dishes as d', 'r.dishId', 'd.id')
        .select('r.recipe_name', 'd.dish')
        .where('d.id', 'r.dishId')

    },

    getRecipe: function(id) {
        let query = db('recipes as r');
        if(id) {
            query.select('r.recipe_name')
            .where('r.id', id);
        };
        return query.join('dishes as d', 'r.dishId', 'd.id')
        .select('r.recipe_name', 'd.dish')
        .where('d.id', id)
      
    },

    addRecipe: function() {

    }

}

