
exports.up = function(knex, Promise) {
 return knex.schema.table('ingredients', table => {
  table.foreign('recipe_id')
       .references('id')
       .on('recipes')
 })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('ingredients', table => {
  table.dropColumn('recipe_id')
 })
};
