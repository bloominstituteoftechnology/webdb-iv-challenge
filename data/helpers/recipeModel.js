const db = require("../db");
const mappers = require("../helpers/mappers");

module.exports = {
    getRecipes: function (id) {
        let query = db("recipes as r");

        if (id) {
            query.where("r.id", id).first();

            const promises = [query, this.getRecipeIngredients(id)];

            return Promise.all(promises).then(function (results) {
                let [recipe, ingredients] = results;
                recipe.ingredients = ingredients;

                return mappers.recipeToBody(recipe);
            });
        }

        return query.then(recipes => {
            return recipes.map(recipe => mappers.recipeToBody(recipe));
        });
    },
    getRecipeIngredients: function (recipeId) {
        return db("recipes_ingredients")
            .where("recipe_id", recipeId)
            .then(ingredients => ingredients.map(ingredient => mappers.ingredientToBody(ingredient)));
    },
    addDish: function (dish) {
        return db("dishes")
            .insert(dish)
            .then(([id]) => this.get(id));
    },
    update: function (id, changes) {
        return db("users")
            .where("id", id)
            .update(changes)
            .then(count => (count > 0 ? this.get(id) : null));
    },
    remove: function (id) {
        return db("users")
            .where("id", id)
            .del();
    }
};
