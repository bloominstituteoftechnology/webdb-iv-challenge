
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Dishes', function(tbl) {
    tbl.increments();

    tbl.string('name', 255)
  })
};

exports.down = function(knex, Promise) {

};
