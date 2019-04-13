
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeIngredients', function(tbl) {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes');
        tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredients');
        tbl.float('ingredient_quantity').notNullable();
        tbl.unique(['recipe_id', 'ingredient_id'], 'recipeIngredient_info');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeIngredients');
};
