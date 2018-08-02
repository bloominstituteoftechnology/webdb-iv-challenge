exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments();

        table
        .string('name', 256)
        .notNullable();

        table.string('quantity');

        table
        .integer('recipe_id')
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
