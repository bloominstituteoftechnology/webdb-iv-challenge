const db = require('../db');

module.exports = {
    getRecipes: () => {
        return db('recipes');
    },
    getRecipe: id => {
        let query = db('recipes as r').select('d.name as Dish', 'r.name as Recipe').join('dishes as d', 'd.id', 'r.dish_id').where('r.id', id).first();

        const promises = [query, db('ingredients').where('recipe_id', id)];

        return Promise.all(promises).then(results => {
            if (results[1].length > 0) {
                let [recipe, ingredients] = results;
                recipe.ingredients = ingredients.map(i => {
                    return { ingredient: i.name, quantity: i.quantity}
                });

                return recipe;
            }
            return results[0];
        })
    }
}