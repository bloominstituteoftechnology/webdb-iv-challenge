
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredientslists', tbl => {
        tbl.increments();
        tbl.integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients');
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('ingredientslists')
  };
  