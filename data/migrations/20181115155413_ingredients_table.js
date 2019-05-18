
exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string('name', 255).unique().notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("ingredients");
  };
  