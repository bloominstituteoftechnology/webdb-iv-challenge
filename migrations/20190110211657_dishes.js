
exports.up = function(knex, Promise) {
    // Build dishes up
    return knex.schema.createTable('dishes', table => {
        table.increments();
        table.string('dish_name').notNullable();
        table.string('recipe').notNullable();
    });
};

exports.down = function(knex, Promise) {
    // Tear it down
    return lnex.schema.dropTableIfExists('dishes');
};
