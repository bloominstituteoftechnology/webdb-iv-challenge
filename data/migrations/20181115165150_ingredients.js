
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('item', 256);
        tbl.string('measurement', 256);
        tbl.float('amount');
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes');
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('ingredients')
  };
  