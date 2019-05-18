
exports.up = function(knex, Promise) {
    return knex.schema.createTable("steps", tbl => {
      tbl.increments();
      tbl.string('description', 511).notNullable();
      tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable("recipes");
      tbl.float('priority');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("steps");
  };
  