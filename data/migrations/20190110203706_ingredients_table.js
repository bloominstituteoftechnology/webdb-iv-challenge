
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients_table', table => {
        table.increments();
        table.string('ingredient_name').notNullable();
        table.float('quantity').notNullable();
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').on('recipes_table');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients_table');
};
