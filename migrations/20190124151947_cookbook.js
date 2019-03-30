
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Dishes', function(tbl) {
    tbl.increments();

    tbl.string('name', 255)
    tbl.string('ingredient', 255)
    tbl.string('ingredient', 255)
    tbl.string('ingredient', 255)

  })
};

exports.down = function(knex, Promise) {

};
