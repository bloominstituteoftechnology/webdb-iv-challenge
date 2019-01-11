
exports.up = function (knex, Promise) {
    return knex.schema.createTable('qty', table => {
        table.increments();
        table.string('qty').notNullable().unique();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('qty');
};