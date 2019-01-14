exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_instructions', function (table) {
        table.increments();
        table.integer('order');
        table.string('instructions');
        table.integer('recipe_id').unsigned().notNullable();
        table.foreign('recipe_id').references('id').on('recipes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_instructions');
};