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
        let id = query.select('r.dishId');
        return  db('recipes as r')
        .join('dishes as d', 'r.dishId', 'd.id')
        .select('r.recipe_name', 'd.dish')
        .where('d.id', id)

    },

    getRecipe: function(id) {
        let query = db('recipes as r')
        .join('dishes as d', 'r.dishId', 'd.id')
        .select('r.recipe_name', 'd.dish')
        .where('d.id', id)
        
        const promises = [query, this.getIngredients(id), this.getInstructions(id)]
    
        return Promise.all(promises).then(function(results) {
            let [recipes, dishes, ingredients, instructions] = results;
            let recipe = recipes[0];
            recipe.dish = dishes.dish
            recipe.ingredients = ingredients.map(ig => ig.ingredient);
            recipe.instructions = instructions.map(i => i.step)
        })
      
    },

    getIngredients: function() {
        let query = db('quantities as q');
        let id = query.select('q.measurementId');
        return query
        .join('ingredients as i', 'q.ingredientId', 'i.id')
        .join('measurements as m', 'm.id', 'q.ingredientsId')
        .select('q.amount', 'm.unit','i.ingredient')
        .where('q.ingredientId', 'i.id')
        .where('m.id', id)
    },

    getInstructions: function(id) {
        return db('instructions as i')
        .join('recipes as r', 'r.id', 'i.recipeId')
        .where('r.id', id)
    },

    addRecipe: function() {

    }

}

/* addDish: function(dish) {
        return db('dishes')
        .insert(dish)
        .then(ids => ({id: ids[0]}));
    },

    getRecipes: function() {
        let query = db('recipes as r');
        const promises = [query, this.getRelatedDish(id)]
        
        return Promise.all(promises).then(function(results) {
            let [recipes] = results;
            recipes.map(r => r.)
        })*/