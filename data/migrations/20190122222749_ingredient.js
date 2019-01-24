
exports.up = function(knex, Promise) {
 return knex.schema.createTable('ingredients', table => {
  table.increments()
  table.string('ingredient_name')
       .notNullable()
  table
       .integer('recipe_id')
       .unsigned()
       .references('id')

 })
};

exports.down = function(knex, Promise) {
  
};
