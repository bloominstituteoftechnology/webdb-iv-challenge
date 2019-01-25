
exports.up = function(knex, Promise) {
 return knex.schema.table('recipes', table => {
  table.foreign('dish_id')
       .references('id')
       .on('dishes')
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('recipes', table => {
  table.dropColumn('dish_id')
 })
};
