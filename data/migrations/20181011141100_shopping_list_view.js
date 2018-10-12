exports.up = function(knex, Promise) {
    return knex.raw('create view shopping_lists as SELECT recipes.name AS Recipe, ingredients.name AS Ingredient, recipe_ingredients.amount AS Amount, recipe_ingredients.unit AS Type FROM recipe_ingredients INNER JOIN ingredients ON ingredients.id = recipe_ingredients.ingredient INNER JOIN recipes ON recipes.id = recipe_ingredients.recipe');
};

exports.down = function(knex, Promise) {
    return knex.raw("drop view shopping_lists");
};
