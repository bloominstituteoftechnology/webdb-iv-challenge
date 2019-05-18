
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl) {
        tbl.increments('id');
        tbl.string('Instructions', 524);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};
