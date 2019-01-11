
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_steps_table', table => {
        table.increments();
        table.string('step').notNullable();
        table.integer('step_number').notNullable();
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').on('recipes_table');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_steps_table');
};
