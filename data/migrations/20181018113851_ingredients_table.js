
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments().primary();
        tbl.string('name', 255).notNullable();
        tbl.integer('recipe_id').references('id').inTable('recipes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
