
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl =>{
      tbl.increments();
      tbl.string('name', 128)
      .notNullable()
      .unique();

      tbl
          .integer("dish_id")
          .unsigned()
          .references("dishes.id"); 
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipes");
};
