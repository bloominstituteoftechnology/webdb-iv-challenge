
exports.up = function (knex, Promise) {
    return knex.schema.createTable('directions', function (tbl) {
        tbl.increments();

        tbl.string('name', 128).notNullable().unique()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('directions')
};
