
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.timestamps(true, true);
        tbl.unique('name', 'uq_dishes_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
