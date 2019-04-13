
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments();
        table.string('ingredient').notNullable().unique();
        table.float('qty').unsigned();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};