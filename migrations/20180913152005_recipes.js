exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){

    tbl
    .increments();

    tbl
    .string('name', 128)
    .notNullable()
    .defaultTo('not provided');

    tbl
    .increments();


});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
};