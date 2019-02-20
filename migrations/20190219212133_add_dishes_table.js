
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        tbl.increments();
        tbl.string("dish_name").notNullable().unique()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
