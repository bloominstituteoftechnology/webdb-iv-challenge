exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient_applications', function (table) {
        table.increments();
        table.float('qty');
        table.enu('uom', ['g', 'tbsp', 'tsp', 'cup', 'oz', 'fl oz', 'gal', 'l', 'lb']);
        table.integer('ingredient_id').unsigned().notNullable();
        table.foreign('ingredient_id').references('id').on('ingredients');
        table.integer('recipe_instruction_id').unsigned().notNullable();
        table.foreign('recipe_instruction_id').references('id').on('recipe_instructions');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient_applications');
};