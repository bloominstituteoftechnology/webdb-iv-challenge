
exports.up = function(knex, Promise) {
 return knex.schema.table('dishes', table => {
  table.dropColumn('recipe')
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('dishes', table => {
  table.string('recipe')
 })
};
