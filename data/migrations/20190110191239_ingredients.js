
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments('id');
        table.string('ingredient').notNullable();
        table.integer('quantity');
        table.string('unit_of_measurement').notNullable();
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').on('recipe');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
