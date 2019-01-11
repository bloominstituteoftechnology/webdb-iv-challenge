exports.up = function(knex, Promise) {
    knex.schema.createTable('recipe_instructions', function (table) {
        table.increments('id');
        table.integer('order');
        table.string('instructions');
        table.foreign('dish_id').notNullable().references('id').on('dishes');
        table.foreign('recipe_id').notNullable().references('id').on('recipes');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('recipe_instructions');
};