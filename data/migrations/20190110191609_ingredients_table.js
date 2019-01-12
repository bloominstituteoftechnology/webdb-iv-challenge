
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments();
        table.string('Ingredient_name').notNullable();
        table.float('amount');
        table.string('unit');
        table.integer('recipes_id').unsigned();
        table.foreign('recipes_id').references('id').on('recipes')

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
