
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rec_ing_combo', function(tbl) {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .notNullable();

    tbl
      .integer('ingredient_id')
      .notNullable();

    tbl
      .float('amount')
      .notNullable()

    tbl
      .string('units')
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rec_ing_combo');
};
