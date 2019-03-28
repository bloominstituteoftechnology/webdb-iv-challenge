
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes_table', table => {
        table.increments();
        table.string('dish_name').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes_table');
};
