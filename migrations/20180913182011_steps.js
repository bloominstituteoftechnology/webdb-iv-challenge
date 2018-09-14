exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl){

    tbl
    .increments();

    tbl
    .integer('step_order')

    tbl
    .string('description')

    tbl
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .reference('id')
    .inTable('recipes')
    




});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('steps');
};