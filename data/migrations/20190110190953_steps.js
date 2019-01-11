
exports.up = function (knex, Promise) {
    return knex.schema.createTable('steps', table => {
        table.increments('id');
        table.string('step').notNullable();
        table.integer('step_number');
        table.foreign('ingredient_id').references('id').on('ingredient');
        table.foreign('recipe_id').references('id').on('recipe');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};
