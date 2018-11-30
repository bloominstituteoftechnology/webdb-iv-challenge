exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 240).notNullable();
      tbl
      .integer("dishes_id")
      .references("id")
      .inTable("dishes")
      tbl.boolean("completed")
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipes");
  };