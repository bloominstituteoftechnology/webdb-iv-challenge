
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeIngredients', function(tbl) {
        tbl.integer('recipeID').unsigned();
        tbl.foreign('recipeID').references('id').inTable('recipes');
        tbl.integer('ingredientsID').unsigned();
        tbl.foreign('ingredientsID').references('id').inTable('ingredients');
        tbl.float('quantity');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeIngredients');
};
