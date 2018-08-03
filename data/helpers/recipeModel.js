const db = require("../db");
const mappers = require("../helpers/mappers");

module.exports = {
    getRecipes: function (id) {
        let query = db("recipes as r");

        if (id) {
            query.where("r.id", id).first();

            const promises = [
                query,
                this.getRecipesIngredients(id),
                this.getRecipesDirections(id)
            ];

            return Promise.all(promises).then(function (results) {
                let [recipe, ingredients, directions] = results;
                recipe.ingredients = ingredients;
                recipe.directions = directions;

                return mappers.recipeToBody(recipe);
            });
        }

        return query.then(recipes => {
            return recipes.map(recipe => mappers.recipeToBody(recipe));
        });
    },
    getRecipesIngredients: function (recipesId) {
        // return db("recipes_ingredients")
        //     .where("recipes_id", recipesId)
        //     .then(ingredients => ingredients.map(ingredient => mappers.ingredientToBody(ingredient)));
        // return db
        //     .select("name")
        //     .from("ingredients as i")
        //     .innerJoin('recipes_ingredients as r', 'i.id', '=', 'r.ingredients_id');
        return db
            .select("ingredients.name")
            .from("recipes_ingredients")
            .innerJoin("recipes", "recipes_ingredients.recipes_id", "=", "recipes.id")
            .innerJoin("ingredients", "recipes_ingredients.ingredients_id", "=", "ingredients.id")
            .where("recipes.id", recipesId);    
    },
    getRecipesDirections: function (recipesId) {
        // return db("recipes_directions")
        //     .where("recipes_id", recipesId)
        //     .then(directions => directions.map(direction => mappers.directionToBody(direction)));
        return db
            .select("directions.description")
            .from("recipes_directions")
            .innerJoin("recipes", "recipes_directions.recipes_id", "=", "recipes.id")
            .innerJoin("directions", "recipes_directions.directions_id", "=", "directions.id")
            .where("recipes.id", recipesId);
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
