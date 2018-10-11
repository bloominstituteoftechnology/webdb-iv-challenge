
exports.up = function(knex, Promise) {
  return knex.schema.createTable("steps", function(table) {

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("steps");
};
