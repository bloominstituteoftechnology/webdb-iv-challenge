
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments();
        table.string('ingredient').notNullable().unique();
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').on('recipe');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};