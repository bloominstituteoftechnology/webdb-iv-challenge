exports.up = function(knex, Promise) {
    return knex.schema.createTable('measures', function(tbl) {
        tbl.increments();
        tbl.string('Unit', 64).notNullable();
        tbl.integer('quantity_id').unsigned().references('id').inTable('quantity');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('measures')
};