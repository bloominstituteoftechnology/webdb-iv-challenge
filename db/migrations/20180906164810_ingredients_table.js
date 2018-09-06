
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments();

        tbl.float('amount')
        .notNullable()
        .unsigned();

        tbl.string('units', 128)
        .notNullable();

        tbl.string('name', 128)
        .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
