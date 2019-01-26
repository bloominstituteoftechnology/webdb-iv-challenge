exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('recipes')
  };