
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', tbl => {
      tbl.increment();
      tbl.string('name', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.DropTableIfExists('dish');
};
