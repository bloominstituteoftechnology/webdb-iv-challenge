exports.up = function(knex, Promise) {
    return knex.schema.createTable('quantities', function(tbl) {
        tbl.increments();
        tbl.integer('quantity').notNullable();
     })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('quantities')
};