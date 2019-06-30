
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(tbl) {
      tbl.increments();
      tbl.string('recipe_name', 50).notNullable();
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('recipe') 
};
