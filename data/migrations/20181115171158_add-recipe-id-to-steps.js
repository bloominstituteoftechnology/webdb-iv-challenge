exports.up = function(knex, Promise) {
  return knex.schema.table('steps', tbl => {
    // foreign key for meal
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipies');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('steps', tbl => {
    tbl.dropColumn('recipe_id');
  });
};
