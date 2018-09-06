
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
