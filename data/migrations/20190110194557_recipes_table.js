
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_table', table => {
        table.increments();
        table.string('recipe_name').notNullable();
        table.integer('dish_id').unsigned();
        table.foreign('dish_id').references('id').on('dishes_table');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_table');
};
