exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.integer('recipe_id').unsigned()
      tbl
        .foreign('recipe_id')
        .references('id')
        .on('recipes')
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
  }
  