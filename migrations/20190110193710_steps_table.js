
exports.up = function(knex, Promise) {
    return knex.schema.createTable("steps", steps=>{
        steps.increments();
        steps.string('name',255).notNullable();
        steps
        .integer("instruction_id")
        .unsigned()
        .references("id")
        .inTable("instructions")
        .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('step')
};