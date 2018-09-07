exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", function(tbl) {
    tbl.increments();
    //recipe id
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
    //step - integer
    tbl
      .integer("step")
      .unsigned()
      .notNullable();
    //description - text
    tbl.string("descript", 500).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("instructions");
};
