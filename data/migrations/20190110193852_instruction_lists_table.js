
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instruction_lists', table => {
    table.increments();
    table.integer('instruction_step').notNullable();
    table.string('instructions').notNullable();

    table.integer('recipe_id').unsigned();
    table.foreign('recipe_id').references('id').on('recipes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instruction_lists');
};
