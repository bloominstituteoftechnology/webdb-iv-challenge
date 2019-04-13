
exports.up = function (knex, Promise) {
    return knex.schema.createTable('steps', (steps) => {
        steps.increments();
        steps.string('step_info', 550).notNullable();
        steps.integer('step_seq').notNullable()
        steps.integer('recipe_id').unsigned()
        steps.foreign('recipe_id').references('id').on('recipes')
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("steps")
};
