
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instruction', tbl => {
        tbl.increments();
        tbl.string('name', 128);
        tbl.integer('step_number');
        tbl.string('instruction');
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instruction');
};
