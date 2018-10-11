exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", function(tbl) {
    tbl.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish");
};
