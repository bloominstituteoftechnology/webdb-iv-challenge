
exports.up = function(knex, Promise) {
    knex.schema.createTable('dishes', function (table) {
        table.increments('id');
        table.string('name').notNullable();
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('dishes');
};
