exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    // primary key
    tbl.increments();
    // name field
    tbl.string('name', 255).notNullable();
    // quantity
    tbl.float('quantity');
  });
};

exports.down = function(knex, Promise) {};
