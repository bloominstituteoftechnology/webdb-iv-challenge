exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    // primary key
    tbl.increments();
    // name field
    tbl.string('name', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {};
