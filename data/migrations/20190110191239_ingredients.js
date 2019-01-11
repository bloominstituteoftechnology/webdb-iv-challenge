
exports.up = function(knex, Promise) {
    return knex.schema.createTable('', table => {
        table.increment('id');
        table.string('ingredient').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
