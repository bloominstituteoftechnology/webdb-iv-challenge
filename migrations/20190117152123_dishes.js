
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function (tbl) {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
};
