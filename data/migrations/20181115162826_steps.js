exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', tbl => {
    // primary key
    tbl.increments();
    // step field
    tbl.text('step', 255).notNullable();
    // order
    tbl.integer('order');
  });
};

exports.down = function(knex, Promise) {};
