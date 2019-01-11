
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', table   =>  {
        table.increments();
        table.integer('recipe_id').notNullable().unsigned();
        table.foreign('recipe_id').references('id').on('recipes');
        table.integer('step_number').unsigned();
        table.string('step_content').notNullable();
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};
