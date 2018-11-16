exports.up = function (knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments();
        tbl.string('step', 256);
        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
};