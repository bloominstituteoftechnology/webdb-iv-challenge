exports.up = function(knex, Promise) {
    knex.schema.createTable('ingredient_applications', function (table) {
        table.increments('id');
        table.float('qty');
        table.enu('uom', ['g', 'tbsp', 'tsp', 'cup', 'oz', 'fl oz', 'gal', 'l', 'lb']);
        table.foreign('ingredient_id').notNullable().references('id').on('ingredients');
        table.foreign('recipe_instruction_id').notNullable().references('id').on('recipe_instructions');
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('ingredients_applications');
};