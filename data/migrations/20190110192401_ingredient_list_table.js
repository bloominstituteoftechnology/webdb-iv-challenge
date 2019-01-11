
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient_lists', table => {
        table.increments();
        table.float('ingredient_amount').unsigned();

        table.integer('ingredient_id').unsigned();
        table.foreign('ingredient_id').references('id').on('ingredients');
        table.integer('recipes_id').unsigned();
        table.foreign('recipes_id').references('id').on('recipes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients_list');
};
