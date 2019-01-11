
exports.up = function (knex, Promise) {
    return knex.schema.createTable('steps', table => {
        table.increments();
        table.string('step').notNullable();
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').on('recipe');
        table.string('ingredient_id').unsigned();
        table.foreign('ingredient_id').references('id').on('ingredients');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};