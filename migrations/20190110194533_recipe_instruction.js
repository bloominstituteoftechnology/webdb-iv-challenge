
exports.up = function(knex, Promise) {
    knex.schema.createTable('recipe_instructions', function (table) {
        table.increments('id');
        table.float('qty');
        table.string('instructions');
        table.enu('uom', ['g', 'tbsp', 'tsp', 'cup', 'oz', 'fl oz', 'gal', 'l', 'lb']);
        table.integer('order');
        table.foreign('dish_id').notNullable().references('id').on('dishes');
        table.foreign('ingredient_id').notNullable().references('id').on('ingredients');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('recipe_instructions');
};