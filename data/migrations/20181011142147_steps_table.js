exports.up = function(knex, Promise) {
  return knex.createTable("steps", tbl => {});
};

exports.down = function(knex, Promise) {};
