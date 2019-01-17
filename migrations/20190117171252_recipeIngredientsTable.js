
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeIngredients', function(tbl) {
        tbl.primary(["recipe_id", "ingredients_id"]);
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes');
        tbl.integer('ingredients_id').unsigned().references('id').inTable('ingredients');
        tbl.float('quantity').notNullable();
        tbl.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeIngredients');
};
