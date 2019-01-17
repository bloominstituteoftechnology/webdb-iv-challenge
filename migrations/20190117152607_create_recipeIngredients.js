
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeIngredients', function(tbl) {
        tbl.increments();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipeIngredients');
};
