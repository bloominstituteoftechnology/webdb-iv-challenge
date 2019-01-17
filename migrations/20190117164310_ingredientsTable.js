
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.timestamps(true, true);
        tbl.unique('name', 'uq_ingredients_name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
